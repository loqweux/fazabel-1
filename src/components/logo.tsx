export function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <div
        className="grid h-9 w-9 shrink-0 place-items-center rounded-lg text-sm font-extrabold text-white"
        style={{ background: "linear-gradient(135deg, #f47a20, #6155F5)" }}
      >
        <img src="./images/logo.jpg" alt="logo" />
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
