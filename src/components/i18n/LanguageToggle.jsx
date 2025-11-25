
import React from "react";
import { useLanguage } from "./LanguageContext";

export default function LanguageToggle({ className = "", variant = "boxed" }) {
  const { lang, setLanguage } = useLanguage();
  const isEN = lang === "en";
  const isMinimal = variant === "minimal";

  // Adjust sizing for minimal (masthead) to make EN/NO tight: EN/NO (no spaces)
  const baseBtn = isMinimal
    ? "px-0.5 py-0.5 text-xs uppercase tracking-wider font-semibold leading-none transition-colors"
    : "px-2 py-1 text-xs uppercase tracking-wider font-semibold transition-colors";

  const enBtnClass = isMinimal
    ? `${baseBtn} ${isEN ? "text-orange-600" : "text-gray-600 hover:text-gray-900"}`
    : `${baseBtn} ${isEN ? "bg-orange-600 text-white" : "text-black hover:bg-orange-50"}`;

  const noBtnClass = isMinimal
    ? `${baseBtn} ${!isEN ? "text-orange-600" : "text-gray-600 hover:text-gray-900"}`
    : `${baseBtn} ${!isEN ? "bg-orange-600 text-white" : "text-black hover:bg-orange-50"}`;

  // Remove gaps around the slash for EN/NO (no spaces)
  const wrapperClass = `inline-flex items-center ${isMinimal ? "" : "border border-black px-1 py-0.5"} ${className}`;

  return (
    <div className={wrapperClass}>
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={enBtnClass}
        aria-pressed={isEN}
      >
        EN
      </button>
      <span className="text-gray-400 leading-none">/</span>
      <button
        type="button"
        onClick={() => setLanguage("no")}
        className={noBtnClass}
        aria-pressed={!isEN}
      >
        NO
      </button>
    </div>
  );
}
