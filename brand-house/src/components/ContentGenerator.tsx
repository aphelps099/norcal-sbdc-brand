"use client";

import { useState, useRef } from "react";
import { CONTENT_FORMATS, type ContentFormat } from "@/lib/content-formats";

type Phase = "select" | "answer" | "generating" | "done";

export default function ContentGenerator() {
  const [phase, setPhase] = useState<Phase>("select");
  const [selectedFormat, setSelectedFormat] = useState<ContentFormat | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const outputRef = useRef<HTMLDivElement>(null);

  const handleSelectFormat = (format: ContentFormat) => {
    setSelectedFormat(format);
    setAnswers({});
    setOutput("");
    setError("");
    setPhase("answer");
  };

  const handleBack = () => {
    setPhase("select");
    setSelectedFormat(null);
    setAnswers({});
    setOutput("");
    setError("");
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
    setPhase("generating");

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
        setPhase("done");
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

      setPhase("done");
    } catch {
      setOutput("[Error generating content. Please try again.]");
      setPhase("done");
    }
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      {/* ── Format Selection ── */}
      {phase === "select" && (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {CONTENT_FORMATS.map((format) => (
              <button
                key={format.id}
                onClick={() => handleSelectFormat(format)}
                className="text-left p-5 border border-black/[0.06] hover:border-royal/30 hover:bg-royal/[0.02] transition-colors duration-200"
              >
                <p
                  className="text-navy text-[15px] mb-1"
                  style={{ fontFamily: "var(--sans)", fontWeight: 500 }}
                >
                  {format.label}
                </p>
                <p className="text-navy/40 text-[13px] font-sans leading-relaxed">
                  {format.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── Clarifying Questions ── */}
      {phase === "answer" && selectedFormat && (
        <div>
          <button
            onClick={handleBack}
            className="font-label text-[10px] uppercase tracking-[0.14em] text-navy/30 hover:text-navy/60 transition-colors mb-6 block"
          >
            ← Back to formats
          </button>

          <p
            className="text-navy text-[20px] tracking-[-0.02em] mb-8"
            style={{ fontFamily: "var(--sans)", fontWeight: 500 }}
          >
            {selectedFormat.label}
          </p>

          <div className="space-y-5 max-w-lg">
            {selectedFormat.questions.map((q) => (
              <div key={q.id}>
                <label className="font-label text-[10px] uppercase tracking-[0.14em] text-navy/40 block mb-2">
                  {q.label}
                  {q.required && <span className="text-[#A73B44] ml-1">*</span>}
                </label>
                {q.type === "select" && q.options ? (
                  <div className="flex flex-wrap gap-2">
                    {q.options.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => setAnswers((a) => ({ ...a, [q.id]: opt }))}
                        className={`px-4 py-2 text-[13px] font-sans border transition-colors ${
                          answers[q.id] === opt
                            ? "border-royal bg-royal/[0.06] text-royal"
                            : "border-black/[0.08] text-navy/60 hover:border-navy/20"
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
                    className="w-full px-4 py-3 border border-black/[0.08] text-navy text-[14px] font-sans placeholder:text-navy/25 focus:outline-none focus:border-royal/40 transition-colors resize-none"
                  />
                ) : (
                  <input
                    type="text"
                    value={answers[q.id] || ""}
                    onChange={(e) => setAnswers((a) => ({ ...a, [q.id]: e.target.value }))}
                    placeholder={q.placeholder}
                    className="w-full px-4 py-3 border border-black/[0.08] text-navy text-[14px] font-sans placeholder:text-navy/25 focus:outline-none focus:border-royal/40 transition-colors"
                  />
                )}
              </div>
            ))}
          </div>

          {error && (
            <p className="mt-4 text-[#A73B44] text-[13px] font-sans">{error}</p>
          )}

          <button
            onClick={handleGenerate}
            className="mt-8 px-8 py-3 bg-[#004290] text-white text-[14px] font-sans tracking-[0.01em] hover:bg-[#003574] transition-colors"
            style={{ fontWeight: 500 }}
          >
            Generate
          </button>
        </div>
      )}

      {/* ── Streaming Output ── */}
      {(phase === "generating" || phase === "done") && selectedFormat && (
        <div>
          <button
            onClick={handleBack}
            className="font-label text-[10px] uppercase tracking-[0.14em] text-navy/30 hover:text-navy/60 transition-colors mb-6 block"
          >
            ← New format
          </button>

          <div
            ref={outputRef}
            className="relative border border-black/[0.04] bg-[#f7f7f5] min-h-[240px] flex flex-col"
          >
            {/* Header bar */}
            <div className="px-6 md:px-8 pt-5 pb-3 border-b border-black/[0.04]">
              <p className="font-label text-[10px] uppercase tracking-[0.14em] text-navy/25">
                {selectedFormat.label}
              </p>
            </div>

            {/* Content area */}
            <div className="px-6 md:px-8 py-6 flex-1">
              {output ? (
                <div
                  className="text-navy/80 text-[15px] leading-[1.8] font-sans whitespace-pre-wrap"
                  style={{ fontWeight: 500 }}
                >
                  {output}
                </div>
              ) : (
                <div className="flex items-center gap-2 text-navy/25">
                  <span className="inline-block w-1.5 h-1.5 bg-navy/25 rounded-full animate-pulse" />
                  <span className="text-[13px] font-sans">Generating...</span>
                </div>
              )}
            </div>

            {/* Action bar — bottom right, inside the frame */}
            {phase === "done" && (
              <div className="px-6 md:px-8 py-3 border-t border-black/[0.04] flex items-center justify-end gap-2">
                <button
                  onClick={handleGenerate}
                  className="px-4 py-2 text-navy/40 text-[12px] font-label uppercase tracking-[0.1em] hover:text-navy/70 transition-colors"
                >
                  Regenerate
                </button>
                <button
                  onClick={handleCopy}
                  className="px-4 py-2 bg-[#004290] text-white text-[12px] font-label uppercase tracking-[0.1em] hover:bg-[#003574] transition-colors"
                >
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
