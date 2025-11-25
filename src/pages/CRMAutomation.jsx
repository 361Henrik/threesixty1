
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
  Users, 
  ArrowRight, 
  CheckCircle, 
  BarChart3, 
  Mail, 
  Calendar,
  Phone,
  Target,
  TrendingUp,
  Clock
} from "lucide-react";

export default function CRMAutomation() {
  const relatedSolutions = [
    { title: "Email Marketing Automation", url: createPageUrl("EmailMarketing") },
    { title: "Customer Support AI", url: createPageUrl("CustomerSupport") },
    { title: "Financial Analytics Dashboard", url: createPageUrl("FinancialAnalytics") },
    { title: "Workflow Optimization Engine", url: createPageUrl("WorkflowOptimization") },
    { title: "Inventory Management System", url: createPageUrl("InventoryManagement") },
    { title: "Lead Scoring Intelligence", url: createPageUrl("CRMAutomation") }
  ];

  const automationUpdates = [
    {
      category: "SALES AUTOMATION",
      title: "Smart Lead Scoring Increases Conversion by 35%",
      description: "AI-powered lead qualification transforms sales pipeline efficiency.",
      url: createPageUrl("CRMAutomation")
    },
    {
      category: "CUSTOMER SUCCESS", 
      title: "Automated Follow-ups Never Miss a Beat",
      description: "Intelligent email sequences keep prospects engaged throughout the journey.",
      url: createPageUrl("EmailMarketing")
    },
    {
      category: "PIPELINE MANAGEMENT",
      title: "Visual Dashboards Boost Team Performance",
      description: "Real-time sales metrics help teams close more deals faster.",
      url: createPageUrl("FinancialAnalytics")
    }
  ];

  const testimonial = {
    quote: "ThreesixtyOne's CRM transformed how we handle leads. We've increased our conversion rate by 42% and our team loves how streamlined everything is now.",
    author: "Sarah Chen",
    title: "Sales Director, TechStart Solutions"
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-12 gap-8">

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
                Case Study
              </h3>
              <div className="bg-gray-100 p-4 border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  TechStart Solutions
                </h4>
                <p className="text-xs text-gray-600 mb-2">42% increase in lead conversion</p>
                <p className="text-xs text-gray-600">"{testimonial.quote}"</p>
              </div>
            </div>
          </aside>

          <main className="lg:col-span-6 border-l border-r border-gray-200 px-8">
            <div className="text-xs uppercase font-semibold text-gray-500 mb-2">
              SALES AUTOMATION <span className="text-gray-300 mx-1">|</span> FEATURED SOLUTION
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4 pb-3 border-b-4 border-black inline-block" style={{ fontFamily: 'Playfair Display, serif' }}>
              Turn Every Lead Into a Loyal Customer
            </h1>
            <div className="border-t-4 border-black pt-4 mb-6">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="CRM Dashboard" 
                className="w-full mb-4"
              />
            </div>
            
            <div className="mb-8">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:font-serif first-letter:float-left first-letter:mr-2 first-letter:mt-1">
                Stop letting potential customers slip through the cracks. Our intelligent CRM automation 
                ensures every lead gets the attention they deserve, automatically managing your entire 
                sales pipeline from first contact to closed deal.
              </p>

              <p className="text-base text-gray-700 mb-4 leading-relaxed">
                In today's competitive market, businesses that fail to nurture leads properly lose an 
                average of 79% of potential customers. Our CRM automation platform changes that entirely, 
                using artificial intelligence to identify high-value prospects and automatically engage 
                them with personalized sequences.
              </p>

              <p className="text-base text-gray-700 mb-6 leading-relaxed">
                The system learns from every interaction, continuously improving its ability to predict 
                which leads are most likely to convert. This means your sales team spends time with 
                qualified prospects while automation handles the rest.
              </p>
            </div>

            <div className="newspaper-divider my-8"></div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="text-xs uppercase font-semibold text-orange-600 mb-2">
                  LEAD MANAGEMENT
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Smart Lead Scoring & Routing
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Automatically capture, score, and route leads to the right team members based on 
                  behavior, demographics, and engagement patterns. Never lose a hot prospect again.
                </p>
                <div className="flex items-center text-green-600 mb-4">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">35% higher conversion rates</span>
                </div>
              </div>
              <div>
                <div className="text-xs uppercase font-semibold text-orange-600 mb-2">
                  AUTOMATION
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Intelligent Follow-up Sequences
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Personalized email sequences and task reminders ensure consistent follow-up. 
                  AI determines optimal timing and messaging for maximum engagement.
                </p>
                <div className="flex items-center text-green-600 mb-4">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">90% reduction in manual tasks</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 mb-8 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Get Started in 3 Simple Steps
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-1">1</div>
                  <div>
                    <div className="font-medium text-gray-900">Data Migration (2-3 days)</div>
                    <div className="text-sm text-gray-600">Securely transfer existing customer data and set up pipelines</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-1">2</div>
                  <div>
                    <div className="font-medium text-gray-900">Team Training (1 day)</div>
                    <div className="text-sm text-gray-600">Comprehensive training ensures quick workflow adoption</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-1">3</div>
                  <div>
                    <div className="font-medium text-gray-900">Go Live (Immediate)</div>
                    <div className="text-sm text-gray-600">Launch with confidence and continuous monitoring</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center py-6 bg-orange-50 border-2 border-orange-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                Ready to Transform Your Sales Process?
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Join 1,200+ businesses already using our CRM automation
              </p>
              <Link to={createPageUrl("Home")} className="cta-button inline-flex items-center">
                Start 14-Day Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </main>

          <aside className="lg:col-span-3">
            <h2 className="text-2xl font-bold mb-4 border-b-4 border-black pb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
              Automation Updates
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

            <div className="bg-gray-100 p-4 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                CRM Success Metrics
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Average ROI</span>
                  <span className="font-semibold">340%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Setup Time</span>
                  <span className="font-semibold">Less than 1 week</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Client Satisfaction</span>
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
