import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Circle } from "lucide-react";
import { GithubMark } from "../ui/BrandIcons";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { PipelineDiagram } from "../ui/PipelineDiagram";
import { Tag } from "../ui/Tag";
import { featuredProject } from "../../data/projects";

export function FeaturedProject() {
  const p = featuredProject;

  return (
    <section id="projects" className="border-t border-line py-28">
      <Container>
        <SectionHeading
          index="03"
          title="Featured project"
          description="The project that best represents where I'm headed."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="overflow-hidden rounded-xl border border-line bg-surface/40"
        >
          <div className="grid gap-0 lg:grid-cols-[1fr_1fr]">
            {/* Left: narrative */}
            <div className="p-8 md:p-10">
              <div className="mb-2 flex items-center gap-2 font-mono text-xs text-blue">
                <span className="h-1.5 w-1.5 rounded-full bg-blue" />
                Featured — AI Automation
              </div>
              <h3 className="font-display text-3xl font-medium tracking-tight text-ink">
                {p.name}
              </h3>
              <p className="mt-2 text-sm text-ink-muted">{p.tagline}</p>

              <p className="mt-6 text-sm leading-relaxed text-ink-muted md:text-base">
                {p.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={p.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-ink px-5 py-2.5 text-sm font-medium text-void transition-colors hover:bg-blue"
                >
                  <GithubMark className="h-4 w-4" />
                  View on GitHub
                </a>
                {p.demoUrl && (
                  <a
                    href={p.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink-faint hover:bg-surface"
                  >
                    Live demo
                    <ArrowUpRight size={16} />
                  </a>
                )}
              </div>

              {p.features && (
                <div className="mt-10 border-t border-line pt-6">
                  <p className="mb-4 font-mono text-xs text-ink-faint">
                    Implemented vs. planned
                  </p>
                  <ul className="space-y-2.5">
                    {p.features.map((f) => (
                      <li key={f.label} className="flex items-start gap-2.5 text-sm">
                        {f.status === "implemented" ? (
                          <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-blue" />
                        ) : (
                          <Circle size={16} className="mt-0.5 shrink-0 text-ink-faint" />
                        )}
                        <span
                          className={
                            f.status === "implemented" ? "text-ink-muted" : "text-ink-faint"
                          }
                        >
                          {f.label}
                          {f.status === "planned" && (
                            <span className="ml-2 font-mono text-[10px] text-ink-faint">
                              planned
                            </span>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right: architecture / workflow */}
            <div className="border-t border-line bg-void/60 p-8 md:border-l md:border-t-0 md:p-10">
              <p className="mb-6 font-mono text-xs text-ink-faint">
                architecture.workflow
              </p>
              {p.workflow && <PipelineDiagram steps={p.workflow} orientation="vertical" />}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
