
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import {
  DollarSign,
  ArrowRight,
  CheckCircle,
  BarChart3,
  TrendingUp,
  PieChart,
  AlertCircle,
  Clock,
  Target,
  Calculator
} from "lucide-react";

export default function FinancialAnalytics() {
  const relatedSolutions = [
    { title: "Revenue Tracking Integration", url: createPageUrl("CRMAutomation") },
    { title: "Expense Automation", url: createPageUrl("WorkflowOptimization") },
    { title: "Cash Flow Notifications", url: createPageUrl("EmailMarketing") },
    { title: "Inventory Cost Analysis", url: createPageUrl("InventoryManagement") },
    { title: "Customer Profitability Reports", url: createPageUrl("CustomerSupport") },
    { title: "Tax Optimization Engine", url: createPageUrl("FinancialAnalytics") }
  ];

  const automationUpdates = [
    {
      category: "FINANCIAL INTELLIGENCE",
      title: "AI Discovers $12K in Hidden Deductions",
      description: "Machine learning identifies overlooked tax savings and cost optimizations.",
      url: createPageUrl("FinancialAnalytics")
    },
    {
      category: "CASH FLOW",
      title: "Predictive Alerts Prevent Payment Issues",
      description: "90-day forecasting helps businesses avoid cash flow surprises.",
      url: createPageUrl("WorkflowOptimization")
    },
    {
      category: "PROFIT ANALYSIS",
      title: "Margin Analysis Reveals 25% Boost Opportunity",
      description: "Deep profitability insights show which services drive the most value.",
      url: createPageUrl("CRMAutomation")
    }
  ];

  const testimonial = {
    quote: "We discovered we were losing money on 30% of our services. After optimization, our profit margins increased by 40%. The insights are incredible.",
    author: "Maria Santos",
    title: "CFO, Digital Solutions Inc."
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
            <div className="border-t border-dashed border-gray-300 w-full my-6"></div> {/* newspaper-divider */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider border-b-2 border-black pb-2 mb-4">
                Financial Win
              </h3>
              <div className="bg-gray-100 p-4 border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Digital Solutions Inc.
                </h4>
                <p className="text-xs text-gray-600 mb-2">40% profit margin increase</p>
                <p className="text-xs text-gray-600">"{testimonial.quote}"</p>
              </div>
            </div>
          </aside>

          {/* Center Content */}
          <main className="lg:col-span-6 border-l border-r border-gray-200 px-8">
            <div className="text-xs uppercase font-semibold text-gray-500 mb-2">
              FINANCIAL ANALYTICS <span className="text-gray-300 mx-1">|</span> BUSINESS INTELLIGENCE
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              See Your Money Crystal Clear
            </h1>
            <div className="border-t-4 border-black pt-4 mb-6">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Financial Analytics Dashboard"
                className="w-full mb-4"
              />
            </div>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Stop flying blind with your finances. Get real-time insights, predictive analytics,
              and actionable recommendations that boost profitability. Our AI analyzes every
              transaction to help you make smarter, more profitable decisions.
            </p>

            <div className="border-t border-dashed border-gray-300 w-full my-6"></div> {/* newspaper-divider */}

            {/* Financial Command Center */}
            <div className="bg-gray-50 p-6 mb-8 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Your Financial Command Center
              </h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-green-50 border border-green-200 rounded p-3">
                  <div className="text-sm text-green-600 font-medium">Cash Flow Health</div>
                  <div className="text-xl font-bold text-green-700">Strong</div>
                  <div className="text-xs text-gray-600">3.2 months runway improvement</div>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded p-3">
                  <div className="text-sm text-blue-600 font-medium">Profit Margin</div>
                  <div className="text-xl font-bold text-blue-700">68.5%</div>
                  <div className="text-xs text-gray-600">+12% vs industry average</div>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                <strong>AI Recommendations:</strong> Save $8.2K/month by switching software vendors.
                Potential annual savings: $98K
              </div>
            </div>

            {/* Key Features */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="text-xs uppercase font-semibold text-orange-600 mb-2">
                  REAL-TIME DASHBOARD
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Live Financial Metrics
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Live financial metrics and KPIs updated automatically from all systems.
                  Monitor revenue, expenses, profit margins, and cash flow in real-time.
                </p>
                <div className="flex items-center text-green-600 mb-4">
                  <BarChart3 className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">80% faster financial reporting</span>
                </div>
              </div>
              <div>
                <div className="text-xs uppercase font-semibold text-orange-600 mb-2">
                  PREDICTIVE ANALYTICS
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                  90-Day Cash Flow Forecasting
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  AI-powered predictions identify cash flow issues before they happen.
                  Get advance warning of payment delays and revenue fluctuations.
                </p>
                <div className="flex items-center text-green-600 mb-4">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">25% improvement in profit margins</span>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center py-6 bg-green-50 border border-green-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                Ready to Maximize Your Profits?
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Join 950+ businesses using financial analytics to boost profitability
              </p>
              <Link to={createPageUrl("Home")} className="cta-button inline-flex items-center no-underline">
                Start 14-Day Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </main>

          {/* Right Sidebar */}
          <aside className="lg:col-span-3">
            <h2 className="text-2xl font-bold mb-4 border-b-4 border-black pb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
              Financial Updates
            </h2>
            <div className="space-y-4">
              {automationUpdates.map((item, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <div className="text-xs uppercase font-semibold text-orange-600 mb-1">{item.category}</div>
                  <Link to={item.url} className="block group no-underline">
                    <h3 className="font-bold text-gray-900 leading-tight group-hover:underline" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                  </Link>
                </div>
              ))}
              <div className="pt-2">
                <Link to={createPageUrl("Home")} className="text-sm font-bold uppercase tracking-wider text-orange-600 hover:underline no-underline">
                  View All Solutions →
                </Link>
              </div>
            </div>

            <div className="border-t border-dashed border-gray-300 w-full my-6"></div> {/* newspaper-divider */}

            {/* Financial Health */}
            <div className="bg-gray-100 p-4 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                Financial Health Score
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Monthly Revenue</span>
                  <span className="font-semibold">$127K</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Gross Margin</span>
                  <span className="font-semibold">68.5%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Score</span>
                  <span className="font-semibold text-green-600">92/100</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
