
// EDITING GUIDE:
// - To change the big intro paragraph under each main heading, edit the `intro` field of each category object.
// - To change each offer's texts, edit `intro` (gets the drop cap) and `description` (normal paragraph) inside each category's `services` array.
// - File path: components/offers/offersData

export const offersCategories = [
  {
    key: "strategic_foundation",
    title: "Strategic Foundation Services",
    intro: "Set the right groundwork for effective AI adoption: clarity, governance, roadmap, and risk management.",
    landing_extra: "",
    services: [
      {
        title: "AI Readiness Assessment",
        for: "Organizations uncertain where to start with AI",
        listLabel: "What you get:",
        gets: [
          "Current state analysis of AI experimentation and tools in use",
          "Data asset inventory and accessibility audit",
          "Team readiness and capability assessment",
          "Security and compliance gap analysis",
          "Risk exposure evaluation",
          "Clear readiness score across 5 dimensions"
        ],
        deliverable: "Assessment report with prioritized recommendations"
      },
      {
        title: "AI Strategy Development",
        for: "Leadership teams needing comprehensive AI roadmap",
        listLabel: "What you get:",
        gets: [
          "Strategic AI vision aligned with business goals",
          "6–12 month implementation roadmap",
          "Accountability framework (who owns what)",
          "Governance model and decision rights",
          "Investment requirements and ROI projections",
          "Risk management approach"
        ],
        deliverable: "Strategy document + executive presentation + one proof‑of‑concept"
      },
      {
        title: "Governance & Risk Framework",
        for: "Organizations needing clear AI policies and controls",
        listLabel: "What you get:",
        gets: [
          "AI usage policies and guidelines",
          "Data privacy and security protocols",
          "Vendor evaluation criteria",
          "Compliance framework (GDPR, industry‑specific)",
          "Approval workflows and oversight mechanisms",
          "Incident response procedures"
        ],
        deliverable: "Governance documentation + training materials"
      }
    ]
  },
  {
    key: "discovery_opportunity",
    title: "Discovery & Opportunity Services",
    intro: "Identify, prioritize, and shape AI opportunities across your business or within a focused function.",
    landing_extra: "",
    services: [
      {
        title: "Opportunity Analysis – Your Company",
        for: "Organizations wanting comprehensive opportunity mapping",
        listLabel: "What you get:",
        gets: [
          "Systematic review across all business functions",
          "15–25 prioritized AI opportunities identified",
          "ROI estimates for each opportunity",
          "Implementation complexity assessment",
          "Quick win identification",
          "Long‑term capability recommendations"
        ],
        deliverable: "Opportunity portfolio + business cases for top 5"
      },
      {
        title: "Focused Opportunity Analysis – Single Department or Function",
        for: "Departmental leaders wanting to start in their area",
        listLabel: "What you get:",
        gets: [
          "Deep dive into one department (Sales, HR, Operations, etc.)",
          "5–10 specific AI opportunities",
          "Detailed business cases",
          "Change management considerations",
          "Department‑specific implementation plan"
        ],
        deliverable: "Department opportunity report + one prototype"
      },
      {
        title: "Automation Assessment",
        for: "Operations leaders seeking efficiency gains",
        listLabel: "What you get:",
        gets: [
          "Workflow documentation and analysis",
          "Automation opportunity identification",
          "Build vs. buy recommendations",
          "Expected time/cost savings",
          "Implementation roadmap"
        ],
        deliverable: "Process assessment + automation prioritization matrix"
      },
      {
        title: "Customer Experience AI Audit",
        for: "Commercial leaders wanting to enhance customer interactions",
        listLabel: "What you get:",
        gets: [
          "Customer journey mapping",
          "Pain point identification",
          "AI enhancement opportunities",
          "Personalization potential",
          "Service efficiency improvements",
          "Revenue impact analysis"
        ],
        deliverable: "Customer experience audit report + prioritized initiatives"
      }
    ]
  },
  {
    key: "prototyping_poc",
    title: "Prototyping & Proof‑of‑Concept Services",
    intro: "Test and validate ideas quickly with working prototypes and clear evidence of value.",
    landing_extra: "",
    services: [
      {
        title: "Rapid Prototype – Single Use Case",
        for: "Testing one specific AI application quickly",
        listLabel: "What you get:",
        gets: [
          "Working version‑1 prototype",
          "User testing for select team members",
          "Technical feasibility validation",
          "Business value demonstration",
          "Scale‑up requirements"
        ],
        deliverable: "Functioning prototype + documentation + scale plan"
      },
      {
        title: "Multi‑Prototype Program (6–8 weeks)",
        for: "Organizations wanting to test 3–5 concepts simultaneously",
        listLabel: "What you get:",
        gets: [
          "3–5 working prototypes",
          "Comparative ROI analysis",
          "Stakeholder demonstrations",
          "Implementation priority recommendations",
          "Resource allocation guidance"
        ],
        deliverable: "3–5 prototypes + comparative analysis + roadmap"
      }
    ]
  },
  {
    key: "functional_solutions",
    title: "Functional AI Solution Areas",
    intro: "Choose targeted solution areas to prototype and demonstrate value in real workflows.",
    note: "Choose 1–3 working prototypes",
    landing_extra: "",
    services: [
      {
        title: "Sales & Marketing AI Solutions",
        for: "Commercial teams wanting to accelerate revenue generation",
        listLabel: "Examples of specific solutions:",
        gets: [
          "Tender monitoring and qualification automation",
          "Proposal generation assistance",
          "Customer intelligence dashboards",
          "Lead scoring and prioritization",
          "Competitive intelligence gathering",
          "Personalized content creation",
          "Sales forecast enhancement"
        ],
        deliverable: "Choose 1–3 working prototypes"
      },
      {
        title: "HR & People Operations AI Solutions",
        for: "HR leaders wanting to improve employee experience",
        listLabel: "Examples of specific solutions:",
        gets: [
          "Performance review cycle automation",
          "Candidate screening and assessment",
          "Onboarding process enhancement",
          "Training needs analysis",
          "Employee sentiment analysis",
          "Policy Q&A chatbots",
          "Exit interview analysis"
        ],
        deliverable: "Choose 1–3 working prototypes"
      },
      {
        title: "Operations & Efficiency AI Solutions",
        for: "Operations leaders seeking productivity gains",
        listLabel: "Examples of specific solutions:",
        gets: [
          "Meeting intelligence (agenda + action tracking)",
          "Document review and quality assurance",
          "Resource allocation optimization",
          "Scheduling and planning assistance",
          "Reporting automation",
          "Knowledge base creation",
          "Process documentation generation"
        ],
        deliverable: "Choose 1–3 working prototypes"
      },
      {
        title: "Strategic Planning AI Solutions",
        for: "Strategy and leadership teams",
        listLabel: "Examples of specific solutions:",
        gets: [
          "Strategy‑to‑action‑plan support",
          "Scenario modeling and impact analysis",
          "Executive briefings generation",
          "OKR alignment and progress insights"
        ],
        deliverable: "Choose 1–3 working prototypes"
      }
    ]
  },
  {
    key: "implementation_scaling",
    title: "Implementation & Scaling Services",
    intro: "Move from pilots to production with robust controls, rollout plans, and adoption support.",
    landing_extra: "",
    services: [
      {
        title: "Implementation Program",
        for: "Teams moving from pilot to production",
        listLabel: "What you get:",
        gets: [
          "Production‑grade workflows and quality gates",
          "Security and access controls",
          "Human‑in‑the‑loop checkpoints",
          "Rollout plan and stakeholder communications"
          ],
        deliverable: "Deployed solution + runbook"
      },
      {
        title: "Governance Enablement",
        for: "Organizations establishing long‑term AI controls",
        listLabel: "What you get:",
        gets: [
          "Operating model and decision rights",
          "Approval workflows and audit trails",
          "Risk registers and mitigation playbooks"
        ],
        deliverable: "Governance operating guide"
      },
      {
        title: "Change Management & Adoption",
        for: "Leaders driving sustainable adoption",
        listLabel: "What you get:",
        gets: [
          "Change story and communications plan",
          "Champion network enablement",
          "Adoption metrics and feedback loops"
        ],
        deliverable: "Adoption playbook + onboarding materials"
      }
    ]
  },
  {
    key: "training_capability",
    title: "Training & Capability Building",
    intro: "Build confidence and skills to use AI effectively across teams and roles.",
    landing_extra: "",
    services: [
      {
        title: "Inspiration Sessions",
        for: "Executives and teams exploring AI possibilities",
        listLabel: "What you get:",
        gets: [
          "Tailored, idea‑sparking sessions",
          "Industry‑relevant examples and demos",
          "Leadership Q&A and next‑step guidance"
        ],
        deliverable: "Session materials + action list"
      },
      {
        title: "Getting Used to AI",
        for: "Teams adopting AI in daily work",
        listLabel: "What you get:",
        gets: [
          "Hands‑on exercises and templates",
          "Prompt libraries aligned to your workflows",
          "Daily habits and usage patterns"
        ],
        deliverable: "Team toolkit + checklists"
      },
      {
        title: "Mastering AI",
        for: "Power users and champions",
        listLabel: "What you get:",
        gets: [
          "Advanced prompting and evaluation",
          "Workflow orchestration patterns",
          "Coaching to leverage AI as a challenge partner"
        ],
        deliverable: "Advanced playbook + coaching plan"
      }
    ]
  },
  {
    key: "advisory_support",
    title: "Advisory, Support & Specialized Services",
    intro: "Ongoing guidance, vendor selection, and compliance support tailored to your context.",
    landing_extra: "",
    services: [
      {
        title: "Executive Advisory",
        for: "Leaders wanting pragmatic, ongoing guidance",
        listLabel: "What you get:",
        gets: [
          "Monthly strategy sessions",
          "Quarterly progress reviews",
          "Board‑level materials and support"
        ],
        deliverable: "Advisory notes + executive briefs"
      },
      {
        title: "Vendor Evaluation & Selection",
        for: "Teams choosing AI tools and platforms",
        listLabel: "What you get:",
        gets: [
          "Requirements definition",
          "Vendor scoring framework",
          "RFP support and due diligence"
        ],
        deliverable: "Vendor recommendation + decision pack"
      },
      {
        title: "Risk & Compliance Reviews",
        for: "Organizations with regulated requirements",
        listLabel: "What you get:",
        gets: [
          "Policy alignment checks",
          "Data handling review",
          "Mitigation recommendations"
        ],
        deliverable: "Compliance report + remediation plan"
      }
    ]
  }
];

