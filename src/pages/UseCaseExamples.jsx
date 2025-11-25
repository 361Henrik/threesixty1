
import React from "react";
// removed Link and createPageUrl imports
import { useLanguage } from "@/components/i18n/LanguageContext";
import { createPageUrl } from "@/utils";

export default function UseCaseExamples() {
  const { lang } = useLanguage();

  const headerTitle =
    lang === "no"
      ? "Eksempler på bruk av AI"
      : "Everyday AI: From Idea to Impact";
  const subTitle =
    lang === "no" ? "" : "A glimpse into practical examples that show what’s possible.";

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        {/* Header */}
        <header className="mb-8">
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
            style={{ fontFamily: "Noto Serif Display, serif" }}
          >
            {headerTitle}
          </h1>
          <p className="text-sm md:text-base text-gray-700 mt-2">{subTitle}</p>
        </header>

        {/* EN only: Intro and updated sections */}
        {lang !== "no" ? (
          <>
            {/* Intro */}
            <section className="mb-6 text-sm md:text-base text-gray-700">
              <p>Across the Nordics, automation and insight-driven workflows are transforming how teams sell, serve, and innovate.</p>
              <p>AI isn't about replacing people — it's about freeing them to focus on what truly matters.</p>
              <p>Here are just a few real-world examples — a taste of what's possible when AI meets everyday business.</p>
            </section>

            {/* Happier Customers */}
            <section className="mb-10">
              <h2
                className="text-lg md:text-xl font-semibold text-gray-900"
                style={{ fontFamily: "Noto Serif Display, serif" }}
              >
                Happier Customers
              </h2>
              <div className="mt-2 space-y-3 text-sm md:text-base text-gray-700">
                <p>
                  Customer satisfaction has always depended on time, timing, and trust. Renewals, follow-ups, and client reviews take focus — and small opportunities often slip through the cracks.
                </p>
                <p>
                  AI helps capture those moments, keeping interactions consistent, timely, and personal, so teams can spend more time building relationships and less time on admin.
                </p>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Examples:</div>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <span className="font-semibold">Deeper Customer Insight:</span> AI continuously scans relevant data — from company news to leadership changes — highlighting growth plans and shifting priorities. It compiles concise monthly briefs that give sales and leadership teams an edge before key meetings.
                    </li>
                    <li>
                      <span className="font-semibold">Automated Follow-Up:</span> AI personalizes outreach based on history and preferences — sending a thank-you message after a demo, a renewal reminder at the right moment, or a relevant case study to re-engage a quiet lead.
                    </li>
                    <li>
                      <span className="font-semibold">Smarter Proposal Process:</span> By analyzing past proposals, AI learns which approaches drive success and recommends adjustments to pricing, tone, or content for each segment.
                    </li>
                  </ul>
                </div>
                <p className="font-medium text-gray-900">Result: More relevant conversations, stronger loyalty, and higher conversion.</p>
              </div>
            </section>

            {/* Empowered Employees */}
            <section className="mb-10">
              <h2
                className="text-lg md:text-xl font-semibold text-gray-900"
                style={{ fontFamily: "Noto Serif Display, serif" }}
              >
                Empowered Employees
              </h2>
              <div className="mt-2 space-y-3 text-sm md:text-base text-gray-700">
                <p>
                  Recruitment, onboarding, and development shape every organization's culture — but they also take time and consistency.
                </p>
                <p>
                  AI streamlines HR and leadership workflows, making processes more reliable while giving leaders more time to focus on people. The technology supports your culture; it doesn't replace it.
                </p>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Examples:</div>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <span className="font-semibold">Continuous Skills Overview:</span> AI maps skills across the organization, showing capacity, hidden talent, and project readiness in real time.
                    </li>
                    <li>
                      <span className="font-semibold">Engagement Insights:</span> Subtle shifts in feedback or responsiveness can signal declining engagement. AI detects these early — privately and in aggregate — so managers can act before small issues grow.
                    </li>
                    <li>
                      <span className="font-semibold">Personalized Growth Paths:</span> AI recommends the right development track for each person — mentoring, stretch assignments, or targeted learning — based on goals and evolving roles.
                    </li>
                  </ul>
                </div>
                <p className="font-medium text-gray-900">Result: Greater engagement, stronger development, and a more motivated workforce.</p>
              </div>
            </section>

            {/* Smarter Operations */}
            <section className="mb-10">
              <h2
                className="text-lg md:text-xl font-semibold text-gray-900"
                style={{ fontFamily: "Noto Serif Display, serif" }}
              >
                Smarter Operations
              </h2>
              <div className="mt-2 space-y-3 text-sm md:text-base text-gray-700">
                <p>
                  Operations are the backbone of every business — but reporting, scheduling, and compliance can drain focus from innovation.
                </p>
                <p>
                  AI automates routine processes with accuracy and transparency, so operations teams can stay focused on improvement, not repetition.
                </p>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Examples:</div>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <span className="font-semibold">Resource Planning:</span> Automatically allocate people, equipment, and facilities to avoid conflicts and maximize use.
                    </li>
                    <li>
                      <span className="font-semibold">Compliance Made Simple:</span> Generate reports, track changes, and trigger alerts automatically to ensure readiness and reliability.
                    </li>
                    <li>
                      <span className="font-semibold">Quality Monitoring:</span> Continuous oversight detects irregularities early, enabling proactive corrections and better performance.
                    </li>
                  </ul>
                </div>
                <p className="font-medium text-gray-900">Result: Leaner operations, fewer errors, and more time for progress.</p>
              </div>
            </section>

            {/* Faster Innovation */}
            <section className="mb-10">
              <h2
                className="text-lg md:text-xl font-semibold text-gray-900"
                style={{ fontFamily: "Noto Serif Display, serif" }}
              >
                Faster Innovation
              </h2>
              <div className="mt-2 space-y-3 text-sm md:text-base text-gray-700">
                <p>
                  Innovation thrives when insight replaces intuition.
                </p>
                <p>
                  AI accelerates how teams capture trends, test ideas, and scale what works — turning creativity into a repeatable advantage.
                </p>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Examples:</div>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <span className="font-semibold">Market Awareness:</span> AI gathers and analyzes market signals — from competitor moves to customer sentiment — helping teams anticipate shifts and act early.
                    </li>
                    <li>
                      <span className="font-semibold">Customer Feedback Analysis:</span> Feedback from email, chat, and social channels is consolidated and analyzed to uncover key themes and opportunities for improvement.
                    </li>
                    <li>
                      <span className="font-semibold">Automated Experimentation:</span> A/B tests and prototypes run automatically, helping teams validate ideas faster and base decisions on data, not assumptions.
                    </li>
                  </ul>
                </div>
                <p className="font-medium text-gray-900">Result: Quicker insight, faster iteration, and more confident innovation.</p>
              </div>
            </section>

            {/* The Bigger Picture + CTA */}
            <section className="mb-10">
              <h2
                className="text-lg md:text-xl font-semibold text-gray-900"
                style={{ fontFamily: "Noto Serif Display, serif" }}
              >
                The Bigger Picture
              </h2>
              <div className="mt-2 space-y-3 text-sm md:text-base text-gray-700">
                <p>When work flows better, people do too.</p>
                <p>AI isn't just about efficiency — it's about freeing teams to think, create, and connect.</p>
                <p>It's not about doing more; it's about doing what matters, better.</p>
                <div className="mt-3">
                  <a
                    href={createPageUrl("Contact")}
                    className="text-orange-600 text-sm font-semibold underline underline-offset-2"
                  >
                    👉 Explore what AI could do for your business
                  </a>
                </div>
              </div>
            </section>
          </>
        ) : (
          <>
            {/* Fornøyde kunder */}
            <section className="mb-10">
              <h2
                className="text-lg md:text-xl font-semibold text-gray-900"
                style={{ fontFamily: "Noto Serif Display, serif" }}
              >
                Fornøyde kunder
              </h2>
              <div className="mt-2 space-y-3 text-sm md:text-base text-gray-700">
                <p>
                  Å holde kundene fornøyde tar tid – oppfølging av fornyelser, forberedelse til møter og oppfølging av leads. Altfor ofte glipper små muligheter i hverdagen. Ved å automatisere disse punktene kan teamet bruke mindre tid på administrasjon og mer på å bygge relasjoner. Arbeidsflytene tilpasses slik dere allerede jobber, mens AI sikrer konsistens, tempo og innsikt – alltid med menneskene i førersetet. Resultatet er sterkere salgsrør, høyere kundelojalitet og flere muligheter som blir til faktisk inntekt.
                </p>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Eksempler:</div>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <span className="font-semibold">Dypere kundeinnsikt:</span> AI overvåker kontinuerlig tilgjengelige datakilder – fra selskapsnyheter til lederendringer – og identifiserer vekstplaner og endrede prioriteringer. Den setter sammen månedlige trendrapporter og korte innsiktsnotater som salg- eller lederteam kan bruke i møter.
                    </li>
                    <li>
                      <span className="font-semibold">Automatisert kundeoppfølging:</span> AI tilpasser hver interaksjon basert på kundehistorikk, preferanser og riktig timing. Den kan sende en kort takk etter en demonstrasjon, en fornyelsespåminnelse i rett tid eller en relevant case for å engasjere en passiv kunde.
                    </li>
                    <li>
                      <span className="font-semibold">Smartere tilbudsprosesser:</span> Ved å analysere tidligere tilbud lærer AI hvilke faktorer som gir suksess – fra pris og tone til eksempler brukt. Deretter foreslår den justeringer i pris, omfang og presentasjonsform for hvert kundesegment.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Engasjerte medarbeidere */}
            <section className="mb-10">
              <h2
                className="text-lg md:text-xl font-semibold text-gray-900"
                style={{ fontFamily: "Noto Serif Display, serif" }}
              >
                Engasjerte medarbeidere
              </h2>
              <div className="mt-2 space-y-3 text-sm md:text-base text-gray-700">
                <p>
                  Rekruttering, onboarding og oppfølging er avgjørende, men krever tid og struktur – noe mange mindre team sliter med å opprettholde. Når viktige HR-prosesser automatiseres, frigjøres kapasitet hos ledelsen og HR, samtidig som kvaliteten holdes stabil. AI støtter prosessen, men medarbeiderne styrer den – slik at alt forblir i tråd med kultur og prioriteringer.
                </p>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Eksempler:</div>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <span className="font-semibold">Kontinuerlig kompetansekartlegging:</span> AI kartlegger ferdigheter på tvers av organisasjonen, viser hvem som har kapasitet og hvilke evner som ikke utnyttes. Når et nytt prosjekt starter, finner du raskt riktig intern ressurs. Skjult potensial blir synlig, og kompetansedata oppdateres fortløpende – ikke årlig.
                    </li>
                    <li>
                      <span className="font-semibold">Tidlig varsling av lavt engasjement:</span> AI fanger opp subtile signaler – endringer i undersøkelser, tregere svar, forsinket kundebehandling – og identifiserer mønstre som kan tyde på lavere engasjement, før det blir et problem.
                    </li>
                    <li>
                      <span className="font-semibold">Målrettet utvikling:</span> I stedet for generelle kurs anbefaler AI utviklingsløp tilpasset hver enkelt – mentorordninger, utfordrende prosjekter eller nettbaserte kurs – basert på prestasjonsdata og rolleutvikling.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Smidigere drift */}
            <section className="mb-10">
              <h2
                className="text-lg md:text-xl font-semibold text-gray-900"
                style={{ fontFamily: "Noto Serif Display, serif" }}
              >
                Smidigere drift
              </h2>
              <div className="mt-2 space-y-3 text-sm md:text-base text-gray-700">
                <p>
                  Drift innebærer ofte planlegging, rapportering og etterlevelse av krav – nødvendige, men gjentakende oppgaver som stjeler fokus fra vekst og innovasjon. Når disse prosessene automatiseres, reduseres feil, kostnader og tidsbruk, mens AI håndterer mønstergjenkjenning, varsler og rapportgenerering. Teamet beholder kontrollen, mens driften går jevnere.
                </p>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Eksempler:</div>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <span className="font-semibold">Ressursplanlegging:</span> Fordel personer, utstyr og lokaler automatisk for å unngå dobbeltbooking og dårlig ressursutnyttelse.
                    </li>
                    <li>
                      <span className="font-semibold">Etterlevelse og revisjon:</span> Generer rapporter og varsler automatisk for å sikre kontinuerlig samsvar med lover og krav.
                    </li>
                    <li>
                      <span className="font-semibold">Kvalitetssikring:</span> Kontinuerlig overvåkning oppdager feil eller avvik tidlig, slik at korrigeringer kan gjøres raskt og presist.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Raskere innovasjon */}
            <section className="mb-10">
              <h2
                className="text-lg md:text-xl font-semibold text-gray-900"
                style={{ fontFamily: "Noto Serif Display, serif" }}
              >
                Raskere innovasjon
              </h2>
              <div className="mt-2 space-y-3 text-sm md:text-base text-gray-700">
                <p>
                  Innovasjon handler om innsikt og eksperimentering – ikke uendelig manuell analyse. AI gjør det raskere å fange signaler, teste ideer og beslutte hva som bør skaleres. Slik blir innovasjon en mer effektiv og kunnskapsbasert prosess, ikke et sjansespill.
                </p>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Eksempler:</div>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <span className="font-semibold">Markedsanalyse:</span> AI samler og analyserer markedsdata – fra nye konkurrenter til kundesentiment – slik at team raskt kan oppdage trender og justere strategi.
                    </li>
                    <li>
                      <span className="font-semibold">Analyse av kundetilbakemeldinger:</span> AI samler tilbakemeldinger fra flere kanaler (e-post, chat, spørreundersøkelser, sosiale medier) og analyserer dem for å identifisere mønstre og forbedringsområder.
                    </li>
                    <li>
                      <span className="font-semibold">Automatisert A/B-testing:</span> AI designer, gjennomfører og analyserer tester automatisk, slik at ideer kan valideres raskt og beslutninger tas basert på data, ikke antakelser.
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </>
        )}

        {/* CTA removed per request */}
      </div>
    </div>
  );
}
