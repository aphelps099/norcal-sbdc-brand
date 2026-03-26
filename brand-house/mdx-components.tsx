import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="font-serif text-4xl font-bold text-cream mb-6">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-serif text-2xl font-bold text-cream mt-12 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-sans text-lg font-medium text-cream mt-8 mb-3">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-cream/70 leading-relaxed mb-4">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside text-cream/70 space-y-1 mb-4">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside text-cream/70 space-y-1 mb-4">
        {children}
      </ol>
    ),
    hr: () => <hr className="border-cream/10 my-12" />,
    strong: ({ children }) => (
      <strong className="font-medium text-cream">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="font-serif italic text-pool">{children}</em>
    ),
    code: ({ children }) => (
      <code className="font-mono text-sm bg-white/5 px-1.5 py-0.5 rounded">
        {children}
      </code>
    ),
    ...components,
  };
}
