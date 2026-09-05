import { motion } from "framer-motion";

export function SectionHeading({
  index,
  title,
  description,
}: {
  index: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between"
    >
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-sm text-ink-faint">{index}</span>
        <h2 className="font-display text-3xl font-medium tracking-tight text-ink md:text-4xl">
          {title}
        </h2>
      </div>
      {description && (
        <p className="max-w-md text-sm leading-relaxed text-ink-muted">
          {description}
        </p>
      )}
    </motion.div>
  );
}
