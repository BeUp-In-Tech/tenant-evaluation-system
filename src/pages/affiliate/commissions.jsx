import { BarChart, Bar, XAxis, ResponsiveContainer, Tooltip } from "recharts";
import AffiliateSidebar from "../../component/affiliateComponent/affiliteSidebar.jsx";
import AffiliateTopbar from "../../component/affiliateComponent/affiliteTopbar.jsx";

const earningsData = [
  { w: "Feb 10", v: 320 }, { w: "Feb 10", v: 410 }, { w: "Feb 10", v: 280 },
  { w: "Feb 17", v: 500 }, { w: "Feb 17", v: 620 }, { w: "Feb 17", v: 390 },
  { w: "Feb 24", v: 450 }, { w: "Feb 24", v: 580 }, { w: "Feb 24", v: 340 },
  { w: "Mar 03", v: 680 }, { w: "Mar 03", v: 720 }, { w: "Mar 03", v: 490 },
  { w: "Mar 10", v: 520 }, { w: "Mar 10", v: 460 }, { w: "Mar 10", v: 390 },
];

const chartLabels = [
  { label: "Feb 10", idx: 1 }, { label: "Feb 17", idx: 4 },
  { label: "Feb 24", idx: 7 }, { label: "Mar 03", idx: 10 }, { label: "Mar 10", idx: 13 },
];

const commissions = [
  { id: "#A1024", plan: "Enterprise Annual", revenue: "$1,249.00", commission: "$249.80", stage: "Converted", stageColor: "bg-green-100 text-green-700", status: "Approved", statusDot: "bg-green-500" },
  { id: "#A1025", plan: "Pro Monthly", revenue: "$49.00", commission: "$9.80", stage: "Assessment Started", stageColor: "bg-blue-100 text-blue-700", status: "Pending", statusDot: "bg-amber-400" },
  { id: "#A1028", plan: "Pro Annual", revenue: "$499.00", commission: "$99.80", stage: "Dropped - Day 3", stageColor: "bg-red-100 text-red-600", status: "Pending", statusDot: "bg-amber-400" },
];

