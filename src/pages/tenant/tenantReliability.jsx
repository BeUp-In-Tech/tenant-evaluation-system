import { useState } from 'react';
import TenantSidebar from "../../component/tenantComponent/tenantSidebar.jsx";
import TenantTopbar from "../../component/tenantComponent/tenantTopbar.jsx";

const metrics = [
  {
    label: "Responsiveness",
    value: "94%",
    desc: "How quickly you complete assigned tasks. Shows how reliably you respond to check-ins requested during the cycle.",
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" stroke="#3b82f6" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
    barColor: "bg-blue-500",
    pct: 94,
  },
  {
    label: "Task Commitment",
    value: "88%",
    desc: "How often you complete required monthly tasks. Indicates how consistently you complete required participation tasks.",
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" stroke="#3b82f6" strokeWidth="1.8" />
        <path d="M12 7v5l3 3" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    barColor: "bg-blue-500",
    pct: 88,
  },
  {
    label: "Consistency",
    value: "92%",
    desc: "How stable your response timing is across the cycle. Reflects how stable your participation timing is across the cycle.",
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="18" rx="2" stroke="#3b82f6" strokeWidth="1.8" />
        <line x1="3" y1="10" x2="21" y2="10" stroke="#3b82f6" strokeWidth="1.8" />
        <line x1="8" y1="2" x2="8" y2="6" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="16" y1="2" x2="16" y2="6" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    barColor: "bg-blue-500",
    pct: 92,
  },
  {
    label: "Follow-Through",
    value: "96%",
    desc: "How well you correct or complete tasks when adjustments are needed. Measures how well you complete or correct tasks when needed.",
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    barColor: "bg-blue-500",
    pct: 96,
  },
];

const heatmapDays = [
  { day: 1, status: "completed" },
  { day: 2, status: "completed" },
  { day: 3, status: "late" },
  { day: 4, status: "completed" },
  { day: 5, status: "missed" },
  { day: 6, status: "completed" },
  { day: 7, status: "completed" },
];

function DayCell({ day, status, onClick }) {
  const config = {
    completed: {
      bg: "bg-green-100 border-green-200",
      icon: (
        <path
          d="M8 12l3 3 5-5"
          stroke="#16a34a"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ),
    },
    late: {
      bg: "bg-yellow-100 border-yellow-200",
      icon: (
        <>
          <rect x="7" y="7" width="10" height="10" rx="2" stroke="#ca8a04" strokeWidth="2.5"/>
          <path d="M12 9v4" stroke="#ca8a04" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="12" cy="15" r="1" fill="#ca8a04"/>
        </>
      ),
    },
    missed: {
      bg: "bg-red-100 border-red-200",
      icon: (
        <>
          <line x1="15" y1="9" x2="9" y2="15" stroke="#ef4444" strokeWidth="3" strokeLinecap="round"/>
          <line x1="9" y1="9" x2="15" y2="15" stroke="#ef4444" strokeWidth="3" strokeLinecap="round"/>
        </>
      ),
    },
  };

  const c = config[status];

  return (
    <div className="flex flex-col items-center gap-3">
      <div
        onClick={() => onClick && onClick(day, status)}
        className={`w-28 h-24 rounded-xl border flex items-center justify-center cursor-pointer hover:scale-105 transition-transform ${c.bg}`}
      >
        <svg width="36" height="36" fill="none" viewBox="0 0 24 24">
          {c.icon}
        </svg>
      </div>

      <span className="text-xs text-gray-400 font-semibold uppercase">
        Day {day}
      </span>
    </div>
  );
}

function CycleRiskHeatmap({ days, onDayClick }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 w-full mb-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-lg font-bold text-gray-900">
          Cycle Risk Heatmap
        </h2>

        <div className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-xs font-semibold flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          CYCLE STATUS: ON TRACK
        </div>
      </div>

      {/* Days */}
      <div className="flex gap-6 justify-between">
        {days.map((d, i) => (
          <DayCell 
            key={i} 
            day={d.day || i + 1} 
            status={d.status || d} 
            onClick={onDayClick} 
          />
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-100 my-6"></div>

      {/* Footer */}
      <div className="flex justify-between items-center text-sm text-gray-500">
        <p className="italic text-[13px]">
          "Consistent participation helps maintain stable communication and tenancy progress."
        </p>

        <div className="flex gap-6 items-center">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            Completed
          </div>

          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            Late
          </div>

          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            Missed
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MyReliabilityPage({ onNavigate }) {
  const [selectedCycle, setSelectedCycle] = useState("February 2026");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleCycleChange = (cycle) => {
    setSelectedCycle(cycle);
    setShowDropdown(false);
    console.log('Cycle changed to:', cycle);
  };

  const handleDayClick = (day, status) => {
    console.log(`Day ${day} clicked - Status: ${status}`);
    alert(`Day ${day} details:\nStatus: ${status}\nClick to view detailed activity log.`);
  };

  const cycles = ["February 2026", "January 2026", "December 2025", "November 2025"];

  return (
    <div className="min-h-screen bg-gray-50">
      <TenantSidebar activePage="my-reliability" onNavigate={onNavigate} />
      <TenantTopbar />

      <main className="ml-48 pt-14 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-xl font-bold text-gray-900">My Reliability</h1>
            <p className="text-[13px] text-gray-500 mt-0.5">In-depth analysis of your behavioral performance and consistency.</p>
          </div>
          <div className="relative">
            <div 
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 py-2 text-[13px] text-gray-700 cursor-pointer hover:bg-gray-50"
            >
              <span className="text-[11px] text-gray-500 font-medium">CYCLE:</span>
              <span className="font-semibold">{selectedCycle}</span>
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                <path d="M6 9l6 6 6-6" stroke="#6b7280" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </div>
            {showDropdown && (
              <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                {cycles.map((cycle) => (
                  <button
                    key={cycle}
                    onClick={() => handleCycleChange(cycle)}
                    className="block w-full text-left px-3 py-2 text-[13px] text-gray-700 hover:bg-gray-50 transition-all"
                  >
                    {cycle}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-4 gap-4 mb-5">
          {metrics.map((m) => (
            <div key={m.label} className="bg-white border border-gray-100 rounded-2xl p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[13px] font-semibold text-gray-700">{m.label}</span>
                <span className="text-gray-400">{m.icon}</span>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-3">{m.value}</div>
              <p className="text-[11px] text-gray-400 leading-relaxed mb-3">{m.desc}</p>
              <div className="w-full h-1.5 bg-gray-100 rounded-full">
                <div className={`h-1.5 rounded-full ${m.barColor}`} style={{ width: `${m.pct}%` }} />
              </div>
            </div>
          ))}
        </div>

        {/* Cycle Risk Heatmap */}
        <CycleRiskHeatmap days={heatmapDays} onDayClick={handleDayClick} />
      </main>
    </div>
  );
}