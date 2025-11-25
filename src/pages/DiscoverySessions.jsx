
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowLeft, CheckCircle, Zap, Users, Lightbulb, MessageSquare, Briefcase } from "lucide-react";
import PriceBox from "../components/common/PriceBox";
import { useLanguage } from "@/components/i18n/LanguageContext";

export default function DiscoverySessions() {
  const { lang } = useLanguage();
  const fromSection = new URLSearchParams(window.location.search).get("from");
  const variant = new URLSearchParams(window.location.search).get("variant");
  const is2h = variant === "2h";
  const is4h = variant === "4h";

  const pageTitle = is2h
    ? (lang === "no" ? "2‑timers AI‑inspirasjon" : "2-Hour AI Inspiration Session")
    : is4h
      ? (lang === "no" ? "4‑timers interaktiv workshop" : "4-Hour Interactive Workshop")
      : (lang === "no" ? "Praktiske AI‑økter for bedriften" : "Hands-On AI Discovery Sessions");

  const pageSubtitle = is2h
    ? (lang === "no" ? "Presentasjon og demo" : "Presentation & Demo")
    : is4h
      ? (lang === "no" ? "Dypdykk og mulighetsanalyse" : "Deep Dive & Opportunity Analysis")
      : (lang === "no" ? "Praktisk, interaktivt og bedriftsspesifikt" : "Practical, Interactive & Company-Specific");

  const deliverables = lang === "no" ? ( // Norwegian deliverables
    is2h ?
      [
        "En hype-fri omvisning i hva som skjer innen KI akkurat nå.",
        "Live demoer med eksempler fra flere bransjer.",
        "Hva som er mulig for SMB-er i dag og på kort sikt.",
        "Forenklet oversikt over nøkkelmodeller, verktøy og bruksområder.",
        "Praktiske do’s and don’ts for å komme trygt i gang.",
        "Spørsmål og svar med teamet ditt.",
        "Merk: Ingen bedriftsspesifikk analyse i denne økten.",
      ] :
      is4h ?
        [
          "Alle fordeler fra 2-timers økten (oversikt, demoer, Q&A).",
          "Veiledet diskusjon for å identifisere forretningsutfordringer.",
          "Identifisering og avklaring av KI-muligheter med stor innvirkning.",
          "Prioritert liste over neste steg tilpasset din kontekst.",
          "Valgfri praktisk utforskning av 1–2 relevante arbeidsflyter.",
        ] :
        [
          "Praktiske, poengterte sesjoner som adresserer din bedrifts spesifikke muligheter og utfordringer.",
          "Interaktivt format inkludert presentasjoner, Q&As, show-and-tells, demoer og breakout-sesjoner.",
          "Praktisk erfaring der deltakerne faktisk bruker KI-verktøy relevante for deres arbeid.",
          "Bedriftsspesifikt fokus: Vi adresserer dine faktiske forretningsutfordringer, ikke generisk KI-teori.",
          "Umiddelbar handlingsevne: Folk forlater med en klar forståelse av hva de skal gjøre på kort sikt og hvor innsatsen deres er rettet.",
          "Høy inspirasjonsfaktor: Deltakerne blir entusiastiske og motiverte til å prøve KI i sitt daglige arbeid.",
          "En ekstremt praktisk tilnærming — ingen fyll, bare virkelige løsninger for virkelige problemer.",
        ]
  ) : ( // English deliverables
    is2h ?
      [
        "A hype-free tour of what’s happening in AI right now.",
        "Live demos with real-life examples from multiple industries.",
        "What’s possible for SMBs today and in the near term.",
        "Plain-language overview of key models, tools, and use cases.",
        "Practical do’s and don’ts to get started safely.",
        "Q&A with your team.",
        "Note: No company-specific analysis in this session.",
      ] :
      is4h ?
        [
          "All benefits of the 2-hour session (overview, demos, Q&A).",
          "Guided discussion to surface your business pain points.",
          "Identification and clarification of high-impact AI opportunities.",
          "Prioritized list of next steps tailored to your context.",
          "Optional hands-on exploration of 1–2 relevant workflows.",
        ] :
        [
          "Practical, to-the-point sessions that address your company’s specific opportunities and challenges.",
          "Interactive format including presentations, Q&As, show-and-tells, demos, and breakout sessions.",
          "Hands-on experience where participants actually use AI tools relevant to their work.",
          "Company-specific focus: We address your actual business challenges, not generic AI theory.",
          "Immediate actionability: People leave with a clear understanding of what to do in the short term and where their efforts are headed.",
          "High inspiration factor: Participants get excited and motivated to try AI in their daily work.",
          "An extremely practical approach—no fluff, just real solutions for real problems.",
        ]
  );

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
                {pageTitle}
              </h1>
              <p className="text-sm text-gray-600">{pageSubtitle}</p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Interactive workshop"
              className="w-full object-cover" />
            {is2h ? (
              <p className="text-gray-700 leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:font-serif first-letter:float-left first-letter:mr-2 first-letter:mt-1">
                {lang === "no"
                  ? "En rask, hype‑fri gjennomgang av dagens KI‑landskap — laget for å inspirere og opplyse. Vi viser live‑demoer og virkelige eksempler fra flere bransjer, og forklarer hva som er mulig for SMB‑er nå og på kort sikt. Ingen bedriftsspesifikk analyse — bare klare innsikter, praktiske råd og en felles forståelse av hvor KI kan skape verdi."
                  : "A fast-paced, hype-free tour of today’s AI landscape designed to inspire and inform. We showcase live demos and real examples from multiple industries, explaining what’s possible for SMBs right now and in the near term. No company-specific analysis—just clear insights, practical do’s and don’ts, and a better shared understanding of where AI can create value."}
              </p>
            ) : is4h ? (
              <p className="text-gray-700 leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:font-serif first-letter:float-left first-letter:mr-2 first-letter:mt-1">
                {lang === "no"
                  ? "Med utgangspunkt i inspirasjonsøkten går vi praktisk til verks i deres kontekst. Vi løfter frem nøkkelutfordringer, tydeliggjør muligheter med høy effekt og skisserer en prioritert vei videre. Ved behov utforsker vi også 1–2 relevante arbeidsflyter for å gi teamet konkrete neste steg."
                  : "Building on the inspiration session, this workshop goes hands-on with your context. We surface your key pain points, clarify high-impact opportunities, and outline a prioritized path forward. Depending on your goals, we can also explore 1–2 relevant workflows to help your team see tangible next steps."}
              </p>
            ) : (
              <p className="text-gray-700 leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:font-serif first-letter:float-left first-letter:mr-2 first-letter:mt-1">
                {lang === "no"
                  ? "Praktiske, presise økter tilpasset din virksomhet — laget for å skape felles forståelse, bygge momentum og identifisere konkrete KI‑muligheter. Formatene inkluderer presentasjoner, demoer, Q&A og hands‑on‑arbeid for å sikre at innsikt blir til handling."
                  : "Practical, to‑the‑point sessions tailored to your company, designed to create shared understanding, spark momentum, and identify concrete AI opportunities. Formats include presentations, demos, Q&A, and hands‑on exploration to ensure insight translates into action."}
              </p>
            )}
          </div>
          
          <div className="bg-white border-2 border-black p-6 md:pl-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-black" style={{ fontFamily: 'Playfair Display, serif' }}>
              {lang === "no" ? "Dine viktigste leveranser" : "Your Key Deliverables"}
            </h2>
            
            <div className="space-y-4 mb-6">
              {deliverables.slice(0, 3).map((item, index) =>
              <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              )}
            </div>

            <PriceBox priceText="TBA" />

            <div className="border-t border-gray-200 pt-6">
              <Link
                to={createPageUrl("Contact?service=discovery-sessions")}
                className="cta-button-outline w-full text-center block no-underline">
                {lang === "no" ? "Be om en sesjon" : "Request a Session"}
              </Link>
              <p className="text-xs text-center text-gray-500 mt-3">
                {is2h ? (lang === "no" ? "Generell inspirasjonsøkt med live demoer — ingen bedriftsspesifikk analyse." : "General inspiration session with live demos—no company-specific analysis.") : (lang === "no" ? "Tilpasset teamets spesifikke behov." : "Customized for your team's specific needs.")}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bullet list removed to match SOP & Playbook Modernization layout */}

        <div className="text-center mt-12">
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
