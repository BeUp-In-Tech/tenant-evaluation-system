import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import LandlordSidebar from "../../component/landlordComponent/landlordSidebar.jsx";
import LandlordTopbar from "../../component/landlordComponent/landlordTopbar.jsx";

const completedDays = [
    { label: "Day 1 Completed" },
    { label: "Day 2 Completed" },
];

const lockedSections = [
    { label: "Behavioral Drivers", unlockDay: "Day 4" },
    { label: "Stability Projection", unlockDay: "Day 5" },
    { label: "Risk Probability", unlockDay: "Day 6" },
    { label: "Recommended Action", unlockDay: "Day 7" },
];

export default function BehavioralReportPage({ onNavigate }) {
    const [expanded, setExpanded] = useState(null);
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-50">
            <LandlordSidebar activePage="pre-tenancy" onNavigate={onNavigate} />
            <LandlordTopbar />
            <main className="ml-52 pt-14 p-6 flex items-start justify-center">
                {/* Breadcrumb */}
                <div className="w-full max-w-2xl">
                    <div className="text-[12px] text-gray-400 mb-4">
                        Reports &gt; <span className="text-gray-500">Tenant Integrity Report</span>
                    </div>

                    {/* Modal Card */}
                    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm relative">
                        {/* Close */}
                        <button
                            onClick={() => navigate("/landlordPreTenancy")}
                            className="absolute top-5 right-5 w-7 h-7 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400 transition-all"
                        >
                            <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                                <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </button>

                        <h2 className="text-lg font-bold text-gray-900 mb-1">Behavioral Report Preview</h2>
                        <div className="flex items-center gap-1.5 text-[12px] text-gray-400 mb-5">
                            <svg width="13" height="13" fill="none" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
                                <path d="M12 8v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                            </svg>
                            Initial behavioral patterns detected based on early participation.
                        </div>

                        {/* Completed Days */}
                        <div className="flex flex-col gap-2 mb-4">
                            {completedDays.map((d) => (
                                <button
                                    key={d.label}
                                    onClick={() => setExpanded(expanded === d.label ? null : d.label)}
                                    className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl hover:bg-gray-100 transition-all"
                                >
                                    <span className="text-[13px] font-medium text-gray-700">{d.label}</span>
                                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                                        <path d={expanded === d.label ? "M18 15l-6-6-6 6" : "M6 9l6 6 6-6"} stroke="#9ca3af" strokeWidth="1.8" strokeLinecap="round" />
                                    </svg>
                                </button>
                            ))}
                        </div>

                        {/* Day 3 Active */}
                        <div className="border border-blue-200 rounded-xl p-4 mb-4">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-[11px] text-gray-400 font-semibold uppercase tracking-wide">Participation Level</span>
                                <span className="text-[12px] font-semibold text-blue-600">Day 3</span>
                            </div>
                            <div className="inline-block bg-blue-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full mb-2">COMPLETE</div>
                            <div className="w-full h-2 bg-gray-100 rounded-full mb-1">
                                <div className="h-2 bg-blue-600 rounded-full" style={{ width: "78%" }} />
                            </div>
                            <div className="text-[12px] text-gray-500 mb-4">3 participation cycles completed.</div>

                            {/* Trend + Manageability */}
                            <div className="grid grid-cols-2 gap-3 mb-4">
                                <div className="border border-gray-100 rounded-xl p-3">
                                    <div className="text-[10px] text-gray-400 font-medium uppercase mb-1">TREND</div>
                                    <div className="flex items-center gap-1.5">
                                        <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                                            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span className="text-[13px] font-semibold text-gray-800">Improving Consistency</span>
                                    </div>
                                    <div className="text-[11px] text-green-500 mt-0.5">Upward trajectory detected</div>
                                </div>
                                <div className="border border-gray-100 rounded-xl p-3">
                                    <div className="text-[10px] text-gray-400 font-medium uppercase mb-1">MANAGEABILITY STATUS</div>
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-2 h-2 bg-green-500 rounded-full" />
                                        <span className="text-[13px] font-semibold text-gray-800">Stable</span>
                                    </div>
                                    <div className="text-[11px] text-gray-400 mt-0.5">Engagement and responses are consistent across cycles.</div>
                                </div>
                            </div>

                            {/* Behavioral Observation */}
                            <div>
                                <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide mb-2">Behavioral Observation</div>
                                <div className="border-l-4 border-blue-400 bg-blue-50 px-4 py-3 rounded-r-xl">
                                    <p className="text-[13px] text-gray-700 italic leading-relaxed">
                                        "Engagement pattern is forming. Response timing is slightly inconsistent compared to earlier participation."
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Locked Sections */}
                        <div className="flex flex-col gap-2 mb-6">
                            {lockedSections.map((s) => (
                                <div key={s.label} className="flex items-center justify-between px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl opacity-60">
                                    <div className="flex items-center gap-2">
                                        <svg width="13" height="13" fill="none" viewBox="0 0 24 24">
                                            <rect x="3" y="11" width="18" height="11" rx="2" stroke="#9ca3af" strokeWidth="1.8" />
                                            <path d="M7 11V7a5 5 0 0110 0v4" stroke="#9ca3af" strokeWidth="1.8" strokeLinecap="round" />
                                        </svg>
                                        <span className="text-[13px] text-gray-500">{s.label}</span>
                                    </div>
                                    <span className="text-[11px] text-gray-400 font-medium">{s.unlockDay}</span>
                                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                                        <path d="M6 9l6 6 6-6" stroke="#9ca3af" strokeWidth="1.8" strokeLinecap="round" />
                                    </svg>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <button className="w-full py-3 bg-blue-600 text-white text-[14px] font-semibold rounded-xl hover:bg-blue-700 transition-all mb-2">
                            Unlock Full Behavioral Report
                        </button>
                        <p className="text-center text-[11px] text-gray-400">Available upon full cycle completion or previous stages.</p>
                    </div>
                </div>
            </main>
        </div>
    );
}