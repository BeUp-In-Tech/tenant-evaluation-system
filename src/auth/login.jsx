import { useState } from "react";

const ROLES = [
  {
    id: "superadmin",
    label: "Super Admin",
    desc: "Full system access & orchestration",
    color: "from-slate-700 to-slate-900",
    accent: "#6366f1",
    accentLight: "#eef2ff",
    accentText: "#4f46e5",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
        <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7l-9-5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "landlord",
    label: "Landlord",
    desc: "Portfolio & tenant management",
    color: "from-blue-600 to-blue-800",
    accent: "#2563eb",
    accentLight: "#eff6ff",
    accentText: "#1d4ed8",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <polyline points="9 22 9 12 15 12 15 22" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "tenant",
    label: "Tenant",
    desc: "Reliability dashboard & tasks",
    color: "from-emerald-500 to-emerald-700",
    accent: "#10b981",
    accentLight: "#ecfdf5",
    accentText: "#059669",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "affiliate",
    label: "Affiliate",
    desc: "Referrals, commissions & payouts",
    color: "from-amber-500 to-orange-600",
    accent: "#f59e0b",
    accentLight: "#fffbeb",
    accentText: "#d97706",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
        <circle cx="18" cy="5" r="3" stroke="currentColor" strokeWidth="1.8"/>
        <circle cx="6" cy="12" r="3" stroke="currentColor" strokeWidth="1.8"/>
        <circle cx="18" cy="19" r="3" stroke="currentColor" strokeWidth="1.8"/>
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" stroke="currentColor" strokeWidth="1.8"/>
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" stroke="currentColor" strokeWidth="1.8"/>
      </svg>
    ),
  },
];

