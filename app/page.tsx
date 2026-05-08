import Link from "next/link";
import HeroCanvas from "@/components/HeroCanvas";
import {
  ShieldCheck, CalendarRange, Users, Building2, FileBarChart2,
  ArrowRight, CheckCircle2, BarChart3, Lock, Globe,
} from "lucide-react";

const stats = [
  { value: "1,842", label: "Eligible Employees" },
  { value: "94%", label: "Compliance Score" },
  { value: "8", label: "Benefit Plans" },
  { value: "3", label: "Deadlines This Quarter" },
];

const features = [
  {
    icon: ShieldCheck,
    title: "Benefits Audit",
    desc: "Track ERISA, ACA, COBRA, and FMLA requirements with real-time compliance checks across all benefit plans.",
    href: "/audit",
    color: "from-emerald-500/10 to-emerald-600/5",
    accent: "text-emerald-600",
    iconBg: "bg-emerald-50",
    border: "group-hover:border-emerald-300",
  },
  {
    icon: CalendarRange,
    title: "Open Enrollment",
    desc: "Manage enrollment windows, eligibility rules, plan options, and carrier deadlines in a single unified view.",
    href: "/enrollment",
    color: "from-sky-500/10 to-sky-600/5",
    accent: "text-sky-600",
    iconBg: "bg-sky-50",
    border: "group-hover:border-sky-300",
  },
  {
    icon: Users,
    title: "Employee Directory",
    desc: "See every employee's benefit elections, COBRA status, and compliance flags at a glance.",
    href: "/employees",
    color: "from-violet-500/10 to-violet-600/5",
    accent: "text-violet-600",
    iconBg: "bg-violet-50",
    border: "group-hover:border-violet-300",
  },
  {
    icon: Building2,
    title: "Vendors & Carriers",
    desc: "Monitor SLA performance across all carriers — Blue Cross, Delta, MetLife, Fidelity, WEX, and more.",
    href: "/vendors",
    color: "from-amber-500/10 to-amber-600/5",
    accent: "text-amber-600",
    iconBg: "bg-amber-50",
    border: "group-hover:border-amber-300",
  },
  {
    icon: FileBarChart2,
    title: "Reports & Filings",
    desc: "Never miss a regulatory deadline. Form 5500, ACA 1094-C/1095-C, PCORI, and SAR — all tracked in one calendar.",
    href: "/reports",
    color: "from-rose-500/10 to-rose-600/5",
    accent: "text-rose-600",
    iconBg: "bg-rose-50",
    border: "group-hover:border-rose-300",
  },
];

const pillars = [
  {
    abbr: "ERISA",
    name: "Employee Retirement Income Security Act",
    score: 98,
    color: "#22c55e",
    checks: ["Form 5500 filed", "SPDs current", "Fiduciary coverage active"],
  },
  {
    abbr: "ACA",
    name: "Affordable Care Act",
    score: 91,
    color: "#0ea5e9",
    checks: ["MEC offered to FT staff", "Affordability test passing", "1095-C in progress"],
  },
  {
    abbr: "COBRA",
    name: "Consolidated Omnibus Budget Reconciliation Act",
    score: 82,
    color: "#f59e0b",
    checks: ["Election notices tracked", "Premium rates verified", "Admin agreement current"],
  },
  {
    abbr: "FMLA",
    name: "Family and Medical Leave Act",
    score: 97,
    color: "#a78bfa",
    checks: ["Posters posted at all sites", "Policy in handbook", "Designation notices sent"],
  },
];

const trust = [
  { icon: Lock, label: "SOC 2 Ready", sub: "Role-based access controls" },
  { icon: BarChart3, label: "Real-time Metrics", sub: "Live enrollment & audit data" },
  { icon: Globe, label: "Multi-site Support", sub: "MN, WI, ND coverage" },
  { icon: CheckCircle2, label: "DOL / IRS Aligned", sub: "Current regulatory mapping" },
];

function ScoreArc({ score, color }: { score: number; color: string }) {
  const r = 32;
  const circ = 2 * Math.PI * r;
  return (
    <div className="relative w-20 h-20">
      <svg viewBox="0 0 80 80" className="w-full h-full -rotate-90">
        <circle cx="40" cy="40" r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="6" />
        <circle cx="40" cy="40" r={r} fill="none" stroke={color} strokeWidth="6"
          strokeLinecap="round" strokeDasharray={`${circ * score / 100} ${circ}`} />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-lg font-bold text-white">{score}</span>
      </div>
    </div>
  );
}

