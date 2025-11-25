
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowLeft, Bot, CheckCircle, Clock, Users, Zap, Briefcase, BarChart, MessageSquare } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageContext";

export default function AIAgentDevelopment() {
  const { lang } = useLanguage();
  const fromSection = new URLSearchParams(window.location.search).get("from");
  const examples = lang === "no"
    ? [
        "Research‑assistent som samler inn og analyserer markedsdata.",
        "Innholdsprodusent som leverer konsistent, merkevaretilpasset materiale.",
        "Kundeserviceagent som håndterer rutinemessige henvendelser.",
        "Dataanalytiker som genererer innsikt og rapporter automatisk."
      ]
    : [
        "Research assistant that collects and analyzes market data.",
        "Content creator that produces consistent branded material.",
        "Customer service agent that handles routine inquiries.",
        "Data analyst that generates automatic insights and reports."
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
                {lang === "no" ? "Utvikling av skreddersydde KI‑agenter" : "Custom AI Agent Development"}
              </h1>
              <p className="text-sm text-gray-600">{lang === "no" ? "Dine nye digitale medarbeidere" : "Your New Digital Employees"}</p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="AI development"
              className="w-full object-cover"
            />

            <p className="text-gray-700 leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:font-serif first-letter:float-left first-letter:mr-2 first-letter:mt-1">
              {lang === "no"
                ? "Vi bygger spesialiserte KI‑agenter som utfører definerte oppgaver døgnet rundt – en skalerbar arbeidsstyrke uten å ansette flere."
                : "We build specialized AI agents that perform defined business functions 24/7, creating a scalable AI workforce without increasing headcount."
              }
            </p>
          </div>

          <div className="bg-white border-2 border-black p-6 md:pl-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-black" style={{ fontFamily: 'Playfair Display, serif' }}>
              {lang === "no" ? "Eksempler på KI‑agenter vi bygger" : "Example AI Agents We Build"}
            </h2>

            <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <Briefcase className="h-5 w-5 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700"><strong>{lang === "no" ? "Research‑assistent:" : "Research Assistant:"}</strong> {lang === "no" ? "Samler inn og analyserer markedsdata." : "Collects and analyzes market data."}</p>
                </div>
                <div className="flex items-start">
                  <BarChart className="h-5 w-5 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700"><strong>{lang === "no" ? "Dataanalytiker:" : "Data Analyst:"}</strong> {lang === "no" ? "Lager automatiske innsikter og rapporter." : "Generates automatic insights and reports."}</p>
                </div>
                <div className="flex items-start">
                  <MessageSquare className="h-5 w-5 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700"><strong>{lang === "no" ? "Kundeserviceagent:" : "Customer Service Agent:"}</strong> {lang === "no" ? "Håndterer rutinehenvendelser." : "Handles routine inquiries."}</p>
                </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <Link
                to={createPageUrl("Contact?service=ai-agent-development")}
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
