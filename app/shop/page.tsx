import Link from "next/link";
import { getAllProducts, getBrands, interleaveByBrand } from "@/lib/data";
import { moneyEUR } from "@/lib/money";
import SortSelect from "./SortSelect";
import ShopBanner from "@/components/ShopBanner";


type SearchParams = {
  brand?: string;
  q?: string;
  sort?: string;
  page?: string;
};

const PAGE_SIZE = 12;

function sortProducts(items: any[], sort?: string) {
  const arr = [...items];
  switch (sort) {
    case "price_asc":
      return arr.sort((a, b) => a.price - b.price);
    case "price_desc":
      return arr.sort((a, b) => b.price - a.price);
    case "rating_desc":
      return arr.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
    default:
      return arr;
  }
}

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const sp = await searchParams;

  const brands = getBrands();
  const all = getAllProducts();

  const brand = (sp.brand || "").trim();
  const q = (sp.q || "").trim().toLowerCase();
  const sort = (sp.sort || "").trim();
  const page = Math.max(1, Number(sp.page || "1") || 1);

  let filtered = all;

if (brand) {
  filtered = filtered.filter((p) => p.category === brand);
} else {
  // ✅ 
  filtered = interleaveByBrand(filtered);
}

if (q) filtered = filtered.filter((p) => p.title.toLowerCase().includes(q));

// ✅ ВАЖНО:
if (sort) {
  filtered = sortProducts(filtered, sort);
}

  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const start = (safePage - 1) * PAGE_SIZE;
  const items = filtered.slice(start, start + PAGE_SIZE);

  const makeHref = (next: Partial<SearchParams>) => {
    const base: Record<string, string> = {};
    if (brand) base.brand = brand;
    if (q) base.q = q;
    if (sort) base.sort = sort;
    base.page = String(safePage);

    const merged = { ...base, ...next };

    // сброс
    if (next.brand !== undefined || next.q !== undefined || next.sort !== undefined) {
      merged.page = "1";
    }

    const usp = new URLSearchParams(merged);
    return `/shop?${usp.toString()}`;
  };

  return (
    <main className="bg-white">
      <ShopBanner />

      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-[280px_1fr]">
          {/* LEFT */}
          <aside className="rounded-3xl border border-black/10 bg-slate-50 p-6">
            <div className="text-lg font-extrabold">Каталог</div>

            <form action="/shop" className="mt-4 flex gap-2">
              <input
                name="q"
                defaultValue={q}
                placeholder="Поиск товаров..."
                className="w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-yellow-300"
              />
              <button className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-black/85 transition">
                Найти
              </button>
            </form>

            <div className="mt-6 text-sm font-semibold uppercase tracking-widest text-slate-500">
              Бренды
            </div>

            <div className="mt-3 grid gap-2">
              <Link
                href="/shop"
                className={`rounded-xl px-3 py-2 text-sm border transition ${
                  !brand ? "bg-white border-black/15 font-semibold" : "bg-transparent border-black/10 hover:bg-white"
                }`}
              >
                Все товары
              </Link>

              {brands.map((b) => (
                <Link
                  key={b.slug}
                  href={makeHref({ brand: b.slug })}
                  className={`rounded-xl px-3 py-2 text-sm border transition ${
                    brand === b.slug
                      ? "bg-white border-black/15 font-semibold"
                      : "bg-transparent border-black/10 hover:bg-white"
                  }`}
                >
                  {b.title}
                </Link>
              ))}
            </div>

            <div className="mt-6 text-sm font-semibold uppercase tracking-widest text-slate-500">
              Страницы брендов
            </div>
            <div className="mt-3 grid gap-2">
              {brands.map((b) => (
                <Link
                  key={b.slug}
                  href={`/brand/${b.slug}`}
                  className="rounded-xl px-3 py-2 text-sm border border-black/10 hover:bg-white transition"
                >
                  Открыть {b.title} →
                </Link>
              ))}
            </div>
          </aside>

          {/* RIGHT */}
          <section>
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="text-sm text-slate-600">
                Показано <b>{items.length ? start + 1 : 0}</b>–<b>{Math.min(start + items.length, total)}</b> из{" "}
                <b>{total}</b>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-sm text-slate-600">Сортировка:</div>
                <SortSelect value={sort} />
              </div>
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                    <div className="mt-2 text-sm text-slate-700">{moneyEUR(p.price)}</div>
                    <div className="mt-3 text-yellow-400 text-sm">
                      {"★★★★★".slice(0, Math.min(5, p.rating ?? 0))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-10 flex items-center justify-between">
              <Link
                href={makeHref({ page: String(Math.max(1, safePage - 1)) })}
                className={`rounded-full px-5 py-2 border text-sm font-semibold transition ${
                  safePage <= 1 ? "pointer-events-none opacity-40" : "hover:bg-slate-50"
                }`}
              >
                ← Назад
              </Link>

              <div className="text-sm text-slate-600">
                Страница <b>{safePage}</b> из <b>{totalPages}</b>
              </div>

              <Link
                href={makeHref({ page: String(Math.min(totalPages, safePage + 1)) })}
                className={`rounded-full px-5 py-2 border text-sm font-semibold transition ${
                  safePage >= totalPages ? "pointer-events-none opacity-40" : "hover:bg-slate-50"
                }`}
              >
                Вперёд →
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}