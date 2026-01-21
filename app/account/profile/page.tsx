"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Container, Card, Button } from "@/components/Ui";
import { getUser, setUser, isAuthed, type UserProfile } from "@/lib/auth";

export default function AccountProfilePage() {
  const router = useRouter();

  const [mounted, setMounted] = useState(false);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [telegram, setTelegram] = useState("");

  useEffect(() => {
    if (!isAuthed()) {
      router.replace("/auth");
      return;
    }

    const u = getUser();
    if (u) {
      setEmail(u.email || "");
      setName(u.name || "");
      setPhone(u.phone || "");
      setTelegram(u.telegram || "");
    }
    setMounted(true);
  }, [router]);

  function save() {
    if (!mounted) return;

    if (!email.trim() || !name.trim() || !phone.trim()) {
      alert("Заполни обязательные поля: Email, ФИО, Телефон");
      return;
    }

    const user: UserProfile = {
      email: email.trim(),
      name: name.trim(),
      phone: phone.trim(),
      telegram: telegram.trim(),
    };

    setUser(user);
    alert("Данные сохранены ✅");
    router.push("/account");
  }

  return (
    <main className="py-14 bg-white">
      <Container>
        <div className="text-4xl font-light tracking-tight">Учетная запись</div>
        <div className="mt-3 h-px bg-black/20" />

        <Card className="mt-8 p-8">
          <div className="grid gap-5">
            <label className="grid md:grid-cols-[180px_1fr] items-center gap-4">
              <span className="text-sm font-semibold">
                <span className="text-red-500">*</span> E-mail
              </span>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="w-full rounded-md border border-black/15 px-4 py-3 bg-white"
              />
            </label>

            <label className="grid md:grid-cols-[180px_1fr] items-center gap-4">
              <span className="text-sm font-semibold">
                <span className="text-red-500">*</span> ФИО
              </span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-md border border-black/15 px-4 py-3 bg-white"
              />
            </label>

            {/* */}
            <label className="grid md:grid-cols-[180px_1fr] items-center gap-4">
              <span className="text-sm text-neutral-700">Фамилия</span>
              <input
                disabled
                value=""
                placeholder="(позже добавим в профиль)"
                className="w-full rounded-md border border-black/10 px-4 py-3 bg-neutral-50 text-neutral-400"
              />
            </label>

            <label className="grid md:grid-cols-[180px_1fr] items-center gap-4">
              <span className="text-sm font-semibold">
                <span className="text-red-500">*</span> Телефон
              </span>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-md border border-black/15 px-4 py-3 bg-white"
              />
            </label>

            <div className="mt-6">
              <div className="text-4xl font-light tracking-tight">Связь со мной</div>
              <div className="mt-3 h-px bg-black/20" />
            </div>

            <label className="grid md:grid-cols-[180px_1fr] items-center gap-4">
              <span className="text-sm text-neutral-700">Ник в Телеграм</span>
              <input
                value={telegram}
                onChange={(e) => setTelegram(e.target.value)}
                placeholder="@username"
                className="w-full rounded-md border border-black/15 px-4 py-3 bg-white"
              />
            </label>

            <div className="mt-10 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => router.push("/account")}
                className="rounded-md border border-black/15 bg-white px-6 py-3 text-sm font-semibold hover:bg-black/5 transition"
              >
                Назад
              </button>

              <Button onClick={save}>Продолжить</Button>
            </div>
          </div>
        </Card>
      </Container>
    </main>
  );
}