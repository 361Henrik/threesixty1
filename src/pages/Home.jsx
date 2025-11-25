
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, Quote } from "lucide-react";
import ImageWithFallback from "../components/common/ImageWithFallback";
import { useLanguage } from "@/components/i18n/LanguageContext";
import SinglePullQuote from "../components/home/SinglePullQuote";
import UseCaseCard from "../components/home/UseCaseCard";
import TestimonialCard from "../components/home/TestimonialCard";
import OfferingCard from "../components/home/OfferingCard";

export default function Home() {
  const { t, lang } = useLanguage();
  const navigate = useNavigate();

  const pullQuotes = [
  {
    text:
    "A true transformational leader with a rare ability to create energy, direction, and results—always with people at the center.",
    author: "John Henrik Andersen",
    role: "Chief Technology Officer • Cegal"
  },
  {
    text:
    "Combines strong leadership experience and deep AI knowledge to make complex topics engaging and accessible—creating real enthusiasm.",
    author: "Astrid Skaugseth",
    role: "Former CEO • SHE Conference"
  },
  {
    text:
    "Creates clarity and simplicity—delivering smarter, safer, more efficient, and enjoyable solutions with clear outcomes.",
    author: "Kristin Ruud",
    role: "Chief People Officer • Telenor"
  }];


  // Hide any testimonials on Home (use dedicated Testimonials page instead)
  const testimonials = [];

  React.useEffect(() => {
    const hash = window.location.hash ? window.location.hash.replace("#", "") : "";
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 0);
    }
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto px-10 py-2 max-w-7xl sm:px-6 lg:px-8">

        {/* New Main Article – now at the very top (no frame, uses newspaper dividers) */}
        <section id="main-article" className="mb-6 bg-white">
          <div className="px-4 py-2 md:p-8">
            <h1
              className="text-left md:text-center text-3xl md::text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
              style={{ fontFamily: "Noto Serif Display, serif" }}>

              {lang === "no" ? "25 års erfaring – forsterket med ny intelligens" : "Decades of Experience — Amplified by Augmented Intelligence."}
            </h1>

            <div className={`mt-2 ${lang === "no" ? "space-y-2" : "space-y-4"} text-gray-800`}>
              {lang === "no" ?
              <>
                <p className="text-base md::text-lg leading-relaxed">
                  Vi har løst krevende utfordringer for store og små virksomheter i mer enn 25 år. Nå kombinerer vi denne erfaringen med ny, anvendt intelligens som hjelper bedrifter å vokse smartere. Hos ThreeSixtyOne handler det ikke om teknologi for teknologiens skyld. Det handler om å bruke erfaring, innsikt og moderne verktøy til å skape konkrete resultater – raskere, tryggere og mer effektivt.
                </p>
                <p className="text-base md::text-lg leading-relaxed">
                  De siste tre årene har vi jobbet praktisk med utvidet og anvendt intelligens i nordiske virksomheter. Vi har lært hvor den faktisk skaper verdi: der mennesker, prosesser og data møtes – og nye muligheter åpner seg. Grunnlaget er fortsatt det samme: klar tenkning, skaperglede og et sterkt engasjement for å løse komplekse problemstillinger.
                </p>
                <p className="text-base md::text-lg leading-relaxed">
                  Med intelligent teknologi gjør vi nettopp det - bare raskere.
                </p>
              </> :
              <>
                <p className="text-base md::text-lg leading-relaxed">
                  Bringing together proven leadership and new intelligence to help your business thrive. At ThreeSixtyOne, we help Nordic companies earn more, work smarter, and grow stronger by combining 25 years of strategic experience with the possibilities of applied intelligence.
                </p>
                <p className="text-base md::text-lg leading-relaxed">
                  What makes us different is simple: we’ve been solving complex challenges for decades — and now, we amplify that know-how with intelligent tools that create measurable results. Over the past three years, we’ve worked hands-on with augmented- and applied- intelligence in real business settings — learning where it truly improves efficiency, resilience, and profitability.
                </p>
                <p className="text-base md::text-lg leading-relaxed">
                  Our foundation is still the same: clear thinking, practical execution, and a passion for solving real problems. Intelligence just helps us do it faster — and smarter.
                </p>
              </>
              }
            </div>
          </div>
        </section>

        {/* Parallel articles: Rolling Up... (left) and Sparking Ideas... (right) */}
        <section id="parallel-articles" className="mb-8 -mt-2">
          {/* Two-column grid with vertical newspaper divider */}
          <div className="main-articles-grid grid md:grid-cols-2 gap-8 items-start">
            {/* Left: Rolling Up Our Sleeves With You */}
            <article className="pr-0 md:pr-4">
              <div className="text-xs uppercase font-semibold text-orange-600 mb-1">
                {lang === "no" ? "FOR SMB" : "FOR SMBS"}
              </div>
              <h2
                className="text-2xl font-semibold text-gray-900"
                style={{ fontFamily: "Noto Serif Display, serif" }}>
                {lang === "no" ? "Smart vekst for din bedrift" : "Smart Growth for Small Teams"}
                {lang === "no" ?
                <span className="block text-sm md::text-base italic text-gray-800 mt-1">
                  - Små endringer, store resultater
                </span> :

                <span className="block text-sm md::text-base italic text-gray-800 mt-1">
                    Less stress, more progress — AI that keeps your business lean and moving forward.
                  </span>
                }
              </h2>
              {lang !== "no" && <div className="border-t border-gray-300 mt-3 mb-2" />}
              {/* Removed NO teaser sentence under heading */}
             {lang !== "no" ?
              <>
                <p className="text-base md::text-lg text-gray-800 leading-relaxed mt-2">
                  If repetitive tasks drain your team’s energy — or if growth feels tied to hiring more people — you’re not alone.
                </p>
                <p className="text-base md::text-lg text-gray-800 leading-relaxed mt-2">
                  Many small businesses are experimenting with AI, but few achieve the results they hoped for.
                </p>
                <p className="text-base md::text-lg text-gray-800 leading-relaxed mt-2">
                  We build on years of strategic and operational experience, adding a layer of applied intelligence that helps your business grow smarter.
                </p>
                <p className="text-base md::text-lg text-gray-800 leading-relaxed mt-2">
                  We bring the extra degree of insight to identify where your company has the greatest potential to save time, reduce costs, and strengthen performance. Sometimes that means creating a quick prototype to test value before you commit. Other times it’s automation that removes routine work, or training that helps your team feel confident and aligned with the tools you already use.
                </p>
                <p className="text-base md::text-lg text-gray-800 leading-relaxed mt-2">
                  The result? Less frustration. Smoother workdays. A business that feels more professional — and ready to grow. And because we stay with you through the changes, the improvements actually stick.
                </p>
                  <div className="mt-4 border-2 border-orange-600 bg-white p-4">
                    <div className="text-base font-semibold text-gray-900 mb-2">Why Work With Us</div>
                    <ul className="list-disc pl-5 space-y-1 text-gray-800">
                      <li>Save hours every week with smart automations.</li>
                      <li>Win more business with faster, simpler bids.</li>
                      <li>Improve customer satisfaction by removing friction.</li>
                      <li>Test new ideas through prototypes that prove value quickly.</li>
                      <li>Train your team to work smarter — and more in sync.</li>
                      <li>Lead growth instead of chasing tasks.</li>
                    </ul>
                  </div>
                </> :

              <>
                <p className="text-base md::text-lg text-gray-800 leading-relaxed mt-2">Hvis du kjenner at gjentakende oppgaver tapper teamet for energi, eller at vekst virker avhengig av å ansette flere, er du ikke alene. Mange små og mellomstore virksomheter venter fortsatt med å ta i bruk ny teknologi – men mister forspranget som de raskeste allerede har tatt.

                </p>
                <p className="text-base md::text-lg text-gray-800 leading-relaxed mt-2">Det er her ThreeSixtyOne kommer inn. Vi bygger på mange års strategisk og operasjonell erfaring, og legger til et lag av anvendt intelligens som hjelper deg å vokse smartere – ikke bare raskere. Vi finner områdene der intelligens faktisk sparer tid og penger, og gjør det om til målbare forbedringer. Noen ganger handler det om en prototype for å teste verdien før du investerer. Andre ganger om automatisering som fjerner rutinearbeid. Eller opplæring som gjør teamet tryggere og mer samkjørt med verktøyene dere allerede bruker.

                </p>
                <p className="text-base md::text-lg text-gray-800 leading-relaxed mt-2">
                  Resultatet? Mindre frustrasjon, jevnere arbeidsdager og en bedrift som føles mer profesjonell – og klar til å vokse.
                </p>

                <div className="mt-4 border-2 border-orange-600 bg-white p-4">
                  <div className="text-base font-semibold text-gray-900 mb-2">Hvorfor jobbe med oss:</div>
                  <ul className="list-disc pl-5 space-y-1 text-gray-800">
                    <li>Spar timer hver uke med smarte automatiseringer.</li>
                    <li>Vinn flere anbud med raskere og enklere prosesser.</li>
                    <li>Øk kundetilfredsheten ved å fjerne friksjon.</li>
                    <li>Test nye ideer gjennom prototyper som raskt viser verdi.</li>
                    <li>Løft kompetansen – og få teamet til å jobbe mer i takt.</li>
                    <li>Frigjør deg selv til å lede vekst, i stedet for å jage oppgaver.</li>
                  </ul>
                </div>
              </>
              }

              {/* Quote */}
              <blockquote className="mt-6 italic text-gray-800">
                <div className="relative">
                  <Quote className="absolute -top-1 -left-1 h-8 w-8 text-orange-600" />
                  <p className="pl-8">
                    {lang === "no" ?
                    "“Han fikk oss til å velge riktig vei, riktig løsning og riktig opplæring. Han er entusiastisk, hjelpsom og alltid tilgjengelig.”" :
                    "“He made us choose the right path, the right solution, and the right training. He is enthusiastic, helpful, and always available.”"}
                  </p>
                  <span className="block mt-2 not-italic font-semibold text-gray-900">— Joakim Krogstad, POB Entreprenør</span>
                </div>
              </blockquote>
              {/* Replace previous link with heading + subtext + arrow link, spaced further down */}
              <div className="mt-10 space-y-1">
                <h3 className="text-gray-900 text-3xl font-semibold text-center md:text-2xl"

                style={{ fontFamily: "Noto Serif Display, serif" }}>

                  {lang === "no" ? "9 råd om AI-bruk" : "9 Tips for Smarter AI Use"}
                </h3>
                <p className="text-gray-700 text-sm text-center md:text-base">
                  {lang === "no" ? "Disse smarte tipsene kan være nyttige." : "Some advice for implementing AI in your business."}
                </p>
                <div className="flex justify-center">
                  <Link
                    to={createPageUrl("PracticalUseCases") + "#ai-facts"}
                    className="text-orange-600 font-semibold underline underline-offset-2 inline-flex items-center hover:text-orange-700">
                    <ArrowRight className="w-4 h-4 mr-1" />
                    9 tips
                  </Link>
                </div>
              </div>
            </article>

            {/* Right: Sparking Ideas With Your Teams */}
            <article className="pl-0 md:pl-4">
              <div className="text-xs uppercase font-semibold text-orange-600 mb-1">
                {lang === "no" ? "FOR STØRRE BEDRIFTER" : "FOR LARGER ORGANIZATIONS"}
              </div>
              <h2
                className="text-2xl font-semibold text-gray-900"
                style={{ fontFamily: "Noto Serif Display, serif" }}>
                {lang === "no" ? "Skalering av suksess med AI" : "Scaling Enterprise Success with AI"}
                {lang === "no" ?
                <span className="block text-sm md::text-base italic text-gray-800 mt-1">
                    - Skarpere strategi, smidigere arbeidsflyt og team som drar i samme retning.
                  </span> :

                <span className="block text-sm md::text-base italic text-gray-800 mt-1">
                    Sharper strategy, smoother workflows, and teams pulling in the same direction.
                  </span>
                }
              </h2>
              {lang !== "no" && <div className="border-t border-gray-300 mt-3 mb-2" />}
              {/* Updated NO copy; keep EN as before */}
              {lang === "no" ?
              <>
                  <p className="mt-2 text-base md::text-lg text-gray-800 leading-relaxed">
                    I store organisasjoner er presset det samme: spar tid, reduser kostnader og frigjør kapasitet.
                    Ledere kommer til oss når de vil lette dette presset – og gi teamene rom til å fokusere på det som virkelig betyr noe.
                  </p>
                  <p className="text-base md::text-lg text-gray-800 leading-relaxed mt-2">Med flere tiår i internasjonal toppledelse forstår vi kompleksiteten bak alle buzzordene. Vi skaper klarhet, finner muligheter til å redusere unødvendig arbeid, effektivisere styringsprosesser og verdiskaping. Vi stopper ikke ved ideene. Vi hjelper å bygge løsninger som kan implementeres, skaleres og vedlikeholdes – i praksis.

                </p>
                  <p className="text-base md::text-lg text-gray-800 leading-relaxed mt-2">Vi hjelper også ledelse og avdelinger med å bygge trygghet og felles forståelse for hvordan utvidet intelligens kan brukes strategisk – fra enkeltstående eksperimenter til en samlet tilnærming på tvers av organisasjonen.
Resultatet er bedre samspill, mindre støy og målbare resultater som varer.
                </p>

                  <div className="mt-4 border-2 border-orange-600 bg-white p-4">
                    <div className="text-base font-semibold text-gray-900 mb-2">Hvorfor jobbe med oss:</div>
                    <ul className="list-disc pl-5 space-y-1 text-gray-800">
                      <li>Spar tid i administrasjon, rapportering og beslutningsprosesser.</li>
                      <li>Skap ny verdi fra eksisterende data og systemer.</li>
                      <li>Gi ledere og team praktisk opplæring i utvidet intelligens.</li>
                      <li>Samkjør bruken av ny intelligens på tvers av organisasjonen for større effekt.</li>
                      <li>Gå fra idé til handling med prototyper.</li>
                      <li>Øk produktiviteten dramatisk og reduser kostnader.</li>
                    </ul>
                  </div>
                </> :


              <>
                  {/* The content for this paragraph has been moved into the h2 as a subtitle span */}
                  <p className="text-base md::text-lg text-gray-800 leading-relaxed mt-2">In large organizations, the pressure is always the same: save time, cut costs, and free capacity. Leaders come to us when they want to ease that pressure and give their teams the space to focus on what truly matters.

                </p>
                  <p className="text-base md::text-lg text-gray-800 leading-relaxed mt-2">With decades of international leadership experience, we understand the complexity behind the buzzwords. We bring clarity and direction, uncover opportunities to reduce wasted effort, shorten the path from idea to decision, and unlock new value.

                </p>
                  <p className="text-base md::text-lg text-gray-800 leading-relaxed mt-2">We help you turn strategies into scalable solutions — ones your IT teams can actually implement, maintain, and grow. We also help leadership and departments build confidence and alignment around how augmented intelligence is applied across the organization — moving from scattered experiments to a unified, lasting approach. The result is more alignment, less friction, and measurable outcomes that endure.

                </p>
                </>
              }

              {/* Orange value box (EN version unchanged) */}
              {lang === "no" ? null :
              <>
                  <div className="mt-4 border-2 border-orange-600 bg-white p-4">
                    <div className="text-base font-semibold text-gray-900 mb-2">Why Work With Us</div>
                    <ul className="list-disc pl-5 space-y-1 text-gray-800">
                      <li>Save hours in admin, reporting and decision-making.</li>
                      <li>Generate new value from existing data and systems.</li>
                      <li>Equip leaders and teams with practical training.</li>
                      <li>Synchronize AI use across the organization for bigger impact.</li>
                      <li>Go from idea to action with prototypes.</li>
                      <li>Dramatically increase productivity and reduce costs.</li>
                    </ul>
                  </div>
                </>
              }

              {/* Quote */}
              <blockquote className="mt-6 italic text-gray-800">
                <div className="relative">
                  <Quote className="absolute -top-1 -left-1 h-8 w-8 text-orange-600" />
                  <p className="pl-8">
                    {lang === "no" ?
                    "“Å jobbe med Henrik er en stor læreopplevelse ... leverer smartere, sikrere, mer effektive og hyggelige løsninger med klare resultater.”" :
                    "“Working with Henrik is a great learning experience… delivering smarter, safer, more efficient, and enjoyable solutions with clear outcomes.”"}
                  </p>
                  <span className="block mt-2 not-italic font-semibold text-gray-900">— Kristin Ruud, Telenor</span>
                </div>
              </blockquote>
            </article>
          </div>

          {/* Vertical divider style between the two columns */}
          <style>{`
            .main-articles-grid { position: relative; }
            @media (min-width: 768px) {
              .main-articles-grid::before {
                content: "";
                position: absolute;
                top: 0;
                bottom: 0;
                left: 50%;
                width: 1px;
                background: #e5e7eb; /* slate-200 */
                transform: translateX(-0.5px);
              }
            }
          `}</style>
        </section>

        {/* Newspaper divider below the parallel articles */}
        <div className="newspaper-divider my-6"></div>

        {/* Our Philosophy + CTA (kept below, outside the frame) */}
        <section id="philosophy" className="mb-10">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left column: Henrik portrait */}
            <div>
              <ImageWithFallback
                src="https://qtrypzzcjebvfciynt.supabase.co/storage/v1/object/public/base44-prod/public/68a59a4990a82f121fd2e394/5ac7e55ea_IMG_5949.jpg"
                alt={lang === "no" ? "Portrett – nærbilde" : "Close-up portrait"}
                className="w-full object-contain h-auto max-h-80 md:max-h-96"
                style={{ objectPosition: "center" }} />

            </div>

            {/* Right column: Updated intro + CTA */}
            <div>
              <h2
                className="text-2xl font-semibold text-gray-900"
                style={{ fontFamily: "Noto Serif Display, serif" }}>

                {lang === "no" ? "En kaffe med Henrik" : "A Coffee with Henrik"}
              </h2>

              {/* Copy per language */}
              {lang === "no" ?
              <>
                  <p className="mt-2 text-base md::text-lg text-gray-800 leading-relaxed">
                    Med 25 års ledererfaring fra selskaper som Microsoft, Circle K, Coca-Cola og flere oppstartsbedrifter, kombinerer Henrik nå sin ledelsesbakgrunn med solid, praktisk AI-kompetanse.
                  </p>
                  <p className="mt-3 text-base md::text-lg text-gray-800 leading-relaxed">
                    I dette intervjuet forklarer han hvorfor så mange AI-initiativer stopper opp, hvor den reelle avkastningen ligger – og hvordan ledere kan tette gapet mellom små piloter og varig forretningsverdi.
                  </p>
                </> :

              <>
                  <p className="mt-2 text-base md::text-lg text-gray-800 leading-relaxed">
                    With 25 years of leadership experience at Microsoft, Circle K, Coca-Cola, and successful startups, Henrik now combines his business background with deep, hands-on AI expertise.
                  </p>
                  <p className="mt-3 text-base md::text-lg text-gray-800 leading-relaxed">
                    In this interview, he explains why so many AI initiatives stall, where the real ROI can be found, and how leaders can bridge the gap between pilots and lasting business value.
                  </p>
                </>
              }

              <div className="mt-4">
                <Link to={createPageUrl("PracticalUseCases") + "#coffee-interview"} className="cta-button-outline inline-flex items-center">
                  {lang === "no" ? "Les mer" : "Read the Interview:"}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Horizontal pull quote moved lower to sit closer to the global "Next →" */}
        <div className="max-w-7xl mx-auto px-10 sm:px-6 lg:px-8 mt-10 md:mt-14">
          <figure className="border-y-2 border-black py-4">
            <blockquote
              className="text-gray-900 text-base md:text-lg italic text-center"
              style={{ fontFamily: "Noto Serif Display, serif" }}>
              {lang === "no" ?
              <>“Han utfordrer, og inspirerer deg til å tenke nytt – akkurat det vi trengte da AI gjorde sitt inntog.”</> :

              <>
                  “He challenges and inspires you to think in new ways
                  <br />
                  — exactly what’s needed in the AI era.”
                </>
              }
            </blockquote>
            <figcaption className="mt-2 text-sm text-gray-700 text-center">
              — Gøran André Hansen, Statsbygg
            </figcaption>
          </figure>
        </div>

        {/* Removed 'What we offer' section; see new Offers page */}

        {/* Removed 'Use Cases' from Home — moved to Practical Use Cases page */}

        {/* Hero Section - Updated to Two Columns (now one column) */}
        <div className="hidden">
          {/* Column 2 (expanded to full width) */}
          <div className="md:col-span-2">
            <div className="pt-6 h-full flex flex-col">
              <ImageWithFallback
                src="https://qtrypzzcjebvfciynt.supabase.co/storage/v1/object/public/base44-prod/public/68a59a4990a82f121fd2e394/5ac7e55ea_IMG_5949.jpg"
                alt={
                lang === "no" ? "Portrett – nærbilde" : "Close-up portrait"
                }
                className="hidden md:block w-full mb-6 object-contain h-auto max-h-80 md:max-h-96"
                style={{ objectPosition: "center" }} />

              <div className="text-xs uppercase font-semibold text-gray-500 mb-2">
                {lang === "no" ? "FRA FELTET" : "OUR 7 STEPS TO SUCCESS"}{" "}
                <span className="text-gray-300 mx-1">|</span>{" "}
                {lang === "no" ? "HENRIKS INNSIKT" : "PROVEN METHOD"}
              </div>
              <h1
                className="text-3xl font-bold text-gray-900 mb-1 leading-tight"
                style={{ fontFamily: "Noto Serif Display, serif" }}>

                {lang === "no" ? "Utfordringer og muligheter" : "Why Companies Work With Us"}
              </h1>
              <div className="flex flex-col flex-grow">
                <p className="text-base text-gray-700 mb-3 leading-relaxed">
                  {lang === "no" ?
                  "Vi følger vi en simpel, men effektiv arbeidsprosess på 7 steg. Den har vi opparbeidet oss gjennom prøving og feiling. De 7 stegene sikrer klarhet, åpenhet og resultater – samtidig som den ansatte fortsatt styrer arbeidet. AI gjør den tunge jobben, mens folk overvåker og forbedrer arbeidet gjennom alle steg." :
                  "We don’t believe in hype or one-size-fits-all solutions. We focus on clarity, speed, and real results. Whether you’re just starting out or scaling across departments, we help you see opportunities and solve them fast."}
                </p>
                {lang !== "no" &&
                <>
                    <div className="text-sm text-gray-900 font-medium">With ThreeSixtyOne, you can expect:</div>
                    <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1 mt-2">
                      <li>Clear strategies that connect opportunities to business goals.</li>
                      <li>Prototypes that prove value before big investments.</li>
                      <li>A practical partner who knows how to turn pilots into lasting impact.</li>
                    </ul>
                  </>
                }
               <div className="mt-2">
                 <Link to={createPageUrl("Our7Steps")} className="cta-button-outline inline-flex items-center">
                   {lang === "no" ? "Våre 7 steg til effektive prosesser" : "Our 7 steps"}
                 </Link>
               </div>
              </div>
            </div>
          </div>
        </div>

        {/* Removed '15 erfaringer med AI' teaser section and CTA */}
        
        {/* Removed extra decorative divider to keep only the line under the photo */}

        {/* Offerings: Three Main Pillars */}
        <div
          id="workshops-training"
          className="services-section hidden mb-12 border-2 border-black p-6 bg-white">

          <div className="border-t-4 border-black pt-6 text-center">
            <h2
              className="text-gray-950 mb-8 pb-3 text-4xl lg:text-5xl font-bold border-b-4 border-black"
              style={{ fontFamily: "Noto Serif Display, serif" }}>

              {lang === "no" ? "Tjenester vi tilbyr" : "We're Here to Help Your Business Thrive"}
            </h2>
          </div>
          <div className="services-grid gap-8 items-stretch">
            {/* 1) Build & Automatiser */}
            <div className="service-card">
              <OfferingCard
                title={lang === "no" ? "Bygg & Automatiser" : "Build & Automate"}
                subtitle={lang === "no" ? "Arbeidsflyt‑automatisering og skreddersydde SMB‑applikasjoner" : "Workflow automation and bespoke SMB applications"}>

                {lang === "no" ?
                <>
                    <p className="text-sm text-gray-900 font-medium">
                      We help SMB‑er å gå fra manuelt til automatisert på en strukturert, gjennomprøvd måte.
                    </p>
                    <ul className="list-disc pl-5 text-sm text-gray-800 space-y-1">
                      <li>Automatisering av arbeidsflyt som sparer timer og reduserer kostnader</li>
                      <li>Skreddersydde apper: raske prototyper og dedikerte verktøy</li>
                    </ul>
                    <div className="mt-2">
                      <Link
                      to={createPageUrl("Contact")}
                      className="inline-flex items-center text-sm font-semibold text-orange-600 hover:text-orange-700 underline underline-offset-2">

                        {t("cta.lets_connect")}
                      </Link>
                    </div>
                  </> :

                <>
                    <p className="text-sm text-gray-900 font-medium">
                      We help SMBs move from manual to automated in a structured, proven way.
                    </p>
                    <ul className="list-disc pl-5 text-sm text-gray-800 space-y-1">
                      <li>Workflow automation that saves hours and reduces costs</li>
                      <li>Bespoke applications: rapid prototypes and dedicated tools</li>
                    </ul>
                    <div className="mt-2">
                      <Link
                      to={createPageUrl("Contact")}
                      className="inline-flex items-center text-sm font-semibold text-orange-600 hover:text-orange-700 underline underline-offset-2">

                        {t("cta.lets_connect")}
                      </Link>
                    </div>
                  </>
                }
              </OfferingCard>
            </div>

            {/* 2) Problem‑Solving & Strategic Utforskning */}
            <div className="service-card">
              <OfferingCard
                title={lang === "no" ? "Problemløsning & Strategisk Utforskning" : "Problem‑Solving & Strategic Exploration"}
                subtitle={lang === "no" ? "Workshops, lederdialoger og sprinter" : "Workshops, leadership discussions, and sprints"}>

                {lang === "no" ?
                <>
                    <p className="text-sm text-gray-900 font-medium">
                      Vi jobber med lederteam for å avdekke muligheter og teste løsninger raskt — så dere kan bestemme hva som er verdt å bygge.
                    </p>
                    <p className="text-sm text-gray-700">
                      Formål: Identifisere muligheter, løse utfordringer og prototype tidlig — før dere investerer.
                    </p>
                    <p className="text-sm text-gray-60">
                      Dette henger naturlig sammen med reelle use cases. Vi fasiliterer fokuserte økter for klarhet og raske bevis på verdi.
                    </p>
                    <Link
                    to={createPageUrl("UseCaseExamples")}
                    className="inline-flex items-center text-sm font-semibold text-orange-600 hover:text-orange-700 underline underline-offset-2 mt-2">

                      Eksempler på bruksområder…
                    </Link>
                  </> :

                <>
                    <p className="text-sm text-gray-900 font-medium">
                      We work with leadership teams to uncover opportunities and test solutions fast — so you can decide what’s worth building.
                    </p>
                    <p className="text-sm text-gray-700">
                      Purpose: Identify opportunities, solve challenges, and prototype early — before you invest.
                    </p>
                    <p className="text-sm text-gray-600">
                      This pillar naturally connects with your real use cases explored above. We facilitate focused sessions to surface clarity and fast proofs of value.
                    </p>
                    <Link
                    to={createPageUrl("UseCaseExamples")}
                    className="inline-flex items-center text-sm font-semibold text-orange-600 hover:text-orange-700 underline underline-offset-2 mt-2">

                      Examples of Use Cases To Get You Thinking…
                    </Link>
                  </>
                }
              </OfferingCard>
            </div>

            {/* 3) Training & Coaching (AI Mastery) */}
            <div className="service-card">
              <OfferingCard
                title={lang === "no" ? "Trening for AI‑mestring" : "Training for AI Mastery"}
                subtitle={lang === "no" ? "For SMB‑er og team på alle modenhetsnivåer" : "For SMBs and teams at any AI‑maturity level"}>

                {lang === "no" ?
                <>
                    <p className="text-sm text-gray-700">
                      Dette handler om å lære å bruke AI‑verktøy effektivt for ad hoc problemløsning, tenkning og utfordring.
                    </p>
                    <div className="mt-4 border-t border-gray-200 pt-4">
                      <div className="space-y-3">
                        <div>
                          <div className="text-sm text-gray-900 font-medium">Inspirasjonsøkter (skreddersydd, idé‑skapende)</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-900 font-medium">Bli vant til AI (praktisk adopsjon & daglige vaner)</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-900 font-medium">Mestre AI (coaching for å bruke AI som utfordrer)</div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <Link
                      to={createPageUrl("Contact")}
                      className="inline-flex items-center text-sm font-semibold text-orange-600 hover:text-orange-700 underline underline-offset-2">

                        {t("cta.lets_connect")}
                      </Link>
                    </div>
                  </> :

                <>
                    <p className="text-sm text-gray-700">
                      This is about learning how to interact with AI tools effectively for ad hoc problem‑solving, thinking, and challenging.
                    </p>
                    <div className="mt-4 border-t border-gray-200 pt-4">
                      <div className="space-y-3">
                        <div>
                          <div className="text-sm text-gray-900 font-medium">Inspiration Sessions (tailored, idea‑sparking)</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-900 font-medium">Getting Used to AI (practical adoption & daily habits)</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-900 font-medium">Mastering AI (coaching to leverage AI as a challenge partner)</div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <Link
                      to={createPageUrl("Contact")}
                      className="inline-flex items-center text-sm font-semibold text-orange-600 hover:text-orange-700 underline underline-offset-2">

                        {t("cta.lets_connect")}
                      </Link>
                    </div>
                  </>
                }
              </OfferingCard>
            </div>

            {/* Standalone pull quote to the right of Training (desktop), below Problem‑Solving */}
            <div className="services-testimonial lg:row-start-2">
              <SinglePullQuote
                quote={pullQuotes[2]} // Fixed: Using the quote from the array to avoid duplication
                align="left" />

            </div>
          </div>
          <style>{`
            .services-section { max-width:100vw; overflow-x:hidden; box-sizing:border-box; }
            .services-grid { display:grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap:24px; }
            @media (max-width: 768px) {
              .services-grid { grid-template-columns: 1fr; }
            }
            .services-testimonial { grid-column: 1 / -1; max-width: 100%; }
          `}</style>
        </div>

        {/* Removed extra dashed divider to avoid multiple lines under the photo */}

        {/* Preserve old anchor for navigation compatibility */}
        <div id="build-implement" className="sr-only" aria-hidden="true"></div>
      </div>

      <style>{`
          /* Newspaper Dividers */
          .newspaper-divider-double {
            height: 2px;
            background: black;
            position: relative;
            margin: 2rem 0;
          }

          .newspaper-divider-double::before {
            content: '';
            position: absolute;
            top: 5px;
            left: 0;
            right: 0;
            height: 2px;
            background: black;
          }

          .newspaper-divider-dashed {
            border-top: 2px dashed black;
            margin: 2rem 0;
          }

          .newspaper-divider {
            border-top: 2px solid black;
            margin: 2rem 0;
          }
        `}</style>
    </div>);

}
