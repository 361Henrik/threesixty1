
import React from "react";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageContext";

export default function SevenStepsList() {
  const { lang } = useLanguage();

  const stepsEn = [
  {
    title: "Identify the Problem",
    desc: "Define the real business issue. Employees decide what matters most."
  },
  {
    title: "Map the Workflow",
    desc: "Document how things work today. Capture context that only employees know."
  },
  {
    title: "Explore Options",
    desc: "Brainstorm automation or AI opportunities. Employees guide direction, AI adds ideas."
  },
  {
    title: "Prototype Quickly",
    desc: "Create a simple test version. Employees decide what to try first."
  },
  {
    title: "Test with Employees",
    desc: "Validate usefulness in the real world. Employee feedback shapes improvements."
  },
  {
    title: "Refine & Optimize",
    desc: "Adjust and monitor. Employees orchestrate the changes to fit business needs."
  },
  {
    title: "Implement & Support",
    desc: "Roll out a solution with transparency. Employees stay in control of outcomes."
  }];

  const stepsNo = [
  {
    title: "Identifisér utfordringen",
    desc: "Definer endringen dere må gjøre. Lytt til de ansatte som er nærmest utfordringen."
  },
  {
    title: "Kartlegg arbeidsflyten",
    desc: "Dokumentér hvordan arbeidsflyten er ved oppstart. Fang opp detaljer fra de faktiske brukerne av systemet."
  },
  {
    title: "Utforsk mulighetene",
    desc: "Idémyldring om AI-bruk og muligheter for å automatisere oppgaver. De ansatte fører an, AI tilfører idéer."
  },
  {
    title: "Lag en rask prototype av idéen",
    desc: "Sett opp en enkel testversjon og bli enige om hva som skal testes først."
  },
  {
    title: "Test løsningen sammen",
    desc: "Validér nytteverdien i praksis. Forbedringer gjøres etter tilbakemeldinger fra brukerne."
  },
  {
    title: "Forbedre og optimalisér",
    desc: "Overvåk og justér for å optimalisere etter bedriftens behov."
  },
  {
    title: "Implementér og støtt",
    desc: "Rull ut en løsning med full åpenhet der de ansatte beholder kontrollen."
  }];

  const steps = lang === "no" ? stepsNo : stepsEn;

  return (
    <div className="grid md:grid-cols-2 gap-5">
      {steps.map((s, i) =>
      <div key={i} className="flex items-start gap-3 bg-white border border-gray-200 p-4">
          <div className="bg-orange-600 text-black font-bold flex-shrink-0 h-8 w-8 rounded-full border-2 border-black flex items-center justify-center">
            {i + 1}
          </div>
          <div>
            <div className="font-semibold text-gray-900">{s.title}</div>
            <div className="text-sm text-gray-700">{s.desc}</div>
          </div>
        </div>
      )}
    </div>);

}
