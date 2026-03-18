import { useState } from "react";

// ─── Icons ────────────────────────────────────────────────────────────────────
const DashboardIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
);

const TaskIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="5" y="3" width="14" height="18" rx="2" />
    <line x1="9" y1="8" x2="15" y2="8" />
    <line x1="9" y1="12" x2="15" y2="12" />
    <line x1="9" y1="16" x2="12" y2="16" />
  </svg>
);

const ParticipationIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
  </svg>
);

const LogoutIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
);

const SearchIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const BellIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.8">
    <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 01-3.46 0" />
  </svg>
);

const ChevronDownIcon = ({ color = "#6b7280" }) => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z" fill="white" opacity="0.9" />
  </svg>
);

// ─── Day Cell ─────────────────────────────────────────────────────────────────
const statusConfig = {
  completed: {
    bg: "#f0fdf4",
    border: "#bbf7d0",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <path d="M8 12l3 3 5-5" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  late: {
    bg: "#fefce8",
    border: "#fef08a",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <rect x="7" y="7" width="10" height="10" rx="2" stroke="#ca8a04" strokeWidth="2" />
        <path d="M12 9v4" stroke="#ca8a04" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="15" r="1" fill="#ca8a04" />
      </svg>
    ),
  },
  missed: {
    bg: "#fff1f2",
    border: "#fecdd3",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <line x1="15" y1="9" x2="9" y2="15" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="9" y1="9" x2="15" y2="15" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
};

function DayCell({ day, status, onClick }) {
  const cfg = statusConfig[status];
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, flex: 1 }}>
      <div
        onClick={() => onClick && onClick(day, status)}
        style={{
          width: "100%",
          aspectRatio: "1 / 1",
          borderRadius: 12,
          border: `1.5px solid ${cfg.border}`,
          background: cfg.bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "transform 0.15s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        {cfg.icon}
      </div>
      <span
        style={{
          fontSize: 10,
          fontWeight: 700,
          color: "#9ca3af",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        Day {day}
      </span>
    </div>
  );
}

// ─── Cycle Risk Heatmap ───────────────────────────────────────────────────────
function CycleRiskHeatmap({ days, onDayClick }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 16,
        border: "1px solid #f0f0f0",
        padding: "28px 28px 20px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
        <h2 style={{ fontSize: 17, fontWeight: 700, color: "#111827" }}>Cycle Risk Heatmap</h2>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            background: "#f0fdf4",
            color: "#16a34a",
            padding: "5px 14px",
            borderRadius: 20,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.04em",
          }}
        >
          <span style={{ width: 7, height: 7, background: "#22c55e", borderRadius: "50%", display: "inline-block" }} />
          CYCLE STATUS: ON TRACK
        </div>
      </div>

      {/* Days */}
      <div style={{ display: "flex", gap: 14, justifyContent: "space-between", marginBottom: 24 }}>
        {days.map((d, i) => (
          <DayCell key={i} day={d.day} status={d.status} onClick={onDayClick} />
        ))}
      </div>

      {/* Divider */}
      <div style={{ borderTop: "1px solid #f3f4f6", marginBottom: 16 }} />

      {/* Footer */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <p style={{ fontStyle: "italic", fontSize: 13, color: "#6b7280", maxWidth: "Stable Participation", lineHeight: 1.5 }}>
          "Consistent participation helps maintain stable communication and tenancy progress."
        </p>
        <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
          {[
            { color: "#22c55e", label: "Completed" },
            { color: "#eab308", label: "Late" },
            { color: "#ef4444", label: "Missed" },
          ].map(({ color, label }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "#6b7280" }}>
              <span style={{ width: 10, height: 10, background: color, borderRadius: "50%", display: "inline-block" }} />
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Sidebar ──────────────────────────────────────────────────────────────────
const navItems = [
  { key: "dashboard", label: "My Dashboard", Icon: DashboardIcon },
  { key: "tasks", label: "My Tasks", Icon: TaskIcon },
  { key: "participation", label: "Participation", Icon: ParticipationIcon },
];

function Sidebar({ activePage, onNavigate }) {
  return (
    <div
      style={{
        width: 192,
        background: "#fff",
        borderRight: "1px solid #e5e7eb",
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        zIndex: 10,
      }}
    >
      {/* Logo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "16px 20px",
          borderBottom: "1px solid #f0f0f0",
        }}
      >
        <div
          style={{
            width: 28,
            height: 28,
            background: "#3b82f6",
            borderRadius: 6,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ShieldIcon />
        </div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#111827", whiteSpace: "nowrap" }}>
            Tenant Integrity{" "}
            <span style={{ fontSize: 10, fontWeight: 400, color: "#9ca3af" }}>™</span>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: "12px 10px", display: "flex", flexDirection: "column", gap: 2 }}>
        {navItems.map(({ key, label, Icon }) => {
          const isActive = activePage === key;
          return (
            <div
              key={key}
              onClick={() => onNavigate && onNavigate(key)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "9px 10px",
                borderRadius: 8,
                cursor: "pointer",
                color: isActive ? "#2563eb" : "#6b7280",
                background: isActive ? "#eff6ff" : "transparent",
                fontSize: 13,
                fontWeight: isActive ? 600 : 500,
                transition: "all 0.15s",
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = "#f3f4f6";
                  e.currentTarget.style.color = "#374151";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#6b7280";
                }
              }}
            >
              <Icon />
              {label}
            </div>
          );
        })}
      </nav>

      {/* Logout */}
      <div style={{ padding: "16px 10px", borderTop: "1px solid #f0f0f0" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "8px 10px",
            borderRadius: 8,
            cursor: "pointer",
            color: "#ef4444",
            fontSize: 13,
            fontWeight: 500,
          }}
        >
          <LogoutIcon />
          Logout
        </div>
      </div>
    </div>
  );
}

// ─── Topbar ───────────────────────────────────────────────────────────────────
function Topbar() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 192,
        right: 0,
        height: 56,
        background: "#fff",
        borderBottom: "1px solid #e5e7eb",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
        zIndex: 9,
      }}
    >
      {/* Search */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          background: "#f9fafb",
          border: "1px solid #e5e7eb",
          borderRadius: 8,
          padding: "7px 14px",
          width: 320,
        }}
      >
        <SearchIcon />
        <input
          type="text"
          placeholder="Search reports, tenants, logs..."
          style={{
            background: "none",
            border: "none",
            outline: "none",
            fontSize: 13,
            color: "#6b7280",
            width: "100%",
          }}
        />
      </div>

      {/* Right side */}
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        {/* Role select */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12 }}>
          <span style={{ color: "#9ca3af", fontWeight: 500, letterSpacing: "0.04em" }}>ROLE VIEW:</span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              border: "1px solid #e5e7eb",
              borderRadius: 8,
              padding: "5px 10px",
              fontSize: 13,
              fontWeight: 500,
              color: "#374151",
              cursor: "pointer",
            }}
          >
            Tenant
            <ChevronDownIcon />
          </div>
        </div>

        {/* Bell */}
        <div
          style={{
            width: 34,
            height: 34,
            border: "1px solid #e5e7eb",
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            position: "relative",
          }}
        >
          <BellIcon />
          <span
            style={{
              width: 7,
              height: 7,
              background: "#ef4444",
              borderRadius: "50%",
              border: "1.5px solid #fff",
              position: "absolute",
              top: 5,
              right: 5,
            }}
          />
        </div>

        {/* User */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: "#111827" }}>Alex Johnson</div>
            <div style={{ fontSize: 11, color: "#9ca3af" }}>Tenant</div>
          </div>
          <div
            style={{
              width: 34,
              height: 34,
              background: "#2563eb",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 12,
              fontWeight: 700,
              color: "#fff",
            }}
          >
            AJ
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const heatmapDays = [
  { day: 1, status: "completed" },
  { day: 2, status: "completed" },
  { day: 3, status: "late" },
  { day: 4, status: "completed" },
  { day: 5, status: "missed" },
  { day: 6, status: "completed" },
  { day: 7, status: "completed" },
];

