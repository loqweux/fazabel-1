"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { IMG, ORANGE, STATS } from "@/lib/constants";
import { useEffect, useRef, useState } from "react";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) setStarted(true);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, value]);

  return (
    <span
      ref={ref}
      className="font-display text-3xl font-extrabold text-white md:text-4xl"
    >
      {n}
      {suffix}
    </span>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden text-white">
      <img
        src={IMG.hero}
        alt="Электроустановка"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-r from-[#0e1013] via-[#0e1013]/85 to-[#0e1013]/45" />

      <div
        aria-hidden
        className="animate-float-slow absolute -left-20 top-10 h-72 w-72 rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, #f47a20, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="animate-float-slower absolute right-0 top-40 h-96 w-96 rounded-full opacity-15 blur-3xl"
        style={{
          background: "radial-gradient(circle, #6155F5, transparent 70%)",
        }}
      />

      <div className="relative mx-auto flex max-w-7xl flex-col px-5 pb-16 pt-20 md:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/70"
        >
          <MapPin size={13} style={{ color: ORANGE }} />
          <span>Работаем по всей Беларуси</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 flex items-center gap-3 text-xl font-semibold md:text-2xl"
          style={{ color: ORANGE }}
        >
          <span
            className="h-6 w-[3px] shrink-0 rounded-full"
            style={{ background: ORANGE }}
          />
          <span>Инженерные системы под ключ</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.18 }}
          className="mt-4 border-l-[3.5px] pl-4 md:pl-5"
          style={{ borderColor: ORANGE }}
        >
          <h1 className="max-w-3xl font-display text-4xl font-extrabold leading-[1.08] tracking-tight md:text-6xl">
            Электроснабжение объекта: легальность работ и безопасность
            эксплуатации
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.26 }}
          className="mt-6 max-w-2xl text-[11px] leading-relaxed tracking-[0.1em] text-white/60"
        >
          <p>
            • ПРОЕКТИРОВАНИЕ • МОНТАЖ • НАЛАДКА • ЭФИ • ВВОД В ЭКСПЛУАТАЦИЮ
            (ДОПУСК)
          </p>
          <p className="mt-1">
            • ОБСЛУЖИВАНИЕ • ТЕКУЩИЙ РЕМОНТ ЭЛЕКТРОУСТАНОВОК
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.34 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            to="/contacts"
            className="flex items-center gap-2 rounded-md px-7 py-3.5 text-sm font-semibold text-white transition hover:brightness-110"
            style={{ background: ORANGE }}
          >
            <span>Оставить заявку</span>
            <ArrowRight size={16} />
          </Link>
          <Link
            to="/uslugi"
            className="rounded-md border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#15171b]"
          >
            Наши направления
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-16 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4"
        >
          {STATS.map((s) => (
            <div key={s.label}>
              <Counter value={s.value} suffix={s.suffix} />
              <p className="mt-1 text-[11px] uppercase tracking-[0.08em] text-white/50">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
