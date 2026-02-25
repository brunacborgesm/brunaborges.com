import type { Metadata } from "next";
import { Josefin_Sans, Nunito, Syne } from "next/font/google";
import "./globals.css";
import { BackgroundEffects } from "@/components/layout/background-effects";
import { I18nProvider } from "@/components/layout/i18n-provider";
import { MainSiteShell } from "@/components/layout/main-site-shell";

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bruna Borges | Software Engineer",
  description: "Software Engineer helping people leverage their business with modern and strategic websites.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark scroll-smooth">
      <body
        className={`${josefinSans.variable} ${nunito.variable} ${syne.variable} antialiased selection:bg-primary/30 selection:text-primary font-body`}
      >
        <I18nProvider>
          <BackgroundEffects />
          <MainSiteShell>
            {children}
          </MainSiteShell>
        </I18nProvider>
      </body>
    </html>
  );
}

