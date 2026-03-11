import { useState } from "react";
import AffiliateSidebar from "../../component/affiliateComponent/affiliteSidebar.jsx";
import AffiliateTopbar from "../../component/affiliateComponent/affiliteTopbar.jsx";

const LINK = "https://platform.com/ref?id=partner_alex_882";

const conversions = [
  { initials: "JS", name: "James Smith", plan: "Pro Annual Plan", amount: "+$49.00", time: "3H AGO", color: "bg-blue-100 text-blue-700" },
  { initials: "ML", name: "Maria Lopez", plan: "Basic Monthly", amount: "+$12.50", time: "8H AGO", color: "bg-purple-100 text-purple-700" },
  { initials: "KT", name: "Kevin Taylor", plan: "Enterprise", amount: "+$199.00", time: "1D AGO", color: "bg-green-100 text-green-700" },
  { initials: "DR", name: "Daniel Reed", plan: "Pro Monthly", amount: "+$24.00", time: "2D AGO", color: "bg-orange-100 text-orange-700" },
];

export default function ReferralsPage({ onNavigate }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard?.writeText(LINK).catch(() => { });
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AffiliateSidebar activePage="referrals" onNavigate={onNavigate} />
      <AffiliateTopbar />

      <main className="ml-48 pt-14 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-xl font-bold text-gray-900">Affiliate Partner Dashboard</h1>
            <p className="text-[13px] text-gray-500 mt-0.5">Track your referral performance and revenue share.</p>
          </div>
          <button className="flex items-center gap-2 border border-gray-200 bg-white text-gray-700 text-[13px] font-medium px-4 py-2 rounded-lg hover:bg-gray-50 transition-all">
            <svg width="15" height="15" fill="none" viewBox="0 0 24 24">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              <polyline points="7 10 12 15 17 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            Export Report
          </button>
        </div>

        {/* Partner Link Card */}
        <div className="bg-white border border-gray-100 rounded-2xl p-6 mb-5">
          <h2 className="text-[15px] font-bold text-gray-900 mb-1">Your Unique Partner Link</h2>
          <p className="text-[13px] text-gray-500 mb-4">Share this link to earn 20% commission on every conversion.</p>

          <div className="flex items-center gap-3 mb-4">
            <div className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-[13px] text-blue-500 font-mono select-all">
              {LINK}
            </div>
            <button
              onClick={handleCopy}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-[13px] font-semibold transition-all ${copied ? "bg-green-500 text-white" : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
            >
              {copied ? (
                <>
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Copied!
                </>
              ) : (
                <>
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                    <rect x="9" y="9" width="13" height="13" rx="2" stroke="white" strokeWidth="1.8" />
                    <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke="white" strokeWidth="1.8" />
                  </svg>
                  Copy
                </>
              )}
            </button>
          </div>

          {/* Quick Share */}
          <div className="flex items-center gap-3">
            <span className="text-[11px] text-gray-400 font-semibold uppercase tracking-widest">Quick Share</span>
            <div className="flex gap-2">
              {[
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><circle cx="18" cy="5" r="3" stroke="#6b7280" strokeWidth="1.8" /><circle cx="6" cy="12" r="3" stroke="#6b7280" strokeWidth="1.8" /><circle cx="18" cy="19" r="3" stroke="#6b7280" strokeWidth="1.8" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" stroke="#6b7280" strokeWidth="1.8" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" stroke="#6b7280" strokeWidth="1.8" /></svg>,
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="#6b7280" strokeWidth="1.8" /><circle cx="9" cy="7" r="4" stroke="#6b7280" strokeWidth="1.8" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="#6b7280" strokeWidth="1.8" /></svg>,
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#6b7280" strokeWidth="1.8" /><line x1="2" y1="12" x2="22" y2="12" stroke="#6b7280" strokeWidth="1.8" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" stroke="#6b7280" strokeWidth="1.8" /></svg>,
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="#6b7280" strokeWidth="1.8" /></svg>,
              ].map((icon, i) => (
                <button key={i} className="w-9 h-9 rounded-xl border border-gray-200 bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition-all">
                  {icon}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4 mb-5">
          <div className="bg-white border border-gray-100 rounded-2xl p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center">
                <svg width="17" height="17" fill="none" viewBox="0 0 24 24">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="#3b82f6" strokeWidth="1.8" />
                  <circle cx="9" cy="7" r="4" stroke="#3b82f6" strokeWidth="1.8" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="#3b82f6" strokeWidth="1.8" />
                </svg>
              </div>
              <span className="text-[11px] font-bold text-green-500">+12%</span>
            </div>
            <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-widest mb-1">Total Referrals</div>
            <div className="text-3xl font-bold text-gray-900">1,284</div>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 rounded-xl bg-orange-50 flex items-center justify-center">
                <svg width="17" height="17" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="#f97316" strokeWidth="1.8" />
                  <path d="M12 8v4l3 3" stroke="#f97316" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-[11px] font-bold text-green-500">+4.2%</span>
            </div>
            <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-widest mb-1">Active Conversions</div>
            <div className="text-3xl font-bold text-gray-900">342</div>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center">
                <svg width="17" height="17" fill="none" viewBox="0 0 24 24">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" stroke="#22c55e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide">Last 30 Days</span>
            </div>
            <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-widest mb-1">Earned Revenue</div>
            <div className="text-3xl font-bold text-green-500">$4,821.50</div>
          </div>
        </div>

        {/* Recent Conversions */}
        <div className="bg-white border border-gray-100 rounded-2xl p-6">
          <h2 className="text-[15px] font-bold text-gray-900 text-center mb-5">Recent Conversions</h2>
          <div className="divide-y divide-gray-50">
            {conversions.map((c) => (
              <div key={c.name} className="flex items-center justify-between py-3.5">
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-bold ${c.color}`}>
                    {c.initials}
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold text-gray-800">{c.name}</div>
                    <div className="text-[11px] text-gray-400">{c.plan}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[13px] font-bold text-green-500">{c.amount}</div>
                  <div className="text-[10px] text-gray-400">{c.time}</div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => onNavigate("commissions")}
            className="w-full mt-4 py-2.5 rounded-xl text-[13px] font-medium text-gray-500 border border-gray-200 hover:bg-gray-50 transition-all"
          >
            View All Activity
          </button>
        </div>
      </main>
    </div>
  );
}