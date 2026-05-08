"use client";
import { Bell, Search } from "lucide-react";

export default function TopBar() {
  return (
    <header className="h-14 bg-white border-b border-slate-200 flex items-center px-6 gap-4 flex-shrink-0">
      <div className="flex-1 max-w-md relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input
          className="w-full pl-9 pr-3 py-1.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a6b3c]/30 focus:border-[#1a6b3c] placeholder:text-slate-400"
          placeholder="Search employees, plans, filings…"
        />
      </div>
      <div className="ml-auto flex items-center gap-3">
        <span className="text-xs text-slate-500">Plan Year 2026</span>
        <button className="relative p-1.5 rounded-lg hover:bg-slate-100 transition-colors">
          <Bell className="w-4 h-4 text-slate-500" />
          <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-red-500 rounded-full" />
        </button>
        <div className="h-4 w-px bg-slate-200" />
        <span className="text-xs font-medium text-slate-700">ALLETE, Inc.</span>
      </div>
    </header>
  );
}
