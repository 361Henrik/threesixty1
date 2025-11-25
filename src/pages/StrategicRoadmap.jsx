
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowLeft, Calendar, CheckCircle, Target, TrendingUp, Shield, BarChart } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageContext";

export default function StrategicRoadmap() {
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
                {lang === "no" ? "Strategisk KI‑veikart" : "Strategic AI Roadmap Development"}
              </h1>
              <p className="text-sm text-gray-600">
                {lang === "no" ? "Hovedplanen for en KI‑drevet fremtid" : "The Master Plan for Your AI-Powered Future"}
              </p>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Strategic planning" 
              className="w-full object-cover border-2 border-black"
            />
            
            <p className="text-gray-700 leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:font-serif first-letter:float-left first-letter:mr-2 first-letter:mt-1">
              {lang === "no"
                ? "Et helhetlig 12–24‑måneders veikart for KI med tydelig tidslinje, styringsrammeverk og strategisk samspill mellom teknologi og forretningsmål. Inkluderer implementeringsplan med milepæler, budsjett og suksessmål."
                : "A comprehensive 12–24-month AI roadmap with a clear timeline, governance framework, and strategic alignment between technology investments and business goals. We provide an implementation plan with milestones, budget, and success metrics."
              }
            </p>
          </div>
          
          <div className="bg-white border-2 border-black p-6 md:pl-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-black">
              {lang === "no" ? "Viktigste leveranser" : "Key Deliverables"}
            </h2>
            
            <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <Calendar className="h-5 w-5 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">{lang === "no" ? "Komplett 12–24‑måneders veikart" : "Complete 12-24 Month Roadmap"}</div>
                    <div className="text-sm text-gray-600">{lang === "no" ? "En tydelig og gjennomførbar tidslinje." : "A clear, actionable timeline for implementation."}</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="h-5 w-5 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">{lang === "no" ? "Styring og sikkerhetsrammeverk" : "AI Governance & Security Framework"}</div>
                    <div className="text-sm text-gray-600">{lang === "no" ? "Prinsipper for trygg og ansvarlig bruk av KI." : "Protocols to ensure safe and responsible AI use."}</div>
                  </div>
                </div>
                 <div className="flex items-start">
                  <Target className="h-5 w-5 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">{lang === "no" ? "Strategisk samkjøring" : "Strategic Alignment"}</div>
                    <div className="text-sm text-gray-600">{lang === "no" ? "Kobler teknologi‑investeringer til forretningsmål." : "Connecting technology investments to core business goals."}</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <BarChart className="h-5 w-5 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">{lang === "no" ? "Implementeringsplan" : "Implementation Plan"}</div>
                    <div className="text-sm text-gray-600">{lang === "no" ? "Milepæler, budsjett og suksesskriterier." : "Includes milestones, budget, and success metrics."}</div>
                  </div>
                </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <Link 
                to={createPageUrl("Contact?service=strategic-roadmap")}
                className="cta-button-outline w-full text-center block no-underline"
              >
                {lang === "no" ? "Få pristilbud" : "Get Custom Quote"}
              </Link>
            </div>
          </div>
        </div>

        <div className="newspaper-divider-double my-8"></div>

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
