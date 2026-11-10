import Link from "next/link";
import AppLogo from "@/components/AppLogo";
import { APP_NAME } from "@/lib/site";

const links = [
  { href: "/soporte", label: "Soporte" },
  { href: "/privacidad", label: "Privacidad" },
  { href: "/terminos", label: "Términos" },
];

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-4xl px-6 py-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="flex items-center gap-2">
          <AppLogo size={32} />
          <span className="font-semibold text-slate-900 text-lg">{APP_NAME}</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm text-slate-600">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-[var(--brand-deep)] transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
