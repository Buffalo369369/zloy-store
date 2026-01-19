"use client";

import Link from "next/link";
import { useState } from "react";
import { Container, Card, SectionTitle, Button } from "@/components/Ui";

export default function AuthPage() {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [loading, setLoading] = useState(false);

  // 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [telegram, setTelegram] = useState("");

  async function submit() {
    setLoading(true);
    try {
      // ✅ заглушка
      alert(
        mode === "login"
          ? "Вход не подключен ✅"
          : "Регистрация не подключена ✅"
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

            {/* PASSWORD */}
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

            {/* REGISTRATION EXTRA FIELDS */}
            {mode === "register" && (
              <>
                <label className="text-sm font-semibold">
                  ФИО
                  <input
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="mt-2 w-full rounded-md border border-black/10 px-4 py-3 bg-white"
                    placeholder=""
                  />
                </label>

                <label className="text-sm font-semibold">
                  Телефон
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="mt-2 w-full rounded-md border border-black/10 px-4 py-3 bg-white"
                    placeholder=""
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

            {/* FORGOT PASSWORD */}
            {mode === "login" && (
              <Link
                href="/auth/reset"
                className="text-sm text-slate-600 hover:text-black underline underline-offset-4 text-left"
              >
                Забыли пароль?
              </Link>
            )}

            {/* SUBMIT */}
            <Button className="w-full" onClick={submit} disabled={loading}>
              {loading
                ? "Подождите..."
                : mode === "login"
                ? "Войти →"
                : "Создать аккаунт →"}
            </Button>

            {/* SWITCH MODE */}
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
          </div>
        </Card>
      </Container>
    </main>
  );
}