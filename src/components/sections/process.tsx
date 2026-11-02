"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionHead } from "@/components/section-head";
import { ORANGE, PURPLE } from "@/lib/constants";

export function Process({
  steps,
  label = "Процесс",
  title = "Как мы ведём проект",
  text = "Понятные этапы работы с фиксацией результата на каждом шаге.",
  accent = ORANGE,
  className = "bg-white",
}: {
  steps: { n: string; title: string; desc: string }[];
  label?: string;
  title?: string;
  text?: string;
  accent?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.35"],
  });
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className={`${className} py-20`}>
      <div className="mx-auto max-w-7xl px-5">
        <SectionHead label={label} title={title} text={text} />

        <div ref={ref} className="relative mt-14">
          {/* Линия на десктопе */}
          <div className="absolute left-0 right-0 top-[9px] hidden h-[2px] bg-[#e7e8ea] md:block" />
          <motion.div
            style={{ scaleX }}
            className="absolute left-0 right-0 top-[9px] hidden h-[2px] origin-left md:block"
          >
            <div
              className="h-full w-full"
              style={{
                background: `linear-gradient(90deg, ${accent}, ${PURPLE})`,
              }}
            />
          </motion.div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="relative pt-2"
              >
                {/* Тот самый кружок: hidden на мобилке, md:inline-grid на десктопе */}
                <motion.span
                  initial={{ scale: 0.6, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 14,
                    delay: i * 0.1,
                  }}
                  className="relative z-10 mb-4 hidden h-5 w-5 place-items-center rounded-full md:inline-grid"
                  style={{ background: accent }}
                >
                  <span className="h-2 w-2 rounded-full bg-white" />
                </motion.span>

                <div className="rounded-xl border border-transparent p-1 transition-colors hover:border-[#eceef1]">
                  <span
                    className="text-4xl font-extrabold"
                    style={{ color: accent }}
                  >
                    {s.n}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-[#15171b]">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#5d6168]">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
