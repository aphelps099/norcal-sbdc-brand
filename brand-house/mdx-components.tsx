import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="font-sans text-4xl text-navy mb-6 tracking-[-0.01em]">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-sans text-2xl text-navy mt-14 mb-5 tracking-[-0.01em]">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-sans text-lg font-semibold text-navy mt-10 mb-3">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-text-secondary leading-[1.7] mb-5 font-sans">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-outside ml-5 text-text-secondary space-y-2 mb-5 font-sans">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-outside ml-5 text-text-secondary space-y-2 mb-5 font-sans">
        {children}
      </ol>
    ),
    hr: () => <hr className="border-black/[0.06] my-14" />,
    strong: ({ children }) => (
      <strong className="font-semibold text-navy">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="font-sans italic text-royal">{children}</em>
    ),
    code: ({ children }) => (
      <code className="font-mono text-sm bg-black/[0.03] text-navy px-1.5 py-0.5 rounded">
        {children}
      </code>
    ),
    ...components,
  };
}
