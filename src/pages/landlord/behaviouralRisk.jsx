import { useState } from 'react';
import LandlordSidebar from "../../component/landlordComponent/landlordSidebar.jsx";
import LandlordTopbar from "../../component/landlordComponent/landlordTopbar.jsx";

const tenants = [
    {
        name: "Jordan Hayes", property: "Stacie Heights A-152", level: "LEVEL 1",
        riskTag: "ELEVATED RISK", riskColor: "text-orange-500", tagBg: "bg-orange-100",
        riskPct: 42, riskBarColor: "bg-orange-400",
        participation: 58, participationDelta: "+18%", participationNote: "Missed 3 engagement cycles this week",
        noteColor: "text-red-500",
        primaryAction: { label: "Contact Tenant", color: "bg-red-500 hover:bg-red-600 text-white" },
    },
    {
        name: "Jordan Hayes", property: "Stacie Heights A-152", level: "LEVEL 2",
        riskTag: "ELEVATED RISK", riskColor: "text-orange-500", tagBg: "bg-orange-100",
        riskPct: 42, riskBarColor: "bg-orange-400",
        participation: 58, participationDelta: "+18%", participationNote: "1 alert requires action",
        noteColor: "text-orange-500",
        primaryAction: { label: "Review Engagement", color: "bg-orange-500 hover:bg-orange-600 text-white" },
    },
    {
        name: "Sarah Chen", property: "Lakeside Terrace A-52", level: "LEVEL 1",
        riskTag: "STABLE", riskColor: "text-green-600", tagBg: "bg-green-100",
        riskPct: 98, riskBarColor: "bg-green-400",
        participation: 91, participationDelta: "+2%", participationNote: "All tasks are confirmed to continue.",
        noteColor: "text-green-600",
        primaryAction: { label: "Reward Program", color: "bg-green-500 hover:bg-green-600 text-white" },
    },
    {
        name: "Linda Wu", property: "Maple Heights A-185", level: "LEVEL 1",
        riskTag: "STABLE", riskColor: "text-green-600", tagBg: "bg-green-100",
        riskPct: 53, riskBarColor: "bg-green-400",
        participation: 91, participationDelta: "+2%", participationNote: "All tasks are confirmed to continue.",
        noteColor: "text-green-600",
        primaryAction: { label: "Reward Program", color: "bg-green-500 hover:bg-green-600 text-white" },
    },
];

