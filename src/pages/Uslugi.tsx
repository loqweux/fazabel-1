import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ElektroCycleSection } from "@/components/sections/elektro-cycle";
import { SectionHead } from "@/components/section-head";
import { CtaBand } from "@/components/cta-band";
import { IMG, ORANGE } from "@/lib/constants";
import { UslugiTabs } from "./UslugiTabs";

export default function UslugiPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#15171b] py-16 text-white">
        <img
          src={IMG.substation}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#0e1013] via-[#0e1013]/90 to-[#0e1013]/70" />
        <div className="relative mx-auto max-w-7xl px-5">
          <p
            className="text-[11px] font-bold uppercase tracking-[0.2em]"
            style={{ color: ORANGE }}
          >
            Полный спектр
          </p>
          <h1 className="mt-2 max-w-2xl font-display text-3xl font-extrabold tracking-tight md:text-5xl">
            Полный спектр услуг по электроснабжению и электромонтажу
          </h1>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white/60">
            Семь этапов полного цикла — от проектирования до текущего ремонта.
            Любой этап можно заказать отдельно или доверить нам весь процесс
            целиком.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5">
          <UslugiTabs />
        </div>
      </section>

      <ElektroCycleSection />

      <section className="bg-[#f3f4f6] py-16">
        <div className="mx-auto max-w-7xl px-5 text-center">
          <SectionHead
            label="Срочная задача"
            title="Нужен разовый вызов электрика?"
            text="Если нужен выезд инженера на дом или объект без заключения долгосрочного договора — смотрите отдельный раздел по вызову электрика."
            center
          />
          <Link
            to="/vyzov-elektrika"
            className="mx-auto mt-6 flex w-fit items-center gap-2 rounded-md px-7 py-3.5 text-sm font-semibold text-white transition hover:brightness-110"
            style={{ background: ORANGE }}
          >
            Вызов электрика <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      <CtaBand
        label="Остались вопросы"
        title="Рассчитаем стоимость под ваш объект"
        text="Оставьте заявку — инженер уточнит задачу и подготовит коммерческое предложение."
      />
    </>
  );
}
