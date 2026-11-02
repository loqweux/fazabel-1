import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SectionHead } from "@/components/section-head";
import { CtaBand } from "@/components/cta-band";
import { IconDot } from "@/components/icon-badge";
import { CALLOUT_ITEMS, DISTRICTS, IMG, ORANGE } from "@/lib/constants";

export default function VyzovElektrikaPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#15171b] py-16 text-white">
        <img
          src={IMG.camera}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#0e1013] via-[#0e1013]/90 to-[#0e1013]/75" />
        <div className="relative mx-auto max-w-7xl px-5">
          {/* Заменено с pill-badge на лаконичный чистый капс */}
          <p
            className="text-[11px] font-bold uppercase tracking-[0.2em]"
            style={{ color: ORANGE }}
          >
            Срочный выезд инженера
          </p>
          <h1 className="mt-2 max-w-2xl font-display text-3xl font-extrabold tracking-tight md:text-5xl">
            Вызов электрика в Минске и Минской области
          </h1>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white/60">
            Выезжаем в квартиры, частные дома, офисы и жилые комплексы.
            Диагностируем неисправность, устраняем на месте и оформляем акт
            выполненных работ.
          </p>
          <Link
            to="/contacts"
            className="mt-8 flex w-fit items-center gap-2 rounded-md px-7 py-3.5 text-sm font-semibold text-white transition hover:brightness-110"
            style={{ background: ORANGE }}
          >
            Вызвать электрика <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHead
            label="Что входит"
            title="Что входит в вызов электрика"
            text="Решаем типовые бытовые и аварийные задачи в день обращения."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CALLOUT_ITEMS.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-lg border border-[#ececec] bg-[#f8f8f9] p-4"
              >
                <IconDot icon="Wrench" color={ORANGE} />
                <span className="text-[14px] leading-snug text-[#30333a]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f3f4f6] py-16">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHead
            label="География"
            title="Электрик в жилых комплексах Минска"
            text="Регулярно выезжаем в эти жилые комплексы и микрорайоны — а также работаем по всему городу и области."
          />
          <div className="mt-8 flex flex-wrap gap-2.5">
            {DISTRICTS.map((d) => (
              <span
                key={d}
                className="rounded-full border border-[#e7e8ea] bg-white px-4 py-2 text-[12px] font-medium text-[#5d6168] transition hover:border-[#f47a20] hover:text-[#f47a20]"
              >
                {d}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        label="Срочный вызов"
        title="Нужен электрик сегодня?"
        text="Оставьте заявку — перезвоним в ближайшее время и согласуем удобное время выезда."
        buttonLabel="Вызвать электрика"
      />
    </>
  );
}
