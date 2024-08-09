"use client";

import { useThemeMode } from "@/utils/useThemeMode";
import { Switch } from "@headlessui/react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export default function SwitchTheme() {
  const { _toogleDarkMode, isDarkMode } = useThemeMode();

  return (
    <Switch
      checked={!isDarkMode}
      onChange={_toogleDarkMode}
      className="group relative flex h-7 w-14 cursor-pointer rounded-full bg-white/50 p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white dark:bg-blue-400/10"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-7 dark:bg-transparent"
      >
        {!isDarkMode ? (
          <SunIcon className="size-5 text-amber-400" />
        ) : (
          <MoonIcon className="size-5 text-white" />
        )}
      </span>
    </Switch>
  );
}
