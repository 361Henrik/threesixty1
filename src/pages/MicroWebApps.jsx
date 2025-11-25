
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowLeft, Monitor, CheckCircle, Shield, Users, Workflow, Clock } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageContext";

export default function MicroWebApps() {
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
                {lang === "no" ? "Mikro webapplikasjoner" : "Micro Web Application Development"}
              </h1>
              <p className="text-sm text-gray-600">{lang === "no" ? "Skreddersydde, sikre verktøy" : "Polished & Secure Custom Tools"}</p>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80"
              alt="Web application development" 
              className="w-full object-cover"
            />
            <p className="text-gray-700 leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:font-serif first-letter:float-left first-letter:mr-2 first-letter:mt-1">
              {lang === "no"
                ? "Vi bygger dedikerte, sikre webapplikasjoner med brukervennlige grensesnitt på 2–4 uker. Skreddersydde verktøy som løser konkrete behov – uten tunge IT‑investeringer."
                : "We build dedicated, secure web applications with a user-friendly interface in 2-4 weeks. These custom tools solve specific business challenges and are polished for daily team use without requiring large IT investments."
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
                    <div className="font-medium text-gray-900">{lang === "no" ? "Sikre apper på 2–4 uker" : "Secure Apps in 2-4 Weeks"}</div>
                    <div className="text-sm text-gray-600">{lang === "no" ? "Rask leveranse av skreddersydde løsninger." : "Fast turnaround for custom solutions."}</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="h-5 w-5 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">{lang === "no" ? "Brukervennlige grensesnitt" : "User-Friendly Interface"}</div>
                    <div className="text-sm text-gray-600">{lang === "no" ? "Polerte, sikre apper teamet kan bruke daglig." : "Polished and secure apps your team can use daily."}</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <Workflow className="h-5 w-5 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">{lang === "no" ? "Frittstående løsninger" : "Standalone Solutions"}</div>
                    <div className="text-sm text-gray-600">{lang === "no" ? "Skreddersydde verktøy uten store IT‑investeringer." : "Custom tools that don't require large IT investments."}</div>
                  </div>
                </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <Link 
                to={createPageUrl("Contact?service=micro-web-apps")}
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
