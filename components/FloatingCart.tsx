"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getCartCount } from "@/lib/cart";

export default function FloatingCart() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // важно: на клиенте читаем localStorage
    setCount(getCartCount());

    const update = () => setCount(getCartCount());

    window.addEventListener("cart", update as any);
    window.addEventListener("storage", update);

    return () => {
      window.removeEventListener("cart", update as any);
      window.removeEventListener("storage", update);
    };
  }, []);

  return (
    <Link
      href="/cart"
      aria-label="Открыть корзину"
      className="
        fixed bottom-6 right-6 z-50
        h-14 w-14 rounded-full
        bg-yellow-400 text-black
        shadow-lg
        flex items-center justify-center
        hover:bg-yellow-300 transition
      "
    >
      {/* Иконка корзины (SVG, чтобы ничего не ставить) */}
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        className="block"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 7H20L19 13H8L6 7Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M6 7L5 4H2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="9" cy="19" r="2" fill="currentColor" />
        <circle cx="17" cy="19" r="2" fill="currentColor" />
      </svg>

      {/* Бейдж количества */}
      {count > 0 && (
        <span
          className="
            absolute -top-1 -right-1
            min-w-[22px] h-[22px]
            px-1
            rounded-full
            bg-black text-white
            text-xs font-extrabold
            flex items-center justify-center
          "
        >
          {count > 99 ? "99+" : count}
        </span>
      )}
    </Link>
  );
}