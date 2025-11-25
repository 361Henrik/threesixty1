
import React from "react";
import { useState, useEffect, useMemo } from "react";
import SectionNav from "./components/home/SectionNav";
import { LanguageProvider, useLanguage } from "./components/i18n/LanguageContext";
import LanguageToggle from "./components/i18n/LanguageToggle";
import PageNav from "./components/common/PageNav";
import { createPageUrl } from "@/utils";

export default function Layout({ children, currentPageName }) {
  // Scroll behavior: respect hash anchors; only scroll to top when no hash
  useEffect(() => {
    if (!currentPageName) return;
    if (currentPageName !== "Home") {
      const hash = typeof window !== "undefined" ? window.location.hash : "";
      if (hash) {
        // wait for page content to render, then scroll to anchor
        setTimeout(() => {
          const id = hash.replace("#", "");
          const el = document.getElementById(id);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 0);
      } else {
        window.scrollTo({ top: 0, behavior: "auto" });
      }
    }
  }, [currentPageName]);

  // Inner content to access language context
  function LayoutContent() {
    const { t, lang, setLanguage } = useLanguage();
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    // Keep these words always in English (do not translate)
    const rotatingWords = useMemo(() => [
      "Growth",
      "Efficiency",
      "Ideas",
      "Creativity",
      "Impact"
    ], []);

    // Words around the current one
    const prevWord = rotatingWords[(currentWordIndex - 1 + rotatingWords.length) % rotatingWords.length];
    const currentWord = rotatingWords[currentWordIndex];
    const nextWord = rotatingWords[(currentWordIndex + 1) % rotatingWords.length];

    // Fixed width based on the longest word so the wheel never collapses
    const maxWordChars = useMemo(
      () => Math.max(...rotatingWords.map(w => w.length)),
      [rotatingWords]
    );

    useEffect(() => {
      // Reset index when words change (language change)
      setCurrentWordIndex(0);

      const interval = setInterval(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
      }, 3000);

      return () => clearInterval(interval);
    }, [rotatingWords]); // Depend on rotatingWords (memoized by lang)

    // Desktop banner date: remove weekday, keep MONTH DAY, YEAR
    const todayStr = new Date().toLocaleDateString(
      lang === 'en' ? 'en-US' : 'nb-NO',
      { month: 'long', day: 'numeric', year: 'numeric' }
    ).toUpperCase();

    // Compute prev/next URLs in a fixed sequence
    const navOrder = ["Offers", "PracticalUseCases", "Testimonials", "Contact"];
    const len = navOrder.length;
    // Treat OffersNo as Offers in the sequence for navigation order
    const effectivePage = currentPageName === "OffersNo" ? "Offers" : (currentPageName || "");
    const idx = navOrder.indexOf(effectivePage);

    // Defaults
    let nextUrl = createPageUrl(lang === "no" ? "OffersNo" : "Offers");
    let prevUrl = createPageUrl("Home");

    if (currentPageName === "Home") {
      // First page in sequence
      nextUrl = createPageUrl(lang === "no" ? "OffersNo" : navOrder[0]);
      // Last page in sequence (not used for Back; Back hidden on Home)
      const lastPage = navOrder[len - 1];
      prevUrl = createPageUrl(lang === "no" && lastPage === "Offers" ? "OffersNo" : lastPage);
    } else if (idx !== -1) {
      // Localize Offers -> OffersNo for NO language on both next and prev
      const nextPage = navOrder[(idx + 1) % len];
      const prevPage = navOrder[(idx - 1 + len) % len];
      nextUrl = createPageUrl(lang === "no" && nextPage === "Offers" ? "OffersNo" : nextPage);
      prevUrl = createPageUrl(lang === "no" && prevPage === "Offers" ? "OffersNo" : prevPage);
    } else {
      // Fallback for pages outside the sequence
      nextUrl = createPageUrl(lang === "no" ? "OffersNo" : "Offers");
      prevUrl = createPageUrl("Home");
    }

    return (
      <div className="bg-white text-gray-500 min-h-screen">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=Outfit:wght@300;400;500;600;700&family=Noto+Serif+Display:wght@400;600&display=swap');
          
          html, body {
            overflow-x: hidden;
          }

          :root {
            --orange-primary: #FF6B00;
            --green-secondary: #28A745;
            --text-primary: #000000;
            --text-secondary: #666666;
            --text-muted: #999999;
            --border-color: #E5E5E5;
            --border-light: #F5F5F5;
            --spacing-unit: 1rem;
          }
          
          * {
            font-family: 'Outfit', sans-serif;
          }
          
          /* Apply Noto Serif Display Semibold (600) to headings, keep brand title in Playfair */
          h1:not(.newspaper-title), h2, h3, h4, h5, h6 {
            font-family: 'Noto Serif Display', serif !important;
            font-weight: 600 !important;
            line-height: 1.1;
            letter-spacing: -0.02em;
          }
          
          .newspaper-title {
            font-family: 'Playfair Display', serif;
            font-weight: 900;
            font-size: 1.8rem;
            color: #000;
            position: relative;
          }
          
          .logo-vibrate {
            display: inline-block;
            animation: gentlePulse 2s ease-in-out infinite;
          }
          
          @keyframes gentlePulse {
            0%, 100% { 
              transform: scale(1);
              opacity: 1;
            }
            50% { 
              transform: scale(1.05);
              opacity: 0.85;
            }
          }
          
          .newspaper-nav {
            font-family: 'Playfair Display', serif;
            font-weight: 400;
            font-size: 0.85rem;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: #000;
          }
          
          .newspaper-border {
            border-bottom: 1px solid #000;
          }
          
          .newspaper-divider {
            border-top: 1px solid #ccc;
            margin: 1rem 0;
          }

          /* Dashed black divider for header payoff separation */
          .newspaper-divider-dashed {
            border-top: 2px dashed #000;
            margin: 1rem 0;
          }

          /* Double thin black line divider */
          .newspaper-divider-double {
            position: relative;
            height: 0;
            border-top: 1px solid #000;
            margin: 1rem 0;
          }
          .newspaper-divider-double::after {
            content: "";
            display: block;
            border-top: 1px solid #000;
            margin-top: 4px; /* small gap between lines */
          }
          
          .cta-button {
            background-color: var(--orange-primary);
            color: white;
            padding: 0.875rem 2rem;
            border-radius: 0;
            font-weight: 500;
            font-family: 'Outfit', sans-serif;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            font-size: 0.875rem;
            transition: all 0.3s ease;
            border: none;
          }

          /* Black variant for CTA */
          .cta-button--black {
            background-color: #000000 !important;
            color: #ffffff !important;
            border-color: #000000 !important;
          }
          .cta-button--black:hover,
          .cta-button--black:focus-visible {
            background-color: var(--orange-primary) !important;
            color: #ffffff !important;
            border-color: var(--orange-primary) !important;
            transform: translateY(-1px);
          }
          
          /* Force all CTAs to orange on hover/focus */
           .cta-button:hover,
           .cta-button:focus-visible {
            background-color: var(--orange-primary) !important;
            color: #ffffff !important;
            border-color: var(--orange-primary) !important;
             transform: translateY(-1px);
           }
          
          .cta-button-outline {
            background-color: white;
            color: var(--orange-primary);
            padding: calc(0.875rem - 2px) calc(2rem - 2px);
            border-radius: 0;
            font-weight: 500;
            font-family: 'Outfit', sans-serif;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            font-size: 0.875rem;
            transition: all 0.3s ease;
            border: 2px solid var(--orange-primary); /* outline now orange */
          }

          /* Outline CTA hover to orange */
           .cta-button-outline:hover,
           .cta-button-outline:focus-visible {
            background-color: var(--orange-primary) !important;
            color: #ffffff !important;
            border-color: var(--orange-primary) !important;
             transform: translateY(-1px);
           }

          /* Orange outline variant */
           .cta-button-outline--orange {
             color: var(--orange-primary) !important;
             border-color: var(--orange-primary) !important;
           }
          
          .section-spacing {
            padding: 3rem 0;
          }
          
          @media (min-width: 640px) {
            .newspaper-title {
              font-size: 2.2rem;
            }
          }

          @media (min-width: 768px) {
            .section-spacing {
              padding: 4rem 0;
            }
            .newspaper-title {
              font-size: 2.8rem;
            }
          }

          @media (min-width: 1024px) {
            .newspaper-title {
              font-size: 3rem;
            }
          }
          
          .fade-in {
            animation: fadeIn 0.6s ease-out;
          }
          
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .rotating-word {
            color: #000;
            font-weight: 400;
            display: inline-block;
          }

          /* Non-bouncy water-wheel with prev/next preview */
          .rotating-wrapper {
            display: inline-block;
            height: 1.2em; /* fixed line height to prevent bounce */
            overflow: hidden;
            perspective: 800px;
            vertical-align: baseline;
          }
          .wheel {
            position: relative;
            display: inline-block;
            height: 1.2em; /* matches wrapper */
            transform-style: preserve-3d;
            width: 100%; /* take the full width of wrapper to avoid collapse */
          }
          .wheel-item {
            position: absolute;
            top: 0; /* anchor items to the wheel's top */
            left: 0;
            right: 0;
            line-height: 1.2em;
            will-change: transform, opacity;
          }
          /* Base positions (static between animations) */
          .wheel-item.prev   { transform: translateY(-100%) rotateX(60deg);  opacity: 0.35; }
          .wheel-item.center { transform: translateY(0)      rotateX(0deg);   opacity: 1;    }
          .wheel-item.next   { transform: translateY(100%)  rotateX(-60deg); opacity: 0.35; }

          /* Roll-up animation frames (runs each change) */
          .wheel.roll .prev   { animation: wheelPrev 0.8s ease-in-out forwards; }
          .wheel.roll .center { animation: wheelCenter 0.8s ease-in-out forwards; }
          .wheel.roll .next   { animation: wheelNext 0.8s ease-in-out forwards; }

          @keyframes wheelPrev {
            0%   { transform: translateY(-100%) rotateX(60deg);  opacity: 0.35; }
            100% { transform: translateY(-200%) rotateX(90deg);  opacity: 0; }
          }
          @keyframes wheelCenter {
            0%   { transform: translateY(0) rotateX(0deg);   opacity: 1; }
            100% { transform: translateY(-100%) rotateX(60deg); opacity: 0.35; }
          }
          @keyframes wheelNext {
            0%   { transform: translateY(100%) rotateX(-60deg); opacity: 0.35; }
            100% { transform: translateY(0) rotateX(0deg);      opacity: 1; }
          }

          .logo-container {
            position: absolute;
            top: 1rem;
            left: 1rem;
            z-index: 10;
          }

          .logo-container img {
            height: 60px;
            width: auto;
          }
        `}</style>

        <header className="bg-white relative">
          {/* Full-width top banner (white background, black text) */}
          <div className="w-full bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 uppercase sm:text-xs tracking-wider text-gray-900">
              <div className="grid grid-cols-3 items-center">
                {/* Left: Date (desktop only), left-aligned */}
                <span className="hidden md:block whitespace-nowrap justify-self-start">{todayStr}</span>
                {/* Center: Motto (desktop only), centered */}
                <span className="hidden md:block justify-self-center">Human-Centered AI in Practice</span>
                {/* Right side: volume only; language toggle moved into the menu */}
                <div className="justify-self-end flex items-center gap-6">
                  <span className="hidden md:inline whitespace-nowrap">Vol. 1, No. 1 • Section A</span>
                </div>
              </div>
            </div>
          </div>
          {/* Full-width orange stripe */}
          <div className="w-full border-b-2" style={{ borderColor: 'var(--orange-primary)' }}></div>
          

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="pt-4">
              <div className="text-center px-1 py-4">
                {/* Top masthead line moved to full-width banner above */}

                <h1 className="newspaper-title">
                  <span style={{ fontWeight: 400 }}>ThreeSixty</span><span className="logo-vibrate" style={{ fontWeight: 400 }}>One</span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mt-3 mb-1 text-center" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  <span>The Extra Degree of</span>
                </p>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-2 text-center" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  <span
                    className="rotating-wrapper"
                    style={{ width: `${maxWordChars + 1}ch` }}
                  >
                    {/* key forces reflow so the roll animation starts each tick */}
                    <span key={currentWordIndex} className="wheel roll">
                      <span className="wheel-item prev rotating-word">{prevWord}</span>
                      <span className="wheel-item center rotating-word">{currentWord}</span>
                      <span className="wheel-item next rotating-word">{nextWord}</span>
                    </span>
                  </span>
                </p>
                {/* Subtext (always in English) */}
                <p className="text-slate-600 text-sm sm:text-sm md:text-base lg:text-lg mt-6">
                  Helping Ambitious Companies in the Nordics Excel
                </p>
                <div className="newspaper-divider"></div>
                {/* Top menu for all pages */}
                <SectionNav
                  items={[
                    { label: lang === 'no' ? 'HJEM' : 'Home', to: createPageUrl("Home") },
                    { label: lang === 'no' ? 'Hva vi tilbyr' : 'What We Offer', to: createPageUrl(lang === 'no' ? "OffersNo" : "Offers") },
                    { label: lang === 'no' ? 'Innsikt' : 'Insights', to: createPageUrl("PracticalUseCases") },
                    { label: lang === 'no' ? 'Referanser' : 'Testimonials', to: createPageUrl("Testimonials") },
                    { label: lang === 'no' ? 'Kontakt' : 'Get In Touch', to: createPageUrl("Contact") },
                  ]}
                />
              </div>
            </div>
          </div>

          {/* Reinforced bottom border for the entire header */}
          <div className="border-b-4 border-black"></div>
        </header>

        <main className="fade-in overflow-x-hidden relative">
          {/* Global page navigation: top controls */}
          {currentPageName !== "OfferCategory" && currentPageName !== "Home" && (
            <>
              <PageNav
                homeTo={createPageUrl("Home")}
                showHome={false}
                showBack={true}
                nextTo={nextUrl}
                showNext={true}
                // Removed prevTo to ensure Back uses browser history
              />
              {/* Spacer so the top nav never overlaps headings */}
              <div
                className={currentPageName === "Offers" || currentPageName === "OffersNo" ? "h-4 md:h-6" : "h-6 md:h-8"}
                aria-hidden="true"
              />
            </>
          )}
          {children}
          {/* Bottom controls: Back and Next */}
          {currentPageName !== "OfferCategory" && currentPageName !== "Home" && (
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <PageNav
                homeTo={createPageUrl("Home")}
                showHome={false}
                showBack={true}
                nextTo={nextUrl}
                showNext={true}
                // Removed prevTo to ensure Back uses browser history
              />
            </div>
          )}
          {/* Safe area below content */}
          {currentPageName !== "OfferCategory" && currentPageName !== "Home" && (
            <div className="h-2" aria-hidden="true" />
          )}
        </main>

        {/* Footer intentionally not translated per request */}
        <footer className="bg-white border-t-4 border-black mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-8">
              <h3 className="newspaper-title text-xl mb-4">
                <span style={{ fontWeight: 400 }}>ThreeSixty</span><span style={{ fontWeight: 400 }}>One</span>
              </h3>
              <p className="text-sm text-gray-600">Because the Extra Degree Changes Everything</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 text-center">
              <div>
                <div className="space-y-2">
                  <div className="text-sm text-gray-900 newspaper-nav">THREESIXTYONE AS</div>
                  <div className="text-sm text-gray-600">Org. no 830 094 482</div>
                  <div className="text-sm text-gray-600">Axel Huitfeldts vei 8 B, 1170 Oslo, Norway</div>
                  <div className="text-sm">
                    <a
                      href="mailto:henrik@threesixty1.com"
                      className="text-orange-600 underline underline-offset-2 hover:text-orange-700"
                    >
                      henrik@threesixty1.com
                    </a>
                  </div>
                  {/* Added copyright directly under the email, above the divider */}
                  <p className="text-sm text-gray-500 newspaper-nav">
                    © 2024 THREESIXTYONE. ALL RIGHTS RESERVED.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Full-width grey divider across the viewport */}
          <div className="border-t-4 border-black w-full"></div>
          {/* The previous div containing the copyright line has been removed */}
        </footer>
      </div>);

  }

  return (
    <LanguageProvider>
      <LayoutContent />
    </LanguageProvider>);
}
