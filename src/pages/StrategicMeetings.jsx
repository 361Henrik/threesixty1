
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
  Calendar, 
  ArrowRight, 
  CheckCircle, 
  Clock,
  Target,
  TrendingUp,
  Users,
  MessageSquare
} from "lucide-react";

export default function StrategicMeetings() {
  const relatedSolutions = [
    { title: "Employee Review Automation", url: createPageUrl("EmployeeReviews") },
    { title: "Customer Feedback Processing", url: createPageUrl("CustomerFeedback") },
    { title: "Administrative Task Automation", url: createPageUrl("ProcessAutomation") },
    { title: "Goal Tracking Systems", url: createPageUrl("StrategicMeetings") },
    { title: "Decision Documentation", url: createPageUrl("StrategicMeetings") },
    { title: "Action Item Management", url: createPageUrl("ProcessAutomation") }
  ];

  const automationUpdates = [
    {
      category: "MEETING EFFICIENCY",
      title: "Strategic Meetings 60% More Productive",
      description: "Automated agendas and follow-up tracking ensure every meeting drives results.",
      url: createPageUrl("StrategicMeetings")
    },
    {
      category: "DECISION TRACKING",
      title: "95% Better Follow-Through on Decisions",
      description: "Automatic action item tracking prevents important decisions from getting lost.",
      url: createPageUrl("ProcessAutomation")
    },
    {
      category: "TIME MANAGEMENT",
      title: "Executive Teams Save 8 Hours Per Week",
      description: "Streamlined meeting processes free up leadership time for actual leading.",
      url: createPageUrl("StrategicMeetings")
    }
  ];

  const testimonial = {
    quote: "Our quarterly planning meetings used to take 2 days and produce nothing actionable. Now we get real strategy done in 3 hours with clear next steps that actually happen.",
    author: "Michael Chen",
    title: "CEO, Rapid Scale Industries"
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-12 gap-8">

          <aside className="lg:col-span-3 space-y-8">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider border-b-2 border-black pb-2 mb-4">
                Leadership Win
              </h3>
              <div className="bg-gray-100 p-4 border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Rapid Scale Industries
                </h4>
                <p className="text-xs text-gray-600 mb-2">2 days → 3 hours strategic planning</p>
                <p className="text-xs text-gray-600">"{testimonial.quote}"</p>
              </div>
            </div>
          </aside>

          <main className="lg:col-span-6 border-l border-r border-gray-200 px-8">
            <div className="text-xs uppercase font-semibold text-gray-500 mb-2">
              STRATEGIC PLANNING <span className="text-gray-300 mx-1">|</span> MEETING AUTOMATION
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              Meetings That Actually Move Your Business Forward
            </h1>
            <div className="border-t-4 border-black pt-4 mb-6">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Strategic business meeting" 
                className="w-full mb-4"
              />
            </div>
            
            <div className="mb-8">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                End pointless meetings forever. Our strategic meeting automation ensures every session has clear objectives, productive discussions, and actionable outcomes that actually get executed. No more meetings about meetings.
              </p>

              <p className="text-base text-gray-700 mb-4 leading-relaxed">
                Most business meetings waste everyone's time because they lack structure, preparation, and follow-through. Our automation handles the entire meeting lifecycle from agenda creation to action item tracking, ensuring your strategic decisions actually drive business growth.
              </p>

              <p className="text-base text-gray-700 mb-6 leading-relaxed">
                The system learns your business priorities and automatically suggests agenda items, tracks decisions, and follows up on commitments. Your leadership team stays aligned and accountable without any extra administrative overhead.
              </p>
            </div>

            <div className="newspaper-divider my-8"></div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="text-xs uppercase font-semibold text-orange-600 mb-2">
                  AGENDA INTELLIGENCE
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Smart Agenda Creation
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  AI analyzes your business metrics, upcoming deadlines, and team priorities to suggest 
                  relevant agenda items. Every meeting focuses on what matters most.
                </p>
                <div className="flex items-center text-purple-600 mb-4">
                  <Target className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">80% more focused discussions</span>
                </div>
              </div>
              <div>
                <div className="text-xs uppercase font-semibold text-orange-600 mb-2">
                  ACCOUNTABILITY TRACKING
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Decisions That Stick
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Automatic action item assignment with deadline tracking and progress reminders. 
                  Strategic decisions actually get executed instead of forgotten.
                </p>
                <div className="flex items-center text-purple-600 mb-4">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">95% better follow-through</span>
                </div>
              </div>
            </div>

            <div className="text-center py-6 bg-purple-50 border border-purple-200 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                Ready for Meetings That Actually Work?
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Join 280+ leadership teams using strategic meeting automation
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
              Leadership Updates
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
                Meeting Effectiveness
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Time Saved</span>
                  <span className="font-semibold">8 hrs/week</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Action Completion</span>
                  <span className="font-semibold">95%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Productivity Boost</span>
                  <span className="font-semibold">+60%</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
