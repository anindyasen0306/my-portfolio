import { cn } from "../../lib/cn";

export function Tag({ children, className }: { children: string; className?: string }) {
  return (
    <span
      className={cn(
        "rounded border border-line bg-surface px-2.5 py-1 font-mono text-xs text-ink-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
