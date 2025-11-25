
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowLeft, BookOpen, CheckCircle, Database, Shield, BrainCircuit } from "lucide-react";
import PriceBox from "../components/common/PriceBox";
import { useLanguage } from "@/components/i18n/LanguageContext";

export default function PlaybookModernization() {
  const { lang } = useLanguage();
  const fromSection = new URLSearchParams(window.location.search).get("from");
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          to={createPageUrl("Home") + (fromSection ? `#${fromSection}` : "")}
          className="inline-flex items-center uppercase font-bold text-black hover:text-black mb-6">

          <ArrowLeft className="h-4 w-4 mr-1" />
          {lang === "no" ? "Tilbake til tjenester" : "Back to Services"}
        </Link>

        <div className="grid md:grid-cols-2 gap-10 items-start mb-12">
          <div className="space-y-6 md:pr-6 md:border-r md:border-gray-300">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-3 pb-3 border-b-4 border-black inline-block" style={{ fontFamily: 'Playfair Display, serif' }}>
                {lang === "no" ? "Modernisering av SOP & playbook" : "SOP & Playbook Modernization"}
              </h1>
              <p className="text-sm text-gray-600">
                {lang === "no" ? "Skap bedriftens KI‑hjerne" : "Creating Your Company's AI Brain"}
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Knowledge management"
              className="w-full object-cover" />


            <p className="text-gray-700 leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:font-serif first-letter:float-left first-letter:mr-2 first-letter:mt-1">
              {lang === "no"
                ? "Denne heldagsøkten gjør idéer om til handling. Sammen skaper vi deres KI‑playbook med tydelig strategi, konkrete prototyper og en uke‑for‑uke plan. Dere får mer enn inspirasjon – dere får en veikart som er klar til å brukes."
                : "This full-day session turns ideas into action. We’ll co-create your AI playbook with a clear strategy, tangible prototypes, and a week-by-week implementation plan. You’ll leave with more than inspiration — you’ll have a roadmap tailored to your challenges and ready to put into motion."
              }
              {lang === "no"
                ? " Passer for virksomheter som er klare til å ta sitt første reelle steg inn i KI."
                : " Good for companies ready to move beyond exploration and take their first real leap into AI."
              }
            </p>
          </div>

          <div className="bg-white border-2 border-black p-6 md:pl-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-black" style={{ fontFamily: 'Playfair Display, serif' }}>
              {lang === "no" ? "Viktigste leveranser" : "Key Deliverables"}
            </h2>

            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <BookOpen className="h-5 w-5 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-gray-900">{lang === "no" ? "Oppdatert prosessbibliotek" : "Updated Process Library"}</div>
                  <div className="text-sm text-gray-600">{lang === "no" ? "Organisert oversikt over alle kjerneprosesser." : "An organized library of all core business processes."}</div>
                </div>
              </div>
              <div className="flex items-start">
                <Database className="h-5 w-5 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-gray-900">{lang === "no" ? "Egen KI‑klar kunnskapsbase" : "Proprietary AI-Ready Knowledge Base"}</div>
                  <div className="text-sm text-gray-600">{lang === "no" ? "Ett felles sannhetsgrunnlag for hele bedriften." : "A single source of truth for your company."}</div>
                </div>
              </div>
              <div className="flex items-start">
                <BrainCircuit className="h-5 w-5 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-gray-900">{lang === "no" ? "Moderniserte SOP‑er for KI" : "Modernized SOPs for AI"}</div>
                  <div className="text-sm text-gray-600">{lang === "no" ? "Tilpassede prosedyrer for effektiv KI‑bruk." : "Adapting standard procedures for AI integration."}</div>
                </div>
              </div>
            </div>

            <PriceBox priceText="TBA" />

            <div className="border-t border-gray-200 pt-6">
              <Link to={createPageUrl("Contact?service=playbook-modernization")} className="cta-button-outline w-full text-center block no-underline">

                {lang === "no" ? "Få pristilbud" : "Get Custom Quote"}
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            to={createPageUrl("Home") + (fromSection ? `#${fromSection}` : "")}
            className="inline-flex items-center uppercase font-bold text-black hover:text-black">

            <ArrowLeft className="h-4 w-4 mr-1" />
            {lang === "no" ? "Tilbake til tjenester" : "Back to Services"}
          </Link>
        </div>
      </div>
    </div>);

}
