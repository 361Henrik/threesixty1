import React from "react";
import { createPageUrl } from "@/utils";
import { useLanguage } from "@/components/i18n/LanguageContext";

export default function AiLearnings() {
  const { setLanguage } = useLanguage();

  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const l = urlParams.get("lang");
    if (l === "no" || l === "en") {
      setLanguage(l);
    }
    window.location.replace(createPageUrl("PracticalUseCases"));
  }, [setLanguage]);

  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-sm text-gray-600">Redirecting…</p>
      </div>
    </div>
  );
}