import { useNavigate, NavLink } from "react-router-dom";

const menuToRoute = {
  'overview': '/landlordOverview',
  'pre-tenancy': '/landlordPreTenancy',
  'behavioural-risk': '/landlordBehaviouralRisk',
  'early-warnings': '/landlordEarlyWarnings',
  'property-status': '/landlordPropertyStatus',
};

const NAV_ITEMS = [
    {
        id: "overview",
        label: "Overview",
        icon: (
            <svg width="17" height="17" fill="none" viewBox="0 0 24 24">
                <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
                <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
                <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
                <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
            </svg>
        ),
    },
    {
        id: "pre-tenancy",
        label: "Pre-Tenancy",
        icon: (
            <svg width="17" height="17" fill="none" viewBox="0 0 24 24">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.8" />
                <path d="M23 21v-2a4 4 0 00-3-3.87" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        id: "behavioural-risk",
        label: "Behavioural Risk",
        icon: (
            <svg width="17" height="17" fill="none" viewBox="0 0 24 24">
                <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="currentColor" strokeWidth="1.8" />
                <line x1="12" y1="9" x2="12" y2="13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <line x1="12" y1="17" x2="12.01" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        id: "early-warnings",
        label: "Early Warnings",
        icon: (
            <svg width="17" height="17" fill="none" viewBox="0 0 24 24">
                <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="currentColor" strokeWidth="1.8" />
                <path d="M13.73 21a2 2 0 01-3.46 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        id: "property-status",
        label: "Property status",
        icon: (
            <svg width="17" height="17" fill="none" viewBox="0 0 24 24">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                <polyline points="9 22 9 12 15 12 15 22" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
            </svg>
        ),
    },
];

export default function LandlordSidebar({ activePage, onNavigate }) {
    const navigate = useNavigate();
    return (
        <aside className="w-52 min-h-screen bg-white border-r border-gray-100 flex flex-col py-5 px-3 fixed left-0 top-0 z-30">
            {/* Logo */}
            <div className="flex items-center gap-2 px-2 mb-8">
                <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="white" />
                        <path d="M9 16V8h2v8H9zm4 0V8h2v8h-2z" fill="#2563eb" />
                    </svg>
                </div>
                <NavLink to="/landlordOverview" className="text-sm font-semibold text-gray-800 tracking-tight">
                    Tenant Integrity{" "}
                    <sup className="text-[9px] text-gray-400 font-normal">™</sup>
                </NavLink>
            </div>

            {/* Nav */}
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

            {/* Logout */}
            <button className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-[13px] font-medium text-red-400 hover:bg-red-50 hover:text-red-500 transition-all mt-4">
                <svg width="17" height="17" fill="none" viewBox="0 0 24 24">
                    <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <polyline points="16 17 21 12 16 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="21" y1="12" x2="9" y2="12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
                Logout
            </button>
        </aside>
    );
}