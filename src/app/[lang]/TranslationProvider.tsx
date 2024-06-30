"use client";

import { useTranslation } from "@/app/i18n/client";
import React, { createContext, useContext, ReactNode } from "react";

interface TransContextProps {
  lng: string;
  trans: (key: string) => string;
}

export const TransContext = createContext<TransContextProps | undefined>(
  undefined,
);

export const useTransContext = () => {
  const context = useContext(TransContext);
  if (!context) {
    throw new Error("useTransContext error");
  }
  return context;
};

interface TranslationProviderProps {
  lng: string;
  children: ReactNode;
  namespaces: any;
  options?: any;
}

const TranslationProvider = ({
  children,
  lng,
  namespaces,
  options,
}: TranslationProviderProps) => {
  const { t } = useTranslation(lng, namespaces, options);

  return (
    <TransContext.Provider value={{ lng, trans: t }}>
      {children}
    </TransContext.Provider>
  );
};

export default TranslationProvider;
