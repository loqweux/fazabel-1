import { ElektroCycleSection } from "@/components/sections/elektro-cycle";
import { CtaBand } from "@/components/cta-band";
import { IMG, PURPLE } from "@/lib/constants";

export default function ElektrosnabzheniePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#15171b] py-16 text-white">
        <img src={IMG.substation} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-linear-to-r from-[#0e1013] via-[#0e1013]/90 to-[#0e1013]/70" />
        <div className="relative mx-auto max-w-7xl px-5">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: PURPLE }}>
            Электроснабжение
          </p>
          <h1 className="mt-2 max-w-3xl font-display text-3xl font-extrabold tracking-tight md:text-5xl">
            Монтаж и обслуживание систем электроснабжения
          </h1>
          <p className="mt-4 max-w-2xl text-[11px] leading-relaxed tracking-[0.12em] text-white/60">
            ПРОЕКТИРОВАНИЕ • МОНТАЖ • НАЛАДКА • ЭФИ • ВВОД В ЭКСПЛУАТАЦИЮ (ДОПУСК)
            <br />
            ОБСЛУЖИВАНИЕ • ТЕКУЩИЙ РЕМОНТ ЭЛЕКТРОУСТАНОВОК
          </p>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-white/70">
            Электрощитовые, силовые и осветительные сети, ответственный за электрохозяйство. Работы
            выполняются по ПУЭ и ТКП с полным пакетом разрешительной документации.
          </p>
        </div>
      </section>

      <ElektroCycleSection />

      <CtaBand
        label="Электроснабжение"
        title="Обсудим электроснабжение вашего объекта"
        text="Оставьте заявку — подготовим расчёт технических условий, проекта и монтажа."
      />
    </>
  );
}
