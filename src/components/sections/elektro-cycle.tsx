"use client";

import { motion } from "framer-motion";
import { SectionHead } from "@/components/section-head";
import { ELEKTRO_STEPS, PURPLE } from "@/lib/constants";

export function ElektroCycleSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHead
          label="Электроснабжение"
          title="Полный цикл работ по электроснабжению"
          text="Берём на себя весь процесс — от технических условий до ежегодной подготовки к осенне-зимнему периоду."
        />
        <div className="mt-10 rounded-2xl border border-[#e7e8ea] bg-[#f3f4f6] p-8 md:p-10">
          <div className="grid gap-x-10 gap-y-7 md:grid-cols-2">
            {ELEKTRO_STEPS.map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.45, delay: (i % 6) * 0.05 }}
                whileHover={{ x: 4 }}
                className="group flex cursor-default gap-4"
              >
                <motion.span
                  whileHover={{ scale: 1.15, rotate: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 12 }}
                  className="shrink-0 text-xl font-extrabold leading-none transition-colors group-hover:text-[#f47a20]"
                  style={{ color: PURPLE }}
                >
                  {String(i + 1).padStart(2, "0")}
                </motion.span>
                <p className="text-[13px] font-semibold uppercase leading-relaxed tracking-[0.01em] text-[#20222a]">
                  {step}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
