import LandlordSidebar from "../../component/landlordComponent/landlordSidebar.jsx";
import LandlordTopbar from "../../component/landlordComponent/landlordTopbar.jsx";

const properties = [
    {
        id: "maple",
        name: "Maple Heights",
        status: "VACANT",
        statusColor: "text-gray-400",
        statusBg: "bg-gray-100",
        sub: "Screening Status: Not Started",
        primaryAction: { label: "Start Pre-Tenancy Process", color: "bg-blue-600 hover:bg-blue-700 text-white" },
        secondaryAction: "View Applicants",
        icon: "🏠",
    },
    {
        id: "riverside",
        name: "Riverside Apt",
        status: "PROCESS ACTIVE",
        statusColor: "text-blue-600",
        statusBg: "bg-blue-100",
        sub: "Process Progress",
        progress: 57,
        progressLabel: "Day 4 of 7",
        primaryAction: { label: "View Progress", color: "bg-blue-600 hover:bg-blue-700 text-white" },
        secondaryAction: "Invite Applicant",
        icon: "🏢",
    },
    {
        id: "grand",
        name: "Grand Plaza",
        status: "ACTIVE",
        statusColor: "text-green-600",
        statusBg: "bg-green-100",
        sub: "80 Monitoring Licenses",
        participation: 94,
        participationDelta: "+1dk",
        primaryAction: { label: "Manage Subscription", color: "bg-blue-600 hover:bg-blue-700 text-white" },
        secondaryAction: "View Timeline",
        icon: "🏙️",
    },
    {
        id: "oakridge",
        name: "Oak Ridge Tower",
        status: "TRIAL MONITORING",
        statusColor: "text-amber-600",
        statusBg: "bg-amber-100",
        sub: "1 transaction — 13 days remaining",
        participation: 74,
        primaryAction: { label: "Upgrade Monitoring", color: "bg-amber-500 hover:bg-amber-600 text-white" },
        secondaryAction: "View Timeline",
        icon: "🏗️",
        trial: true,
    },
];

export default function PropertyStatusPage({ onNavigate }) {
    return (
        <div className="min-h-screen bg-gray-50">
            <LandlordSidebar activePage="property-status" onNavigate={onNavigate} />
            <LandlordTopbar />
            <main className="ml-52 pt-14 p-6">
                <h1 className="text-xl font-bold text-gray-900 mb-1">Property Integrity Status</h1>
                <p className="text-[13px] text-gray-500 mb-6">Monitoring status and subscription management per property.</p>

                <div className="grid grid-cols-2 gap-4">
                    {properties.map((p) => (
                        <div key={p.id} className="bg-white border border-gray-100 rounded-xl p-6">
                            {/* Header */}
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-xl">
                                        {p.icon}
                                    </div>
                                    <div className="text-[15px] font-bold text-gray-900">{p.name}</div>
                                </div>
                                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${p.statusBg} ${p.statusColor}`}>
                                    {p.status}
                                </span>
                            </div>

                            {/* Sub info */}
                            <div className="mb-4">
                                <div className="text-[12px] text-gray-500 mb-2">{p.sub}</div>

                                {p.progress !== undefined && (
                                    <div>
                                        <div className="w-full h-2 bg-gray-100 rounded-full mb-1">
                                            <div className="h-2 bg-blue-500 rounded-full" style={{ width: `${p.progress}%` }} />
                                        </div>
                                        <div className="text-[11px] text-blue-600 font-medium">{p.progressLabel}</div>
                                    </div>
                                )}

                                {p.participation !== undefined && (
                                    <div className="flex items-center gap-2">
                                        <span className="text-[12px] text-gray-500">Participation Rate</span>
                                        <div className="flex-1 h-2 bg-gray-100 rounded-full">
                                            <div className={`h-2 rounded-full ${p.trial ? "bg-amber-400" : "bg-green-400"}`} style={{ width: `${p.participation}%` }} />
                                        </div>
                                        <span className="text-[12px] font-semibold text-gray-700">{p.participation}%</span>
                                        {p.participationDelta && (
                                            <span className="text-[11px] text-green-500">{p.participationDelta}</span>
                                        )}
                                    </div>
                                )}

                                {p.trial && (
                                    <div className="mt-2 flex items-center gap-1.5 text-[11px] text-amber-600">
                                        <svg width="12" height="12" fill="none" viewBox="0 0 24 24">
                                            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
                                            <path d="M12 8v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                                        </svg>
                                        {p.sub}
                                    </div>
                                )}
                            </div>

                            {/* Actions */}
                            <div className="flex flex-col gap-2">
                                <button className={`w-full py-2.5 rounded-lg text-[13px] font-semibold transition-all ${p.primaryAction.color}`}>
                                    {p.primaryAction.label}
                                </button>
                                <button className="w-full py-2.5 rounded-lg text-[13px] font-medium border border-gray-200 text-gray-600 hover:bg-gray-50 transition-all">
                                    {p.secondaryAction}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}