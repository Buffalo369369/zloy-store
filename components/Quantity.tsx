"use client";

import { dec, inc, setQty } from "@/lib/cart";
import { useState } from "react";

export default function Quantity({ slug, initial }: { slug: string; initial: number }) {
  const [qty, setLocal] = useState(initial);

  return (
    <div className="inline-flex items-center gap-2">
      <button
        onClick={() => {
          if (qty <= 1) {
            setLocal(0);
            setQty(slug, 0);
            return;
          }
          setLocal(qty - 1);
          dec(slug);
        }}
        className="h-9 w-9 rounded-md border border-black/10 bg-white hover:bg-black/5"
      >
        −
      </button>

      <div className="min-w-10 text-center font-semibold">{qty}</div>

      <button
        onClick={() => {
          setLocal(qty + 1);
          inc(slug);
        }}
        className="h-9 w-9 rounded-md border border-black/10 bg-white hover:bg-black/5"
      >
        +
      </button>
    </div>
  );
}