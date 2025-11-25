import React from "react";

export default function TestimonialCard({ testimonial }) {
  const [expanded, setExpanded] = React.useState(false);

  const text = testimonial?.text || "";
  const limit = 220; // characters before truncation
  const isLong = text.length > limit;
  const shown = expanded || !isLong ? text : text.slice(0, limit).trim() + "…";

  return (
    <article className="bg-white p-4 border-2 border-black h-full flex flex-col">
      <div className="text-sm text-gray-700 italic leading-relaxed flex-1">
        “{shown}”
      </div>
      <div className="mt-3 text-xs text-gray-600">
        {testimonial?.author && <span className="font-semibold">{testimonial.author}</span>}
        {testimonial?.role && <span className="text-gray-500">, {testimonial.role}</span>}
      </div>
      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded((e) => !e)}
          className="mt-3 text-xs font-semibold text-orange-600 hover:text-orange-700 underline underline-offset-2 self-start"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
    </article>
  );
}