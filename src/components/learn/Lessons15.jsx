
import React from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageContext";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function Lessons15({ useH1 = false }) {
  const { lang } = useLanguage();

  const tips = [
  {
    title: `I Learned to Stop and Ask "What Am I Actually Trying to Solve?"`,
    description: `For months, I'd jump straight into prompting ChatGPT whenever I had a problem. I'd get these beautifully written responses that somehow missed the point entirely. Then it hit me—I was asking AI to solve problems I hadn't even defined clearly myself.

Now I grab a piece of paper first. Old school, I know. I write down exactly what success looks like before I touch any AI tool. Sounds obvious, but you'd be amazed how often we skip this step when AI makes everything feel so effortless.`
  },
  {
    title: `My 25 Years in Business Became My Secret Weapon`,
    description: `I spent months obsessing over the latest AI models and tools, thinking that was where the magic happened. Wrong. The real breakthrough came when I started mining my own experience—remembering those painful meetings at Microsoft, the processes that drove everyone crazy at Coca-Cola, the repetitive tasks that sucked the life out of good people.

That frustration I felt 10 years ago? That's where the best AI use cases hide. The technology is just the tool; the real value comes from knowing exactly which problems are worth solving.`
  },
  {
    title: `I Discovered My Company's Old Manuals Were Pure Gold`,
    description: `Here's something nobody talks about: Generic AI gives generic answers. I was getting beautifully formatted, completely useless outputs until I realized something. All that institutional knowledge gathering dust in our old process documents? That's the secret sauce.

I started feeding my AI those "boring" company handbooks and SOPs from years past. Suddenly, the outputs felt like they actually understood our business. It wasn't just smarter—it was authentically ours.`
  },
  {
    title: `The Day I Realized Ideas Could Become Reality in Hours, Not Months`,
    description: `This one still gives me goosebumps. I had this crazy idea for a workflow automation at 2 PM on a Tuesday. By 6 PM, I had a working prototype. Not a PowerPoint mockup—an actual functioning tool.

The cost of trying things has basically dropped to zero. Those "what if" scenarios that used to require budgets and committees? Now they're afternoon experiments. This is why I call it the age of the idea person.`
  },
  {
    title: `I Finally Stopped Fighting with My Keyboard`,
    description: `This felt weird at first—talking to my computer like it was a person. But typing out complex ideas was killing my creativity. The moment I embraced voice input (pro tip: whispering works great in open offices), my thinking got faster and way more natural.

Now I sketch on whiteboards, snap photos, and just talk through problems. Turns out the keyboard was the bottleneck I never knew I had.`
  },
  {
    title: `I Learned That Context Is Everything (The Hard Way)`,
    description: `My first AI outputs were garbage. Professional-sounding garbage, but garbage nonetheless. I was treating AI like Google—quick question, quick answer. Then I started treating it like a new hire who needed a proper briefing.

Now I give it background, examples, constraints, even the history of why we're solving this problem. It takes longer upfront, but the difference in output quality is night and day. Context is the difference between "impressive" and "actually useful."`
  },
  {
    title: `My Third Try Usually Gets It Right`,
    description: `I used to get frustrated when my first prompt didn't work perfectly. Now I know better. My first attempt is just opening the conversation. The real magic happens when I refine it 2-3 times, asking myself: "Would a smart intern understand exactly what I want?"

Think of it like giving directions to someone who's never been to your office. You'll probably clarify a few things along the way.`
  },
  {
    title: `I Started Using AI to Call Out My Own Blind Spots`,
    description: `This might be the most valuable discovery. Instead of just asking AI to agree with me, I started asking it to challenge me. "Act like a skeptical CFO and tear apart this plan." "Use this framework to find the holes in my thinking."

It's like having a devil's advocate available 24/7, and it's saved me from some really expensive mistakes.`
  },
  {
    title: `I Had to Separate My "What Could Go Wrong?" Brain from My "What's Possible?" Brain`,
    description: `Mixing risk and opportunity conversations was paralyzing me. I'd start exploring an exciting AI possibility, then immediately spiral into "but what about security and compliance and..."

Now I have separate conversations. First, I put on my risk management hat and build proper guardrails. Then I switch to my creative hat and let my imagination run wild. Both modes are important, but they can't happen simultaneously.`
  },
  {
    title: `I Had to Learn When to Stop Tinkering`,
    description: `This was a hard lesson. AI makes it so easy to keep tweaking, adding "just one more perspective," polishing endlessly. I burned entire afternoons on outputs that were already good enough for what I needed.

Now I set a timer and ask myself: "Does this solve the problem I started with?" If yes, I move on. Perfection is the enemy of productivity, especially when the cost of iteration is so low.`
  },
  {
    title: `I Stopped Thinking "Digital Employee" and Started Thinking "Specialized Tools"`,
    description: `The "digital employee" metaphor messed me up for months. I kept expecting these AI agents to think and adapt like humans. They don't. They're more like really sophisticated LEGO blocks—each one designed to do specific things exceptionally well.

Once I started treating them as specialized tools that I combine and recombine, everything clicked. My job isn't to manage them like people; it's to orchestrate them like instruments.`
  },
  {
    title: `I Learned That Bigger Isn't Always Better`,
    description: `I was obsessing over the latest, most powerful models, thinking more intelligence meant better results. Then I discovered that sometimes the "PhD-level" AI overcomplicated simple tasks. It's like asking a quantum physicist to help you balance your checkbook.

Now I match the tool to the task. Quick content edits? I use a fast, simple model. Complex analysis? That's when I bring out the heavy artillery. It's about choosing the right conversation partner, not the smartest one.`
  },
  {
    title: `I Hit a Wall and Had to Learn to Rest My Brain`,
    description: `Getting 5x more done sounds amazing until you realize your brain isn't designed for constant AI-assisted thinking. I was mentally exhausted in ways I'd never experienced. It's like cognitive overclocking—incredibly powerful but unsustainable.

Now I schedule brain breaks like I schedule meetings. This wasn't weakness; it was the signal that I needed to build systems that could run without me being involved in every decision.`
  },
  {
    title: `I Realized AI Magnifies Whatever You Put Into It`,
    description: `"Garbage in, garbage out" became painfully real. AI doesn't fix fuzzy thinking or poor data—it amplifies it beautifully. I spent weeks debugging AI workflows only to realize the problem was my messy input, not the technology.

AI is like a high-powered spotlight. It illuminates everything—including the problems you were hoping to skip past. The hard thinking still has to happen first.`
  },
  {
    title: `I'm Not Being Replaced; I'm Being Upgraded`,
    description: `The fear was real at first. "What's my role if AI can do so much?" But three years in, I see it clearly now. I'm not becoming obsolete; I'm becoming more intentional about what only humans can do.

I spend my time on strategy, relationship building, and creative problem-solving. The routine stuff that used to drain my energy? That's automated now. I'm not working less, but I'm working on things that actually matter.`
  }];


  const reflectionPrompts = [
  {
    title: `I Learned to Stop and Ask "What Am I Actually Trying to Solve?"`,
    question: `Have you clearly defined the problem you want AI to solve in your business—or would it help to have a partner guide you in framing it?`
  },
  {
    title: "My 25 Years in Business Became My Secret Weapon",
    question: "What past frustrations in your company could be transformed into opportunities with AI, if someone helped you identify them?"
  },
  {
    title: "I Discovered My Company's Old Manuals Were Pure Gold",
    question: "Are you sitting on hidden value in old documents and processes that could fuel smarter AI solutions?"
  },
  {
    title: "The Day I Realized Ideas Could Become Reality in Hours, Not Months",
    question: "What would you try first if you knew you could test an idea today without waiting for budget approval or IT resources?"
  },
  {
    title: "I Finally Stopped Fighting with My Keyboard",
    question: "Could your team be working faster and more naturally if you had the right tools and workflows in place?"
  },
  {
    title: "I Learned That Context Is Everything (The Hard Way)",
    question: "Do your employees know how to brief AI properly so it delivers business-ready outputs, or would expert training speed things up?"
  },
  {
    title: "My Third Try Usually Gets It Right",
    question: "How much more effective could your team be if they learned structured ways to refine AI prompts and get results faster?"
  },
  {
    title: "I Started Using AI to Call Out My Own Blind Spots",
    question: "Who challenges your team’s assumptions today—and could an AI partner do that 24/7 for you?"
  },
  {
    title: `I Had to Separate My "What Could Go Wrong?" Brain from My "What's Possible?" Brain`,
    question: "Would you benefit from a framework that balances creativity with compliance so your AI initiatives move forward safely?"
  },
  {
    title: "I Had to Learn When to Stop Tinkering",
    question: "How much time could your business save if someone helped you set “good enough” standards for AI use cases?"
  },
  {
    title: `I Stopped Thinking "Digital Employee" and Started Thinking "Specialized Tools"`,
    question: "Are you still expecting AI to act like a person—or would you like help building it into the right mix of specialized tools?"
  },
  {
    title: "I Learned That Bigger Isn't Always Better",
    question: "Do you know which AI tool is the right fit for your everyday tasks versus your high-stakes projects?"
  },
  {
    title: "I Hit a Wall and Had to Learn to Rest My Brain",
    question: "Could smarter AI workflows free up your team’s brainpower so they focus on growth, not burnout?"
  },
  {
    title: "I Realized AI Magnifies Whatever You Put Into It",
    question: "Is your business feeding AI clean, structured input—or do you need help building systems that make AI outputs truly valuable?"
  },
  {
    title: "I'm Not Being Replaced; I'm Being Upgraded",
    question: "What would it mean for your business if your people spent less time on routine tasks and more on strategy and growth?"
  }];


  const lessonTitlesNo = [
  "Still riktig spørsmål først",
  "Min lange arbeidserfaring er min styrke",
  "Gamle manualer ble nytt gull",
  "Ideer innen timer, ikke måneder",
  "Jeg snakker heller med AI",
  "Bred kontekst endret alt",
  "Tredje prompt gjelder",
  "Assistenten som utfordrer",
  "Tenk AI-risiko i egne møter",
  "Når nok er nok",
  "AI er ikke en ansatt (ennå)",
  "Nyeste AI model er ikke alltid best",
  "Kunsten å ta pauser",
  "Søppel inn, søppel ut",
  "Jeg føler meg oppgradert"];


  const tipsNo = [
  {
    description: `I månedsvis hoppet jeg rett inn i ChatGPT hver gang jeg hadde et problem. Jeg fikk velskrevne svar som likevel ofte bommet på hva jeg egentlig var på jakt etter. Nå starter  jeg først med penn og papir. Gammeldags, jeg vet. Jeg skriver ned nøyaktig hva jeg søker svar på, før jeg rører et AI-verktøy.`
  },
  {
    description: `Jeg brukte måneder på å dypdykke i de sist  AI-modellene og verktøyene, og trodde det var der magien skjedde. Feil.. Gjennombruddet kom da jeg begynte å utnytte min egen erfaring – husket de smertefulle møtene hos Microsoft, prosessene som drev alle til vanvidd hos Coca-Cola, de repetitive oppgavene som sugde livet ut av flinke folk.
Frustrasjonen jeg følte for både 10 og 20 år siden? Det er der de beste AI-bruksområdene gjemmer seg. Teknologien er bare verktøyet; den virkelige verdien kommer fra å vite nøyaktig hvilke problemer som er verdt å løse.`
  },
  {
    description: `Dette er noe få snakker om: Generiske AI-verktøy gir som oftest generiske svar. Jeg fikken masse  fint formaterte, men ubrukelige svar. Det var helt til jeg innså at dokumentasjonen jeg hadde samlet fra mange år i næringslivet - og som nå samlet støv i min sky - hadde stor verdi. Jeg begynte å fore AI-en med mine "kjedelige" notater, eksempler på metoder, prosesser og playbooks og manualer fra år tilbake. Resultatene blir utrolig mye mer relevant for nettopp det jeg jobbet med takket være opparbeidet innsikt.`
  },
  {
    description: `Dette gir meg gåsehud - hver gang. Idag kan jeg få en ide om å automatisere en tidkrevende arbeidsprosess klokken 14 og innen klokken 18 kan jeg ha en fungerende prototype. Ikke en PowerPoint-mockup – et faktisk fungerende verktøy.
Kostnaden for å teste har i praksis falt til null. De "hva om"-scenariene som pleide å kreve budsjetter og komiteer? Nå kan mange av disse bli til spennende “ettermiddagseksperimenter”.`
  },
  {
    description: `Dette føltes rart først – å snakke til datamaskinen som om den var en person. Før handlet det om å tenke i hodet og på papir, så forte meg å mate dette inn i AI via tastaturet. Dette nærmest drepte kreativiteten min. Mange av de jeg har jobbet med har ofte sagt at jeg snakker i “halve setninger”. Med å snakke fremfor å taste ble halve setninger starten på virkelig kreativitet (tips: hviske fungerer utmerket i åpne kontorlandskap).
Nå skisser jeg på tavler, tar bilder og snakker meg gjennom utfordringer jeg ønsker å løse. For meg var tastaturet en flaskehalse for kreativitet. Jeg bruker fortsatt tastaturet, men det er når ideer skal justeres.`
  },
  {
    description: `Mine første AI-resultater var lite å skryte av. Profesjonelt klingende søppel, men søppel likevel. Jeg behandlet AI som om det var Google – raske spørsmål, raske svar. Så begynte jeg å behandle AI som en nyansatt som trengte en skikkelig briefing.
Nå gir jeg den bakgrunn, eksempler, begrensninger, til og med historien om hvorfor viønsker å løse dette problemet. Denne briefen tar lengre tid i starten, men forskjellen i kvaliteten på er som natt og dag. Kontekst er forskjellen som kan ta deg fra bra til imponerende og nyttig.`
  },
  {
    description: `Jeg pleide å bli frustrert når min første prompt ikke ga resultat og heller ble starten på en runddans med AI for å bedre resultatet. Nå vet jeg bedre. Mitt første forsøk er bare “åpningen” på dialogen. Den virkelige magien skjer når jeg forbedrer prompten flere ganger, og spør meg selv: "Ville en smart intern forstå nøyktig hva jeg sier nå?"`
  },
  {
    description: `Dette er nok en av de mest verdifulle læringene mine. AI-modeller som ChatGPT er nemlig trent til å være enig med deg. Derfor begynte jeg å be AI-løsningene jeg benyttet om å utfordre meg. Jeg ba den for eksempel om å opptre som en skeptisk finansdirektør og lete etter feil og mangler i min plan.`
  },
  {
    description: `Å blande risiko- og mulighetssamtaler i samme møte, begrenset meg. Jeg begynte å utforske en spennende AI-mulighet, for så umiddelbart å spinne inn i "men hva med sikkerhet og compliance og..."
Nå har jeg separate samtaler. Først tar jeg på meg risikostyringshatten og bygger skikkelige sikkerhetsgjerder. Så bytter jeg til kreativitetshatten og lar fantasien løpe fritt. Begge modusene er viktige, men de kan ikke skje samtidig.`
  },
  {
    description: `Dette var en tøff leksjon. AI gjør det så lett å bare fortsette å justere, legge til "bare ett perspektiv til", polere i det uendelige. Jeg kunne bruke hele ettermiddagen på å forbedre resultater som allerede var mer enn gode nok. Nå setter jeg av en time og spør meg selv: "Løser dette problemet jeg ønsket å løse?" Hvis ja, avslutter jeg selv om AI foreslår å gå videre. Perfeksjon er helt klart produktivitetens fiende, spesielt når kostnaden for iterasjon er så lav med AI.`
  },
  {
    description: `"AI-ansatt eller AI-agent"-metaforen rotet det til for meg i månedsvis. Jeg mente jeg kunne bygge disse AI-agentene slik at de tenker og gjør som oss - allerede i 2025. Det gjør de ikke. Kan litt i 2026, men ennå lenge til. Nå tenker jeg mer på AI-løsninger som smarte LEGO-klosser som passer inn i arbeidet på bestemte steder – alltid med såkalt “Human-in-the-Loop”.`
  },
  {
    description: `Jeg tok alltid i bruk de nyeste, kraftigste modellene som ble lansert, og troddeat det sist nye ville gi bedre resultater. Men ofte merket jeg at AI leverte overkompliserte "PhD-nivå"-svar som ikke var realistiske eller nødvendige. Det ble litt som å be en kvantumfysiker hjelpe meg med å løse en enkel utregning..
Nå matcher jeg AI-modellen til hvilke oppgave jeg ønsker å løse. Raske innholdsredigeringer? Jeg bruker en rask, enkel modell. Kompleks analyse? Da tar jeg frem de tyngre modellene. Det handler om å velge riktig samtalepartner..`
  },
  {
    description: `Å få gjort 5x mer høres fantastisk ut helt til du innser at hjernen din ikke er designet for konstant AI-assistert tenkning. Jeg har vært mentalt utmattet på måter jeg aldri hadde opplevd. Det var som en kognitiv overbelastning – utrolig kraftfull, men overhodet ikke holdbart i lengden.`
  },
  {
    description: `Dagens AI fikser ikke uklar tenkning eller dårlige data – den forsterker det du gir av input. Jeg tror dette vil være et problem i lang tid fremover. Jeg brukte timer på timer på å feilsøke - bare for å innse at problemet var rotete og uklar input, ikke teknologien.
AI er som en kraftig lyskaster. Den belyser også problemene du håpet å hoppe over. Jeg må fortsatt bruke hodet først. Jeg starter helst med pen og papir.`
  },
  {
    description: `"Hva skal min rolle være, hvis AI også kan alt jeg kan?" Frykten var tilstede. Tenk om alt det jeg har lært gjennom 30 år i arbeidslivet skulle bli erstattet med AI? Det var nok en av grunnene til at jeg investerte mye tid i AI. Men nå, tre år senere ser jeg det klart - jeg har ikke blitt utdatert, jeg har blitt oppdatert! Jeg bruker tiden min på strategi, relasjonsbygging og kreativ problemløsning. De rutinepregede oppgavene som pleide å tappe energien min? De har jeg  byggem automatiserte løsninger for.. Jeg jobber ikke mindre, men jeg jobber mer med oppgaver som jeg brenner for og som engasjerer meg.`
  }];


  const reflectionPromptsNo = [
  { title: "", question: "Har du klart definert problemet du vil at AI skal løse i din virksomhet?" },
  { title: "", question: "Hvilke frustrasjoner i din bedrift kan bli forvandlet til muligheter med AI?" },
  { title: "", question: "Bruker du dokumenter og prosesser fra all akkumulert dokumentasjon bedriften har til å få bedre og smartere AI-resultater? Har du gjort disse “playbooks” klare for AI?" },
  { title: "", question: "Hvilke idéer skulle du gjerne prototype på noen timer?" },
  { title: "", question: "Hvor mye raskere og mer naturlig ville tale-input vært for deg? Hvordan bruker dere transkripsjoner fra møtet rett inn i deres AI-maler?" },
  { title: "", question: "Vet dine ansatte hvordan de skal briefe AI med relevant kontekst (ikke bare en god prompt) til å få gode, relevante løsninger?" },
  { title: "", question: "Hvor much more effective kunne teamet ditt vært hvis de lærte strukturerte måter å forbedre AI-prompts på?" },
  { title: "", question: "Hvem utfordrer dine antakelser i dag – og hva kan en dedikert AI-løsning med den spesifikke oppgaven å utfordre deg, skapt av bedre resultater?" },
  { title: "", question: "Hvordan har du dokumentert relevante risikoer og løsninger for din bedrift? Vet de ansatte hvordan man reduserer risiko? Forskjellen på innstillinger i gratisversjon av ChatGPT og en betalt versjon?" },
  { title: "", question: "Hvor mye tid kunne virksomheten din spart hvis noen hjalp dere med å sette \"godt nok\"-standarder for AI-bruksområder?" },
  { title: "", question: "Hvilke smarte LEGO-klosser kunne din bedrift hatt glede av allerede idag? Vil det gi verdi om du har en dedikert AI som leter etter nye anbud og salgsløsninger fremfor at en ansatte må bruke tid på søk?" },
  { title: "", question: "Vet du hvilket AI-verktøy som passer best for dine daglige oppgaver versus høyinnsatsprosjektene dine?" },
  { title: "", question: "Er dere kommet til det punktet hvor bruk av AI som ad hoc tenkepartner skaper problemer med overskuddet på jobb?" },
  { title: "", question: "Mater virksomheten din AI med rent, strukturert input?" },
  { title: "", question: "Hva ville det betydd for virksomheten din hvis dine folk brukte mindre tid på rutineoppgaver og mer på strategi og vekst?" }];


  const lessonTitlesEn = [
  "Asking the Right Question First",
  "My Experience Became My Edge",
  "Old Manuals, New Gold",
  "Ideas Built in Hours, Not Months",
  "Talking Beat Typing",
  "Context Changed Everything",
  "Third Try, Best Try",
  "AI as My Devil’s Advocate",
  "Separating Risk From Possibility",
  "Learning When to Stop",
  "Not Employees—But Tools",
  "Bigger Isn't Always Better",
  "Resting My Overclocked Brain",
  "Garbage In, Garbage Out (For Real)",
  "I’m Not Replaced—I’m Upgraded"];


  const factsEn = [
  {
    title: "Adoption Without Impact",
    lines: [
    "78% of organizations use AI today.",
    "Yet over 80% report no financial impact, and only 1% describe themselves as mature users.",
    "AI adoption has outpaced results."]

  },
  {
    title: "A Confidence Gap at the Top",
    lines: [
    "54% of senior leaders feel they are falling short in guiding AI adoption.",
    "Company-wide enthusiasm is declining in nearly half of organizations.",
    "Still, 97% of leaders with a clear AI strategy report positive ROI.",
    "The differentiator is not enthusiasm, but disciplined strategy."]

  },
  {
    title: "What High Performers Do Differently",
    lines: [
    "Only 21% have redesigned workflows for AI—and these companies see the strongest EBIT impact.",
    "Most simply add AI into existing processes, with limited effect.",
    "Fewer than 20% systematically track KPIs for AI projects.",
    "Value comes from redesign, governance, and measurement."]

  },
  {
    title: "Leadership Alignment: The Real Barrier",
    lines: [
    "Executives often point to employee readiness as the problem.",
    "Employees report they are, in fact, prepared.",
    "The real gap lies in leadership consensus and alignment.",
    "The challenge is not technical—it is organizational."]

  },
  {
    title: "Small Business Moves Faster",
    lines: [
    "68% of small businesses already use AI, with 74% planning growth in 2025.",
    "Nearly 40% believe AI will enable job creation.",
    "Larger enterprises, by contrast, show declining adoption rates.",
    "Agility and focus give smaller firms an advantage."]

  },
  {
    title: "The Investment Reality",
    lines: [
    "34% of companies plan to invest $10M+ in 2025.",
    "Firms allocating 5% or more of their total budget to AI report higher returns.",
    "Strategic commitment matters more than budget size."]

  },
  {
    title: "CEOs: Committed but Constrained",
    lines: [
    "61% of CEOs are adopting AI agents now, with plans to scale further.",
    "69% agree success depends on leaders with strategic oversight and authority.",
    "Yet silos, risk-aversion, and lack of expertise continue to limit progress.",
    "Commitment is widespread. Execution is inconsistent."]

  },
  {
    title: "Trust Remains Fragile",
    lines: [
    "49% of CEOs expect AI to drive profitability in the next year.",
    "At the same time, one-third express low trust in embedding AI into core processes.",
    "Without trust, adoption remains tentative."]

  },
  {
    title: "The Skills Imperative",
    lines: [
    "31% of the workforce will need reskilling within three years.",
    "54% of CEOs are hiring for AI roles that did not exist last year.",
    "73% of employers say onboarding AI-skilled talent is a priority, while 75% say the talent pool is insufficient.",
    "Upskilling existing teams is becoming the practical solution."]

  },
  {
    title: "What Correlates with Success",
    lines: [
    "CEO oversight of AI governance is directly linked to stronger ROI.",
    "Workflow redesign is the single largest driver of EBIT impact.",
    "Governance and systematic KPI tracking enable scaling.",
    "The formula is clear: Leadership → Workflow redesign → Governance → Measurement."]

  },
  {
    title: "The Window Is Narrowing",
    lines: [
    "AI adoption in U.S. firms has more than doubled in two years—from 3.7% in 2023 to 9.7% in 2025.",
    "First-mover advantage is shrinking.",
    "Enterprises are now shifting budgets from “innovation funds” to core operations, signaling that AI has moved from experiment to infrastructure.",
    "Leaders who wait risk falling behind."]

  }];


  const titlesToShow = lang === "no" ? lessonTitlesNo : lessonTitlesEn;
  const tipsToShow = lang === "no" ? tipsNo : tips; // Still needed for Norwegian rendering logic
  const promptsToShow = lang === "no" ? reflectionPromptsNo : reflectionPrompts; // Still needed for Norwegian rendering logic

  const HeadingTag = useH1 ? "h1" : "h2";

  return (
    <article className="bg-white">
      <header className="mb-10">
        <HeadingTag className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
          {lang === "no" ? "15 erfaringer med AI" : "The AI Reality Check for Leaders"}
        </HeadingTag>
        <p className="text-gray-700 italic mb-2">
          {lang === "no" ? "Hva +3000 timer med AI har lært meg - så langt" : ""}
        </p>
      </header>

      <div className="prose lg:prose-lg max-w-none text-gray-700 leading-relaxed flow-root md:pl-6">
        {lang === "no" ?
        <p className="mb-8 first-letter:text-5xl first-letter:font-bold first-letter:font-serif first-letter:float-left first-letter:mr-2 first-letter:mt-1">
            {`Da jeg først begynte å jobbe med AI, trodde jeg alt handlet om å mestre verktøy og modeller. Men etter tusenvis av timer med praktisk testing, innså jeg at de virkelige leksjonene ikke bare var tekniske – de handlet om tankesett, klarhet og hvordan man får AI til å fungere i daglig samarbeid med oss ansatte. Her er mine femten viktigste læringer som har endret hvordan jeg tenker og jobber med AI idag. De er på ingen måte "perfekte formler", men de er læringer som har kostet meg mye. Ved å dele disse, håper jeg at du og ditt team slipper samme frustrasjon og feilskjær når stadig mer AI kommer inn i virksomheten.`}
          </p> :

        <>
            <p className="mb-4 text-base md:text-lg">
              AI is everywhere—78% of companies now use it—yet only 1% say they’ve mastered it. Most leaders aren’t struggling with the tech. They’re struggling with strategy, alignment, and execution.
            </p>
            <p className="mb-2 font-semibold text-gray-900">
              So where do you stand?
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Concerned but unclear? You need clarity before investing.</li>
              <li>Experimenting but stuck? You need workflow redesign, not more pilots.</li>
              <li>Seeing results but hitting walls? You need scale, not more experiments.</li>
              <li>Feeling overwhelmed? You need someone who’s been in your chair.</li>
            </ul>
            <p className="mt-3">
              The truth is simple: AI delivers results when implemented strategically. The question isn’t whether AI works—it’s whether your approach works.
            </p>
          </>
        }

        {lang === "no" ?
        <>
            {tipsToShow.map((tip, index) =>
          <div key={index} className="mt-10 pt-6 border-t border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 pb-1 border-b-2 border-black inline-block" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {index + 1}. {titlesToShow[index]}
                </h3>
                <p className="whitespace-pre-line">{tip.description}</p>
                {promptsToShow && promptsToShow[index] &&
            <p className="mt-2 text-gray-800 flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-orange-600 mt-1" strokeWidth={2.75} />
                    <span className="font-medium">{promptsToShow[index].question}</span>
                  </p>
            }
              </div>
          )}
          </> :

        <>
            <div className="news-columns mt-10">
              {factsEn.map((f, idx) =>
            <div key={idx} className="news-item">
                  <h3
                className="text-xl md:text-2xl font-semibold text-gray-900 mb-2"
                style={{ fontFamily: 'Noto Serif Display, serif' }}>

                    {idx + 1}. {f.title}
                  </h3>
                  {f.lines.map((line, i) => {
                const isLast = i === f.lines.length - 1;
                return (
                  <p
                    key={i}
                    className={`text-sm md:text-base text-gray-800 leading-relaxed${isLast ? ' font-semibold' : ''}`}>

                        {line}
                      </p>);

              })}
                </div>
            )}
            </div>
            <style>{`
              .news-columns {
                column-count: 1;
                column-gap: 2rem;
                column-rule: 1px solid #e5e7eb;
              }
              @media (min-width: 768px) {
                .news-columns { column-count: 2; }
              }
              @media (min-width: 1024px) {
                .news-columns { column-count: 3; }
              }
              .news-item {
                break-inside: avoid;
                -webkit-column-break-inside: avoid;
                page-break-inside: avoid;
                margin-bottom: 1.25rem;
                padding-bottom: 1rem;
                border-bottom: 1px solid #f1f5f9;
              }
            `}</style>

            <div className="mt-8">
              <Link to={createPageUrl("BookSession")} className="cta-button-outline inline-flex items-center">
                Book a Strategy Session
              </Link>
              <p className="text-sm text-gray-600 mt-2">

            </p>
            </div>
          </>
        }
      </div>
    </article>);

}