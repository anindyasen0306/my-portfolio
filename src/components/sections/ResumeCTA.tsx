import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { Container } from "../ui/Container";
import { profile } from "../../data/profile";

export function ResumeCTA() {
  return (
    <section className="border-t border-line py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-start justify-between gap-8 rounded-xl border border-line bg-surface/40 px-8 py-10 md:flex-row md:items-center md:px-12"
        >
          <div>
            <h3 className="font-display text-2xl font-medium tracking-tight text-ink md:text-3xl">
              Interested in working together?
            </h3>
            <p className="mt-2 max-w-md text-sm text-ink-muted md:text-base">
              I'm looking for internships and off-campus opportunities where I
              can build real AI-powered software.
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap gap-3">
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-ink px-5 py-2.5 text-sm font-medium text-void transition-colors duration-200 hover:bg-blue"
            >
              <FileText size={16} />
              Download resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-200 hover:border-ink-faint hover:bg-surface"
            >
              Contact me
              <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
