"use client";

import { Container, Card, Button, SectionTitle } from "@/components/Ui";
import { products } from "@/lib/data";
import { moneyEUR } from "@/lib/money";
import { clearCart, getCart, DELIVERY_PRICE } from "@/lib/cart";
import { useEffect, useMemo, useState } from "react";
import Quantity from "@/components/Quantity";
import Link from "next/link";

type CartItem = { slug: string; qty: number };

export default function CartPage() {
  // ⛔️ НЕ читаем localStorage в первом рендере
  const [items, setItems] = useState<CartItem[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // ✅ читаем корзину только на клиенте после mount
    const update = () => setItems(getCart());
    update();

    window.addEventListener("cart", update as any);
    window.addEventListener("storage", update);

    return () => {
      window.removeEventListener("cart", update as any);
      window.removeEventListener("storage", update);
    };
  }, []);

  const rows = useMemo(() => {
    return items
      .map((x) => {
        const p = products.find((p) => p.slug === x.slug);
        if (!p) return null;
        return { ...x, product: p, line: p.price * x.qty };
      })
      .filter(Boolean) as Array<{ slug: string; qty: number; product: any; line: number }>;
  }, [items]);

  const subtotal = rows.reduce((s, r) => s + r.line, 0);
  const total = rows.length ? subtotal + DELIVERY_PRICE : 0;

  return (
    <main className="py-14 bg-neutral-50">
      <Container>
        <SectionTitle kicker="Покупки" title="Корзина"  />

        {/* ✅ чтобы не было hydration mismatch — показываем одинаковый первый рендер */}
        {!mounted ? (
          <Card className="mt-10 p-8 text-center">
            <div className="text-lg font-bold">Загрузка корзины…</div>
          </Card>
        ) : rows.length === 0 ? (
          <Card className="mt-10 p-8 text-center">
            <div className="text-lg font-bold">Корзина пуста</div>
            <Link href="/shop" className="mt-4 inline-flex underline underline-offset-4">
              Перейти в магазин →
            </Link>
          </Card>
        ) : (
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Card className="p-6 md:col-span-2">
              <div className="space-y-5">
                {rows.map((r) => (
                  <div key={r.slug} className="flex items-center justify-between gap-4 border-b border-black/10 pb-4">
                    <div>
                      <div className="font-bold">{r.product.title}</div>
                      <div className="text-sm text-neutral-600">{moneyEUR(r.product.price)} / шт</div>
                    </div>

                    <Quantity slug={r.slug} initial={r.qty} />

                    <div className="font-bold">{moneyEUR(r.line)}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => clearCart()}
                  className="rounded-md border border-black/10 bg-white px-4 py-2 text-sm font-semibold hover:bg-black/5"
                >
                  Очистить корзину
                </button>
                <Button href="/shop">Добавить ещё</Button>
              </div>
            </Card>

            <Card className="p-6 h-fit">
              <div className="text-lg font-extrabold">Итого</div>

              <div className="mt-3 space-y-2 text-sm text-neutral-700">
                <div className="flex items-center justify-between">
                  <span>Сумма товаров</span>
                  <span className="font-bold">{moneyEUR(subtotal)}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span>Доставка</span>
                  <span className="font-bold">{moneyEUR(DELIVERY_PRICE)}</span>
                </div>

                <div className="pt-2 border-t border-black/10 flex items-center justify-between text-base">
                  <span className="font-extrabold">Итого</span>
                  <span className="font-extrabold">{moneyEUR(total)}</span>
                </div>
              </div>

              <Button href="/checkout" className="mt-6 w-full">
                Перейти к оформлению →
              </Button>

              <p className="mt-3 text-xs text-neutral-500">Оплата/доставка — добавим позже.</p>
            </Card>
          </div>
        )}
      </Container>
    </main>
  );
}