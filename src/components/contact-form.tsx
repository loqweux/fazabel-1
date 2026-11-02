"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { ORANGE } from "@/lib/constants";

export function ContactForm({ source }: { source: string }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/send-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source }),
      });

      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", phone: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const inputCls =
    "mt-1.5 w-full border border-[#dfe1e4] bg-white px-4 py-3 text-sm text-[#15171b] outline-none transition placeholder:text-[#a4a8ae] focus:border-[#f47a20]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="bg-white p-8 text-[#15171b] md:p-10"
    >
      <h3 className="font-display text-2xl font-extrabold">Оставьте заявку</h3>
      <p className="mt-2 text-[14px] leading-relaxed text-[#5d6168]">
        Заполните форму — инженер перезвонит, ответит на вопросы и рассчитает
        стоимость. Обязательны только имя и телефон. Раздел: {source}.
      </p>
      <form onSubmit={handleSubmit} className="mt-7 flex flex-col gap-4">
        {/* ... (поля ввода остаются такими же) ... */}
        <label className="text-[13px] font-semibold">
          Имя *
          <input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Как к вам обращаться"
            className={inputCls}
          />
        </label>
        <label className="text-[13px] font-semibold">
          Телефон *
          <input
            required
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="+375 (__) ___-__-__"
            className={inputCls}
          />
        </label>
        <label className="text-[13px] font-semibold">
          Email{" "}
          <span className="font-normal text-[#a4a8ae]">(необязательно)</span>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="mail@example.com"
            className={inputCls}
          />
        </label>
        <label className="text-[13px] font-semibold">
          Сообщение{" "}
          <span className="font-normal text-[#a4a8ae]">(необязательно)</span>
          <textarea
            rows={3}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Коротко опишите задачу или объект"
            className={`${inputCls} resize-none`}
          />
        </label>

        <motion.button
          whileHover={{ scale: 1.015 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={status === "sending"}
          className="mt-2 flex w-full items-center justify-center gap-2 py-3.5 text-sm font-semibold text-white transition hover:brightness-110 disabled:opacity-60"
          style={{ background: ORANGE }}
        >
          {status === "sending" ? (
            "Отправляем…"
          ) : (
            <>
              <Send size={15} /> Оставить заявку
            </>
          )}
        </motion.button>

        {status === "sent" && (
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 text-center text-[13px] font-semibold"
            style={{ color: ORANGE }}
          >
            <CheckCircle2 size={16} /> Спасибо! Инженер свяжется с вами в
            ближайшее время.
          </motion.p>
        )}

        {status === "error" && (
          <p className="text-center text-[13px] font-semibold text-red-500">
            Не удалось отправить заявку. Пожалуйста, позвоните нам по телефону.
          </p>
        )}

        <p className="text-center text-[11px] text-[#8a8f96]">
          Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
        </p>
      </form>
    </motion.div>
  );
}
