import Link from "next/link";
import { Card } from "@/components/Ui";
import { moneyEUR } from "@/lib/money";

export default function ProductCard({
  slug,
  title,
  price,
  image,
  rating = 0,
}: {
  slug: string;
  title: string;
  price: number;
  image?: string;
  rating?: number;
}) {
  return (
    <Card className="overflow-hidden">
      <div className="bg-black/3 p-6">
        <div className="aspect-[4/3] w-full rounded-lg bg-black/5 flex items-center justify-center text-sm text-neutral-500">
          {image ? (
            // 
            <img src={image} alt={title} className="h-full w-full object-cover" />
          ) : (
            "Нет изображения"
          )}
        </div>

        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <div className="text-base font-bold leading-snug">{title}</div>
            <div className="mt-2 text-sm text-neutral-600">{moneyEUR(price)}</div>
          </div>

          <div className="text-[#f2d34b] text-sm">
            {"★".repeat(Math.max(0, Math.min(5, Math.round(rating))))}
          </div>
        </div>

        <Link
          href={`/product/${slug}`}
          className="mt-4 inline-flex w-full items-center justify-center rounded-md border border-black/10 bg-white px-4 py-2 text-sm font-semibold hover:bg-black/5 transition"
        >
          Подробнее
        </Link>
      </div>
    </Card>
  );
}