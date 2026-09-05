import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { FileText } from "lucide-react";
import { Container } from "../ui/Container";
import { profile } from "../../data/profile";

const links = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "AI Focus", href: "#ai-automation" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActive(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: "-25% 0px -65% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-void/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#top"
          className="font-display text-lg font-medium tracking-tight text-ink"
        >
          {profile.name
            .split(" ")
            .map((w) => w[0])
            .join("")}
          <span className="text-blue">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const isActive = active === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={`relative flex items-center gap-1.5 text-sm transition-colors ${
                  isActive ? "text-ink" : "text-ink-muted hover:text-ink"
                }`}
              >
                {isActive && <span className="h-1 w-1 rounded-full bg-blue" />}
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-ink-muted transition-colors hover:text-ink"
          >
            <FileText size={14} />
            Resume
          </a>
          <a
            href="#contact"
            className="rounded-md border border-line px-4 py-2 text-sm text-ink transition-colors hover:border-ink-faint hover:bg-surface"
          >
            Let's talk
          </a>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-line bg-void md:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {links.map((link) => {
                const isActive = active === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "true" : undefined}
                    className={`rounded-md px-2 py-3 text-base transition-colors hover:bg-surface hover:text-ink ${
                      isActive ? "text-ink" : "text-ink-muted"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
