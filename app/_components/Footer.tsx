"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const socials = [
  { label: "GitHub", href: "https://github.com/Sankett111", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/sanket-nandurkar", icon: Linkedin },
  { label: "Mail", href: "mailto:sanket7132@gmail.com", icon: Mail },
  { label: "+91 8928694918", href: "tel:+918928694918", icon: Phone },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      className="pb-10 pt-14 sm:pt-24"
      style={{ fontFamily: "var(--font-miracle)" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p
          className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground/50"
          style={{ fontFamily: "var(--font-miracle)" }}
        >
          Get in touch
        </p>
        <h2
          className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-7xl"
          style={{ fontFamily: "var(--font-ambery)" }}
        >
          Let's build
          <br />
          something great.
        </h2>
        <p className="mt-4 max-w-sm text-sm text-muted-foreground">
          Whether it's a project, an opportunity, or just a chat ~ I'm always up for it.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-10 flex flex-wrap gap-3"
      >
        {socials.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm text-muted-foreground transition-colors duration-200 hover:bg-muted/40 hover:text-foreground"
          >
            <Icon size={14} />
            {label}
          </a>
        ))}
      </motion.div>

      <div className="mt-16 flex flex-col items-center justify-between gap-2 border-t border-border pt-6 text-xs text-neutral-500 sm:flex-row">
        <p className="text-sm">&lt; Designed &amp; Built by Sanket /&gt;</p>
        <p className="text-sm">© 2026</p>
      </div>
    </footer>
  );
}
