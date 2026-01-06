import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        {/* LOGO + NAME */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="ZLOY PHARM logo"
            width={40}
            height={40}
            priority
          />
          <span className="font-bold text-3xl tracking-wide">ZLOY PHARM</span>
        </Link>

        {/* NAV */}
        <nav className="flex items-center gap-6 text-base font-medium">
          <Link className="hover:text-yellow-500 transition" href="/shop">
            Магазин
          </Link>
          <Link className="hover:text-yellow-500 transition" href="/cart">
            Корзина
          </Link>
          <Link className="hover:text-yellow-500 transition" href="/checkout">
            Оформление
          </Link>

          {/* ✅ НОВАЯ СТРАНИЦА */}
          <Link className="hover:text-yellow-500 transition" href="/delivery">
            Доставка
          </Link>

          {/* ✅ чтобы не было 404 — сделаем страницу /infos ниже */}
          <Link className="hover:text-yellow-500 transition" href="/infos">
            Информация
          </Link>
        </nav>
      </div>
    </header>
  );
}