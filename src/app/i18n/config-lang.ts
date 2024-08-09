export const allLangs = [
  {
    label: "Vietnamese",
    value: "vi",
    icon: "/assets/flagImage/vi_flag.png",
  },
  {
    label: "English",
    value: "en",
    icon: "/assets/flagImage/en_flag.png",
  },
];

export const fallbackLng = allLangs?.[0]?.value ?? "vi";
export const languages = allLangs.map((lang) => lang.value);
export const defaultNS = "common";
export const cookieName = "18next";

export function getOptions(
  lng = fallbackLng,
  ns: string | string[] = defaultNS,
) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
