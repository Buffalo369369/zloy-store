"use client";

import { Button } from "@/components/Ui";
import { inc, canAddToCartBySlug } from "@/lib/cart";
import { useEffect, useMemo, useState } from "react";

export default function AddToCart({ slug }: { slug: string }) {
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState<string>("");

  const canAdd = useMemo(() => canAddToCartBySlug(slug), [slug, ok]);

  useEffect(() => {
    const onErr = (e: any) => {
      setErr(e?.detail || "Нельзя добавить товар в корзину");
      setTimeout(() => setErr(""), 2500);
    };

    window.addEventListener("cart:error", onErr as any);
    return () => window.removeEventListener("cart:error", onErr as any);
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <Button
          disabled={!canAdd}
          onClick={() => {
            setErr("");

            // 
            if (!canAddToCartBySlug(slug)) {
              setErr(
                "Нельзя смешивать Driada с другими брендами. Оформляйте Driada отдельным заказом."
              );
              return;
            }

            inc(slug);
            setOk(true);
            setTimeout(() => setOk(false), 1200);
          }}
        >
          Добавить в корзину
        </Button>

        {ok ? <span className="text-sm text-neutral-600">Добавлено ✅</span> : null}
      </div>

      {!canAdd ? (
        <div className="text-sm text-slate-600">
          Driada нельзя смешивать с другими брендами — оформляйте отдельным заказом.
        </div>
      ) : null}

      {err ? <div className="text-sm text-red-600">{err}</div> : null}
    </div>
  );
}