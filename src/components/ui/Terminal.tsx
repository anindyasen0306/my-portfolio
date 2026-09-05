import { useEffect, useRef, useState, type ReactNode } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { cn } from "../../lib/cn";

export interface TerminalLine {
  /** e.g. "$" or ">" — omit for plain output lines */
  prompt?: string;
  text: string;
  /** ms per character while typing this line */
  speed?: number;
  /** extra pause (ms) after this line finishes typing */
  pause?: number;
  tone?: "default" | "muted" | "accent";
}

const toneClass: Record<NonNullable<TerminalLine["tone"]>, string> = {
  default: "text-ink",
  muted: "text-ink-faint",
  accent: "text-blue",
};

/**
 * Premium terminal window chrome with a sequential typing animation.
 * Once typing completes, `onDone` fires and `children` (e.g. the rest of
 * the hero content) can be revealed.
 */
export function Terminal({
  title,
  lines,
  children,
  onDone,
  className,
}: {
  title: string;
  lines: TerminalLine[];
  children?: ReactNode;
  onDone?: () => void;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const [lineIndex, setLineIndex] = useState(reduced ? lines.length : 0);
  const [charIndex, setCharIndex] = useState(reduced ? lines[lines.length - 1]?.text.length ?? 0 : 0);
  const doneFired = useRef(false);

  useEffect(() => {
    if (reduced) {
      if (!doneFired.current) {
        doneFired.current = true;
        onDone?.();
      }
      return;
    }

    if (lineIndex >= lines.length) {
      if (!doneFired.current) {
        doneFired.current = true;
        onDone?.();
      }
      return;
    }

    const current = lines[lineIndex];
    if (charIndex < current.text.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), current.speed ?? 22);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setLineIndex((i) => i + 1);
      setCharIndex(0);
    }, current.pause ?? 260);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lineIndex, charIndex, reduced]);

  const isTyping = lineIndex < lines.length;

  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-line bg-surface/70 shadow-[0_0_0_1px_rgba(56,224,164,0.04),0_30px_60px_-30px_rgba(0,0,0,0.6)] backdrop-blur-sm",
        className
      )}
    >
      <div className="flex items-center gap-2 border-b border-line bg-surface-2/80 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 truncate font-mono text-[11px] text-ink-faint">{title}</span>
      </div>

      <div className="p-6 font-mono text-[13px] leading-relaxed sm:p-8 sm:text-sm">
        {lines.slice(0, isTyping ? lineIndex : lines.length).map((line, i) => (
          <div key={i} className={cn("whitespace-pre-wrap break-words", toneClass[line.tone ?? "default"])}>
            {line.prompt && <span className="mr-2 text-blue">{line.prompt}</span>}
            {line.text}
          </div>
        ))}

        {isTyping && (
          <div className={cn("whitespace-pre-wrap break-words", toneClass[lines[lineIndex].tone ?? "default"])}>
            {lines[lineIndex].prompt && <span className="mr-2 text-blue">{lines[lineIndex].prompt}</span>}
            {lines[lineIndex].text.slice(0, charIndex)}
            <span className="caret-blink -mb-0.5 ml-0.5 inline-block h-[1em] w-[7px] translate-y-[2px] bg-blue align-middle" />
          </div>
        )}

        {!isTyping && (
          <span className="caret-blink -mb-0.5 ml-0.5 inline-block h-[1em] w-[7px] translate-y-[2px] bg-blue align-middle" />
        )}
      </div>

      {children && (
        <div
          className={cn(
            "border-t border-line px-6 py-6 transition-opacity duration-500 sm:px-8",
            isTyping ? "pointer-events-none opacity-0" : "opacity-100"
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
}
