import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubMark } from "../ui/BrandIcons";
import { Container } from "../ui/Container";
import { Tag } from "../ui/Tag";
import { otherProjects } from "../../data/projects";

export function OtherProjects() {
  return (
    <section className="py-4 pb-28">
      <Container>
        <div className="grid gap-6 md:grid-cols-2">
          {otherProjects.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: "easeOut" }}
              className="group flex flex-col rounded-lg border border-line bg-surface/30 p-6 transition-colors duration-300 hover:border-line-soft hover:bg-surface/60"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[11px] text-ink-faint">{p.category}</p>
                  <h3 className="mt-1 font-display text-xl font-medium text-ink">
                    {p.name}
                  </h3>
                </div>
                <div className="flex shrink-0 gap-2 opacity-70 transition-opacity group-hover:opacity-100">
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.name} on GitHub`}
                    className="rounded-md border border-line p-2 text-ink-muted transition-colors hover:border-ink-faint hover:text-ink"
                  >
                    <GithubMark className="h-[15px] w-[15px]" />
                  </a>
                  {p.demoUrl && (
                    <a
                      href={p.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.name} live demo`}
                      className="rounded-md border border-line p-2 text-ink-muted transition-colors hover:border-ink-faint hover:text-ink"
                    >
                      <ArrowUpRight size={15} />
                    </a>
                  )}
                </div>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {p.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
