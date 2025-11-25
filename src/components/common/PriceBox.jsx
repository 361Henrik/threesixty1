import React from "react";

export default function PriceBox({
  title = "Price (NOK)",
  priceText = "TBA",
  subtitle = "Final price depends on scope, team size, and customization.",
  note = "We'll confirm pricing after a short discovery call."
}) {
  return (
    <div className="mt-6 bg-white border-2 border-gray-300 p-6">
      <div className="text-xs uppercase tracking-wider text-gray-600 mb-1">{title}</div>
      <div className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Noto Serif Display, serif' }}>
        {priceText}
      </div>
      <p className="text-sm text-gray-700 mt-2">{subtitle}</p>
      <p className="text-xs text-gray-500 mt-1">{note}</p>
    </div>
  );
}