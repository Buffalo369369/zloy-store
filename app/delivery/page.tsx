import Link from "next/link";
import Image from "next/image";

const steps = [
  {
    title: "1. Обработка",
    text: "Подтверждаем детали заказа и подготавливаем отправку. Обычно занимает 24–72 часа в рабочие дни.",
  },
  {
    title: "2. Упаковка",
    text: "Используем нейтральную упаковку без лишних отметок. Статус обновляется после подготовки посылки.",
  },
  {
    title: "3. Передано курьеру",
    text: "После передачи в службу доставки статус меняется, и начинается движение по маршруту.",
  },
  {
    title: "4. Отправлено",
    text: "Трек-номер приходит после отправки (обычно от 1 до 14 дней).",
  },
];

const paymentMethods = [
  "Crypto (USDT и другие)",
  "Банковский перевод",
];

const policyBullets = [
  "Пожалуйста, ведите видеосъёмку при распаковке товара. В случае наличия видео, если обнаружится недостача или повреждение, мы осуществим повторную отправку.",
  "Если с нашей стороны была допущена ошибка в адресе, мы также оформим повторную отправку в случае, если посылка до вас не дошла.",
  "По вопросам повторной отправки — пишите в поддержку, указав номер заказа.",
];

function ProgressRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="mt-6">
      <div className="flex items-center justify-between text-sm text-slate-700">
        <span>{label}</span>
        <span className="font-semibold">{value}</span>
      </div>
      <div className="mt-2 h-2 w-full rounded-full bg-slate-200 overflow-hidden">
        <div className="h-full w-full bg-black" />
      </div>
    </div>
  );
}

export default function DeliveryPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="bg-slate-50 border-b">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <h1 className="text-center text-4xl md:text-5xl font-extrabold tracking-tight">
            ДОСТАВКА
          </h1>
          <div className="mx-auto mt-4 h-[3px] w-24 bg-yellow-400" />

          {/* 2 колонки */}
          <div className="mt-12 grid gap-10 md:grid-cols-2 md:items-start">
            {/* Левая */}
            <div className="rounded-3xl border border-black/10 bg-white p-8">
              <div className="text-sm font-semibold text-slate-700">
                Службы доставки
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {["DHL", "UPS", "GLS", "DPD", "FedEx", "TNT", "Hermes"].map(
                  (x) => (
                    <span
                      key={x}
                      className="rounded-full border border-black/10 bg-slate-50 px-4 py-2 text-sm text-slate-700"
                    >
                      {x}
                    </span>
                  )
                )}
              </div>

              <div className="mt-10 rounded-2xl bg-slate-50 p-6">
                <div className="text-lg font-bold text-slate-900">
                  Нейтральная упаковка
                </div>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  Упаковываем аккуратно и без лишних обозначений. Где возможно —
                  используем нейтральные формулировки и минимализацию данных.
                </p>

                <div className="mt-6 grid gap-3">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5">📦</span>
                    <p className="text-slate-700">
                      Упаковка без лишнего шума
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5">🔎</span>
                    <p className="text-slate-700">
                      Трек-номер после отправки
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5">🧾</span>
                    <p className="text-slate-700">
                      Статусы и сопровождение по запросу
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Правая */}
            <div>
              <div className="text-3xl md:text-4xl font-extrabold tracking-tight">
                Безопасная и аккуратная доставка
              </div>
              <div className="mt-3 h-[3px] w-16 bg-yellow-400" />

              <p className="mt-6 text-slate-700 leading-relaxed">
                После подтверждения заказа мы готовим отправку и передаём посылку
                выбранной службе. Сроки зависят от направления и загруженности
                перевозчика.
              </p>

              {/* Картинка */}
{/* Картинка */}
<div className="mt-8 overflow-hidden rounded-3xl border border-black/10 bg-slate-50">
  <img
    src="/delivery-illustration.jpg"
    alt="Доставка"
    className="h-[190px] w-full object-cover md:h-[260px]"
  />
