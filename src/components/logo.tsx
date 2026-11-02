export function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-lg bg-white/5">
        <img
          src="/images/logo.jpg"
          alt="logo"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="leading-none">
        <div className="font-display text-[17px] font-extrabold tracking-tight">
          ФАЗА.БЕЛ
        </div>
        <div className="mt-1 text-[8px] font-medium tracking-[0.18em] text-white/50">
          ЭНЕРГО•ИНЖИНИРИНГ
        </div>
      </div>
    </div>
  );
}
