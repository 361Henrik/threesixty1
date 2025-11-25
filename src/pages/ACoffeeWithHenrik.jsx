import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowLeft } from "lucide-react";

export default function ACoffeeWithHenrik() {
  return (
    <div className="bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-10">
        <div className="mb-6">
          <Link
            to={createPageUrl("PracticalUseCases")}
            className="inline-flex items-center text-sm text-orange-600 hover:text-orange-700 underline underline-offset-2"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Practical Use Cases
          </Link>
        </div>

        <header className="mb-6">
          <h1
            className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight"
            style={{ fontFamily: "Noto Serif Display, serif" }}
          >
            A Coffee with Henrik C. Høst
          </h1>
        </header>

        <article className="prose prose-slate max-w-none">
          <p className="text-gray-800">
            We met Henrik at a quiet café in Oslo, where his energy fills the room as easily as the smell of fresh coffee.
            He smiles, especially when describing his deep dive into AI back in 2022. “People who know me can tell you I always
            go deep into whatever I do,” he admits. And I did.
          </p>
          <p className="text-gray-800 mt-3">
            Over the course of our conversation, Henrik shares why many AI initiatives stall, where the real ROI lies,
            and how he helps leaders move from pilots to measurable results.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-6" style={{ fontFamily: "Noto Serif Display, serif" }}>
            Q: Henrik, you’ve had a long career in leadership. What drew you into AI?
          </h2>
          <p className="text-gray-800 mt-2">
            Henrik: I’ve led transformations at Microsoft, Circle K, Coca-Cola, and in several startups. But when generative AI appeared,
            I realized that understanding it intellectually wouldn’t be enough. For me, the crucial step was to understand how AI creates real
            value in business contexts — not to become a data scientist or expert coder.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-6" style={{ fontFamily: "Noto Serif Display, serif" }}>
            Q: Why do so many AI initiatives stall before creating impact?
          </h2>
          <p className="text-gray-800 mt-2">
            Henrik: Research shows more than 90% of professionals use ChatGPT daily and see productivity gains, but almost 95% of corporate AI initiatives never scale.
            The issue isn’t the technology. It’s the execution gap between pilots and integrated systems. That’s where I focus — helping leaders bridge that gap.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-6" style={{ fontFamily: "Noto Serif Display, serif" }}>
            Q: Where have you seen the biggest ROI from AI use cases?
          </h2>
          <p className="text-gray-800 mt-2">
            Henrik: The flashy sales and marketing pilots get attention, but the real impact often comes from back-office automation. When you streamline processes
            or eliminate outsourcing, you reduce costs and free up capacity. That’s where companies unlock growth.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-6" style={{ fontFamily: "Noto Serif Display, serif" }}>
            Q: What’s different about your approach?
          </h2>
          <p className="text-gray-800 mt-2">
            Henrik: I bring leadership and AI together. I know which use cases deliver ROI, I can prototype solutions in days, and I understand the organizational side —
            change management, workflows, governance — the things that decide whether an AI pilot scales or fades away.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-6" style={{ fontFamily: "Noto Serif Display, serif" }}>
            Q: What do executives need most right now?
          </h2>
          <p className="text-gray-800 mt-2">
            Henrik: Not more hype, and not another “AI 101” workshop. They need someone who knows both leadership and AI — and how to turn pilots into lasting enterprise value.
            That’s what I bring through ThreeSixtyOne.
          </p>

          <p className="text-gray-800 mt-6">
            As our coffee cups emptied, Henrik glanced at his watch and smiled: “I need to head off to my next meeting — we’re mapping out AI use cases for a client,
            and those are always the most energizing conversations.”
          </p>
          <p className="text-gray-800 mt-3">
            He stood up, still animated, his mix of warmth and sharp insight lingering like the last sip of espresso. Talking with Henrik makes one thing clear:
            he doesn’t just study AI — he lives it, and he’s eager to help others turn it into real results.
          </p>
        </article>
      </div>
    </div>
  );
}