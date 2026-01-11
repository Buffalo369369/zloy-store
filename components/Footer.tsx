import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden text-white">
      {/* ФОН (DESKTOP + MOBILE) */}
      <div className="absolute inset-0">
        {/* Mobile */}
        <Image
          src="/footer-bg-mobile.jpg"
          alt="Footer background mobile"
          fill
          priority
          className="object-cover md:hidden"
        />
        {/* Desktop */}
        <Image
          src="/footer-bg.jpg"
          alt="Footer background"
          fill
          priority
          className="hidden md:block object-cover object-center"
        />
      </div>

      {/* ЗАТЕМНЕНИЕ */}
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/70" />

      {/* КОНТЕНТ */}
      <div className="relative mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* ЛЕВО */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <div className="text-xl font-extrabold tracking-wide">ZLOY PHARM</div>
            <p className="mt-3 text-sm leading-relaxed text-white/80">
              В нашем магазине вы можете приобрести оригинальные препараты, а также
              получить консультацию по доставке и оплате.
            </p>
          </div>

          {/* РАЗДЕЛЫ */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <div className="text-sm font-semibold uppercase tracking-widest text-white/70">
              Разделы
            </div>

            <nav className="mt-4 grid gap-2 text-base">
              <Link className="hover:text-yellow-400 transition" href="/shop">
                Магазин
              </Link>
              <Link className="hover:text-yellow-400 transition" href="/cart">
                Корзина
              </Link>
              
              <Link className="hover:text-yellow-400 transition" href="/delivery">
                Доставка
              </Link>
              <Link className="hover:text-yellow-400 transition" href="/infos">
                Информация
              </Link>
            </nav>
          </div>

          {/* КОНТАКТЫ */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <div className="text-sm font-semibold uppercase tracking-widest text-white/70">
              Контакты
            </div>

            <div className="mt-4 space-y-2 text-white/85">
              <div>
                <span className="text-white/60">Telegram:</span>{" "}
                <a
                  className="hover:text-yellow-400 transition"
                  href="https://t.me/zloy_zakaz"
                  target="_blank"
                  rel="noreferrer"
                >
                  @zloy_zakaz
                </a>
              </div>

              <div>
                <span className="text-white/60">Email:</span>{" "}
                <a
                  className="hover:text-yellow-400 transition"
                  href="mailto:zloypharma@gmail.com"
                >
                  zloypharma@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/65">
          © 2026 ZLOY PHARM • Все права защищены
        </div>
      </div>
    </footer>
  );
}