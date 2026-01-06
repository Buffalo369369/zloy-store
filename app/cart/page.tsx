"use client";

import { Container, Card, Button, SectionTitle } from "@/components/Ui";
import { products } from "@/lib/data";
import { moneyEUR } from "@/lib/money";
import { clearCart, getCart } from "@/lib/cart";
import { useEffect, useMemo, useState } from "react";
import Quantity from "@/components/Quantity";
import Link from "next/link";

export default function CartPage() {
  const [items, setItems] = useState(getCart());

  useEffect(() => {
    const update = () => setItems(getCart());
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

  const total = rows.reduce((s, r) => s + r.line, 0);

  return (
    <main className="py-14 bg-neutral-50">
      <Container>
        <SectionTitle kicker="Покупки" title="Корзина" sub="Корзина хранится локально (localStorage)." />

        {rows.length === 0 ? (
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
              <div className="mt-3 flex items-center justify-between text-sm text-neutral-700">
                <span>Сумма</span>
                <span className="font-bold">{moneyEUR(total)}</span>
              </div>

              <Button href="/checkout" className="mt-6 w-full">
                Перейти к оформлению →
              </Button>

              <p className="mt-3 text-xs text-neutral-500">
                Оплата/доставка — добавим позже.
              </p>
            </Card>
          </div>
        )}
      </Container>
    </main>
  );
}