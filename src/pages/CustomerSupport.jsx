import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import {
  MessageSquare,
  ArrowRight,
  CheckCircle,
  Bot,
  Clock,
  Users,
  Star,
  Zap,
  BarChart3,
  MessageCircle
} from "lucide-react";

export default function CustomerSupport() {
  const relatedSolutions = [
    { title: "CRM Integration", url: createPageUrl("CRMAutomation") },
    { title: "Email Response Automation", url: createPageUrl("EmailMarketing") },
    { title: "Knowledge Base Management", url: createPageUrl("WorkflowOptimization") },
    { title: "Customer Satisfaction Analytics", url: createPageUrl("FinancialAnalytics") },
    { title: "Ticket Routing System", url: createPageUrl("CustomerSupport") },
    { title: "Live Chat Integration", url: createPageUrl("CustomerSupport") }
  ];

  const automationUpdates = [
    {
      category: "AI SUPPORT",
      title: "Chatbots Resolve 60% of Tickets Instantly",
      description: "Advanced AI handles routine questions with human-like understanding.",
      url: createPageUrl("CustomerSupport")
    },
    {
      category: "RESPONSE TIMES", 
      title: "Average Response Time Down to 2 Minutes",
      description: "Smart routing and automation dramatically improve customer experience.",
      url: createPageUrl("WorkflowOptimization")
    },
    {
      category: "SATISFACTION",
      title: "Customer Ratings Increase to 4.8/5",
      description: "Proactive support and faster resolutions boost satisfaction scores.",
      url: createPageUrl("FinancialAnalytics")
    }
  ];

  const testimonial = {
    quote: "Our customer satisfaction scores jumped from 3.2 to 4.8 stars. The AI handles routine questions perfectly, letting our team focus on complex issues.",
    author: "David Park",
    title: "Customer Success Manager, TechFlow"
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
                Customer Wins
              </h3>
              <div className="bg-gray-100 p-4 border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  TechFlow
                </h4>
                <p className="text-xs text-gray-600 mb-2">3.2 to 4.8 star rating improvement</p>
                <p className="text-xs text-gray-600">"{testimonial.quote}"</p>
              </div>
            </div>
          </aside>

          {/* Center Content */}
          <main className="lg:col-span-6 border-l border-r border-gray-200 px-8">
            <div className="text-xs uppercase font-semibold text-gray-500 mb-2">
              CUSTOMER SUPPORT <span className="text-gray-300 mx-1">|</span> AI-POWERED AUTOMATION
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              Support That Never Sleeps
            </h1>
            <div className="border-t-4 border-black pt-4 mb-6">
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1540&q=80" 
                alt="Customer Support Dashboard" 
                className="w-full mb-4"
              />
            </div>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Transform your customer support from a reactive cost center into a proactive 
              customer delight engine that works around the clock. Our AI-powered system 
              learns from every interaction to provide better, faster service.
            </p>

            <div className="newspaper-divider my-8"></div>

            {/* AI Chatbot Demo */}
            <div className="bg-gray-50 p-6 mb-8 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Watch Our AI in Action
              </h3>
              <div className="space-y-3 max-w-md">
                <div className="flex justify-end">
                  <div className="bg-blue-600 text-white rounded-lg p-3 text-sm">
                    Hi, I ordered a laptop 3 days ago but haven't received tracking info. Order #12345
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-900 rounded-lg p-3 text-sm">
                    Hi! I found your order #12345. Your MacBook Pro shipped yesterday via FedEx. 
                    Tracking: 1Z999AA1012345675. Expected delivery: Tomorrow by 3 PM. Would you like SMS updates?
                  </div>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center bg-green-50 border border-green-200 rounded px-3 py-1 text-xs">
                    <CheckCircle className="h-3 w-3 text-green-600 mr-1" />
                    Resolved in 90 seconds
                  </div>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="text-xs uppercase font-semibold text-orange-600 mb-2">
                  AI CHATBOT
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                  24/7 Intelligent Responses
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Instant responses to common questions, available around the clock. AI learns 
                  from every interaction to provide increasingly accurate answers.
                </p>
                <div className="flex items-center text-blue-600 mb-4">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">70% faster response times</span>
                </div>
              </div>
              <div>
                <div className="text-xs uppercase font-semibold text-orange-600 mb-2">
                  SMART ROUTING
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Expertise-Based Assignment
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Automatically route tickets to the right team member based on expertise, 
                  workload, and customer priority level.
                </p>
                <div className="flex items-center text-blue-600 mb-4">
                  <Users className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">3x more tickets handled</span>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center py-6 bg-blue-50 border border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                Ready to Delight Every Customer?
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Join 650+ companies using AI-powered support
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
              Support Updates
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

            {/* Support Metrics */}
            <div className="bg-gray-100 p-4 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                Support Metrics
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Response Time</span>
                  <span className="font-semibold">Less than 2 min</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Resolution Rate</span>
                  <span className="font-semibold">94%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Satisfaction</span>
                  <span className="font-semibold">4.8/5</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}