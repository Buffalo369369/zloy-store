import Link from "next/link";

const mission = [
  "Приносить пользу обществу, предлагая проверенные и надёжные решения.",
  "Повышать качество жизни людей через доступ к продуктам высокого уровня.",
  "Формировать культуру прозрачности и доверия в сервисе и консультациях.",
];

const values = [
  {
    title: "Эталон качества",
    text: "Каждая единица проходит контроль и соответствует строгим стандартам.",
  },
  {
    title: "Прозрачность",
    text: "Работаем только с проверенными поставками, без подделок и посредников.",
  },
  {
    title: "Забота о клиентах",
    text: "Поддержка на каждом этапе — от консультации до получения заказа.",
  },
  {
    title: "Доверие",
    text: "Строим долгосрочные отношения — стабильность важнее быстрой выгоды.",
  },
  {
    title: "Партнёрство",
    text: "Открыты к сотрудничеству и готовы стать надёжным союзником.",
  },
];

const reasons = [
  "Оригинальная продукция от проверенных производителей.",
  "Опыт и внимательность к качеству сервиса.",
  "Понятные условия и сопровождение.",
  "Поддержка клиента на каждом шаге — быстро и по делу.",
  "Открытость к сотрудничеству и развитию вместе.",
];

function CheckIcon() {
  return (
    <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-black font-extrabold">
      ✓
    </span>
  );
}

function BlockTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-lg font-extrabold tracking-tight text-slate-900">
      {children}
    </div>
  );
}

export default function InfoPage() {
  return (
    <main className="bg-slate-50">
      {/* Header */}
      <section className="border-b border-black/5 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <h1 className="text-4xl font-extrabold tracking-tight">Информация</h1>
          <p className="mt-3 max-w-3xl text-slate-600">
            Здесь собрана основная информация о магазине: подход к качеству, ценности и
            принципы работы.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold bg-black text-white hover:bg-black/85 transition"
            >
              В магазин →
            </Link>
            <Link
              href="/delivery"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold bg-yellow-400 text-black hover:bg-yellow-300 transition"
            >
              Доставка →
            </Link>
          </div>
        </div>
      </section>

      {/* 3 columns grid */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Mission */}
          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
            <BlockTitle>Наша миссия</BlockTitle>
            <div className="mt-4 space-y-3">
              {mission.map((t) => (
                <div
                  key={t}
                  className="rounded-2xl border border-black/10 bg-white px-4 py-4"
                >
                  <div className="flex items-start gap-3">
                    <CheckIcon />
                    <p className="text-slate-700 leading-relaxed">{t}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Values */}
          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
            <BlockTitle>Наши ценности</BlockTitle>
            <div className="mt-4 space-y-3">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="rounded-2xl border border-black/10 bg-white px-4 py-4"
                >
                  <div className="flex items-start gap-3">
                    <CheckIcon />
                    <p className="text-slate-700 leading-relaxed">
                      <span className="font-semibold text-slate-900">
                        {v.title}
                      </span>{" "}
                      — {v.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reasons */}
          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
            <BlockTitle>Почему выбирают нас</BlockTitle>
            <div className="mt-4 space-y-3">
              {reasons.map((t) => (
                <div
                  key={t}
                  className="rounded-2xl border border-black/10 bg-white px-4 py-4"
                >
                  <div className="flex items-start gap-3">
                    <CheckIcon />
                    <p className="text-slate-700 leading-relaxed">{t}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}