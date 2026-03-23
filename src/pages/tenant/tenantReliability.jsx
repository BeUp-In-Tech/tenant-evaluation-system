import { useState } from "react";
import TenantSidebar from "../../component/tenantComponent/tenantSidebar.jsx";
import TenantTopbar from "../../component/tenantComponent/tenantTopbar.jsx";

const ChevronDownIcon = ({ color = "#6b7280" }) => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <path d="M6 9l6 6 6-6" />
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
  const [activePage, setActivePage] = useState("my-reliability");

  const handleNavigate = (page) => {
    setActivePage(page);
    onNavigate && onNavigate(page);
  };

  const handleDayClick = (day, status) => {
    alert(`Day ${day} — Status: ${status}\nClick to view detailed activity log.`);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f8f9fa" }}>
      <TenantSidebar activePage={activePage} onNavigate={handleNavigate} />
      <TenantTopbar />

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