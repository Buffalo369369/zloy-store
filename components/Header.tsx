"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/shop", label: "Магазин" },
  { href: "/cart", label: "Корзина" },
  { href: "/checkout", label: "Оформление" },
  { href: "/delivery", label: "Доставка" },
  { href: "/infos", label: "Информация" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // закрывать меню при переходе
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="border-b bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex h-16 items-center justify-between gap-3">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 font-extrabold tracking-tight">
            {/* если у тебя есть картинка/иконка — оставь как было */}
            <span className="text-lg">ZLOY PHARM</span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="hover:opacity-70 transition">
                {l.label}
              </Link>
            ))}
          </nav>

          {/* MOBILE BURGER */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-3 py-2 text-sm font-semibold"
            onClick={() => setOpen((v) => !v)}
            aria-label="Открыть меню"
            aria-expanded={open}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2 rounded-2xl border border-black/10 bg-white p-3">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="rounded-xl px-3 py-2 text-sm font-semibold hover:bg-slate-50 transition"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}