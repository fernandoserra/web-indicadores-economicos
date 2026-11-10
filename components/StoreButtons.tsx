import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/site";

type StoreButtonsProps = {
  /** "dark" para fondos claros, "light" para fondos oscuros. */
  variant?: "dark" | "light";
};

const stores = [
  { label: "App Store", icon: "🍎", url: APP_STORE_URL },
  { label: "Google Play", icon: "▶", url: PLAY_STORE_URL },
];

export default function StoreButtons({ variant = "dark" }: StoreButtonsProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition-colors";
  const colors =
    variant === "dark"
      ? "bg-slate-900 text-white hover:bg-slate-700"
      : "bg-white text-slate-900 hover:bg-slate-100";
  const algunaDisponible = stores.some((store) => store.url);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {stores.map((store) =>
          store.url ? (
            <a key={store.label} href={store.url} target="_blank" rel="noopener noreferrer" className={`${base} ${colors}`}>
              <span aria-hidden="true">{store.icon}</span> Descargar en {store.label}
            </a>
          ) : (
            <span key={store.label} className={`${base} ${colors} opacity-60 cursor-default`}>
              <span aria-hidden="true">{store.icon}</span> {store.label}
            </span>
          )
        )}
      </div>
      {!algunaDisponible && (
        <p className={`text-xs ${variant === "dark" ? "text-slate-400" : "text-white/70"}`}>Próximamente disponible</p>
      )}
    </div>
  );
}
