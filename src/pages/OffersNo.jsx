
import React from "react";
import { useLanguage } from "@/components/i18n/LanguageContext";
import { useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function OffersNo() {
  const { lang } = useLanguage();
  const navigate = useNavigate();

  // Redirect English users away from the Norwegian page
  React.useEffect(() => {
    if (lang !== "no") {
      navigate(createPageUrl("Offers"), { replace: true });
    }
  }, [lang, navigate]);

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        <header className="mb-6">
          <h1
            className="text-left md:text-center text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
            style={{ fontFamily: "Noto Serif Display, serif" }}
          >
            Strategi, innovasjon & prototyper
          </h1>
          <div className="text-left space-y-3 text-base md:text-lg text-gray-800 mt-6">
            <p className="text-gray-900">
              Vi kombinerer strategisk styrke med faktiske AI leveranser. Vi bidrar ikke bare med innsikt, analyser og anbefalinger – vi leverer fungerende prototyper som kan testes og videreutvikles før en eventuell skalering. Resultatene blir bedre, rimeligere og langt mer bærekraftige.
            </p>
            <p>Her er noen eksempler på hva vi jobber med – strukturert etter de vanligste utfordringene bedrifter har.</p>
          </div>
        </header>

        {/* 1) Strategi og AI-forankring */}
        <section className="mb-12 border border-gray-200 rounded-lg bg-white/70 shadow-sm p-4 md:p-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3" style={{ fontFamily: "Noto Serif Display, serif" }}>
            Strategi og AI-forankring
          </h2>
          <div className="prose prose-sm max-w-none text-gray-800">
            <p>Hvordan passer AI inn i strategien vår? Hva er realistisk  å oppnå– og hvordan kan endringen best ledes.</p>
            <p><strong>Bedriftene vi snakker med stiller ofte spørsmål som:</strong></p>
            <ul>
              <li>«Er vi egentlig klare, eller risikerer at investeringen feiler? Hvor ligger våre største risikoer – og enkleste gevinster?»</li>
              <li>«Hvordan skaper vi en verdiful strategi, og ikke bare en liste med tilfeldige eksperimenter?»</li>
              <li>«Hvordan kan jeg gi teamet mitt handlingsrom til å bruke AI-verktøy uten sikkerhetsrisiko eller strategisk kaos?»</li>
            </ul>
          </div>

          <div className="mt-4 grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900">Utvikling av strategi og veikart</h3>
              <p className="text-sm text-gray-800 mt-1">
                Vi definerer en tydelig retning som kobler AI-satsingen til virksomhetens overordnede mål.
              </p>
              <p className="text-sm text-gray-700 mt-1">Eksempler: 6–12 måneders veikart, eierskap og ROI-prognose.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Rammeverk for styring og risiko</h3>
              <p className="text-sm text-gray-800 mt-1">
                Vi etablerer enkle, effektive retningslinjer for trygg og ansvarlig bruk av AI.
              </p>
              <p className="text-sm text-gray-700 mt-1">
                Eksempler: retningslinjer for AI-bruk, datasikkerhets-protokoller og GDPR-etterlevelse.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">AI-modenhets-analyse</h3>
              <p className="text-sm text-gray-800 mt-1">
                Vi identifiserer bedriftens forbedringspotensiale.
              </p>
              <p className="text-sm text-gray-700 mt-1">
                Eksempler: vurdering av team, modenhet, teknologiske gap og risikoer.
              </p>
            </div>
          </div>
        </section>

        {/* 2) Identifisering av muligheter og definering av use cases */}
        <section className="mb-12 border border-gray-200 rounded-lg bg-white/70 shadow-sm p-4 md:p-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3" style={{ fontFamily: "Noto Serif Display, serif" }}>
            Identifisering av muligheter og definering av use cases
          </h2>
          <div className="prose prose-sm max-w-none text-gray-800">
            <p>Når ledelsen er klar til å handle, oppstår neste utfordring: å forstå hvor AI vil utgjøre størst forskjell.</p>
            <p><strong>Mange virksomheter spør seg:</strong></p>
            <ul>
              <li>«Hvor bør vi starte med AI – uten å kaste bort ressurser på feil initiativer?»</li>
              <li>«Hvordan går vi fra idé til å teste den konkret?»</li>
              <li>«Hvilke av våre svake områder egner seg best for AI-baserte løsninger?»</li>
            </ul>
          </div>

          <div className="mt-4 grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900">As-Is-Analyse</h3>
              <p className="text-sm text-gray-800 mt-1">
                Vi starter med å kartlegge hva som fungerer i et team eller en funksjon – og hva som ikke fungerer. Eksisterende data og innsikt danner grunnlag for forbedring.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Prioriterte AI-muligheter</h3>
              <p className="text-sm text-gray-800 mt-1">
                Deretter finner og prioriterer vi områdene der AI kan skape størst forretningsverdi.
              </p>
              <p className="text-sm text-gray-700 mt-1">
                Eksempler: 3–5 prioriterte use cases per avdeling, tydelige business cases og prototyper klare for testing.
              </p>
            </div>
          </div>
        </section>

        {/* 3) Akselerer Verdiskaping */}
        <section className="mb-12 border border-gray-200 rounded-lg bg-white/70 shadow-sm p-4 md:p-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3" style={{ fontFamily: "Noto Serif Display, serif" }}>
            Akselerer verdiskaping
          </h2>
          <div className="prose prose-sm max-w-none text-gray-800">
            <p>For mange team er presset stort for å levere målbare resultater raskt — kunstig intelligens kan bidra til å frigjøre nytt potensial.</p>
            <p><strong>Ledere innen salg, markedsføring og drift stiller ofte spørsmål som:</strong></p>
            <ul>
              <li>«Hvordan kan vi finne bedre leads og bruke mindre tid på administrasjon?»</li>
              <li>«Hvorfor bruker vi fortsatt tid på manuelle rapporter og dataregistrering?»</li>
              <li>«Hvordan kan vi øke kunde-tilfredshet og responstid hos kundeservice?»</li>
            </ul>
          </div>

          <div className="mt-4 grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900">Vinn Flere Anbud</h3>
              <p className="text-sm text-gray-800 mt-1">Smartere lead-generering og mer effektiv kommunikasjon:</p>
              <ul className="list-disc pl-5 text-sm text-gray-800 space-y-1 mt-2">
                <li>Automatisert overvåking av anbud</li>
                <li>Kundedata- og innsiktssystemer</li>
                <li>Automatisert markedsførings-plattform</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Øk Effektiviteten</h3>
              <p className="text-sm text-gray-800 mt-1">Identifisering av arbeidsprosesser som kan automatiseres:</p>
              <ul className="list-disc pl-5 text-sm text-gray-800 space-y-1 mt-2">
                <li>Automatisering av finansiell rapportering</li>
                <li>Verktøy for intelligente møter</li>
                <li>Interaktive styrings-dashbord</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Bygg kompetente og trygge team</h3>
              <p className="text-sm text-gray-800 mt-1">
                Sørg for at teamene faktisk tar i bruk løsningene – med riktig opplæring og støtte.
              </p>
            </div>
          </div>
        </section>

        {/* 4) Bygg kompetente og trygge team */}
        <section className="mb-12 border border-gray-200 rounded-lg bg-white/70 shadow-sm p-4 md:p-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3" style={{ fontFamily: "Noto Serif Display, serif" }}>
            Bygg kompetente og trygge team
          </h2>
          <div className="prose prose-sm max-w-none text-gray-800">
            <p>Reell transformasjon skjer først når mennesker føler seg trygge og kompetente – ikke når teknologien styrer alene.</p>
            <p><strong>Mange ledere stiller spørsmål som:</strong></p>
            <ul>
              <li>«Hvordan får jeg mine ansatte til å bruke AI effektivt?»</li>
              <li>«Hvilke AI-ferdigheter trengs egentlig – ikke bare generelle kurs?»</li>
              <li>«Hvordan kan vi innføre og ufarliggjøre AI på en inspirerende, måte?»</li>
            </ul>
          </div>

          <div className="mt-4 grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900">Workshops for ledergrupper og styre</h3>
              <p className="text-sm text-gray-800 mt-1">Bygg felles forståelse for muligheter og risikoer med AI.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Strategi for toppledelse</h3>
              <p className="text-sm text-gray-800 mt-1">Opplæring i hvordan vurdere og styre AI-initiativer</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Praktisk opplæring av team</h3>
              <p className="text-sm text-gray-800 mt-1">Praktiske økter som øker trygghet i bruk av AI.</p>
              <ul className="list-disc pl-5 text-sm text-gray-800 space-y-1 mt-2">
                <li>Skreddersydde moduler for hver avdeling</li>
                <li>Bedriftsomfattende programmer</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5) Løpende Rådgivning og Innovasjon */}
        <section className="mb-12 border border-gray-200 rounded-lg bg-white/70 shadow-sm p-4 md:p-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3" style={{ fontFamily: "Noto Serif Display, serif" }}>
            Løpende rådgivning og innovasjon
          </h2>
          <div className="prose prose-sm max-w-none text-gray-800">
            <p>Innovasjon stopper ikke når systemene er på plass — fremoverlente ledere følger utvikling, er oppdaterte og ser nye løsninger.</p>
            <p><strong>Ledere stiller spørsmål som:</strong></p>
            <ul>
              <li>«Hvordan holder vi farten i dette AI-landskapet?»</li>
              <li>«Hvem kan vi stole på for uavhengige og praktiske råd?»</li>
              <li>«Hvordan kan vi utforske nye ideer samtidig som kjernevirksomheten opprettholdes?»</li>
            </ul>
          </div>

          <div className="mt-4 grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900">Strategisk Rådgivning</h3>
              <p className="text-sm text-gray-800 mt-1">Fleksibel støtte, kontinuerlig veiledning og leverandørvurdering.</p>
              <ul className="list-disc pl-5 text-sm text-gray-800 space-y-1 mt-2">
                <li>Kvartalsvise gjennomganger</li>
                <li>Uavhengige vurderinger av verktøy og partnere</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Innovasjons-sprinter</h3>
              <p className="text-sm text-gray-800 mt-1">Raske og kreative prosesser for å utforske og teste nye ideer.</p>
              <ul className="list-disc pl-5 text-sm text-gray-800 space-y-1 mt-2">
                <li>Oppdag nye inntektsstrømmer</li>
                <li>Bygg prototyper på én uke</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
