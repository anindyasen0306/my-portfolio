import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { PlaceholderChip } from "../ui/PlaceholderChip";
import { education } from "../../data/education";

export function Education() {
  return (
    <section id="education" className="border-t border-line py-28">
      <Container>
        <SectionHeading index="06" title="Education" />
        <div className="space-y-6">
          {education.map((entry, i) => (
            <motion.div
              key={entry.degree}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: "easeOut" }}
              className="flex gap-5 rounded-lg border border-line bg-surface/30 p-6"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line bg-surface text-blue">
                <GraduationCap size={20} />
              </div>
              <div>
                <h3 className="font-display text-lg font-medium text-ink">
                  {entry.degree}
                </h3>
                <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-ink-muted">
                  {entry.isPlaceholder ? (
                    <PlaceholderChip>{entry.institution}</PlaceholderChip>
                  ) : (
                    <span>{entry.institution}</span>
                  )}
                  <span className="text-ink-faint">·</span>
                  {entry.isPlaceholder ? (
                    <PlaceholderChip>{entry.duration}</PlaceholderChip>
                  ) : (
                    <span>{entry.duration}</span>
                  )}
                </div>
                {entry.detail && (
                  <p className="mt-3 text-sm text-ink-faint">
                    {entry.isPlaceholder ? (
                      <PlaceholderChip>{entry.detail}</PlaceholderChip>
                    ) : (
                      entry.detail
                    )}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
