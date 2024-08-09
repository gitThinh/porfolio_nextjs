import { languages, fallbackLng } from "@/app/i18n/config-lang";

const Home = ({
  params: { lang },
}: {
  params: {
    lang: string;
  };
}) => {
  if (languages.indexOf(lang) < 0) lang = fallbackLng;
  return (
    <main className="flex flex-col items-center justify-between px-24">
      <div className="w-full items-center justify-end font-mono text-sm lg:flex">
        <div className="ávasdad"></div>
      </div>
    </main>
  );
};

export default Home;
