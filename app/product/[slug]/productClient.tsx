"use client";

import { Button } from "@/components/Ui";
import { inc } from "@/lib/cart";
import { useState } from "react";

export default function AddToCart({ slug }: { slug: string }) {
  const [ok, setOk] = useState(false);

  return (
    <div className="flex items-center gap-3">
      <Button
        onClick={() => {
          inc(slug);
          setOk(true);
          setTimeout(() => setOk(false), 1200);
        }}
      >
        Добавить в корзину
      </Button>

      {ok ? <span className="text-sm text-neutral-600">Добавлено ✅</span> : null}
    </div>
  );
}