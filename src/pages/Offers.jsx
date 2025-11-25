
import React from "react";
import { useLanguage } from "@/components/i18n/LanguageContext";
import { offersCategories } from "@/components/offers/offersData";
import { offersCategoriesNo } from "@/components/offers/offersData";
import NewspaperCategory from "@/components/offers/NewspaperCategory";
import { OfferCategory } from "@/entities/OfferCategory";
import { OfferService } from "@/entities/OfferService";
import { useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";


export default function Offers() {
  const { lang } = useLanguage();
  const navigate = useNavigate();

  // Redirect any Norwegian visit of /Offers to the dedicated /OffersNo page
  React.useEffect(() => {
    if (lang === "no") {
      navigate(createPageUrl("OffersNo"), { replace: true });
    }
  }, [lang, navigate]);

  const [loading, setLoading] = React.useState(true);
  const [categoriesDb, setCategoriesDb] = React.useState([]);
  const [servicesByCategory, setServicesByCategory] = React.useState({});

  const loadFromDb = React.useCallback(async () => {
    setLoading(true);
    const cats = await OfferCategory.list("order");
    if (!cats || cats.length === 0) {
      // No DB content: just render static data without any CTA
      setCategoriesDb([]);
      setServicesByCategory({});
      setLoading(false);
      return;
    }
    const svcs = await OfferService.list("order");
    const grouped = svcs.reduce((acc, s) => {
      const k = s.category_key || "_";
      if (!acc[k]) acc[k] = [];
      acc[k].push(s);
      return acc;
    }, {});
    setCategoriesDb(cats);
    setServicesByCategory(grouped);
    setLoading(false);
  }, []);

  React.useEffect(() => {
    loadFromDb();
  }, [loadFromDb]);

  // decide data source: DB if present, else static file
  const hasEditableContent = categoriesDb.length > 0;
  const staticDataset = lang === "no" ? offersCategoriesNo : offersCategories;

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        <header className="mb-6 text-center">
          <h1
            className="text-left md:text-center text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
            style={{ fontFamily: "Noto Serif Display, serif" }}>
            {lang === "no" ? "Strategi, innovasjon & prototyper" : "The Practical Problem-Solving Approach"}
          </h1>
          {lang === "no" ?
          <div className="text-left space-y-3 text-base md:text-lg text-gray-800 mt-6">
            <p className="text-gray-900">
              Vi kombinerer strategisk styrke med faktiske AI leveranser. Vi bidrar ikke bare med innsikt, analyser og anbefalinger – vi leverer fungerende prototyper som kan testes og videreutvikles før en eventuell skalering. Resultatene blir bedre, rimeligere og langt mer bærekraftige.
            </p>
            <p className="">
              Her er noen eksempler på hva vi jobber med – strukturert etter de vanligste utfordringene bedrifter har.
            </p>
          </div>
          :
          <div className="text-left space-y-2 text-base md:text-lg text-gray-700 mt-6">
            <p className="">
               90% of employees already use tools like ChatGPT. The question is no longer if but how: how to turn scattered experiments into real business value. Many leaders face a confidence gap in scaling AI. Without clear ownership, a “bring your own AI” culture can create security risks and confusion. The challenge isn’t the tech—it’s leadership, accountability, and execution.
            </p>
            <p className=""></p>
            <p>With 25+ years of business leadership and hands-on AI work, we bring a practical, problem-solving approach that keeps people at the center. We don’t stop at advice—we make it real. Every strategy can include a working prototype or Version 1, giving teams something tangible to test and prove before scaling further. Below are examples of the services we provide, categorized by the business challenges they solve.</p>
          </div>
          }
        </header>

        {/* Newspaper layout: DB-backed for both languages if present; otherwise static per language */}
        {hasEditableContent ? (
          <div className="space-y-10">
            {categoriesDb
              .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
              .slice(0, 5)
              .map((cat) => (
                <NewspaperCategory
                  key={cat.key}
                  category={{
                    // pass full DB category to preserve *_no fields
                    ...cat,
                    services: (servicesByCategory[cat.key] || [])
                      .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
                      // pass full DB service objects to preserve *_no fields
                      .map((s) => ({ ...s }))
                  }}
                />
              ))}
          </div>
        ) : (
          <div className="space-y-10">
            {staticDataset.slice(0, 5).map((cat) => (
              <NewspaperCategory key={cat.key} category={cat} />
            ))}
          </div>
        )}
      </div>

      <style>{`
        /* Newspaper multi-column with vertical rules */
        .news-columns {
          column-count: 1;
          column-gap: 2rem;
          column-rule: 1px solid #e5e7eb;
        }
        @media (min-width: 768px) {
          .news-columns { column-count: 2; }
        }
        @media (min-width: 1024px) {
          .news-columns { column-count: 3; }
        }
        /* Ensure each article stays intact within a column */
        .news-article {
          break-inside: avoid;
          -webkit-column-break-inside: avoid;
          page-break-inside: avoid;
          margin-bottom: 1rem;
        }

        /* Editorial mini-columns for "Slik hjelper vi dere" lists */
        .editorial-mini-columns {
          column-count: 1;
          column-gap: 2rem;
          column-rule: 1px solid #e5e7eb;
        }
        @media (min-width: 768px) {
          .editorial-mini-columns { column-count: 3; }
        }
        .editorial-list {
          list-style: none;
          padding-left: 0;
          margin: 0;
        }
        .editorial-list li {
          break-inside: avoid;
          -webkit-column-break-inside: avoid;
          page-break-inside: avoid;
          padding: 0.5rem 0.25rem 0.75rem 0;
          border-bottom: 1px solid #e5e7eb;
          color: #1f2937;
          font-size: 0.95rem;
          line-height: 1.5;
        }
        .editorial-list li:last-child {
          border-bottom: none;
        }
        .editorial-list li .font-medium {
          font-family: 'Noto Serif Display', serif;
          font-weight: 600;
          font-size: 1.125rem;
        }
        @media (min-width: 768px) {
          .editorial-list li .font-medium {
            font-size: 1.25rem;
          }
        }

        .editorial-columns {
          column-count: 1;
          column-gap: 2rem;
          column-rule: 1px solid #e5e7eb;
        }
        @media (min-width: 768px) {
          .editorial-columns { column-count: 3; }
        }
        .editorial-columns h3 {
          font-weight: 700;
          break-inside: avoid;
          -webkit-column-break-inside: avoid;
          page-break-inside: avoid;
          margin: 0.25rem 0;
        }
        .editorial-columns p,
        .editorial-columns ul,
        .editorial-columns ol {
          break-inside: avoid;
          -webkit-column-break-inside: avoid;
          page-break-inside: avoid;
          margin-bottom: 0.75rem;
        }
      `}</style>
    </div>
  );
}
