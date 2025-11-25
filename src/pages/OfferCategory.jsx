
import React from "react";
import { createPageUrl } from "@/utils";
import { offersCategories } from "@/components/offers/offersData";
import { useLanguage } from "@/components/i18n/LanguageContext";
import PageNav from "@/components/common/PageNav";

export default function OfferCategory() {
  const { lang } = useLanguage();
  const urlParams = new URLSearchParams(window.location.search);
  const categoryKey = urlParams.get("category") || "";

  const categoryIndex = offersCategories.findIndex(c => c.key === categoryKey);
  const category = categoryIndex >= 0 ? offersCategories[categoryIndex] : null;
  const prevCategory = categoryIndex > 0 ? offersCategories[categoryIndex - 1] : null;
  const nextCategory = categoryIndex >= 0 && categoryIndex < offersCategories.length - 1 ? offersCategories[categoryIndex + 1] : null;

  const startXRef = React.useRef(null);
  const handleTouchStart = (e) => {
    startXRef.current = e.touches?.[0]?.clientX ?? null;
  };
  const handleTouchEnd = (e) => {
    const startX = startXRef.current;
    if (startX == null) return;
    const endX = e.changedTouches?.[0]?.clientX ?? startX;
    const dx = endX - startX;
    const threshold = 50;
    if (dx > threshold && prevCategory) {
      window.location.href = createPageUrl(`OfferCategory?category=${encodeURIComponent(prevCategory.key)}`);
    }
    if (dx < -threshold && nextCategory) {
      window.location.href = createPageUrl(`OfferCategory?category=${encodeURIComponent(nextCategory.key)}`);
    }
    startXRef.current = null;
  };

  // If category key is invalid, redirect to Offers (remove not-found page)
  if (!category) {
    window.location.href = createPageUrl("Offers");
    return null;
  }

  return (
    <div className="bg-white" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 md:pt-20 pb-24 md:pb-28 relative">
        {/* Top Back/Home only (no Explore here) */}
        <PageNav
          homeTo={createPageUrl("Home")}
          showHome={true}
        />

        <header className="mb-6">
          <h1
            className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight"
            style={{ fontFamily: "Noto Serif Display, serif" }}
          >
            {category.page_title || category.title}
          </h1>
          {category.intro && (
            <p className="text-sm md:text-base text-gray-700 mt-2 max-w-3xl">
              {category.intro}
            </p>
          )}

          {category.page_intro ? (
            <div className="mt-4 text-sm md:text-base text-gray-800 whitespace-pre-line max-w-4xl">
              {category.page_intro}
            </div>
          ) : (
            <div className="mt-4 min-h-[80px] md:min-h-[100px]" />
          )}
          {category.page_extra && (
            <div className="mt-3 text-sm md:text-base text-gray-800 whitespace-pre-line max-w-4xl">
              {category.page_extra}
            </div>
          )}

          {category.note && (
            <div className="mt-3 text-xs md:text-sm text-gray-700 italic">
              {category.note}
            </div>
          )}
        </header>

        {/* Services presented fully, two-column with centered vertical divider */}
        <div className="services-columns">
          {category.services.map((srv, i) => (
            <article key={i} className="service-article">
              <h3
                className="text-xl md:text-2xl font-semibold text-gray-900"
                style={{ fontFamily: "Noto Serif Display, serif" }}
              >
                {srv.display_title || srv.title}
              </h3>

              {srv.description && (
                <div className="text-sm text-gray-800 mt-2 whitespace-pre-line">
                  {srv.description}
                </div>
              )}

              {srv.intro && (
                <p className="text-sm text-gray-800 mt-2 whitespace-pre-line">
                  {srv.intro}
                </p>
              )}
              {srv.extra && (
                <div className="text-sm text-gray-800 mt-2 whitespace-pre-line">
                  {srv.extra}
                </div>
              )}

              {srv.for && (
                <p className="text-sm text-gray-800 mt-2">
                  <span className="font-semibold">For:</span> {srv.for}
                </p>
              )}

              {Array.isArray(srv.gets) && srv.gets.length > 0 && (
                <div className="mt-3">
                  <div className="text-sm font-semibold text-gray-900 mb-1">
                    {srv.listLabel ? srv.listLabel : (lang === "no" ? "Hva du får:" : "What you get:")}
                  </div>
                  <ul className="list-disc pl-5 text-sm text-gray-800 space-y-1">
                    {srv.gets.map((g, idx) => (
                      <li key={idx}>{g}</li>
                    ))}
                  </ul>
                </div>
              )}

              {srv.deliverable && (
                <div className="mt-3 text-sm text-gray-900">
                  <span className="font-semibold">{lang === "no" ? "Leveranse:" : "Deliverable:"}</span> {srv.deliverable}
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Inline bottom Next for categories (go to next category or Offers) */}
        <div className="flex justify-end pt-8">
          <a
            href={nextCategory ? createPageUrl(`OfferCategory?category=${encodeURIComponent(nextCategory.key)}`) : createPageUrl("Offers")}
            className="text-sm md:text-base font-semibold text-orange-600 hover:text-orange-700"
            aria-label="Next"
          >
            Next →
          </a>
        </div>

        <style>{`
          /* Two-column grid with centered vertical divider */
          .services-columns {
            position: relative;
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          @media (min-width: 768px) {
            .services-columns {
              grid-template-columns: 1fr 1fr;
            }
            .services-columns::before {
              content: "";
              position: absolute;
              top: 0;
              bottom: 0;
              left: 50%;
              width: 1px;
              background: #e5e7eb; /* slate-200 */
              transform: translateX(-0.5px);
              pointer-events: none;
            }
          }
          .service-article {
            margin-bottom: 1.5rem;
            padding-bottom: 1rem;
          }
        `}</style>
      </div>
    </div>
  );
}