export default function LoginPage({ onLogin, onForgotPassword }) {
  const [selectedRole, setSelectedRole] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const role = ROLES.find((r) => r.id === selectedRole);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onLogin(selectedRole);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 relative overflow-hidden">

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-blue-100 opacity-40 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-indigo-100 opacity-40 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-gray-200 opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-gray-100 opacity-20" />
      </div>

      <div className="w-full max-w-md relative z-10">

        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-200 mb-3">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7l-9-5z" fill="white"/>
            </svg>
          </div>
          <h1 className="text-[22px] font-bold text-gray-900 tracking-tight">
            Tenant Integrity <sup className="text-[12px] text-gray-400 font-normal">™</sup>
          </h1>
          <p className="text-[13px] text-gray-500 mt-1">Sign in to your account</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-xl shadow-gray-100 p-8">

          {/* Role Selector */}
          <div className="mb-6">
            <label className="block text-[12px] font-semibold text-gray-500 uppercase tracking-widest mb-2">
              Select Your Role
            </label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border-2 transition-all duration-200 text-left ${
                  role
                    ? "border-gray-200 bg-white"
                    : "border-dashed border-gray-300 bg-gray-50 hover:border-gray-400"
                }`}
              >
                {role ? (
                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-white"
                      style={{ background: `linear-gradient(135deg, ${role.accent}, ${role.accent}cc)` }}
                    >
                      {role.icon}
                    </div>
                    <div>
                      <div className="text-[14px] font-semibold text-gray-800">{role.label}</div>
                      <div className="text-[11px] text-gray-400">{role.desc}</div>
                    </div>
                  </div>
                ) : (
                  <span className="text-[14px] text-gray-400">Choose a role to continue...</span>
                )}
                <svg
                  width="16" height="16" fill="none" viewBox="0 0 24 24"
                  className={`text-gray-400 transition-transform duration-200 shrink-0 ${dropdownOpen ? "rotate-180" : ""}`}
                >
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>

              {/* Dropdown */}
              {dropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-100 rounded-2xl shadow-2xl shadow-gray-200 z-50 overflow-hidden">
                  {ROLES.map((r, i) => (
                    <button
                      key={r.id}
                      type="button"
                      onClick={() => {
                        setSelectedRole(r.id);
                        setDropdownOpen(false);
                        setError("");
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3.5 hover:bg-gray-50 transition-all text-left ${
                        selectedRole === r.id ? "bg-gray-50" : ""
                      } ${i !== ROLES.length - 1 ? "border-b border-gray-50" : ""}`}
                    >
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center text-white shrink-0"
                        style={{ background: `linear-gradient(135deg, ${r.accent}, ${r.accent}cc)` }}
                      >
                        {r.icon}
                      </div>
                      <div className="flex-1">
                        <div className="text-[13px] font-semibold text-gray-800">{r.label}</div>
                        <div className="text-[11px] text-gray-400">{r.desc}</div>
                      </div>
                      {selectedRole === r.id && (
                        <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                          <path d="M20 6L9 17l-5-5" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Role Badge */}
          {role && (
            <div
              className="flex items-center gap-2 px-3 py-2 rounded-xl mb-5 text-[12px] font-medium"
              style={{ backgroundColor: role.accentLight, color: role.accentText }}
            >
              <svg width="13" height="13" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/>
                <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
              Logging in as <span className="font-bold">{role.label}</span>
            </div>
          )}

          {/* Login Form — only visible after role selected */}
          <div
            className="overflow-hidden transition-all duration-500 ease-out"
            style={{
              maxHeight: selectedRole ? "400px" : "0px",
              opacity: selectedRole ? 1 : 0,
              transform: selectedRole ? "translateY(0)" : "translateY(-8px)",
            }}
          >
            <form onSubmit={handleLogin} className="flex flex-col gap-4">
              {/* Email */}
              <div>
                <label className="block text-[12px] font-semibold text-gray-500 uppercase tracking-widest mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <svg
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                    width="15" height="15" fill="none" viewBox="0 0 24 24"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.8"/>
                    <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="1.8"/>
                  </svg>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full pl-10 pr-4 py-3 text-[13px] border border-gray-200 rounded-xl bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-[12px] font-semibold text-gray-500 uppercase tracking-widest mb-2">
                  Password
                </label>
                <div className="relative">
                  <svg
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                    width="15" height="15" fill="none" viewBox="0 0 24 24"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="1.8"/>
                    <path d="M7 11V7a5 5 0 0110 0v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full pl-10 pr-10 py-3 text-[13px] border border-gray-200 rounded-xl bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? (
                      <svg width="15" height="15" fill="none" viewBox="0 0 24 24">
                        <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                        <line x1="1" y1="1" x2="23" y2="23" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                      </svg>
                    ) : (
                      <svg width="15" height="15" fill="none" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="1.8"/>
                        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8"/>
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Forgot Password */}
              <div className="flex justify-end -mt-1">
                <button
                  type="button"
                  onClick={() => onForgotPassword && onForgotPassword()}
                  className="text-[12px] text-blue-500 hover:text-blue-700 font-medium transition-colors"
                >
                  Forgot password?
                </button>
              </div>

              {/* Error */}
              {error && (
                <div className="flex items-center gap-2 px-3 py-2.5 bg-red-50 border border-red-200 rounded-xl text-[12px] text-red-600">
                  <svg width="13" height="13" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/>
                    <line x1="15" y1="9" x2="9" y2="15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                    <line x1="9" y1="9" x2="15" y2="15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                  {error}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl text-[14px] font-bold text-white transition-all duration-200 flex items-center justify-center gap-2 mt-1"
                style={{
                  background: role
                    ? `linear-gradient(135deg, ${role.accent}, ${role.accent}dd)`
                    : "#2563eb",
                  opacity: loading ? 0.8 : 1,
                  boxShadow: role ? `0 4px 20px ${role.accent}40` : "0 4px 20px #2563eb40",
                }}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin" width="16" height="16" fill="none" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="2" strokeDasharray="28" strokeDashoffset="10"/>
                    </svg>
                    Signing in...
                  </>
                ) : (
                  <>
                    Sign In as {role?.label}
                    <svg width="15" height="15" fill="none" viewBox="0 0 24 24">
                      <line x1="5" y1="12" x2="19" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                      <polyline points="12 5 19 12 12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* No role selected hint */}
          {!selectedRole && (
            <div className="flex items-center justify-center gap-2 py-4 text-[13px] text-gray-400">
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
              </svg>
              Select a role above to reveal login fields
            </div>
          )}
        </div>

        {/* Footer */}
        <p className="text-center text-[11px] text-gray-400 mt-5">
          © 2026 Tenant Integrity™ · All rights reserved
        </p>
      </div>
    </div>
  );
}