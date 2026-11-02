import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { Logo } from "@/components/logo";
import { ORANGE } from "@/lib/constants";

const LINKS = [
  { href: "/", label: "Главная" },
  { href: "/uslugi", label: "Услуги" },
  { href: "/elektrosnabzhenie", label: "Электроснабжение" },
  { href: "/vyzov-elektrika", label: "Вызов электрика" },
  { href: "/predproekt", label: "Предпроект" },
  { href: "/konkurentnoe", label: "Конкурентное предложение" },
  { href: "/contacts", label: "Контакты" },
];

export function SiteFooter() {
  return (
    <footer
      className="border-t-2 bg-[#0e1013] text-white"
      style={{ borderColor: ORANGE }}
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-[13px] leading-relaxed text-white/60">
            Инженерные системы под ключ с 2021 года. Официально, с гарантией на
            работы.
          </p>
          <p className="mt-4 text-[12px] text-white/40">fazabel.by</p>
        </div>
        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">
            Разделы
          </h4>
          <ul className="mt-5 flex flex-col gap-3 text-[14px] text-white/80">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link to={l.href} className="transition hover:text-[#f47a20]">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">
            Контакты
          </h4>
          <ul className="mt-5 flex flex-col gap-4 text-[14px] text-white/80">
            <li className="flex items-center gap-3">
              <Phone size={15} style={{ color: ORANGE }} /> +375 (29) 10-60-170
            </li>
            <li className="flex items-center gap-3">
              <Mail size={15} style={{ color: ORANGE }} /> info@fazabel.by
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={15} style={{ color: ORANGE }} /> Республика
              Беларусь, г. Минск
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-[12px] text-white/40 md:flex-row">
          <span>© 2026 ФАЗА.БЕЛ. Все права защищены.</span>
          <span>fazabel.by</span>
        </div>
      </div>
    </footer>
  );
}
