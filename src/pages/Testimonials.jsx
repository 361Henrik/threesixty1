
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { useLanguage } from "@/components/i18n/LanguageContext";
import NewspaperTestimonial from "@/components/home/NewspaperTestimonial";
import { testimonialsData } from "@/components/home/testimonialsData";
import { testimonialsDataEn } from "@/components/home/testimonialsDataEn";

export default function Testimonials() {
  const { lang } = useLanguage();

  // Norsk innhold (kun for Referanser-siden)
  const testimonialsNo = [
    {
      text:
        "Henrik Høst lærte meg å bruke AI. Det han lærte meg var hvordan både AI og jeg blir smartere ved å coache maskinen. Henrik er mannen som med kunnskap, innsikt og kreativitet får menneskets møte med maskinen til å bli en kraftfull dans. Der begge takker for dansen etterpå.",
      author: "Kjell Terje Ringdal",
      role: "Førstelektor i retorikk og samfunnspåvirkning"
    },
    {
      text:
        "Henrik har både vært min kollega, min leder og senere støttet meg og organisasjonen som konsulent og lederutvikler. Fellesnevneren i alle disse rollene er hans enorme energi og evne til å se mennesker, tydeliggjøre problemer og skape både fokus og fremdrift. Han kombinerer nysgjerrighet med strukturert tenkning, veksler sømløst mellom helikopterperspektiv og detaljfokus, og omsetter ideer til innsikt og gjennomføring på en måte få andre klarer.",
      author: "Børge Hansen",
      role: "CEO, Davidhorn"
    },
    {
      text:
        "Henrik kombinerer sin lange ledererfaring med koding- og AI-kompetanse på en måte som gjør ham unik. Han møter nye problemstillinger med nysgjerrighet på en helt ny vitenskap – og skaper entusiasme og trygghet rundt løsningene. Alltid dedikert, alltid med kvalitet og smittende entusiasme.",
      author: "Ove A. Tysnes",
      role: "Rådgiver, Liwlig"
    },
    {
      text:
        "Jeg har hatt gleden av å jobbe tett med Henrik flere ganger, spesielt høsten 2023. Han er utrolig dyktig til å utfordre, inspirere og få deg til å tenke nytt – akkurat det jeg trengte da generativ AI gjorde sitt inntog. Henrik er en person jeg gjerne samarbeider med igjen, og som jeg trygt kan anbefale til andre.",
      author: "Gøran André Hansen",
      role: "Chief Technology Architect, Statsbygg"
    },
    {
      text:
        "Henrik er dyktig og forsto tidlig hvordan vi som selskap kunne få verdi ved å ta i bruk AI. Han bidro med erfaring og innsikt som gjorde at vi valgte riktig vei inn, riktig løsning og riktig opplæring. Han er entusiastisk, hjelpsom og alltid tilgjengelig, og har brukt mye tid på å sikre at vi lykkes. For oss har han vært det pushet vi trengte for å komme i gang med AI på en trygg og verdifull måte.",
      author: "Joakim Krogstad",
      role: "Chief Technology Officer, POB Entreprenør"
    },
    {
      text:
        "Henrik er en ekte transformasjonsleder med en sjelden evne til å skape energi, retning og resultater – alltid med mennesker i sentrum. Vi jobbet sammen i Microsoft Norges ledergruppe. Han kombinerer dyp forretningsforståelse med teknologisk innsikt, og evner å gjøre komplekse problemstillinger forståelige og inspirerende. Henrik er en kulturbygger, en historieforteller og en lagspiller som får folk rundt seg til å vokse. Å jobbe med Henrik er både lærerikt og motiverende – og alltid preget av høy integritet, varme og humor.",
      author: "John Henrik Andersen",
      role: "Chief Technology Officer, Cegal"
    },
    {
      text:
        "Jeg har hatt gleden av å jobbe sammen med Henrik i lederroller over flere år, og jeg blir stadig inspirert av hans grenseløse energi og visjonære tankegang. Hans sjeldne talent for å omsette komplekse ideer til praktiske, menneskesentrerte AI-løsninger er helt eksepsjonelt. Henrik følger ikke bare trender – han skaper dem. Alltid med en samarbeidsånd som får frem det beste i menneskene rundt seg. Kort sagt får Henrik innovasjon til å føles tilgjengelig, og hans evne til å koble menneskelig erfaring med teknologi er virkelig forut for sin tid.",
      author: "Karen Romer",
      role: "CEO, FIT TO PERFORM AS"
    },
    // Added new testimonials
    {
      text:
        "Å jobbe med Henrik er en fantastisk læringsopplevelse. Han har inngående kunnskap om AI kombinert med sterk forretningssans og utmerkede ferdigheter innenfor menneskelige ressurser. Henrik har energien og pågangsmotet til å få ting gjort, og nysgjerrigheten og kapasiteten til å manøvrere i kompleksitet for å skape resultater. Han bidrar til å skape klarhet og enkelhet, og lager smartere, tryggere, mer effektive og givende løsninger med tydelige utfall. Jeg anbefaler Henrik på det sterkeste som en tankeleder og forretningspartner, og vil veldig gjerne jobbe og skape noe sammen med ham igjen.",
      author: "Kristin Ruud",
      role: "Chief People Officer, Telenor"
    },
    {
      text:
        "Våre anbudsprosesser er tidkrevende og svært detaljerte, og krever betydelige ressurser. For å styrke konkurransekraften vår, effektivisere arbeidsflyter og redusere feil, ønsket vi å utforske potensialet i kunstig intelligens. Henrik var vår rådgiver, mentor og fasilitator i utviklingen av en pilotmodell – som resulterte i SpeedMinds, vår nye AI-kollega med ansvar for kvalitetssikring i anbudsprosesser. Hvis du er nysgjerrig på hvordan AI kan skape verdi i din virksomhet, er Henrik en av markedets mest dedikerte og kunnskapsrike AI-konsulenter og -skapere å ha på laget.",
      author: "Leif Brandeggen",
      role: "CEO, Studio Sigdal Lørenskog"
    },
    {
      text:
        "Henrik spilte en nøkkelrolle på SHE Conference 2024 ved å sette AI i fokus. Han ledet innsiktsfulle samtaler med toppledere i vårt live-studio gjennom dagen og kuraterte et spennende program. Med sin sterke ledererfaring og dype AI-kunnskap har Henrik en unik evne til å identifisere muligheter og utfordringer, og til å skape ekte entusiasme ved å gjøre komplekse temaer engasjerende og tilgjengelige.",
      author: "Astrid Skaugseth",
      role: "Tidligere CEO, SHE Conference"
    },
    {
      text:
        "Vi i Sigdal Vest har jobbet sammen med Henrik med en løsning som skal forbedre våre prosesser i både anbud og leveringsfasen av kjøkken, garderober og bad. Henrik har fra første dag vist oss mulige besparelser og effektive løsninger. Henrik har vært tålmodig med oss samtidig som han har stilt krav til vår framgang. Han vet, som vi, at om vi ikke bruker løsningen han har vist oss, har de liten verdi. Vi har aldri vært i tvil om at AI er framtiden, men å navigere i verden uten en stødig guide som Henrik, anbefales ikke.",
      author: "Anders Lillegjerdet-Holen",
      role: "Daglig leder, driver og eier, Sigdal Vest"
    },
    {
      text:
        "Jeg har hatt gleden av å ha Henrik som podkastgjest og foredragsholder. Han er en inspirerende formidler som skaper energi, entusiasme og refleksjon. Henrik nudger og utfordrer på en måte som får deg til å tenke nytt og se muligheter.",
      author: "Golara Heydari",
      role: "Daglig leder, Folkeuniversitetet"
    },
    {
      text:
        "Henrik kombinerer ledererfaring med solid AI-kunnskap og finner unike løsninger og muligheter. Han skaper energi og retning som løfter både mennesker og prosesser.  Å samarbeide med Henrik er både veldig lærerikt og motiverende :)",
      author: "Nataliia Thobru",
      role: "Controlling and Strategy, Technology & Services, DNB"
    },
    {
      text:
        "Det viktigste Henrik ga meg, var en ny arbeidsform: AI som fast del av hvordan jeg forbereder meg, tenker og beslutter. Ledergruppen vår får raskere innsikt, bedre begrunnelser og mer nyanserte diskusjoner—og flere av oss har rett og slett blitt bedre ledere. I tillegg er vi tydeligere utad: vi kommuniserer bedre, kartlegger interessenter smartere og identifiserer både muligheter og risiko tidligere.",
      author: "Geir Paulsen",
      role: "Daglig leder, GS1 Norway"
    }
  ];

  const list = lang === "no" ? testimonialsNo : testimonialsDataEn;

  return (
    <div className="bg-white overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 overflow-x-hidden">
        {/* Legacy back arrow removed – global PageNav handles navigation */}

        <header className="mb-6 text-center">
          <h1
            className="text-left md:text-center text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
            style={{ fontFamily: "Noto Serif Display, serif" }}
          >
            {lang === "no" ? "Referanser" : "Testimonials"}
          </h1>
          {/* Subtitle removed as requested */}
        </header>

        {/* Avisoppsett: 3 kolonner med vertikale linjer og mer luft mellom artikler */}
        <div className="newspaper-columns">
          {list.map((t, idx) => (
            <div key={idx} className="newspaper-article">
              <NewspaperTestimonial testimonial={t} />
            </div>
          ))}
        </div>

        <style>{`
          /* Responsive multi-column layout with vertical rules */
          .newspaper-columns {
            column-count: 1;
            column-gap: 2rem;               /* space between columns */
            column-rule: 1px solid #e5e7eb; /* vertical lines between columns */
          }
          @media (min-width: 768px) {
            .newspaper-columns { column-count: 3 !important; }
          }

          /* Article spacing and keep each article intact within a column */
          .newspaper-article {
            break-inside: avoid;
            -webkit-column-break-inside: avoid;
            page-break-inside: avoid;
            margin-bottom: 2rem;            /* more white space between articles */
            padding-bottom: 1rem;
            border-bottom: 1px solid #e5e7eb; /* subtle bottom divider per article */
          }

          /* Drop cap styling for testimonial first letter */
          .testimonial-text::first-letter {
            float: left;
            font-size: 3rem;
            line-height: 1;
            margin-right: 0.4rem;
            margin-top: 0.1rem;
            font-family: 'Noto Serif Display', serif;
            color: #111827; /* gray-900 */
          }
        `}</style>
      </div>
    </div>
  );
}
