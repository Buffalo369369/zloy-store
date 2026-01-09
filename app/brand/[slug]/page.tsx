import Link from "next/link";
import { getBrands, getProductsByBrand, isBrandSlug } from "@/lib/data";
import { moneyEUR } from "@/lib/money";

const BRAND_BANNERS: Record<string, string> = {
  hilma: "/brand-banners/hilma.jpg",
  driada: "/brand-banners/driada.jpg",
  somatrop: "/brand-banners/somatrop.jpg",
  marten: "/brand-banners/marten.jpg",
};

export default async function BrandPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const brands = getBrands();
  const brand = brands.find((b) => b.slug === slug);

  const items = isBrandSlug(slug) ? getProductsByBrand(slug) : [];

  const banner = BRAND_BANNERS[slug] || "/hero.jpg";

  return (
    <>
            {/* ✅ BRAND HERO (только баннер + кнопка) */}
      <section className="relative h-[220px] md:h-[300px]">
        {/* Фон */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${banner})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/55 to-black/70" />

        {/* Только кнопка */}
        <div className="relative z-10 h-full flex items-end">
          <div className="mx-auto w-full max-w-7xl px-6 pb-8 flex justify-end">
            <Link
  href="/shop"
  className="
    rounded-full
    px-6 py-3
    font-semibold
    bg-yellow-400
    text-black
    hover:bg-yellow-300
    transition
    shadow-md
  "
>
  ← В магазин
</Link>
          </div>
        </div>
      </section>

      {/* ✅ PAGE CONTENT */}
      <main className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10">
          {items.length === 0 ? (
            <div className="rounded-2xl border border-black/10 bg-slate-50 p-8 text-slate-700">
              Для этого бренда пока нет товаров (или неверная ссылка бренда).
              <div className="mt-2 text-sm text-slate-500">
                Проверь, что URL вида <b>/brand/hilma</b> и что у товаров{" "}
                <b>category</b> ровно = <b>{slug}</b>
              </div>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
    </>
  );
}