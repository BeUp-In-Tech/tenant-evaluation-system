import AffiliateSidebar from "../../component/affiliateComponent/affiliteSidebar.jsx";
import AffiliateTopbar from "../../component/affiliateComponent/affiliteTopbar.jsx";

const payoutHistory = [
  { date: "Mar 15, 2024", amount: "$1,250.00", method: "Stripe Connect", status: "Processing", statusColor: "text-amber-500", statusBg: "bg-amber-50" },
  { date: "Feb 15, 2024", amount: "$1,120.00", method: "Stripe Connect", status: "Paid", statusColor: "text-green-600", statusBg: "bg-green-50" },
  { date: "Jan 15, 2024", amount: "$980.50", method: "Stripe Connect", status: "Paid", statusColor: "text-green-600", statusBg: "bg-green-50" },
  { date: "Dec 15, 2023", amount: "$1,450.00", method: "Stripe Connect", status: "Paid", statusColor: "text-green-600", statusBg: "bg-green-50" },
];

const howItWorks = [
  {
    num: 1,
    title: "Stripe Connect",
    desc: "Securely link your bank account or debit card through our partner, Stripe. This ensures fast and automated transfers.",
  },
  {
    num: 2,
    title: "Monthly Schedule",
    desc: "Payouts are automatically initiated on the 15th of every month for all commissions earned in the previous calendar month.",
  },
  {
    num: 3,
    title: "Thresholds",
    desc: "Minimum payout threshold is $50.00. Balances below this amount roll over to the next month's cycle.",
  },
];

export default function PayoutPage({ onNavigate }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <AffiliateSidebar activePage="payout" onNavigate={onNavigate} />
      <AffiliateTopbar />

      <main className="ml-48 pt-14 p-6">
        {/* Header */}
        <h1 className="text-xl font-bold text-gray-900 mb-1">Payouts & Transfers</h1>
        <p className="text-[13px] text-gray-500 mb-6">Manage your earnings, view history, and update payment settings.</p>

        {/* Payout Method Banner */}
        <div className="bg-white border border-gray-100 rounded-2xl p-5 mb-5">
          <div className="grid grid-cols-3 gap-6">
            {/* Method */}
            <div>
              <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-widest mb-2">Payout Method</div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold text-[13px]">S</span>
                </div>
                <span className="text-[15px] font-bold text-gray-900">Stripe Connect</span>
                <span className="text-[10px] font-bold bg-green-100 text-green-600 px-2 py-0.5 rounded-full">ACTIVE</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1.5 text-[12px] text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  Processing
                </span>
                <span className="text-[12px] text-gray-500">System is verifying transfer details</span>
                <button className="text-[12px] text-blue-500 font-medium hover:underline flex items-center gap-0.5">
                  Manage Account
                  <svg width="10" height="10" fill="none" viewBox="0 0 24 24">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <polyline points="15 3 21 3 21 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="10" y1="14" x2="21" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Next Payout */}
            <div className="border-x border-gray-100 px-6">
              <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-widest mb-2">Next Payout Date</div>
              <div className="text-[22px] font-bold text-gray-900">March 15, 2024</div>
            </div>

            {/* Available */}
            <div>
              <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-widest mb-2">Available for Payout</div>
              <div className="text-[28px] font-bold text-gray-900 mb-3">$1,250.00</div>
              <button className="w-full py-2.5 bg-blue-600 text-white text-[13px] font-semibold rounded-xl hover:bg-blue-700 transition-all">
                Request Early Payout
              </button>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4 mb-5">
          <div className="bg-white border border-gray-100 rounded-2xl p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                  <rect x="2" y="5" width="20" height="14" rx="2" stroke="#3b82f6" strokeWidth="1.8" />
                  <line x1="2" y1="10" x2="22" y2="10" stroke="#3b82f6" strokeWidth="1.8" />
                </svg>
              </div>
              <span className="text-[11px] font-bold text-green-500">+12.5%</span>
            </div>
            <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-widest mb-1">Total Paid to Date</div>
            <div className="text-2xl font-bold text-gray-900">$14,582.00</div>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 rounded-xl bg-amber-50 flex items-center justify-center">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2" stroke="#f59e0b" strokeWidth="1.8" />
                  <line x1="3" y1="10" x2="21" y2="10" stroke="#f59e0b" strokeWidth="1.8" />
                  <line x1="8" y1="2" x2="8" y2="6" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round" />
                  <line x1="16" y1="2" x2="16" y2="6" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>
            </div>
            <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-widest mb-1">Pending Commissions</div>
            <div className="text-2xl font-bold text-gray-900">$340.50</div>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                  <polyline points="1 4 1 10 7 10" stroke="#6b7280" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M3.51 15a9 9 0 102.13-9.36L1 10" stroke="#6b7280" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>
            </div>
            <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-widest mb-1">Last Payout</div>
            <div className="text-2xl font-bold text-gray-900">$1,120.00</div>
            <div className="text-[11px] text-gray-400 mt-1">Feb 15, 2024</div>
          </div>
        </div>

        {/* Payout History + How Payouts Work */}
        <div className="grid grid-cols-3 gap-4">
          {/* History Table */}
          <div className="col-span-2 bg-white border border-gray-100 rounded-2xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-[14px] font-bold text-gray-800">Payout History</h2>
              <button className="flex items-center gap-1.5 text-[12px] text-blue-500 font-medium hover:underline">
                Download CSV
                <svg width="13" height="13" fill="none" viewBox="0 0 24 24">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <polyline points="7 10 12 15 17 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <table className="w-full text-[12px]">
              <thead>
                <tr className="border-b border-gray-100 text-[11px] text-gray-400 font-semibold uppercase tracking-wide">
                  <th className="text-left pb-3">Date</th>
                  <th className="text-left pb-3">Amount</th>
                  <th className="text-left pb-3">Method</th>
                  <th className="text-left pb-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {payoutHistory.map((p) => (
                  <tr key={p.date + p.amount}>
                    <td className="py-3.5 text-gray-600">{p.date}</td>
                    <td className="py-3.5 font-semibold text-gray-800">{p.amount}</td>
                    <td className="py-3.5 text-gray-500">{p.method}</td>
                    <td className="py-3.5">
                      <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold ${p.statusBg} ${p.statusColor}`}>
                        {p.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* How Payouts Work */}
          <div className="bg-white border border-gray-100 rounded-2xl p-5">
            <h2 className="text-[14px] font-bold text-gray-800 mb-5">How Payouts Work</h2>
            <div className="flex flex-col gap-5">
              {howItWorks.map((step) => (
                <div key={step.num} className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white text-[11px] font-bold shrink-0 mt-0.5">
                    {step.num}
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold text-gray-800 mb-1">{step.title}</div>
                    <p className="text-[12px] text-gray-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-5 flex items-center gap-1.5 text-[12px] text-blue-500 font-medium hover:underline">
              View Payout Policy
              <svg width="12" height="12" fill="none" viewBox="0 0 24 24">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}