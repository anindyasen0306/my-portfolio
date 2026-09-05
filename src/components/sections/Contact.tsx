import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { GithubMark, LinkedinMark } from "../ui/BrandIcons";
import { contact, contactFormEnabled, contactFormProvider } from "../../data/profile";

// EDIT ME: once you pick a provider, set contactFormProvider in
// src/data/profile.ts and fill in the values below.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/your-form-id"; // EDIT ME
// For EmailJS: install `@emailjs/browser`, then call emailjs.send(...)
// here with your service ID, template ID, and public key.

type Status = "idle" | "sending" | "sent" | "error" | "unconfigured";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    if (contactFormProvider === "formspree") {
      setStatus("sending");
      try {
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: new FormData(form),
        });
        setStatus(res.ok ? "sent" : "error");
        if (res.ok) form.reset();
      } catch {
        setStatus("error");
      }
      return;
    }

    // No backend wired up yet — don't fake a success state.
    setStatus("unconfigured");
  }

  return (
    <section id="contact" className="border-t border-line py-28">
      <Container>
        <SectionHeading index="08" title="Contact" />

        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="max-w-sm text-base leading-relaxed text-ink-muted">
              I'm open to internships, collaborations, and conversations about
              AI automation. The fastest way to reach me is email.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 text-sm text-ink transition-colors hover:text-blue"
              >
                <Mail size={16} className="text-ink-faint" />
                {contact.email}
              </a>
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-ink transition-colors hover:text-blue"
              >
                <GithubMark size={16} className="text-ink-faint" />
                GitHub
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-ink transition-colors hover:text-blue"
              >
                <LinkedinMark size={16} className="text-ink-faint" />
                LinkedIn
              </a>
            </div>
          </motion.div>

          {contactFormEnabled && (
            <motion.form
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              onSubmit={handleSubmit}
              className="space-y-4 rounded-xl border border-line bg-surface/30 p-6 md:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs text-ink-muted">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-md border border-line bg-void px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-blue"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs text-ink-muted">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-md border border-line bg-void px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-blue"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-xs text-ink-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full resize-none rounded-md border border-line bg-void px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-blue"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2 rounded-md bg-ink px-5 py-2.5 text-sm font-medium text-void transition-colors hover:bg-blue disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Send message"}
                <Send size={15} />
              </button>

              {status === "sent" && (
                <p className="text-sm text-blue">Message sent — thanks for reaching out.</p>
              )}
              {status === "error" && (
                <p className="text-sm text-ink-faint">
                  Something went wrong sending that. Try emailing directly instead.
                </p>
              )}
              {status === "unconfigured" && (
                <p className="text-sm text-ink-faint">
                  This form isn't wired up to a backend yet — set{" "}
                  <code className="font-mono text-ink-muted">contactFormProvider</code> in{" "}
                  <code className="font-mono text-ink-muted">src/data/profile.ts</code> to{" "}
                  <code className="font-mono text-ink-muted">"formspree"</code> (or add EmailJS)
                  to enable it. In the meantime, email me directly at {contact.email}.
                </p>
              )}
            </motion.form>
          )}
        </div>
      </Container>
    </section>
  );
}
