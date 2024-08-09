import "../globals.css";

import { Open_Sans } from "next/font/google";

import { dir } from "i18next";
import { languages, fallbackLng } from "@/app/i18n/config-lang";
import { useTranslation } from "@/app/i18n";
import { Suspense } from "react";
import Header from "./(Header)/Header";

export async function generateMetadata({
  params: { lang },
}: {
  params: {
    lang: string;
  };
}) {
  if (languages.indexOf(lang) < 0) lang = fallbackLng;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(lang, ["common"]);
  return {
    // @ts-ignore
    title: t("common:home"),
  };
}

const openSans = Open_Sans({
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
    <html lang={lang} dir={dir(lang)} className={`${openSans.className}`}>
      <body className="bg-neutral-200 text-base text-neutral-900 dark:bg-neutral-900 dark:text-neutral-50">
        <Suspense>
          <>
            <Header lang={lang} />
            {children}
          </>
        </Suspense>
      </body>
    </html>
  );
}
