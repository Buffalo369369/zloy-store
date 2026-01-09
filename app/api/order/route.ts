import { NextResponse } from "next/server";

type OrderItem = {
  title: string;
  qty: number;
  price: number;
  line: number;
};

export async function POST(req: Request) {
  try {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return NextResponse.json(
        { ok: false, error: "Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID" },
        { status: 500 }
      );
    }

    const body = await req.json();

    const name = String(body?.name || "").trim();
    const contact = String(body?.contact || "").trim();
    const comment = String(body?.comment || "").trim();

    const items: OrderItem[] = Array.isArray(body?.items) ? body.items : [];
    const subtotal = Number(body?.subtotal || 0);
    const delivery = Number(body?.delivery || 0);
    const total = Number(body?.total || 0);

    // Собираем текст
    const lines = items
      .map(
        (x, i) =>
          `${i + 1}) ${x.title}\n   qty: ${x.qty}  ×  €${x.price}  =  €${x.line}`
      )
      .join("\n\n");

    const text =
      `🧾 *Новый заказ*\n\n` +
      `👤 *Имя:* ${escapeMd(name || "-")}\n` +
      `📱 *Контакт:* ${escapeMd(contact || "-")}\n` +
      `📝 *Комментарий:* ${escapeMd(comment || "-")}\n\n` +
      `📦 *Товары:*\n${escapeMd(lines || "—")}\n\n` +
      `💰 *Сумма:* €${subtotal}\n` +
      `🚚 *Доставка:* €${delivery}\n` +
      `✅ *Итого:* €${total}`;

    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "MarkdownV2",
      }),
    });

    const data = await res.json();
    if (!data?.ok) {
      return NextResponse.json(
        { ok: false, error: data?.description || "Telegram error" },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, error: e?.message || "Unknown error" },
      { status: 500 }
    );
  }
}

// Telegram MarkdownV2 экранирование
function escapeMd(s: string) {
  return s.replace(/[_*[\]()~`>#+=|{}.!-]/g, "\\$&");
}