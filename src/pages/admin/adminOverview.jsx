import { LineChart, Line, XAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import Sidebar from '../../component/adminComponent/adminSidebar.jsx';
import Topbar from '../../component/adminComponent/adminTopbar.jsx';
import Layout from '../../component/Layout.jsx';

const errorData = [
  { t: "00:00", v: 0.15 }, { t: "03:00", v: 0.13 }, { t: "06:00", v: 0.11 },
  { t: "09:00", v: 0.18 }, { t: "12:00", v: 0.28 }, { t: "15:00", v: 0.22 },
  { t: "18:00", v: 0.08 },
];
const latencyData = [
  { t: "00:00", v: 195 }, { t: "03:00", v: 180 }, { t: "06:00", v: 170 },
  { t: "09:00", v: 210 }, { t: "12:00", v: 250 }, { t: "15:00", v: 175 },
  { t: "18:00", v: 230 }, { t: "21:00", v: 200 },
];

function StatCard({ label, children }) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-5">
      <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-2">{label}</div>
      {children}
    </div>
  );
}

export default function OverviewPage({ onNavigate }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar activePage="overview" onNavigate={onNavigate} />
      <Topbar />
      <Layout>
        <h1 className="text-xl font-bold text-gray-900 mb-1">System Overview</h1>
        <p className="text-[13px] text-gray-500 mb-6">
          Real-time metrics and orchestration control for all services.
        </p>

        {/* Stat Cards */}
        <div className="grid grid-cols-6 gap-3 mb-6">
          <StatCard label="System Status">
            <div className="text-lg font-bold text-gray-900">Operational</div>
          </StatCard>
          <StatCard label="API Error Rate">
            <div className="text-2xl font-bold text-gray-900">0.12%</div>
            <div className="text-[11px] text-green-500 mt-1">Normal range</div>
          </StatCard>
          <StatCard label="P95 Latency">
            <div className="text-2xl font-bold text-gray-900">187ms</div>
            <div className="text-[11px] text-gray-400 mt-1">-12ms from avg</div>
          </StatCard>
          <StatCard label="Queue Failures">
            <div className="text-2xl font-bold text-red-500">4</div>
            <div className="text-[11px] text-red-400 mt-1">↗ +2 from previous hour</div>
          </StatCard>
          <StatCard label="Email/SMS Health">
            <div className="flex flex-col gap-1 mt-1">
              <div className="flex items-center justify-between text-[12px]">
                <span className="text-gray-500">Email</span>
                <span className="text-green-500 font-semibold">Green</span>
              </div>
              <div className="flex items-center justify-between text-[12px]">
                <span className="text-gray-500">SMS</span>
                <span className="text-amber-500 font-semibold">Amber</span>
              </div>
            </div>
          </StatCard>
          <StatCard label="Payment Provider">
            <div className="text-lg font-bold text-gray-900">Stripe</div>
            <div className="text-[11px] text-green-500 mt-1">Healthy</div>
          </StatCard>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {/* Error Trend */}
          <div className="bg-white border border-gray-100 rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full border-2 border-red-400 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                </div>
                <span className="text-[13px] font-semibold text-gray-800">Error Trend (24h)</span>
              </div>
              <span className="text-[12px] text-gray-400">Avg: 0.12%</span>
            </div>
            <ResponsiveContainer width="100%" height={150}>
              <LineChart data={errorData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" vertical={false} />
                <XAxis dataKey="t" tick={{ fontSize: 10, fill: "#9ca3af" }} tickLine={false} axisLine={false} />
                <Line type="monotone" dataKey="v" stroke="#ef4444" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Latency Trend */}
          <div className="bg-white border border-gray-100 rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" stroke="#3b82f6" strokeWidth="1.8" />
                  <path d="M12 7v5l3 3" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
                <span className="text-[13px] font-semibold text-gray-800">Latency Trend (24h)</span>
              </div>
              <span className="text-[12px] text-gray-400">Avg: 187ms</span>
            </div>
            <ResponsiveContainer width="100%" height={150}>
              <LineChart data={latencyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" vertical={false} />
                <XAxis dataKey="t" tick={{ fontSize: 10, fill: "#9ca3af" }} tickLine={false} axisLine={false} />
                <Line type="monotone" dataKey="v" stroke="#3b82f6" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Security Snapshot */}
        <div className="bg-white border border-gray-100 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
              <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7l-9-5z" stroke="#3b82f6" strokeWidth="1.8" strokeLinejoin="round" />
            </svg>
            <span className="text-[14px] font-semibold text-gray-800">Security Snapshot</span>
          </div>
          <div className="divide-y divide-gray-50">
            {[
              ["Failed Logins", "23", "text-gray-800"],
              ["Suspicious Locations", "3", "text-red-500"],
              ["Role Changes", "2", "text-gray-800"],
              ["Last 24 Hours", "2", "text-gray-800"],
            ].map(([label, val, cls]) => (
              <div key={label} className="flex items-center justify-between py-3">
                <span className="text-[13px] text-gray-600">{label}</span>
                <span className={`text-[13px] font-semibold ${cls}`}>{val}</span>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
}