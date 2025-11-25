import React from "react";
import { useLanguage } from "@/components/i18n/LanguageContext";

export default function UseCaseCard({ title, text = "", maxChars = 260, children }) {
  const { lang } = useLanguage();
  const [expanded, setExpanded] = React.useState(false);

  const content = text || (typeof children === "string" ? children : "");
  const isLong = content && content.length > maxChars;
  const shown = expanded || !isLong ? content : content.slice(0, maxChars).trim() + "…";

  const moreLabel = lang === "no" ? "Les mer" : "Read more";
  const lessLabel = lang === "no" ? "Vis mindre" : "Show less";

  return (
    <article className="bg-white border-2 border-black p-4 h-full flex flex-col">
      <header>
        <h3
          className="text-lg font-bold text-gray-900 leading-snug"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          {title}
        </h3>
      </header>
      <div className="mt-3 text-sm text-gray-700 leading-relaxed flex-1">
        <p>{shown}</p>
      </div>
      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-3 text-xs font-semibold text-orange-600 hover:text-orange-700 underline underline-offset-2 self-start"
          aria-expanded={expanded}
        >
          {expanded ? lessLabel : moreLabel}
        </button>
      )}
    </article>
  );
}