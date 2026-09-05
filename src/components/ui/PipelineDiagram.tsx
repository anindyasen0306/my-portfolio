import { useState } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { cn } from "../../lib/cn";

interface Step {
  label: string;
  detail?: string;
}

export function PipelineDiagram({
  steps,
  orientation = "vertical",
  interactive = false,
  className,
}: {
  steps: Step[];
  orientation?: "vertical" | "horizontal";
  /** highlights the node + connector on hover, terminal-workflow style */
  interactive?: boolean;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "flex",
        orientation === "vertical"
          ? "flex-col gap-0"
          : "flex-col gap-6 md:flex-row md:items-start md:gap-0",
        className
      )}
    >
      {steps.map((step, i) => {
        const isHot = interactive && hovered === i;
        return (
          <div
            key={step.label}
            onMouseEnter={() => interactive && setHovered(i)}
            onMouseLeave={() => interactive && setHovered(null)}
            className={cn(
              "flex",
              interactive && "cursor-default",
              orientation === "vertical" ? "flex-row items-start gap-4" : "flex-1 flex-col items-start gap-4 md:pr-4"
            )}
          >
            <div
              className={cn(
                "flex items-center",
                orientation === "vertical" ? "flex-col" : "w-full flex-row"
              )}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                animate={isHot ? { scale: 1.18 } : { scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: isHot ? 0.2 : 0.4, delay: isHot ? 0 : reduced ? 0 : i * 0.12, ease: "easeOut" }}
                className={cn(
                  "relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border bg-surface transition-colors duration-200",
                  isHot ? "border-blue" : "border-line"
                )}
              >
                <span className={cn("h-2 w-2 rounded-full transition-colors duration-200", isHot ? "bg-blue" : "bg-blue/70")} />
                {!reduced && (
                  <motion.span
                    className="absolute inset-0 rounded-full border border-blue/40"
                    initial={{ opacity: 0, scale: 1 }}
                    whileInView={{ opacity: [0, 0.6, 0], scale: [1, 1.6, 1.9] }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.8,
                      delay: i * 0.12 + 0.3,
                      ease: "easeOut",
                    }}
                  />
                )}
              </motion.div>

              {i < steps.length - 1 && (
                <div className={cn("relative", orientation === "vertical" ? "my-1 h-10 w-px" : "mt-4.5 hidden h-px w-full md:block")}>
                  <motion.div
                    initial={orientation === "vertical" ? { scaleY: 0 } : { scaleX: 0 }}
                    whileInView={orientation === "vertical" ? { scaleY: 1 } : { scaleX: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: reduced ? 0 : i * 0.12 + 0.15, ease: "easeOut" }}
                    style={{ transformOrigin: orientation === "vertical" ? "top" : "left" }}
                    className={cn(
                      "absolute inset-0 transition-colors duration-300",
                      orientation === "vertical" ? "w-px" : "h-px",
                      isHot || (interactive && hovered === i + 1) ? "bg-blue/60" : "bg-line"
                    )}
                  />
                  {interactive && !reduced && (
                    <motion.span
                      className={cn(
                        "absolute rounded-full bg-blue shadow-[0_0_8px_2px_rgba(56,224,164,0.6)]",
                        orientation === "vertical" ? "left-1/2 h-1.5 w-1.5 -translate-x-1/2" : "top-1/2 h-1.5 w-1.5 -translate-y-1/2"
                      )}
                      animate={
                        orientation === "vertical"
                          ? { top: ["0%", "100%"], opacity: [0, 1, 0] }
                          : { left: ["0%", "100%"], opacity: [0, 1, 0] }
                      }
                      transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.35, ease: "linear" }}
                    />
                  )}
                </div>
              )}
            </div>

            <motion.div
              initial={{ opacity: 0, x: orientation === "vertical" ? -8 : 0, y: orientation === "horizontal" ? -8 : 0 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: reduced ? 0 : i * 0.12 + 0.05, ease: "easeOut" }}
              className={cn("pb-8", orientation === "vertical" ? "" : "pb-0")}
            >
              <p className={cn("font-display text-sm font-medium transition-colors duration-200", isHot ? "text-blue" : "text-ink")}>
                {step.label}
              </p>
              {step.detail && (
                <p className="mt-1 max-w-[220px] text-xs leading-relaxed text-ink-muted">
                  {step.detail}
                </p>
              )}
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
