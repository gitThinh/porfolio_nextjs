import { useTranslation } from "@/app/i18n";
import { FC } from "react";

const navBarTitle = ["about", "skill", "opensource", "resume", "contact"];

interface Navbarprops {
  optionClassName?: string;
  lang: string;
}

const Navbar: FC<Navbarprops> = async ({ optionClassName, lang }) => {
  const { t } = await useTranslation(lang, ["common"]);
  return (
    <nav className="flex flex-row">
      <ul className="hidden flex-row items-center justify-end lg:flex">
        {navBarTitle.map((item, index) => (
          <li
            key={index}
            className={`px-6 py-3 transition-all hover:bg-[#3337] ${optionClassName}`}
          >
            <a href={`#${item}`} className="text-lg font-medium">
              {t(`common:nav.${item}`)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
