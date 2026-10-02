import type { ReactNode } from "react";

export default function SectionIndex({ number, children }: { number: string; children: ReactNode }) {
  return <p className="section-index">{number} <span>/</span> {children}</p>;
}
