import {
  ShieldCheck,
  AlertTriangle,
  Clock,
  Users,
  CalendarRange,
  FileText,
  ChevronRight,
  ArrowUpRight,
  TrendingUp,
} from "lucide-react";

const statCards = [
  {
    label: "Compliance Score",
    value: "94%",
    change: "+2.1% vs last quarter",
    positive: true,
    icon: ShieldCheck,
    color: "text-[#1a6b3c]",
    bg: "bg-[#1a6b3c]/10",
  },
  {
    label: "Open Issues",
    value: "7",
    change: "−3 resolved this week",
    positive: true,
    icon: AlertTriangle,
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    label: "Eligible Employees",
    value: "1,842",
    change: "+14 this month",
    positive: true,
    icon: Users,
    color: "text-[#0079BE]",
    bg: "bg-[#0079BE]/10",
  },
  {
    label: "Upcoming Deadlines",
    value: "3",
    change: "Next: Jun 30, 2026",
    positive: null,
    icon: Clock,
    color: "text-[#005294]",
    bg: "bg-[#005294]/10",
  },
];

const alerts = [
  { type: "error", title: "COBRA Notice Overdue", detail: "2 participants past 14-day notice window", time: "2 days ago" },
  { type: "warning", title: "ACA Filing Deadline Approaching", detail: "Form 1094-C due in 23 days", time: "Today" },
  { type: "warning", title: "Plan Document Update Required", detail: "Medical Plan SPD needs 2026 amendments", time: "5 days ago" },
  { type: "success", title: "ERISA Annual Report Filed", detail: "Form 5500 submitted successfully", time: "1 week ago" },
  { type: "success", title: "Open Enrollment Closed", detail: "1,738 of 1,842 employees enrolled (94.4%)", time: "3 weeks ago" },
];

const plans = [
  { name: "Medical – Blue Cross PPO", enrolled: 1204, eligible: 1842, status: "compliant" },
  { name: "Medical – Blue Cross HDHP", enrolled: 421, eligible: 1842, status: "compliant" },
  { name: "Dental – Delta Dental", enrolled: 1518, eligible: 1842, status: "compliant" },
  { name: "Vision – VSP", enrolled: 1322, eligible: 1842, status: "compliant" },
  { name: "Life / AD&D – MetLife", enrolled: 1789, eligible: 1842, status: "review" },
  { name: "401(k) – Fidelity", enrolled: 1601, eligible: 1842, status: "compliant" },
  { name: "FSA – WEX", enrolled: 634, eligible: 1842, status: "compliant" },
  { name: "COBRA – Businessolver", enrolled: 38, eligible: 38, status: "issue" },
];

const deadlines = [
  { title: "ACA Form 1094-C / 1095-C", date: "Jun 30, 2026", type: "Filing" },
  { title: "ERISA Plan Document Amendment", date: "Jul 15, 2026", type: "Compliance" },
  { title: "Non-Discrimination Testing – FSA", date: "Aug 1, 2026", type: "Testing" },
  { title: "Open Enrollment Window Opens", date: "Oct 1, 2026", type: "Enrollment" },
];

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    compliant: "bg-emerald-50 text-emerald-700 border-emerald-200",
    review: "bg-amber-50 text-amber-700 border-amber-200",
    issue: "bg-red-50 text-red-700 border-red-200",
  };
  const labels: Record<string, string> = { compliant: "Compliant", review: "Review", issue: "Issue" };
  return (
    <span className={`inline-flex px-2 py-0.5 rounded text-xs font-medium border ${styles[status]}`}>
      {labels[status]}
    </span>
  );
}

