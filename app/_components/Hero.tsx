"use client";

import { DownloadResumeButton } from "@/components/ui/resume-download";
import { motion, type Variants } from "framer-motion";

export default function Hero() {
  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.3 } },
  };

  const lineVariant: Variants = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  return (
    <section
      id="hero"
      className="min-h-svh flex flex-col justify-center full-divider relative overflow-hidden"
    >
      {/* Background blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-primary/5 blur-3xl sm:-top-40 sm:-left-40 sm:h-96 sm:w-96" />
      <div className="pointer-events-none absolute bottom-16 -right-24 h-56 w-56 rounded-full bg-primary/5 blur-3xl sm:bottom-20 sm:-right-40 sm:h-72 sm:w-72" />

      {/* Status badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <span
          className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-1.5 text-xs text-muted-foreground"
          style={{ fontFamily: "var(--font-miracle)" }}
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
          Open to opportunities
        </span>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-2"
      >
        <motion.h1
          variants={lineVariant}
          className="text-[2.25rem] leading-tight sm:text-5xl lg:text-7xl"
          style={{ fontFamily: "var(--font-ambery)" }}
        >
          Hi, I'm Sanket
        </motion.h1>
        <motion.h1
          variants={lineVariant}
          className="text-[2.25rem] leading-tight sm:text-5xl lg:text-7xl"
          style={{ fontFamily: "var(--font-ambery)" }}
        >
          I love to build Web.
        </motion.h1>
        <motion.p
          variants={lineVariant}
          className="mt-4 max-w-xl text-sm text-neutral-400 sm:text-lg lg:text-2xl"
          style={{ fontFamily: "var(--font-miracle)" }}
        >
          Exploring the world of AI, machine learning, and thoughtful tech.
        </motion.p>
        <div className="flex">
        <motion.p
          variants={lineVariant}
          className="mt-1 text-[13px]  text-muted-foreground/60 sm:text-xs"
          style={{ fontFamily: "var(--font-miracle)" }}
        >
          Final-year Computer Engineering
        </motion.p>
          <motion.p
          variants={lineVariant}
          className="mt-1 text-[13px] mx-2  text-muted-foreground/90 sm:text-xs animate-pulse"
          style={{ fontFamily: "var(--font-miracle)" }}
        >
         •
        </motion.p>
        <motion.p
          variants={lineVariant}
          className="mt-1 text-[13px] text-muted-foreground/60 sm:text-xs"
          style={{ fontFamily: "var(--font-miracle)" }}
        >
         A P Shah Institute of Technology, Thane
        </motion.p>
        </div>
      </motion.div>

      <div className="mt-8">
        <DownloadResumeButton />
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="h-8 w-px bg-linear-to-b from-border to-transparent mx-auto"
        />
      </motion.div>
    </section>
  );
}
