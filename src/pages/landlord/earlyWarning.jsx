import LandlordSidebar from "../../component/landlordComponent/landlordSidebar.jsx";
import LandlordTopbar from "../../component/landlordComponent/landlordTopbar.jsx";

const criticalTenants = [
    {
        name: "James Miller",
        unit: "Unit 402 • 2yr Tenant",
        participation: 72,
        delta: "+12%",
        deltaColor: "text-red-500",
        trendNote: "Participation decreasing over the last 7 days",
        observation: "Behavioral shifts detected in payment patterns and reduced property engagement since 01/123.",
    },
    {
        name: "Linda Wu",
        unit: "Unit 115 • 8yr Tenant",
        participation: 65,
        delta: "+18%",
        deltaColor: "text-red-500",
        trendNote: "Participation decreasing over the last 7 days",
        observation: "Multiple missed community events and late responses to mandatory maintenance scheduling.",
    },
];

const resolved = [
    {
        name: "Sarah Jenkins",
        unit: "Unit 505 • 4yr Tenant",
        participation: 96,
        delta: "+14%",
        deltaColor: "text-green-600",
        note: "Full recovery of engagement levels",
        resolvedDate: "Oct 24",
    },
];

export default function EarlyWarningsPage({ onNavigate }) {
    return (
        <div className="min-h-screen bg-gray-50">
            <LandlordSidebar activePage="early-warnings" onNavigate={onNavigate} />
            <LandlordTopbar />
            <main className="ml-52 pt-14 p-10 w-full max-w-none mt-3">
                <h1 className="text-xl font-bold text-gray-900 mb-1">Early Warning Center</h1>
                <p className="text-[13px] text-gray-500 mb-6">
                    Alerts are triggered when participation, compliance, or behavioral patterns decline.<br />
                    This section surfaces close — act swiftly to review each person.
                </p>

                {/* Critical Attention */}
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
                        <svg width="10" height="10" fill="none" viewBox="0 0 24 24">
                            <path d="M12 8v4" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                            <circle cx="12" cy="16" r="1.2" fill="white" />
                        </svg>
                    </div>
                    <span className="text-[13px] font-bold text-red-500 uppercase tracking-wide">Critical Attention Required</span>
                </div>

                <div className="flex flex-col gap-4 mb-8 w-[80%]">
                    {criticalTenants.map((t) => (
                        <div key={t.name} className="bg-white border border-gray-100 rounded-xl p-5">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-bold text-[13px]">
                                        {t.name.split(" ").map(n => n[0]).join("")}
                                    </div>
                                    <div>
                                        <div className="text-[14px] font-semibold text-gray-900">{t.name}</div>
                                        <div className="text-[11px] text-gray-400">{t.unit}</div>
                                    </div>
                                </div>
                                <span className="text-[10px] font-bold bg-red-100 text-red-600 px-2.5 py-1 rounded-full">HIGH RISK</span>
                            </div>

                            {/* Participation */}
                            <div className="mb-3">
                                <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide mb-1">Participation Rate (30D)</div>
                                <div className="flex items-baseline gap-2 mb-1">
                                    <span className="text-2xl font-bold text-gray-900">{t.participation}%</span>
                                    <span className={`text-[12px] font-semibold ${t.deltaColor}`}>{t.delta}</span>
                                </div>
                                <div className="text-[11px] text-red-500">{t.trendNote}</div>
                            </div>

                            {/* Observation */}
                            <div className="mb-4">
                                <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide mb-1">Observation</div>
                                <p className="text-[12px] text-gray-600 leading-relaxed">{t.observation}</p>
                            </div>

                            {/* Primary CTA */}
                            <button className="w-full py-2.5 bg-blue-600 text-white text-[13px] font-semibold rounded-lg hover:bg-blue-700 transition-all mb-2">
                                Schedule Review
                            </button>

                            {/* Secondary Actions */}
                            <div className="grid grid-cols-2 gap-2">
                                <button className="py-2 text-[12px] text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all">
                                    Send Check-In
                                </button>
                                <button className="py-2 text-[12px] text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all">
                                    Flag
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Recently Resolved */}
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                        <svg width="10" height="10" fill="none" viewBox="0 0 24 24">
                            <path d="M8 12l3 3 5-5" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                        </svg>
                    </div>
                    <span className="text-[13px] font-bold text-green-600 uppercase tracking-wide">Recently Resolved</span>
                </div>

                <div className="flex flex-col gap-4">
                    {resolved.map((t) => (
                        <div key={t.name} className="bg-white border border-gray-100 rounded-xl p-5 w-[80%]">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold text-[13px]">
                                        {t.name.split(" ").map(n => n[0]).join("")}
                                    </div>
                                    <div>
                                        <div className="text-[14px] font-semibold text-gray-900">{t.name}</div>
                                        <div className="text-[11px] text-gray-400">{t.unit}</div>
                                    </div>
                                </div>
                                <span className="text-[10px] font-bold bg-green-100 text-green-600 px-2.5 py-1 rounded-full">RESOLVED</span>
                            </div>

                            <div className="mb-2">
                                <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide mb-1">Participation Rate (30D)</div>
                                <div className="flex items-baseline gap-2 mb-1">
                                    <span className="text-2xl font-bold text-gray-900">{t.participation}%</span>
                                    <span className={`text-[12px] font-semibold ${t.deltaColor}`}>{t.delta}</span>
                                </div>
                                <div className="text-[11px] text-green-600">{t.note}</div>
                            </div>

                            <div className="mt-3 w-full py-2.5 bg-green-50 border border-green-200 text-green-700 text-[12px] font-semibold rounded-lg text-center">
                                Intervention Successful • {t.resolvedDate}
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}