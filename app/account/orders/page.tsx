import { Container, Card, SectionTitle } from "@/components/Ui";

export default function OrdersPage() {
  return (
    <main className="py-14 bg-neutral-50">
      <Container>
        <SectionTitle
          kicker="Аккаунт"
          title="Мои заказы"
          sub="История ваших заказов"
        />

        <Card className="mt-10 p-8 max-w-2xl mx-auto text-center">
          <div className="text-lg font-semibold">
            У вас пока нет заказов
          </div>
          <div className="mt-2 text-sm text-neutral-600">
            Все оформленные заказы будут отображаться здесь
          </div>
        </Card>
      </Container>
    </main>
  );
}
