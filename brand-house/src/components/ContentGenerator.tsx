"use client";

import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { CONTENT_FORMATS, type ContentFormat } from "@/lib/content-formats";

export default function ContentGenerator() {
  // Open the first tab (Success Story) by default so the page doesn't feel empty.
  const [selectedFormat, setSelectedFormat] = useState<ContentFormat | null>(
    CONTENT_FORMATS[0] ?? null
  );
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [generating, setGenerating] = useState(false);
  // Track whether a tab click was user-initiated (so we only scroll on click,
  // not on initial mount with the default selection).
  const userInitiated = useRef(false);
  const tabsRef = useRef<HTMLDivElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  // Scroll the TABS (not the form) into view when a tab is clicked. The tabs
  // sit at the top of the tool so the user can see their selection + the form
  // below. scroll-margin-top on the tabs wrapper handles the fixed TopNav.
  useEffect(() => {
    if (userInitiated.current && selectedFormat && tabsRef.current) {
      tabsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [selectedFormat]);

  const handleSelectFormat = (format: ContentFormat) => {
    userInitiated.current = true;
    setSelectedFormat(format);
    setAnswers({});
    setOutput("");
    setError("");
    setGenerating(false);
  };

  const handleGenerate = async () => {
    if (!selectedFormat) return;

    const missing = selectedFormat.questions
      .filter((q) => q.required && !answers[q.id]?.trim())
      .map((q) => q.label);

    if (missing.length > 0) {
      setError(`Please fill in: ${missing.join(", ")}`);
      return;
    }

    setError("");
    setOutput("");
    setGenerating(true);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          format: selectedFormat.id,
          answers,
          platform: answers.platform || undefined,
        }),
      });

      if (!response.ok || !response.body) {
        setOutput("[Error: Could not reach the content generator. Please try again.]");
        setGenerating(false);
        return;
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let text = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        text += decoder.decode(value, { stream: true });
        setOutput(text);
      }

      setGenerating(false);
    } catch {
      setOutput("[Error generating content. Please try again.]");
      setGenerating(false);
    }
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      {/* ── M3-style Tabs ── */}
      {/* scroll-mt accounts for the fixed TopNav (~72px) + breathing room
          so the tabs don't hide under the nav when scrollIntoView fires. */}
      <div ref={tabsRef} className="relative mb-12 scroll-mt-[120px]">
        {/* Tab track line */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-navy/8" />

        <div className="flex overflow-x-auto no-scrollbar -mb-[1px]">
          {CONTENT_FORMATS.map((format) => {
            const isActive = selectedFormat?.id === format.id;
            return (
              <button
                key={format.id}
                onClick={() => handleSelectFormat(format)}
                className={`group relative px-5 py-3.5 text-[14px] font-sans whitespace-nowrap transition-colors duration-200 ${
                  isActive
                    ? "text-royal"
                    : "text-navy/45 hover:text-navy/75 hover:bg-navy/[0.03]"
                }`}
                style={{ fontWeight: 500 }}
              >
                {format.label}

                {/* Active indicator — 3px bottom bar */}
                <span
                  className={`absolute bottom-0 left-3 right-3 h-[3px] rounded-full transition-all duration-300 ease-out ${
                    isActive
                      ? "bg-royal scale-x-100"
                      : "bg-transparent scale-x-0 group-hover:bg-navy/15 group-hover:scale-x-100"
                  }`}
                />

                {/* Ripple-style hover bg */}
                <span
                  className={`absolute inset-x-1 inset-y-0.5 rounded-lg transition-colors duration-200 -z-10 ${
                    isActive ? "bg-royal/[0.06]" : "group-hover:bg-navy/[0.03]"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Form + Output (two-column, shown when a format is selected) ── */}
      {selectedFormat && (
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* ── Left: Form ── */}
            <div className="lg:col-span-5">
              <p
                className="text-navy text-[22px] tracking-[-0.02em] mb-8"
                style={{ fontFamily: "var(--sans)", fontWeight: 500 }}
              >
                {selectedFormat.label}
              </p>

              <div className="space-y-6">
                {selectedFormat.questions.map((q) => (
                  <div key={q.id}>
                    <label className="font-label text-[12px] uppercase tracking-[0.1em] text-navy/70 block mb-2">
                      {q.label}
                      {q.required && <span className="text-[#A73B44] ml-1">*</span>}
                    </label>
                    {q.type === "select" && q.options ? (
                      <div className="flex flex-wrap gap-2">
                        {q.options.map((opt) => (
                          <button
                            key={opt}
                            onClick={() => setAnswers((a) => ({ ...a, [q.id]: opt }))}
                            className={`px-4 py-2.5 text-[13px] font-sans border rounded-lg transition-all ${
                              answers[q.id] === opt
                                ? "border-royal bg-royal/10 text-royal shadow-sm"
                                : "border-navy/15 text-navy/70 hover:border-royal/40 hover:text-navy"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    ) : q.type === "textarea" ? (
                      <textarea
                        value={answers[q.id] || ""}
                        onChange={(e) => setAnswers((a) => ({ ...a, [q.id]: e.target.value }))}
                        placeholder={q.placeholder}
                        rows={3}
                        className="w-full px-4 py-3.5 border border-navy/20 rounded-lg text-navy text-[14px] font-sans placeholder:text-navy/40 focus:outline-none focus:border-royal focus:ring-2 focus:ring-royal/15 transition-all resize-none"
                      />
                    ) : (
                      <input
                        type="text"
                        value={answers[q.id] || ""}
                        onChange={(e) => setAnswers((a) => ({ ...a, [q.id]: e.target.value }))}
                        placeholder={q.placeholder}
                        className="w-full px-4 py-3.5 border border-navy/20 rounded-lg text-navy text-[14px] font-sans placeholder:text-navy/40 focus:outline-none focus:border-royal focus:ring-2 focus:ring-royal/15 transition-all"
                      />
                    )}
                  </div>
                ))}
              </div>

              {error && (
                <p className="mt-4 text-[#A73B44] text-[14px] font-sans">{error}</p>
              )}

              <button
                onClick={handleGenerate}
                disabled={generating}
                className="mt-8 px-8 py-3.5 bg-[#004290] text-white text-[14px] font-sans tracking-[0.01em] rounded-lg hover:bg-[#003574] hover:shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ fontWeight: 500 }}
              >
                {generating ? "Generating..." : output ? "Regenerate" : "Generate"}
              </button>
            </div>

            {/* ── Right: Output ── */}
            <div className="lg:col-span-7">
              <div
                ref={outputRef}
                className="relative border border-navy/25 rounded-xl bg-[#f7f7f5] min-h-[400px] flex flex-col overflow-hidden sticky top-8"
              >
                {/* Header bar */}
                <div className="px-6 md:px-8 pt-5 pb-3 border-b border-navy/15">
                  <p className="font-label text-[11px] uppercase tracking-[0.12em] text-navy/45">
                    {selectedFormat.label}
                  </p>
                </div>

                {/* Content area */}
                <div className="px-6 md:px-8 py-6 flex-1">
                  {output ? (
                    <div className="prose-brand text-navy/85 text-[15px] leading-[1.8] font-sans">
                      <ReactMarkdown
                        components={{
                          strong: ({ children }) => (
                            <strong className="font-semibold text-navy">{children}</strong>
                          ),
                          em: ({ children }) => (
                            <em className="italic">{children}</em>
                          ),
                          p: ({ children }) => (
                            <p className="mb-4 last:mb-0">{children}</p>
                          ),
                          ul: ({ children }) => (
                            <ul className="list-disc pl-5 mb-4 space-y-1">{children}</ul>
                          ),
                          ol: ({ children }) => (
                            <ol className="list-decimal pl-5 mb-4 space-y-1">{children}</ol>
                          ),
                          li: ({ children }) => (
                            <li className="text-navy/85">{children}</li>
                          ),
                          h1: ({ children }) => (
                            <p className="text-[20px] font-semibold text-navy mb-3" style={{ fontFamily: "var(--sans)" }}>{children}</p>
                          ),
                          h2: ({ children }) => (
                            <p className="text-[18px] font-semibold text-navy mb-2" style={{ fontFamily: "var(--sans)" }}>{children}</p>
                          ),
                          h3: ({ children }) => (
                            <p className="text-[16px] font-semibold text-navy mb-2" style={{ fontFamily: "var(--sans)" }}>{children}</p>
                          ),
                        }}
                      >
                        {output}
                      </ReactMarkdown>
                    </div>
                  ) : generating ? (
                    <div className="flex items-center gap-2.5 text-navy/40">
                      <span className="inline-block w-2 h-2 bg-royal/40 rounded-full animate-pulse" />
                      <span className="text-[13px] font-sans">Generating...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full min-h-[300px]">
                      <p className="text-navy/25 text-[14px] font-sans text-center">
                        Fill in the form and hit Generate<br />to see your content here.
                      </p>
                    </div>
                  )}
                </div>

                {/* Action bar */}
                {output && !generating && (
                  <div className="px-6 md:px-8 py-3 border-t border-navy/15 flex items-center justify-end gap-2">
                    <button
                      onClick={handleGenerate}
                      className="px-4 py-2 text-navy/55 text-[13px] font-sans rounded-lg hover:text-navy/80 hover:bg-navy/[0.04] transition-all"
                      style={{ fontWeight: 500 }}
                    >
                      Regenerate
                    </button>
                    <button
                      onClick={handleCopy}
                      className="px-5 py-2.5 bg-[#004290] text-white text-[13px] font-sans rounded-lg hover:bg-[#003574] transition-colors"
                      style={{ fontWeight: 500 }}
                    >
                      {copied ? "Copied" : "Copy"}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
