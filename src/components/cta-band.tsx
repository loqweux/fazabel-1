"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ORANGE } from "@/lib/constants";

export function CtaBand({
  label,
  title,
  text,
  buttonLabel = "Оставить заявку",
}: {
  label: string;
  title: string;
  text: string;
  buttonLabel?: string;
}) {
  return (
    <section className="bg-[#15171b] py-16 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-5 md:flex-row md:items-center md:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55 }}
        >
          <p
            className="text-[11px] font-bold uppercase tracking-[0.2em]"
            style={{ color: ORANGE }}
          >
            {label}
          </p>
          <h2 className="mt-2 max-w-xl font-display text-2xl font-extrabold tracking-tight md:text-3xl">
            {title}
          </h2>
          <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-white/60">
            {text}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          <Link
            to="/contacts"
            className="flex shrink-0 items-center gap-2 whitespace-nowrap rounded-md px-7 py-3.5 text-sm font-semibold text-white transition hover:brightness-110"
            style={{ background: ORANGE }}
          >
            {buttonLabel} <ArrowRight size={15} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
