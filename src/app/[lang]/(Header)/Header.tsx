import DropDownlanguage from "@/components/DropDownLanguage";
import Navbar from "./Navbar";
import { FC } from "react";
import SwitchTheme from "@/components/SwitchTheme";
import { useThemeMode } from "@/utils/useThemeMode";

interface HeaderProps {
  lang: string;
}

const Header: FC<HeaderProps> = ({ lang }) => {
  return (
    <div className="container hidden w-full flex-row items-center justify-between py-5 lg:flex">
      <Navbar lang={lang} />
      <div className="flex flex-row items-center gap-3">
        <DropDownlanguage />
        <SwitchTheme />
      </div>
    </div>
  );
};

export default Header;
