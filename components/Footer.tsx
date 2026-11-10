import Link from "next/link";
import AppLogo from "@/components/AppLogo";
import { APP_NAME } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white mt-auto">
      <div className="mx-auto max-w-4xl px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-600 text-sm">
            <AppLogo size={24} />
            <span>{APP_NAME}</span>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-500">
            <Link href="/privacidad" className="hover:text-slate-900 transition-colors">
              Política de Privacidad
            </Link>
            <Link href="/terminos" className="hover:text-slate-900 transition-colors">
              Términos y Condiciones
            </Link>
            <Link href="/soporte" className="hover:text-slate-900 transition-colors">
              Soporte
            </Link>
          </nav>
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} {APP_NAME}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
