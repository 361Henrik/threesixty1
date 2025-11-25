
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { useLanguage } from "@/components/i18n/LanguageContext";

export default function RealityCheck() {
  const { lang } = useLanguage();

  if (lang === "no") {
    return (
      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-10">
          <header className="mb-6">
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
              style={{ fontFamily: "Noto Serif Display, serif" }}
            >
              Reality Check 2025: Hvor står norske og nordiske ledere med AI?
            </h1>
            <p className="text-sm md:text-base text-gray-900 mt-2 font-semibold">
              Paradokset i lederskapet
            </p>
          </header>

          <article className="prose prose-slate max-w-none">
            <section className="mb-6 text-gray-800">
              <p>
                Globale rapporter viser at rundt 78 % av virksomheter nå bruker AI — men færre enn 1 % mener de har nådd modenhet, og over 80 % ser ingen tydelig effekt på bunnlinjen.
              </p>
              <p>Dette handler ikke først og fremst om teknologi. Det handler om lederskap og prioritering.</p>
              <p>
                I Norden oppgir over 60 % av selskaper at de er fornøyde med resultatene av sine AI-investeringer, men under halvparten har et strukturert rammeverk for å måle effekt (fairedih.fi).
              </p>
              <p>
                I Norge viser ferske analyser at landet ligger høyt på digital modenhet, men at gapet mellom ambisjon og faktisk bruk fortsatt er stort i næringslivet (nhh.no).
              </p>
              <p>Kort sagt: Hvis du som leder fortsatt venter på “det riktige tidspunktet” for å handle, ligger du allerede bak.</p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900" style={{ fontFamily: "Noto Serif Display, serif" }}>
                Hvorfor mange sitter fast
              </h2>
              <ul className="list-disc pl-5 text-sm text-gray-800 space-y-2 mt-2">
                <li>
                  <strong>Manglende redesign:</strong> Bare 20–30 % av selskaper har faktisk omstrukturert arbeidsflyter i forbindelse med AI-innføring – og det er her den virkelige effekten skjer.
                </li>
                <li>
                  <strong>Fragmentert innsats:</strong> De fleste legger AI oppå eksisterende prosesser. Vinnerne redesigner hvordan arbeidet faktisk utføres.
                </li>
                <li>
                  <strong>Manglende ledersamordning:</strong> Mange toppledere ser ansatte som barriere – mens ansatte selv oppgir at de er klare. Differansen ligger i strategisk forankring.
                </li>
                <li>
                  <strong>Kompleksitet i store virksomheter:</strong> Mindre selskaper i Norden skalerer ofte raskere, fordi de kan teste og feile hurtigere.
                </li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900" style={{ fontFamily: "Noto Serif Display, serif" }}>
                Hva nordiske ledere bør merke seg nå
              </h2>
              <div className="mt-2 space-y-2 text-sm text-gray-800">
                <p>
                  <strong>32 % av nordiske toppledere refererer til AI i årsrapportene sine:</strong> AI er ikke lenger “nice-to-have”, men en del av strategi og investordialog (accenture.com).
                </p>
                <p>
                  <strong>Norge rangeres som nummer 10 globalt i AI-modenhet:</strong> Norge har høy digital modenhet, og infrastrukturen er på plass for videre skalering (autodok.no).
                </p>
                <p>
                  <strong>71 % av norske ledere mener at AI-regulering er nødvendig:</strong> Krav til ansvarlighet øker – selskaper som ser dette som en mulighet, vinner tillit (assets.kpmg.com).
                </p>
                <p>
                  <strong>AI-investeringer øker raskt:</strong> De som dedikerer minst 5 % av budsjettet til AI, rapporterer høyere ROI enn de som investerer mindre.
                </p>
              </div>
            </section>

            <section className="mb-6">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900" style={{ fontFamily: "Noto Serif Display, serif" }}>
                Hva de beste gjør annerledes
              </h2>
              <ul className="list-disc pl-5 text-sm text-gray-800 space-y-2 mt-2">
                <li><strong>Lederengasjement:</strong> Når ledergruppen eier AI-strategien, øker verdiskapingen dramatisk.</li>
                <li><strong>Arbeidsflyt-fokus:</strong> Ikke “legg til” AI – bygg om måten arbeidet gjøres på.</li>
                <li><strong>Tydelig styring:</strong> Mål AI-initiativ mot forretningsmål, ikke teknologimål.</li>
                <li><strong>Kompetanseutvikling:</strong> Løft eksisterende ansatte – ikke vent på at “AI-ekspertene” skal dukke opp.</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900" style={{ fontFamily: "Noto Serif Display, serif" }}>
                Hva dette betyr for deg
              </h2>
              <ul className="list-disc pl-5 text-sm text-gray-800 space-y-2 mt-2">
                <li>Du er ikke for sent ute – men vinduet for konkurransefordel krymper.</li>
                <li>Du trenger en strategi som er forankret i ledelsen, ikke bare i IT.</li>
                <li>Du bør bruke AI som katalysator for arbeidsflyt og kulturendring – ikke som en pilot på siden.</li>
                <li>Effekt skjer når du kobler strategi, struktur og mennesker – ikke bare teknologi.</li>
              </ul>
              <p className="text-gray-800 mt-3">💡 <strong>Kort oppsummert:</strong> AI virker. Spørsmålet er ikke om – men hvordan du leder implementeringen.</p>
            </section>
          </article>

          <div className="mt-6 flex justify-end gap-3">
            <a href="#top" className="cta-button-outline inline-flex items-center">Til toppen</a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-10">
        <header className="mb-6">
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
            style={{ fontFamily: "Noto Serif Display, serif" }}
          >
            The Reality Check: Where Nordic Business Leaders Stand with AI in 2025
          </h1>
          <p className="text-sm md:text-base text-gray-900 mt-2 font-semibold">
            The Leadership Paradox
          </p>
        </header>

        <article className="prose prose-slate max-w-none">
          <section className="mb-6 text-gray-800">
            <p>AI adoption in the Nordics has exploded — yet impact lags far behind.</p>
            <p>
              Globally, around 78% of organizations use AI, but fewer than 1% say they’ve reached maturity, and over
              80% see little measurable impact on their bottom line.
            </p>
            <p>
              In the Nordics, more than 60% of companies report being satisfied with their AI progress — but fewer than
              half have a structured framework for measuring success (fairedih.fi, 2025).
            </p>
            <p>This isn’t a technology problem. It’s a leadership challenge.</p>
            <p>
              Norway, Denmark, Sweden, and Finland all rank among the world’s most digitally mature economies, yet a
              persistent gap between ambition and actual implementation remains (NHH, 2025).
            </p>
            <p>Put simply: those waiting for the “perfect moment” to act are already behind.</p>
          </section>

          <section className="mb-6">
            <h2
              className="text-xl md:text-2xl font-semibold text-gray-900"
              style={{ fontFamily: "Noto Serif Display, serif" }}
            >
              Why So Many Get Stuck
            </h2>
            <ul className="list-disc pl-5 text-sm text-gray-800 space-y-2 mt-2">
              <li>
                <strong>Lack of workflow redesign:</strong> Only about 20–30% of organizations have fundamentally
                changed how they work when adopting AI — yet that’s where the biggest financial gains are realized.
              </li>
              <li>
                <strong>Fragmented initiatives:</strong> Most companies add AI to existing processes instead of
                reimagining them.
              </li>
              <li>
                <strong>Leadership misalignment:</strong> Executives often cite employee readiness as a barrier, while
                employees say they’re ready — the real issue is lack of strategic alignment at the top.
              </li>
              <li>
                <strong>Size vs. speed:</strong> Smaller Nordic businesses move faster because they have fewer layers
                and clearer problems to solve, while larger enterprises risk paralysis by analysis.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2
              className="text-xl md:text-2xl font-semibold text-gray-900"
              style={{ fontFamily: "Noto Serif Display, serif" }}
            >
              Nordic Trends to Watch
            </h2>
            <div className="mt-2 space-y-2 text-sm text-gray-800">
              <p>
                <strong>32% of Nordic CEOs now reference AI in their annual reports:</strong> AI is no longer a
                “nice-to-have” but a key part of corporate strategy and investor dialogue (Accenture Nordic AI Maturity
                Report, 2025).
              </p>
              <p>
                <strong>Norway ranks 10th globally in AI maturity:</strong> The infrastructure is in place, but
                leadership clarity will determine who scales successfully (autodok.no, 2025).
              </p>
              <p>
                <strong>71% of Norwegian executives say responsible AI regulation is essential:</strong> Companies that
                embrace transparency and ethics early will earn the most trust (KPMG Norway, 2025).
              </p>
              <p>
                <strong>Investment levels are rising fast:</strong> Firms allocating 5% or more of their budget to AI
                see stronger ROI than those investing less.
              </p>
            </div>
          </section>

          <section className="mb-6">
            <h2
              className="text-xl md:text-2xl font-semibold text-gray-900"
              style={{ fontFamily: "Noto Serif Display, serif" }}
            >
              What the Leaders Get Right
            </h2>
            <ul className="list-disc pl-5 text-sm text-gray-800 space-y-2 mt-2">
              <li>
                <strong>Executive ownership:</strong> When the C-suite owns the AI agenda — not IT — results follow.
              </li>
              <li>
                <strong>Workflow redesign:</strong> Don’t “add” AI — rebuild how work gets done.
              </li>
              <li>
                <strong>Clear governance:</strong> Track results against business metrics, not adoption metrics.
              </li>
              <li>
                <strong>Upskilling the workforce:</strong> The best leaders develop AI capability internally instead of
                waiting for external experts.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2
              className="text-xl md:text-2xl font-semibold text-gray-900"
              style={{ fontFamily: "Noto Serif Display, serif" }}
            >
              The Nordic Opportunity
            </h2>
            <div className="text-sm text-gray-800 space-y-2">
              <p>
                Nordic businesses are known for pragmatism, equality, and trust — the same qualities that can accelerate
                AI transformation if paired with decisiveness.
              </p>
              <p>
                The question isn’t whether AI works; the evidence is overwhelming. The question is whether your
                organization can move from intention to execution fast enough.
              </p>
              <p>You’re not too late, but the window for advantage is closing.</p>
              <p>You can’t delegate AI strategy — it must be led from the top.</p>
              <p>You don’t need bigger budgets; you need better alignment and smarter focus.</p>
            </div>
          </section>

          <section className="mb-6">
            <h2
              className="text-xl md:text-2xl font-semibold text-gray-900"
              style={{ fontFamily: "Noto Serif Display, serif" }}
            >
              In Summary
            </h2>
            <div className="text-sm text-gray-800 space-y-2">
              <p>AI now sits at the heart of competitiveness across the Nordics.</p>
              <p>
                The winners are those who combine strategic clarity, organizational alignment, and cultural readiness —
                not those who chase tools or pilots.
              </p>
              <p>
                AI has become business-critical infrastructure. The leaders who act now will define what “Nordic
                excellence” means in the AI era.
              </p>
            </div>
          </section>
        </article>

        <div className="mt-6 flex justify-end gap-3">
          <Link to={createPageUrl("Contact")} className="cta-button inline-flex items-center">
            Book a Strategy Session
          </Link>
        </div>
      </div>
    </div>
  );
}
