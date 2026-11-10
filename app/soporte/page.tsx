import type { Metadata } from "next";
import Link from "next/link";
import { APP_NAME, CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: `Soporte — ${APP_NAME}`,
  description: `Centro de soporte y ayuda de ${APP_NAME}.`,
};

const faqs = [
  {
    q: "¿De dónde vienen los datos?",
    a: "De fuentes públicas: mindicador.cl para los indicadores chilenos (dólar, euro, UF, UTM, IPC, TPM, Imacec, desempleo y cobre), CoinGecko para las criptomonedas, Twelve Data para ETFs y acciones, y TradingView para el gráfico del IPSA.",
  },
  {
    q: "¿Cada cuánto se actualizan los valores?",
    a: "La app guarda los últimos valores en tu teléfono y los vuelve a consultar cuando tienen más de una hora o cuando deslizas la pantalla hacia abajo para refrescar. Ten en cuenta que el dólar y el euro se publican en días hábiles, la UF tiene un valor por día y la UTM y el IPC cambian una vez al mes.",
  },
  {
    q: "¿Por qué el valor del dólar es distinto al de mi banco o casa de cambio?",
    a: "La app muestra el dólar observado, que es el valor de referencia que publica el Banco Central de Chile. Los bancos y casas de cambio aplican su propio precio de compra y venta, por lo que sus valores pueden ser distintos.",
  },
  {
    q: "La app no carga los indicadores, ¿qué hago?",
    a: "Revisa tu conexión a internet y desliza la pantalla hacia abajo para refrescar, o toca \"Reintentar\". Si el problema continúa, puede que el proveedor de datos no esté disponible en ese momento; en ese caso, la app muestra los últimos valores guardados. Si persiste, escríbenos.",
  },
  {
    q: "¿Cómo veo la evolución histórica de un indicador?",
    a: "Abre el menú lateral y entra a \"Gráfico\". Ahí eliges el indicador y el año que quieres revisar.",
  },
  {
    q: "¿Cómo uso la calculadora?",
    a: "En la pestaña \"Calculadora\" eliges la moneda o unidad (dólar, euro, UF o UTM), ingresas el monto y la app lo convierte a pesos chilenos con el valor del día.",
  },
  {
    q: "¿Necesito crear una cuenta?",
    a: "No. La app no tiene registro ni inicio de sesión, y no recopila tus datos personales.",
  },
  {
    q: "¿La información sirve como recomendación de inversión?",
    a: "No. Los datos son referenciales y pueden tener retrasos o diferencias con otras fuentes. Antes de tomar decisiones financieras, consulta fuentes oficiales o a un asesor.",
  },
  {
    q: "¿La app es gratuita?",
    a: `Sí, ${APP_NAME} es gratuita y no muestra publicidad.`,
  },
];

export default function SoportePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-2">Soporte</h1>
      <p className="text-slate-500 mb-12">¿Necesitas ayuda con {APP_NAME}? Estamos para ayudarte.</p>

      {/* Contacto */}
      <div
        className="text-white rounded-2xl p-6 md:p-8 mb-14 flex flex-col md:flex-row items-center justify-between gap-6"
        style={{ background: "linear-gradient(160deg, var(--brand-light) 0%, var(--brand-deep) 100%)" }}
      >
        <div>
          <h2 className="text-lg font-semibold mb-1">Contacto directo</h2>
          <p className="text-white/80 text-sm">
            Escríbenos con tu consulta, sugerencia o problema. Respondemos en un plazo de 24 a 48 horas
            hábiles.
          </p>
        </div>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="inline-flex items-center gap-2 bg-white text-slate-900 px-5 py-3 rounded-xl font-medium hover:bg-slate-100 transition-colors text-sm max-w-full break-all sm:break-normal sm:whitespace-nowrap"
        >
          ✉️ {CONTACT_EMAIL}
        </a>
      </div>

      {/* Preguntas frecuentes */}
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Preguntas frecuentes</h2>
      <div className="space-y-4">
        {faqs.map((item) => (
          <div key={item.q} className="bg-white border border-slate-200 rounded-xl p-6">
            <h3 className="font-semibold text-slate-900 mb-2">{item.q}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>

      {/* Legal */}
      <div className="mt-14 pt-8 border-t border-slate-200 text-center">
        <p className="text-sm text-slate-400">
          También puedes revisar nuestra{" "}
          <Link href="/privacidad" className="text-slate-600 underline hover:text-slate-900">
            Política de Privacidad
          </Link>{" "}
          y nuestros{" "}
          <Link href="/terminos" className="text-slate-600 underline hover:text-slate-900">
            Términos y Condiciones
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
