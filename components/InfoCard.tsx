export default function InfoCard() {
  return (
    <div className="mt-6 max-w-[520px] rounded-2xl border border-black/10 bg-slate-50 p-6 shadow-sm">
      <div className="flex gap-4 items-start">
        {/* Иконка */}
        <div className="shrink-0">
         <div className="h-14 w-14 rounded-full bg-yellow-300 flex items-center justify-center shadow-sm">
  <span className="text-black text-3xl leading-none">!</span>
</div>
        </div>

        {/* Текст */}
        <div>
          <h3 className="text-xl font-bold">
            Конфиденциальность и анонимность
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-slate-700">
            Мы не передаём ваши контакты третьим лицам и максимально
            анонимизируем процессы.
          </p>

          {/* Плашки */}
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-slate-700">
              🛡️ Защита данных
            </span>

            <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-slate-700">
              🕵️ Анонимность
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}