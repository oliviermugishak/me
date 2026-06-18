import { cva, type VariantProps } from "class-variance-authority";

const cardVariants = cva(
  "rounded-xl border border-border-primary bg-bg-surface transition-all duration-300",
  {
    variants: {
      hover: {
        true: "hover:border-accent/30 hover:bg-white/[0.02] hover:scale-[1.02]",
        false: "",
      },
      padding: {
        none: "",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
      },
    },
    defaultVariants: {
      hover: false,
      padding: "md",
    },
  }
);

interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

function Card({
  className,
  hover,
  padding,
  children,
  ...props
}: CardProps) {
  return (
    <div className={cardVariants({ hover, padding, className })} {...props}>
      {children}
    </div>
  );
}

export { Card, cardVariants };
