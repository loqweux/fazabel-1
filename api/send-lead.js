export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, phone, email, message, source } = req.body;

  if (!name || !phone) {
    return res.status(400).json({ error: "Имя и телефон обязательны" });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return res.status(500).json({ error: "Telegram не настроен" });
  }

  const lines = [
    "<b>Новая заявка с сайта ФАЗА.БЕЛ</b>",
    `Имя: ${name}`,
    `Телефон: ${phone}`,
    email ? `Email: ${email}` : "",
    message ? `Сообщение: ${message}` : "",
    `Раздел: ${source || "не указан"}`,
  ].filter(Boolean);

  try {
    const tgRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: lines.join("\n"),
        parse_mode: "HTML",
      }),
    });

    const data = await tgRes.json();

    if (!tgRes.ok) {
      console.error("Telegram error:", data);
      return res.status(502).json({ error: "Telegram send failed", details: data });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Server error:", err);
    return res.status(500).json({ error: "Internal error" });
  }
}