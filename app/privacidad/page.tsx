import type { Metadata } from "next";
import { APP_NAME, CONTACT_EMAIL, DATA_SOURCES, LAST_UPDATED } from "@/lib/site";

export const metadata: Metadata = {
  title: `Política de Privacidad — ${APP_NAME}`,
  description: `Política de privacidad de la aplicación ${APP_NAME}.`,
};

const linkClass = "text-slate-800 underline";

export default function PrivacidadPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-2">Política de Privacidad</h1>
      <p className="text-slate-400 text-sm mb-10">Última actualización: {LAST_UPDATED}</p>

      <div className="max-w-none space-y-8 text-slate-600 leading-relaxed">
        <section>
          <p>
            {APP_NAME} es una aplicación para consultar indicadores económicos de Chile, criptomonedas,
            ETFs y acciones. No requiere que crees una cuenta ni que inicies sesión, no muestra
            publicidad y no recopila tu información personal.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">1. Información que recopilamos</h2>
          <p>
            <strong>No recopilamos datos personales.</strong> La app no tiene registro, no usa
            herramientas de analítica ni de seguimiento, y no tiene un servidor propio que reciba tu
            información.
          </p>
          <p className="mt-3">La app guarda en tu dispositivo únicamente lo siguiente:</p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              <strong>Copia temporal de los datos consultados:</strong> los últimos valores de los
              indicadores, criptomonedas, ETFs y acciones, junto con la fecha en que se descargaron.
              Sirve para mostrarte la información más rápido y aunque no tengas conexión. Son datos
              públicos y no contienen información sobre ti.
            </li>
          </ul>
          <p className="mt-3">
            Los montos que ingresas en la calculadora se usan solo mientras la app está abierta y no se
            guardan.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">2. Permisos que solicita la app</h2>
          <p>
            {APP_NAME} no solicita permisos de cámara, ubicación, contactos, fotos, micrófono ni
            notificaciones. Solo usa la conexión a internet para descargar los datos.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">3. Servicios de terceros</h2>
          <p>
            Para mostrar la información, la app se conecta directamente desde tu dispositivo a los
            siguientes servicios:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            {DATA_SOURCES.map((source) => (
              <li key={source.name}>
                <a href={source.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {source.name}
                </a>
                : {source.use}
              </li>
            ))}
            <li>
              <a href="https://expo.dev" target="_blank" rel="noopener noreferrer" className={linkClass}>
                Expo
              </a>
              : revisa si hay actualizaciones disponibles de la app.
            </li>
          </ul>
          <p className="mt-3">
            Como en cualquier conexión a internet, estos servicios pueden recibir información técnica
            básica, como tu dirección IP, el tipo de dispositivo o la versión del sistema operativo, para
            responder a la consulta. El gráfico del IPSA se carga desde TradingView dentro de la app y
            puede usar sus propias cookies o tecnologías similares. Cada servicio trata esa información
            según su propia política de privacidad. Nosotros no recibimos ni almacenamos esos datos.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">4. Contacto por email y compartir</h2>
          <p>
            La sección &quot;Enviar&quot; de la app prepara un mensaje y abre tu aplicación de correo.
            Tu nombre, email y mensaje solo nos llegan si decides enviar ese correo, y los usamos
            únicamente para responder tu consulta.
          </p>
          <p className="mt-3">
            Cuando usas la opción &quot;Compartir&quot;, la app abre el panel para compartir de tu
            sistema operativo. Tú eliges a qué app o contacto enviarlo; nosotros no tenemos acceso a esa
            información.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">5. Compartir datos con terceros</h2>
          <p>
            <strong>No vendemos, cedemos ni compartimos información personal con terceros</strong>, ya
            que no la recopilamos. La app no contiene publicidad ni herramientas de seguimiento.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">6. Control sobre tus datos</h2>
          <p>
            La copia temporal de datos se guarda solo en tu dispositivo y se reemplaza automáticamente con
            cada actualización. Si desinstalas la app, se elimina de forma definitiva.
          </p>
          <p className="mt-3">
            Si nos escribiste por email y quieres que eliminemos ese mensaje, escríbenos a{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className={linkClass}>
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">7. Menores de edad</h2>
          <p>
            {APP_NAME} no está dirigida a menores de 13 años y no recopila intencionalmente información
            de menores. Como la app no requiere cuenta, no recopila datos personales de ningún usuario.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">8. Cambios a esta política</h2>
          <p>
            Podemos actualizar esta política ocasionalmente, por ejemplo si agregamos nuevas funciones o
            fuentes de datos. Los cambios se publicarán en esta misma página con una nueva fecha de
            &quot;Última actualización&quot;.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">9. Contacto</h2>
          <p>Si tienes preguntas sobre esta Política de Privacidad, escríbenos a:</p>
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