export default function Landing() {
  return (
    <div className="min-h-screen overflow-x-hidden">

      {/* Nav — light glass */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 h-14 flex items-center px-8 border-b border-slate-100"
        style={{ backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", background: "rgba(255,255,255,0.88)" }}
      >
        <div className="flex items-center gap-2.5">
          <span className="text-sm font-semibold text-slate-900">TMR Benefits</span>
          <span className="text-[10px] px-2 py-0.5 rounded-full border border-slate-200 text-slate-400 font-mono ml-1">
            ALLETE Internal
          </span>
        </div>
        <div className="ml-auto">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 px-4 py-1.5 bg-[#1a6b3c] hover:bg-[#155c32] text-white text-xs font-semibold rounded-lg transition-colors"
          >
            Launch App <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </nav>

      {/* Hero — white with corporate light canvas */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-14 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/60 via-white to-white" />
        <HeroCanvas />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1a6b3c]/20 bg-[#1a6b3c]/5 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-[#1a6b3c] animate-pulse" />
            <span className="text-xs font-mono text-[#1a6b3c] tracking-widest uppercase">Plan Year 2026 Active</span>
          </div>

          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight mb-6 text-slate-900"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Benefits compliance,{" "}
            <span className="bg-gradient-to-r from-[#1a6b3c] via-[#15803d] to-[#0d9488] bg-clip-text text-transparent">
              engineered
            </span>{" "}
            for ALLETE
          </h1>

          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed mb-10">
            A single platform to audit regulatory requirements, manage open enrollment, track
            carrier SLAs, and file on time — purpose-built for ALLETE&apos;s 1,842 employees
            across Minnesota, Wisconsin, and North Dakota.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <Link
              href="/dashboard"
              className="flex items-center gap-2.5 px-7 py-3.5 bg-[#1a6b3c] hover:bg-[#155c32] text-white font-semibold rounded-xl transition-colors text-sm shadow-md shadow-[#1a6b3c]/20"
            >
              Launch Dashboard <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/audit"
              className="flex items-center gap-2.5 px-7 py-3.5 border border-slate-200 hover:border-slate-300 text-slate-600 hover:text-slate-900 font-semibold rounded-xl transition-colors text-sm bg-white/60"
            >
              View Audit Status
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-10 border-t border-slate-100 pt-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl font-bold text-slate-900" style={{ fontFamily: "var(--font-mono)" }}>{s.value}</p>
                <p className="text-xs text-slate-400 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f8fafc] to-transparent pointer-events-none" />
      </section>

      {/* Features */}
      <section className="bg-[#f8fafc] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono text-[#1a6b3c] uppercase tracking-widest mb-3">Full Suite</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900" style={{ fontFamily: "var(--font-serif)" }}>
              Everything your benefits team needs
            </h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
              Five integrated modules covering audit, enrollment, people, vendors, and reporting —
              all in one compliance platform.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <Link
                  key={f.title}
                  href={f.href}
                  className={`group relative bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-all duration-200 overflow-hidden ${f.border}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${f.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <div className="relative">
                    <div className={`w-10 h-10 rounded-xl ${f.iconBg} flex items-center justify-center mb-4`}>
                      <Icon className={`w-5 h-5 ${f.accent}`} />
                    </div>
                    <h3 className="text-base font-semibold text-slate-900 mb-2">{f.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
                    <div className={`flex items-center gap-1 mt-4 text-xs font-semibold ${f.accent} opacity-0 group-hover:opacity-100 transition-opacity`}>
                      Open module <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </Link>
              );
            })}

            <Link
              href="/dashboard"
              className="group relative bg-[#1a6b3c] rounded-2xl border border-emerald-700/50 p-6 hover:bg-[#155c32] transition-colors overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.07),transparent)]" />
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center mb-4">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">Full Dashboard</h3>
                <p className="text-sm text-emerald-200/80 leading-relaxed">
                  All metrics, alerts, and compliance status in a single view.
                </p>
                <div className="flex items-center gap-1 mt-4 text-xs font-semibold text-white">
                  Open dashboard <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Compliance Pillars */}
      <section className="bg-slate-900 py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_50%,rgba(26,107,60,0.08),transparent)]" />
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-14">
            <p className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-3">Regulatory Coverage</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white" style={{ fontFamily: "var(--font-serif)" }}>
              Full-spectrum compliance tracking
            </h2>
            <p className="text-slate-400 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
              Every major federal benefit regulation — monitored continuously, reported clearly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((p) => (
              <div
                key={p.abbr}
                className="bg-white/4 rounded-2xl border border-white/8 p-6 hover:border-white/16 hover:bg-white/6 transition-colors"
              >
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <p className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-mono)" }}>{p.abbr}</p>
                    <p className="text-[10px] text-slate-500 mt-0.5 leading-tight max-w-[120px]">{p.name}</p>
                  </div>
                  <ScoreArc score={p.score} color={p.color} />
                </div>
                <div className="space-y-2">
                  {p.checks.map((ch, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: p.color }} />
                      <p className="text-xs text-slate-400 leading-snug">{ch}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-white py-14 px-6 border-y border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {trust.map((t) => {
              const Icon = t.icon;
              return (
                <div key={t.label} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#1a6b3c]/8 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-[#1a6b3c]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{t.label}</p>
                    <p className="text-xs text-slate-500">{t.sub}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0f3d22] py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(34,197,94,0.08),transparent)]" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-grid" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
        <div className="relative max-w-3xl mx-auto text-center">
          <p className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-4">ALLETE Benefits Team</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-serif)" }}>
            Your compliance platform is ready
          </h2>
          <p className="text-emerald-200/60 text-sm leading-relaxed mb-10 max-w-lg mx-auto">
            Audit, enroll, report, and monitor — all without switching between spreadsheets, carrier portals, or email threads.
          </p>
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-white text-[#0f3d22] font-bold rounded-xl hover:bg-emerald-50 transition-colors text-sm shadow-xl shadow-black/30"
          >
            Launch Dashboard <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-white/6 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs text-slate-500 font-medium">TMR Benefits · ALLETE Internal Platform</span>
          <p className="text-xs text-slate-600 font-mono">Plan Year 2026</p>
        </div>
      </footer>
    </div>
  );
}
