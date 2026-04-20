"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

type StackItem = {
  icon: string;
  darkIcon?: string;
  tooltip: string;
};

const categories: { label: string; items: StackItem[] }[] = [
  {
    label: "Languages",
    items: [
      { icon: "/python.svg", tooltip: "Python" },
      { icon: "/js.svg", tooltip: "JavaScript" },
      { icon: "/typescript.svg", tooltip: "TypeScript" },
      { icon: "/cpp.svg", tooltip: "C++" },
    ],
  },
  {
    label: "Frameworks & Libraries",
    items: [
      { icon: "/FastAPI.svg", tooltip: "FastAPI" },
      { icon: "/nodejs.svg", tooltip: "Node.js" },
      { icon: "/react.svg", tooltip: "React" },
      { icon: "/nextjs2-dark.svg", tooltip: "Next.js" },
      { icon: "/tailwindcss.svg", tooltip: "Tailwind CSS" },
      { icon: "/shadcn-ui.svg", darkIcon: "/shadcn-ui-dark.svg", tooltip: "shadcn/ui" },
      { icon: "/motion.svg", tooltip: "Motion" },
    ],
  },
  {
    label: "Databases",
    items: [
      { icon: "/mongodb.svg", tooltip: "MongoDB" },
      { icon: "/postgresql.svg", tooltip: "PostgreSQL" },
      { icon: "/MySQL.svg", tooltip: "MySQL" },
    ],
  },
  {
    label: "Tools & Platforms",
    items: [
      { icon: "/git.svg", tooltip: "Git" },
      { icon: "/github-dark.svg", darkIcon: "/github-light.svg", tooltip: "GitHub" },
      { icon: "/Jupyter.svg", tooltip: "Jupyter" },
      { icon: "/figma.svg", tooltip: "Figma" },
      { icon: "/vercel.svg", darkIcon: "/vercel-dark.svg", tooltip: "Vercel" },
    ],
  },
];

function StackIcon({ item }: { item: StackItem }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span className="flex cursor-pointer items-center rounded-xl p-2.5 transition-colors hover:bg-muted/60">
          <Image
            src={item.icon}
            alt={item.tooltip}
            width={32}
            height={32}
            className={item.darkIcon ? "block dark:hidden" : ""}
          />
          {item.darkIcon && (
            <Image
              src={item.darkIcon}
              alt={item.tooltip}
              width={32}
              height={32}
              className="hidden dark:block"
            />
          )}
        </span>
      </TooltipTrigger>
      <TooltipContent>
        <p>{item.tooltip}</p>
      </TooltipContent>
    </Tooltip>
  );
}

export default function Techstack() {
  return (
    <section id="techstack" className="py-16 sm:py-24 lg:py-32 full-divider">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2
          className="text-3xl font-semibold sm:text-4xl"
          style={{ fontFamily: "var(--font-ambery)" }}
        >
          Stack
        </h2>
        <p
          className="mt-1 text-sm text-muted-foreground"
          style={{ fontFamily: "var(--font-miracle)" }}
        >
          Tools I reach for
        </p>
      </motion.div>

      <div className="flex flex-col gap-10">
        {categories.map((cat, catIndex) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: catIndex * 0.08 }}
          >
            <p
              className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground/50"
              style={{ fontFamily: "var(--font-miracle)" }}
            >
              {cat.label}
            </p>
            <div className="flex flex-wrap gap-1">
              {cat.items.map((item) => (
                <StackIcon key={item.tooltip} item={item} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
