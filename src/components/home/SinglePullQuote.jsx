import React from "react";
import { Quote } from "lucide-react";

export default function SinglePullQuote({ quote, align = "center", sideContent = null, side = "right", compact = false }) {
  if (!quote?.text) return null;

  const quoteAlignClass = align === "left" ? "mr-auto" : align === "right" ? "ml-auto" : "mx-auto";
  const wrapperMargin = compact ? "my-0" : "my-10";

  const QuoteBlock = (
    <div className={`relative pl-8 max-w-[18rem] md:max-w-[20rem] ${quoteAlignClass}`}>
      <Quote className="absolute -top-1 -left-1 h-8 w-8 text-orange-600" />
      <blockquote
        className="text-gray-900 text-xl md:text-2xl leading-tight italic break-words"
        style={{ fontFamily: "Noto Serif Display, serif" }}
      >
        “{quote.text}”
      </blockquote>
      {(quote.author || quote.role) && (
        <figcaption className="mt-3 text-sm text-gray-700">
          {quote.author && <span className="font-semibold">{quote.author}</span>}
          {quote.role && <span className="text-gray-500">, {quote.role}</span>}
        </figcaption>
      )}
    </div>
  );

  return (
    <section className={wrapperMargin}>
      <div className={`grid items-start gap-6 ${sideContent ? "md:grid-cols-[minmax(14rem,20rem),1fr]" : ""}`}>
        {side === "left" && sideContent && <aside className="hidden md:block">{sideContent}</aside>}
        {QuoteBlock}
        {side !== "left" && sideContent && <aside className="hidden md:block">{sideContent}</aside>}
      </div>
    </section>
  );
}