import React from "react";
import { Quote } from "lucide-react";

export default function PullQuotes({ quotes = [] }) {
  if (!quotes?.length) return null;

  return (
    <section className="my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quotes.map((q, idx) => (
          <figure
            key={idx}
            className="relative bg-white border-2 border-black p-6 h-full flex flex-col justify-between"
          >
            <Quote className="absolute -top-3 -left-3 h-8 w-8 text-orange-600 bg-white" />
            <blockquote className="text-gray-900 text-lg leading-relaxed" style={{ fontFamily: 'Noto Serif Display, serif' }}>
              “{q.text}”
            </blockquote>
            <figcaption className="mt-4 pt-4 border-t-2 border-gray-800 text-sm text-gray-700">
              <div className="font-semibold">{q.author}</div>
              {q.role && <div className="text-gray-500">{q.role}</div>}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}