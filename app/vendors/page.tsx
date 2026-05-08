import { Building2, CheckCircle2, AlertTriangle, ExternalLink, Phone, Mail } from "lucide-react";

const vendors = [
  {
    name: "Blue Cross Blue Shield of MN",
    category: "Medical",
    role: "Primary carrier – PPO & HDHP",
    contact: "acct.mgr@bcbsmn.com",
    phone: "612-533-5000",
    contractExpiry: "Dec 31, 2026",
    slaStatus: "compliant",
    lastAudit: "Feb 2026",
    issues: 0,
    metrics: [
      { label: "Claims Processing", value: "98.2%", target: "≥97%", ok: true },
      { label: "Avg. Processing Time", value: "3.1 days", target: "≤5 days", ok: true },
      { label: "EOB Accuracy", value: "99.4%", target: "≥99%", ok: true },
      { label: "Member Satisfaction", value: "4.2/5", target: "≥4.0", ok: true },
    ],
  },
  {
    name: "Delta Dental of Minnesota",
    category: "Dental",
    role: "Dental carrier – Basic & Premium",
    contact: "employer@deltadentalmn.org",
    phone: "651-406-5900",
    contractExpiry: "Dec 31, 2026",
    slaStatus: "compliant",
    lastAudit: "Jan 2026",
    issues: 0,
    metrics: [
      { label: "Network Coverage", value: "96.8%", target: "≥95%", ok: true },
      { label: "Claim Accuracy", value: "99.7%", target: "≥99%", ok: true },
      { label: "Processing Time", value: "4.2 days", target: "≤5 days", ok: true },
    ],
  },
  {
    name: "VSP Vision Care",
    category: "Vision",
    role: "Vision plan administrator",
    contact: "employer@vsp.com",
    phone: "800-852-7600",
    contractExpiry: "Dec 31, 2026",
    slaStatus: "compliant",
    lastAudit: "Jan 2026",
    issues: 0,
    metrics: [
      { label: "Network Providers", value: "42,000+", target: "—", ok: true },
      { label: "Claim Turnaround", value: "2.8 days", target: "≤5 days", ok: true },
    ],
  },
  {
    name: "MetLife",
    category: "Life / AD&D / LTD",
    role: "Group life, AD&D, and disability carrier",
    contact: "group.benefits@metlife.com",
    phone: "800-638-5433",
    contractExpiry: "Dec 31, 2026",
    slaStatus: "review",
    lastAudit: "Mar 2026",
    issues: 1,
    metrics: [
      { label: "LTD Claim Resolution", value: "87.1%", target: "≥90%", ok: false },
      { label: "STD Processing", value: "5.8 days", target: "≤5 days", ok: false },
      { label: "Life Claim Payout", value: "12.3 days", target: "≤15 days", ok: true },
    ],
  },
  {
    name: "Fidelity Investments",
    category: "401(k) / Retirement",
    role: "Recordkeeper – 401(k) plan",
    contact: "allete@fidelity.com",
    phone: "800-835-5097",
    contractExpiry: "Mar 31, 2027",
    slaStatus: "compliant",
    lastAudit: "Dec 2025",
    issues: 0,
    metrics: [
      { label: "Participant Web Uptime", value: "99.97%", target: "≥99.9%", ok: true },
      { label: "Contribution Processing", value: "Next day", target: "≤2 days", ok: true },
      { label: "Loan Processing", value: "3.1 days", target: "≤5 days", ok: true },
    ],
  },
  {
    name: "WEX Health",
    category: "FSA / HSA",
    role: "FSA & HSA administrator",
    contact: "employer@wexhealth.com",
    phone: "866-451-3399",
    contractExpiry: "Dec 31, 2026",
    slaStatus: "compliant",
    lastAudit: "Feb 2026",
    issues: 0,
    metrics: [
      { label: "Debit Card Approval Rate", value: "94.3%", target: "≥90%", ok: true },
      { label: "Claim Reimbursement", value: "2.2 days", target: "≤3 days", ok: true },
    ],
  },
  {
    name: "Businessolver",
    category: "COBRA Administration",
    role: "COBRA notices, elections & premium collection",
    contact: "cobra@businessolver.com",
    phone: "888-460-5019",
    contractExpiry: "Dec 31, 2026",
    slaStatus: "issue",
    lastAudit: "May 2026",
    issues: 2,
    metrics: [
      { label: "Notice Timeliness", value: "73%", target: "100%", ok: false },
      { label: "Premium Collection", value: "91.2%", target: "≥95%", ok: false },
      { label: "Election Processing", value: "3.4 days", target: "≤5 days", ok: true },
    ],
  },
];

