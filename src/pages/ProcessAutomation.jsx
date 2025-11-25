
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
  ArrowRight, 
  CheckCircle, 
  Zap, 
  Target,
  Clock,
  TrendingUp,
  Workflow,
  FileText
} from "lucide-react";

export default function ProcessAutomation() {
  const relatedSolutions = [
    { title: "Employee Review Automation", url: createPageUrl("EmployeeReviews") },
    { title: "Strategic Meeting Systems", url: createPageUrl("StrategicMeetings") },
    { title: "Customer Feedback Processing", url: createPageUrl("CustomerFeedback") },
    { title: "Document Generation", url: createPageUrl("ProcessAutomation") },
    { title: "Data Entry Automation", url: createPageUrl("ProcessAutomation") },
    { title: "Report Generation", url: createPageUrl("ProcessAutomation") }
  ];

  const automationUpdates = [
    {
      category: "PRODUCTIVITY BOOST",
      title: "Administrative Tasks Reduced by 80%",
      description: "Smart automation eliminates repetitive work and frees teams for strategic activities.",
      url: createPageUrl("ProcessAutomation")
    },
    {
      category: "ERROR REDUCTION",
      title: "Data Entry Errors Drop to Near Zero",
      description: "Automated processes eliminate human error in routine administrative tasks.",
      url: createPageUrl("ProcessAutomation")
    },
    {
      category: "TIME SAVINGS",
      title: "Teams Save 20+ Hours Per Week",
      description: "Process automation returns valuable time to focus on business growth activities.",
      url: createPageUrl("ProcessAutomation")
    }
  ];

  const testimonial = {
    quote: "We used to spend entire days on paperwork and data entry. Now those same tasks happen automatically while we focus on serving customers and growing the business.",
    author: "Roberto Silva",
    title: "Operations Manager, Precision Manufacturing"
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-12 gap-8">

          <aside className="lg:col-span-3 space-y-8">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider border-b-2 border-black pb-2 mb-4">
                Efficiency Win
              </h3>
              <div className="bg-gray-100 p-4 border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Precision Manufacturing
                </h4>
                <p className="text-xs text-gray-600 mb-2">Days of paperwork → automated in minutes</p>
                <p className="text-xs text-gray-600">"{testimonial.quote}"</p>
              </div>
            </div>
          </aside>

          <main className="lg:col-span-6 border-l border-r border-gray-200 px-8">
            <div className="text-xs uppercase font-semibold text-gray-500 mb-2">
              PROCESS OPTIMIZATION <span className="text-gray-300 mx-1">|</span> BUSINESS AUTOMATION
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              Stop Drowning in Paperwork and Admin Tasks
            </h1>
            <div className="border-t-4 border-black pt-4 mb-6">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Business process automation" 
                className="w-full mb-4"
              />
            </div>
            
            <div className="mb-8">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Eliminate the boring, repetitive tasks that waste your team's time and energy. Our intelligent process automation handles data entry, document generation, and administrative workflows so your people can focus on what actually grows your business.
              </p>

              <p className="text-base text-gray-700 mb-4 leading-relaxed">
                Small business owners and their teams spend an average of 21 hours per week on mundane administrative tasks that could be automated. That's more than half a working week lost to busy work instead of business development.
              </p>

              <p className="text-base text-gray-700 mb-6 leading-relaxed">
                Our automation solutions learn your existing processes and gradually take over the tedious parts while keeping you in control of the important decisions. Start small, scale up, and watch your productivity soar.
              </p>
            </div>

            <div className="newspaper-divider my-8"></div>

            <div className="bg-gray-50 p-6 mb-8 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Common Automation Wins
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { task: "Data Entry", before: "4 hours/day", after: "15 minutes/day", savings: "94% time saved" },
                  { task: "Invoice Processing", before: "2 days/week", after: "30 minutes/week", savings: "90% time saved" },
                  { task: "Report Generation", before: "6 hours/month", after: "Automatic", savings: "100% time saved" },
                  { task: "Customer Onboarding", before: "3 hours/client", after: "20 minutes/client", savings: "89% time saved" }
                ].map((item, index) => (
                  <div key={item.task} className="bg-indigo-50 border border-indigo-200 rounded p-4">
                    <div className="flex justify-between items-center mb-2">
                      <div className="font-semibold text-gray-900">{item.task}</div>
                      <div className="text-sm font-medium text-indigo-600">{item.savings}</div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Before: {item.before}</span>
                      <span>After: {item.after}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="text-xs uppercase font-semibold text-orange-600 mb-2">
                  SMART WORKFLOWS
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Tasks That Do Themselves
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Intelligent workflows trigger automatically based on events, dates, or data changes. 
                  Set it up once and let automation handle the repetitive work forever.
                </p>
                <div className="flex items-center text-indigo-600 mb-4">
                  <Zap className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">85% reduction in manual tasks</span>
                </div>
              </div>
              <div>
                <div className="text-xs uppercase font-semibold text-orange-600 mb-2">
                  ZERO ERRORS
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Eliminate Human Error
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Automated processes follow exact rules every time. No more typos, missed steps, 
                  or forgotten follow-ups. Consistent quality at scale.
                </p>
                <div className="flex items-center text-indigo-600 mb-4">
                  <Target className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">99.8% accuracy rate</span>
                </div>
              </div>
            </div>

            <div className="text-center py-6 bg-indigo-50 border border-indigo-200 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                Ready to Eliminate Busy Work Forever?
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Join 520+ businesses using process automation to work smarter
              </p>
              <Link to={createPageUrl("Home")} className="cta-button inline-flex items-center">
                Start 14-Day Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Related Solutions moved here */}
            <div className="newspaper-divider my-8"></div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Related Solutions
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {relatedSolutions.map((item, index) => (
                  <div key={index} className="pb-4 border-b border-gray-300">
                    <Link to={item.url} className="font-bold text-gray-800 hover:text-orange-600 transition-colors text-sm leading-tight block" style={{ fontFamily: 'Playfair Display, serif' }}>
                      » {item.title}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </main>

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

            <div className="newspaper-divider my-8"></div>

            <div className="bg-gray-100 p-4 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                Automation Results
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Time Savings</span>
                  <span className="font-semibold">20+ hrs/week</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Error Reduction</span>
                  <span className="font-semibold">99.8%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">ROI</span>
                  <span className="font-semibold">450%</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
