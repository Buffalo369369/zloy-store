"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { isAuthed, logout } from "@/lib/auth";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    const sync = () => setAuthed(isAuthed());
    sync();

    window.addEventListener("auth", sync as any);
    window.addEventListener("storage", sync);

    return () => {
      window.removeEventListener("auth", sync as any);
      window.removeEventListener("storage", sync);
    };
  }, []);

  function handleLogout() {
    logout();
    setOpen(false);
  }

  return (
    <header className="border-b bg-white">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Image src="/logo.png" alt="ZLOY PHARM logo" width={40} height={40} priority />
          <span className="font-bold text-xl sm:text-3xl tracking-wide">ZLOY PHARM</span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-6 text-base font-medium">
          <Link className="hover:text-yellow-500 transition" href="/shop">
            Магазин
          </Link>
          <Link className="hover:text-yellow-500 transition" href="/cart">
            Корзина
          </Link>
          <Link className="hover:text-yellow-500 transition" href="/delivery">
            Доставка
          </Link>
          <Link className="hover:text-yellow-500 transition" href="/infos">
            Информация
          </Link>

          {!authed ? (
            <Link className="hover:text-yellow-500 transition" href="/auth">
              Авторизация
            </Link>
          ) : (
            <div className="flex items-center gap-4">
              <Link className="hover:text-yellow-500 transition" href="/account">
                Личный кабинет
              </Link>
              <button
                type="button"
                onClick={handleLogout}
                className="text-sm font-semibold text-neutral-700 hover:text-black underline underline-offset-4"
              >
                Выйти
              </button>
            </div>
          )}
        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-2xl font-bold"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <nav className="flex flex-col px-6 py-4 gap-4 text-base font-medium">
            <Link onClick={() => setOpen(false)} href="/shop">
              Магазин
            </Link>
            <Link onClick={() => setOpen(false)} href="/cart">
              Корзина
            </Link>
            <Link onClick={() => setOpen(false)} href="/delivery">
              Доставка
            </Link>
            <Link onClick={() => setOpen(false)} href="/infos">
              Информация
            </Link>

            {!authed ? (
              <Link onClick={() => setOpen(false)} href="/auth">
                Авторизация
              </Link>
            ) : (
              <>
                <Link onClick={() => setOpen(false)} href="/account">
                  Личный кабинет
                </Link>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="text-left text-sm font-semibold text-neutral-700 hover:text-black underline underline-offset-4"
                >
                  Выйти
                </button>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}