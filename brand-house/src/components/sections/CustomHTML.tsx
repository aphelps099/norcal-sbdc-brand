"use client";

import type { CustomConfig } from "@/lib/section-types";

interface Props {
  config: CustomConfig;
}

export default function CustomHTML({ config }: Props) {
  return <div dangerouslySetInnerHTML={{ __html: config.html }} />;
}
