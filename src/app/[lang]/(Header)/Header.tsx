import DropDownlanguage from "@/components/DropDownLanguage";
import Navbar from "./Navbar";
import { FC } from "react";
import SwitchTheme from "@/components/SwitchTheme";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <div className="hidden w-full flex-row items-center justify-between lg:flex">
      <Navbar />
      <div className="flex flex-row gap-3 items-center">
        <DropDownlanguage />
        <SwitchTheme />
      </div>
    </div>
  );
};

export default Header;
