"use client";

import { FC } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

import { allLangs, fallbackLng } from "@/app/i18n/config-lang";
import Image from "next/image";
import { useTranslation } from "@/app/i18n/client";

interface DropDownlanguageProps {
  panelClassName?: "";
  className?: "";
}

const DropDownlanguage: FC<DropDownlanguageProps> = ({
  className,
  panelClassName,
}) => {
  const { t, i18n } = useTranslation(["common"]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPathname = usePathname();
  const currentLocale = i18n.language;

  const changeLng = (newLng: string) => {
    if (!newLng) return;

    let newPathname = currentPathname.replace(
      `/${currentLocale}`,
      `/${newLng}`,
    );

    const newUrl = `${newPathname}?${searchParams.toString()}`;

    i18n.changeLanguage(newLng);

    router.push(newUrl.toString());

    router.refresh();
  };

  const renderLangTab = () => {
    return (
      <MenuItems
        anchor="bottom end"
        className={`mt-2 w-52 rounded-xl bg-neutral-100 px-2 py-4 text-neutral-900 shadow-md dark:bg-neutral-800 dark:text-white ${panelClassName}`}
      >
        {allLangs.map((lng, index) => (
          <div key={index}>
            <MenuItem>
              <div
                onClick={() => {
                  changeLng(lng?.value ?? fallbackLng);
                }}
                className={`${currentLocale === lng?.value ? "bg-neutral-200 dark:bg-neutral-600" : ""} group flex w-full cursor-pointer items-center gap-2 rounded-md px-3 py-1.5 transition-all data-[focus]:bg-neutral-200 data-[focus]:dark:bg-neutral-600`}
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
        className={`inline-flex items-center rounded-xl border border-primary-900 bg-neutral-200 px-6 py-3 outline-1 hover:outline data-[open]:outline dark:border-neutral-400 dark:bg-neutral-700 ${className}`}
      >
        <div className="">{t("common:language")}</div>
      </MenuButton>
      {renderLangTab()}
    </Menu>
  );
};

export default DropDownlanguage;
