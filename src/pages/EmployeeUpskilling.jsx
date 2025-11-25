
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowLeft, CheckCircle, Zap, Users, Clock, Lock } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageContext";

export default function EmployeeUpskilling() {
  const { lang } = useLanguage();
  const fromSection = new URLSearchParams(window.location.search).get("from");
  const deliverables = lang === "no"
    ? [
        "Hjelper ansatte i gang, bygger trygghet og øker kompetansen med konkrete use‑cases.",
        "Fokus på å få mest mulig ut av dagens verktøy og oppsett.",
        "Eksklusivt fokus: Vi jobber med én bedrift av gangen – med full NDA."
      ]
    : [
        "Helping employees get started, get comfortable, and upskill with specific use cases to free up their time.",
        "This process is usually focused on getting the most out of your current setup.",
        "Exclusive focus: We work with only one company at a time with a full NDA."
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
                {lang === "no" ? "Komme i gang & oppgradering for ansatte" : "Empower Your Team"}
              </h1>
              <p className="text-sm text-gray-600">{lang === "no" ? "Gi teamet ditt et KI‑løft" : "Upskill Your Employees"}</p>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Team training session" 
              className="w-full object-cover"
            />
            <p className="text-gray-700 leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:font-serif first-letter:float-left first-letter:mr-2 first-letter:mt-1">
              {lang === "no"
                ? "Vi hjelper ansatte fra nysgjerrighet til trygg, effektiv bruk av KI i hverdagen. Med praktiske, rolle‑relevante use‑cases får dere mer ut av verktøyene dere allerede har – og frigjør tid."
                : "We help your employees move from curiosity to confident, effective use of AI in their day-to-day work. Through practical, role-relevant use cases, we focus on getting more value from the tools you already have—freeing up time, improving output quality, and boosting engagement. The program is delivered with full confidentiality and a simple, human-first approach that meets people where they are."
              }
            </p>
          </div>
          
          <div className="bg-white border-2 border-black p-6 rounded md:pl-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-black" style={{ fontFamily: 'Playfair Display, serif' }}>
              {lang === "no" ? "Viktigste leveranser" : "Key Deliverables"}
            </h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <Users className="h-5 w-5 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700">{lang === "no" ? "Kompetanseløft med konkrete og relevante use‑cases." : "Upskill your team with specific, relevant AI use cases."}</p>
              </div>
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700">{lang === "no" ? "Frigjør tid og øk produktiviteten." : "Free up valuable employee time and boost productivity."}</p>
              </div>
              <div className="flex items-start">
                <Lock className="h-5 w-5 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700">{lang === "no" ? "Eksklusivt fokus på deres bedrift – med full NDA." : "Exclusive focus on your company with a full NDA."}</p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <Link 
                to={createPageUrl("Contact?service=employee-upskilling")}
                className="cta-button-outline w-full text-center block no-underline"
              >
                {lang === "no" ? "Planlegg et program" : "Plan a Program"}
              </Link>
              <p className="text-xs text-center text-gray-500 mt-3">
                {lang === "no" ? "Tilpasses deres eksisterende verktøy og behov." : "Tailored to your existing software and team needs."}
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
