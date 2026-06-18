import { cva, type VariantProps } from "class-variance-authority";

const sectionVariants = cva("w-full", {
  variants: {
    size: {
      md: "py-24 md:py-32",
      sm: "py-16 md:py-24",
      lg: "py-32 md:py-40",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface SectionProps
  extends VariantProps<typeof sectionVariants> {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

function Section({
  className,
  size,
  id,
  children,
}: SectionProps) {
  return (
    <section id={id} className={sectionVariants({ size, className })}>
      {children}
    </section>
  );
}

export { Section, sectionVariants };
