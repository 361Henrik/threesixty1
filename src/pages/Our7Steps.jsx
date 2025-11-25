
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageContext";
import SevenStepsList from "../components/home/SevenStepsList";

export default function Our7Steps() {
  const { lang } = useLanguage();

  return (
    <div className="bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Legacy back arrow removed – global PageNav handles navigation */}

        <header className="mb-6">
          <h1
            className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight"
            style={{ fontFamily: "Noto Serif Display, serif" }}
          >
            {lang === "no" ? "Våre 7 steg til effektive prosesser" : "Our 7 Steps"}
          </h1>
          <p className="text-sm md:text-base text-gray-700 mt-2">
            {lang === "no"
              ? "Denne enkle, effektive prosessen vi har jobbet frem, sikrer tydelighet, fremdrift og resultater — og har alltid de ansatte i førersetet."
              : "A simple, effective process that ensures clarity, momentum, and results—with your employees in the driver’s seat."}
          </p>
        </header>

        <div className="border-2 border-black p-6 bg-white">
          <div className="border-t-4 border-black pt-4">
            <SevenStepsList />
          </div>
        </div>
      </div>
    </div>
  );
}
