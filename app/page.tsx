import Link from "next/link";
import InfoCard from "@/components/InfoCard";
import { getAllProducts } from "@/lib/data";
import { moneyEUR } from "@/lib/money";
import Image from "next/image";

const cats = [
  {
    title: "Hilma Biocare",
    slug: "hilma",
    label: "Масло",
    oil: "Этилолеат / Кунжутное",
    image: "/categories/catalog.jpg",
  },
  {
    title: "Driada Medical",
    slug: "driada",
    label: "Масло",
    oil: "Кунжутное / Виноградная косточка / MCT",
    image: "/categories/new.jpg",
  },
  {
    title: "Somatrop-LAB",
    slug: "somatrop",
    label: "Масло",
    oil: "Этилолеат / Кунжутное",
    image: "/categories/popular.jpg",
  },
  {
    title: "Marten PRO",
    slug: "marten",
    label: "Форма",
    oil: "HGH Somatropin / Liquid / Powder",
    image: "/categories/info.jpg",
  },
];

export default function HomePage() {
  const featured = getAllProducts().slice(0, 4); // первые 4 товара

  return (
    <main>
      {/* HERO */}
<section className="relative h-[360px] md:h-[460px] overflow-hidden">
  {/* Фон MOBILE */}
  <Image
    src="/hero-mobile.jpg"
    alt="ZLOY PHARM"
    fill
    priority
    className="object-cover md:hidden"
  />

  {/* Фон DESKTOP */}
  <Image
    src="/hero.jpg"
    alt="ZLOY PHARM"
    fill
    priority
    className="object-cover hidden md:block"
  />

  {/* затемнение */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />

  {/* Контент */}
  <div className="relative z-10 h-full flex flex-col items-center justify-end px-4 pb-8 md:pb-14 text-center">
    {/* Кнопки снизу по центру */}
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
      <Link
        href="/shop"
        className="w-full sm:w-auto bg-yellow-400 text-black px-8 py-3 font-semibold rounded hover:bg-yellow-300 transition text-center"
      >
        МАГАЗИН →
      </Link>

      <a
        href="#infos"
        className="w-full sm:w-auto border border-white text-white px-8 py-3 rounded hover:bg-white hover:text-black transition text-center"
      >
        Ответы на вопросы
      </a>
    </div>
  </div>
</section>

      {/* CATEGORY CARDS */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid gap-6 md:grid-cols-4">
            {cats.map((cat) => (
              <Link
                key={cat.slug}
                href={`/brand/${cat.slug}`}
                className="group rounded-2xl border bg-white overflow-hidden flex flex-col h-full hover:shadow-lg transition"
              >
                {/* КАРТИНКА */}
                <div className="relative h-40 w-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* ТЕКСТ */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold">{cat.title}</h3>

                  <div className="mt-2 text-sm text-slate-500">
                    <span className="font-semibold text-slate-700">
                      {cat.label}:
                    </span>{" "}
                    {cat.oil}
                  </div>

                  {/* ССЫЛКА ВСЕГДА ВНИЗУ */}
                  <span className="mt-auto pt-5 inline-flex items-center text-sm font-medium text-orange-600">
                    Смотреть →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-3xl font-extrabold tracking-tight">
            ЛИДЕРЫ ПРОДАЖ
          </h2>
          <p className="mt-2 text-slate-600">Наши клиенты выбирают:</p>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {featured.map((p) => (
              <Link
                key={p.slug}
                href={`/product/${p.slug}`}
                className="
                  bg-white
                  border border-black/10
                  shadow-sm
                  transition
                  duration-300
                  ease-out
                  hover:scale-[1.03]
                  hover:shadow-lg
                "
              >
                <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image || "/placeholder.jpg"}
                    alt={p.title}
                    className="h-full w-full object-cover"
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
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div className="border border-black/10 overflow-hidden bg-slate-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/gym.jpg"
                alt="Info"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <div className="text-3xl font-extrabold tracking-tight">
                ПОЧЕМУ ВЫБИРАЮТ НАС
              </div>
              <div className="mt-3 h-[3px] w-16 bg-yellow-400" />
              <p className="mt-6 text-slate-700 leading-relaxed">
                Покупая у нас, вы получаете только оригинальные препараты,
                защищённые уникальными кодами для проверки на официальном сайте
                производителя. Мы работаем для того, чтобы улучшать здоровье и
                качество жизни людей с помощью современных фармакологических
                решений. Мы открыты к партнёрству и уверены: успех рождается в
                совместной работе. Сотрудничая с нами, вы получаете надёжного
                партнёра, который разделяет ваши цели.
              </p>

              <div className="mt-8">
                <Link
                  href="/shop"
                  className="inline-flex items-center justify-center rounded-full px-7 py-3 font-semibold bg-black text-white hover:bg-black/85 transition"
                >
                  В МАГАЗИН →
                </Link>

                <InfoCard />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ / ВОПРОСЫ */}
      <section id="infos" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h3 className="text-4xl font-extrabold tracking-tight">FAQ</h3>
          <p className="mt-3 text-lg text-slate-600 max-w-3xl">
            Собрали ответы на популярные вопросы. Если нужного ответа нет —
            напишите нам, и мы подскажем.
          </p>

          <div className="mt-10 rounded-3xl border border-black/10 bg-white p-6 md:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  q: "Какие варианты оплаты доступны?",
                  a: "Поддерживаем несколько способов оплаты. Конкретные варианты зависят от вашей страны и выбранной доставки — уточним в сообщении перед оплатой.",
                },
                {
                  q: "Есть ли минимальная сумма заказа?",
                  a: "Минимальной суммы заказа у нас нет. При желании вы можете оформить заказ даже на одну единицу товара. ",
                },
                {
                  q: "Сколько времени занимает сборка заказа?",
                  a: "Обычно сборка занимает 1–2 рабочих дня. В периоды высокой нагрузки сроки могут немного увеличиваться.",
                },
                {
                  q: "Какие сроки доставки?",
                  a: "Срок зависит от страны и выбранного способа. Ориентировочный диапазон от 3 до 8 дней.",
                },
                {
                  q: "Когда я получу трек-номер?",
                  a: "Трек-номер отправляем после передачи посылки в службу доставки. Как правило от 1 до 14 дней.",
                },
                {
                  q: "Что делать, если в посылке что-то не так?",
                  a: "Сразу напишите нам и приложите фото/видео распаковки. Мы быстро разберёмся и предложим решение.",
                },
                {
                  q: "Как работает конфиденциальность?",
                  a: "Мы минимизируем персональные данные и используем нейтральные формулировки в деталях отправки, где это возможно.",
                },
                {
                  q: "Как связаться с поддержкой?",
                  a: "Проще всего — через Telegram или email. Укажите номер заказа (если есть), чтобы мы ответили быстрее.",
                },
              ].map((item) => (
                <details
                  key={item.q}
                  className="group rounded-2xl border border-black/10 bg-white px-5 py-4 hover:bg-slate-50 transition"
                >
                  <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                    <span className="text-base md:text-lg font-semibold text-slate-900">
                      {item.q}
                    </span>

                    <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full border border-black/10 bg-white text-slate-700 group-open:rotate-45 transition">
                      +
                    </span>
                  </summary>

                  <div className="mt-3 text-slate-600 leading-relaxed">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="text-slate-600">
                Не нашли ответ? Напишите — обычно отвечаем в рабочее время.
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://t.me/zloy_zakaz"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold bg-yellow-500 text-white hover:bg-yellow-600 transition"
                >
                  Задать вопрос →
                </a>
                <a
                  href="mailto:zloypharma@gmail.com"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold border border-black/15 bg-white hover:bg-slate-50 transition"
                >
                  Написать на email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="video" />
    </main>
  );
}