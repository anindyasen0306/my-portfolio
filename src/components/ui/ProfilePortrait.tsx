import { useRef, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export function ProfilePortrait({ src, alt }: { src: string; alt: string }) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 120, damping: 16 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 120, damping: 16 });
  const tx = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 100, damping: 18 });
  const ty = useSpring(useTransform(my, [-0.5, 0.5], [-10, 10]), { stiffness: 100, damping: 18 });

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative mx-auto flex h-[320px] w-[320px] items-center justify-center sm:h-[380px] sm:w-[380px]"
      style={{ perspective: 800 }}
    >
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-[-20%] rounded-full bg-blue/15 blur-[70px]" />
      <div className="pointer-events-none absolute inset-[-10%] rounded-full bg-violet/10 blur-[60px]" />

      {/* rotating technical rings */}
      <svg
        viewBox="0 0 100 100"
        className="animate-spin-slow pointer-events-none absolute inset-0 h-full w-full text-blue/25"
      >
        <circle cx="50" cy="50" r="47" fill="none" stroke="currentColor" strokeWidth="0.4" strokeDasharray="1 4" />
      </svg>
      <svg
        viewBox="0 0 100 100"
        className="animate-spin-slow-reverse pointer-events-none absolute inset-[6%] h-[88%] w-[88%] text-violet/25"
      >
        <circle cx="50" cy="50" r="47" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="0.5 6" />
      </svg>

      {/* tiny technical decorations */}
      <span className="pointer-events-none absolute -left-6 top-8 font-mono text-[10px] text-blue/50 sm:-left-10">
        {"{ status: ok }"}
      </span>
      <span className="pointer-events-none absolute -right-4 top-20 font-mono text-[10px] text-violet/50 sm:-right-8">
        node_04
      </span>
      <span className="pointer-events-none absolute -left-8 bottom-16 h-1.5 w-1.5 rounded-full bg-blue/70 sm:-left-12" />
      <span className="pointer-events-none absolute -right-6 bottom-10 font-mono text-[10px] text-ink-faint sm:-right-10">
        ~/engineer
      </span>
      <svg
        className="pointer-events-none absolute -left-10 top-1/2 hidden h-16 w-10 -translate-y-1/2 text-blue/30 sm:block"
        viewBox="0 0 40 64"
        fill="none"
      >
        <path d="M0 8h20v48H0" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="20" cy="8" r="2" fill="currentColor" />
        <circle cx="20" cy="56" r="2" fill="currentColor" />
      </svg>

      {/* portrait */}
      <motion.div
        className="animate-float relative h-[260px] w-[260px] overflow-hidden rounded-full border border-line bg-surface shadow-[0_0_40px_-10px_rgba(56,224,164,0.25)] sm:h-[300px] sm:w-[300px]"
        style={reduced ? undefined : { rotateX: rx, rotateY: ry, x: tx, y: ty }}
      >
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          loading="eager"
          decoding="async"
        />
        <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-blue/20" />
      </motion.div>
    </div>
  );
}
