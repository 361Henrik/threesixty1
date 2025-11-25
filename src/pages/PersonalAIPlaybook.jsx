
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowLeft, Calendar, Clock, Shield, BookOpen, CheckCircle, Target, Users, FileText, Lightbulb } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageContext";

export default function PersonalAIPlaybook() {
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
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 pb-3 border-b-4 border-black inline-block" style={{ fontFamily: 'Playfair Display, serif' }}>
                {lang === "no" ? "Din personlige KI‑playbook — bruk KI som tenke‑ og problemløsningspartner" : "Your Personal AI Playbook — Using AI as a Thinking & Problem‑Solving Partner"}
              </h1>
              <p className="text-sm text-gray-600">
                {lang === "no"
                  ? "Et veiledet 8‑ukers program som kutter læringskurven og gjør KI til en praktisk partner i komplekst arbeid og strategi."
                  : "A guided 8‑week program to bypass the steep learning curve and master AI for complex thought and strategy—while solving your real work."}
              </p>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1529078155058-5d716f45d604?q=80&w=1470&auto=format&fit=crop"
              alt="Focused one-on-one coaching session"
              className="w-full object-cover"
            />
            <p className="text-gray-700 leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:font-serif first-letter:float-left first-letter:mr-2 first-letter:mt-1">
              {lang === "no"
                ? "Det kan være krevende å få KI til å jobbe effektivt for deg. Jeg kombinerer 25+ års leder‑ og coachingerfaring med praktisk bruk av dagens kraftigste KI‑verktøy – i en menneske‑først tilnærming tilpasset hverdagen din."
                : "Putting AI to work effectively can be a frustrating journey of trial and error. I've combined 25+ years of leadership and coaching with deep, practical immersion in today’s most powerful AI tools to build a human‑first approach tied to your daily challenges."
              }
            </p>
            <p className="text-gray-700 leading-relaxed">
              {lang === "no"
                ? "Dette er snarveien for ambisiøse fagfolk som vil bli svært KI‑kompetente uten å bruke utallige timer. Du lærer mens du gjør faktisk fremdrift – og gjør KI til din mest effektive tenkepartner."
                : "This is a direct shortcut for ambitious professionals who want to become highly AI‑proficient without countless hours to spare. You’ll learn while actively progressing on your current tasks—turning AI from a confusing tool into your most powerful thinking partner."
              }
            </p>
          </div>

          <div className="bg-white border-2 border-black p-6 md:pl-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-black" style={{ fontFamily: 'Playfair Display, serif' }}>
              {lang === "no" ? "Et program bygget rundt hvordan du jobber" : "A Program Built Around How You Work"}
            </h2>
            <div className="space-y-4 mb-4">
              <div className="flex items-start">
                <Lightbulb className="h-5 w-5 text-orange-600 mr-3 mt-0.5" />
                <p className="text-sm text-gray-700">
                  {lang === "no"
                    ? "Én‑til‑én program tilpasset din arbeidshverdag og rolle – innenfor bedriftens sikkerhetsrammer."
                    : "One-on-one program layered around your personal working style and role—always within your company’s AI security guidelines."}
                </p>
              </div>
            </div>
            <div className="space-y-5">
              <div className="flex items-start">
                <Target className="h-5 w-5 text-orange-600 mr-3 mt-0.5" />
                <div>
                  <div className="font-medium text-gray-900">{lang === "no" ? "1) Vi starter med ditt utgangspunkt" : "1) We Start by Finding Your Starting Point"}</div>
                  <div className="text-sm text-gray-600">{lang === "no" ? "Et enkelt spørreskjema om oppsett, mål og nivå – som målepunkt for progresjon." : "A simple questionnaire to understand your setup, goals, concerns, and skill level—used as a benchmark for progress."}</div>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-orange-600 mr-3 mt-0.5" />
                <div>
                  <div className="font-medium text-gray-900">{lang === "no" ? "2) 8 × 45‑minutters fokuserte økter" : "2) 8 × 45‑Minute Focused Sessions"}</div>
                  <div className="text-sm text-gray-600">{lang === "no" ? "Praktiske økter der vi jobber med dine reelle oppgaver – strategi og leveranser du kan bruke straks." : "Live online, hands‑on sessions working on your real projects—drafting strategies and building outputs you can use immediately."}</div>
                </div>
              </div>
              <div className="flex items-start">
                <BookOpen className="h-5 w-5 text-orange-600 mr-3 mt-0.5" />
                <div>
                  <div className="font-medium text-gray-900">{lang === "no" ? "3) Vi bygger playbooken din underveis" : "3) We Build Your Playbook Along the Way"}</div>
                  <div className="text-sm text-gray-600">{lang === "no" ? "Prompter, instrukser og mønstre samles i din personlige KI‑playbook – din repeterbare resultatsystem." : "Prompts, instructions, and effective patterns collected into your personal AI playbook—your repeatable system for results."}</div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6 mt-6">
              <Link 
                to={createPageUrl("Contact?service=personal-playbook")}
                className="cta-button-outline w-full text-center block no-underline"
              >
                {lang === "no" ? "Snakk med oss" : "Discuss This Service"}
              </Link>
              <p className="text-xs text-center text-gray-500 mt-3">
                {lang === "no" ? "Konfidensielt og tilpasset din rolle og bedriftens retningslinjer." : "Confidential and tailored to your role and company policies."}
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="bg-white border-2 border-black p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-black" style={{ fontFamily: 'Playfair Display, serif' }}>
              {lang === "no" ? "Dette får du med deg" : "What You'll Walk Away With"}
            </h3>
            <div className="space-y-3">
              {[
                lang === "no" ? "Reell fremdrift i dine viktigste oppgaver – fra dag én." : "Real progress on your most important work—starting day one.",
                lang === "no" ? "Sikkert, profesjonelt KI‑oppsett (ChatGPT, Gemini eller Claude) tilpasset dine behov." : "A secure, professional AI setup (ChatGPT, Gemini, or Claude) matched to your needs.",
                lang === "no" ? "Din egen tilpassede KI‑playbook med dokumenterte «oppskrifter»." : "Your customized Personal AI Playbook with proven ‘recipes’.",
                lang === "no" ? "Et enkelt bibliotek med notater fra hver økt og utvalgte ressurser." : "A simple library of notes from every session plus curated learning resources.",
                lang === "no" ? "Trygghet og klarhet til å tenke og jobbe på et høyere nivå med KI." : "The confidence and clarity to think and work at a higher level with AI."
              ].map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-0.5" />
                  <p className="text-sm text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border-2 border-black p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-black" style={{ fontFamily: 'Playfair Display, serif' }}>
              {lang === "no" ? "Hvem programmet passer for" : "Who This Program Is For"}
            </h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Users className="h-5 w-5 text-orange-600 mr-3 mt-0.5" />
                <p className="text-sm text-gray-700">{lang === "no" ? "Ambisiøse fagfolk som vil gå fra ad hoc‑bruk til en smartere, repeterbar arbeidsmåte." : "Ambitious professionals ready to move from ad‑hoc AI use to a repeatable, smarter way of working."}</p>
              </div>
              <div className="flex items-start">
                <Shield className="h-5 w-5 text-orange-600 mr-3 mt-0.5" />
                <p className="text-sm text-gray-700">{lang === "no" ? "Nybegynnere til viderekomne – tilpasses nivå og sikkerhetskrav." : "Beginner to intermediate users—tailored to your level and your company’s security requirements."}</p>
              </div>
              <div className="flex items-start">
                <FileText className="h-5 w-5 text-orange-600 mr-3 mt-0.5" />
                <p className="text-sm text-gray-700">{lang === "no" ? "Helt ny i KI? Ta kontakt for en tilpasset «kom i gang»‑økt." : "Completely new to AI? Contact me for a bespoke “Getting Started” session built for your needs."}</p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6 mt-6">
              <Link 
                to={createPageUrl("Contact?service=personal-playbook")}
                className="cta-button-outline w-full text-center block no-underline"
              >
                {lang === "no" ? "La oss ta en prat" : "Let's Connect"}
              </Link>
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
