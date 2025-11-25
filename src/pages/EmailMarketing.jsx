
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import {
  Mail,
  ArrowRight,
  CheckCircle,
  BarChart3,
  Users,
  Target,
  Clock,
  Zap,
  TrendingUp,
  Calendar
} from "lucide-react";

export default function EmailMarketing() {
  const relatedSolutions = [
    { title: "CRM Lead Management", url: createPageUrl("CRMAutomation") },
    { title: "Customer Support Automation", url: createPageUrl("CustomerSupport") },
    { title: "Sales Analytics Dashboard", url: createPageUrl("FinancialAnalytics") },
    { title: "Marketing Workflow Engine", url: createPageUrl("WorkflowOptimization") },
    { title: "E-commerce Integration", url: createPageUrl("InventoryManagement") },
    { title: "Behavioral Trigger Systems", url: createPageUrl("EmailMarketing") }
  ];

  const automationUpdates = [
    {
      category: "EMAIL AUTOMATION",
      title: "AI Personalization Boosts Open Rates 45%",
      description: "Dynamic content adapts to each recipient's preferences and behavior.",
      url: createPageUrl("EmailMarketing")
    },
    {
      category: "CAMPAIGN ANALYTICS",
      title: "Revenue Tracking Shows 320% ROI",
      description: "Advanced attribution models prove email marketing effectiveness.",
      url: createPageUrl("FinancialAnalytics")
    },
    {
      category: "AUTOMATION WORKFLOWS",
      title: "Drip Sequences Convert 60% Better",
      description: "Intelligent timing and messaging optimization drives results.",
      url: createPageUrl("WorkflowOptimization")
    }
  ];

  const testimonial = {
    quote: "Our email revenue increased by 400% in just 3 months. The automation handles everything while we focus on creating great products.",
    author: "Mike Rodriguez",
    title: "Marketing Director, Craft & Co."
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-8">

          {/* Left Sidebar */}
          <aside className="lg:col-span-3 space-y-8">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider border-b-2 border-black pb-2 mb-4">
                Related Solutions
              </h3>
              <div className="grid grid-cols-1 gap-y-6">
                {relatedSolutions.map((item, index) => (
                  <div key={index} className={`pb-4 ${index < relatedSolutions.length - 1 ? 'border-b border-gray-300' : ''}`}>
                    <Link to={item.url} className="font-bold text-gray-800 hover:text-orange-600 transition-colors text-sm leading-tight block" style={{ fontFamily: 'Playfair Display, serif' }}>
                      » {item.title}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="newspaper-divider"></div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider border-b-2 border-black pb-2 mb-4">
                Success Story
              </h3>
              <div className="bg-gray-100 p-4 border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Craft & Co.
                </h4>
                <p className="text-xs text-gray-600 mb-2">400% revenue increase in 3 months</p>
                <p className="text-xs text-gray-600">"{testimonial.quote}"</p>
              </div>
            </div>
          </aside>

          {/* Center Content - Two Page Article */}
          <main className="lg:col-span-6 border-l border-r border-gray-200 px-8">
            <div className="text-xs uppercase font-semibold text-gray-500 mb-2">
              EMAIL MARKETING <span className="text-gray-300 mx-1">|</span> AUTOMATION PLATFORM
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4 pb-3 border-b-4 border-black inline-block" style={{ fontFamily: 'Playfair Display, serif' }}>
              Emails That Work While You Sleep
            </h1>
            <div className="border-t-4 border-black pt-4 mb-6">
              <img
                src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80"
                alt="Email Marketing Dashboard"
                className="w-full mb-4"
              />
            </div>

            {/* Page 1 */}
            <div className="mb-8">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:font-serif first-letter:float-left first-letter:mr-2 first-letter:mt-1">
                Transform your email marketing from a time-consuming chore into a profit-generating
                machine that runs automatically and delivers results 24/7. Our AI-powered platform
                learns from your data to send the right message at the perfect time.
              </p>

              <p className="text-base text-gray-700 mb-4 leading-relaxed">
                Most businesses struggle with email marketing because they lack the time and expertise
                to create effective campaigns. Our platform solves this by automating the entire
                process, from segmentation to send-time optimization.
              </p>

              <p className="text-base text-gray-700 mb-6 leading-relaxed">
                The system analyzes customer behavior patterns, purchase history, and engagement data
                to create personalized email journeys that convert 3x better than generic campaigns.
              </p>
            </div>

            <div className="newspaper-divider my-8"></div>

            {/* Page 2 - Email Sequence Visualization */}
            <div className="bg-gray-50 p-6 mb-8 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Automated Sequences That Convert
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { day: "Day 0", title: "Welcome Email", rate: "85% open" },
                  { day: "Day 3", title: "Educational Content", rate: "72% open" },
                  { day: "Day 7", title: "Social Proof", rate: "68% open" },
                  { day: "Day 14", title: "Special Offer", rate: "45% conversion" }
                ].map((email, index) => (
                  <div key={email.day} className="bg-green-50 border border-green-200 rounded p-3 text-center">
                    <div className="text-xs font-medium text-green-600 mb-1">{email.day}</div>
                    <div className="font-semibold text-gray-900 text-sm mb-1">{email.title}</div>
                    <div className="text-xs font-medium text-green-600">{email.rate}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="text-xs uppercase font-semibold text-orange-600 mb-2">
                  SMART TARGETING
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                  AI-Powered Segmentation
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Automatically group customers based on behavior, purchases, and engagement
                  patterns. Deliver personalized experiences that drive higher conversions.
                </p>
                <div className="flex items-center text-green-600 mb-4">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">60% higher click-through rates</span>
                </div>
              </div>
              <div>
                <div className="text-xs uppercase font-semibold text-orange-600 mb-2">
                  BEHAVIORAL TRIGGERS
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Perfect Timing Engine
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Send messages triggered by specific actions: cart abandonment, product views,
                  purchase anniversaries. Strike while the iron is hot.
                </p>
                <div className="flex items-center text-green-600 mb-4">
                  <Zap className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">320% more revenue per email</span>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center py-6 bg-green-50 border-2 border-green-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                Ready to 3X Your Email Revenue?
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Join 800+ businesses using our email automation
              </p>
              <Link to={createPageUrl("Home")} className="cta-button inline-flex items-center">
                Start 14-Day Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </main>

          {/* Right Sidebar */}
          <aside className="lg:col-span-3">
            <h2 className="text-2xl font-bold mb-4 border-b-4 border-black pb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
              Marketing Updates
            </h2>
            <div className="space-y-4">
              {automationUpdates.map((item, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <div className="text-xs uppercase font-semibold text-orange-600 mb-1">{item.category}</div>
                  <Link to={item.url} className="block group">
                    <h3 className="font-bold text-gray-900 leading-tight group-hover:underline" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                  </Link>
                </div>
              ))}
              <div className="pt-2">
                <Link to={createPageUrl("Home")} className="text-sm font-bold uppercase tracking-wider text-orange-600 hover:underline">
                  View All Solutions →
                </Link>
              </div>
            </div>

            <div className="newspaper-divider my-8"></div>

            {/* Performance Stats */}
            <div className="bg-gray-100 p-4 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                Email Performance
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Open Rate</span>
                  <span className="font-semibold">68.5%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Click Rate</span>
                  <span className="font-semibold">24.2%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Revenue/Email</span>
                  <span className="font-semibold">$4.32</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
