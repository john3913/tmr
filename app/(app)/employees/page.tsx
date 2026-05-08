import { Search, Filter, Users, CheckCircle2, AlertTriangle, XCircle } from "lucide-react";

const employees = [
  { id: "E-1042", name: "Sarah Mitchell", dept: "Operations", location: "Duluth, MN", status: "active", medical: "PPO", dental: "Premium", vision: true, fsa: true, cobra: false, issues: 0 },
  { id: "E-1043", name: "James Thorvald", dept: "Engineering", location: "Duluth, MN", status: "active", medical: "HDHP", dental: "Basic", vision: true, fsa: false, cobra: false, issues: 0 },
  { id: "E-1044", name: "Maria Okonkwo", dept: "Finance", location: "Minneapolis, MN", status: "active", medical: "PPO", dental: "Premium", vision: false, fsa: true, cobra: false, issues: 1 },
  { id: "E-1045", name: "Derek Hanson", dept: "IT", location: "Duluth, MN", status: "leave", medical: "PPO", dental: "Basic", vision: true, fsa: false, cobra: false, issues: 0 },
  { id: "E-1046", name: "Linda Patel", dept: "HR", location: "Duluth, MN", status: "active", medical: "HDHP", dental: "Premium", vision: true, fsa: true, cobra: false, issues: 0 },
  { id: "E-1047", name: "Robert Engstrom", dept: "Operations", location: "Superior, WI", status: "terminated", medical: "—", dental: "—", vision: false, fsa: false, cobra: true, issues: 1 },
  { id: "E-1048", name: "Angela Christoffel", dept: "Legal", location: "Duluth, MN", status: "active", medical: "PPO", dental: "Premium", vision: true, fsa: false, cobra: false, issues: 0 },
  { id: "E-1049", name: "Thomas Wiley", dept: "Engineering", location: "Fargo, ND", status: "active", medical: "PPO", dental: "Basic", vision: false, fsa: false, cobra: false, issues: 0 },
  { id: "E-1050", name: "Christine Balaban", dept: "Accounting", location: "Duluth, MN", status: "active", medical: "HDHP", dental: "Premium", vision: true, fsa: true, cobra: false, issues: 0 },
  { id: "E-1051", name: "Marcus Webb", dept: "Operations", location: "Duluth, MN", status: "active", medical: "PPO", dental: "Basic", vision: true, fsa: false, cobra: false, issues: 0 },
];

const summaryStats = [
  { label: "Total Employees", value: "1,842", sub: "Active + inactive" },
  { label: "Benefits Eligible", value: "1,758", sub: "Full-time (≥30 hrs)" },
  { label: "On Medical Plan", value: "1,625", sub: "88.2% participation" },
  { label: "COBRA Participants", value: "38", sub: "Active COBRA elections" },
];

const departments = ["All Departments", "Operations", "Engineering", "Finance", "IT", "HR", "Legal", "Accounting"];

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    active: "bg-emerald-50 text-emerald-700 border-emerald-200",
    leave: "bg-amber-50 text-amber-700 border-amber-200",
    terminated: "bg-red-50 text-red-700 border-red-200",
  };
  const labels: Record<string, string> = { active: "Active", leave: "On Leave", terminated: "Terminated" };
  return (
    <span className={`inline-flex px-2 py-0.5 rounded text-xs font-medium border ${styles[status]}`}>
      {labels[status]}
    </span>
  );
}

function BoolCell({ val }: { val: boolean }) {
  return val
    ? <CheckCircle2 className="w-4 h-4 text-emerald-500 mx-auto" />
    : <span className="text-slate-300 text-sm mx-auto block text-center">—</span>;
}

