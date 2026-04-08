"use client";

import { useState } from "react";
import EmailSignatureGenerator from "./EmailSignatureGenerator";
import SetupGuideModal from "./SetupGuideModal";

export default function EmailSignatureSection() {
  const [guideOpen, setGuideOpen] = useState(false);

  return (
    <>
      <EmailSignatureGenerator onOpenGuide={() => setGuideOpen(true)} />
      <SetupGuideModal open={guideOpen} onClose={() => setGuideOpen(false)} />
    </>
  );
}