</div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/shop"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold bg-black text-white hover:bg-black/85 transition"
                >
                  В магазин →
                </Link>
                <a
                  href="https://t.me/zloy_zakaz"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold bg-yellow-400 text-black hover:bg-yellow-300 transition"
                >
                  Написать в Telegram →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ДОСТАВКА И ОПЛАТА */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-center text-3xl md:text-4xl font-extrabold">
            ДОСТАВКА И ОПЛАТА
          </h2>
          <div className="mx-auto mt-4 h-[3px] w-24 bg-yellow-400" />

          <div className="mt-10 rounded-3xl border border-black/10 bg-slate-50 p-8 text-center">
            <div className="text-2xl md:text-3xl font-extrabold">Доставка</div>

            <p className="mt-4 text-slate-700 leading-relaxed">
              Ориентировочные сроки зависят от направления. После оплаты заказ
              обрабатывается в рабочие дни и передаётся в доставку.
            </p>

            <p className="mt-3 text-slate-700 leading-relaxed">
              Трек-номер сообщаем после отправки.
            </p>
          </div>

          {/* 4 шага */}
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {steps.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-black/10 bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
              >
                <div className="text-xl font-extrabold">{s.title}</div>
                <p className="mt-3 text-slate-700 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>

          {/* Оплата */}
          <div className="mt-16 grid gap-10 md:grid-cols-2 md:items-start">
            <div className="rounded-3xl border border-black/10 bg-white p-8">
              <div className="flex items-baseline gap-2">
                <div className="text-3xl font-extrabold">Методы</div>
                <div className="text-3xl font-extrabold text-yellow-500">
                  Оплаты
                </div>
              </div>

              <div className="mt-6 space-y-3 text-slate-700">
                {paymentMethods.map((m) => (
                  <div key={m} className="flex items-start gap-3">
                    <span className="mt-0.5 text-yellow-500">●</span>
                    <p>{m}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-black/10 bg-slate-50 p-8">
              <div className="text-2xl font-extrabold">
                Важно перед отправкой
              </div>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Проверьте адрес доставки, имя и контактные данные. Это помогает
                избежать задержек и возвратов.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="mailto:zloypharm@mail.ru"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold bg-white border border-black/10 hover:bg-slate-100 transition"
                >
                  Написать на email
                </a>
                <a
                  href="https://t.me/zloy_zakaz"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold bg-black text-white hover:bg-black/85 transition"
                >
                  Поддержка →
                </a>
              </div>
            </div>
          </div>

          {/* Политика повторной отправки */}
          <div className="mt-16 grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <div className="text-3xl font-extrabold">
                ПОЛИТИКА ПОВТОРНОЙ ОТПРАВКИ
              </div>
              <div className="mt-3 h-[3px] w-16 bg-yellow-400" />

              <p className="mt-6 text-slate-700 leading-relaxed">
                Перед оформлением заказа ознакомьтесь с условиями. Оформляя заказ,
                вы подтверждаете согласие с правилами повторной отправки.
              </p>

              <div className="mt-6 space-y-4">
                {policyBullets.map((b) => (
                  <div key={b} className="flex items-start gap-3">
                    <span className="shrink-0 inline-flex h-7 w-7 items-center justify-center rounded-full bg-yellow-400 text-black font-bold shadow-sm">
  ✓
</span>
                    <p className="text-slate-700 leading-relaxed">{b}</p>
                  </div>
                ))}
              </div>
            </div>

          
            {/* иллюстрация */}
<div className="rounded-3xl border border-black/10 bg-slate-50 p-10 flex items-center justify-center shadow-sm">
  <div className="relative w-full h-[360px] md:h-[320px]">
    <Image
      src="/delivery/redelivery.png"
      alt="Политика повторной отправки"
      fill
      className="object-contain"
      priority
    />
  </div>
</div>
          </div>

                    {/* связь */}
          <div className="mt-16">
            <div className="text-2xl font-extrabold">Связаться с нами</div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://t.me/zloy_zakaz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold bg-yellow-400 text-black hover:bg-yellow-300 transition"
              >
                Написать в Telegram →
              </a>

              <a
                href="mailto:zloypharm@mail.ru"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold bg-white border border-black/10 hover:bg-slate-50 transition"
              >
                Написать на email
              </a>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}