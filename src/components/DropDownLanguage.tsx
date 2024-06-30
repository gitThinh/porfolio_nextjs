"use client";

import { FC } from "react";
import { usePathname, useRouter } from "next/navigation";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

import { useTranslation } from "react-i18next";
import { allLangs, fallbackLng } from "@/app/i18n/config-lang";
import Image from "next/image";

interface DropDownlanguageProps {
  panelClassName?: "";
  className?: "";
}

const DropDownlanguage: FC<DropDownlanguageProps> = ({
  className,
  panelClassName,
}) => {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const currentPathname = usePathname();
  const currentLocale = i18n.language;

  const changeLng = (newLng: string) => {
    if (!newLng) return;

    router.push(currentPathname.replace(`/${currentLocale}`, `/${newLng}`));

    router.refresh();
  };

  const renderLangTab = () => {
    return (
      <MenuItems
        anchor="bottom end"
        className={`mt-2 w-52 rounded-xl border border-[#a4a4a4] bg-[#ffffff12] px-2 py-4 text-white ${panelClassName}`}
      >
        {allLangs.map((lng, index) => (
          <div key={index}>
            <MenuItem>
              <div
                onClick={() => {
                  changeLng(lng?.value ?? fallbackLng);
                }}
                className={`${currentLocale === lng?.value ? "bg-white/15" : ""} group flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-1.5 transition-all data-[focus]:bg-white/10`}
              >
                <Image
                  src={lng?.icon ?? ""}
                  alt="flag icon"
                  width={25}
                  height={25}
                  quality={100}
                  className="rounded-sm"
                />
                <p>{lng?.label ?? ""}</p>
              </div>
            </MenuItem>
          </div>
        ))}
      </MenuItems>
    );
  };

  return (
    <Menu>
      <MenuButton
        className={`inline-flex items-center rounded-xl bg-[#d3d3d31d] px-6 py-3 outline-1 hover:outline data-[open]:outline ${className}`}
      >
        <div className="">{t("common:language")}</div>
      </MenuButton>
      {renderLangTab()}
    </Menu>
  );
};

export default DropDownlanguage;
