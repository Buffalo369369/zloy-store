"use client";

import { Container, Card, SectionTitle, Button } from "@/components/Ui";
import { clearCart, getCart, DELIVERY_PRICE } from "@/lib/cart";
import { products } from "@/lib/data";
import { moneyEUR } from "@/lib/money";
import { getUser } from "@/lib/auth";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

type CartItem = { slug: string; qty: number };

export default function CheckoutPage() {
  const router = useRouter();

  const [mounted, setMounted] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);

  const [user, setUserState] = useState<ReturnType<typeof getUser>>(null);

  // ✅ грузим корзину + юзера только на клиенте
  useEffect(() => {
    setMounted(true);

    const updateCart = () => setCartItems(getCart());
    updateCart();

    const updateUser = () => setUserState(getUser());
    updateUser();

    window.addEventListener("cart", updateCart as any);
    window.addEventListener("storage", updateCart);
    window.addEventListener("auth", updateUser as any);

    return () => {
      window.removeEventListener("cart", updateCart as any);
      window.removeEventListener("storage", updateCart);
      window.removeEventListener("auth", updateUser as any);
    };
  }, []);

  const rows = useMemo(() => {
    if (!mounted) return [];

    return cartItems
      .map((x) => {
        const p = products.find((p) => p.slug === x.slug);
        if (!p) return null;
        const line = p.price * x.qty;
        return { slug: x.slug, title: p.title, qty: x.qty, price: p.price, line };
      })
      .filter(Boolean) as Array<{ slug: string; title: string; qty: number; price: number; line: number }>;
  }, [cartItems, mounted]);

  const subtotal = useMemo(() => rows.reduce((s, r) => s + r.line, 0), [rows]);
  const delivery = mounted && rows.length ? DELIVERY_PRICE : 0;
  const total = subtotal + delivery;

  async function handleConfirm() {
    if (!mounted) return;

    if (rows.length === 0) {
      alert("Корзина пустая 😅");
      router.push("/shop");
      return;
    }

    // ❗️если не авторизован — отправляем на /auth
    if (!user) {
      router.push("/auth");
      return;
    }

    // ✅ авторизован — отправляем заказ
    setLoading(true);
    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          // данные клиента
          name: user.name,
          contact: `${user.phone} | @${user.telegram}`.replace("| @ |", "|"),
          comment: `Email: ${user.email}`,
          // заказ
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
      alert("Заказ отправлен ✅");
      router.push("/shop");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="py-14 bg-neutral-50">
      <Container>
        <SectionTitle kicker="Финиш" title="Оформление заказа" sub={user ? `Профиль: ${user.email}` : "Войдите, чтобы подтвердить заказ"} />

        <Card className="mt-10 p-8 max-w-2xl mx-auto">
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

              {!mounted ? <div className="mt-2 text-xs text-neutral-500">Загружаю…</div> : null}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button onClick={handleConfirm} disabled={!mounted || loading} className="bg-yellow-400 text-black hover:bg-yellow-300">
              {loading ? "Отправляю..." : user ? "Подтвердить заказ →" : "Войти и подтвердить →"}
            </Button>

            <Link
              href="/cart"
              className="inline-flex items-center justify-center rounded-md border border-black/10 bg-white px-5 py-3 text-sm font-semibold hover:bg-black/5"
            >
              ← Назад в корзину
            </Link>
          </div>

          {!user ? (
            <p className="mt-4 text-xs text-neutral-500">
              После авторизации вернётесь сюда и сможете подтвердить заказ.
            </p>
          ) : null}
        </Card>
      </Container>
    </main>
  );
}