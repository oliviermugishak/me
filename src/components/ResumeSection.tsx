import type { ReactNode } from "react";

export default function ResumeSection({
  id,
  label,
  children,
  className = "",
}: {
  id: string;
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`resume-section ${className}`.trim()} aria-labelledby={id}>
      <h2 id={id} className="resume-label">{label}</h2>
      <div className="resume-detail">{children}</div>
    </section>
  );
}
