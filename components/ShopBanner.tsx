import Image from "next/image";

export default function ShopBanner() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[220px] md:h-[300px] w-full">
        {/* фон */}
        <Image
          src="/analot.jpg"
          alt="ZLOY PHARM"
          fill
          priority
          className="object-cover object-center"
        />

        {/* затемнение */}
        <div className="absolute inset-0 bg-black/50" />

        {/* текст */}
        <div className="absolute inset-0">
          <div className="mx-auto max-w-7xl px-6 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <div className="text-sm tracking-widest uppercase text-yellow-400">
                
              </div>

              <h1 className="mt-3 text-3xl md:text-4xl font-extrabold leading-tight">
                <br /> 
              </h1>

              <p className="mt-4 text-white/90">
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* тонкая линия снизу (по желанию) */}
      <div className="h-px w-full bg-black/10" />
    </section>
  );
}