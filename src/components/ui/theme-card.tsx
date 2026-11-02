"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/utils/cn";

interface ThemeCardProps {
  icon: LucideIcon;
  category: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  accent?: string;
  className?: string;
}

// Кэш обработанных изображений, чтобы не пересчитывать при повторных рендерах
const processedImageCache = new Map<string, string>();

/**
 * Хук удаляет внешний тёмный фон у картинок, превращая их в честный прозрачный PNG
 */
function useTransparentImage(src: string) {
  const [cleanSrc, setCleanSrc] = React.useState<string>(
    () => processedImageCache.get(src) || src,
  );

  React.useEffect(() => {
    if (processedImageCache.has(src)) {
      setCleanSrc(processedImageCache.get(src)!);
      return;
    }

    let isMounted = true;
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;

    img.onload = () => {
      try {
        const w = img.naturalWidth || img.width;
        const h = img.naturalHeight || img.height;
        if (!w || !h) return;

        const canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext("2d", { willReadFrequently: true });
        if (!ctx) return;

        ctx.drawImage(img, 0, 0);
        const imgData = ctx.getImageData(0, 0, w, h);
        const d = imgData.data;

        // Flood-fill (BFS) с краев: удаляем только внешний черный фон
        const visited = new Uint8Array(w * h);
        const queue = new Int32Array(w * h);
        let qHead = 0;
        let qTail = 0;

        const isDark = (idx: number) => {
          const p = idx * 4;
          return Math.max(d[p], d[p + 1], d[p + 2]) < 55;
        };

        // Добавляем крайние пиксели по периметру
        for (let x = 0; x < w; x++) {
          const top = x;
          const btm = (h - 1) * w + x;
          if (isDark(top) && !visited[top]) {
            visited[top] = 1;
            queue[qTail++] = top;
          }
          if (isDark(btm) && !visited[btm]) {
            visited[btm] = 1;
            queue[qTail++] = btm;
          }
        }
        for (let y = 0; y < h; y++) {
          const left = y * w;
          const right = y * w + (w - 1);
          if (isDark(left) && !visited[left]) {
            visited[left] = 1;
            queue[qTail++] = left;
          }
          if (isDark(right) && !visited[right]) {
            visited[right] = 1;
            queue[qTail++] = right;
          }
        }

        // Обходим внешний фон
        while (qHead < qTail) {
          const curr = queue[qHead++];
          const cx = curr % w;
          const cy = Math.floor(curr / w);
          const p = curr * 4;

          const maxVal = Math.max(d[p], d[p + 1], d[p + 2]);
          if (maxVal < 26) {
            d[p + 3] = 0; // Полная прозрачность
          } else {
            // Мягкий переход для сглаживания ореола
            d[p + 3] = Math.round(((maxVal - 26) / 29) * 255);
          }

          const neighbors = [
            cy > 0 ? curr - w : -1,
            cy < h - 1 ? curr + w : -1,
            cx > 0 ? curr - 1 : -1,
            cx < w - 1 ? curr + 1 : -1,
          ];

          for (let i = 0; i < 4; i++) {
            const nIdx = neighbors[i];
            if (nIdx !== -1 && !visited[nIdx]) {
              const np = nIdx * 4;
              const nMax = Math.max(d[np], d[np + 1], d[np + 2]);
              if (nMax < 55) {
                visited[nIdx] = 1;
                queue[qTail++] = nIdx;
              }
            }
          }
        }

        ctx.putImageData(imgData, 0, 0);
        const transparentUrl = canvas.toDataURL("image/png");
        processedImageCache.set(src, transparentUrl);

        if (isMounted) {
          setCleanSrc(transparentUrl);
        }
      } catch {
        if (isMounted) setCleanSrc(src);
      }
    };

    return () => {
      isMounted = false;
    };
  }, [src]);

  return cleanSrc;
}

export const ThemeCard = React.forwardRef<HTMLDivElement, ThemeCardProps>(
  (
    {
      className,
      icon: Icon,
      category,
      title,
      description,
      imageSrc,
      imageAlt,
      accent = "#f47a20",
    },
    ref,
  ) => {
    const cleanImageSrc = useTransparentImage(imageSrc);

    const mouseX = useMotionValue(175);
    const mouseY = useMotionValue(175);

    const handleMouseMove = ({
      clientX,
      clientY,
      currentTarget,
    }: React.MouseEvent) => {
      const { left, top } = currentTarget.getBoundingClientRect();
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    };

    const rotateX = useTransform(mouseY, [0, 350], [4, -4]);
    const rotateY = useTransform(mouseX, [0, 350], [-4, 4]);

    const springConfig = { stiffness: 260, damping: 22 };
    const springRotateX = useSpring(rotateX, springConfig);
    const springRotateY = useSpring(rotateY, springConfig);

    const glowX = useTransform(mouseX, (v) => `${v}px`);
    const glowY = useTransform(mouseY, (v) => `${v}px`);
    const glowBackground = useTransform(
      [glowX, glowY],
      ([x, y]) =>
        `radial-gradient(180px circle at ${x} ${y}, ${accent}26, transparent 70%)`,
    );

    return (
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          mouseX.set(175);
          mouseY.set(175);
        }}
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: "preserve-3d",
        }}
        className={cn(
          "group relative isolate h-full overflow-hidden rounded-2xl border border-white/10 bg-[#15171b] shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)] transition-shadow duration-300",
          className,
        )}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            boxShadow: `0 0 0 1px ${accent}55, 0 0 30px 2px ${accent}33`,
          }}
        />

        {/* Фоновая сетка теперь свободно видна под картинкой без каких-либо квадратов */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:28px_28px] [mask-image:radial-gradient(ellipse_60%_60%_at_30%_30%,#000_60%,transparent_100%)]" />

        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: glowBackground }}
        />

        <div
          style={{ transform: "translateZ(30px)" }}
          className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-7"
        >
          <div className="flex items-center gap-2 text-white/80">
            <Icon
              className="h-4 w-4"
              style={{ color: accent }}
              strokeWidth={2.2}
            />
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em]">
              {category}
            </span>
          </div>

          <div className="relative mt-10 max-w-[62%] text-white">
            <h3 className="text-xl font-bold leading-snug sm:text-[22px]">
              {title}
            </h3>
            <p className="mt-2.5 text-[13px] leading-relaxed text-white/55">
              {description}
            </p>
          </div>
        </div>

        {/* Чистый прозрачный объект без фоновых квадратов и рамок */}
        <motion.img
          src={cleanImageSrc}
          alt={imageAlt}
          style={{ transform: "translateZ(40px)" }}
          whileHover={{ scale: 1.06, y: -6 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="pointer-events-none select-none absolute -right-6 -bottom-6 h-36 w-36 object-contain opacity-95 drop-shadow-[0_16px_24px_rgba(0,0,0,0.6)] sm:h-44 sm:w-44"
        />
      </motion.div>
    );
  },
);

ThemeCard.displayName = "ThemeCard";
