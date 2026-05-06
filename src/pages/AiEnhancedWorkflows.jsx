
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowLeft } from "lucide-react";
import SinglePullQuote from "@/components/home/SinglePullQuote";
import ImageWithFallback from "@/components/common/ImageWithFallback";

export default function AiEnhancedWorkflows() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Link to={createPageUrl("Home")} className="inline-flex items-center text-sm text-orange-600 hover:text-orange-700 mb-6 underline underline-offset-2">
          <ArrowLeft className="h-4 w-4 mr-1" /> GO BACK
        </Link>

        <header className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight" style={{ fontFamily: "Noto Serif Display, serif" }}>
            AI‑Enhanced Workflows
          </h1>
          <p className="text-gray-700 mt-2">
            Automate repetitive tasks and streamline operations with people‑in‑the‑loop workflows that your teams control.
          </p>
        </header>

        {/* Intro: drop box/frame, keep content */}
        <section className="mt-2">
          <div className="space-y-3">
            <p className="text-gray-800">
              We co‑design pragmatic automations around your real processes—freeing capacity while improving quality and speed.
            </p>
            <ul className="list-disc pl-5 text-gray-800 space-y-1">
              <li>Document prep, reporting, and follow‑ups automated</li>
              <li>Human review steps to keep quality and oversight</li>
              <li>Metrics dashboards to track time saved and impact</li>
            </ul>
            <div className="pt-2">
              <Link to={createPageUrl("Contact")} className="cta-button-outline inline-flex items-center">
                Book a friendly intro call with us
              </Link>
            </div>
          </div>
        </section>

        {/* Two-product section side by side: remove boxes, add vertical divider */}
        <section className="mt-10">
          <div className="products-grid grid md:grid-cols-2 gap-8">
            {/* Product 1: Workflow Automation & Orchestration */}
            <article className="p-0 md:p-0 bg-white">
              <header>
                <h3 className="text-2xl font-bold text-gray-900 leading-tight" style={{ fontFamily: "Noto Serif Display, serif" }}>
                  Workflow Automation &amp; Orchestration
                </h3>
                <p className="text-sm text-gray-600 mt-1">Free your teams from repetitive work</p>
              </header>
              <div className="pt-4 space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900" style={{ fontFamily: "Noto Serif Display, serif" }}>
                    The challenge
                  </h4>
                  <p className="text-gray-800 mt-2">
                    Not every process should be automated. But many complex, recurring tasks eat up hours of your best people’s time — compiling reports, gathering data, or formatting intelligence briefings. This isn’t strategic work, yet it keeps your strategic people from doing what really matters.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900" style={{ fontFamily: "Noto Serif Display, serif" }}>
                    What changes with us
                  </h4>
                  <p className="text-gray-800 mt-2">
                    We design intelligent workflows where AI handles the repetitive parts, while humans remain in control of judgment calls. Reports that used to take hours are now generated in minutes. Competitive briefs appear on time, every time, with higher consistency.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900" style={{ fontFamily: "Noto Serif Display, serif" }}>
                    What you walk away with
                  </h4>
                  <ul className="list-disc pl-5 text-gray-800 space-y-1 mt-2">
                    <li>Intelligent automation systems with human oversight.</li>
                    <li>Dashboards for control and monitoring.</li>
                    <li>Performance analytics showing hours saved and errors reduced.</li>
                    <li>Escalation protocols for when automation needs human review.</li>
                    <li>Expansion templates for applying automation across departments.</li>
                  </ul>
                </div>
                <div className="bg-amber-50 p-3 text-gray-900">
                  ✨ Result: Hours saved each week, decisions made faster, and teams freed up for growth.
                </div>
                <div className="pt-2">
                  <Link to={createPageUrl("Contact")} className="cta-button-outline inline-flex items-center">
                    Want to Know More?
                  </Link>
                </div>
              </div>
            </article>

            {/* Product 2: Business Process & Playbook Optimization */}
            <article className="p-0 md:p-0 bg-white">
              <header>
                <h3 className="text-2xl font-bold text-gray-900 leading-tight" style={{ fontFamily: "Noto Serif Display, serif" }}>
                  Business Process &amp; Playbook Optimization
                </h3>
                <p className="text-sm text-gray-600 mt-1">Make your institutional knowledge AI-ready</p>
              </header>
              <div className="pt-4 space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900" style={{ fontFamily: "Noto Serif Display, serif" }}>
                    The challenge
                  </h4>
                  <p className="text-gray-800 mt-2">
                    Generic AI gives generic answers. The real magic happens when AI understands your way of doing things — your playbooks, processes, and standards. The problem? That knowledge is often buried in SharePoint folders, outdated manuals, and old training decks. Valuable insights get lost, and new employees never benefit from your best thinking.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900" style={{ fontFamily: "Noto Serif Display, serif" }}>
                    What changes with us
                  </h4>
                  <p className="text-gray-800 mt-2">
                    We rediscover and structure your institutional knowledge so AI can apply it consistently. Instead of bending to “out of the box” logic, AI begins to reflect the way your business truly works when it’s at its best. That means faster onboarding, fewer errors, and outputs that sound like they came from your own experts.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900" style={{ fontFamily: "Noto Serif Display, serif" }}>
                    What you walk away with
                  </h4>
                  <ul className="list-disc pl-5 text-gray-800 space-y-1 mt-2">
                    <li>An AI-enhanced process library that captures your best practices.</li>
                    <li>A custom knowledge base for consistent answers across teams.</li>
                    <li>Quality control templates to ensure AI matches your standards.</li>
                    <li>Clear implementation guides for connecting your knowledge to any AI tool.</li>
                    <li>Update protocols so your content evolves as you do.</li>
                  </ul>
                </div>
                <div className="bg-amber-50 p-3 text-gray-900">
                  ✨ Result: Every AI tool becomes sharper, because it understands your unique DNA.
                </div>
                <div className="pt-2">
                  <Link to={createPageUrl("Contact")} className="cta-button-outline inline-flex items-center">
                    Turn your processes into growth engines
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Vertical divider styling for the two offers */}
        <style>{`
          .products-grid { position: relative; }
          @media (min-width: 768px) {
            .products-grid::before {
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

        {/* Remove the two Article Placeholder cards, keep the quote */}
        <section className="mt-10">
          <SinglePullQuote
            quote={{
              text: "Placeholder quote about speed, consistency, and freeing up teams to focus on meaningful work.",
              author: "Operations Lead",
              role: "Company Name"
            }}
            align="center"
            side="right"
            sideContent={
              <ImageWithFallback
                src="/assets/ai-workflows.png"
                alt="Workflow illustration placeholder"
                className="w-full"
                style={{ objectPosition: "center" }}
              />
            }
          />
        </section>
      </div>
    </div>
  );
}
