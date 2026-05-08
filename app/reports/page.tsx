import { FileText, Download, CheckCircle2, Clock, AlertTriangle, ExternalLink } from "lucide-react";

const filings = [
  {
    form: "Form 5500",
    title: "Annual Report / Return of Employee Benefit Plan",
    agency: "DOL / IRS",
    due: "Jul 31, 2026",
    status: "upcoming",
    filed: null,
    period: "Plan Year 2025",
  },
  {
    form: "Form 1094-C / 1095-C",
    title: "ACA Employer Shared Responsibility",
    agency: "IRS",
    due: "Jun 30, 2026",
    status: "upcoming",
    filed: null,
    period: "Tax Year 2025",
  },
  {
    form: "Form 5500",
    title: "Annual Report / Return of Employee Benefit Plan",
    agency: "DOL / IRS",
    due: "Jul 31, 2025",
    status: "filed",
    filed: "Mar 31, 2025",
    period: "Plan Year 2024",
  },
  {
    form: "Form 1094-C / 1095-C",
    title: "ACA Employer Shared Responsibility",
    agency: "IRS",
    due: "Apr 1, 2025",
    status: "filed",
    filed: "Mar 3, 2025",
    period: "Tax Year 2024",
  },
  {
    form: "PCORI Fee",
    title: "Patient-Centered Outcomes Research Institute Fee",
    agency: "IRS",
    due: "Jul 31, 2025",
    status: "filed",
    filed: "Jun 28, 2025",
    period: "Plan Year 2024",
  },
  {
    form: "Summary Annual Report",
    title: "SAR – Distributed to Participants",
    agency: "Participants",
    due: "Sep 30, 2025",
    status: "filed",
    filed: "Sep 15, 2025",
    period: "Plan Year 2024",
  },
];

const availableReports = [
  { title: "Benefits Compliance Summary", desc: "Overall compliance score and open issues across all regulation areas", type: "PDF" },
  { title: "Enrollment Summary Report", desc: "Participation rates by plan, department, and location for plan year 2026", type: "XLSX" },
  { title: "Employee Benefits Statement", desc: "Total compensation + benefits value statements for all employees", type: "PDF" },
  { title: "COBRA Activity Report", desc: "Qualifying events, notices sent, elections, and premium status", type: "XLSX" },
  { title: "ACA Offer of Coverage Analysis", desc: "FTE counts, affordability test, and coverage offer tracking", type: "XLSX" },
  { title: "Non-Discrimination Testing – FSA", desc: "Key employee and HCE concentration tests for health FSA", type: "PDF" },
  { title: "Vendor SLA Performance Report", desc: "Carrier metrics vs. contracted SLA targets", type: "PDF" },
  { title: "401(k) Plan Summary", desc: "Participation, deferral rates, match costs, and compliance status", type: "PDF" },
];

function FilingStatus({ status }: { status: string }) {
  if (status === "filed") return (
    <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
      <CheckCircle2 className="w-3 h-3" /> Filed
    </span>
  );
  return (
    <span className="flex items-center gap-1.5 text-xs font-medium text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
      <Clock className="w-3 h-3" /> Upcoming
    </span>
  );
}

export default function ReportsPage() {
  const upcoming = filings.filter((f) => f.status === "upcoming");
  const filed = filings.filter((f) => f.status === "filed");

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-xl font-bold text-slate-900">Reports & Filings</h1>
        <p className="text-sm text-slate-500 mt-0.5">Regulatory filings calendar and downloadable compliance reports</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Filings */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-200 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-500" />
            <h2 className="text-sm font-semibold text-slate-900">Upcoming Required Filings</h2>
          </div>
          <div className="divide-y divide-slate-100">
            {upcoming.map((f, i) => (
              <div key={i} className="px-5 py-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-bold text-slate-700 font-mono bg-slate-100 px-2 py-0.5 rounded">{f.form}</span>
                      <span className="text-[10px] text-slate-400">{f.agency}</span>
                    </div>
                    <p className="text-sm font-medium text-slate-900 mt-1.5">{f.title}</p>
                    <div className="flex items-center gap-4 mt-1.5 text-xs text-slate-500">
                      <span>Due: <span className="font-medium text-red-600">{f.due}</span></span>
                      <span>{f.period}</span>
                    </div>
                  </div>
                  <FilingStatus status={f.status} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filed */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-200 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <h2 className="text-sm font-semibold text-slate-900">Filed &amp; Completed</h2>
          </div>
          <div className="divide-y divide-slate-100">
            {filed.map((f, i) => (
              <div key={i} className="px-5 py-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-bold text-slate-700 font-mono bg-slate-100 px-2 py-0.5 rounded">{f.form}</span>
                      <span className="text-[10px] text-slate-400">{f.agency}</span>
                    </div>
                    <p className="text-sm font-medium text-slate-900 mt-1.5">{f.title}</p>
                    <div className="flex items-center gap-4 mt-1.5 text-xs text-slate-500">
                      <span>Filed: <span className="font-medium text-slate-700">{f.filed}</span></span>
                      <span>{f.period}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <FilingStatus status={f.status} />
                    <button className="p-1.5 rounded-lg hover:bg-slate-100 transition-colors">
                      <Download className="w-3.5 h-3.5 text-slate-400" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Report Library */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-slate-400" />
            <h2 className="text-sm font-semibold text-slate-900">Report Library</h2>
          </div>
          <span className="text-xs text-slate-500">{availableReports.length} reports available</span>
        </div>
        <div className="divide-y divide-slate-100">
          {availableReports.map((report, i) => (
            <div key={i} className="flex items-center gap-4 px-5 py-4 hover:bg-slate-50 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-[#1a6b3c]/10 flex items-center justify-center flex-shrink-0">
                <FileText className="w-4 h-4 text-[#1a6b3c]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-900">{report.title}</p>
                <p className="text-xs text-slate-500 mt-0.5">{report.desc}</p>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">{report.type}</span>
                <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#1a6b3c] border border-[#1a6b3c]/30 rounded-lg hover:bg-[#1a6b3c]/5 transition-colors">
                  <Download className="w-3 h-3" /> Generate
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* External Resources */}
      <div className="bg-white rounded-xl border border-slate-200 p-5">
        <h2 className="text-sm font-semibold text-slate-900 mb-4">Regulatory References</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { label: "DOL ERISA Resources", url: "dol.gov/agencies/ebsa" },
            { label: "IRS ACA Guidance", url: "irs.gov/affordable-care-act" },
            { label: "DOL FMLA Resources", url: "dol.gov/agencies/whd/fmla" },
            { label: "CMS COBRA Guidance", url: "cms.gov/cciio/cobra" },
          ].map((ref) => (
            <a
              key={ref.label}
              href={`https://${ref.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:border-[#1a6b3c]/40 hover:bg-[#1a6b3c]/5 transition-colors group"
            >
              <div>
                <p className="text-xs font-semibold text-slate-800 group-hover:text-[#1a6b3c] transition-colors">{ref.label}</p>
                <p className="text-[10px] text-slate-400 mt-0.5">{ref.url}</p>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1a6b3c] transition-colors flex-shrink-0" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
