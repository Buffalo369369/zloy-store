import { Container, Card, Button } from "@/components/Ui";
import { getProduct } from "@/lib/data";
import { moneyEUR } from "@/lib/money";
import AddToCart from "./productClient";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getProduct(slug);

  if (!p) return <div className="py-20 text-center">Товар не найден</div>;

  return (
    <main className="py-14 bg-neutral-50">
      <Container>
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="p-6">
            <div className="aspect-[4/3] rounded-lg bg-black/5 overflow-hidden flex items-center justify-center text-neutral-500">
              {p.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={p.image} alt={p.title} className="h-full w-full object-cover" />
              ) : (
                "Нет изображения"
              )}
            </div>
          </Card>

          <div>
            <div className="text-xs font-semibold tracking-widest uppercase text-neutral-500">
              Товар
            </div>
            <h1 className="mt-2 text-3xl md:text-4xl font-extrabold">{p.title}</h1>

            <div className="mt-4 text-lg font-bold">{moneyEUR(p.price)}</div>

            {p.short ? <p className="mt-4 text-neutral-700">{p.short}</p> : null}

            <div className="mt-6">
              <AddToCart slug={p.slug} />
            </div>

            {p.description ? (
              <Card className="mt-8 p-6">
                <div className="font-bold">Описание</div>
                <p className="mt-2 text-sm text-neutral-700 leading-relaxed">
                  {p.description}
                </p>
              </Card>
            ) : null}

            <div className="mt-8">
              <Button href="/shop">← Назад в магазин</Button>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}