import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { Container } from "../ui/Container";
import { profile } from "../../data/profile";

const focusAreas = [
  "Backend systems in Python & FastAPI",
  "AI / LLM-powered applications",
  "AI automation & agentic workflows",
  "Data structures & algorithms",
];

export function About() {
  return (
    <section id="about" className="border-t border-line py-28">
      <Container>
        <SectionHeading index="01" title="About" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="overflow-hidden rounded-xl border border-line bg-surface/50"
        >
          <div className="flex items-center gap-2 border-b border-line bg-surface-2/70 px-5 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-2 font-mono text-[11px] text-ink-faint">about.sh</span>
          </div>

          <div className="grid gap-10 p-8 md:grid-cols-[1.3fr_1fr] md:p-10">
            <div>
              <p className="font-mono text-sm text-blue">
                $ whoami
              </p>
              <p className="mt-3 font-display text-2xl font-medium tracking-tight text-ink">
                {profile.name}
              </p>
              <p className="mb-6 font-mono text-xs text-ink-faint">
                {profile.role}
              </p>

              <div className="space-y-5 text-base leading-relaxed text-ink-muted">
                <p>
                  I'm an MCA student building toward a career as an{" "}
                  <span className="text-ink">AI Automation Engineer</span> — someone
                  who designs systems where AI does real engineering work, not just
                  text generation.
                </p>
                <p>
                  My day-to-day is backend development in{" "}
                  <span className="text-ink">Python</span> and{" "}
                  <span className="text-ink">FastAPI</span>, paired with a growing
                  focus on applying LLMs to practical problems: analysis, feedback
                  generation, and automated decision-making. I care about writing
                  software that's structured well enough to trust, and I'm still
                  early in that journey — learning in public, through projects
                  rather than a resume full of job titles.
                </p>
                <p>
                  Alongside applied work, I keep sharpening the fundamentals —{" "}
                  <span className="text-ink">data structures and algorithms</span>{" "}
                  — because reliable AI systems still need reliable engineering
                  underneath them.
                </p>
              </div>
            </div>

            <div className="border-t border-line pt-6 font-mono md:border-l md:border-t-0 md:pl-10 md:pt-0">
              <p className="mb-4 text-xs text-ink-faint">$ cat focus.json</p>
              <ul className="space-y-3">
                {focusAreas.map((area) => (
                  <li key={area} className="flex items-start gap-3 text-sm text-ink-muted">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-blue" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
