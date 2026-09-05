import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Trophy } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { GithubMark } from "../ui/BrandIcons";
import { codingProfiles } from "../../data/profile";

const icons = {
  GitHub: GithubMark,
  LeetCode: Code2,
  Codeforces: Trophy,
};

export function CodingProfiles() {
  return (
    <section id="activity" className="border-t border-line py-28">
      <Container>
        

        <div className="grid gap-6 sm:grid-cols-3">
          {codingProfiles.map((p, i) => {
            const Icon = icons[p.name as keyof typeof icons];
            return (
              <motion.a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
                className="group flex flex-col rounded-lg border border-line bg-surface/30 p-6 transition-colors duration-300 hover:border-ink-faint hover:bg-surface/60"
              >
                <div className="flex items-center justify-between">
                  <Icon size={20} className="text-blue" />
                  <ArrowUpRight
                    size={16}
                    className="text-ink-faint transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                  />
                </div>
                <h3 className="mt-4 font-display text-lg font-medium text-ink">{p.name}</h3>
                <p className="mt-1 text-sm text-ink-muted">{p.description}</p>
                <p className="mt-4 font-mono text-xs text-ink-faint">{p.handle}</p>
              </motion.a>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