function SlaChip({ status }: { status: string }) {
  const styles: Record<string, string> = {
    compliant: "bg-emerald-50 text-emerald-700 border-emerald-200",
    review: "bg-amber-50 text-amber-700 border-amber-200",
    issue: "bg-red-50 text-red-700 border-red-200",
  };
  const labels: Record<string, string> = { compliant: "SLA Met", review: "Under Review", issue: "SLA Breach" };
  return (
    <span className={`inline-flex px-2 py-0.5 rounded text-xs font-medium border ${styles[status]}`}>
      {labels[status]}
    </span>
  );
}

export default function VendorsPage() {
  const issueCount = vendors.reduce((a, v) => a + v.issues, 0);
  const compliantCount = vendors.filter((v) => v.slaStatus === "compliant").length;

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-xl font-bold text-slate-900">Vendors & Carriers</h1>
        <p className="text-sm text-slate-500 mt-0.5">SLA monitoring, contract status, and carrier performance</p>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <p className="text-2xl font-bold text-slate-900">{vendors.length}</p>
          <p className="text-xs text-slate-500 mt-0.5">Active Vendors</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <p className="text-2xl font-bold text-emerald-600">{compliantCount}</p>
          <p className="text-xs text-slate-500 mt-0.5">SLA Compliant</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <p className="text-2xl font-bold text-amber-600">{vendors.filter((v) => v.slaStatus === "review").length}</p>
          <p className="text-xs text-slate-500 mt-0.5">Under Review</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <p className="text-2xl font-bold text-red-600">{issueCount}</p>
          <p className="text-xs text-slate-500 mt-0.5">Open Issues</p>
        </div>
      </div>

      {/* Vendor Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {vendors.map((vendor) => (
          <div key={vendor.name} className={`bg-white rounded-xl border overflow-hidden ${vendor.slaStatus === "issue" ? "border-red-200" : vendor.slaStatus === "review" ? "border-amber-200" : "border-slate-200"}`}>
            <div className="px-5 py-4 border-b border-slate-100 flex items-start justify-between">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-4 h-4 text-slate-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{vendor.name}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{vendor.role}</p>
                </div>
              </div>
              <SlaChip status={vendor.slaStatus} />
            </div>

            <div className="px-5 py-4 space-y-3">
              {/* Contact */}
              <div className="flex items-center gap-6 text-xs text-slate-500">
                <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" />{vendor.contact}</span>
                <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" />{vendor.phone}</span>
              </div>

              {/* Metrics */}
              <div className="space-y-2">
                {vendor.metrics.map((m) => (
                  <div key={m.label} className="flex items-center justify-between">
                    <span className="text-xs text-slate-600">{m.label}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-400">{m.target}</span>
                      <span className={`text-xs font-semibold ${m.ok ? "text-emerald-600" : "text-red-600"}`}>{m.value}</span>
                      {m.ok
                        ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                        : <AlertTriangle className="w-3.5 h-3.5 text-red-500" />}
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-1 border-t border-slate-100">
                <div className="flex items-center gap-3 text-[10px] text-slate-400">
                  <span>Contract expires: <span className="font-medium text-slate-600">{vendor.contractExpiry}</span></span>
                  <span>Last audit: <span className="font-medium text-slate-600">{vendor.lastAudit}</span></span>
                </div>
                <button className="flex items-center gap-1 text-xs text-[#1a6b3c] hover:underline font-medium">
                  View <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
