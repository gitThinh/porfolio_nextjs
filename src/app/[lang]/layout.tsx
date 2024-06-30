import "../globals.css";

import { Inter } from "next/font/google";

import { dir } from "i18next";
import { languages, fallbackLng } from "@/app/i18n/config-lang";
import { useTranslation } from "@/app/i18n";
import TranslationProvider from "./TranslationProvider";
import ThemeProvider from "@/contexts/ThemeProvider";

export async function generateMetadata({
  params: { lang },
}: {
  params: {
    lang: string;
  };
}) {
  if (languages.indexOf(lang) < 0) lang = fallbackLng;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(lang);
  return {
    // @ts-ignore
    title: t("common:home"),
  };
}

const i18nNamespaces = ["common"];

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default async function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: {
    lang: string;
  };
}) {
  return (
    <html lang={lang} dir={dir(lang)} className="mdl-js">
      <body className={inter.className}>
        <ThemeProvider>
          <TranslationProvider
            lng={lang}
            namespaces={i18nNamespaces}
            options={{}}
          >
            {children}
          </TranslationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
