
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowLeft, Lightbulb, CheckCircle, Clock, TrendingDown, Zap, BarChart } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageContext";

export default function RapidPrototyping() {
  const { lang } = useLanguage();
  const fromSection = new URLSearchParams(window.location.search).get("from");
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
              <h1 className="text-4xl font-bold text-gray-900 mb-3 pb-3 border-b-4 border-black inline-block" style={{ fontFamily: 'Playfair Display, serif' }}>
                {lang === "no" ? "Rask prototyping" : "Rapid Prototyping"}
              </h1>
              <p className="text-sm text-gray-600">{lang === "no" ? "Fra idé til proof‑of‑concept" : "From Idea to Proof-of-Concept"}</p>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Rapid prototyping" 
              className="w-full object-cover"
            />
             <p className="text-gray-700 leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:font-serif first-letter:float-left first-letter:mr-2 first-letter:mt-1">
              {lang === "no"
                ? "Vi bygger funksjonelle demoer på 1–2 uker – testbare prototyper som viser potensial og gir datadrevne go/no‑go‑beslutninger før store investeringer."
                : "We build functional demos of new ideas in 1-2 weeks, creating testable prototypes that demonstrate potential ROI and enable data-backed \"go/no-go\" decisions before major investments."
              }
            </p>
          </div>
          
          <div className="bg-white border-2 border-black p-6 md:pl-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-black" style={{ fontFamily: 'Playfair Display, serif' }}>
              {lang === "no" ? "Viktigste leveranser" : "Key Deliverables"}
            </h2>
            
            <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">{lang === "no" ? "Funksjonelle demoer på 1–2 uker" : "Functional Demos in 1-2 Weeks"}</div>
                    <div className="text-sm text-gray-600">{lang === "no" ? "Se idéene dine i praksis – raskt." : "Quickly see your ideas in action."}</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <Lightbulb className="h-5 w-5 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">{lang === "no" ? "Testbare prototyper" : "Testable Prototypes"}</div>
                    <div className="text-sm text-gray-600">{lang === "no" ? "Vis potensial og valider avkastning." : "Demonstrate potential and validate ROI."}</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <BarChart className="h-5 w-5 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">{lang === "no" ? "Datadrevne beslutninger" : "Data-Backed Decisions"}</div>
                    <div className="text-sm text-gray-600">{lang === "no" ? "Ta tryggere innovasjonsvalg." : "Make innovation choices with confidence."}</div>
                  </div>
                </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <Link 
                to={createPageUrl("Contact?service=rapid-prototyping")}
                className="cta-button-outline w-full text-center block no-underline"
              >
                {lang === "no" ? "Få pristilbud" : "Get Custom Quote"}
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center">
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
