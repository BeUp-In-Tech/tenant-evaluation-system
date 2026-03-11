import { useNavigate, NavLink } from "react-router-dom";

const menuToRoute = {
  'overview': '/affiliateOverview',
  'referrals': '/affiliateReferral',
  'commissions': '/affiliateCommissions',
  'payout': '/affiliatePayout',
};

const NAV_ITEMS = [
  {
    id: "referrals",
    label: "Referrals",
    icon: (
      <svg width="17" height="17" fill="none" viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "commissions",
    label: "Commissions",
    icon: (
      <svg width="17" height="17" fill="none" viewBox="0 0 24 24">
        <line x1="12" y1="1" x2="12" y2="23" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "payout",
    label: "Pay out",
    icon: (
      <svg width="17" height="17" fill="none" viewBox="0 0 24 24">
        <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <line x1="2" y1="10" x2="22" y2="10" stroke="currentColor" strokeWidth="1.8"/>
      </svg>
    ),
  },
];

export default function AffiliateSidebar({ activePage, onNavigate }) {
  const navigate = useNavigate();
  return (
    <aside className="w-48 min-h-screen bg-white border-r border-gray-100 flex flex-col py-5 px-3 fixed left-0 top-0 z-30">
      <div className="flex items-center gap-2 px-2 mb-8">
        <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="white"/>
            <path d="M9 16V8h2v8H9zm4 0V8h2v8h-2z" fill="#2563eb"/>
          </svg>
        </div>
        <NavLink to="/affiliateOverview" className="text-sm font-semibold text-gray-800 tracking-tight">
          Tenant Integrity <sup className="text-[9px] text-gray-400 font-normal">™</sup>
        </NavLink>
      </div>

      <nav className="flex flex-col gap-0.5 flex-1">
        {NAV_ITEMS.map((item) => {
          const active = activePage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                if (onNavigate) onNavigate(item.id);
                if (menuToRoute[item.id]) navigate(menuToRoute[item.id]);
              }}
              className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-[13px] font-medium transition-all duration-150 text-left w-full
                ${active ? "bg-blue-50 text-blue-700" : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"}`}
            >
              <span className={active ? "text-blue-600" : "text-gray-400"}>{item.icon}</span>
              {item.label}
            </button>
          );
        })}
      </nav>

      <button className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-[13px] font-medium text-red-400 hover:bg-red-50 hover:text-red-500 transition-all mt-4">
        <svg width="17" height="17" fill="none" viewBox="0 0 24 24">
          <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          <polyline points="16 17 21 12 16 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="21" y1="12" x2="9" y2="12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
        Logout
      </button>
    </aside>
  );
}