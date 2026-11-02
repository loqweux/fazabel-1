"use client";

import { motion } from "framer-motion";
import { SectionHead } from "@/components/section-head";
import { OBJECTS } from "@/lib/constants";

export function Objects() {
  return (
    <section className="bg-[#f3f4f6] py-20">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHead
          label="Наши работы"
          title="Объекты, которые мы оснастили"
          text="Реализуем проекты любой сложности — от отдельного магазина до крупных промышленных и торговых комплексов."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {OBJECTS.map((o, i) => (
            <motion.div
              key={o.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative h-[340px] overflow-hidden rounded-lg border border-black/5 bg-[#15171b]"
            >
              <motion.img
                src={o.img}
                alt={o.title}
                className="h-full w-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0e1013] via-[#0e1013]/55 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 translate-y-1 p-6 text-white transition-transform duration-300 group-hover:translate-y-0">
                <h3 className="text-lg font-bold leading-snug">{o.title}</h3>
                <p className="mt-2 max-h-0 overflow-hidden text-[12px] leading-relaxed text-white/70 opacity-0 transition-all duration-300 group-hover:mt-2 group-hover:max-h-40 group-hover:opacity-100">
                  {o.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
