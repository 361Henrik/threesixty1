
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { useLanguage } from "@/components/i18n/LanguageContext";

export default function PageNav({ homeTo = createPageUrl("Home"), showHome = false, showBack = true, nextTo, showNext = true, prevTo }) {
  const navigate = useNavigate();
  const { lang } = useLanguage();

  const labels = {
    back: lang === "no" ? "TILBAKE" : "BACK",
    next: lang === "no" ? "NESTE" : "NEXT",
    home: lang === "no" ? "HJEM" : "Home",
  };

  const handleBack = (e) => {
    e.preventDefault();
    // Use deterministic previous page when provided
    if (prevTo) {
      navigate(prevTo);
      return;
    }
    // Prefer true browser back if possible; otherwise fall back to Home
    const idx = window.history?.state && typeof window.history.state.idx === "number" ? window.history.state.idx : 0;
    const hasReferrer = typeof document !== "undefined" && !!document.referrer;
    const hasHistory = typeof window !== "undefined" && window.history && window.history.length > 1;
    const canGoBack = idx > 0 || hasReferrer || hasHistory;
    if (canGoBack) {
      navigate(-1);
    } else {
      window.location.href = homeTo;
    }
  };

  const nextHref = nextTo || createPageUrl("Offers");

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div>
            {showBack && (
              <button
                type="button"
                onClick={handleBack}
                className="text-sm md:text-base font-semibold text-orange-600 hover:text-orange-700 underline-offset-4"
                aria-label={labels.back}
              >
                ← {labels.back}
              </button>
            )}
          </div>

          <div>
            {showHome && (
              <Link to={homeTo} className="text-sm md:text-base font-semibold text-gray-900 hover:underline underline-offset-4" aria-label={labels.home}>
                ⌂ {labels.home}
              </Link>
            )}
          </div>

          <div>
            {showNext && (
              <Link
                to={nextHref}
                className="text-sm md:text-base font-semibold text-orange-600 hover:text-orange-700 underline-offset-4"
                aria-label={labels.next}
              >
                {labels.next} →
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
