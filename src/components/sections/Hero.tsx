import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { Container } from "../ui/Container";
import { Terminal, type TerminalLine } from "../ui/Terminal";
import { ProfilePortrait } from "../ui/ProfilePortrait";
import { GithubMark, LinkedinMark } from "../ui/BrandIcons";
import { profile, contact } from "../../data/profile";

const bootLines: TerminalLine[] = [
  { prompt: "$", text: "./initialize.sh", speed: 28, pause: 320 },
  { text: "> Loading AI systems...", tone: "muted", speed: 10, pause: 180 },
  { text: "> Loading automation workflows...", tone: "muted", speed: 10, pause: 180 },
  { text: "> Connecting tools...", tone: "muted", speed: 10, pause: 180 },
  { text: "> System ready ✓", tone: "accent", speed: 12, pause: 200 },
];

const content = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

export function Hero() {
  const [ready, setReady] = useState(false);

  return (
    <section
      id="top"
      className="bg-grid relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-blue/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 left-[-10%] h-[420px] w-[420px] rounded-full bg-violet/10 blur-[120px]" />

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          {/* LEFT — terminal */}
          <div>
            <Terminal title={`anindya@engineer:~`} lines={bootLines} onDone={() => setReady(true)}>
              <motion.div
                variants={content}
                initial="hidden"
                animate={ready ? "show" : "hidden"}
              >
                <motion.p
                  variants={item}
                  className="mb-3 font-mono text-xs tracking-[0.18em] text-blue"
                >
                  {profile.role.toUpperCase()}
                </motion.p>

                <motion.h1
                  variants={item}
                  className="text-balance font-display text-3xl font-medium leading-[1.1] tracking-tight text-ink sm:text-4xl md:text-[2.7rem]"
                >
                  Building AI-powered systems that automate real work.
                </motion.h1>

                <motion.p
                  variants={item}
                  className="mt-5 max-w-lg text-balance text-sm leading-relaxed text-ink-muted md:text-base"
                >
                  {profile.summary}
                </motion.p>

                <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 rounded-md bg-blue px-5 py-2.5 text-sm font-medium text-void transition-colors duration-200 hover:bg-blue/85"
                  >
                    View work
                    <ArrowRight size={16} />
                  </a>
                  <a
                    href={profile.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-200 hover:border-ink-faint hover:bg-surface-2"
                  >
                    <FileText size={16} />
                    Resume
                  </a>
                </motion.div>

                <motion.div variants={item} className="mt-6 flex items-center gap-3">
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                    title="GitHub"
                    className="flex h-9 w-9 items-center justify-center rounded-md border border-line text-ink-muted transition-colors duration-200 hover:border-blue/40 hover:text-blue"
                  >
                    <GithubMark size={16} />
                  </a>
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                    title="LinkedIn"
                    className="flex h-9 w-9 items-center justify-center rounded-md border border-line text-ink-muted transition-colors duration-200 hover:border-blue/40 hover:text-blue"
                  >
                    <LinkedinMark size={16} />
                  </a>
                </motion.div>
              </motion.div>
            </Terminal>
          </div>

          {/* RIGHT — profile portrait */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <ProfilePortrait src="/profile.jpeg" alt={profile.name} />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
