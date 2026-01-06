"use client";

import Link from "next/link";
import { getCartCount } from "@/lib/cart";
import { useEffect, useState } from "react";

export default function CartBadge() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const update = () => setCount(getCartCount());
    update();
    window.addEventListener("storage", update);
    window.addEventListener("cart", update as any);
    return () => {
      window.removeEventListener("storage", update);
      window.removeEventListener("cart", update as any);
    };
  }, []);

  return (
    <Link href="/cart" className="link inline-flex items-center gap-2">
      Корзина
      <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-black/5 px-2 text-xs font-semibold">
        {count}
      </span>
    </Link>
  );
}