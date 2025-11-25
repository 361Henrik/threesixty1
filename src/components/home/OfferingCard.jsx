import React from "react";

export default function OfferingCard({ title, subtitle, message, children, footer }) {
  return (
    <section className="bg-white border-2 border-black p-6 h-full flex flex-col">
      <header className="mb-3">
        <h3
          className="text-2xl font-bold text-gray-900 leading-tight"
          style={{ fontFamily: "Noto Serif Display, serif" }}
        >
          {title}
        </h3>
        {subtitle && (
          <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
        )}
      </header>

      <div className="flex-1 space-y-4">
        {children}
      </div>

      {message && (
        <p className="mt-4 pt-4 border-t-2 border-gray-700 text-sm text-gray-900 font-medium">
          {message}
        </p>
      )}

      {footer && (
        <div className="mt-4">
          {footer}
        </div>
      )}
    </section>
  );
}