import Link from "next/link";
import { getBrands, getProductsByBrand, isBrandSlug } from "@/lib/data";
import { moneyEUR } from "@/lib/money";

export default async function BrandPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const brands = getBrands();
  const brand = brands.find((b) => b.slug === slug);

  const items = isBrandSlug(slug) ? getProductsByBrand(slug) : [];

  return (
    <main className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase text-slate-500">
              Бренд
            </div>
            <h1 className="mt-2 text-3xl md:text-4xl font-extrabold">
              {brand?.title ?? slug}
            </h1>
            <div className="mt-2 text-slate-600 text-sm">
              Найдено товаров: <b>{items.length}</b>
            </div>
          </div>

          <Link
            href="/shop"
            className="rounded-full px-6 py-3 font-semibold border hover:bg-slate-50 transition"
          >
            ← В магазин
          </Link>
        </div>

        {items.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-black/10 bg-slate-50 p-8 text-slate-700">
            Для этого бренда пока нет товаров (или неверная ссылка бренда).
            <div className="mt-2 text-sm text-slate-500">
              Проверь, что URL вида <b>/brand/hilma</b> и что у товаров{" "}
              <b>category</b> ровно = <b>{slug}</b>
            </div>
          </div>
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((p) => (
              <Link
                key={p.slug}
                href={`/product/${p.slug}`}
                className="group rounded-2xl border border-black/10 bg-white overflow-hidden hover:shadow-lg transition"
              >
                <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image || "/placeholder.jpg"}
                    alt={p.title}
                    className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                  />
                </div>

                <div className="p-4">
                  <div className="font-semibold leading-snug">{p.title}</div>
                  <div className="mt-2 text-sm text-slate-700">
                    {moneyEUR(p.price)}
                  </div>
                  <div className="mt-3 text-yellow-400 text-sm">
                    {"★★★★★".slice(0, Math.min(5, p.rating ?? 0))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}