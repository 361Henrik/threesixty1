
import React, { createContext, useContext, useEffect, useMemo, useState, useCallback } from "react";
import { translations } from "./translations";

const LanguageContext = createContext({
  lang: "en",
  setLanguage: () => {},
  t: (key) => key
});

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("lang") : null;
    return saved || "en";
  });

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const setLanguage = useCallback((newLang) => setLang(newLang), []);

  const t = useMemo(() => {
    return (key) => {
      const dict = translations[lang] || translations.en;
      return dict[key] ?? translations.en[key] ?? key;
    };
  }, [lang]);

  const value = useMemo(() => ({ lang, setLanguage, t }), [lang, setLanguage, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}
