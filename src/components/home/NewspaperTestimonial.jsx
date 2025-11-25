import React from "react";

export default function NewspaperTestimonial({ testimonial }) {
  if (!testimonial) return null;
  const { text = "", author = "", role = "" } = testimonial;

  return (
    <article className="newspaper-article">
      {/* Testimonial text with drop cap */}
      <div className="testimonial-text text-gray-900 text-sm md:text-base leading-relaxed">
        {text}
      </div>

      {(author || role) && (
        <footer className="mt-2">
          <div
            className="text-xs text-gray-700"
            style={{ fontFamily: "Noto Serif Display, serif" }}
          >
            {author && <span className="font-semibold">{author}</span>}
            {role ? <span className="text-gray-600">, {role}</span> : null}
          </div>
        </footer>
      )}
    </article>
  );
}