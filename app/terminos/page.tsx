import type { Metadata } from "next";
import Link from "next/link";
import { APP_NAME, CONTACT_EMAIL, DATA_SOURCES, LAST_UPDATED } from "@/lib/site";

export const metadata: Metadata = {
  title: `Términos y Condiciones — ${APP_NAME}`,
  description: `Términos y condiciones de uso de la aplicación ${APP_NAME}.`,
};

const linkClass = "text-slate-800 underline";

export default function TerminosPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-2">Términos y Condiciones</h1>
      <p className="text-slate-400 text-sm mb-10">Última actualización: {LAST_UPDATED}</p>

      <div className="max-w-none space-y-8 text-slate-600 leading-relaxed">
        <section>
          <p>
            Al descargar, instalar o usar {APP_NAME}, aceptas estos Términos y Condiciones. Si no estás
            de acuerdo con alguno de ellos, no uses la aplicación.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">1. Descripción del servicio</h2>
          <p>
            {APP_NAME} es una aplicación gratuita que muestra información económica y financiera:
            indicadores de Chile (dólar, euro, UF, UTM, IPC, TPM, Imacec, tasa de desempleo y libra de
            cobre), el IPSA, criptomonedas, ETFs y acciones, además de gráficos históricos y una
            calculadora de conversión a pesos chilenos.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">
            2. La información es referencial y no constituye asesoría financiera
          </h2>
          <div className="bg-[var(--brand-soft)] border border-[var(--brand)]/20 rounded-xl p-5">
            <p className="text-slate-700">
              Toda la información que muestra {APP_NAME} tiene <strong>carácter referencial e
              informativo</strong>. <strong>No constituye asesoría financiera, tributaria ni legal, ni
              una recomendación</strong> de compra, venta o inversión en ningún instrumento.
            </p>
          </div>
          <p className="mt-3">
            Antes de tomar decisiones financieras, verifica los valores en fuentes oficiales (como el
            Banco Central de Chile, el Servicio de Impuestos Internos o la Comisión para el Mercado
            Financiero) o consulta a un asesor calificado. Las decisiones que tomes a partir de la
            información de la app son de tu exclusiva responsabilidad.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">3. Fuentes de datos de terceros</h2>
          <p>Los datos que muestra la app provienen de servicios externos:</p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            {DATA_SOURCES.map((source) => (
              <li key={source.name}>
                <a href={source.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {source.name}
                </a>
                : {source.use}
              </li>
            ))}
          </ul>
          <p className="mt-3">
            No controlamos estos servicios ni garantizamos que la información sea exacta, completa o esté
            actualizada. Los valores pueden tener retrasos (por ejemplo, la app guarda los datos hasta una
            hora antes de volver a consultarlos), diferencias con otras fuentes o errores del proveedor.
            Las marcas y nombres de estos servicios pertenecen a sus respectivos titulares.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">4. Disponibilidad del servicio</h2>
          <p>
            Para mostrar información actualizada, la app necesita conexión a internet y depende de que los
            servicios de terceros estén disponibles. No garantizamos que la app funcione de forma
            ininterrumpida ni libre de errores. Si un proveedor no está disponible, la app puede mostrar
            los últimos valores guardados o no mostrar cierta información. También podemos modificar,
            suspender o eliminar funciones o fuentes de datos en cualquier momento.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">5. Uso de la aplicación</h2>
          <p>Al usar la app te comprometes a:</p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Usarla únicamente con fines legales y personales.</li>
            <li>No intentar realizar ingeniería inversa, descompilar o modificar la aplicación.</li>
            <li>
              No usar la app para extraer datos de forma masiva o automatizada, ni para afectar el
              funcionamiento de los servicios de terceros de los que obtiene la información.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">6. Sin registro ni cuenta</h2>
          <p>
            {APP_NAME} no requiere que crees una cuenta ni que inicies sesión. El tratamiento de la
            información se describe en nuestra{" "}
            <Link href="/privacidad" className={linkClass}>
              Política de Privacidad
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">7. Propiedad intelectual</h2>
          <p>
            {APP_NAME}, incluido su diseño, código, ícono y contenido propio, es propiedad de sus
            desarrolladores. Estos términos no te otorgan ningún derecho sobre la propiedad intelectual de
            la aplicación, salvo el uso personal descrito aquí. Los datos de terceros pertenecen a sus
            respectivos proveedores.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">8. Limitación de responsabilidad</h2>
          <p>En la medida permitida por la ley, no somos responsables por:</p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              Pérdidas o daños derivados de decisiones financieras, de inversión o de cualquier otro tipo
              tomadas a partir de la información de la app.
            </li>
            <li>Errores, retrasos u omisiones en los datos entregados por los proveedores externos.</li>
            <li>La falta de disponibilidad temporal o permanente de la app o de alguna de sus funciones.</li>
            <li>Daños indirectos, incidentales o consecuentes derivados del uso de la app.</li>
          </ul>
          <p className="mt-3">La aplicación se proporciona &quot;tal cual&quot;, sin garantías de ningún tipo.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">9. Modificaciones</h2>
          <p>
            Podemos modificar estos Términos y Condiciones en cualquier momento. Los cambios se publicarán
            en esta misma página con una nueva fecha de &quot;Última actualización&quot;. Si sigues usando
            {" "}{APP_NAME} después de los cambios, se entiende que aceptas los nuevos términos.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">10. Ley aplicable</h2>
          <p>
            Estos términos se rigen por las leyes de la República de Chile. Cualquier disputa será sometida
            a la jurisdicción de los tribunales competentes de Chile.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">11. Contacto</h2>
          <p>Si tienes consultas sobre estos Términos y Condiciones, escríbenos a:</p>
          <p className="mt-3">
            <a href={`mailto:${CONTACT_EMAIL}`} className={`${linkClass} font-medium`}>
              {CONTACT_EMAIL}
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
