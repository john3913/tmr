import { ShieldCheck, AlertTriangle, XCircle, CheckCircle2, ChevronRight, Download } from "lucide-react";

const categories = [
  {
    id: "erisa",
    label: "ERISA",
    score: 98,
    color: "emerald",
    checks: [
      { name: "Summary Plan Descriptions (SPDs) current", status: "pass", last: "Jan 15, 2026" },
      { name: "Form 5500 Annual Report filed", status: "pass", last: "Mar 31, 2026" },
      { name: "Summary Annual Reports distributed", status: "pass", last: "Sep 30, 2025" },
      { name: "Plan document up-to-date", status: "warn", last: "Dec 1, 2024", note: "2026 amendment pending" },
      { name: "Fiduciary liability insurance in place", status: "pass", last: "Jan 1, 2026" },
      { name: "Claims & appeals procedures documented", status: "pass", last: "Jan 15, 2026" },
    ],
  },
  {
    id: "aca",
    label: "ACA",
    score: 91,
    color: "amber",
    checks: [
      { name: "Minimum Essential Coverage offered to FT employees", status: "pass", last: "Jan 1, 2026" },
      { name: "Affordability test met (≤9.02% of household income)", status: "pass", last: "Jan 1, 2026" },
      { name: "Form 1095-C furnished to employees", status: "warn", last: "Mar 3, 2026", note: "3 corrections pending" },
      { name: "Form 1094-C filed with IRS", status: "fail", last: "Not yet filed", note: "Due Jun 30, 2026" },
      { name: "Wellness program incentive limits compliant", status: "pass", last: "Jan 1, 2026" },
      { name: "Grandfathered plan status documented (N/A)", status: "pass", last: "N/A" },
    ],
  },
  {
    id: "cobra",
    label: "COBRA",
    score: 82,
    color: "red",
    checks: [
      { name: "Initial COBRA notices sent within 90 days", status: "pass", last: "Ongoing" },
      { name: "Election notices sent within 14 days of qualifying event", status: "fail", last: "May 5, 2026", note: "2 overdue notices" },
      { name: "Premium rates set correctly (102% of plan cost)", status: "pass", last: "Jan 1, 2026" },
      { name: "COBRA administrator agreement current", status: "pass", last: "Jan 1, 2026" },
      { name: "General notice in new hire packet", status: "pass", last: "Mar 1, 2026" },
    ],
  },
  {
    id: "fmla",
    label: "FMLA",
    score: 97,
    color: "emerald",
    checks: [
      { name: "FMLA poster displayed at all worksites", status: "pass", last: "Feb 1, 2026" },
      { name: "FMLA policy in employee handbook", status: "pass", last: "Jan 15, 2026" },
      { name: "Designation notices sent within 5 business days", status: "pass", last: "Ongoing" },
      { name: "Medical certification process documented", status: "pass", last: "Jan 15, 2026" },
      { name: "Return-to-work procedures in place", status: "warn", last: "Jan 15, 2026", note: "Minor wording update needed" },
    ],
  },
];

const recentAudits = [
  { date: "Apr 15, 2026", type: "Internal Review", scope: "ERISA / Plan Documents", result: "pass", auditor: "Benefits Team" },
  { date: "Mar 31, 2026", type: "External Filing", scope: "Form 5500 Submission", result: "pass", auditor: "Deloitte" },
  { date: "Feb 20, 2026", type: "Internal Review", scope: "COBRA Administration", result: "warn", auditor: "Benefits Team" },
  { date: "Jan 10, 2026", type: "Carrier Audit", scope: "Medical Claims Eligibility", result: "pass", auditor: "Blue Cross" },
  { date: "Dec 5, 2025", type: "DOL Inquiry", scope: "Participant Disclosures", result: "pass", auditor: "DOL" },
];