export default function EmployeesPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-xl font-bold text-slate-900">Employees</h1>
          <p className="text-sm text-slate-500 mt-0.5">Benefits elections and compliance status by employee</p>
        </div>
        <button className="px-4 py-2 bg-[#1a6b3c] text-white text-sm font-medium rounded-lg hover:bg-[#155c32] transition-colors">
          Export CSV
        </button>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {summaryStats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-slate-200 p-5">
            <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
            <p className="text-xs text-slate-500 mt-0.5">{stat.label}</p>
            <p className="text-xs text-slate-400 mt-1">{stat.sub}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-slate-200 p-4">
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex-1 min-w-48 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              className="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a6b3c]/30 focus:border-[#1a6b3c] placeholder:text-slate-400"
              placeholder="Search employees…"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-slate-400" />
            <select className="text-sm border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1a6b3c]/30 text-slate-700">
              {departments.map((d) => <option key={d}>{d}</option>)}
            </select>
          </div>
          <select className="text-sm border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1a6b3c]/30 text-slate-700">
            <option>All Statuses</option>
            <option>Active</option>
            <option>On Leave</option>
            <option>Terminated</option>
          </select>
          <select className="text-sm border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1a6b3c]/30 text-slate-700">
            <option>All Employees</option>
            <option>Has Issues</option>
            <option>On COBRA</option>
            <option>Not Enrolled</option>
          </select>
        </div>
      </div>

      {/* Employee Table */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="px-5 py-3 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
          <p className="text-xs text-slate-500">Showing 10 of 1,842 employees</p>
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-emerald-500" /> Enrolled</span>
            <span className="flex items-center gap-1.5"><AlertTriangle className="w-3 h-3 text-amber-500" /> Issue</span>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Employee</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Dept</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Status</th>
                <th className="text-center px-3 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Medical</th>
                <th className="text-center px-3 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Dental</th>
                <th className="text-center px-3 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Vision</th>
                <th className="text-center px-3 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">FSA</th>
                <th className="text-center px-3 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">COBRA</th>
                <th className="text-center px-3 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Issues</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {employees.map((emp) => (
                <tr key={emp.id} className="hover:bg-slate-50 transition-colors cursor-pointer">
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-[#1a6b3c]/10 flex items-center justify-center text-[#1a6b3c] text-xs font-bold flex-shrink-0">
                        {emp.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-900">{emp.name}</p>
                        <p className="text-[10px] text-slate-400">{emp.id} · {emp.location}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3 text-sm text-slate-600">{emp.dept}</td>
                  <td className="px-5 py-3"><StatusBadge status={emp.status} /></td>
                  <td className="px-3 py-3 text-center">
                    {emp.medical !== "—"
                      ? <span className={`text-xs font-medium ${emp.medical === "HDHP" ? "text-blue-600" : "text-slate-700"}`}>{emp.medical}</span>
                      : <span className="text-slate-300">—</span>
                    }
                  </td>
                  <td className="px-3 py-3 text-center">
                    {emp.dental !== "—"
                      ? <span className="text-xs text-slate-700">{emp.dental}</span>
                      : <span className="text-slate-300">—</span>
                    }
                  </td>
                  <td className="px-3 py-3"><BoolCell val={emp.vision} /></td>
                  <td className="px-3 py-3"><BoolCell val={emp.fsa} /></td>
                  <td className="px-3 py-3 text-center">
                    {emp.cobra
                      ? <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">COBRA</span>
                      : <span className="text-slate-300 text-sm">—</span>}
                  </td>
                  <td className="px-3 py-3 text-center">
                    {emp.issues > 0
                      ? <AlertTriangle className="w-4 h-4 text-amber-500 mx-auto" />
                      : <CheckCircle2 className="w-4 h-4 text-emerald-400 mx-auto" />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-5 py-3 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
          <p className="text-xs text-slate-500">Page 1 of 185</p>
          <div className="flex gap-1">
            {["1", "2", "3", "…", "185"].map((p) => (
              <button key={p} className={`px-2.5 py-1 text-xs rounded ${p === "1" ? "bg-[#1a6b3c] text-white" : "text-slate-600 hover:bg-slate-200"}`}>
                {p}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
