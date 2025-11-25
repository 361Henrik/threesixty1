
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowLeft, Zap, CheckCircle, Clock, TrendingUp, FileText, Bot } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageContext";

export default function WorkflowAutomation() {
  const { lang } = useLanguage();
  const fromSection = new URLSearchParams(window.location.search).get("from");
  const examples = lang === "no"
    ? [
        "Fakturabehandling og økonomiprosesser",
        "Kundeoppfølging og CRM‑oppdateringer",
        "Rapportering og dataanalyse",
        "Innholdsproduksjon og markedsføring",
        "Dokumenthåndtering og kvalitetskontroll"
      ]
    : [
        "Invoice handling and financial processes",
        "Customer follow-up and CRM updates",
        "Report generation and data analysis",
        "Content production and marketing",
        "Document management and quality control"
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
              <h1 className="text-4xl font-bold text-gray-900 mb-3 pb-3 border-b-4 border-black inline-block" style={{ fontFamily: 'Playfair Display, serif' }}>
                {lang === "no" ? "Intelligent arbeidsflytautomatisering" : "Intelligent Workflow Automation"}
              </h1>
              <p className="text-sm text-gray-600">{lang === "no" ? "De store tidsbesparelsene" : "The Big Time-Savers"}</p>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1611095965923-a535a65b534e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Workflow automation" 
              className="w-full object-cover"
            />
            
            <p className="text-gray-700 leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:font-serif first-letter:float-left first-letter:mr-2 first-letter:mt-1">
              {lang === "no"
                ? "Vi automatiserer tidkrevende oppgaver fra A til Å for å fjerne «tidstyver» og flaskehalser – som gir målbare gevinster i timer spart per ansatt."
                : "We provide end-to-end automation of specific, time-consuming tasks to eliminate \"time thieves\" and bottlenecks, delivering measurable results in hours saved per day for each employee."
              }
            </p>
          </div>
          
          <div className="bg-white border-2 border-black p-6 md:pl-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-black" style={{ fontFamily: 'Playfair Display, serif' }}>
              {lang === "no" ? "Hva kan automatiseres?" : "What Can Be Automated?"}
            </h2>
            
            <div className="space-y-3 mb-6">
              {examples.map((item, index) => (
                <div key={index} className="flex items-start">
                  <Zap className="h-5 w-5 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-6">
              <Link 
                to={createPageUrl("Contact?service=workflow-automation")}
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
