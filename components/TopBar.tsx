"use client";
import { Bell, Search } from "lucide-react";

export default function TopBar() {
  return (
    <header className="h-14 bg-white border-b border-[#dce8f5] flex items-center px-6 gap-4 flex-shrink-0">
      <div className="flex-1 max-w-md relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#0079BE]/50" />
        <input
          className="w-full pl-9 pr-3 py-1.5 text-sm bg-[#f0f6fd] border border-[#dce8f5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0079BE]/25 focus:border-[#0079BE] placeholder:text-slate-400"
          placeholder="Search employees, plans, filings…"
        />
      </div>
      <div className="ml-auto flex items-center gap-3">
        <span className="text-xs text-slate-500 font-mono">Plan Year 2026</span>
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
