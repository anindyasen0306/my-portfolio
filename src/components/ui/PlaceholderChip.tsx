export function PlaceholderChip({ children }: { children: string }) {
  return (
    <span className="placeholder-chip inline-flex items-center rounded px-2 py-0.5 font-mono text-[11px]">
      {children}
    </span>
  );
}
