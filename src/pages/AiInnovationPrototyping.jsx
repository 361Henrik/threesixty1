
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowLeft } from "lucide-react";
import SinglePullQuote from "@/components/home/SinglePullQuote";
import ImageWithFallback from "@/components/common/ImageWithFallback";

export default function AiInnovationPrototyping() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Link to={createPageUrl("Home")} className="inline-flex items-center text-sm text-orange-600 hover:text-orange-700 mb-6 underline underline-offset-2">
          <ArrowLeft className="h-4 w-4 mr-1" /> GO BACK
        </Link>
        <header className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight" style={{ fontFamily: "Noto Serif Display, serif" }}>
            AI Innovation & Prototyping
          </h1>
          <p className="text-gray-700 mt-2">
            Turn ideas into working prototypes in days—validate value quickly before you invest.
          </p>
        </header>

        <section className="border-2 border-black p-6 bg-white">
          <div className="border-t-4 border-black pt-4 space-y-3">
            <p className="text-gray-800">
              Explore new revenue streams and efficiencies with low‑risk experiments built around your data and constraints.
            </p>
            <ul className="list-disc pl-5 text-gray-800 space-y-1">
              <li>Rapid prototyping sprints with clear success criteria</li>
              <li>Evidence‑based decision making (keep/iterate/kill)</li>
              <li>Knowledge transfer and enablement for your teams</li>
            </ul>
            <div className="pt-2">
              <Link to={createPageUrl("Contact")} className="cta-button-outline inline-flex items-center">
                Book a friendly intro call with us
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
                Placeholder content focused on rapid prototyping, user testing, and value validation in days, not months.
              </p>
            </article>
            <article className="border-2 border-black p-5 bg-white">
              <h3 className="text-xl font-semibold text-gray-900" style={{ fontFamily: "Noto Serif Display, serif" }}>Article Placeholder 2</h3>
              <p className="mt-2 text-gray-700 text-sm">
                Placeholder content on how to define success criteria, evaluate evidence, and decide to keep, iterate, or stop.
              </p>
            </article>
          </div>

          <SinglePullQuote
            quote={{
              text: "Placeholder quote about evidence over hype and learning quickly with real users.",
              author: "Product Leader",
              role: "Company Name"
            }}
            align="center"
            side="right"
            sideContent={
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&q=80&auto=format&fit=crop"
                alt="Prototype placeholder"
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
