"use client";
import { Bell, Search } from "lucide-react";

const r = 8.5;
const circ = 2 * Math.PI * r;

const regs = [
  { v: 98, c: "#1a6b3c" },
  { v: 91, c: "#0079BE" },
  { v: 82, c: "#f59e0b" },
  { v: 97, c: "#1a6b3c" },
];

export default function TopBar() {
  return (
    <header className="h-14 bg-white border-b border-[#dce8f5] flex items-center px-6 gap-4 flex-shrink-0">

      {/* Search */}
      <div className="flex-1 max-w-xs relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#0079BE]/50" />
        <input
          className="w-full pl-9 pr-3 py-1.5 text-sm bg-[#f0f6fd] border border-[#dce8f5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0079BE]/25 focus:border-[#0079BE] placeholder:text-slate-400"
          placeholder="Search employees, plans, filings…"
        />
      </div>

      {/* Compliance infographic strip */}
      <div className="hidden lg:flex items-center gap-2.5 bg-[#f0f6fd] border border-[#dce8f5] rounded-2xl px-3.5 py-2 mx-2">

        {/* Live pulse */}
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-[7px] w-[7px]">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1a6b3c] opacity-40" />
            <span className="relative inline-flex h-[7px] w-[7px] rounded-full bg-[#1a6b3c]" />
          </span>
          <span className="text-[8px] font-mono text-slate-400 uppercase tracking-[0.18em]">Live</span>
        </div>

        <div className="h-3 w-px bg-[#dce8f5]" />

        {/* Mini compliance arc */}
        <div className="flex items-center gap-2">
          <div className="relative w-[22px] h-[22px]">
            <svg viewBox="0 0 22 22" className="w-full h-full -rotate-90">
              <defs>
                <linearGradient id="tb-arc" x1="0" y1="0" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#1a6b3c" />
                  <stop offset="100%" stopColor="#0079BE" />
                </linearGradient>
              </defs>
              <circle cx="11" cy="11" r={r} fill="none" stroke="#e0eaf6" strokeWidth="2.5" />
              <circle cx="11" cy="11" r={r} fill="none" stroke="url(#tb-arc)" strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray={`${circ * 0.94} ${circ}`} />
            </svg>
          </div>
          <div>
            <p className="text-[11px] font-bold text-slate-900 leading-none">94%</p>
            <p className="text-[8px] text-slate-400 leading-none mt-[2px]">compliant</p>
          </div>
        </div>

        <div className="h-3 w-px bg-[#dce8f5]" />

        {/* Regulation mini bar chart */}
        <div className="flex items-end gap-[2px] h-[18px]">
          {regs.map((b, i) => (
            <div
              key={i}
              className="w-[4px] rounded-[1.5px]"
              style={{ height: `${b.v * 0.18}px`, backgroundColor: b.c }}
            />
          ))}
        </div>

        <div className="h-3 w-px bg-[#dce8f5]" />

        {/* Employees */}
        <div className="flex items-center gap-1.5">
          <div className="flex items-end gap-[1.5px] h-3">
            {[72, 82, 90, 96, 100].map((h, i) => (
              <div
                key={i}
                className="w-[2.5px] rounded-[1px]"
                style={{
                  height: `${h * 0.12}px`,
                  background: i === 4
                    ? "linear-gradient(to top,#0079BE,#00B0CA)"
                    : `rgba(0,121,190,${0.2 + i * 0.12})`,
                }}
              />
            ))}
          </div>
          <p className="text-[10px] font-semibold text-slate-700 font-mono">1,842</p>
        </div>

        <div className="h-3 w-px bg-[#dce8f5]" />

        {/* Next deadline */}
        <div className="flex items-center gap-1.5">
          <div className="w-[5px] h-[5px] rounded-full bg-amber-400 flex-shrink-0" />
          <span className="text-[10px] font-mono font-semibold text-amber-600">Jun 30</span>
          <span className="text-[9px] text-slate-400 font-mono">· 54d</span>
        </div>

      </div>

      {/* Right */}
      <div className="ml-auto flex items-center gap-3">
        <button className="relative p-1.5 rounded-lg hover:bg-[#f0f6fd] transition-colors">
          <Bell className="w-4 h-4 text-[#0079BE]/60" />
          <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-red-500 rounded-full" />
        </button>
        <div className="h-4 w-px bg-[#dce8f5]" />
        <span className="text-xs font-semibold text-[#0079BE]">ALLETE, Inc.</span>
      </div>

    </header>
  );
}
