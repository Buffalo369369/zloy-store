"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white">п
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="ZLOY PHARM logo"
            width={40}
            height={40}
            priority
          />
          <span className="font-bold text-xl sm:text-3xl tracking-wide">
            ZLOY PHARM
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-6 text-base font-medium">
          <Link className="hover:text-yellow-500 transition" href="/shop">
            Магазин
          </Link>
          <Link className="hover:text-yellow-500 transition" href="/cart">
            Корзина
          </Link>
          <Link className="hover:text-yellow-500 transition" href="/checkout">
            Оформление
          </Link>
          <Link className="hover:text-yellow-500 transition" href="/delivery">
            Доставка
          </Link>
          <Link className="hover:text-yellow-500 transition" href="/infos">
            Информация
          </Link>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
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
            <Link onClick={() => setOpen(false)} href="/checkout">
              Оформление
            </Link>
            <Link onClick={() => setOpen(false)} href="/delivery">
              Доставка
            </Link>
            <Link onClick={() => setOpen(false)} href="/infos">
              Информация
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}