import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SectionHead } from "@/components/section-head";
import { ContactForm } from "@/components/contact-form";
import { ORANGE } from "@/lib/constants";

export default function ContactsPage() {
  return (
    <section id="contact" className="bg-[#15171b] py-20 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2">
        <div>
          <SectionHead
            label="Свяжитесь с нами"
            title="Обсудим ваш объект"
            text="Оставьте заявку — инженер свяжется с вами, уточнит задачу и подготовит расчёт стоимости работ."
            dark
          />
          <div className="mt-10 flex flex-col gap-5">
            <a
              href="tel:+375291060170"
              className="flex items-center gap-4 text-lg font-semibold"
            >
              <span
                className="grid h-11 w-11 place-items-center rounded-md"
                style={{ background: ORANGE }}
              >
                <Phone size={18} />
              </span>
              +375 (29) 10-60-170
            </a>
            <a
              href="mailto:info@fazabel.by"
              className="flex items-center gap-4 text-base text-white/85"
            >
              <span className="grid h-11 w-11 place-items-center rounded-md bg-white/10">
                <Mail size={18} style={{ color: ORANGE }} />
              </span>
              info@fazabel.by
            </a>
            <div className="flex items-center gap-4 text-sm text-white/70">
              <span className="grid h-11 w-11 place-items-center rounded-md bg-white/10">
                <MapPin size={18} style={{ color: ORANGE }} />
              </span>
              Республика Беларусь, г. Минск — работаем по всей стране
            </div>
            <div className="flex items-center gap-4 text-sm text-white/70">
              <span className="grid h-11 w-11 place-items-center rounded-md bg-white/10">
                <Clock size={18} style={{ color: ORANGE }} />
              </span>
              Пн–Пт 9:00–18:00 · аварийный выезд по договору 24/7
            </div>
          </div>
        </div>
        <ContactForm source="Страница «Контакты»" />
      </div>
    </section>
  );
}
