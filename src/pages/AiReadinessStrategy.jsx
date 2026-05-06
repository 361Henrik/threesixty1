
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowLeft } from "lucide-react";
import SinglePullQuote from "@/components/home/SinglePullQuote";
import ImageWithFallback from "@/components/common/ImageWithFallback";

export default function AiReadinessStrategy() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Link to={createPageUrl("Home")} className="inline-flex items-center text-sm text-orange-600 hover:text-orange-700 mb-6 underline underline-offset-2">
          <ArrowLeft className="h-4 w-4 mr-1" /> GO BACK
        </Link>
        <header className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight" style={{ fontFamily: "Noto Serif Display, serif" }}>
            AI Mastery Training & Strategic Readiness
          </h1>
          <p className="text-gray-700 mt-2">
            Build AI-capable teams and spot real opportunities
          </p>
        </header>

        {/* Key content section (frame removed) */}
        <section className="bg-white">
          <div className="pt-4 space-y-5">
            <div>
              <h3 className="text-xl font-semibold text-gray-900" style={{ fontFamily: "Noto Serif Display, serif" }}>
                The challenge
              </h3>
              <p className="text-gray-800 mt-2">
                AI adoption often stalls not because of the tools, but because teams don’t know how to think differently. Prompting tips aren’t enough — what you need is a mindset shift.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900" style={{ fontFamily: "Noto Serif Display, serif" }}>
                What changes working with us:
              </h3>
              <ul className="list-disc pl-5 text-gray-800 space-y-1 marker:text-orange-600 mt-2">
                <li>Your people start seeing AI opportunities across the business.</li>
                <li>Training goes beyond theory — connected to your actual processes.</li>
                <li>You get an oversight of today’s tools, and for what’s coming.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900" style={{ fontFamily: "Noto Serif Display, serif" }}>
                What you walk away with:
              </h3>
              <ul className="list-disc pl-5 text-gray-800 space-y-1 marker:text-orange-600 mt-2">
                <li>An AI opportunity map with concrete use cases.</li>
                <li>A prompt library tailored to your workflows.</li>
                <li>A strategic 6–18 month roadmap aligned with your planning cycle.</li>
                <li>Internal champions who can drive adoption.</li>
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-200 p-3 text-gray-900">
              ✨ Result: Confidence, clarity, and a team that no longer waits for consultants to make AI decisions.
            </div>

            <div className="pt-2">
              <Link to={createPageUrl("Contact")} className="cta-button-outline inline-flex items-center">
                Get in Touch
              </Link>
            </div>
          </div>
        </section>

        {/* Placeholders: two articles + pull quote with image */}
        <section className="mt-10 space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            <article className="border-2 border-black p-5 bg-white">
              <h3 className="text-xl font-semibold text-gray-900" style={{ fontFamily: "Noto Serif Display, serif" }}>Article Placeholder 1</h3>
              <p className="mt-2 text-gray-700 text-sm">
                This is a placeholder for a deeper article related to AI readiness and strategy. Replace with your content describing approach, steps, and examples.
              </p>
            </article>
            <article className="border-2 border-black p-5 bg-white">
              <h3 className="text-xl font-semibold text-gray-900" style={{ fontFamily: "Noto Serif Display, serif" }}>Article Placeholder 2</h3>
              <p className="mt-2 text-gray-700 text-sm">
                Another placeholder article. Add case studies, KPIs, or a short playbook for stakeholders to understand outcomes and next actions.
              </p>
            </article>
          </div>

          <SinglePullQuote
            quote={{
              text: "Placeholder pull quote from a client or stakeholder about clarity, alignment, and practical strategy.",
              author: "Client Name",
              role: "Role / Company"
            }}
            align="center"
            side="right"
            sideContent={
              <ImageWithFallback
                src="/assets/ai-readiness.jpg"
                alt="Placeholder visual"
                className="w-full border-2 border-black"
                style={{ objectPosition: "center" }}
              />
            }
          />
        </section>
      </div>
    </div>
  );
}
