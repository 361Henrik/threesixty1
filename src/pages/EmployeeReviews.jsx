
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
  Users, 
  ArrowRight, 
  CheckCircle, 
  Clock,
  Target,
  TrendingUp,
  Calendar,
  ClipboardCheck
} from "lucide-react";

export default function EmployeeReviews() {
  const relatedSolutions = [
    { title: "Strategic Meeting Automation", url: createPageUrl("StrategicMeetings") },
    { title: "Customer Feedback Systems", url: createPageUrl("CustomerFeedback") },
    { title: "Process Automation Tools", url: createPageUrl("ProcessAutomation") },
    { title: "Performance Tracking", url: createPageUrl("EmployeeReviews") },
    { title: "Team Development Planning", url: createPageUrl("EmployeeReviews") },
    { title: "Goal Setting Automation", url: createPageUrl("StrategicMeetings") }
  ];

  const automationUpdates = [
    {
      category: "EMPLOYEE ENGAGEMENT",
      title: "Review Completion Rates Jump 85%",
      description: "Automated scheduling and reminders ensure reviews actually happen on time.",
      url: createPageUrl("EmployeeReviews")
    },
    {
      category: "TIME SAVINGS",
      title: "Managers Save 15 Hours Per Review Cycle",
      description: "Smart automation handles scheduling, reminders, and documentation automatically.",
      url: createPageUrl("ProcessAutomation")
    },
    {
      category: "EMPLOYEE SATISFACTION",
      title: "Team Satisfaction Scores Increase 40%",
      description: "Consistent, fair reviews lead to better employee development and retention.",
      url: createPageUrl("EmployeeReviews")
    }
  ];

  const testimonial = {
    quote: "Employee reviews used to take me 3 days every quarter. Now they're done automatically with better outcomes. My team actually looks forward to them now.",
    author: "Jessica Martinez",
    title: "Operations Manager, GrowthTech Solutions"
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-12 gap-8">

          <aside className="lg:col-span-3 space-y-8">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider border-b-2 border-black pb-2 mb-4">
                Success Story
              </h3>
              <div className="bg-gray-100 p-4 border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  GrowthTech Solutions
                </h4>
                <p className="text-xs text-gray-600 mb-2">3 days → 3 hours per review cycle</p>
                <p className="text-xs text-gray-600">"{testimonial.quote}"</p>
              </div>
            </div>
          </aside>

          <main className="lg:col-span-6 border-l border-r border-gray-200 px-8">
            <div className="text-xs uppercase font-semibold text-gray-500 mb-2">
              EMPLOYEE MANAGEMENT <span className="text-gray-300 mx-1">|</span> AUTOMATION SOLUTION
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              Employee Reviews That Don't Suck
            </h1>
            <div className="border-t-4 border-black pt-4 mb-6">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Team meeting" 
                className="w-full mb-4"
              />
            </div>
            
            <div className="mb-8">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Transform dreaded performance reviews into meaningful growth conversations that actually help your team excel. Our automation handles all the tedious paperwork, scheduling, and follow-up while you focus on developing your people.
              </p>

              <p className="text-base text-gray-700 mb-4 leading-relaxed">
                Most small business owners either skip employee reviews entirely or rush through them once a year. Our system makes it effortless to conduct regular, meaningful reviews that improve performance, boost morale, and reduce turnover.
              </p>

              <p className="text-base text-gray-700 mb-6 leading-relaxed">
                The automation learns from your feedback patterns and company goals to suggest personalized development plans for each employee, making you look like a management genius while saving hours of prep time.
              </p>
            </div>

            <div className="newspaper-divider my-8"></div>

            <div className="bg-gray-50 p-6 mb-8 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Automated Review Process
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { step: "Week 1", task: "Auto-Schedule", status: "Calendars synced, reminders sent" },
                  { step: "Week 2", task: "Self-Assessment", status: "Employee forms auto-delivered" },
                  { step: "Week 3", task: "Manager Prep", status: "Performance data compiled" },
                  { step: "Week 4", task: "Review Meeting", status: "Action items tracked automatically" }
                ].map((item, index) => (
                  <div key={item.step} className="bg-blue-50 border border-blue-200 rounded p-3 text-center">
                    <div className="text-xs font-medium text-blue-600 mb-1">{item.step}</div>
                    <div className="font-semibold text-gray-900 text-sm mb-1">{item.task}</div>
                    <div className="text-xs text-gray-600">{item.status}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="text-xs uppercase font-semibold text-orange-600 mb-2">
                  SMART SCHEDULING
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Never Miss Another Review
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Automatically schedules reviews based on hire dates, performance cycles, and team calendars. 
                  Sends reminders to both managers and employees with prep materials.
                </p>
                <div className="flex items-center text-green-600 mb-4">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">100% on-time completion rate</span>
                </div>
              </div>
              <div>
                <div className="text-xs uppercase font-semibold text-orange-600 mb-2">
                  ACTION TRACKING
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Follow-Through That Actually Happens
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Automatically tracks goal progress and sends check-in reminders. No more forgotten 
                  development plans or missed growth opportunities.
                </p>
                <div className="flex items-center text-green-600 mb-4">
                  <Target className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">75% better goal achievement</span>
                </div>
              </div>
            </div>

            <div className="text-center py-6 bg-blue-50 border border-blue-200 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                Ready to Make Reviews Actually Useful?
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Join 340+ companies using automated employee reviews
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
              HR Updates
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
                Review Automation Stats
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Time Savings</span>
                  <span className="font-semibold">15 hours/cycle</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Completion Rate</span>
                  <span className="font-semibold">98%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Employee Satisfaction</span>
                  <span className="font-semibold">+40%</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