export const offersCategoriesNo = [
  {
    key: "strategic_foundation",
    title: "Grunnleggende strategiske tjenester",
    intro: "Legg riktig grunnmur for effektiv AI‑bruk: klarhet, styring, veikart og risikohåndtering.",
    landing_extra: "",
    services: [
      {
        title: "AI‑modenhetsvurdering",
        for_no: "Virksomheter som er usikre på hvor de skal starte",
        listLabelNo: "Dette får du:",
        gets_no: [
          "Analyse av dagens AI‑bruk og verktøy i drift",
          "Kartlegging av dataressurser og tilgjengelighet",
          "Vurdering av organisasjonens kompetanse og kapasitet",
          "Sikkerhet og etterlevelse (compliance)",
          "Risikobilde og konsekvensvurdering",
          "Klar modenhetsscore på tvers av 5 dimensjoner"
        ],
        deliverable_no: "Rapport med prioriterte anbefalinger"
      },
      {
        title: "AI‑strategi og veikart",
        for_no: "Lederteam som trenger en helhetlig plan",
        listLabelNo: "Dette får du:",
        gets_no: [
          "Strategisk retning for AI knyttet til forretningsmål",
          "6–12 måneders implementeringsplan",
          "Ansvars‑ og eierskapsmodell",
          "Styring og beslutningsrettigheter",
          "Investeringer og forventet ROI",
          "Risikohåndtering"
        ],
        deliverable_no: "Strategidokument + lederpresentasjon + én proof‑of‑concept"
      },
      {
        title: "Styring og risiko",
        for_no: "Organisasjoner som trenger tydelige rammer",
        listLabelNo: "Dette får du:",
        gets_no: [
          "Retningslinjer for trygg AI‑bruk",
          "Personvern og sikkerhetsprosedyrer",
          "Kriterier for leverandørvalg",
          "Compliance‑rammeverk (GDPR m.m.)",
          "Godkjenningsløp og kontrollpunkter",
          "Håndtering av avvik og hendelser"
        ],
        deliverable_no: "Styringsdokumenter + opplæringsmateriell"
      }
    ]
  },
  {
    key: "discovery_opportunity",
    title: "Kartlegging og muligheter",
    intro: "Identifiser, prioriter og form AI‑muligheter på tvers av virksomheten eller i én avdeling.",
    landing_extra: "",
    services: [
      {
        title: "Mulighetsanalyse – hele virksomheten",
        for_no: "Selskaper som vil se hele bildet",
        listLabelNo: "Dette får du:",
        gets_no: [
          "Systematisk gjennomgang av forretningsområder",
          "15–25 prioriterte AI‑muligheter",
          "Estimert effekt og ROI",
          "Kompleksitet og avhengigheter",
          "Raske gevinster (quick wins)",
          "Anbefalinger for kapabiliteter"
        ],
        deliverable_no: "Mulighetsportefølje + business case for topp 5"
      },
      {
        title: "Fokusert analyse – én avdeling",
        for_no: "Ledere som vil starte i eget område",
        listLabelNo: "Dette får du:",
        gets_no: [
          "Dypdykk i én funksjon (f.eks. salg, HR, drift)",
          "5–10 konkrete AI‑muligheter",
          "Detaljerte business case",
          "Endringsbehov og påvirkning",
          "Plan for implementering"
        ],
        deliverable_no: "Avdelingsrapport + én prototype"
      },
      {
        title: "Automatiseringsvurdering",
        for_no: "Driftsledere som søker effektivisering",
        listLabelNo: "Dette får du:",
        gets_no: [
          "Kartlegging av prosesser og flaskehalser",
          "Identifisering av automatiseringsmuligheter",
          "Bygge selv vs. kjøpe anbefalinger",
          "Tids‑ og kostnadsbesparelser",
          "Veikart for gjennomføring"
        ],
        deliverable_no: "Prosesskart + prioriteringsmatrise"
      },
      {
        title: "Kundeopplevelse – AI‑audit",
        for_no: "Kommersielle team som vil løfte interaksjoner",
        listLabelNo: "Dette får du:",
        gets_no: [
          "Kundereisekartlegging",
          "Smertemomenter og muligheter",
          "Personalisering og relevans",
          "Effektivisering av service",
          "Inntektspotensial"
        ],
        deliverable_no: "Prioriterte tiltak + forbedringsplan"
      }
    ]
  },
  {
    key: "prototyping_poc",
    title: "Prototyping og Proof‑of‑Concept",
    intro: "Test idéer raskt med fungerende prototyper og tydelig verdibevis.",
    landing_extra: "",
    services: [
      {
        title: "Rask prototype – ett bruksområde",
        for_no: "Team som vil teste én konkret idé",
        listLabelNo: "Dette får du:",
        gets_no: [
          "Fungerende V1‑prototype",
          "Brukertesting med utvalgte ansatte",
          "Teknisk realitetsjekk",
          "Bevis på forretningsverdi",
          "Krav for skalering"
        ],
        deliverable_no: "Prototype + dokumentasjon + plan for skalering"
      },
      {
        title: "Multi‑prototype program (6–8 uker)",
        for_no: "Virksomheter som vil teste 3–5 konsepter samtidig",
        listLabelNo: "Dette får du:",
        gets_no: [
          "3–5 fungerende prototyper",
          "Sammenlignende ROI‑analyse",
          "Demonstrasjoner for interessenter",
          "Anbefalinger for prioritering",
          "Ressurs‑ og fremdriftsplan"
        ],
        deliverable_no: "3–5 prototyper + sammenligningsrapport + veikart"
      }
    ]
  },
  {
    key: "functional_solutions",
    title: "Funksjonelle løsningsområder",
    intro: "Velg målrettede løsningsområder for å skape verdi i faktisk arbeid.",
    note: "Velg 1–3 fungerende prototyper",
    landing_extra: "",
    services: [
      {
        title: "Salg og marked",
        for_no: "Kommersielle team som vil akselerere inntekter",
        listLabelNo: "Eksempler:",
        gets_no: [
          "Overvåkning og kvalifisering av anbud",
          "Assistenter for tilbudsutforming",
          "Kundeinnsikt og dashboards",
          "Lead‑scoring og prioritering",
          "Konkurrentovervåkning",
          "Personalisert innhold",
          "Forbedret salgsprediksjon"
        ],
        deliverable_no: "Velg 1–3 fungerende prototyper"
      },
      {
        title: "HR og medarbeider",
        for_no: "HR som vil forbedre medarbeideropplevelsen",
        listLabelNo: "Eksempler:",
        gets_no: [
          "Automatisert medarbeidersamtale‑støtte",
          "Kandidatvurdering og screening",
          "Bedre onboarding",
          "Analyse av læringsbehov",
          "Medarbeiderinnsikt og sentiment",
          "Policy‑assistenter",
          "Analyse av exit‑intervjuer"
        ],
        deliverable_no: "Velg 1–3 fungerende prototyper"
      },
      {
        title: "Drift og effektivitet",
        for_no: "Operasjonelle team som vil øke produktivitet",
        listLabelNo: "Eksempler:",
        gets_no: [
          "Møteintelligens (agenda + oppfølging)",
          "Dokumentkvalitet og QA",
          "Ressursallokering og planlegging",
          "Automatisert rapportering",
          "Kunnskapsbase og dokumentasjon"
        ],
        deliverable_no: "Velg 1–3 fungerende prototyper"
      },
      {
        title: "Strategi og ledelse",
        for_no: "Lederteam som vil styrke gjennomføring",
        listLabelNo: "Eksempler:",
        gets_no: [
          "Fra strategi til handlingsplan",
          "Scenarier og konsekvensanalyse",
          "Executive‑briefs",
          "OKR‑innsikt og fremdrift"
        ],
        deliverable_no: "Velg 1–3 fungerende prototyper"
      }
    ]
  },
  {
    key: "implementation_scaling",
    title: "Implementering og skalering",
    intro: "Gå fra pilot til drift med robuste kontroller, utrulling og adopsjon.",
    landing_extra: "",
    services: [
      {
        title: "Implementeringsprogram",
        for_no: "Team på vei fra pilot til produksjon",
        listLabelNo: "Dette får du:",
        gets_no: [
          "Produksjonsklare arbeidsflyter og kvalitetssikring",
          "Sikkerhet og tilgangskontroll",
          "Human‑in‑the‑loop‑sjekkpunkter",
          "Plan for utrulling og interessenter"
        ],
        deliverable_no: "Produksjonssatt løsning + driftsmanual"
      },
      {
        title: "Etablere styringsmodell",
        for_no: "Virksomheter som vil bygge varig kontroll",
        listLabelNo: "Dette får du:",
        gets_no: [
          "Operativ modell og beslutningsrettigheter",
          "Godkjenningsløp og sporbarhet",
          "Risikoregistre og tiltak"
        ],
        deliverable_no: "Styringsguide"
      },
      {
        title: "Endring og adopsjon",
        for_no: "Ledere som vil sikre varig bruk",
        listLabelNo: "Dette får du:",
        gets_no: [
          "Endringshistorie og kommunikasjonsplan",
          "Ambassadørnettverk",
          "Adopsjonsmålinger og tilbakemeldinger"
        ],
        deliverable_no: "Adopsjonsplan + onboardingsett"
      }
    ]
  },
  {
    key: "training_capability",
    title: "Trening og kompetansebygging",
    intro: "Bygg trygghet og ferdigheter for effektiv AI‑bruk på tvers av team og roller.",
    landing_extra: "",
    services: []
  },
  {
    key: "advisory_support",
    title: "Rådgivning og innovasjon",
    intro: "Innovasjon stopper ikke når systemene er i drift – ledere ønsker å være nysgjerrige, oppdaterte og kreative. Vi tilbyr løpende rådgivning og raske innovasjonsløp for å utforske nye muligheter uten å forstyrre kjernevirksomheten.",
    landing_extra: "",
    services: []
  }
];
