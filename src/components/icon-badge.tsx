"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Wrench,
  CheckCircle2,
  Layers,
  Cpu,
  BadgeCheck,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  ShieldCheck,
  Wrench,
  CheckCircle2,
  Layers,
  Cpu,
  BadgeCheck,
};

export function IconBadge({
  icon,
  color = "#f47a20",
  size = 20,
}: {
  icon: string;
  color?: string;
  size?: number;
}) {
  const Icon = ICONS[icon] ?? ShieldCheck;
  return (
    <span
      className="grid h-11 w-11 shrink-0 place-items-center rounded-xl transition-transform duration-300 hover:scale-105"
      style={{ background: `color-mix(in srgb, ${color} 14%, transparent)`, color }}
    >
      <Icon size={size} strokeWidth={2.2} />
    </span>
  );
}

export function IconDot({
  icon,
  color = "#6155F5",
}: {
  icon: string;
  color?: string;
}) {
  const Icon = ICONS[icon] ?? CheckCircle2;
  return (
    <motion.span
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.3, rotate: 8 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
      className="mt-0.5 inline-flex shrink-0"
      style={{ color }}
    >
      <Icon size={16} strokeWidth={2.4} />
    </motion.span>
  );
}
