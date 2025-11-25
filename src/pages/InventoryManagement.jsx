
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import {
  ArrowRight,
  CheckCircle,
  TrendingUp,
} from "lucide-react";

export default function InventoryManagement() {
  // New data structures for the newspaper layout
  const relatedSolutions = [
    { title: "Sales Analytics Integration", url: createPageUrl("FinancialAnalytics") },
    { title: "Order Processing Automation", url: createPageUrl("WorkflowOptimization") },
    { title: "Customer Demand Insights", url: createPageUrl("CRMAutomation") },
    { title: "Supply Chain Notifications", url: createPageUrl("EmailMarketing") },
    { title: "Support Ticket Integration", url: createPageUrl("CustomerSupport") },
    { title: "Multi-Channel Sync", url: createPageUrl("InventoryManagement") }
  ];

  const automationUpdates = [
    {
      category: "INVENTORY INTELLIGENCE",
      title: "AI Predicts Stockouts 90 Days Ahead",
      description: "Machine learning analyzes patterns to prevent inventory shortages.",
      url: createPageUrl("InventoryManagement")
    },
    {
      category: "COST OPTIMIZATION",
      title: "Smart Reordering Cuts Costs by 25%",
      description: "Automated purchase orders based on demand forecasting and supplier data.",
      url: createPageUrl("FinancialAnalytics")
    },
    {
      category: "MULTI-CHANNEL",
      title: "Real-Time Sync Prevents Overselling",
      description: "Inventory levels update instantly across all sales channels.",
      url: createPageUrl("WorkflowOptimization")
    }
  ];

  // Testimonial remains, but its usage is updated
  const testimonial = {
    quote: "We went from constant stockouts to perfect inventory balance. Our cash flow improved by 60% and we never run out of bestsellers anymore.",
    author: "Jennifer Liu",
    title: "Operations Manager, Urban Boutique"
  };

  // The 'features' and 'benefits' arrays from the original code are no longer needed
  // under the new newspaper layout structure, so they are removed.

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
            {/* Newspaper Divider */}
            <div className="border-t-2 border-gray-300 border-dashed my-8"></div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider border-b-2 border-black pb-2 mb-4">
                Client Success
              </h3>
              <div className="bg-gray-100 p-4 border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Urban Boutique
                </h4>
                <p className="text-xs text-gray-600 mb-2">60% cash flow improvement</p>
                <p className="text-xs text-gray-600">"{testimonial.quote}"</p>
              </div>
            </div>
          </aside>

          {/* Center Content */}
          <main className="lg:col-span-6 border-l border-r border-gray-200 px-8">
            <div className="text-xs uppercase font-semibold text-gray-500 mb-2">
              INVENTORY MANAGEMENT <span className="text-gray-300 mx-1">|</span> SMART FORECASTING
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4 pb-3 border-b-4 border-black inline-block" style={{ fontFamily: 'Playfair Display, serif' }}>
              Never Run Out of Best Sellers Again
            </h1>
            <img
              src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
              alt="Inventory Management System"
              className="w-full mb-4"
            />

            <p className="text-lg text-gray-700 mb-6 leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:font-serif first-letter:float-left first-letter:mr-2 first-letter:mt-1">
              Transform chaotic inventory management into a predictive, automated system that
              keeps your customers happy and your cash flow healthy. Our AI analyzes sales patterns,
              seasonality, and trends to keep your inventory perfectly balanced.
            </p>

            {/* Newspaper Divider */}
            <div className="border-t-2 border-gray-300 border-dashed my-8"></div>

            {/* Predictive Analytics Showcase */}
            <div className="bg-gray-50 p-6 mb-8 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Predictive Intelligence in Action
              </h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                {[
                  { month: "Jan", predicted: 120, actual: 118, accuracy: "98%" },
                  { month: "Feb", predicted: 95, actual: 92, accuracy: "97%" },
                  { month: "Mar", predicted: 140, actual: 145, accuracy: "96%" },
                  { month: "Apr", predicted: 180, actual: 175, accuracy: "97%" }
                ].map((data) => (
                  <div key={data.month} className="bg-purple-50 border border-purple-200 rounded p-3">
                    <div className="font-medium text-gray-900 mb-1">{data.month}</div>
                    <div className="text-xs text-gray-600">
                      Predicted: <span className="font-medium">{data.predicted}</span> |
                      Actual: <span className="font-medium">{data.actual}</span>
                    </div>
                    <div className="text-xs font-medium text-purple-600">{data.accuracy}</div>
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-600 italic">
                AI forecast accuracy consistently above 96% helps optimize purchasing decisions
              </div>
            </div>

            {/* Key Features */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="text-xs uppercase font-semibold text-orange-600 mb-2">
                  REAL-TIME TRACKING
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Instant Stock Visibility
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Monitor stock levels across all locations with instant updates. Smart alerts
                  notify you of low stock, overstocking, and optimal reorder points.
                </p>
                <div className="flex items-center text-purple-600 mb-4">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">80% reduction in stockouts</span>
                </div>
              </div>
              <div>
                <div className="text-xs uppercase font-semibold text-orange-600 mb-2">
                  AUTO-REORDERING
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Intelligent Purchase Orders
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Automatic purchase orders based on predefined rules, demand forecasts, and
                  supplier lead times. Never manually reorder again.
                </p>
                <div className="flex items-center text-purple-600 mb-4">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">35% improvement in cash flow</span>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center py-6 bg-purple-50 border-2 border-purple-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                Ready to Optimize Your Inventory?
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Join 450+ retailers using smart inventory management
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
              Inventory Updates
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

            {/* Newspaper Divider */}
            <div className="border-t-2 border-gray-300 border-dashed my-8"></div>

            {/* Inventory Health */}
            <div className="bg-gray-100 p-4 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                System Metrics
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Forecast Accuracy</span>
                  <span className="font-semibold">97%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Setup Time</span>
                  <span className="font-semibold">1 week</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">ROI</span>
                  <span className="font-semibold">280%</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
