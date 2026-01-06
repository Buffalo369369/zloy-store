"use client";

import { Container, Card, SectionTitle, Button } from "@/components/Ui";
import { clearCart } from "@/lib/cart";
import Link from "next/link";

export default function CheckoutPage() {
  return (
    <main className="py-14 bg-neutral-50">
      <Container>
        <SectionTitle
          kicker="Финиш"
          title="Оформление заказа"
          sub="Пока это заглушка. Потом подключим оплату/форму/доставку."
        />

        <Card className="mt-10 p-8 max-w-2xl mx-auto">
          <div className="grid gap-4">
            <label className="text-sm font-semibold">
              Имя
              <input className="mt-2 w-full rounded-md border border-black/10 px-4 py-3" placeholder="Ваше имя" />
            </label>

            <label className="text-sm font-semibold">
              Телефон / Telegram
              <input className="mt-2 w-full rounded-md border border-black/10 px-4 py-3" placeholder="@username или номер" />
            </label>

            <label className="text-sm font-semibold">
              Комментарий
              <textarea className="mt-2 w-full rounded-md border border-black/10 px-4 py-3 min-h-[120px]" placeholder="Адрес/пожелания…" />
            </label>

            <div className="flex flex-wrap gap-3 mt-2">
              <Button
                onClick={() => {
                  clearCart();
                  alert("Заявка отправлена (заглушка). Корзина очищена ✅");
                }}
              >
                Подтвердить (заглушка)
              </Button>

              <Link href="/cart" className="inline-flex items-center justify-center rounded-md border border-black/10 bg-white px-5 py-3 text-sm font-semibold hover:bg-black/5">
                ← Назад в корзину
              </Link>
            </div>
          </div>
        </Card>
      </Container>
    </main>
  );
}