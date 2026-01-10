"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function SortSelect({ value }: { value: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  function setParam(key: string, val: string) {
    const sp = new URLSearchParams(searchParams.toString());

    if (val) sp.set(key, val);
    else sp.delete(key);

    // 1
    sp.set("page", "1");

    router.push(`/shop?${sp.toString()}`);
  }

  return (
    <select
      value={value}
      onChange={(e) => setParam("sort", e.target.value)}
      className="rounded-xl border border-black/10 bg-white px-3 py-2 text-sm"
    >
      <option value="">По популярности</option>
      <option value="rating_desc">По рейтингу</option>
      <option value="price_asc">Цена: по возрастанию</option>
      <option value="price_desc">Цена: по убыванию</option>
    </select>
  );
}