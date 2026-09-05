import { Container } from "../ui/Container";
import { profile } from "../../data/profile";

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <Container className="flex flex-col items-center justify-between gap-3 text-xs text-ink-faint sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React,
          TypeScript &amp; Tailwind CSS.
        </p>
        <a href="#top" className="transition-colors hover:text-ink-muted">
          Back to top
        </a>
      </Container>
    </footer>
  );
}
