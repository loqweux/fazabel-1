"use client";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { NAV, ORANGE, SUBNAV, USLUGI_FAMILY } from "@/lib/constants";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const close = () => setOpen(false);
  const goSubnav = () => navigate("/elektrosnabzhenie");

  return (
    <header
      className="sticky top-0 z-50 bg-[#15171b] text-white"
      style={{ transform: "translateZ(0)", isolation: "isolate" }}
    >
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-1.5 text-[10px] text-white/50">
          <span className="hidden sm:inline">работаем по всей Беларуси</span>
          <div className="flex items-center gap-5">
            <a
              href="mailto:info@fazabel.by"
              className="hidden transition hover:text-white sm:inline"
            >
              info@fazabel.by
            </a>
            <a href="tel:+375291060170" className="transition hover:text-white">
              +375 (29) 10-60-170
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <Link to="/" onClick={close} className="shrink-0">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-6 text-[12px] xl:flex">
          {NAV.map((item) => {
            const isActive =
              item.href === pathname ||
              (item.dropdown && USLUGI_FAMILY.includes(pathname));
            return (
              <div key={item.label} className="group relative">
                <Link
                  to={item.href}
                  className="flex items-center gap-1 whitespace-nowrap py-2 transition hover:text-[#f47a20]"
                  style={{
                    color: isActive ? ORANGE : "rgba(255,255,255,0.85)",
                  }}
                >
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown
                      size={12}
                      className="transition group-hover:rotate-180"
                    />
                  )}
                </Link>
                {item.dropdown && (
                  <div className="invisible absolute left-0 top-full w-64 translate-y-1 border-t-2 border-[#f47a20] bg-[#15171b] opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {item.dropdown.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="block border-b border-white/5 px-4 py-3 text-[13px] font-semibold text-white/85 transition hover:bg-white/5 hover:text-[#f47a20]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
        <div className="flex shrink-0 items-center gap-3">
          <Link
            to="/contacts"
            className="hidden items-center whitespace-nowrap rounded-md px-4 py-2 text-[12px] font-semibold text-white transition hover:brightness-110 md:flex"
            style={{ background: ORANGE }}
          >
            Заказать звонок
          </Link>
          <button
            className="xl:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Меню"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div className="hidden border-t border-white/10 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-x-4 px-5 py-2.5 text-[10px] uppercase tracking-[0.08em] text-white/70 lg:gap-x-7">
          {SUBNAV.map((s, idx) => (
            <div key={s} className="flex items-center gap-x-4 lg:gap-x-7">
              <button
                onClick={goSubnav}
                className="cursor-pointer transition hover:text-[#f47a20]"
              >
                {s}
              </button>
              {idx < SUBNAV.length - 1 && (
                <ChevronRight
                  size={13}
                  className="shrink-0"
                  style={{ color: ORANGE }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-white/10 xl:hidden"
          >
            <div className="flex flex-col gap-3 px-5 py-4 text-sm">
              {NAV.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.href}
                    onClick={close}
                    className="text-white/85"
                  >
                    {item.label}
                  </Link>
                  {item.dropdown && (
                    <div className="mt-2 flex flex-col gap-2 border-l border-white/10 pl-3">
                      {item.dropdown.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          onClick={close}
                          className="text-[13px] text-white/60"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/contacts"
                onClick={close}
                className="mt-2 rounded-md px-4 py-2 text-center font-semibold"
                style={{ background: ORANGE }}
              >
                Заказать звонок
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
