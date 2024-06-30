import { FC } from "react";

const navBarTitle = ["skill", "about", "opensource", "resume", "contact"];

interface Navbarprops {
  optionClassName?: string;
}

const Navbar: FC<Navbarprops> = ({ optionClassName }) => {
  return (
    <nav className="flex flex-row">
      <ul className="hidden flex-row items-center justify-end lg:flex">
        {navBarTitle.map((item, index) => (
          <li
            key={index}
            className={`px-6 py-3 transition-all hover:bg-[#3337] ${optionClassName}`}
          >
            <a href={`#${item}`} className="text-lg font-medium">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
