
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
  MessageSquare, 
  ArrowRight, 
  CheckCircle, 
  TrendingUp,
  AlertCircle,
  Star,
  BarChart3,
  Target
} from "lucide-react";

export default function CustomerFeedback() {
  const relatedSolutions = [
    { title: "Employee Review Systems", url: createPageUrl("EmployeeReviews") },
    { title: "Strategic Meeting Planning", url: createPageUrl("StrategicMeetings") },
    { title: "Business Process Automation", url: createPageUrl("ProcessAutomation") },
    { title: "Reputation Management", url: createPageUrl("CustomerFeedback") },
    { title: "Customer Satisfaction Tracking", url: createPageUrl("CustomerFeedback") },
    { title: "Issue Resolution Workflows", url: createPageUrl("ProcessAutomation") }
  ];

  const automationUpdates = [
    {
      category: "REPUTATION MANAGEMENT",
      title: "Customer Complaints Resolved 70% Faster",
      description: "Automated feedback collection and routing prevent small issues from becoming big problems.",
      url: createPageUrl("CustomerFeedback")
    },
    {
      category: "BUSINESS INTELLIGENCE",
      title: "Hidden Revenue Opportunities Worth $50K Found",
      description: "Pattern analysis in customer feedback reveals untapped market opportunities.",
      url: createPageUrl("ProcessAutomation")
    },
    {
      category: "CUSTOMER RETENTION",
      title: "Client Retention Improves by 35%",
      description: "Proactive issue resolution keeps customers happy and loyal longer.",
      url: createPageUrl("CustomerFeedback")
    }
  ];

  const testimonial = {
    quote: "We were losing customers and didn't know why. The automated feedback system revealed 3 major issues we fixed immediately. Our retention rate jumped 40% in two months.",
    author: "Amanda Foster",
    title: "Customer Success Director, ServiceFirst Solutions"
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-12 gap-8">

          <aside className="lg:col-span-3 space-y-8">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider border-b-2 border-black pb-2 mb-4">
                Customer Win
              </h3>
              <div className="bg-gray-100 p-4 border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  ServiceFirst Solutions
                </h4>
                <p className="text-xs text-gray-600 mb-2">40% retention improvement in 2 months</p>
                <p className="text-xs text-gray-600">"{testimonial.quote}"</p>
              </div>
            </div>
          </aside>

          <main className="lg:col-span-6 border-l border-r border-gray-200 px-8">
            <div className="text-xs uppercase font-semibold text-gray-500 mb-2">
              CUSTOMER INTELLIGENCE <span className="text-gray-300 mx-1">|</span> FEEDBACK AUTOMATION
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              Turn Customer Complaints Into Business Gold
            </h1>
            <div className="border-t-4 border-black pt-4 mb-6">
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1540&q=80" 
                alt="Customer feedback dashboard" 
                className="w-full mb-4"
              />
            </div>
            
            <div className="mb-8">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Stop ignoring customer feedback and start profiting from it. Our automated collection and analysis system helps you identify weak spots in your business before they damage your reputation and bottom line.
              </p>

              <p className="text-base text-gray-700 mb-4 leading-relaxed">
                Most small businesses either don't collect feedback at all, or they collect it and let it pile up in their inbox. Meanwhile, unhappy customers are posting negative reviews online and telling their friends to avoid your business.
              </p>

              <p className="text-base text-gray-700 mb-6 leading-relaxed">
                Our system automatically gathers feedback from multiple sources, analyzes patterns to identify systemic issues, and creates action plans to fix problems before they spiral out of control. Turn customer complaints into competitive advantages.
              </p>
            </div>

            <div className="newspaper-divider my-8"></div>

            <div className="bg-gray-50 p-6 mb-8 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Feedback Intelligence Dashboard
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { metric: "Response Rate", value: "87%", trend: "↑ 12%" },
                  { metric: "Issue Resolution", value: "2.3 days", trend: "↓ 60%" },
                  { metric: "Customer Satisfaction", value: "4.6/5", trend: "↑ 0.8" },
                  { metric: "Repeat Business", value: "68%", trend: "↑ 23%" }
                ].map((item, index) => (
                  <div key={item.metric} className="bg-green-50 border border-green-200 rounded p-3 text-center">
                    <div className="text-xs font-medium text-green-600 mb-1">{item.metric}</div>
                    <div className="font-bold text-gray-900 text-lg mb-1">{item.value}</div>
                    <div className="text-xs font-medium text-green-600">{item.trend}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="text-xs uppercase font-semibold text-orange-600 mb-2">
                  EARLY WARNING SYSTEM
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Spot Problems Before They Explode
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  AI pattern recognition identifies emerging issues across all feedback channels. 
                  Fix problems when they're molehills, not mountains.
                </p>
                <div className="flex items-center text-red-600 mb-4">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">85% fewer escalated complaints</span>
                </div>
              </div>
              <div>
                <div className="text-xs uppercase font-semibold text-orange-600 mb-2">
                  REVENUE RECOVERY
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Win Back Lost Customers
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Automated follow-up sequences turn unhappy customers into brand advocates. 
                  Personal outreach based on specific feedback creates genuine loyalty.
                </p>
                <div className="flex items-center text-green-600 mb-4">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">42% of complaints become referrals</span>
                </div>
              </div>
            </div>

            <div className="text-center py-6 bg-green-50 border border-green-200 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                Ready to Turn Problems Into Profits?
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Join 190+ businesses using automated feedback systems
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
              Customer Intelligence
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
                Feedback Impact
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Resolution Speed</span>
                  <span className="font-semibold">70% faster</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Customer Retention</span>
                  <span className="font-semibold">+35%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Satisfaction Score</span>
                  <span className="font-semibold">4.6/5</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