function ScoreRing({ score, color }: { score: number; color: string }) {
  const r = 28;
  const circ = 2 * Math.PI * r;
  const stroke = color === "emerald" ? "#10b981" : color === "amber" ? "#f59e0b" : "#ef4444";
  return (
    <div className="relative w-16 h-16">
      <svg viewBox="0 0 70 70" className="w-full h-full -rotate-90">
        <circle cx="35" cy="35" r={r} fill="none" stroke="#e2e8f0" strokeWidth="6" />
        <circle
          cx="35" cy="35" r={r} fill="none" stroke={stroke} strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={`${circ * (score / 100)} ${circ}`}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-sm font-bold text-slate-900">{score}</span>
      </div>
    </div>
  );
}

function CheckIcon({ status }: { status: string }) {
  if (status === "pass") return <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />;
  if (status === "warn") return <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0" />;
  return <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />;
}

function ResultBadge({ result }: { result: string }) {
  const styles: Record<string, string> = {
    pass: "bg-emerald-50 text-emerald-700 border-emerald-200",
    warn: "bg-amber-50 text-amber-700 border-amber-200",
    fail: "bg-red-50 text-red-700 border-red-200",
  };
  const labels: Record<string, string> = { pass: "Pass", warn: "Review", fail: "Fail" };
  return (
    <span className={`inline-flex px-2 py-0.5 rounded text-xs font-medium border ${styles[result]}`}>
      {labels[result]}
    </span>
  );
}

export default function AuditPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-xl font-bold text-slate-900">Benefits Audit</h1>
          <p className="text-sm text-slate-500 mt-0.5">ERISA · ACA · COBRA · FMLA — Plan Year 2026</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#1a6b3c] text-white text-sm font-medium rounded-lg hover:bg-[#155c32] transition-colors">
          <Download className="w-4 h-4" />
          Export Audit Report
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((cat) => (
          <div key={cat.id} className="bg-white rounded-xl border border-slate-200 p-5">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-slate-900">{cat.label}</h3>
              <ScoreRing score={cat.score} color={cat.color} />
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-slate-500">Pass</span>
                <span className="font-medium text-emerald-600">
                  {cat.checks.filter((c) => c.status === "pass").length}
                </span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-slate-500">Review</span>
                <span className="font-medium text-amber-600">
                  {cat.checks.filter((c) => c.status === "warn").length}
                </span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-slate-500">Fail</span>
                <span className="font-medium text-red-600">
                  {cat.checks.filter((c) => c.status === "fail").length}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Sections */}
      <div className="space-y-5">
        {categories.map((cat) => (
          <div key={cat.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-3">
                <ShieldCheck className={`w-4 h-4 ${cat.color === "emerald" ? "text-emerald-600" : cat.color === "amber" ? "text-amber-600" : "text-red-600"}`} />
                <h2 className="text-sm font-semibold text-slate-900">{cat.label} Compliance Checks</h2>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span>{cat.checks.filter((c) => c.status === "pass").length} of {cat.checks.length} passing</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>
            <div className="divide-y divide-slate-100">
              {cat.checks.map((check, i) => (
                <div key={i} className="flex items-start gap-4 px-5 py-3.5">
                  <CheckIcon status={check.status} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-900">{check.name}</p>
                    {check.note && (
                      <p className={`text-xs mt-0.5 ${check.status === "fail" ? "text-red-600" : "text-amber-600"}`}>
                        {check.note}
                      </p>
                    )}
                  </div>
                  <span className="text-xs text-slate-400 flex-shrink-0 mt-0.5">{check.last}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Audit History */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-200">
          <h2 className="text-sm font-semibold text-slate-900">Audit History</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50">
                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Date</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Type</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Scope</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Auditor</th>
                <th className="text-center px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Result</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {recentAudits.map((audit, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors">
                  <td className="px-5 py-3 text-sm text-slate-700 tabular-nums">{audit.date}</td>
                  <td className="px-5 py-3 text-sm text-slate-700">{audit.type}</td>
                  <td className="px-5 py-3 text-sm text-slate-900 font-medium">{audit.scope}</td>
                  <td className="px-5 py-3 text-sm text-slate-600">{audit.auditor}</td>
                  <td className="px-5 py-3 text-center"><ResultBadge result={audit.result} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
