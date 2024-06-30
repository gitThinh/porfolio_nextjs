export const allLangs = [
  {
    label: "Vietnamese",
    value: "vi",
    icon: "/assets/flagImage/vi_flag.png",
    // systemValue: viVN,
  },
  {
    label: "English",
    value: "en",
    icon: "/assets/flagImage/en_flag.png",
    // systemValue: enUS,
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
    // debug: true,
    supportedLngs: languages,
    // preload: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
    // backend: {
    //   projectId: '01b2e5e8-6243-47d1-b36f-963dbb8bcae3'
    // }
  };
}
