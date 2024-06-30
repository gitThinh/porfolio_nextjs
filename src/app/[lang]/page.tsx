import Image from "next/image";

import { languages, fallbackLng } from "@/app/i18n/config-lang";
import DropDownlanguage from "@/components/DropDownLanguage";
import Navbar from "./(Header)/Navbar";
import Header from "./(Header)/Header";

export default function Home({
  params: { lang },
}: {
  params: {
    lang: string;
  };
}) {
  if (languages.indexOf(lang) < 0) lang = fallbackLng;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-black dark:text-white">
      <div className="z-10 w-full max-w-5xl items-center justify-end font-mono text-sm lg:flex">
        <Header />
      </div>
    </main>
  );
}