const cycles = ["February 2026", "January 2026", "December 2025", "November 2025"];

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function MyParticipationPage({ onNavigate }) {
  const [selectedCycle, setSelectedCycle] = useState("February 2026");
  const [showDropdown, setShowDropdown] = useState(false);
  const [activePage, setActivePage] = useState("participation");

  const handleNavigate = (page) => {
    setActivePage(page);
    onNavigate && onNavigate(page);
  };

  const handleDayClick = (day, status) => {
    alert(`Day ${day} — Status: ${status}\nClick to view detailed activity log.`);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f8f9fa" }}>
      <Sidebar activePage={activePage} onNavigate={handleNavigate} />
      <Topbar />

      <main style={{ marginLeft: 192, paddingTop: 56 }}>
        <div style={{ padding: 24 }}>
          {/* Page Header */}
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 20 }}>
            <div>
              <h1 style={{ fontSize: 22, fontWeight: 700, color: "#111827" }}>My Participation</h1>
              <p style={{ fontSize: 13, color: "#9ca3af", marginTop: 3 }}>
                In-depth analysis of your behavioral performance and consistency.
              </p>
            </div>

            {/* Cycle Picker */}
            <div style={{ position: "relative" }}>
              <div
                onClick={() => setShowDropdown(!showDropdown)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  border: "1px solid #e5e7eb",
                  borderRadius: 8,
                  padding: "7px 12px",
                  fontSize: 13,
                  color: "#374151",
                  cursor: "pointer",
                  background: "#fff",
                  userSelect: "none",
                }}
              >
                <span style={{ fontSize: 11, color: "#9ca3af", fontWeight: 600, letterSpacing: "0.04em" }}>
                  CYCLE:
                </span>
                <span style={{ fontWeight: 600, color: "#111827" }}>{selectedCycle}</span>
                <ChevronDownIcon />
              </div>

              {showDropdown && (
                <div
                  style={{
                    position: "absolute",
                    right: 0,
                    top: "calc(100% + 4px)",
                    background: "#fff",
                    border: "1px solid #e5e7eb",
                    borderRadius: 8,
                    boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                    zIndex: 20,
                    minWidth: 160,
                    overflow: "hidden",
                  }}
                >
                  {cycles.map((cycle) => (
                    <div
                      key={cycle}
                      onClick={() => {
                        setSelectedCycle(cycle);
                        setShowDropdown(false);
                      }}
                      style={{
                        padding: "9px 14px",
                        fontSize: 13,
                        color: cycle === selectedCycle ? "#2563eb" : "#374151",
                        fontWeight: cycle === selectedCycle ? 600 : 400,
                        background: cycle === selectedCycle ? "#eff6ff" : "transparent",
                        cursor: "pointer",
                        transition: "background 0.1s",
                      }}
                      onMouseEnter={(e) => {
                        if (cycle !== selectedCycle) e.currentTarget.style.background = "#f9fafb";
                      }}
                      onMouseLeave={(e) => {
                        if (cycle !== selectedCycle) e.currentTarget.style.background = "transparent";
                      }}
                    >
                      {cycle}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Heatmap */}
          <CycleRiskHeatmap days={heatmapDays} onDayClick={handleDayClick} />
        </div>
      </main>
    </div>
  );
}