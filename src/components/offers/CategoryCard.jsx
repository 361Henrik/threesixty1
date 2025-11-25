
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function CategoryCard({ category }) {
  return (
    <Link
      to={createPageUrl(`OfferCategory?category=${encodeURIComponent(category.key)}`)}
      className="block transition focus:outline-none focus:ring-2 focus:ring-orange-500 hover:bg-slate-50"
    >
      <div className="px-6 md:px-8 py-8 md:py-12">
        <h3
          className="text-2xl md:text-3xl font-semibold text-gray-900 leading-tight underline underline-offset-4 decoration-2"
          style={{ fontFamily: "Noto Serif Display, serif" }}
        >
          {category.title}
        </h3>
        {category.intro && (
          <p className="mt-4 text-sm md:text-base text-gray-800 leading-relaxed">
            {category.intro}
          </p>
        )}

        {/* Manually editable area under each category (add text in offersData.landing_extra) */}
        {typeof category.landing_extra === "string" && category.landing_extra.trim().length > 0 ? (
          <div className="mt-4 text-sm md:text-base text-gray-800 leading-relaxed whitespace-pre-line">
            {category.landing_extra}
          </div>
        ) : (
          <div className="mt-4 min-h-[80px] md:min-h-[100px]" />
        )}
      </div>
    </Link>
  );
}
