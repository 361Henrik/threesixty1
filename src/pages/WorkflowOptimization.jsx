
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
  ArrowRight, 
  CheckCircle, 
  Zap, 
  Target,
  X 
} from "lucide-react";

export default function WorkflowOptimization() {
  const relatedSolutions = [
    { title: "Process Analytics", url: createPageUrl("FinancialAnalytics") },
    { title: "Team Collaboration Tools", url: createPageUrl("CustomerSupport") },
    { title: "Automated Email Workflows", url: createPageUrl("EmailMarketing") },
    { title: "CRM Process Integration", url: createPageUrl("CRMAutomation") },
    { title: "Inventory Process Sync", url: createPageUrl("InventoryManagement") },
    { title: "Custom Workflow Builder", url: createPageUrl("WorkflowOptimization") }
  ];

  const automationUpdates = [
    {
      category: "PROCESS AUTOMATION",
      title: "Order Processing Time Cut by 95%",
      description: "From 3 days to 3 hours with intelligent workflow automation.",
      url: createPageUrl("WorkflowOptimization")
    },
    {
      category: "TEAM PRODUCTIVITY", 
      title: "Manual Tasks Reduced by 80%",
      description: "Smart workflows eliminate repetitive work and reduce errors.",
      url: createPageUrl("FinancialAnalytics")
    },
    {
      category: "BOTTLENECK DETECTION",
      title: "AI Identifies Process Slowdowns Automatically",
      description: "Machine learning spots inefficiencies and suggests optimizations.",
      url: createPageUrl("CustomerSupport")
    }
  ];

  const testimonial = {
    quote: "Our order processing time went from 3 days to 3 hours. The automated workflows handle everything seamlessly, and our team can focus on strategy instead of busywork.",
    author: "Alex Thompson",
    title: "Operations Director, FastTrack Logistics"
  };

  // Helper for the newspaper-style divider
  const NewspaperDivider = () => (
    <div className="flex items-center my-6">
      <div className="flex-grow border-t border-gray-300"></div>
      <div className="w-2 h-2 bg-gray-300 rounded-full mx-2"></div>
      <div className="flex-grow border-t border-gray-300"></div>
    </div>
  );

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
            <NewspaperDivider />
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider border-b-2 border-black pb-2 mb-4">
                Process Win
              </h3>
              <div className="bg-gray-100 p-4 border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  FastTrack Logistics
                </h4>
                <p className="text-xs text-gray-600 mb-2">3 days → 3 hours processing time</p>
                <p className="text-xs text-gray-600">"{testimonial.quote}"</p>
              </div>
            </div>
          </aside>

          {/* Center Content */}
          <main className="lg:col-span-6 border-l border-r border-gray-200 px-8">
            <div className="text-xs uppercase font-semibold text-gray-500 mb-2">
              WORKFLOW OPTIMIZATION <span className="text-gray-300 mx-1">|</span> PROCESS AUTOMATION
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              Turn Chaos Into Smooth Operations
            </h1>
            <div className="border-t-4 border-black pt-4 mb-6">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Workflow Optimization Dashboard" 
                className="w-full mb-4"
              />
            </div>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Transform your business processes from time-consuming bottlenecks into efficient, 
              automated workflows that scale with your growth. Our AI learns your processes 
              and optimizes them continuously, eliminating bottlenecks automatically.
            </p>

            <NewspaperDivider />

            {/* Process Transformation */}
            <div className="bg-gray-50 p-6 mb-8 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                From Manual Chaos to Automated Excellence
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-semibold text-red-700 mb-3 flex items-center">
                    <X className="h-4 w-4 mr-1" />
                    Before: Manual Process
                  </h4>
                  <div className="space-y-2">
                    <div className="text-xs bg-red-50 border border-red-200 rounded p-2">
                      <div className="font-medium">Customer email submission</div>
                      <div className="text-red-600">15 min manual entry, errors common</div>
                    </div>
                    <div className="text-xs bg-red-50 border border-red-200 rounded p-2">
                      <div className="font-medium">Manager approval</div>
                      <div className="text-red-600">4+ hours delays, lost forms</div>
                    </div>
                  </div>
                  <div className="mt-3 text-xs text-red-800 font-medium">Total: 5+ hours</div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-green-700 mb-3 flex items-center">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    After: Automated Workflow
                  </h4>
                  <div className="space-y-2">
                    <div className="text-xs bg-green-50 border border-green-200 rounded p-2">
                      <div className="font-medium">Smart form auto-capture</div>
                      <div className="text-green-600">Instant, zero errors</div>
                    </div>
                    <div className="text-xs bg-green-50 border border-green-200 rounded p-2">
                      <div className="font-medium">Auto-approval/routing</div>
                      <div className="text-green-600">Rule-based, instant</div>
                    </div>
                  </div>
                  <div className="mt-3 text-xs text-green-800 font-medium">Total: 2 minutes</div>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="text-xs uppercase font-semibold text-orange-600 mb-2">
                  PROCESS AUTOMATION
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Eliminate Repetitive Tasks
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Smart workflows run automatically, handling routine tasks without human 
                  intervention. Focus your team on strategy while automation handles operations.
                </p>
                <div className="flex items-center text-indigo-600 mb-4">
                  <Zap className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">60% faster task completion</span>
                </div>
              </div>
              <div>
                <div className="text-xs uppercase font-semibold text-orange-600 mb-2">
                  BOTTLENECK DETECTION
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                  AI Identifies Slowdowns
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Machine learning analyzes your processes to identify bottlenecks and 
                  suggests optimizations automatically. Continuous improvement built-in.
                </p>
                <div className="flex items-center text-indigo-600 mb-4">
                  <Target className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">90% reduction in process errors</span>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center py-6 bg-indigo-50 border border-indigo-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                Ready to Eliminate Business Bottlenecks?
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Join 750+ businesses using workflow optimization to operate efficiently
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
              Process Updates
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

            <NewspaperDivider />

            {/* Process Efficiency */}
            <div className="bg-gray-100 p-4 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                Process Efficiency
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Time Savings</span>
                  <span className="font-semibold">↓ 60%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Error Reduction</span>
                  <span className="font-semibold">↓ 90%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Team Productivity</span>
                  <span className="font-semibold">↑ 45%</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
