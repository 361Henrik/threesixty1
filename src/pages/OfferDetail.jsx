import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { offersCategories } from "@/components/offers/offersData";
import { useLanguage } from "@/components/i18n/LanguageContext";

export default function OfferDetail() {
  const { lang } = useLanguage();
  const urlParams = new URLSearchParams(window.location.search);
  const categoryKey = urlParams.get("category") || "";
  const initialIndex = parseInt(urlParams.get("index") || "0", 10);

  const category = offersCategories.find(c => c.key === categoryKey);
  const [index, setIndex] = React.useState(
    !isNaN(initialIndex) ? Math.min(Math.max(initialIndex, 0), (category?.services?.length || 1) - 1) : 0
  );

  const startXRef = React.useRef(null);

  if (!category) {
    return (
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
          <Link
            to={createPageUrl("Home")}
            className="inline-flex items-center text-sm text-orange-600 hover:text-orange-700 underline underline-offset-2 mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            {lang === "no" ? "TIL FORSIDEN" : "GO BACK"}
          </Link>
          <h1 className="text-2xl font-bold" style={{ fontFamily: "Noto Serif Display, serif" }}>
            Offer not found
          </h1>
          <p className="mt-2">
            <Link to={createPageUrl("Offers")} className="text-orange-600 underline underline-offset-2">
              {lang === "no" ? "Gå til oversikten" : "Go to Offers overview"}
            </Link>
          </p>
        </div>
      </div>
    );
  }

  const total = category.services.length;
  const offer = category.services[index];

  const goPrev = () => setIndex((i) => Math.max(0, i - 1));
  const goNext = () => setIndex((i) => Math.min(total - 1, i + 1));

  const onTouchStart = (e) => {
    startXRef.current = e.touches?.[0]?.clientX ?? null;
  };
  const onTouchEnd = (e) => {
    const startX = startXRef.current;
    if (startX == null) return;
    const endX = e.changedTouches?.[0]?.clientX ?? startX;
    const dx = endX - startX;
    const threshold = 50;
    if (dx > threshold) goPrev();
    if (dx < -threshold) goNext();
    startXRef.current = null;
  };

  return (
    <div className="bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-10">
        <Link
          to={createPageUrl("Home")}
          className="inline-flex items-center text-sm text-orange-600 hover:text-orange-700 underline underline-offset-2 mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          {lang === "no" ? "TIL FORSIDEN" : "GO BACK"}
        </Link>

        <header className="mb-4">
          <div className="text-xs uppercase tracking-wide text-gray-600">{category.title}</div>
          <h1
            className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight"
            style={{ fontFamily: "Noto Serif Display, serif" }}
          >
            {offer.title}
          </h1>
        </header>

        {/* Swipe controls */}
        <div className="flex items-center justify-between mb-4">
          <button
            aria-label="Previous offer"
            onClick={goPrev}
            disabled={index === 0}
            className="p-2 border border-gray-300 hover:bg-gray-50 disabled:opacity-50"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="text-sm text-gray-600">{index + 1} / {total}</div>
          <button
            aria-label="Next offer"
            onClick={goNext}
            disabled={index === total - 1}
            className="p-2 border border-gray-300 hover:bg-gray-50 disabled:opacity-50"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div
          className="border-2 border-black bg-white p-6"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {offer.for && (
            <p className="text-sm text-gray-700">
              <span className="font-semibold">For:</span> {offer.for}
            </p>
          )}

          {offer.gets?.length > 0 && (
            <div className="mt-4">
              <div className="text-sm font-semibold text-gray-900 mb-1">What you get:</div>
              <ul className="list-disc pl-5 text-sm text-gray-800 space-y-1">
                {offer.gets.map((g, idx) => <li key={idx}>{g}</li>)}
              </ul>
            </div>
          )}

          {offer.deliverable && (
            <div className="mt-4 bg-amber-50 border border-amber-200 p-3 text-sm text-gray-900">
              <span className="font-semibold">Deliverable:</span> {offer.deliverable}
            </div>
          )}
        </div>

        <div className="mt-6">
          <Link
            to={createPageUrl(`OfferCategory?category=${encodeURIComponent(category.key)}`)}
            className="text-orange-600 underline underline-offset-2 hover:text-orange-700"
          >
            {lang === "no" ? "Tilbake til kategori" : "Back to category"}
          </Link>
        </div>
      </div>
    </div>
  );
}