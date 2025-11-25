
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageContext";

export default function PracticalUseCases() {
  const { lang } = useLanguage();

  // English-only facts list (shown below on the page)
  const aiFacts = [
  { title: "Start small, ship fast", blurb: "Short sprints and tight scopes beat big-bang projects. Prove value in weeks, not quarters." },
  { title: "Adoption beats sophistication", blurb: "A simple tool your team actually uses will outperform a complex one nobody touches." },
  { title: "Clear owners, clear outcomes", blurb: "Every use case needs a business owner and one measurable result to move." },
  { title: "Data quality > model quality", blurb: "Cleaner inputs and context often matter more than the latest model upgrade." },
  { title: "Integrate with the work", blurb: "Putting AI inside existing tools and workflows multiplies impact and reduces friction." },
  { title: "Keep humans in the loop", blurb: "Human review increases trust, improves accuracy, and helps you scale safely." },
  { title: "Measure what matters", blurb: "Track lead time, error rates, throughput, and cost-to-serve—not vanity metrics." },
  { title: "Prototype with an exit", blurb: "Pilots should have a decision deadline: scale, iterate, or retire—no endless limbo." },
  { title: "Change is half the work", blurb: "Training, playbooks, and habits drive results just as much as the technology itself." }];

  // Norwegian translation of the 9 facts (same design, shown when lang === 'no')
  const aiFactsNo = [
    { title: "Start i det små, lever raskt", blurb: "Korte sprinter med tydelige rammer slår store “big bang”-prosjekter. Verdi kan bevises på uker – ikke kvartaler." },
    { title: "Bruk er viktigere enn kompleksitet", blurb: "Et enkelt verktøy som faktisk brukes, gir bedre resultater enn et avansert system ingen tar i bruk." },
    { title: "Klare eiere, klare mål", blurb: "Hver brukssituasjon må ha en ansvarlig og et målbart resultat." },
    { title: "Datakvalitet > modellkvalitet", blurb: "Rene inputdata og god kontekst betyr ofte mer enn den nyeste modellversjonen." },
    { title: "Integrer!", blurb: "Når AI innlemmes i eksisterende arbeidsverktøy og arbeidsflyt, skjer det endringer!" },
    { title: "Hold mennesker i loopen", blurb: "Menneskelig vurdering skaper tillit, øker nøyaktigheten og sikrer trygg skalering." },
    { title: "Mål det som betyr noe", blurb: "Følg opp ledetid, feilrater, kapasitet og kostnad per leveranse – ikke ubetydelige måltall." },
    { title: "Prototype med deadline", blurb: "Pilotprosjekter må ha satt en frist: skalere, justere eller avslutte – bli aldri stående i limbo." },
    { title: "Endring er halve jobben", blurb: "Opplæring, rutiner og nye arbeidsvaner skaper resultater – minst like mye som teknologien." }
  ];

  // English-only: 15 lessons on why most AI isn't well implemented
  const aiLessons = [
  { title: "No clear owner", blurb: "Initiatives without a business owner fade after the pilot." },
  { title: "Vague success criteria", blurb: "If you can’t measure it, you can’t scale it." },
  { title: "Shadow AI everywhere", blurb: "Uncoordinated tools create risk, duplication, and confusion." },
  { title: "Messy input data", blurb: "Poorly structured, scattered data blocks impact more than model choice." },
  { title: "Prompting ≠ workflow", blurb: "Real gains require mapped workflows, not one-off prompts." },
  { title: "No human-in-the-loop", blurb: "Automation without review reduces trust and increases errors." },
  { title: "Change management missing", blurb: "Without habits and training, adoption stalls." },
  { title: "Generic training", blurb: "Role-specific guidance beats broad ‘AI 101’ content." },
  { title: "Not integrated", blurb: "If it’s outside daily tools, people won’t use it." },
  { title: "Security last", blurb: "Governance, access, and privacy must be by design, not retrofitted." },
  { title: "Tool-first thinking", blurb: "Start with the business problem, then pick the tool." },
  { title: "No owner for maintenance", blurb: "Models, prompts, and workflows drift without upkeep." },
  { title: "Optimistic ROI", blurb: "Assumptions beat data until you track time, cost, and quality." },
  { title: "No feedback loop", blurb: "Telemetry and user feedback turn pilots into products." },
  { title: "Scaling too early", blurb: "Prove value in one team before rolling out broadly." }];


  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        {/* Legacy back arrow removed – global PageNav handles navigation */}

        <header className="mb-8 text-center">
          <h1
            className="text-left md:text-center text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
            style={{ fontFamily: "Noto Serif Display, serif" }}>

            {lang === "no" ? "Innsikt & Ideer" : "Ideas & Impact"}
          </h1>
          <p className="text-center text-base md:text-xl text-gray-800 mt-3">
            {lang === "no" ? "— Fakta og perspektiver" : "— Insight and Executive Perspectives"}
          </p>
        </header>

        {/* NO only: Flyttet artikkel til topp i to kolonner, likt engelsk oppsett */}
        {lang === "no" && (
          <section id="muligheter-utfordringer" className="mb-14 md:mb-16">
            <div className="grid gap-8 md:gap-12 md:grid-cols-2 items-start">
              {/* Venstre kolonne: Tittel, punkter, CTA */}
              <div className="md:pr-4">
                <h2
                  className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight"
                  style={{ fontFamily: "Noto Serif Display, serif" }}
                >
                  Statusrapport - AI-ledelse i Norden 2025
                </h2>
                <div className="mt-3 space-y-2 text-sm md:text-base text-gray-800 leading-relaxed">
                  <p>78 % av nordiske virksomheter bruker AI – men under 1 % mener de har nådd modenhet.</p>
                  <p>Ledelse, ikke teknologi, er nå den største flaskehalsen.</p>
                  <p>AI er ikke lenger et eksperiment – det er forretningskritisk infrastruktur.</p>
                  <p>Les hvordan nordiske selskaper kan bevege seg raskere og smartere.</p>
                </div>
                <div className="mt-3">
                  <Link
                    to={createPageUrl("RealityCheck")}
                    className="text-orange-600 text-sm font-medium underline-offset-2 inline-flex items-center hover:text-orange-700"
                  >
                    → Reality Check
                  </Link>
                </div>
              </div>

              {/* Høyre kolonne: Kort intro + CTA (beholdt som før) */}
              <div className="md:pl-8 md:border-l md:border-gray-200">
                <h2
                  className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-2"
                  style={{ fontFamily: "Noto Serif Display, serif" }}
                >
                  Noen måter å bruke AI
                </h2>
                <div className="space-y-3 text-sm md::text-base text-gray-800 leading-relaxed">
                  <p>AI er ikke her for å ta over – den kan fjerne friksjon i hverdagen, slik at folk får mer tid til kunder, idéer og samarbeid.</p>
                  <p>Fra smidigere drift til bedre innsikt kan automatisering gjøre hverdagen mer effektiv – og litt mer menneskelig.</p>
                  <p>Se konkrete forslag til bruksområder og hva som gir effekt først.</p>
                </div>
                <div className="mt-4">
                  <Link
                    to={createPageUrl("UseCaseExamples")}
                    className="text-orange-600 text-sm font-medium underline-offset-2 inline-flex items-center hover:text-orange-700"
                  >
                    👉 Praktiske Eksempler
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* EN only: New article teaser above Coffee interview */}
        {lang !== "no" && (
          <section id="reality-check" className="mb-14 md:mb-16">
            <div className="grid gap-8 md:gap-12 md:grid-cols-2 items-start">
              {/* Left column: Heading, sub, excerpt, CTA */}
              <div className="md:pr-4">
                <h2
                  className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight"
                  style={{ fontFamily: "Noto Serif Display, serif" }}
                >
                  The Reality Check: AI Leadership in the Nordics 2025
                </h2>
                <div className="mt-3 space-y-3 text-sm md::text-base text-gray-800 leading-relaxed">
                  <p>78% of Nordic companies are now using AI – but fewer than 1% believe they’ve reached maturity.</p>
                  <p>Leadership, not technology, has become the biggest bottleneck.</p>
                  <p>AI is no longer an experiment – it’s business-critical infrastructure.</p>
                  <p>Read how Nordic companies can move faster and lead smarter.</p>
                </div>
                <div className="mt-2">
                  <Link
                    to={createPageUrl("RealityCheck")}
                    className="text-orange-600 text-sm font-medium underline-offset-2 inline-flex items-center hover:text-orange-700"
                  >
                    → Hard Facts
                  </Link>
                </div>
              </div>
              {/* Right column: replace with Everyday AI teaser */}
              <div className="md:pl-8 md:border-l md:border-gray-200">
                <h2
                  className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-2"
                  style={{ fontFamily: "Noto Serif Display, serif" }}
                >
                  Everyday AI: From Idea to Impact
                </h2>
                <div className="space-y-3 text-sm md::text-base text-gray-800 leading-relaxed">
                  <p>A glimpse into practical examples that show what’s possible.</p>
                  <p>Across the Nordics, automation and insight-driven workflows are transforming how teams sell, serve, and innovate.</p>
                  <p>Here are just a few real-world examples — a taste of what’s possible when AI meets everyday business.</p>
                </div>
                <div className="mt-4">
                  <Link
                    to={createPageUrl("UseCaseExamples")}
                    className="text-orange-600 text-sm font-medium underline-offset-2 inline-flex items-center hover:text-orange-700"
                  >
                    👉 Explore use cases
                  </Link>
                </div>
               {/* Compact three-fact summary under CTA with separators */}
               <div className="mt-12 py-4 border-y border-gray-200">
                 <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div
                        className="text-2xl md:text-3xl font-bold text-gray-900 leading-none"
                        style={{ fontFamily: "Noto Serif Display, serif" }}
                      >
                        78%
                      </div>
                      <div className="text-xs text-gray-600 mt-1">use AI</div>
                    </div>
                    <div className="text-center">
                      <div
                        className="text-2xl md:text-3xl font-bold text-gray-900 leading-none"
                        style={{ fontFamily: "Noto Serif Display, serif" }}
                      >
                        1%
                      </div>
                      <div className="text-xs text-gray-600 mt-1">reached maturity</div>
                    </div>
                    <div className="text-center">
                      <div
                        className="text-2xl md:text-3xl font-bold text-gray-900 leading-none"
                        style={{ fontFamily: "Noto Serif Display, serif" }}
                      >
                        80%+
                      </div>
                      <div className="text-xs text-gray-600 mt-1">no clear ROI impact</div>
                    </div>
                 </div>
               </div>
              </div>
            </div>
          </section>
        )}

        {/* Interview: A Coffee with Henrik — now first, two-column layout */}
        <section className="mb-10" id="coffee-interview">
          <div className="mb-4">
            <h2
              className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight"
              style={{ fontFamily: "Noto Serif Display, serif" }}>

              {lang === "no" ? "En kaffe med Henrik" : "A Coffee with Henrik"}
            </h2>
          </div>

          <div className="interview-columns text-sm md:text-base text-gray-800 leading-relaxed">
            {lang === "no" ?
            <>
              <p>
                Vi møter Henrik på en stille kafé i Oslo. Energien hans og duften av kaffe fyller rommet. Han snakker fort, og forteller om hvordan han kastet seg inn i AI-verdenen tilbake i 2022. – De som kjenner meg vet at jeg går dypt inn i alt jeg foretar meg – Og det gjorde jeg også denne gangen, sier han og ler.
              </p>

              <h3 className="text-lg font-semibold mt-4" style={{ fontFamily: "Noto Serif Display, serif" }}>
                Q: Du har hatt en lang karriere som leder. Hva var det som trakk deg inn i AI?
              </h3>
              <p>
                <strong>Henrik:</strong> Jeg har ledet transformasjonsprosjekter i selskaper som Microsoft, Circle K, Coca-Cola og i flere startups. Da generativ AI kom, forstod jeg raskt at dette var en en viktig samfunnsendring. For meg handlet det om hvordan AI faktisk kan skape forretningsverdi – uten at man selv må bli koder.
              </p>

              <h3 className="text-lg font-semibold mt-4" style={{ fontFamily: "Noto Serif Display, serif" }}>
                Q: Hvorfor stopper så mange AI-prosjekter før de skaper reell effekt?
              </h3>
              <p>
                <strong>Henrik:</strong> Forskning viser at over 90 % av de som bruker ChatGPT daglig, opplever høyere produktivitet. Samtidig skaleres ikke 95 % av en bedrifts AI-initiativ. Problemet er ikke teknologien – det er gjennomføringen. Mange stopper i overgangen mellom pilot og integrert løsning. Det er nettopp der jeg jobber – med å hjelpe ledere å tette dette gapet.
              </p>

              <h3 className="text-lg font-semibold mt-4" style={{ fontFamily: "Noto Serif Display, serif" }}>
                Q: Hvor har du sett størst avkastning fra AI-bruk?
              </h3>
              <p>
                <strong>Henrik:</strong> De mest synlige prosjektene handler ofte om salg og markedsføring, men de virkelig store gevinstene ligger som regel i back-office-automatisering. Når du strømlinjeformer interne prosesser eller reduserer behovet for ekstern bistand, frigjør du kapasitet og kutter kostnader. Det er der den store veksten starter.
              </p>

              <h3 className="text-lg font-semibold mt-4" style={{ fontFamily: "Noto Serif Display, serif" }}>
                Q: Hva er annerledes med din tilnærming?
              </h3>
              <p>
                <strong>Henrik:</strong> Jeg kobler ledelse og AI. Jeg vet hva som gir ROI, og vi kan lage prototyper på få dager, siden jeg forstår de organisatoriske sidene – endringsledelse, arbeidsflyt og styring. Det er ofte disse faktorene som avgjør om et AI-prosjekt blir skalert eller forsvinner.
              </p>

              <h3 className="text-lg font-semibold mt-4" style={{ fontFamily: "Noto Serif Display, serif" }}>
                Q: Hva trenger ledere mest akkurat nå?
              </h3>
              <p>
                <strong>Henrik:</strong> Ikke mer hype, og ikke flere “Lær deg AI”-kurs. De trenger å forstå hvordan AI kan brukes gjennom ledelse – og å omsette piloter til varig verdi. Det er det jeg bidrar med gjennom ThreeSixtyOne.
              </p>

              <p className="mt-3">
                Jeg må løpe videre – Vi skal kartlegge AI-Use Cases hos en kunde. Og dette er de mest inspirerende møtene jeg vet om, smiler han.
              </p>
              <p>
                Etter praten står én ting klart: Henrik snakker ikke bare om AI – han brenner for å hjelpe andre å lykkes.
              </p>
            </> :

            <>
                <p>
                  We meet Henrik at a quiet café in Oslo, where his positive energy merges with the smell of fresh coffee. He smiles, especially when describing his deep dive into AI back in 2022. “People who know me will tell you that I always go deep into whatever I do,” he admits. And I did.
                </p>
                <p>
                  Over the course of our chat, Henrik shares where the real ROI lies, and how he helps leaders move from pilots to measurable results.
                </p>

                <h3 className="text-lg font-semibold mt-4" style={{ fontFamily: "Noto Serif Display, serif" }}>
                  Q: You’ve had a long career in leadership. What drew you into AI?
                </h3>
                <p>
                  <strong>Henrik:</strong> I’ve led transformations at Microsoft, Circle K, Coca‑Cola, and in several startups. When generative AI appeared, I realized that understanding it intellectually wouldn’t be enough. For me, the crucial step was to understand how AI creates real value in business contexts — not to become a data scientist or expert coder.
                </p>

                <h3 className="text-lg font-semibold mt-4" style={{ fontFamily: "Noto Serif Display, serif" }}>
                  Q: Why do so many AI initiatives stall before creating impact?
                </h3>
                <p>
                  <strong>Henrik:</strong> Research shows more than 90% of professionals use ChatGPT daily and see productivity gains, but almost 95% of corporate AI initiatives never scale. The issue isn’t the technology. It’s the execution gap between pilots and integrated systems. That’s where I focus — helping leaders bridge that gap.
                </p>

                <h3 className="text-lg font-semibold mt-4" style={{ fontFamily: "Noto Serif Display, serif" }}>
                  Q: Where have you seen the biggest ROI from AI use cases?
                </h3>
                <p>
                  <strong>Henrik:</strong> The flashy sales and marketing pilots get attention, but the real impact often comes from back‑office automation. When you streamline processes or eliminate outsourcing, you reduce costs and free up capacity. That’s where companies unlock growth.
                </p>

                <h3 className="text-lg font-semibold mt-4" style={{ fontFamily: "Noto Serif Display, serif" }}>
                  Q: What’s different about your approach?
                </h3>
                <p>
                  <strong>Henrik:</strong> I bring my executive experience and AI together. I know which use cases deliver ROI, and prototype solutions in days.  and I understand the organizational side — change management, workflows, governance — the things that decide whether an AI pilot scales or fades away.
                </p>

                <h3 className="text-lg font-semibold mt-4" style={{ fontFamily: "Noto Serif Display, serif" }}>
                  Q: What do executives need most right now?
                </h3>
                <p>
                  <strong>Henrik:</strong> Not more hype, and not another “AI 101” workshop. They need someone who knows both leadership and AI — and how to turn pilots into lasting enterprise value. That’s what I bring through ThreeSixtyOne.
                </p>

                <p className="mt-3">
                  Henrik glanced at his watch and smiled: “I need to head off to my next meeting — we’re mapping out AI use cases for a client, and those are always the most energizing conversations.”
                </p>
                <p>
                  Talking with Henrik makes one thing clear: he doesn’t just study AI — he lives it, and he’s eager to help others turn it into real results.
                </p>
              </>
            }
          </div>

          {/* CTA aligned right under interview (no outer orange box) */}
          <div className="mt-6 flex justify-end">
            <Link
              to={createPageUrl("Contact")}
              className="cta-button-outline inline-flex items-center">

              {lang === "no" ? "Kontakt Henrik" : "Connect with Henrik"}
            </Link>
          </div>

          <style>{`
            .interview-columns {
              column-count: 1;
              column-gap: 2rem;
            }
            @media (min-width: 768px) {
              .interview-columns { column-count: 2; }
            }
            .interview-columns h3 {
              break-inside: avoid;
              -webkit-column-break-inside: avoid;
              page-break-inside: avoid;
            }
            .interview-columns p {
              break-inside: avoid;
              -webkit-column-break-inside: avoid;
              page-break-inside: avoid;
            }
          `}</style>
        </section>

        {/* Norsk artikkel flyttet til toppen – seksjonen under er fjernet for å unngå duplisering */}

        {/* 11 Facts About AI Use — now shown on both EN and NO */}
          <section id="ai-facts" className="mb-12">
            <h3
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900"
            style={{ fontFamily: "Noto Serif Display, serif" }}>
              {lang === "no" ? "9 råd om AI i bedriften" : "9 Tips on Using AI"}
            </h3>
            {/* removed subheading: Quick, practical truths from real-world adoption. */}
            <div className="mt-6 grid gap-6 md:grid-rows-3 md:grid-flow-col">
              {(lang === "no" ? aiFactsNo : aiFacts).map((f, i) => {
              const num = String(i + 1);
              const isDoubleDigit = (i + 1) >= 10;
              return (
                <article key={i} className="relative pl-12 max-w-xs md:max-w-sm">
                  <span
                    className={`absolute ${isDoubleDigit ? "left-0" : "left-2"} top-0 select-none leading-none text-5xl md:text-6xl font-black z-0`}
                    style={{ color: "#ffffff", WebkitTextStroke: "2px var(--orange-primary)", fontFamily: "Noto Serif Display, serif" }}
                  >
                    {num}
                  </span>
                    <h4
                    className="text-lg font-semibold text-gray-900 relative z-10"
                    style={{ fontFamily: "Noto Serif Display, serif" }}>

                      {f.title}
                    </h4>
                    <p className="text-sm md::text-base text-gray-700 mt-1 relative z-10">
                      {f.blurb}
                    </p>
                  </article>);

            })}
            </div>
          </section>
      </div>
    </div>);

}
