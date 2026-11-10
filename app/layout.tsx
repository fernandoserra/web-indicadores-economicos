import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { APP_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: APP_NAME,
  description:
    "Dólar, euro, UF y UTM al día, más criptomonedas en pesos chilenos, ETFs, acciones y gráficos históricos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
