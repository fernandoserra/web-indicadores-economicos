import Link from "next/link";
import AppLogo from "@/components/AppLogo";
import StoreButtons from "@/components/StoreButtons";
import { APP_NAME, DATA_SOURCES } from "@/lib/site";

const features = [
  {
    icon: "💵",
    title: "Indicadores del día",
    description:
      "Dólar, euro, UF y UTM con su valor actualizado y la variación respecto del día anterior. Además: IPC, TPM, Imacec, tasa de desempleo, libra de cobre y el IPSA.",
  },
  {
    icon: "🪙",
    title: "Criptomonedas en pesos",
    description:
      "Las 100 criptomonedas con mayor capitalización de mercado, con su precio en pesos chilenos y la variación de las últimas 24 horas.",
  },
  {
    icon: "📊",
    title: "ETFs y acciones",
    description:
      "Sigue ETFs como SPY, QQQ y GLD, y acciones como Apple, Microsoft, Tesla y NVIDIA, con apertura, máximos, mínimos, volumen y rango de 52 semanas.",
  },
  {
    icon: "📈",
    title: "Gráficos históricos",
    description:
      "Revisa cómo han evolucionado el dólar, el euro, la UF, la UTM y otros indicadores durante los últimos cinco años.",
  },
  {
    icon: "🧮",
    title: "Calculadora",
    description: "Convierte dólares, euros, UF y UTM a pesos chilenos con el valor del día.",
  },
  {
    icon: "📤",
    title: "Comparte en un toque",
    description:
      "Envía cualquier indicador o cotización por WhatsApp, email o la app que prefieras. Funciona en modo claro y oscuro.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-white border-b border-slate-100">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <div className="flex justify-center mb-6">
            <AppLogo size={72} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            Los indicadores económicos
            <br />
            de Chile, al día
          </h1>
          <p className="text-xl text-slate-500 mb-10 max-w-xl mx-auto leading-relaxed">
            Dólar, euro, UF y UTM en una sola app, junto con criptomonedas en pesos chilenos, ETFs,
            acciones y gráficos históricos. Sin registro y sin cuentas.
          </p>
          <StoreButtons />
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-12">
            Todo lo que necesitas para seguir la economía
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white border border-slate-200 rounded-2xl p-6">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-semibold text-slate-900 mb-2">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacidad */}
      <section className="py-4">
        <div className="mx-auto max-w-4xl px-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="text-4xl">🔒</div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-1">Sin cuentas y sin datos personales</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {APP_NAME} no te pide registrarte, no muestra publicidad y no recopila tu información
                personal. Solo consulta datos públicos y guarda en tu teléfono los últimos valores para
                que puedas verlos aunque no tengas conexión.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fuentes de datos */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-xl font-bold text-slate-900 text-center mb-2">Fuentes de datos</h2>
          <p className="text-sm text-slate-500 text-center mb-8">
            La información proviene de fuentes públicas y es referencial.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {DATA_SOURCES.map((source) => (
              <a
                key={source.name}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-slate-200 rounded-xl p-5 hover:border-[var(--brand)] transition-colors"
              >
                <p className="font-semibold text-slate-900 mb-1">{source.name}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{source.use}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="text-white py-16"
        style={{ background: "linear-gradient(160deg, var(--brand-light) 0%, var(--brand-deep) 100%)" }}
      >
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Mantente al día con la economía chilena</h2>
          <p className="text-white/80 mb-8">Descarga {APP_NAME} y ten los indicadores siempre a mano.</p>
          <StoreButtons variant="light" />
        </div>
      </section>

      {/* Legal */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm text-slate-400">
            Al usar {APP_NAME} aceptas nuestra{" "}
            <Link href="/privacidad" className="text-slate-600 underline hover:text-slate-900">
              Política de Privacidad
            </Link>{" "}
            y nuestros{" "}
            <Link href="/terminos" className="text-slate-600 underline hover:text-slate-900">
              Términos y Condiciones
            </Link>
            . La información de la app es referencial y no constituye asesoría financiera.
          </p>
        </div>
      </section>
    </div>
  );
}
