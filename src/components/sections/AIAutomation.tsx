import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { PipelineDiagram } from "../ui/PipelineDiagram";
import { automationPipeline, automationStatement } from "../../data/automation";

export function AIAutomation() {
  return (
    <section id="ai-automation" className="border-t border-line py-28">
      <Container>
        <SectionHeading index="04" title={automationStatement.title} />

        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-5"
          >
            {automationStatement.body.map((para, i) => (
              <p key={i} className="text-base leading-relaxed text-ink-muted">
                {para}
              </p>
            ))}
          </motion.div>

          <div className="rounded-xl border border-line bg-surface/40 p-8">
            <p className="mb-8 font-mono text-xs text-ink-faint">
              example: devopsai.pipeline
            </p>
            <PipelineDiagram
              steps={automationPipeline}
              orientation="horizontal"
              interactive
              className="overflow-x-auto"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
