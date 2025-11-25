
import React from "react";
import {
  Layers,
  Search,
  FlaskConical,
  Wrench,
  BarChart3,
  GraduationCap,
  ShieldCheck
} from "lucide-react";
import NewspaperService from "./NewspaperService";
import { useLanguage } from "@/components/i18n/LanguageContext";
import { offersCategoriesNo } from "@/components/offers/offersData";
import { offersNoOverrides } from "./offersNoOverrides";

export default function NewspaperCategory({ category }) {
  // Move hook usage before any early return
  const { lang } = useLanguage();
  
  if (!category) return null;

  const isHtml = (str) => typeof str === "string" && /<\s*\w+.*?>/i.test(str);

  const categoryIconMap = {
    strategic_foundation: Layers,
    discovery_opportunity: Search,
    prototyping_poc: FlaskConical,
    functional_solutions: Wrench,
    implementation_scaling: BarChart3,
    training_capability: GraduationCap,
    advisory_support: ShieldCheck
  };
  const CatIcon = categoryIconMap[category.key] || Layers;

  // Helper to normalize strings for matching
  const norm = (s = "") => s.toLowerCase().replace(/[^a-z0-9]+/g, "");

  // Try to resolve a Norwegian override even if DB key/title differs
  const guessKeyFrom = (cat) => {
    const k = (cat.key || "").toLowerCase();
    const t = (cat.title || "").toLowerCase();
    if (k.includes("advis") || t.includes("advis")) return "advisory_support";
    if (k.includes("train") || t.includes("capab") || t.includes("kompetanse") || t.includes("workshop")) return "training_capability";
    if (k.includes("implement") || t.includes("scal")) return "implementation_scaling";
    if (k.includes("function") || t.includes("solution")) return "functional_solutions";
    if (k.includes("proto") || t.includes("proof")) return "prototyping_poc";
    if (k.includes("discover") || t.includes("opportun") || t.includes("kart") || t.includes("analyse")) return "discovery_opportunity";
    return "strategic_foundation";
  };

  // Locate override: prefer exact key, else guess from title/key
  const overrideKey = offersNoOverrides[category.key] ? category.key : guessKeyFrom(category);
  const staticNo = offersNoOverrides[overrideKey];
  const fallbackNo = offersCategoriesNo.find((c) => c.key === overrideKey);

  const translatedTitles = {
    strategic_foundation: "Grunnleggende strategiske tjenester",
    discovery_opportunity: "Kartlegging og muligheter",
    prototyping_poc: "Prototyping og Proof‑of‑Concept",
    functional_solutions: "Funksjonelle løsningsområder",
    implementation_scaling: "Implementering og skalering",
    training_capability: "Trening og kompetansebygging",
    advisory_support: "Rådgivning og innovasjon"
  };

  // Prefer DB Norwegian fields; then overrides; then old static; then EN
  const displayTitle = lang === "no"
    ? (category.title_no || staticNo?.title || translatedTitles[overrideKey] || category.title)
    : category.title;

  const displayIntro = lang === "no"
    ? (category.intro_no || staticNo?.intro || fallbackNo?.intro || category.intro)
    : category.intro;

  // Build a map of override services by normalized title to merge reliably (order can differ)
  const overrideServicesByTitle = (lang === "no" && Array.isArray(staticNo?.services))
    ? staticNo.services.reduce((map, s) => {
        map.set(norm(s.title), s);
        return map;
      }, new Map())
    : new Map();

  // Merge Norwegian service copy onto DB services by title for NO
  const servicesToRender = Array.isArray(category.services)
    ? category.services.map((srv) => {
        if (lang !== "no") return srv;
        const o = overrideServicesByTitle.get(norm(srv.title));
        if (!o) return srv;
        return {
          ...srv,
          title_no: srv.title_no || o.title,                      // use NO title
          display_title_no: srv.display_title_no || o.title,       // display NO title
          intro_no: srv.intro_no || o.intro_no,                    // optional NO intro
          description_no: srv.description_no || o.description_no,  // NO description
          gets_no: (Array.isArray(srv.gets_no) && srv.gets_no.length > 0) ? srv.gets_no : o.gets_no, // NO bullets
          listLabelNo: srv.listLabelNo || o.listLabelNo,           // NO list label
          for_no: srv.for_no || o.for_no,                          // NO "for"
          deliverable_no: srv.deliverable_no || o.deliverable_no   // NO deliverable
        };
      })
    : [];

  return (
    <section className="mb-12 border border-gray-200 rounded-lg bg-white/70 shadow-sm p-4 md:p-6">
      {/* Full-width section heading */}
      <header className="mb-3">
        <div className="flex items-start gap-3">
          <div className="mt-1 h-9 w-9 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center">
            <CatIcon className="h-5 w-5 text-orange-600" />
          </div>
          <h2
            className="text-2xl md:text-3xl font-semibold text-gray-900 leading-tight"
            style={{ fontFamily: "Noto Serif Display, serif" }}
          >
            {displayTitle}
          </h2>
        </div>
        {/* Intro text */}
        {displayIntro ? (
          isHtml(displayIntro) ? (
            <div
              className="mt-2 prose prose-sm max-w-none text-gray-800 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5"
              dangerouslySetInnerHTML={{ __html: displayIntro }}
            />
          ) : (
            <p className="mt-2 text-sm md:text-base text-gray-800 leading-relaxed">
              {displayIntro}
            </p>
          )
        ) : (
          <div className="mt-2 min-h-[60px]" />
        )}
      </header>

      {/* Newspaper-style 3-column list of offers with vertical dividers */}
      <div className="news-columns">
        {servicesToRender.map((srv, idx) => (
          <div key={idx} className="news-article">
            <NewspaperService service={srv} />
          </div>
        ))}
      </div>
    </section>
  );
}
