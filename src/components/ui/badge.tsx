import { cva, type VariantProps } from "class-variance-authority";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        primary: "bg-white/5 text-text-muted border border-border-primary",
        accent: "bg-accent-subtle text-accent border border-accent/20",
        outline: "border border-border-primary text-text-muted",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, children, ...props }: BadgeProps) {
  return (
    <span className={badgeVariants({ variant, className })} {...props}>
      {children}
    </span>
  );
}

export { Badge, badgeVariants };
