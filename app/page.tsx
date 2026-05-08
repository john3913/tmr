import Link from "next/link";
import HeroCanvas from "@/components/HeroCanvas";
import {
  ShieldCheck, CalendarRange, Users, Building2, FileBarChart2,
  ArrowRight, CheckCircle2, BarChart3, Lock, Globe,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Benefits Audit",
    desc: "Track ERISA, ACA, COBRA, and FMLA requirements with real-time compliance checks across all benefit plans.",
    href: "/audit",
    span: "",
  },
  {
    icon: CalendarRange,
    title: "Open Enrollment",
    desc: "Manage enrollment windows, eligibility rules, plan options, and carrier deadlines in one unified view.",
    href: "/enrollment",
    span: "",
  },
  {
    icon: Users,
    title: "Employee Directory",
    desc: "See every employee's benefit elections, COBRA status, and compliance flags at a glance.",
    href: "/employees",
    span: "sm:col-span-2 lg:col-span-1",
  },
  {
    icon: Building2,
    title: "Vendors & Carriers",
    desc: "Monitor SLA performance across Blue Cross, Delta, MetLife, Fidelity, WEX, and more.",
    href: "/vendors",
    span: "",
  },
  {
    icon: FileBarChart2,
    title: "Reports & Filings",
    desc: "Form 5500, ACA 1094-C/1095-C, PCORI, and SAR — every deadline tracked in one calendar.",
    href: "/reports",
    span: "",
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
  { icon: Lock,         label: "SOC 2 Ready",       sub: "Role-based access controls" },
  { icon: BarChart3,    label: "Real-time Metrics",  sub: "Live enrollment & audit data" },
  { icon: Globe,        label: "Multi-site Support", sub: "MN, WI, ND coverage" },
  { icon: CheckCircle2, label: "DOL / IRS Aligned",  sub: "Current regulatory mapping" },
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

      {/* Nav */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 h-14 flex items-center px-8 border-b border-slate-200/60"
        style={{ backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)", background: "rgba(240,245,250,0.88)" }}
      >
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold tracking-tight text-slate-900">TMR Benefits</span>
          <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#1a6b3c]/8 text-[#1a6b3c] font-mono tracking-widest uppercase">
            ALLETE
          </span>
        </div>
        <div className="ml-auto">
          <Link
            href="/dashboard"
            className="btn-grad inline-flex items-center gap-2 px-4 py-1.5 text-white text-xs font-semibold rounded-lg"
          >
            Launch App <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-14 pb-20 overflow-hidden bg-[#dde4ed]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#c8d4e0]/70 via-[#dde4ed]/60 to-[#d8e0ea]" />
        <HeroCanvas />

        <div className="relative z-10 max-w-4xl mx-auto space-y-0">

          {/* Personal signature */}
          <div className="flex items-center justify-center gap-5 mb-9">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-slate-400/50" />
            <div className="text-center">
              <p
                className="text-grad-motion text-[24px] font-semibold leading-tight tracking-tight"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Troy Michael Rasch
              </p>
              <p className="text-[9.5px] font-mono text-[#1a6b3c] tracking-[0.22em] uppercase mt-1.5">
                AI Driven Benefits Engineer
              </p>
            </div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-slate-400/50" />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#1a6b3c]/18 bg-[#1a6b3c]/5 mb-7">
            <div className="w-1.5 h-1.5 rounded-full bg-[#1a6b3c] animate-pulse" />
            <span className="text-[10px] font-mono text-[#1a6b3c] tracking-widest uppercase">Plan Year 2026 Active</span>
          </div>

          {/* Headline */}
          <h1
            className="text-5xl sm:text-6xl lg:text-[76px] font-bold leading-[1.06] tracking-[-0.02em] mb-6 text-slate-900"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Benefits compliance,{" "}
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[#1a6b3c] via-[#15803d] to-[#0d9488] bg-clip-text text-transparent">
              engineered
            </span>{" "}
            for ALLETE
          </h1>

          <p className="text-[17px] text-slate-500 max-w-2xl mx-auto leading-relaxed mb-10">
            A single platform to audit regulatory requirements, manage open enrollment, track
            carrier SLAs, and file on time — purpose-built for ALLETE&apos;s 1,842 employees
            across Minnesota, Wisconsin, and North Dakota.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-16">
            <Link
              href="/dashboard"
              className="btn-grad inline-flex items-center gap-2.5 px-7 py-3.5 text-white font-semibold rounded-2xl text-sm shadow-lg shadow-[#1a6b3c]/25"
            >
              Launch Dashboard <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/audit"
              className="btn-grad-outline inline-flex items-center gap-2.5 px-7 py-3.5 text-slate-700 hover:text-[#1a6b3c] font-semibold rounded-2xl text-sm"
            >
              View Audit Status
            </Link>
          </div>

          {/* Stats cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 w-full max-w-3xl mx-auto">

            {/* Employees */}
            <div className="bg-white/55 backdrop-blur-md rounded-2xl border border-white/75 p-5 text-left shadow-sm shadow-slate-400/10">
              <div className="flex flex-wrap gap-[3px] mb-4 w-[52px]">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className={`w-[9px] h-[9px] rounded-full ${i < 10 ? "bg-[#1a6b3c]" : "bg-slate-300"}`} />
                ))}
              </div>
              <p className="text-3xl font-bold bg-gradient-to-r from-[#1a6b3c] to-[#0d9488] bg-clip-text text-transparent" style={{ fontFamily: "var(--font-mono)" }}>1,842</p>
              <p className="text-xs text-slate-600 mt-1 font-medium">Eligible Employees</p>
              <p className="text-[10px] text-emerald-600 mt-1 font-semibold">+14 this month</p>
            </div>

            {/* Compliance Score */}
            <div className="bg-white/55 backdrop-blur-md rounded-2xl border border-white/75 p-5 text-left shadow-sm shadow-slate-400/10">
              <div className="flex items-start justify-between mb-1">
                <div className="flex-1 min-w-0">
                  <p className="text-3xl font-bold bg-gradient-to-r from-[#1a6b3c] to-[#0d9488] bg-clip-text text-transparent" style={{ fontFamily: "var(--font-mono)" }}>94%</p>
                  <p className="text-xs text-slate-600 mt-1 font-medium">Compliance Score</p>
                  <p className="text-[10px] text-emerald-600 mt-1 font-semibold">+2.1% vs last qtr</p>
                </div>
                <svg width="40" height="40" viewBox="0 0 40 40" className="-rotate-90 flex-shrink-0 mt-0.5">
                  <circle cx="20" cy="20" r="16" fill="none" stroke="#e2e8f0" strokeWidth="4" />
                  <circle cx="20" cy="20" r="16" fill="none" stroke="#1a6b3c" strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 16 * 0.94} ${2 * Math.PI * 16}`} />
                </svg>
              </div>
            </div>

            {/* Benefit Plans */}
            <div className="bg-white/55 backdrop-blur-md rounded-2xl border border-white/75 p-5 text-left shadow-sm shadow-slate-400/10">
              <div className="grid grid-cols-4 gap-1 mb-4 w-fit">
                {["Medical", "Dental", "Vision", "Life", "401k", "FSA", "COBRA", "LTD"].map((plan, i) => (
                  <div key={plan} title={plan} className={`w-3 h-3 rounded-sm ${i === 7 ? "bg-amber-400" : "bg-[#1a6b3c]"}`} />
                ))}
              </div>
              <p className="text-3xl font-bold bg-gradient-to-r from-[#1a6b3c] to-[#0d9488] bg-clip-text text-transparent" style={{ fontFamily: "var(--font-mono)" }}>8</p>
              <p className="text-xs text-slate-600 mt-1 font-medium">Benefit Plans</p>
              <p className="text-[10px] text-slate-400 mt-1">Plan Year 2026</p>
            </div>

            {/* Deadlines */}
            <div className="bg-white/55 backdrop-blur-md rounded-2xl border border-white/75 p-5 text-left shadow-sm shadow-slate-400/10">
              <div className="flex flex-col gap-1 mb-4">
                {[{ date: "Jun 30", hot: true }, { date: "Jul 15", hot: false }, { date: "Aug 1", hot: false }].map((d) => (
                  <span key={d.date} className={`inline-flex items-center gap-1 text-[9px] px-1.5 py-0.5 rounded font-mono font-semibold w-fit ${
                    d.hot ? "bg-amber-100 text-amber-700 border border-amber-200" : "bg-slate-100 text-slate-500 border border-slate-200"
                  }`}>
                    {d.hot && <span className="w-1 h-1 rounded-full bg-amber-500 inline-block" />}
                    {d.date}
                  </span>
                ))}
              </div>
              <p className="text-3xl font-bold bg-gradient-to-r from-amber-500 to-orange-400 bg-clip-text text-transparent" style={{ fontFamily: "var(--font-mono)" }}>3</p>
              <p className="text-xs text-slate-600 mt-1 font-medium">Deadlines This Quarter</p>
              <p className="text-[10px] text-amber-600 mt-1 font-semibold">Next: Jun 30</p>
            </div>

          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#d5dde8] to-transparent pointer-events-none" />
      </section>

      {/* Features */}
      <section className="bg-white py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[10px] font-mono text-[#1a6b3c] uppercase tracking-[0.2em] mb-4">Full Suite</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight" style={{ fontFamily: "var(--font-serif)" }}>
              Everything your benefits<br className="hidden sm:block" /> team needs
            </h2>
            <p className="text-slate-400 mt-4 max-w-md mx-auto text-[15px] leading-relaxed">
              Five integrated modules — audit, enrollment, people, vendors, and reporting — in one compliance platform.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <Link
                  key={f.title}
                  href={f.href}
                  className={`group relative bg-slate-50 hover:bg-white rounded-3xl border border-slate-100 hover:border-[#1a6b3c]/20 p-7 hover:shadow-xl hover:shadow-[#1a6b3c]/6 transition-all duration-300 ${f.span}`}
                >
                  <div className="w-10 h-10 rounded-2xl bg-[#1a6b3c]/8 flex items-center justify-center mb-5 group-hover:bg-[#1a6b3c]/12 transition-colors">
                    <Icon className="w-5 h-5 text-[#1a6b3c]" />
                  </div>
                  <h3 className="text-[15px] font-semibold text-slate-900 mb-2 tracking-tight">{f.title}</h3>
                  <p className="text-[13px] text-slate-500 leading-relaxed">{f.desc}</p>
                  <div className="flex items-center gap-1.5 mt-5 text-[11px] font-semibold text-[#1a6b3c] opacity-0 group-hover:opacity-100 transition-opacity translate-x-0 group-hover:translate-x-0.5 duration-200">
                    Open module <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              );
            })}

            {/* Dashboard tile */}
            <Link
              href="/dashboard"
              className="btn-grad group relative rounded-3xl border border-emerald-800/30 p-7 overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.09),transparent)]" />
              <div className="relative">
                <div className="w-10 h-10 rounded-2xl bg-white/15 flex items-center justify-center mb-5">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-[15px] font-semibold text-white mb-2 tracking-tight">Full Dashboard</h3>
                <p className="text-[13px] text-emerald-200/70 leading-relaxed">
                  All metrics, alerts, and compliance status in a single view.
                </p>
                <div className="flex items-center gap-1.5 mt-5 text-[11px] font-semibold text-white/80">
                  Open dashboard <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Compliance Pillars */}
      <section className="bg-slate-950 py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(26,107,60,0.07),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_80%_20%,rgba(13,148,136,0.05),transparent)]" />
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <p className="text-[10px] font-mono text-emerald-400 uppercase tracking-[0.2em] mb-4">Regulatory Coverage</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-serif)" }}>
              Full-spectrum compliance
            </h2>
            <p className="text-slate-500 mt-4 max-w-md mx-auto text-[15px] leading-relaxed">
              Every major federal benefit regulation — monitored continuously, reported clearly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pillars.map((p) => (
              <div
                key={p.abbr}
                className="bg-white/[0.03] rounded-3xl border border-white/[0.07] p-6 hover:border-white/12 hover:bg-white/[0.05] transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p className="text-2xl font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-mono)" }}>{p.abbr}</p>
                    <p className="text-[10px] text-slate-600 mt-1 leading-tight max-w-[120px]">{p.name}</p>
                  </div>
                  <ScoreArc score={p.score} color={p.color} />
                </div>
                <div className="space-y-2.5">
                  {p.checks.map((ch, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: p.color }} />
                      <p className="text-[12px] text-slate-400 leading-snug">{ch}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-white py-16 px-6 border-y border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {trust.map((t) => {
              const Icon = t.icon;
              return (
                <div key={t.label} className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-[#1a6b3c]/7 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4.5 h-4.5 text-[#1a6b3c]" />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-slate-900 tracking-tight">{t.label}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">{t.sub}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0d3a1f] py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_50%_50%,rgba(34,197,94,0.07),transparent)]" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-grid" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
        <div className="relative max-w-2xl mx-auto text-center">
          <p className="text-[10px] font-mono text-emerald-400/80 uppercase tracking-[0.2em] mb-5">ALLETE Benefits Team</p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-white mb-5 tracking-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Your compliance platform<br className="hidden sm:block" /> is ready
          </h2>
          <p className="text-emerald-200/50 text-[15px] leading-relaxed mb-10 max-w-sm mx-auto">
            Audit, enroll, report, and monitor — without spreadsheets, carrier portals, or email threads.
          </p>
          <Link
            href="/dashboard"
            className="btn-grad-cta inline-flex items-center gap-2.5 px-8 py-4 text-[#0d3a1f] font-bold rounded-2xl text-sm shadow-2xl shadow-black/40"
          >
            Launch Dashboard <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-white/5 py-9 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-[13px] font-semibold text-slate-400">TMR Benefits</span>
            <span className="text-slate-700 mx-2">·</span>
            <span className="text-[12px] text-slate-600">ALLETE Internal Platform</span>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-[11px] text-slate-700 font-mono">Troy Michael Rasch</p>
            <span className="text-slate-800">·</span>
            <p className="text-[11px] text-slate-700 font-mono">Plan Year 2026</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
