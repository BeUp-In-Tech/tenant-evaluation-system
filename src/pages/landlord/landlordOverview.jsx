import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import LandlordSidebar from "../../component/landlordComponent/landlordSidebar.jsx";
import LandlordTopbar from "../../component/landlordComponent/landlordTopbar.jsx";

const trendData = [
    { d: "Mon", v: 78 }, { d: "Tue", v: 80 }, { d: "Wed", v: 79 },
    { d: "Thu", v: 83 }, { d: "Fri", v: 86 }, { d: "Sat", v: 88 }, { d: "Sun", v: 91 },
];

const earlyWarnings = [
    { name: "James Miller", detail: "Park View 101 • Participation Decline", color: "bg-red-500", severity: "High", detected: "2 days ago", new: true, trend: "Dropped from 88% to 72% in last 7 days" },
    { name: "Linda Wu", detail: "Grand Plaza 55 • Missed Response Cycles", color: "bg-orange-400", severity: "Moderate", detected: "1 day ago", new: false, trend: "Participation dropped from 94% to 81%" },
    { name: "Robert Hall", detail: "Hillside Manor 4 • Behavioral Shift", color: "bg-orange-400", severity: "Moderate", detected: "3 days ago", new: false, trend: "Response time delayed by 4.2h" },
    { name: "Kevin Smith", detail: "Maple Heights A-31 • Integrity Score Drop", color: "bg-yellow-400", severity: "Low", detected: "5 days ago", new: false, trend: "Stability decreased by 3%" },
];

const pretencys = [
    { name: "Alex Thompson", property: "Riverside Apt", score: "82%", status: "Stable", statusColor: "bg-green-100 text-green-700", stage: "Stage 1 Complete" },
    { name: "Sarah Jenkins", property: "Lakeside Apt 40L", score: "66%", delta: "-5%", status: "Monitor", statusColor: "bg-yellow-100 text-yellow-700", stage: "Stage 2 Complete" },
    { name: "Marcus Vane", property: "Las Brias Drive", score: "54%", delta: "-14%", status: "Elevated Risk", statusColor: "bg-orange-100 text-orange-700", stage: "Ongoing Monitoring" },
    { name: "Elena Rossi", property: "Maple Heights B/10", score: "80%", delta: "+16%", status: "Stable", statusColor: "bg-green-100 text-green-700", stage: "Stage 1 Complete" },
];

const STATES = {
    NO_PROPERTY: "NO_PROPERTY",
    PROPERTY_NO_TENANT: "PROPERTY_NO_TENANT",
    TENANT_NO_MONITORING: "TENANT_NO_MONITORING",
    MONITORING_ACTIVE: "MONITORING_ACTIVE"
};

