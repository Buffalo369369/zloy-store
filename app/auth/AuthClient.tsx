"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Container, Card, SectionTitle, Button } from "@/components/Ui";
import { getUser, setUser } from "@/lib/auth";

export default function AuthClient() {
  const router = useRouter();
  const sp = useSearchParams();

  const nextUrl = sp.get("next") || "/account";

  const [mode, setMode] = useState<"login" | "register">("login");
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [telegram, setTelegram] = useState("");

  useEffect(() => {
    // если уже залогинен — сразу в кабинет/куда надо
    if (getUser()) router.replace(nextUrl);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const canSubmit = useMemo(() => {
    if (!email.trim()) return false;
    if (!password.trim()) return false;
    if (mode === "register") {
      if (!name.trim()) return false;
      if (!phone.trim()) return false;
      if (!telegram.trim()) return false;
    }
    return true;
  }, [email, password, mode, name, phone, telegram]);

  async function submit() {
    if (!canSubmit) return;
    setLoading(true);
    try {
      // ✅ пока заглушка: "логиним" в localStorage
      setUser({
        email: email.trim(),
        name: name.trim() || "Пользователь",
        phone: phone.trim() || "",
        telegram: telegram.trim() || "",
      });

      router.replace(nextUrl);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="py-14 bg-neutral-50">
      <Container>
        <SectionTitle
          kicker="Аккаунт"
          title={mode === "login" ? "Вход" : "Регистрация"}
          sub=""
        />

        <Card className="mt-10 p-8 max-w-md mx-auto">
          <div className="grid gap-4">
            {/* EMAIL */}
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

            {/* PASSWORD ✅ добавили */}
            <label className="text-sm font-semibold">
              Пароль
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="mt-2 w-full rounded-md border border-black/10 px-4 py-3 bg-white"
                placeholder="••••••••"
              />
            </label>

            {mode === "register" && (
              <>
                <label className="text-sm font-semibold">
                  ФИО
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-2 w-full rounded-md border border-black/10 px-4 py-3 bg-white"
                    placeholder="Иван Иванов"
                  />
                </label>

                <label className="text-sm font-semibold">
                  Телефон
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="mt-2 w-full rounded-md border border-black/10 px-4 py-3 bg-white"
                    placeholder="+34..."
                  />
                </label>

                <label className="text-sm font-semibold">
                  Ник Telegram
                  <input
                    value={telegram}
                    onChange={(e) => setTelegram(e.target.value)}
                    className="mt-2 w-full rounded-md border border-black/10 px-4 py-3 bg-white"
                    placeholder="@username"
                  />
                </label>
              </>
            )}

            <Button className="w-full" onClick={submit} disabled={loading || !canSubmit}>
              {loading
                ? "Подождите..."
                : mode === "login"
                ? "Войти →"
                : "Создать аккаунт →"}
            </Button>

            <div className="text-sm text-center text-slate-600">
              {mode === "login" ? (
                <>
                  Нет аккаунта?{" "}
                  <button
                    type="button"
                    onClick={() => setMode("register")}
                    className="font-semibold text-black underline underline-offset-4"
                  >
                    Зарегистрироваться
                  </button>
                </>
              ) : (
                <>
                  Уже есть аккаунт?{" "}
                  <button
                    type="button"
                    onClick={() => setMode("login")}
                    className="font-semibold text-black underline underline-offset-4"
                  >
                    Войти
                  </button>
                </>
              )}
            </div>

            <Link
              href="/shop"
              className="text-sm text-slate-600 hover:text-black underline underline-offset-4 text-center"
            >
              ← Вернуться в магазин
            </Link>
          </div>
        </Card>
      </Container>
    </main>
  );
}