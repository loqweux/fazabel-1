"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconDot } from "@/components/icon-badge";
import { cn } from "@/utils/cn";
import { USLUGI_TABS } from "@/lib/constants";

export function UslugiTabs() {
  const [tab, setTab] = useState<(typeof USLUGI_TABS)[number]["id"]>(USLUGI_TABS[0].id);
  const active = USLUGI_TABS.find((t) => t.id === tab)!;

  return (
    <div>
      <div className="flex flex-wrap gap-2 border-b border-[#e7e8ea]">
        {USLUGI_TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={cn(
              "relative px-4 py-3 text-[13px] font-semibold transition-colors",
              tab === t.id ? "text-[#6155F5]" : "text-[#5d6168] hover:text-[#15171b]",
            )}
          >
            {t.label}
            {tab === t.id && (
              <motion.span
                layoutId="uslugi-tab-underline"
                className="absolute inset-x-0 -bottom-[1px] h-[2px] bg-[#6155F5]"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.25 }}
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {active.items.map((service, i) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: Math.min(i, 10) * 0.02 }}
              whileHover={{ y: -2 }}
              className="flex items-start gap-3 rounded-lg border border-[#ececec] bg-[#f8f8f9] p-4 transition hover:bg-[#f1f1f3]"
            >
              <IconDot icon="CheckCircle2" color="#6155F5" />
              <span className="text-[14px] leading-snug text-[#30333a]">{service}</span>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
