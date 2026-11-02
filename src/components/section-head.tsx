"use client";

import { motion } from "framer-motion";
import { ORANGE } from "@/lib/constants";

export function SectionHead({
  label,
  title,
  text,
  center = false,
  dark = false,
}: {
  label: string;
  title: string;
  text?: string;
  center?: boolean;
  dark?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={center ? "mx-auto max-w-2xl text-center" : "max-w-3xl"}
    >
      <p className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: ORANGE }}>
        {label}
      </p>
      <h2
        className={`mt-2 font-display text-3xl font-extrabold tracking-tight md:text-4xl ${
          dark ? "text-white" : "text-[#15171b]"
        }`}
      >
        {title}
      </h2>
      {text && (
        <p className={`mt-3 text-[15px] leading-relaxed ${dark ? "text-white/60" : "text-[#5d6168]"}`}>{text}</p>
      )}
    </motion.div>
  );
}
