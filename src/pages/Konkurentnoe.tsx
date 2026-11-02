import { SectionHead } from "@/components/section-head";
import { Process } from "@/components/sections/process";
import { CtaBand } from "@/components/cta-band";
import { IconBadge } from "@/components/icon-badge";
import {
  IMG,
  KONKURENT_BENEFITS,
  KONKURENT_STEPS,
  ORANGE,
} from "@/lib/constants";

export default function KonkurentnoePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#15171b] py-16 text-white">
        <img
          src={IMG.trading}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#0e1013] via-[#0e1013]/90 to-[#0e1013]/75" />
        <div className="relative mx-auto max-w-7xl px-5">
          <p
            className="text-[11px] font-bold uppercase tracking-[0.2em]"
            style={{ color: ORANGE }}
          >
            Конкурентное предложение
          </p>
          <h1 className="mt-2 max-w-2xl font-display text-3xl font-extrabold tracking-tight md:text-5xl">
            Сравните предложение и получите более выгодные условия
          </h1>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white/60">
            Пришлите коммерческое предложение другого подрядчика — подготовим
            аналогичное техническое решение и предложим прозрачную, конкурентную
            цену без потери качества и легальности работ.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHead
            label="Почему выгодно"
            title="Что вы получаете при сравнении"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {KONKURENT_BENEFITS.map((w) => (
              <div
                key={w.title}
                className="h-full rounded-xl border border-[#ececec] bg-[#f8f8f9] p-7 transition hover:border-[#d9dbe0] hover:shadow-sm"
              >
                <IconBadge icon={w.icon} color={ORANGE} />
                <h3 className="mt-5 text-[16px] font-bold leading-snug text-[#15171b]">
                  {w.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-[#5d6168]">
                  {w.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Process
        steps={KONKURENT_STEPS}
        label="Как это работает"
        title="Процесс сравнения предложений"
        text=""
        accent={ORANGE}
        className="bg-[#f3f4f6]"
      />

      <CtaBand
        label="Сравнение"
        title="Отправьте предложение на сравнение"
        text="Приложите смету или опишите задачу в сообщении — подготовим встречное предложение."
        buttonLabel="Отправить на сравнение"
      />
    </>
  );
}
