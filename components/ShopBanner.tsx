import Image from "next/image";

export default function ShopBanner() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[260px] md:h-[300px] w-full">
        {/* MOBILE */}
        <Image
          src="/analog-mobile.jpg"
          alt="ZLOY PHARM"
          fill
          priority
          className="object-cover md:hidden"
        />

        {/* DESKTOP */}
        <Image
          src="/analog.jpg"
          alt="ZLOY PHARM"
          fill
          priority
          className="object-cover hidden md:block"
        />

        {/* затемнение */}
        <div className="absolute inset-0 bg-black/50" />

        {/* текст */}
        <div className="absolute inset-0">
          <div className="mx-auto max-w-7xl px-6 h-full flex items-center">
            <div className="max-w-2xl text-white">
              {/* если захочешь текст — сюда */}
            </div>
          </div>
        </div>
      </div>

      {/* линия снизу */}
      <div className="h-px w-full bg-black/10" />
    </section>
  );
}