export default function PortfolioOverviewPage({ onNavigate }) {
    const [dashboardState, setDashboardState] = useState(STATES.MONITORING_ACTIVE);
    const [reportReady, setReportReady] = useState(true); // For Day 3 Preview Card

    const renderTopActionCard = () => {
        let content = {};
        switch (dashboardState) {
            case STATES.NO_PROPERTY:
                content = {
                    title: "Add a Property",
                    text: "Add a property to start managing tenants with Tenant Integrity.",
                    button: "Add Property",
                    action: () => onNavigate("property-status")
                };
                break;
            case STATES.PROPERTY_NO_TENANT:
                content = {
                    title: "Start a Pre-Tenancy Process",
                    text: "Add an applicant to begin the Integrity Cycle.",
                    button: "Start Pre-Tenancy Process",
                    action: () => onNavigate("pre-tenancy")
                };
                break;
            case STATES.TENANT_NO_MONITORING:
                content = {
                    title: "Activate Tenant Monitoring",
                    text: "Start behavioral monitoring for your existing tenant.",
                    button: "Activate Monitoring",
                    action: () => onNavigate("property-status")
                };
                break;
            case STATES.MONITORING_ACTIVE:
            default:
                content = {
                    title: "Monitoring Active",
                    text: "View participation signals and early warnings.",
                    button: "View Monitoring",
                    action: () => onNavigate("behavioural-risk")
                };
                break;
        }

        return (
            <div className="bg-white border border-blue-100 rounded-2xl p-6 mb-6 shadow-sm flex items-center justify-between border-l-4 border-l-blue-600">
                <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-gray-900">{content.title}</h2>
                        <p className="text-[14px] text-gray-500 mt-0.5">{content.text}</p>
                    </div>
                </div>
                <button
                    onClick={content.action}
                    className="bg-blue-600 text-white text-[14px] font-semibold px-6 py-2.5 rounded-xl hover:bg-blue-700 transition-all shadow-sm"
                >
                    {content.button}
                </button>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <LandlordSidebar activePage="overview" onNavigate={onNavigate} />
            <LandlordTopbar />
            <main className="ml-52 pt-14 p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h1 className="text-xl font-bold text-gray-900">Portfolio Overview</h1>
                        <p className="text-[13px] text-gray-500 mt-0.5">
                            This dashboard highlights participation and behavioral trends to help identify tenants who may require attention or follow-up.
                        </p>
                    </div>
                    <div className="flex gap-2">
                        {/* Dev State Toggler */}
                        <select 
                            onChange={(e) => setDashboardState(e.target.value)}
                            value={dashboardState}
                            className="bg-gray-100 border-none text-[11px] font-medium px-2 py-1 rounded-lg text-gray-500 outline-none"
                        >
                            <option value={STATES.NO_PROPERTY}>State 1: No Property</option>
                            <option value={STATES.PROPERTY_NO_TENANT}>State 2: No Tenant</option>
                            <option value={STATES.TENANT_NO_MONITORING}>State 3: No Monitoring</option>
                            <option value={STATES.MONITORING_ACTIVE}>State 4: Active</option>
                        </select>
                        <button
                            onClick={() => onNavigate("property-status")}
                            className="flex items-center gap-2 bg-blue-600 text-white text-[13px] font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-all"
                        >
                            <svg width="15" height="15" fill="none" viewBox="0 0 24 24">
                                <path d="M12 5v14M5 12h14" stroke="white" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                            Add Property
                        </button>
                    </div>
                </div>

                {/* Top Action Card (CRITICAL) */}
                {renderTopActionCard()}

                {/* Behavioral Report Ready Card (Day 3) */}
                {reportReady && dashboardState === STATES.MONITORING_ACTIVE && (
                    <div className="bg-[#EEF2FF] border border-blue-200 rounded-2xl p-6 mb-6 flex items-center justify-between">
                        <div className="flex items-center gap-5">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-blue-600">
                                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div>
                                <h2 className="text-lg font-bold text-blue-900">Behavioral Report Ready</h2>
                                <p className="text-[14px] text-blue-700 mt-0.5">Initial behavioral insights are now available for this applicant.</p>
                            </div>
                        </div>
                        <button
                            onClick={() => onNavigate("behavioural-report")}
                            className="bg-blue-600 text-white text-[14px] font-semibold px-6 py-2.5 rounded-xl hover:bg-blue-700 transition-all shadow-md"
                        >
                            View Report Preview
                        </button>
                    </div>
                )}

                {/* Stat Cards */}
                <div className="grid grid-cols-5 gap-3 mb-5">
                    {[
                        { label: "Total Properties", val: dashboardState === STATES.NO_PROPERTY ? "0" : "24", badge: dashboardState === STATES.NO_PROPERTY ? null : "+2 added", badgeColor: "bg-green-100 text-green-600", icon: "🏢" },
                        { label: "Active Tenants", val: dashboardState === STATES.NO_PROPERTY || dashboardState === STATES.PROPERTY_NO_TENANT ? "0" : "186", badge: dashboardState === STATES.NO_PROPERTY || dashboardState === STATES.PROPERTY_NO_TENANT ? null : "+4.2%", badgeColor: "bg-green-100 text-green-600", icon: "👥" },
                        { label: "Vacancy Rate", val: dashboardState === STATES.NO_PROPERTY ? "0%" : (dashboardState === STATES.PROPERTY_NO_TENANT ? "100%" : "8.4%"), badge: "-1.0%", badgeColor: "bg-red-100 text-red-500", icon: "📊" },
                        { label: "Avg. Tenant Stability", val: dashboardState === STATES.MONITORING_ACTIVE ? "92/100" : "N/A", badge: "-0.4%", badgeColor: "bg-red-100 text-red-500", icon: "📈" },
                        { label: "Monitoring Status", val: dashboardState === STATES.MONITORING_ACTIVE ? "Active" : "Inactive", icon: "✅" },
                    ].map((c) => (
                        <div key={c.label} className="bg-white border border-gray-100 rounded-xl p-4">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-lg">{c.icon}</span>
                                {c.badge && (
                                    <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${c.badgeColor}`}>{c.badge}</span>
                                )}
                            </div>
                            <div className="text-[10px] text-gray-400 font-medium uppercase tracking-wide mb-1">{c.label}</div>
                            <div className="text-lg font-bold text-gray-900">{c.val}</div>
                        </div>
                    ))}
                </div>

                {dashboardState === STATES.MONITORING_ACTIVE ? (
                    <>
                        {/* Trend Chart */}
                        <div className="bg-white border border-gray-100 rounded-xl p-5 mb-5">
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <div className="text-[14px] font-semibold text-gray-800">Tenant Engagement Trends</div>
                                    <div className="text-[12px] text-gray-400">Weekly behavioural response</div>
                                </div>
                                <div className="flex gap-2">
                                    <button className="text-[12px] text-gray-400 px-3 py-1 rounded-lg border border-gray-200 hover:bg-gray-50">Compliance</button>
                                    <button className="text-[12px] text-blue-600 px-3 py-1 rounded-lg bg-blue-50 font-medium">Participation</button>
                                </div>
                            </div>
                            <ResponsiveContainer width="100%" height={160}>
                                <LineChart data={trendData}>
                                    <XAxis dataKey="d" tick={{ fontSize: 11, fill: "#9ca3af" }} tickLine={false} axisLine={false} />
                                    <YAxis domain={[60, 100]} tick={{ fontSize: 10, fill: "#9ca3af" }} tickLine={false} axisLine={false} />
                                    <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #e5e7eb" }} />
                                    <Line type="monotone" dataKey="v" stroke="#3b82f6" strokeWidth={2.5} dot={false} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>

                        {/* Behavioral Risk Level */}
                        <div className="bg-white border border-gray-100 rounded-xl p-5 mb-5">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="text-[14px] font-semibold text-gray-800">Behavioral Risk Level</div>
                                <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="9" stroke="#9ca3af" strokeWidth="1.8" />
                                    <path d="M12 8v4" stroke="#9ca3af" strokeWidth="1.8" strokeLinecap="round" />
                                    <circle cx="12" cy="16" r="1" fill="#9ca3af" />
                                </svg>
                            </div>
                            <div className="grid grid-cols-4 gap-3">
                                {[
                                    { level: "High Risk", count: "6 Tenants", color: "border-red-200 bg-red-50", textColor: "text-red-600", dot: "bg-red-500", bar: "bg-red-400", barW: "30%", num: "6", desc: "Your portfolio currently has tenants who are not stable. Frequent action is required to ensure maximum performance." },
                                    { level: "Elevated Risk", count: "12 Tenants", color: "border-orange-200 bg-orange-50", textColor: "text-orange-600", dot: "bg-orange-400", bar: "bg-orange-400", barW: "50%", num: "4", desc: "Participation has decreased over the last 7 days." },
                                    { level: "Monitor", count: "24 Tenants", color: "border-yellow-200 bg-yellow-50", textColor: "text-yellow-600", dot: "bg-yellow-400", bar: "bg-yellow-400", barW: "70%", num: "12", desc: "Slight deviation on payment regularity." },
                                    { level: "Stable", count: "154 Tenants", color: "border-green-200 bg-green-50", textColor: "text-green-600", dot: "bg-green-500", bar: "bg-green-400", barW: "90%", num: "24", desc: "Consistent behavior and engagement." },
                                ].map((r) => (
                                    <div key={r.level} className={`rounded-xl border p-4 ${r.color}`}>
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className={`w-2 h-2 rounded-full ${r.dot}`} />
                                            <span className={`text-[12px] font-bold ${r.textColor}`}>{r.level}</span>
                                            <span className={`text-[11px] font-semibold ${r.textColor}`}>{r.count}</span>
                                        </div>
                                        <p className="text-[11px] text-gray-500 mb-3 leading-relaxed">{r.desc}</p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex-1 h-1.5 bg-gray-200 rounded-full mr-3">
                                                <div className={`h-1.5 rounded-full ${r.bar}`} style={{ width: r.barW }} />
                                            </div>
                                            <span className={`text-xl font-bold ${r.textColor}`}>{r.num}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-3 text-[12px] text-gray-500">
                                ℹ️ Your portfolio stability is currently <span className="font-semibold text-green-600">Healthy</span>. Actions recommended for High Risk profiles.
                            </div>
                        </div>

                        {/* Bottom Row */}
                        <div className="grid grid-cols-2 gap-4">
                            {/* Early Warning Center */}
                            <div className="bg-white border border-gray-100 rounded-xl p-5">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-red-500" />
                                        <span className="text-[14px] font-semibold text-gray-800">Early Warning Center</span>
                                    </div>
                                    <button onClick={() => onNavigate("early-warnings")} className="text-[12px] text-blue-500 hover:underline font-medium">
                                        View All Alerts →
                                    </button>
                                </div>
                                <div className="flex flex-col gap-3">
                                    {earlyWarnings.map((w) => (
                                        <div key={w.name} className="flex items-center gap-3">
                                            <span className={`w-2 h-2 rounded-full shrink-0 ${w.color}`} />
                                            <div>
                                                <div className="text-[13px] font-semibold text-gray-800">{w.name}</div>
                                                <div className="text-[11px] text-gray-400">{w.detail}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Pre-Tenancy Process */}
                            <div className="bg-white border border-gray-100 rounded-xl p-5">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-[14px] font-semibold text-gray-800">Pre-Tenancy Process</span>
                                    <button
                                        onClick={() => onNavigate("pre-tenancy")}
                                        className="flex items-center gap-1.5 bg-blue-600 text-white text-[12px] font-medium px-3 py-1.5 rounded-lg hover:bg-blue-700 transition-all"
                                    >
                                        <svg width="13" height="13" fill="none" viewBox="0 0 24 24">
                                            <path d="M12 5v14M5 12h14" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                        Start Pre-Tenancy Process
                                    </button>
                                </div>
                                <div className="text-[10px] text-gray-400 grid grid-cols-3 gap-2 mb-2 font-medium uppercase">
                                    <span>APPLICANT</span><span>STATUS</span><span>DATE</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    {pretencys.map((s) => (
                                        <div key={s.name} className="grid grid-cols-3 gap-2 items-center">
                                            <div>
                                                <div className="text-[12px] font-semibold text-gray-800">{s.name}</div>
                                                <div className="text-[11px] text-gray-400">{s.property}</div>
                                            </div>
                                            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full w-fit ${s.statusColor}`}>{s.status}</span>
                                            <span className="text-[11px] text-gray-500">{s.stage}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="bg-white border border-gray-100 rounded-2xl p-20 flex flex-col items-center justify-center text-center">
                        <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center text-gray-300 mb-6 font-bold text-3xl">
                            {dashboardState === STATES.NO_PROPERTY ? "🏠" : "🔍"}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {dashboardState === STATES.NO_PROPERTY ? "No Properties Added Yet" : "No Active Monitoring"}
                        </h3>
                        <p className="text-gray-500 max-w-sm mb-8">
                            {dashboardState === STATES.NO_PROPERTY 
                                ? "Start by adding your first property to begin monitoring tenant behavior and integrity."
                                : "Add a tenant to a property and activate monitoring to start receiving behavioral insights."}
                        </p>
                        <button
                            onClick={() => onNavigate(dashboardState === STATES.NO_PROPERTY ? "property-status" : "pre-tenancy")}
                            className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-md"
                        >
                            {dashboardState === STATES.NO_PROPERTY ? "Add Your First Property" : "Start Pre-Tenancy Process"}
                        </button>
                    </div>
                )}
            </main>
        </div>
    );
}