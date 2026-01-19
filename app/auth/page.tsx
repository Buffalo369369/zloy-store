"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Container, Card, SectionTitle, Button } from "@/components/Ui";
import { setUser } from "@/lib/auth";

export default function AuthPage() {
  const router = useRouter();
  const [mode, setMode] = useState<"login" | "register">("login");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [telegram, setTelegram] = useState("");

  function handleSubmit() {
    if (!email || !password) {
      alert("Введите email и пароль");
      return;
    }

    if (mode === "register") {
      if (!name || !phone || !telegram) {
        alert("Заполните все поля регистрации");
        return;
      }
    }

    // ✅ сохраняем пользователя локально
    setUser({
      email,
      name: mode === "register" ? name : "Клиент",
      phone: mode === "register" ? phone : "",
      telegram: mode === "register" ? telegram.replace("@", "") : "",
    });

    // ✅ возвращаем на оформление
    router.push("/checkout");
  }

  return (
    <main className="py-14 bg-neutral-50">
      <Container>
        <SectionTitle
          kicker="Аккаунт"
          title={mode === "login" ? "Вход" : "Регистрация"}
          sub={
            mode === "login"
              ? "Войдите, чтобы подтвердить заказ"
              : "Создайте аккаунт для оформления заказа"
          }
        />

        <Card className="mt-10 p-8 max-w-md mx-auto">
          <div className="grid gap-4">
            {/* EMAIL */}
            <label className="text-sm font-semibold">
              Email
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 w-full rounded-md border border-black/10 px-4 py-3 bg-white"
                placeholder="email@gmail.com"
              />
            </label>

            {/* PASSWORD */}
            <label className="text-sm font-semibold">
              Пароль
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 w-full rounded-md border border-black/10 px-4 py-3 bg-white"
                placeholder="••••••••"
              />
            </label>

            {/* REGISTRATION EXTRA */}
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
                    placeholder="+49 / +380 / +7"
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
              <button
                type="button"
                onClick={() =>
                  alert(
                    "Восстановление пароля происходит через поддержку (Telegram или email)."
                  )
                }
                className="text-sm text-slate-600 hover:text-black underline underline-offset-4 text-left"
              >
                Забыли пароль?
              </button>
            )}

            {/* SUBMIT */}
            <Button onClick={handleSubmit} className="w-full bg-yellow-400 text-black hover:bg-yellow-300">
              {mode === "login" ? "Войти →" : "Создать аккаунт →"}
            </Button>

            {/* SWITCH */}
            <div className="text-sm text-center text-slate-600">
              {mode === "login" ? (
                <>
                  Нет аккаунта?{" "}
                  <button
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