export default function CommissionsPage({ onNavigate }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <AffiliateSidebar activePage="commissions" onNavigate={onNavigate} />
      <AffiliateTopbar />

      <main className="ml-48 pt-14 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-xl font-bold text-gray-900">Commissions & Earnings</h1>
            <p className="text-[13px] text-gray-500 mt-0.5">Transparent breakdown of your revenue-sharing and payouts.</p>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 border border-gray-200 bg-white text-gray-700 text-[13px] font-medium px-4 py-2 rounded-lg hover:bg-gray-50 transition-all">
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
              </svg>
              Filter by Plan
            </button>
            <button className="flex items-center gap-2 bg-blue-600 text-white text-[13px] font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-all">
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
                <polyline points="7 10 12 15 17 10" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="12" y1="15" x2="12" y2="3" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              Export CSV
            </button>
          </div>
        </div>

        {/* Plan Banner */}
        <div className="bg-blue-600 rounded-2xl p-5 mb-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <div className="text-[15px] font-bold text-white">Standard Affiliate Plan</div>
              <div className="text-[13px] text-blue-200">
                You earn <span className="font-bold text-white underline">20% commission</span> on every successful conversion.
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-[10px] text-blue-300 font-semibold uppercase tracking-widest mb-1">Lifetime Earnings</div>
            <div className="text-2xl font-bold text-white">$12,482.00</div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-4 gap-3 mb-5">
          {[
            { label: "Total Earned Revenue", val: "$62,410.00", sub: "↗ 12% from last month", subColor: "text-green-500" },
            { label: "Commission Rate", val: "20%", sub: "Fixed base rate", subColor: "text-gray-400" },
            { label: "Total Commission", val: "$12,482.00", sub: "Processed to date", subColor: "text-gray-400" },
            { label: "Pending Payout", val: "$842.50", sub: "⏱ Next payout in 12 days", subColor: "text-amber-500", valColor: "text-amber-500" },
          ].map((s) => (
            <div key={s.label} className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-widest mb-2">{s.label}</div>
              <div className={`text-xl font-bold mb-1 ${s.valColor || "text-gray-900"}`}>{s.val}</div>
              <div className={`text-[11px] ${s.subColor}`}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Payout Info + Chart */}
        <div className="grid grid-cols-2 gap-4 mb-5">
          {/* Payout Info */}
          <div className="bg-white border border-gray-100 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="#3b82f6" strokeWidth="1.8" />
                <path d="M3 9h18M9 21V9" stroke="#3b82f6" strokeWidth="1.8" />
              </svg>
              <span className="text-[14px] font-bold text-gray-800">Payout Information</span>
            </div>
            <div className="flex flex-col gap-3 text-[13px] mb-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Payout Method</span>
                <div className="flex items-center gap-1.5 font-semibold text-gray-800">
                  <span className="w-5 h-5 rounded bg-blue-500 flex items-center justify-center text-white text-[10px] font-bold">S</span>
                  Stripe Connect
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Next Payout Date</span>
                <span className="font-semibold text-gray-800">March 15, 2024</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Current Status</span>
                <span className="text-[11px] font-bold bg-blue-100 text-blue-600 px-2.5 py-1 rounded-full">SCHEDULED</span>
              </div>
            </div>
            <p className="text-[11px] text-gray-400 leading-relaxed">
              Payouts are processed on the 15th of each month. Minimum payout threshold: $50.
            </p>
          </div>

          {/* Earnings Chart */}
          <div className="bg-white border border-gray-100 rounded-2xl p-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[14px] font-bold text-gray-800">Earnings Growth (Last 30 Days)</span>
              <button className="text-[12px] text-gray-500 border border-gray-200 rounded-lg px-3 py-1 flex items-center gap-1 hover:bg-gray-50">
                Last 30 Days
                <svg width="12" height="12" fill="none" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" /></svg>
              </button>
            </div>
            <ResponsiveContainer width="100%" height={150}>
              <BarChart data={earningsData} barSize={12}>
                <XAxis dataKey="w" tick={false} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #e5e7eb" }}
                  formatter={(v) => [`$${v}`, "Revenue"]}
                />
                <Bar dataKey="v" fill="#bfdbfe" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <div className="flex justify-between mt-1">
              {["Feb 10", "Feb 17", "Feb 24", "Mar 03", "Mar 10"].map((l) => (
                <span key={l} className="text-[10px] text-gray-400">{l}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Commission Breakdown Table */}
        <div className="bg-white border border-gray-100 rounded-2xl p-5">
          <h2 className="text-[14px] font-bold text-gray-800 mb-4">Commission Breakdown</h2>
          <table className="w-full text-[12px]">
            <thead>
              <tr className="border-b border-gray-100 text-[11px] text-gray-400 font-semibold uppercase tracking-wide">
                <th className="text-left pb-3">Referral ID</th>
                <th className="text-left pb-3">Plan</th>
                <th className="text-left pb-3">Revenue</th>
                <th className="text-left pb-3">Your Commission (20%)</th>
                <th className="text-left pb-3">Progress Stage</th>
                <th className="text-left pb-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {commissions.map((c) => (
                <tr key={c.id}>
                  <td className="py-3.5 font-semibold text-gray-700">{c.id}</td>
                  <td className="py-3.5 text-gray-600">{c.plan}</td>
                  <td className="py-3.5 text-gray-700">{c.revenue}</td>
                  <td className="py-3.5 font-bold text-blue-600">{c.commission}</td>
                  <td className="py-3.5">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${c.stageColor}`}>{c.stage}</span>
                  </td>
                  <td className="py-3.5">
                    <div className="flex items-center gap-1.5">
                      <span className={`w-2 h-2 rounded-full ${c.statusDot}`} />
                      <span className="text-gray-600">{c.status}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-[11px] text-gray-400">Showing 1-3 of 124 referrals</span>
            <div className="flex gap-1">
              <button className="w-7 h-7 flex items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-50">
                <svg width="12" height="12" fill="none" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
              </button>
              <button className="w-7 h-7 flex items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-50">
                <svg width="12" height="12" fill="none" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}