function Dot({ type }: { type: string }) {
  const color = type === "error" ? "bg-red-500" : type === "warning" ? "bg-amber-400" : "bg-emerald-500";
  return <div className={`w-2 h-2 rounded-full ${color} mt-1.5 flex-shrink-0`} />;
}

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-xl font-bold text-slate-900">Benefits Compliance Overview</h1>
        <p className="text-sm text-slate-500 mt-0.5">Plan Year 2026 · Last updated May 7, 2026</p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((card) => {
          const Icon = card.icon;
          return (
            <div key={card.label} className="bg-white rounded-xl border border-slate-200 p-5">
              <div className="flex items-start justify-between">
                <div className={`w-9 h-9 rounded-lg ${card.bg} flex items-center justify-center`}>
                  <Icon className={`w-[18px] h-[18px] ${card.color}`} />
                </div>
                {card.positive !== null && (
                  <ArrowUpRight className={`w-4 h-4 ${card.positive ? "text-emerald-500" : "text-red-400"}`} />
                )}
              </div>
              <p className="text-2xl font-bold text-slate-900 mt-3">{card.value}</p>
              <p className="text-xs text-slate-500 mt-0.5">{card.label}</p>
              <p className={`text-xs mt-1.5 font-medium ${card.positive ? "text-emerald-600" : card.positive === false ? "text-red-500" : "text-slate-500"}`}>
                {card.change}
              </p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Compliance Health Ring */}
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-slate-900">Compliance Health</h2>
            <TrendingUp className="w-4 h-4 text-slate-400" />
          </div>
          <div className="flex flex-col items-center py-2">
            <div className="relative w-32 h-32">
              <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
                <circle cx="60" cy="60" r="50" fill="none" stroke="#e2e8f0" strokeWidth="10" />
                <circle
                  cx="60" cy="60" r="50" fill="none" stroke="#1a6b3c" strokeWidth="10"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 50 * 0.94} ${2 * Math.PI * 50}`}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-slate-900">94</span>
                <span className="text-xs text-slate-500">/ 100</span>
              </div>
            </div>
            <div className="mt-5 w-full space-y-2.5">
              {[
                { label: "ERISA", pct: 98 },
                { label: "ACA", pct: 91 },
                { label: "COBRA", pct: 82 },
                { label: "FMLA", pct: 97 },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <span className="text-xs text-slate-500 w-12">{item.label}</span>
                  <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${item.pct >= 95 ? "bg-emerald-500" : item.pct >= 85 ? "bg-amber-400" : "bg-red-400"}`}
                      style={{ width: `${item.pct}%` }}
                    />
                  </div>
                  <span className="text-xs font-medium text-slate-700 w-8 text-right">{item.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Alerts */}
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-slate-900">Alerts & Activity</h2>
            <button className="text-xs text-[#1a6b3c] hover:underline font-medium">View all</button>
          </div>
          <div className="space-y-3.5">
            {alerts.map((alert, i) => (
              <div key={i} className="flex gap-3">
                <Dot type={alert.type} />
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-slate-900 leading-snug">{alert.title}</p>
                  <p className="text-xs text-slate-500 leading-snug mt-0.5">{alert.detail}</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">{alert.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deadlines */}
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-slate-900">Upcoming Deadlines</h2>
            <CalendarRange className="w-4 h-4 text-slate-400" />
          </div>
          <div className="space-y-3">
            {deadlines.map((d, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-slate-900 leading-snug">{d.title}</p>
                  <div className="flex items-center gap-2 mt-1.5">
                    <span className="text-[10px] px-1.5 py-0.5 bg-[#0079BE]/10 text-[#0079BE] rounded font-medium">{d.type}</span>
                    <span className="text-[10px] text-slate-500">{d.date}</span>
                  </div>
                </div>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 mt-0.5 flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Plans Table */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-slate-900">Benefit Plans — Enrollment & Status</h2>
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-slate-400" />
            <button className="text-xs text-[#1a6b3c] hover:underline font-medium">Export</button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50">
                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Plan</th>
                <th className="text-right px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Enrolled</th>
                <th className="text-right px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Eligible</th>
                <th className="text-right px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Rate</th>
                <th className="text-center px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {plans.map((plan) => {
                const rate = Math.round((plan.enrolled / plan.eligible) * 100);
                return (
                  <tr key={plan.name} className="hover:bg-slate-50 transition-colors">
                    <td className="px-5 py-3 text-sm font-medium text-slate-900">{plan.name}</td>
                    <td className="px-5 py-3 text-sm text-slate-700 text-right tabular-nums">{plan.enrolled.toLocaleString()}</td>
                    <td className="px-5 py-3 text-sm text-slate-500 text-right tabular-nums">{plan.eligible.toLocaleString()}</td>
                    <td className="px-5 py-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <div className="w-20 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-[#0079BE] rounded-full" style={{ width: `${rate}%` }} />
                        </div>
                        <span className="text-xs text-slate-600 tabular-nums w-8">{rate}%</span>
                      </div>
                    </td>
                    <td className="px-5 py-3 text-center">
                      <StatusBadge status={plan.status} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
