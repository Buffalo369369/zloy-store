import { getProductsByBrand } from "@/lib/data";
import Link from "next/link";

export default function BrandPage({
  params,
}: {
  params: { brand: string };
}) {
  const products = getProductsByBrand(params.brand as any);

  return (
    <main className="py-14 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6">
        <h1 className="text-3xl font-extrabold uppercase">
          {params.brand}
        </h1>

        <div className="mt-8 grid gap-6 md:grid-cols-3 lg:grid-cols-4">
          {products.map((p) => (
            <Link
              key={p.slug}
              href={`/product/${p.slug}`}
              className="rounded-xl border bg-white p-4 hover:shadow-lg transition"
            >
              <div className="aspect-[4/3] bg-black/5 rounded-lg mb-3" />
              <div className="font-semibold">{p.title}</div>
              <div className="text-sm text-neutral-600">{p.price} €</div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}