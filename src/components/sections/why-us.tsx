"use client";

import { motion } from "framer-motion";
import { ThemeCard } from "@/components/ui/theme-card";
import { SectionHead } from "@/components/section-head";
import { ORANGE, PURPLE, WHY } from "@/lib/constants";

const ACCENTS = [ORANGE, PURPLE, ORANGE, PURPLE];

export function WhyUs() {
  return (
    <section className="bg-[#f3f4f6] py-20">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHead
          label="Почему мы"
          title="Работаем строго, прозрачно и в срок"
          text="Масштаб объекта не имеет значения — подход к качеству и документам одинаковый для всех. Наведите курсор на карточку."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHY.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="h-[300px]"
            >
              <ThemeCard
                icon={w.icon}
                category={w.category}
                title={w.title}
                description={w.desc}
                imageSrc={w.image}
                imageAlt={w.title}
                accent={ACCENTS[i % ACCENTS.length]}
                className="h-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
