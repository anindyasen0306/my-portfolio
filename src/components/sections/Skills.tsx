import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { skillAreas } from "../../data/skills";

export function Skills() {
  return (
    <section id="skills" className="border-t border-line py-28">
      <Container>
        <SectionHeading index="05" title="Skills" />
        <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {skillAreas.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 2) * 0.08, ease: "easeOut" }}
              className="border-l border-line pl-5"
            >
              <h3 className="font-display text-lg font-medium text-ink">{skill.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
