import Link from "next/link";
import { Container, Card, SectionTitle } from "@/components/Ui";

export default function AccountPage() {
  return (
    <main className="py-14 bg-neutral-50">
      <Container>
        <SectionTitle
          kicker="Аккаунт"
          title="Личный кабинет"
          sub="Моя учетная запись"
        />

        <div className="mt-10 max-w-2xl mx-auto grid gap-4">
          {/* Основные данные */}
          <Link href="/account/profile">
            <Card className="p-6 flex items-center justify-between hover:shadow-md transition cursor-pointer">
              <div>
                <div className="font-semibold">Основные данные</div>
                <div className="text-sm text-neutral-600">
                  E-mail, ФИО, телефон, Telegram
                </div>
              </div>
              <span className="text-neutral-400 text-xl">›</span>
            </Card>
          </Link>

          {/* Изменить пароль */}
          <Link href="/account/password">
            <Card className="p-6 flex items-center justify-between hover:shadow-md transition cursor-pointer">
              <div>
                <div className="font-semibold">Изменить свой пароль</div>
                <div className="text-sm text-neutral-600">
                  Смена пароля аккаунта
                </div>
              </div>
              <span className="text-neutral-400 text-xl">›</span>
            </Card>
          </Link>

          {/* 🆕 Мои заказы */}
          <Link href="/account/orders">
            <Card className="p-6 flex items-center justify-between hover:shadow-md transition cursor-pointer">
              <div>
                <div className="font-semibold">Мои заказы</div>
                <div className="text-sm text-neutral-600">
                  История заказов
                </div>
              </div>
              <span className="text-neutral-400 text-xl">›</span>
            </Card>
          </Link>
        </div>
      </Container>
    </main>
  );
}