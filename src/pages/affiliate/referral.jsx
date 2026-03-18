import { useState } from "react";
import AffiliateSidebar from "../../component/affiliateComponent/affiliteSidebar.jsx";
import AffiliateTopbar from "../../component/affiliateComponent/affiliteTopbar.jsx";

const LINK = "https://platform.com/ref?id=partner_alex_882";

const conversions = [
  { initials: "JS", name: "James Smith", plan: "Pro Annual", source: "Facebook", amount: "+$49.00", time: "3H AGO", color: "bg-blue-100 text-blue-700" },
  { initials: "ML", name: "Maria Lopez", plan: "Basic Monthly", source: "LinkedIn", amount: "+$12.50", time: "8H AGO", color: "bg-purple-100 text-purple-700" },
  { initials: "KT", name: "Kevin Taylor", plan: "Enterprise", source: "Email", amount: "+$199.00", time: "1D AGO", color: "bg-green-100 text-green-700" },
  { initials: "DR", name: "Daniel Reed", plan: "Pro Monthly", source: "Direct", amount: "+$24.00", time: "2D AGO", color: "bg-orange-100 text-orange-700" },
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
          <div className="flex items-center justify-between mb-1">
            <h2 className="text-[15px] font-bold text-gray-900">Your Unique Partner Link</h2>
            <span className="text-[11px] text-blue-600 font-semibold bg-blue-50 px-2 py-0.5 rounded">Landlord Signup Page</span>
          </div>
          <p className="text-[13px] text-gray-500 mb-1">Share this link to earn 20% commission on every paid subscription.</p>
          <p className="text-[11px] text-gray-400 mb-4 italic">This link directs landlords to the Tenant Integrity signup page.</p>

          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-[13px] text-blue-500 font-mono select-all overflow-hidden text-ellipsis whitespace-nowrap">
              {LINK}
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleCopy}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-[13px] font-semibold transition-all ${copied ? "bg-green-500 text-white" : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
              >
                {copied ? "Copied!" : "Copy Link"}
              </button>
              <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-[13px] font-semibold border border-gray-200 text-gray-700 hover:bg-gray-50 transition-all">
                Share Link
              </button>
            </div>
          </div>

          {/* Quick Share */}
          <div className="flex items-center gap-4">
            <span className="text-[11px] text-gray-400 font-bold uppercase tracking-widest">Share On</span>
            <div className="flex gap-2.5">
              {[
                { name: "Facebook", tip: "Share on Facebook", icon: <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg> },
                { name: "LinkedIn", tip: "Share on LinkedIn", icon: <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.8"/></svg> },
                { name: "Website", tip: "Copy for website", icon: <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8"/><line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="1.8"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" stroke="currentColor" strokeWidth="1.8"/></svg> },
                { name: "Email", tip: "Share via email", icon: <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.8"/><polyline points="22 6 12 13 2 6" stroke="currentColor" strokeWidth="1.8"/></svg> },
              ].map((s, i) => (
                <button key={i} title={s.tip} className="group relative w-10 h-10 rounded-xl border border-gray-100 bg-gray-50 flex items-center justify-center hover:bg-blue-50 hover:border-blue-200 text-gray-400 hover:text-blue-500 transition-all">
                  {s.icon}
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {s.tip}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-4 mb-5">
          <div className="bg-white border border-gray-100 rounded-2xl p-5">
            <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
              Referred Signups
              <div className="group relative cursor-help">
                <svg width="10" height="10" fill="none" viewBox="0 0 24 24" className="text-gray-300"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M12 16v-4m0-4h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-gray-900 text-white text-[9px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-normal">Users who registered using your referral link.</div>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900">1,284</div>
            <div className="text-[10px] text-green-500 font-bold mt-1">↗ 12% increase</div>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-5">
            <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-widest mb-1.5">Clicks</div>
            <div className="text-2xl font-bold text-gray-900">8,421</div>
            <div className="text-[10px] text-blue-500 font-bold mt-1">Unique link visits</div>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-5">
            <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-widest mb-1.5">Conversion Rate</div>
            <div className="text-2xl font-bold text-gray-900">4.1%</div>
            <div className="text-[10px] text-amber-500 font-bold mt-1">Avg industry: 2.8%</div>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-5">
            <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-widest mb-1.5">Active Conversions</div>
            <div className="text-2xl font-bold text-gray-900">342</div>
            <div className="text-[10px] text-green-500 font-bold mt-1">↗ 4 from last week</div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-5">
          <div className="bg-blue-600 rounded-2xl p-5 text-white flex flex-col justify-between">
            <div>
              <div className="text-[10px] text-blue-100 font-bold uppercase tracking-widest mb-1">Earned Revenue</div>
              <div className="text-3xl font-bold">$4,821.50</div>
            </div>
            <div className="mt-4 pt-3 border-t border-white/20">
              <p className="text-[10px] text-blue-100 mb-2 leading-relaxed">Commissions become available for payout after successful customer payment. Withdraw anytime in the Pay Out section.</p>
              <button 
                onClick={() => onNavigate("payout")}
                className="w-full py-2 bg-white/10 hover:bg-white/20 border border-white/30 rounded-xl text-[11px] font-bold transition-all"
              >
                Go to Payout
              </button>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col justify-between">
            <div>
              <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-widest mb-1.5">Available for Payout</div>
              <div className="text-2xl font-bold text-gray-900">$1,250.00</div>
            </div>
            <div className="flex flex-col gap-2 mt-4 pt-3 border-t border-gray-50">
              <div className="flex justify-between text-[11px]">
                <span className="text-gray-400 font-medium">Pending:</span>
                <span className="text-gray-900 font-bold">$340.50</span>
              </div>
              <div className="flex justify-between text-[11px]">
                <span className="text-gray-400 font-medium">Approved:</span>
                <span className="text-gray-900 font-bold">$909.50</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-widest mb-1.5">Earnings This Month</div>
                <div className="text-2xl font-bold text-gray-900">$620.00</div>
              </div>
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3 1.343 3 3-1.343 3-3 3m0-12c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3m0-3V2m0 20v-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/></svg>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-50">
               <div className="text-[11px] font-bold text-gray-900 mb-1">Active Prospects</div>
               <div className="text-[10px] text-gray-400">12 users currently completing the Pre-Tenancy process.</div>
            </div>
          </div>
        </div>

        {/* Recent Conversions */}
        <div className="bg-white border border-gray-100 rounded-2xl p-6">
          <h2 className="text-[15px] font-bold text-gray-900 mb-5 pl-2 border-l-4 border-blue-600">Recent Conversions</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-[10px] text-gray-400 font-bold uppercase tracking-wider border-b border-gray-50 text-left">
                  <th className="pb-3 px-4">User</th>
                  <th className="pb-3 px-4">Plan</th>
                  <th className="pb-3 px-4">Source</th>
                  <th className="pb-3 px-4 text-right">Commission</th>
                  <th className="pb-3 px-4 text-right">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {conversions.map((c, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold ${c.color} shrink-0`}>
                          {c.initials}
                        </div>
                        <span className="text-[13px] font-semibold text-gray-800">{c.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-[12px] text-gray-600">{c.plan}</td>
                    <td className="py-3 px-4">
                       <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                         c.source === 'Facebook' ? 'bg-blue-100 text-blue-600' :
                         c.source === 'LinkedIn' ? 'bg-indigo-100 text-indigo-600' :
                         c.source === 'Email' ? 'bg-gray-100 text-gray-600' :
                         'bg-green-100 text-green-600'
                       }`}>
                         {c.source.toLowerCase()}
                       </span>
                    </td>
                    <td className="py-3 px-4 text-[13px] font-bold text-green-500 text-right">{c.amount}</td>
                    <td className="py-3 px-4 text-[10px] text-gray-400 text-right font-medium">{c.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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