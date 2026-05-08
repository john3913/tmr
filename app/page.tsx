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
  {
    icon: Lock,
    label: "SOC 2 Ready",
    sub: "Role-based access controls, full audit logging, and session management protect every record.",
    metric: "256-bit",
    metricLabel: "AES encryption",
  },
  {
    icon: BarChart3,
    label: "Real-time Metrics",
    sub: "Live enrollment counts, compliance flags, and carrier SLA status — continuously synchronized.",
    metric: "< 1s",
    metricLabel: "data latency",
  },
  {
    icon: Globe,
    label: "Multi-site Support",
    sub: "Unified compliance view across all ALLETE operating locations in three states.",
    metric: "3 states",
    metricLabel: "MN · WI · ND",
  },
  {
    icon: CheckCircle2,
    label: "DOL / IRS Aligned",
    sub: "Continuously mapped to current DOL and IRS guidance across all active benefit regulations.",
    metric: "14+",
    metricLabel: "regulations tracked",
  },
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
        className="fixed top-0 left-0 right-0 z-50 h-14 flex items-center px-8 border-b border-slate-200/60 relative"
        style={{ backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)", background: "rgba(240,245,250,0.88)" }}
      >
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold tracking-tight text-slate-900">TMR Benefits</span>
          <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#0079BE]/10 text-[#0079BE] font-mono tracking-widest uppercase">
            ALLETE
          </span>
        </div>

        {/* Centered compliance infographic */}
        <div className="hidden lg:flex items-center gap-5 absolute left-1/2 -translate-x-1/2">

          {/* Live pulse */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1a6b3c] opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#1a6b3c]" />
            </span>
            <span className="text-[9px] font-mono text-slate-500 uppercase tracking-[0.18em]">Live</span>
          </div>

          <div className="h-4 w-px bg-slate-300/60" />

          {/* Mini compliance arc */}
          <div className="flex items-center gap-2.5">
            <div className="relative w-7 h-7">
              <svg viewBox="0 0 28 28" className="w-full h-full -rotate-90">
                <defs>
                  <linearGradient id="lp-arc" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#1a6b3c" />
                    <stop offset="100%" stopColor="#0079BE" />
                  </linearGradient>
                </defs>
                <circle cx="14" cy="14" r="11" fill="none" stroke="#cbd5e1" strokeWidth="2.5" />
                <circle cx="14" cy="14" r="11" fill="none" stroke="url(#lp-arc)" strokeWidth="2.5"
                  strokeLinecap="round" strokeDasharray="64.97 69.12" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 leading-none">94%</p>
              <p className="text-[9px] text-slate-400 leading-none mt-[3px]">compliant</p>
            </div>
          </div>

          <div className="h-4 w-px bg-slate-300/60" />

          {/* Regulation bars with labels */}
          <div className="flex items-end gap-1 h-5">
            {([
              { v: 98, c: "#1a6b3c", label: "ERISA" },
              { v: 91, c: "#0079BE", label: "ACA" },
              { v: 82, c: "#f59e0b", label: "COBRA" },
              { v: 97, c: "#1a6b3c", label: "FMLA" },
            ] as {v:number;c:string;label:string}[]).map((b, i) => (
              <div key={i} className="flex flex-col items-center gap-[2px]">
                <div className="w-[5px] rounded-[2px]" style={{ height: `${b.v * 0.18}px`, backgroundColor: b.c }} />
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 -ml-3">
            {([
              { v: 98, label: "ERISA" }, { v: 91, label: "ACA" },
              { v: 82, label: "COBRA" }, { v: 97, label: "FMLA" },
            ]).map((b) => (
              <span key={b.label} className="text-[8px] font-mono text-slate-400">{b.v}%</span>
            ))}
          </div>

          <div className="h-4 w-px bg-slate-300/60" />

          {/* Employee sparkline */}
          <div className="flex items-center gap-2">
            <div className="flex items-end gap-[2px] h-4">
              {([72,82,90,96,100] as number[]).map((h, i) => (
                <div key={i} className="w-[3px] rounded-[1px]" style={{
                  height: `${h * 0.14}px`,
                  background: i === 4 ? "linear-gradient(to top,#0079BE,#00B0CA)" : `rgba(0,121,190,${0.18 + i * 0.14})`,
                }} />
              ))}
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-800 font-mono leading-none">1,842</p>
              <p className="text-[9px] text-slate-400 leading-none mt-[3px]">employees</p>
            </div>
          </div>

          <div className="h-4 w-px bg-slate-300/60" />

          {/* Next deadline */}
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
            <div>
              <p className="text-xs font-mono font-semibold text-amber-600 leading-none">Jun 30</p>
              <p className="text-[9px] text-slate-400 font-mono leading-none mt-[3px]">54 days</p>
            </div>
          </div>

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

        </div>

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#d5dde8] to-transparent pointer-events-none" />
      </section>

      {/* Features */}
      <section className="bg-[#f0f6fd] py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[10px] font-mono text-[#0079BE] uppercase tracking-[0.2em] mb-4">Full Suite</p>
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

      {/* Infographic */}
      <section className="bg-[#001a2e] py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_70%_at_20%_50%,rgba(0,121,190,0.10),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_50%_at_80%_50%,rgba(0,176,202,0.07),transparent)]" />
        <div className="max-w-6xl mx-auto relative">

          <div className="text-center mb-14">
            <p className="text-[10px] font-mono text-[#00B0CA] uppercase tracking-[0.2em] mb-3">Compliance Visibility</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-serif)" }}>
              Plan Year 2026 at a glance
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">

            {/* Multi-ring arc */}
            <div className="lg:col-span-2 flex flex-col items-center">
              <div className="relative w-60 h-60">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  {/* Track rings */}
                  {[90, 74, 58, 42].map((r) => (
                    <circle key={r} cx="100" cy="100" r={r} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="9" />
                  ))}
                  {/* FMLA — outer */}
                  <circle cx="100" cy="100" r="90" fill="none" stroke="#1a6b3c" strokeWidth="9"
                    strokeLinecap="round" strokeDasharray={`${2*Math.PI*90*0.97} ${2*Math.PI*90}`}
                    transform="rotate(-90 100 100)" />
                  {/* ERISA */}
                  <circle cx="100" cy="100" r="74" fill="none" stroke="#0079BE" strokeWidth="9"
                    strokeLinecap="round" strokeDasharray={`${2*Math.PI*74*0.98} ${2*Math.PI*74}`}
                    transform="rotate(-90 100 100)" />
                  {/* ACA */}
                  <circle cx="100" cy="100" r="58" fill="none" stroke="#00B0CA" strokeWidth="9"
                    strokeLinecap="round" strokeDasharray={`${2*Math.PI*58*0.91} ${2*Math.PI*58}`}
                    transform="rotate(-90 100 100)" />
                  {/* COBRA — inner */}
                  <circle cx="100" cy="100" r="42" fill="none" stroke="#f59e0b" strokeWidth="9"
                    strokeLinecap="round" strokeDasharray={`${2*Math.PI*42*0.82} ${2*Math.PI*42}`}
                    transform="rotate(-90 100 100)" />
                  {/* Center score */}
                  <text x="100" y="93" textAnchor="middle" fill="white" fontSize="30" fontWeight="bold" fontFamily="monospace">94</text>
                  <text x="100" y="110" textAnchor="middle" fill="rgba(148,163,184,0.75)" fontSize="10" fontFamily="monospace">overall</text>
                </svg>
              </div>

              <div className="grid grid-cols-2 gap-x-8 gap-y-2.5 mt-6 w-full max-w-[220px]">
                {[
                  { label: "FMLA",  score: 97, color: "#1a6b3c" },
                  { label: "ERISA", score: 98, color: "#0079BE" },
                  { label: "ACA",   score: 91, color: "#00B0CA" },
                  { label: "COBRA", score: 82, color: "#f59e0b" },
                ].map((row) => (
                  <div key={row.label} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: row.color }} />
                    <span className="text-[11px] text-slate-400 font-mono flex-1">{row.label}</span>
                    <span className="text-[11px] font-bold font-mono" style={{ color: row.color }}>{row.score}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 2026 Regulatory Calendar */}
            <div className="lg:col-span-3">
              <p className="text-[9px] font-mono text-slate-500 uppercase tracking-[0.18em] mb-5">2026 Regulatory Calendar</p>

              {/* Month headers */}
              <div className="flex mb-1.5 pl-[52px] gap-[3px]">
                {["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map((m, i) => (
                  <div key={m} className={`flex-1 text-center text-[8px] font-mono leading-none ${i === 4 ? "text-[#00B0CA]" : "text-slate-600"}`}>{m}</div>
                ))}
              </div>

              {/* Regulation rows */}
              <div className="space-y-[3px]">
                {[
                  { label: "ERISA",  color: "#0079BE", events: new Set([2,6,9])  },
                  { label: "ACA",    color: "#00B0CA", events: new Set([0,5,11]) },
                  { label: "COBRA",  color: "#f59e0b", events: new Set([1,5,8])  },
                  { label: "FMLA",   color: "#1a6b3c", events: new Set([0,6])    },
                  { label: "Enroll", color: "#a78bfa", events: new Set([9,10])   },
                ].map((row) => (
                  <div key={row.label} className="flex items-center gap-[3px]">
                    <span className="w-[52px] text-[9px] font-mono text-slate-500 text-right pr-2 flex-shrink-0">{row.label}</span>
                    {Array.from({ length: 12 }).map((_, mi) => {
                      const active = row.events.has(mi);
                      const now    = mi === 4;
                      return (
                        <div
                          key={mi}
                          className={`flex-1 h-7 rounded flex items-center justify-center transition-colors ${
                            active ? "opacity-100" : now ? "bg-white/[0.04]" : "bg-white/[0.02]"
                          }`}
                          style={active ? { backgroundColor: `${row.color}22` } : undefined}
                        >
                          {active && (
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: row.color }} />
                          )}
                          {!active && now && (
                            <div className="w-1 h-1 rounded-full bg-white/20" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>

              {/* Calendar legend */}
              <div className="flex flex-wrap gap-4 mt-5 pt-4 border-t border-white/[0.07]">
                {[
                  { label: "ERISA", color: "#0079BE" }, { label: "ACA", color: "#00B0CA" },
                  { label: "COBRA", color: "#f59e0b" }, { label: "FMLA", color: "#1a6b3c" },
                  { label: "Enrollment", color: "#a78bfa" },
                ].map((l) => (
                  <div key={l.label} className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: l.color }} />
                    <span className="text-[9px] text-slate-500 font-mono">{l.label}</span>
                  </div>
                ))}
              </div>

              {/* Stat strip */}
              <div className="grid grid-cols-3 gap-3 mt-6">
                {[
                  { value: "18",    label: "Deadlines tracked", color: "#0079BE" },
                  { value: "54d",   label: "Next filing",       color: "#f59e0b" },
                  { value: "1,842", label: "Active employees",  color: "#00B0CA" },
                ].map((s) => (
                  <div key={s.label} className="bg-white/[0.03] rounded-xl border border-white/[0.06] p-3 text-center">
                    <p className="text-lg font-bold font-mono leading-none" style={{ color: s.color }}>{s.value}</p>
                    <p className="text-[9px] text-slate-500 mt-1 leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Compliance Pillars */}
      <section className="bg-[#002b49] py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(0,121,190,0.12),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_80%_20%,rgba(0,176,202,0.08),transparent)]" />
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <p className="text-[10px] font-mono text-[#00B0CA] uppercase tracking-[0.2em] mb-4">Regulatory Coverage</p>
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
                className="bg-white/[0.03] rounded-3xl border border-white/[0.07] p-6 hover:border-[#0079BE]/30 hover:bg-[#0079BE]/[0.04] transition-all duration-200"
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

      {/* Trust */}
      <section className="bg-[#f0f6fd] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[10px] font-mono text-[#0079BE] uppercase tracking-[0.2em] mb-3">Platform Trust</p>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight" style={{ fontFamily: "var(--font-serif)" }}>
              Built for enterprise compliance
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {trust.map((t) => {
              const Icon = t.icon;
              return (
                <div
                  key={t.label}
                  className="bg-white rounded-2xl border border-[#dce8f5] p-6 flex flex-col gap-5 hover:shadow-md hover:shadow-[#0079BE]/8 hover:border-[#0079BE]/30 transition-all duration-200"
                >
                  <div className="flex items-start justify-between">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0079BE]/12 to-[#00B0CA]/8 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#0079BE]" />
                    </div>
                    <div className="text-right">
                      <p className="text-[17px] font-bold text-[#0079BE] leading-none tracking-tight" style={{ fontFamily: "var(--font-mono)" }}>{t.metric}</p>
                      <p className="text-[9px] text-slate-400 mt-0.5 uppercase tracking-wide leading-tight">{t.metricLabel}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-slate-900 mb-2 tracking-tight">{t.label}</p>
                    <p className="text-[12px] text-slate-500 leading-relaxed">{t.sub}</p>
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
          <p className="text-[10px] font-mono text-[#00B0CA]/90 uppercase tracking-[0.2em] mb-5">ALLETE Benefits Team</p>
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
      <footer className="bg-[#2d3f52] border-t border-white/8 py-9 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-[13px] font-semibold text-white/70">TMR Benefits</span>
            <span className="text-white/25 mx-2">·</span>
            <span className="text-[12px] text-white/45">ALLETE Internal Platform</span>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-[11px] text-white/40 font-mono">Troy Michael Rasch</p>
            <span className="text-white/20">·</span>
            <p className="text-[11px] text-white/40 font-mono">Plan Year 2026</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
