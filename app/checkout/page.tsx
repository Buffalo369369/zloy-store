"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Container, Card, SectionTitle, Button } from "@/components/Ui";
import { getCart, DELIVERY_PRICE } from "@/lib/cart";
import { products } from "@/lib/data";
import { moneyEUR } from "@/lib/money";

type CartItem = { slug: string; qty: number };

export default function CheckoutPage() {
  const router = useRouter();

  const [mounted, setMounted] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  //  ПРОМОКОД 
  const [promo, setPromo] = useState("");
  const [promoSaved, setPromoSaved] = useState(false);

  useEffect(() => {
    setMounted(true);

    const updateCart = () => setCartItems(getCart());
    updateCart();

    window.addEventListener("cart", updateCart as any);
    window.addEventListener("storage", updateCart);

    // восстановление промокода
    try {
      const saved = localStorage.getItem("zloypharm_promo") || "";
      setPromo(saved);
    } catch {}

    return () => {
      window.removeEventListener("cart", updateCart as any);
      window.removeEventListener("storage", updateCart);
    };
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("zloypharm_promo", promo);
    } catch {}
  }, [promo]);

  const rows = useMemo(() => {
    if (!mounted) return [];
    return cartItems
      .map((x) => {
        const p = products.find((p) => p.slug === x.slug);
        if (!p) return null;
        const line = p.price * x.qty;
        return { slug: x.slug, title: p.title, qty: x.qty, price: p.price, line };
      })
      .filter(Boolean) as Array<{
        slug: string;
        title: string;
        qty: number;
        price: number;
        line: number;
      }>;
  }, [cartItems, mounted]);

  const subtotal = useMemo(() => rows.reduce((s, r) => s + r.line, 0), [rows]);
  const delivery = mounted && rows.length ? DELIVERY_PRICE : 0;
  const total = subtotal + delivery;

  function handleConfirm() {
    if (!mounted) return;

    if (rows.length === 0) {
      alert("Корзина пустая 😅");
      router.push("/shop");
      return;
    }

    // 
    router.push("/account/orders");
  }

  return (
    <main className="py-14 bg-neutral-50">
      <Container>
        <SectionTitle kicker="Финиш" title="Оформление заказа" />

        <Card className="mt-10 p-8 max-w-2xl mx-auto">
          {/* СВОДКА */}
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
                <div className="mt-2 text-xs text-neutral-500">Загружаю…</div>
              ) : null}
            </div>
          </div>

          {/* 🔹 ПРОМОКОД */}
          <div className="mt-6">
            <label className="text-sm font-semibold">
              Промокод
              <div className="mt-2 flex gap-2">
                <input
                  value={promo}
                  onChange={(e) => {
                    setPromo(e.target.value);
                    setPromoSaved(false);
                  }}
                  placeholder="Введите промокод"
                  className="flex-1 rounded-md border border-black/10 px-4 py-3 bg-white outline-none focus:ring-2 focus:ring-yellow-300"
                />
                <button
                  type="button"
                  onClick={() => setPromoSaved(true)}
                  className="rounded-md px-4 py-3 font-semibold border border-black/10 hover:bg-black/5 transition"
                >
                  OK
                </button>
              </div>
            </label>

            {promoSaved && promo ? (
              <div className="mt-2 text-sm text-neutral-600">
                Промокод сохранён ✅
              </div>
            ) : null}
          </div>

          {/* КНОПКИ */}
          <div className="mt-6 flex flex-wrap gap-3">
            <Button
              onClick={handleConfirm}
              disabled={!mounted}
              className="bg-yellow-400 text-black hover:bg-yellow-300"
            >
              Подтвердить заказ →
            </Button>

            <Link
              href="/cart"
              className="inline-flex items-center justify-center rounded-md border border-black/10 bg-white px-5 py-3 text-sm font-semibold hover:bg-black/5"
            >
              ← Назад в корзину
            </Link>
          </div>
        </Card>
      </Container>
    </main>
  );
}