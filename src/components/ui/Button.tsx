import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

type ButtonProps = {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
};

export function Button({
  href,
  children,
  icon,
  variant = "primary",
  className,
  external = true,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2";

  const variants: Record<string, string> = {
    primary: "bg-ink text-void hover:bg-blue hover:text-void",
    secondary:
      "border border-line text-ink hover:border-ink-faint hover:bg-surface",
    ghost: "text-ink-muted hover:text-ink",
  };

  return (
    <a
      href={href}
      className={cn(base, variants[variant], className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      {icon}
    </a>
  );
}
