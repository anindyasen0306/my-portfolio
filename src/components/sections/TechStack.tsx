import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { techStack } from "../../data/techStack";

export function TechStack() {
  return (
    <section id="stack" className="border-t border-line py-28">
      <Container>
        <SectionHeading
          index="02"
          title="Tech stack"
          description="Tools I reach for across AI, backend, frontend, and infrastructure."
        />

        <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((group, gi) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: gi * 0.06, ease: "easeOut" }}
              className="group bg-void p-6 transition-colors duration-300 hover:bg-surface"
            >
              <p className="mb-4 font-mono text-xs text-ink-faint">{group.label}</p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded border border-line bg-surface px-2.5 py-1 text-xs text-ink-muted transition-colors duration-200 group-hover:border-line-soft hover:!border-blue/50 hover:!text-ink"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
