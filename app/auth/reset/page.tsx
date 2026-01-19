"use client";

import Link from "next/link";
import { useState } from "react";
import { Container, Card, SectionTitle, Button } from "@/components/Ui";

export default function ResetPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit() {
    setLoading(true);
    try {
      // ✅ заглушка
      alert(
        "Восстановление пока не подключено ✅"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="py-14 bg-neutral-50">
      <Container>
        <SectionTitle
          kicker="Аккаунт"
          title="Восстановление пароля"
          sub="Введите email"
        />

        <Card className="mt-10 p-8 max-w-md mx-auto">
          <div className="grid gap-4">
            <label className="text-sm font-semibold">
              Email
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="mt-2 w-full rounded-md border border-black/10 px-4 py-3 bg-white"
                placeholder="email@gmail.com"
              />
            </label>

            <Button className="w-full" onClick={submit} disabled={loading}>
              {loading ? "Отправляю..." : "Отправить инструкцию →"}
            </Button>

            <Link
              href="/auth"
              className="text-sm text-slate-600 hover:text-black underline underline-offset-4 text-center"
            >
              ← Назад к входу
            </Link>
          </div>
        </Card>
      </Container>
    </main>
  );
}