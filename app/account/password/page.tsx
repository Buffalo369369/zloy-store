"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Container, Card, Button } from "@/components/Ui";
import { isAuthed } from "@/lib/auth";

export default function AccountPasswordPage() {
  const router = useRouter();

  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [newPass2, setNewPass2] = useState("");

  useEffect(() => {
    if (!isAuthed()) router.replace("/auth");
  }, [router]);

  function submit() {
    if (!newPass.trim() || newPass.length < 6) {
      alert("Новый пароль должен быть минимум 6 символов");
      return;
    }
    if (newPass !== newPass2) {
      alert("Пароли не совпадают");
      return;
    }

    // 
    alert("Пароль изменён ✅ ");
    setOldPass("");
    setNewPass("");
    setNewPass2("");
    router.push("/account");
  }

  return (
    <main className="py-14 bg-white">
      <Container>
        <div className="text-4xl font-light tracking-tight">Учетная запись</div>
        <div className="mt-3 h-px bg-black/20" />

        <Card className="mt-8 p-8 max-w-3xl mx-auto">
          <div className="text-2xl font-light">Изменить пароль</div>

          <div className="mt-8 grid gap-5">
            <label className="grid md:grid-cols-[220px_1fr] items-center gap-4">
              <span className="text-sm font-semibold">Текущий пароль</span>
              <input
                value={oldPass}
                onChange={(e) => setOldPass(e.target.value)}
                type="password"
                className="w-full rounded-md border border-black/15 px-4 py-3 bg-white"
                placeholder="••••••••"
              />
            </label>

            <label className="grid md:grid-cols-[220px_1fr] items-center gap-4">
              <span className="text-sm font-semibold">Новый пароль</span>
              <input
                value={newPass}
                onChange={(e) => setNewPass(e.target.value)}
                type="password"
                className="w-full rounded-md border border-black/15 px-4 py-3 bg-white"
                placeholder="••••••••"
              />
            </label>

            <label className="grid md:grid-cols-[220px_1fr] items-center gap-4">
              <span className="text-sm font-semibold">Повторите пароль</span>
              <input
                value={newPass2}
                onChange={(e) => setNewPass2(e.target.value)}
                type="password"
                className="w-full rounded-md border border-black/15 px-4 py-3 bg-white"
                placeholder="••••••••"
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

              <Button onClick={submit}>Продолжить</Button>
            </div>
          </div>
        </Card>
      </Container>
    </main>
  );
}