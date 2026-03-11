import { useNavigate, NavLink } from "react-router-dom";

const menuToRoute = {
  'overview': '/tenantOverview',
  'my-tasks': '/tenantMyTasks',
  'my-reliability': '/tenantMyReliability',
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
    id: "my-tasks",
    label: "My Tasks",
    icon: (
      <svg width="17" height="17" fill="none" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "my-reliability",
    label: "My Reliability",
    icon: (
      <svg width="17" height="17" fill="none" viewBox="0 0 24 24">
        <path d="M12 2a10 10 0 100 20A10 10 0 0012 2z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function TenantSidebar({ activePage, onNavigate }) {
  const navigate = useNavigate();
  return (
    <aside className="w-48 min-h-screen bg-white border-r border-gray-100 flex flex-col py-5 px-3 fixed left-0 top-0 z-30">
      {/* Logo */}
      <div className="flex items-center gap-2 px-2 mb-8">
        <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="white" />
            <path d="M9 16V8h2v8H9zm4 0V8h2v8h-2z" fill="#2563eb" />
          </svg>
        </div>
        <NavLink to="/tenantOverview" className="text-sm font-semibold text-gray-800 tracking-tight">
          Tenant Integrity <sup className="text-[9px] text-gray-400 font-normal">™</sup>
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