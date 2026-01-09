"use client";

import { Container, Card, SectionTitle, Button } from "@/components/Ui";
import { clearCart, getCart, DELIVERY_PRICE } from "@/lib/cart";
import { products } from "@/lib/data";
import { moneyEUR } from "@/lib/money";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type CartItem = { slug: string; qty: number };

export default function CheckoutPage() {
  const [mounted, setMounted] = useState(false);

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ читаем localStorage только после mount
  useEffect(() => {
    setMounted(true);

    const update = () => setCartItems(getCart());
    update();

    window.addEventListener("cart", update as any);
    window.addEventListener("storage", update);

    return () => {
      window.removeEventListener("cart", update as any);
      window.removeEventListener("storage", update);
    };
  }, []);

  const rows = useMemo(() => {
    if (!mounted) return [];

    return cartItems
      .map((x) => {
        const p = products.find((p) => p.slug === x.slug);
        if (!p) return null;
        const line = p.price * x.qty;
        return { title: p.title, qty: x.qty, price: p.price, line };
      })
      .filter(Boolean) as Array<{ title: string; qty: number; price: number; line: number }>;
  }, [cartItems, mounted]);

  const subtotal = useMemo(() => rows.reduce((s, r) => s + r.line, 0), [rows]);
  const delivery = mounted && rows.length ? DELIVERY_PRICE : 0;
  const total = subtotal + delivery;

  async function submit() {
    if (!mounted) return;

    if (rows.length === 0) {
      alert("Корзина пустая 😅");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name,
          contact,
          comment,
          items: rows,
          subtotal,
          delivery,
          total,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data?.ok) {
        alert("Ошибка отправки заказа: " + (data?.error || "unknown"));
        return;
      }

      clearCart();
      alert("Заказ отправлен ✅ Мы скоро свяжемся.");
      // window.location.href = "/shop";
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="py-14 bg-neutral-50">
      <Container>
        <SectionTitle
          kicker="Финиш"
          title="Оформление заказа"
          sub="Заполняете форму — заказ улетает в Telegram."
        />

        <Card className="mt-10 p-8 max-w-2xl mx-auto">
          {/* Сводка */}
          <div className="rounded-xl border border-black/10 bg-white p-5">
            <div className="font-semibold">Сводка заказа</div>

            <div className="mt-3 grid gap-2 text-sm text-neutral-700">
              <div className="flex justify-between">
                <span>Сумма товаров</span>
                <span className="font-semibold">{moneyEUR(subtotal)}</span>
              </div>

              <div className="flex justify-between">
                <span>Доставка</span>
                <span className="font-semibold">{moneyEUR(delivery)}</span>
              </div>

              <div className="h-px bg-black/10 my-2" />

              <div className="flex justify-between">
                <span className="font-semibold">Итого</span>
                <span className="font-extrabold">{moneyEUR(total)}</span>
              </div>

              {!mounted ? (
                <div className="mt-2 text-xs text-neutral-500">Загружаю корзину…</div>
              ) : null}
            </div>
          </div>

          <div className="grid gap-4 mt-6">
            <label className="text-sm font-semibold">
              Имя
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 w-full rounded-md border border-black/10 px-4 py-3"
                placeholder="Ваше имя"
              />
            </label>

            <label className="text-sm font-semibold">
              Телефон / Telegram
              <input
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="mt-2 w-full rounded-md border border-black/10 px-4 py-3"
                placeholder="@username или номер"
              />
            </label>

            <label className="text-sm font-semibold">
              Комментарий
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="mt-2 w-full rounded-md border border-black/10 px-4 py-3 min-h-[120px]"
                placeholder="Адрес/пожелания…"
              />
            </label>

            <div className="flex flex-wrap gap-3 mt-2">
              <Button onClick={submit} disabled={loading || !mounted}>
                {loading ? "Отправляю..." : "Подтвердить заказ →"}
              </Button>

              <Link
                href="/cart"
                className="inline-flex items-center justify-center rounded-md border border-black/10 bg-white px-5 py-3 text-sm font-semibold hover:bg-black/5"
              >
                ← Назад в корзину
              </Link>
            </div>
          </div>
        </Card>
      </Container>
    </main>
  );
}