function TenantCard({ t }) {
    return (
        <div className="bg-white border border-gray-100 rounded-xl p-5">
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold text-[13px]">
                        {t.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                        <div className="text-[14px] font-semibold text-gray-900">{t.name}</div>
                        <div className="text-[11px] text-gray-400">{t.property}</div>
                    </div>
                </div>
                <div className="text-right">
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${t.tagBg} ${t.riskColor}`}>{t.riskTag}</span>
                    <div className="text-[10px] text-gray-400 mt-0.5">{t.level}</div>
                </div>
            </div>

            {/* Behavioral Risk Level */}
            <div className="mb-3">
                <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide">Behavioural Risk Level</span>
                    <span className={`text-[12px] font-bold ${t.riskColor}`}>{t.riskPct}%</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full">
                    <div className={`h-2 rounded-full ${t.riskBarColor}`} style={{ width: `${t.riskPct}%` }} />
                </div>
            </div>

            {/* Participation */}
            <div className="mb-4">
                <div className="flex items-center justify-between mb-0.5">
                    <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide">Participation (30D)</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-gray-900">{t.participation}%</span>
                    <span className="text-[11px] text-gray-500">{t.participationDelta}</span>
                </div>
                <div className={`text-[11px] mt-0.5 ${t.noteColor}`}>{t.participationNote}</div>
            </div>

            {/* Action Icons */}
            <div className="flex items-center justify-between">
                <div className="flex gap-2">
                    {["chat", "flag", "doc"].map((icon) => (
                        <button key={icon} className="w-7 h-7 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 text-gray-400">
                            {icon === "chat" && <svg width="12" height="12" fill="none" viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="1.8" /></svg>}
                            {icon === "flag" && <svg width="12" height="12" fill="none" viewBox="0 0 24 24"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" stroke="currentColor" strokeWidth="1.8" /><line x1="4" y1="22" x2="4" y2="15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>}
                            {icon === "doc" && <svg width="12" height="12" fill="none" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="currentColor" strokeWidth="1.8" /><polyline points="14 2 14 8 20 8" stroke="currentColor" strokeWidth="1.8" /></svg>}
                        </button>
                    ))}
                </div>
                <button className="text-[11px] text-blue-500 hover:underline">↗ View Behaviour Timeline</button>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 mt-4">
                <button className={`flex-1 py-2 rounded-lg text-[12px] font-semibold transition-all ${t.primaryAction.color}`}>
                    {t.primaryAction.label}
                </button>
                <button className="flex-1 py-2 rounded-lg text-[12px] font-semibold border border-gray-200 text-gray-600 hover:bg-gray-50 transition-all">
                    View Details
                </button>
            </div>
        </div>
    );
}

export default function BehaviouralRiskPage({ onNavigate }) {
    const [activeTab, setActiveTab] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        console.log(`Filter changed to: ${tab}`);
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        console.log(`Searching for: ${e.target.value}`);
    };

    const filterTenants = (tenants) => {
        let filtered = tenants;

        // Filter by tab
        if (activeTab !== "All") {
            if (activeTab === "Stable") {
                filtered = filtered.filter(t => t.riskTag === "STABLE");
            } else if (activeTab === "At Risk") {
                filtered = filtered.filter(t => t.riskTag === "ELEVATED RISK");
            } else if (activeTab === "Dropped Participation") {
                filtered = filtered.filter(t => t.participation < 50);
            }
        }

        // Filter by search term
        if (searchTerm) {
            filtered = filtered.filter(t => 
                t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                t.property.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        return filtered;
    };

    const filteredTenants = filterTenants(tenants);

    return (
        <div className="min-h-screen bg-gray-50">
            <LandlordSidebar activePage="behavioural-risk" onNavigate={onNavigate} />
            <LandlordTopbar />
            <main className="ml-52 pt-14 p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                    <div>
                        <h1 className="text-xl font-bold text-gray-900">Behavioral Risk Profiles</h1>
                        <p className="text-[13px] text-gray-500 mt-0.5">Comprehensive behavioral tracking and integrity scores for all active tenants.</p>
                    </div>
                    <button className="flex items-center gap-2 border border-gray-200 text-gray-700 text-[13px] font-medium px-4 py-2 rounded-lg hover:bg-gray-50 transition-all">
                        <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                            <line x1="8" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                            <line x1="8" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                            <line x1="8" y1="18" x2="21" y2="18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                            <line x1="3" y1="6" x2="3.01" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            <line x1="3" y1="12" x2="3.01" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            <line x1="3" y1="18" x2="3.01" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        View Master List
                    </button>
                </div>

                {/* Summary */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                    {[
                        { label: "AT RISK TENANTS", val: "2", icon: <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="#ef4444" strokeWidth="1.8" /></svg>, color: "text-red-500" },
                        { label: "DROPPED PARTICIPATION", val: "2", icon: <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" stroke="#f59e0b" strokeWidth="1.8" /><path d="M12 8v4" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round" /><circle cx="12" cy="16" r="1" fill="#f59e0b" /></svg>, color: "text-amber-500" },
                        { label: "STABLE TENANTS", val: "4", icon: <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" stroke="#22c55e" strokeWidth="1.8" /><path d="M8 12l3 3 5-5" stroke="#22c55e" strokeWidth="1.8" strokeLinecap="round" /></svg>, color: "text-green-500" },
                    ].map((s) => (
                        <div key={s.label} className="bg-white border border-gray-100 rounded-xl p-4 flex items-center gap-4">
                            {s.icon}
                            <div>
                                <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide">{s.label}</div>
                                <div className={`text-2xl font-bold ${s.color}`}>{s.val}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Filter Tabs */}
                <div className="flex items-center justify-between mb-4">
                    <div className="relative">
                        <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" width="14" height="14" fill="none" viewBox="0 0 24 24">
                            <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.8" />
                            <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                        </svg>
                        <input 
                            value={searchTerm}
                            onChange={handleSearch}
                            className="pl-9 pr-4 py-2 text-[13px] bg-white border border-gray-200 rounded-lg w-72 placeholder-gray-400 focus:outline-none focus:border-blue-300 transition-all" 
                            placeholder="Search by tenant name or property..." 
                        />
                    </div>
                    <div className="flex gap-1">
                        {["All", "Stable", "At Risk", "Dropped Participation"].map((tab) => (
                            <button 
                                key={tab} 
                                onClick={() => handleTabChange(tab)}
                                className={`px-3 py-1.5 rounded-lg text-[12px] font-medium transition-all ${tab === activeTab ? "bg-blue-600 text-white" : "text-gray-500 hover:bg-gray-100"}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-2 gap-4">
                    {filteredTenants.map((t, i) => <TenantCard key={i} t={t} />)}
                </div>
            </main>
        </div>
    );
}