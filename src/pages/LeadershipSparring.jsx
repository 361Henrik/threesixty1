
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowLeft, CheckCircle, Zap, UserCheck, BrainCircuit, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageContext";

export default function LeadershipSparring() {
  const { lang } = useLanguage();
  const fromSection = new URLSearchParams(window.location.search).get("from");
  const deliverables = lang === "no"
    ? [
        "Sparringspartner for komplekse lederutfordringer – 25+ års erfaring.",
        "KI‑akselerert problemløsning for raskere, bedre beslutninger.",
        "Ad hoc‑støtte: ansatte, kunder, partnere, drift og innovasjon."
      ]
    : [
        "A sparring partner for CEOs/leadership on complex business challenges, drawing on 25+ years of leadership experience.",
        "AI-accelerated problem-solving: Bringing AI solutions to help make decisions faster and better.",
        "Ad hoc leadership support: Helping to solve urgent challenges across employees, customers, partners, operations, and innovation."
      ];

  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link 
          to={createPageUrl("Home") + (fromSection ? `#${fromSection}` : "")}
          className="inline-flex items-center uppercase font-bold text-black hover:text-black mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          {lang === "no" ? "Tilbake til tjenester" : "Back to Services"}
        </Link>

        <div className="grid md:grid-cols-2 gap-10 items-start mb-12">
          <div className="space-y-6 md:pr-6 md:border-r md:border-gray-300">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 pb-3 border-b-4 border-black inline-block" style={{ fontFamily: 'Playfair Display, serif' }}>
                {lang === "no" ? "Lederstøtte og sparring med KI" : "AI-Enhanced Leadership Sparring & Strategic Support"}
              </h1>
              <p className="text-sm text-gray-600">{lang === "no" ? "Ditt strategiske fortrinn" : "Your Strategic Advantage"}</p>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Strategic leadership meeting" 
              className="w-full object-cover"
            />
            <p className="text-gray-700 leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:font-serif first-letter:float-left first-letter:mr-2 first-letter:mt-1">
              {lang === "no"
                ? "For ledere som trenger en klar, tillitsfull tenkepartner. Vi kombinerer 25+ års ledererfaring med moderne KI for å akselerere problemløsning, stressteste beslutninger og avdekke muligheter – med reelle resultater som mål."
                : "For leaders who need a clear, trusted thinking partner. We bring 25+ years of leadership experience together with modern AI capabilities to accelerate problem-solving, pressure-test decisions, and uncover opportunities. Whether you’re navigating change, resolving urgent issues, or shaping a strategy, you get a calm, confidential sparring partner focused on real outcomes—not theory."
              }
            </p>
          </div>
          
          <div className="bg-white border-2 border-black p-6 md:pl-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-black" style={{ fontFamily: 'Playfair Display, serif' }}>
              {lang === "no" ? "Viktigste leveranser" : "Key Deliverables"}
            </h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <UserCheck className="h-5 w-5 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700">{lang === "no" ? "Sparringspartner med 25+ års ledererfaring." : "A sparring partner with 25+ years of leadership experience."}</p>
              </div>
              <div className="flex items-start">
                <BrainCircuit className="h-5 w-5 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700">{lang === "no" ? "KI‑akselerert problemløsning for raskere, bedre beslutninger." : "AI-accelerated problem-solving for faster, better decisions."}</p>
              </div>
              <div className="flex items-start">
                <ShieldCheck className="h-5 w-5 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700">{lang === "no" ? "Ad hoc‑støtte ved akutte, komplekse utfordringer." : "Ad hoc support for urgent, complex business challenges."}</p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <Link 
                to={createPageUrl("Contact?service=leadership-sparring")}
                className="cta-button-outline w-full text-center block no-underline"
              >
                {lang === "no" ? "Forespør sparring" : "Inquire About Sparring"}
              </Link>
              <p className="text-xs text-center text-gray-500 mt-3">
                {lang === "no" ? "Konfidensiell, effektfull støtte for ledere." : "Confidential, high-impact support for leaders."}
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to={createPageUrl("Home") + (fromSection ? `#${fromSection}` : "")}
            className="inline-flex items-center uppercase font-bold text-black hover:text-black"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            {lang === "no" ? "Tilbake til tjenester" : "Back to Services"}
          </Link>
        </div>
      </div>
    </div>
  );
}
