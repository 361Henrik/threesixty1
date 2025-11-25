
import React from "react";
import {
  CheckCircle2,
  Compass,
  ShieldCheck,
  Search,
  Settings,
  Users,
  FlaskConical,
  Rocket
} from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageContext";

export default function NewspaperService({ service }) {
  const { lang } = useLanguage();
  const [expanded, setExpanded] = React.useState(false);

  if (!service) return null;

  // Title and text fields with Norwegian preference
  const title = lang === "no"
    ? (service.display_title_no || service.title_no || service.display_title || service.title || "Untitled")
    : (service.display_title || service.title || "Untitled");
  const intro = lang === "no" ? (service.intro_no || service.intro) : service.intro;
  const description = lang === "no" ? (service.description_no || service.description) : service.description;

  // Utility function to check if a string contains HTML
  const isHtml = (str) => typeof str === "string" && /<\s*\w+.*?>/i.test(str);
 
  // Disable drop cap for specific titles
  const normalizedTitle = (title || "").toLowerCase().replace(/[^a-z0-9]/g, "");
  const noDropCapTitles = new Set([
     "asisanalysis",
     "highimpactopportunitiesusecases",
     "highimpactopportunitiesandusecases"
   ]);
  const useDropCap = !noDropCapTitles.has(normalizedTitle);
 
  // Check for the specific title to add editorial mini-columns
  const isSlikHjelperViDere = normalizedTitle === "slikhjelpervidere";

  // Pick an icon for the service based on common keywords
  const getServiceIcon = (t = "") => {
    const s = t.toLowerCase();
    if (s.includes("strategy") || s.includes("strategi")) return Compass;
    if (s.includes("governance") || s.includes("risk") || s.includes("risiko") || s.includes("styring")) return ShieldCheck;
    if (s.includes("opportunity") || s.includes("analysis") || s.includes("analyse") || s.includes("mulighet")) return Search;
    if (s.includes("automation") || s.includes("workflow") || s.includes("automatis")) return Settings;
    if (s.includes("customer") || s.includes("people") || s.includes("hr") || s.includes("medarbeid")) return Users;
    if (s.includes("prototype") || s.includes("poc")) return FlaskConical;
    if (s.includes("implement") || s.includes("scale") || s.includes("skalering")) return Rocket;
    return Compass;
  };
  const SrvIcon = getServiceIcon(title);

  // Collapsible long description (plain text only)
  const truncate = (str, n = 220) => (str && str.length > n ? str.slice(0, n).trim() + "…" : str);
  const showReadMore =
    (!isHtml(description) && typeof description === "string" && description.length > 220) ||
    (!isHtml(intro) && typeof intro === "string" && intro.length > 180);

  const listLabelText = lang === "no" ? "Dette får du:" : "What you get:";
  const forLabel = lang === "no" ? "For" : "For";
  const deliverableLabel = lang === "no" ? "Leveranse" : "Deliverable";
  const gets = lang === "no" ? (service.gets_no || service.gets) : service.gets;
  const serviceFor = lang === "no" ? (service.for_no || service.for) : service.for;
  const deliverableText = lang === "no" ? (service.deliverable_no || service.deliverable) : service.deliverable;

  return (
    <article className="break-inside-avoid mb-6 pb-4 border-b border-gray-200">
      <div className="flex items-start gap-2 mb-1">
        <div className="h-7 w-7 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center">
          <SrvIcon className="h-4 w-4 text-slate-700" />
        </div>
        <h3
          className="text-lg md:text-xl font-semibold text-gray-900"
          style={{ fontFamily: "Noto Serif Display, serif" }}
        >
          {title}
        </h3>
      </div>

      {/* Editorial mini-columns for "Slik hjelper vi dere" */}
      {isSlikHjelperViDere && (
        <div className="flex flex-col md:flex-row gap-4 mb-4 text-xs text-gray-700">
          <div className="md:w-1/2">
            <p className="font-bold mb-1">Strategisk Rådgivning</p>
            <p>Vi hjelper dere med å identifisere muligheter og utfordringer, og utvikler strategier som driver vekst og innovasjon.</p>
          </div>
          <div className="md:w-1/2">
            <p className="font-bold mb-1">Operativ Implementering</p>
            <p>Fra konsept til ferdig løsning. Vi bistår med prosjektledelse og implementering for å sikre at strategiene blir virkelighet.</p>
          </div>
        </div>
      )}

      {/* Intro (drop cap only for plain text intro) */}
      {intro && !isHtml(intro) && (
        useDropCap ? (
          <p className="text-sm md:text-base text-gray-800 leading-relaxed first-letter:text-4xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:mt-1">
            {expanded ? intro : truncate(intro, 180)}
          </p>
        ) : (
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">
            {expanded ? intro : truncate(intro, 180)}
          </p>
        )
      )}
      {/* Intro (HTML content) */}
      {intro && isHtml(intro) && (
        <div
          className="prose prose-sm max-w-none text-gray-800 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5"
          dangerouslySetInnerHTML={{ __html: intro }}
        />
      )}

      {/* Description (plain text) */}
      {description && !isHtml(description) && (
        <p className="text-sm md:text-base text-gray-800 leading-relaxed mt-2">
          {expanded ? description : truncate(description, 220)}
        </p>
      )}
      {/* Description (HTML content) */}
      {description && isHtml(description) && (
        <div
          className="prose prose-sm max-w-none text-gray-800 mt-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}

      {/* What you get list */}
      {Array.isArray(gets) && gets.length > 0 && (
        <div className="mt-3">
          <div className="text-xs font-semibold text-gray-900 mb-1">
            {lang === "no" ? (service.listLabelNo || listLabelText) : (service.listLabel || listLabelText)}
          </div>
          <ul className="space-y-1">
            {gets.map((g, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-800">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>{g}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Optional metadata lines for a compact, newspaper feel */}
      {serviceFor && (
        <div className="mt-3 text-xs md:text-sm text-gray-700 flex items-center gap-2">
          <span className="inline-flex items-center rounded-full border border-gray-300 bg-white px-2 py-0.5 text-[11px] font-semibold text-gray-900">
            {forLabel}
          </span>
          <span className="text-gray-700">{serviceFor}</span>
        </div>
      )}
      {deliverableText && (
        <div className="text-xs md:text-sm text-gray-700 mt-1 flex items-center gap-2">
          <span className="inline-flex items-center rounded-full border border-gray-300 bg-white px-2 py-0.5 text-[11px] font-semibold text-gray-900">
            {deliverableLabel}
          </span>
          <span className="text-gray-700">{deliverableText}</span>
        </div>
      )}

      {/* Read more / less for long plain text content */}
      {showReadMore && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-3 text-xs font-semibold text-orange-600 hover:text-orange-700 underline underline-offset-2"
          aria-expanded={expanded}
        >
          {expanded ? (lang === "no" ? "Vis mindre" : "Show less") : (lang === "no" ? "Les mer" : "Read more")}
        </button>
      )}
    </article>
  );
}
