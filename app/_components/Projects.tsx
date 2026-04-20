"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { useState, useCallback, useRef, useEffect } from "react";

const projects = [
  {
    name: "FynXai",
    description:
      "Multi-stage loan decision engine using EasyOCR, a rule-based filter, and an XGBoost ML model with SHAP & LIME explainability. Improved review efficiency by 30%.",
    tags: ["Python", "FastAPI", "XGBoost", "scikit-learn", "SHAP", "LIME", "EasyOCR", "React", "TailwindCSS"],
    github: "#",
    demo: null,
    image: "/projects/fynxai.png",
  },
  {
    name: "Quizzora",
    description:
      "AI-powered video-to-quiz platform. Whisper AI handles transcription, LangChain drives quiz & summary generation, and ChromaDB provides fast vectorized retrieval.",
    tags: ["React.js", "FastAPI", "LangChain", "ChromaDB", "Whisper AI", "Python", "Tailwind CSS"],
    github: "#",
    demo: null,
    image: "/projects/quizzora.png",
  },
  {
    name: "Co-Lab Vault",
    description:
      "Anonymous file-sharing app with stream-based processing via Multer, UUID-based secure links in MongoDB, and automated Heroku Scheduler cleanup of expired files.",
    tags: ["Node.js", "Express.js", "MongoDB", "Multer", "EJS", "Brevo"],
    github: "#",
    demo: "#",
    image: "/projects/colab-vault.png",
  },
];

export default function Projects() {
  const [hovered, setHovered] = useState<{ name: string; image: string } | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hasFinePointer, setHasFinePointer] = useState(false);
  const failedImages = useRef<Set<string>>(new Set());

  // Only enable cursor-following preview on devices with a real mouse
  useEffect(() => {
    setHasFinePointer(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setPos({ x: e.clientX, y: e.clientY });
  }, []);

  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-32 full-divider">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2
          className="text-4xl font-semibold"
          style={{ fontFamily: "var(--font-ambery)" }}
        >
          Projects
        </h2>
        <p
          className="mt-1 text-sm text-muted-foreground"
          style={{ fontFamily: "var(--font-miracle)" }}
        >
          Things I've shipped
        </p>
      </motion.div>

      <div onMouseMove={handleMouseMove}>
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseEnter={() =>
              setHovered({ name: project.name, image: project.image })
            }
            onMouseLeave={() => setHovered(null)}
            className="group -mx-2 flex gap-4 rounded-lg border-t border-border px-2 py-8 transition-colors duration-300 last:border-b hover:bg-muted/20 sm:gap-10 sm:py-10 md:cursor-none"
          >
            {/* Large faded index number */}
            <span
              className="select-none shrink-0 text-4xl font-bold leading-none text-muted-foreground/12 sm:text-6xl lg:text-8xl"
              style={{ fontFamily: "var(--font-ambery)" }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* Content */}
            <div className="min-w-0 flex-1">
              <div className="mb-3 flex items-start justify-between gap-4">
                <h3
                  className="text-xl sm:text-2xl lg:text-3xl"
                  style={{ fontFamily: "var(--font-ambery)" }}
                >
                  {project.name}
                </h3>
                <div className="flex shrink-0 gap-3 pt-1">
                  {project.github && project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                      aria-label={`${project.name} GitHub`}
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {project.demo && project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                      aria-label={`${project.name} demo`}
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <p
                className="mb-4 text-sm leading-relaxed text-muted-foreground"
                style={{ fontFamily: "var(--font-miracle)" }}
              >
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-border bg-muted/50 px-2.5 py-1 text-xs text-muted-foreground"
                    style={{ fontFamily: "var(--font-miracle)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Cursor-following screenshot preview — desktop / fine-pointer only */}
      <AnimatePresence>
        {hasFinePointer && hovered && !failedImages.current.has(hovered.image) && (
          <motion.div
            key={hovered.name}
            initial={{ opacity: 0, scale: 0.9, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 8 }}
            transition={{ duration: 0.18, ease: "easeOut" as const }}
            className="pointer-events-none fixed z-50 overflow-hidden rounded-xl border border-border bg-card shadow-2xl"
            style={{
              left: pos.x + 24,
              top: pos.y,
              transform: "translateY(-50%)",
              width: 300,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={hovered.image}
              alt={hovered.name}
              onError={() => {
                failedImages.current.add(hovered.image);
                setHovered(null);
              }}
              style={{
                width: "100%",
                height: 180,
                objectFit: "cover",
                display: "block",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
