"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  ShieldCheck,
  CalendarRange,
  Users,
  Building2,
  FileBarChart2,
  Settings,
  Zap,
} from "lucide-react";

const nav = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/audit", label: "Benefits Audit", icon: ShieldCheck },
  { href: "/enrollment", label: "Open Enrollment", icon: CalendarRange },
  { href: "/employees", label: "Employees", icon: Users },
  { href: "/vendors", label: "Vendors & Carriers", icon: Building2 },
  { href: "/reports", label: "Reports & Filings", icon: FileBarChart2 },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="w-60 flex-shrink-0 bg-white border-r border-slate-200 flex flex-col h-screen sticky top-0">
      {/* Logo */}
      <div className="px-5 py-5 border-b border-slate-200">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#1a6b3c] flex items-center justify-center">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-900 leading-tight">TMR Benefits</p>
            <p className="text-[10px] text-slate-500 leading-tight uppercase tracking-wide">ALLETE Compliance</p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
        {nav.map(({ href, label, icon: Icon }) => {
          const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                active
                  ? "bg-[#1a6b3c]/10 text-[#1a6b3c]"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              <Icon className={`w-4 h-4 flex-shrink-0 ${active ? "text-[#1a6b3c]" : "text-slate-400"}`} />
              {label}
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="px-3 py-4 border-t border-slate-200 space-y-0.5">
        <Link
          href="/settings"
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
        >
          <Settings className="w-4 h-4 text-slate-400" />
          Settings
        </Link>
        <div className="px-3 pt-3">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-[#1a6b3c] flex items-center justify-center text-white text-xs font-bold">
              JD
            </div>
            <div className="min-w-0">
              <p className="text-xs font-medium text-slate-900 truncate">Jane Doe</p>
              <p className="text-[10px] text-slate-500 truncate">Benefits Admin</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
