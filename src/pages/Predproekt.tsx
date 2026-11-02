import { SectionHead } from "@/components/section-head";
import { Process } from "@/components/sections/process";
import { CtaBand } from "@/components/cta-band";
import { IconDot } from "@/components/icon-badge";
import {
  IMG,
  PREPROEKT_ITEMS,
  PREPROEKT_STEPS,
  ORANGE,
  PURPLE,
} from "@/lib/constants";

export default function PredproektPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#15171b] py-16 text-white">
        <img
          src={IMG.board}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#0e1013] via-[#0e1013]/90 to-[#0e1013]/75" />
        <div className="relative mx-auto max-w-7xl px-5">
          <p
            className="text-[11px] font-bold uppercase tracking-[0.2em]"
            style={{ color: ORANGE }}
          >
            Предпроект
          </p>
          <h1 className="mt-2 max-w-2xl font-display text-3xl font-extrabold tracking-tight md:text-5xl">
            Предпроектное обследование объекта
          </h1>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white/60">
            Перед проектированием и монтажом выезжаем на объект, фиксируем
            исходные данные и предлагаем оптимальное техническое решение — это
            помогает избежать ошибок и лишних затрат на следующих этапах.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHead
            label="Что входит"
            title="Что входит в предпроект"
            text="Результат предпроекта — понятное техническое решение и предварительная стоимость ещё до заключения договора."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PREPROEKT_ITEMS.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-lg border border-[#ececec] bg-[#f8f8f9] p-4"
              >
                <IconDot icon="CheckCircle2" color={PURPLE} />
                <span className="text-[14px] leading-snug text-[#30333a]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Process
        steps={PREPROEKT_STEPS}
        label="Процесс"
        title="Как проходит предпроект"
        text=""
        className="bg-[#f3f4f6]"
      />

      <CtaBand
        label="Начало работы"
        title="Запросите предпроект"
        text="Оставьте заявку — инженер согласует выезд на объект и подготовит предварительное решение."
        buttonLabel="Запросить предпроект"
      />
    </>
  );
}
