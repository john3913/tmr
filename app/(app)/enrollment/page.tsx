import { CalendarRange, CheckCircle2, Clock, Users, ChevronRight, AlertCircle } from "lucide-react";

const enrollmentWindow = {
  name: "2026 Open Enrollment",
  start: "Oct 1, 2026",
  end: "Oct 31, 2026",
  status: "upcoming",
  daysUntil: 147,
};

const planOptions = [
  {
    category: "Medical",
    plans: [
      { name: "Blue Cross PPO", tier: "PPO", employeeCost: "$148/mo", employerCost: "$612/mo", enrolled: 1204, change: "+12" },
      { name: "Blue Cross HDHP + HSA", tier: "HDHP", employeeCost: "$82/mo", employerCost: "$498/mo", enrolled: 421, change: "+38" },
    ],
  },
  {
    category: "Dental",
    plans: [
      { name: "Delta Dental Basic", tier: "Basic", employeeCost: "$18/mo", employerCost: "$42/mo", enrolled: 890, change: "+4" },
      { name: "Delta Dental Premium", tier: "Premium", employeeCost: "$34/mo", employerCost: "$58/mo", enrolled: 628, change: "+8" },
    ],
  },
  {
    category: "Vision",
    plans: [
      { name: "VSP Choice", tier: "Standard", employeeCost: "$8/mo", employerCost: "$14/mo", enrolled: 1322, change: "+22" },
    ],
  },
  {
    category: "Spending Accounts",
    plans: [
      { name: "Health FSA – WEX", tier: "FSA", employeeCost: "Pre-tax elect.", employerCost: "—", enrolled: 634, change: "-18" },
      { name: "Dependent Care FSA – WEX", tier: "DCFSA", employeeCost: "Pre-tax elect.", employerCost: "—", enrolled: 211, change: "+5" },
    ],
  },
];

const eligibilityRules = [
  { rule: "Full-time employees (≥30 hrs/week)", applies: "Medical, Dental, Vision, Life, FSA" },
  { rule: "Part-time employees (20–29 hrs/week)", applies: "Medical (ACA mandate only)" },
  { rule: "Waiting period — 1st of month after 30 days", applies: "All plans" },
  { rule: "Spouses on other employer coverage", applies: "Spousal surcharge: +$100/mo medical" },
  { rule: "Domestic partners", applies: "Medical, Dental, Vision (imputed income applies)" },
  { rule: "Dependent children to age 26", applies: "Medical, Dental, Vision" },
];

const milestones = [
  { label: "Communications drafted", date: "Aug 1, 2026", done: false },
  { label: "Benefits guide published", date: "Sep 1, 2026", done: false },
  { label: "Carrier rate confirmation", date: "Sep 15, 2026", done: false },
  { label: "Enrollment window opens", date: "Oct 1, 2026", done: false },
  { label: "Enrollment window closes", date: "Oct 31, 2026", done: false },
  { label: "Elections transmitted to carriers", date: "Nov 7, 2026", done: false },
  { label: "Coverage effective date", date: "Jan 1, 2027", done: false },
];

const priorStats = [
  { label: "Participation Rate", value: "94.4%", note: "1,738 / 1,842 enrolled" },
  { label: "Medical HDHP Adoption", value: "26%", note: "+6pp vs 2025" },
  { label: "FSA Participation", value: "34%", note: "vs 31% industry avg" },
  { label: "Avg Time to Elect", value: "8 min", note: "Via benefits portal" },
];

export default function EnrollmentPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-xl font-bold text-slate-900">Open Enrollment</h1>
        <p className="text-sm text-slate-500 mt-0.5">Manage enrollment windows, plan options, and eligibility rules</p>
      </div>

      {/* Status Banner */}
      <div className="bg-[#1a6b3c]/5 border border-[#1a6b3c]/20 rounded-xl p-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-[#1a6b3c]/10 rounded-lg flex items-center justify-center">
            <CalendarRange className="w-5 h-5 text-[#1a6b3c]" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">{enrollmentWindow.name}</p>
            <p className="text-sm text-slate-600">{enrollmentWindow.start} – {enrollmentWindow.end}</p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-center">
            <p className="text-2xl font-bold text-[#1a6b3c]">{enrollmentWindow.daysUntil}</p>
            <p className="text-xs text-slate-500">days until open</p>
          </div>
          <span className="px-3 py-1.5 bg-blue-50 text-blue-700 border border-blue-200 text-xs font-semibold rounded-lg">
            Upcoming
          </span>
        </div>
      </div>

      {/* Prior Year Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {priorStats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-slate-200 p-5">
            <p className="text-xs text-slate-500 mb-1">{stat.label} (2025)</p>
            <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
            <p className="text-xs text-slate-400 mt-1">{stat.note}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Plan Options */}
        <div className="lg:col-span-2 space-y-4">
          {planOptions.map((group) => (
            <div key={group.category} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <div className="px-5 py-3 bg-slate-50 border-b border-slate-200">
                <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-wide">{group.category}</h2>
              </div>
              <div className="divide-y divide-slate-100">
                {group.plans.map((plan) => (
                  <div key={plan.name} className="px-5 py-4 flex items-center gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-medium text-slate-900">{plan.name}</p>
                        <span className="text-[10px] px-1.5 py-0.5 bg-slate-100 text-slate-600 rounded font-medium">{plan.tier}</span>
                      </div>
                      <div className="flex items-center gap-4 mt-1.5 text-xs text-slate-500">
                        <span>Employee: <span className="font-medium text-slate-700">{plan.employeeCost}</span></span>
                        <span>Employer: <span className="font-medium text-slate-700">{plan.employerCost}</span></span>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-sm font-semibold text-slate-900">{plan.enrolled.toLocaleString()}</p>
                      <p className={`text-xs font-medium ${plan.change.startsWith("+") ? "text-emerald-600" : "text-red-500"}`}>
                        {plan.change} from prior year
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-300 flex-shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Milestones + Eligibility */}
        <div className="space-y-5">
          {/* Timeline */}
          <div className="bg-white rounded-xl border border-slate-200 p-5">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-4 h-4 text-slate-400" />
              <h2 className="text-sm font-semibold text-slate-900">Enrollment Timeline</h2>
            </div>
            <div className="space-y-3">
              {milestones.map((m, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className={`w-4 h-4 rounded-full border-2 flex-shrink-0 mt-0.5 ${m.done ? "bg-[#1a6b3c] border-[#1a6b3c]" : "border-slate-300"}`}>
                    {m.done && <CheckCircle2 className="w-4 h-4 text-white" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-xs font-medium ${m.done ? "text-slate-400 line-through" : "text-slate-800"}`}>{m.label}</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">{m.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Eligibility Rules */}
          <div className="bg-white rounded-xl border border-slate-200 p-5">
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-4 h-4 text-slate-400" />
              <h2 className="text-sm font-semibold text-slate-900">Eligibility Rules</h2>
            </div>
            <div className="space-y-3">
              {eligibilityRules.map((rule, i) => (
                <div key={i} className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <p className="text-xs font-semibold text-slate-800">{rule.rule}</p>
                  <p className="text-[10px] text-slate-500 mt-0.5">{rule.applies}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Notice */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3">
            <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-semibold text-amber-800">Action Required</p>
              <p className="text-xs text-amber-700 mt-0.5">Carrier rate renewal for 2026 plans must be confirmed by Sep 15, 2026 to finalize enrollment materials.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
