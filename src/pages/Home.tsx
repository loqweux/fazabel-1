import { Hero } from "@/components/sections/hero";
import { ElektroCycleSection } from "@/components/sections/elektro-cycle";
import { WhyUs } from "@/components/sections/why-us";
import { Process } from "@/components/sections/process";
import { Objects } from "@/components/sections/objects";
import { CtaBand } from "@/components/cta-band";
import { STEPS } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ElektroCycleSection />
      <WhyUs />
      <Process steps={STEPS} />
      <Objects />
      <CtaBand
        label="Начать проект"
        title="Обсудим ваш объект"
        text="Оставьте заявку — инженер свяжется с вами, уточнит задачу и подготовит расчёт стоимости работ."
      />
    </>
  );
}
