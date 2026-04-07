import Anthropic from "@anthropic-ai/sdk";
import { CONTENT_FORMATS } from "@/lib/content-formats";
import { buildSystemPrompt } from "@/lib/system-prompt";

/**
 * Fetch a URL and extract readable text content.
 * Returns empty string on failure — never blocks generation.
 */
async function fetchPageContent(url: string): Promise<string> {
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "NorCalSBDC-BrandHouse/1.0" },
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return "";
    const html = await res.text();

    // Strip scripts, styles, and HTML tags to get readable text
    const text = html
      .replace(/<script[\s\S]*?<\/script>/gi, "")
      .replace(/<style[\s\S]*?<\/style>/gi, "")
      .replace(/<nav[\s\S]*?<\/nav>/gi, "")
      .replace(/<footer[\s\S]*?<\/footer>/gi, "")
      .replace(/<header[\s\S]*?<\/header>/gi, "")
      .replace(/<[^>]+>/g, " ")
      .replace(/&nbsp;/g, " ")
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&#?\w+;/g, " ")
      .replace(/\s+/g, " ")
      .trim();

    // Limit to ~3000 chars to avoid blowing up the context
    return text.slice(0, 3000);
  } catch {
    return "";
  }
}

export async function POST(request: Request) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return new Response("ANTHROPIC_API_KEY not configured", { status: 500 });
  }

  let body: { format: string; answers: Record<string, string>; platform?: string };
  try {
    body = await request.json();
  } catch {
    return new Response("Invalid request body", { status: 400 });
  }

  const { format, answers, platform } = body;

  if (!CONTENT_FORMATS.some((f) => f.id === format)) {
    return new Response("Unknown content format", { status: 400 });
  }

  // If a link/URL was provided, fetch the page content
  let pageContent = "";
  const linkUrl = answers.link?.trim();
  if (linkUrl && (linkUrl.startsWith("http://") || linkUrl.startsWith("https://"))) {
    pageContent = await fetchPageContent(linkUrl);
  }

  const systemPrompt = buildSystemPrompt(format, platform);

  const formatDef = CONTENT_FORMATS.find((f) => f.id === format)!;
  const userMessage = Object.entries(answers)
    .filter(([, v]) => v.trim())
    .map(([key, value]) => {
      const question = formatDef.questions.find((q) => q.id === key);
      const label = question?.label || key;
      return `${label}: ${value}`;
    })
    .join("\n");

  const pageContext = pageContent
    ? `\n\n--- REFERENCE WEBPAGE CONTENT (extracted from the provided URL) ---\n${pageContent}\n--- END WEBPAGE CONTENT ---\n\nUse the webpage content above to extract relevant details (event title, date, time, location, description, speakers, registration info, etc.) and incorporate them into your output. The URL itself should be used as the link/CTA destination.`
    : "";

  const anthropic = new Anthropic({ apiKey });
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      try {
        const response = anthropic.messages.stream({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1500,
          system: systemPrompt,
          messages: [
            {
              role: "user",
              content: `Generate a ${formatDef.label} with the following details:\n\n${userMessage}${pageContext}`,
            },
          ],
        });

        for await (const event of response) {
          if (
            event.type === "content_block_delta" &&
            event.delta.type === "text_delta"
          ) {
            controller.enqueue(encoder.encode(event.delta.text));
          }
        }
        controller.close();
      } catch (err) {
        const msg =
          err instanceof Anthropic.APIError && err.status === 429
            ? "\n\n[Rate limited — please wait a moment and try again.]"
            : "\n\n[Error generating content. Please try again.]";
        controller.enqueue(encoder.encode(msg));
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
