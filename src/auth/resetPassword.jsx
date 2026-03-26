import { useState } from "react";

function PasswordStrength({ password }) {
  const checks = [
    { label: "At least 8 characters", pass: password.length >= 8 },
    { label: "One uppercase letter",  pass: /[A-Z]/.test(password) },
    { label: "One number",            pass: /[0-9]/.test(password) },
    { label: "One special character", pass: /[^A-Za-z0-9]/.test(password) },
  ];
  const score = checks.filter((c) => c.pass).length;

  const bar = [
    { min: 0, color: "bg-gray-200", label: "" },
    { min: 1, color: "bg-red-400",    label: "Weak" },
    { min: 2, color: "bg-amber-400",  label: "Fair" },
    { min: 3, color: "bg-blue-400",   label: "Good" },
    { min: 4, color: "bg-green-500",  label: "Strong" },
  ];
  const level = bar[score];

  if (!password) return null;

  return (
    <div className="mt-2">
      {/* Strength bars */}
      <div className="flex gap-1 mb-1.5">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
              i <= score ? level.color : "bg-gray-100"
            }`}
          />
        ))}
        {level.label && (
          <span className={`text-[10px] font-bold ml-1 ${level.color.replace("bg-", "text-")}`}>
            {level.label}
          </span>
        )}
      </div>
      {/* Checklist */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-1 mt-2">
        {checks.map((c) => (
          <div key={c.label} className="flex items-center gap-1.5">
            <svg width="11" height="11" fill="none" viewBox="0 0 24 24">
              {c.pass ? (
                <path d="M20 6L9 17l-5-5" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              ) : (
                <circle cx="12" cy="12" r="9" stroke="#d1d5db" strokeWidth="1.8"/>
              )}
            </svg>
            <span className={`text-[10px] ${c.pass ? "text-green-600 font-medium" : "text-gray-400"}`}>
              {c.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ResetPasswordPage({ email, onBack }) {
  const [password, setPassword]     = useState("");
  const [confirm, setConfirm]       = useState("");
  const [showPass, setShowPass]     = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading]       = useState(false);
  const [done, setDone]             = useState(false);
  const [error, setError]           = useState("");

  const isStrong =
    password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /[0-9]/.test(password) &&
    /[^A-Za-z0-9]/.test(password);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!password || !confirm) { setError("Please fill in all fields."); return; }
    if (!isStrong) { setError("Password does not meet strength requirements."); return; }
    if (password !== confirm) { setError("Passwords do not match."); return; }
    setError("");
    setLoading(true);
    setTimeout(() => { setLoading(false); setDone(true); }, 1400);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 relative overflow-hidden">

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-blue-100 opacity-40 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-indigo-100 opacity-40 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-gray-200 opacity-30" />
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
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-xl shadow-gray-100 p-8">

          {!done ? (
            <>
              {/* Icon */}
              <div className="flex justify-center mb-5">
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                  <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
                    <rect x="3" y="11" width="18" height="11" rx="2" stroke="#6366f1" strokeWidth="1.8"/>
                    <path d="M7 11V7a5 5 0 0110 0v4" stroke="#6366f1" strokeWidth="1.8" strokeLinecap="round"/>
                    <circle cx="12" cy="16" r="1.5" fill="#6366f1"/>
                  </svg>
                </div>
              </div>

              <h2 className="text-[18px] font-bold text-gray-900 text-center mb-1">Set a new password</h2>
              <p className="text-[13px] text-gray-500 text-center mb-1 leading-relaxed">
                Create a strong password for your account.
              </p>
              {email && (
                <p className="text-center mb-5">
                  <span className="text-[12px] text-blue-600 bg-blue-50 font-medium px-3 py-1 rounded-lg">{email}</span>
                </p>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                {/* New Password */}
                <div>
                  <label className="block text-[12px] font-semibold text-gray-500 uppercase tracking-widest mb-2">
                    New Password
                  </label>
                  <div className="relative">
                    <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" width="15" height="15" fill="none" viewBox="0 0 24 24">
                      <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="1.8"/>
                      <path d="M7 11V7a5 5 0 0110 0v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>
                    <input
                      type={showPass ? "text" : "password"}
                      value={password}
                      onChange={(e) => { setPassword(e.target.value); setError(""); }}
                      placeholder="Create a strong password"
                      className="w-full pl-10 pr-10 py-3 text-[13px] border border-gray-200 rounded-xl bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-indigo-400 focus:bg-white transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPass(!showPass)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showPass ? (
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
                  <PasswordStrength password={password} />
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-[12px] font-semibold text-gray-500 uppercase tracking-widest mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" width="15" height="15" fill="none" viewBox="0 0 24 24">
                      <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="1.8"/>
                      <path d="M7 11V7a5 5 0 0110 0v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>
                    <input
                      type={showConfirm ? "text" : "password"}
                      value={confirm}
                      onChange={(e) => { setConfirm(e.target.value); setError(""); }}
                      placeholder="Repeat your password"
                      className={`w-full pl-10 pr-10 py-3 text-[13px] border rounded-xl bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:bg-white transition-all ${
                        confirm && password !== confirm
                          ? "border-red-300 focus:border-red-400"
                          : confirm && password === confirm
                          ? "border-green-300 focus:border-green-400"
                          : "border-gray-200 focus:border-indigo-400"
                      }`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirm(!showConfirm)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showConfirm ? (
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
                    {/* Match indicator */}
                    {confirm && (
                      <div className="absolute right-10 top-1/2 -translate-y-1/2">
                        {password === confirm ? (
                          <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        ) : (
                          <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                            <line x1="18" y1="6" x2="6" y2="18" stroke="#ef4444" strokeWidth="2" strokeLinecap="round"/>
                            <line x1="6" y1="6" x2="18" y2="18" stroke="#ef4444" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                        )}
                      </div>
                    )}
                  </div>
                  {confirm && password !== confirm && (
                    <p className="text-[11px] text-red-500 mt-1.5 flex items-center gap-1">
                      <svg width="11" height="11" fill="none" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/>
                        <path d="M12 8v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                        <circle cx="12" cy="16" r="1" fill="currentColor"/>
                      </svg>
                      Passwords do not match
                    </p>
                  )}
                  {confirm && password === confirm && (
                    <p className="text-[11px] text-green-600 mt-1.5 flex items-center gap-1 font-medium">
                      <svg width="11" height="11" fill="none" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Passwords match
                    </p>
                  )}
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

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-xl text-[14px] font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-200 flex items-center justify-center gap-2 mt-1 shadow-md shadow-indigo-200"
                  style={{ opacity: loading ? 0.85 : 1 }}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin" width="16" height="16" fill="none" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="2" strokeDasharray="28" strokeDashoffset="10"/>
                      </svg>
                      Resetting password...
                    </>
                  ) : (
                    <>
                      Reset Password
                      <svg width="15" height="15" fill="none" viewBox="0 0 24 24">
                        <line x1="5" y1="12" x2="19" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                        <polyline points="12 5 19 12 12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </>
          ) : (
            /* Success State */
            <div className="flex flex-col items-center text-center py-4">
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center">
                  <svg width="36" height="36" fill="none" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="#22c55e" strokeWidth="2" strokeLinecap="round"/>
                    <polyline points="22 4 12 14.01 9 11.01" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                {/* Sparkles */}
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center">
                  <svg width="10" height="10" fill="none" viewBox="0 0 24 24">
                    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" fill="white"/>
                  </svg>
                </div>
              </div>

              <h2 className="text-[20px] font-bold text-gray-900 mb-2">Password reset!</h2>
              <p className="text-[13px] text-gray-500 leading-relaxed mb-6 max-w-xs">
                Your password has been successfully updated. You can now sign in with your new credentials.
              </p>

              {/* Security tip */}
              <div className="w-full bg-amber-50 border border-amber-200 rounded-xl p-3 mb-6 flex items-start gap-2.5 text-left">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" className="shrink-0 mt-0.5">
                  <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="#d97706" strokeWidth="1.8"/>
                  <line x1="12" y1="9" x2="12" y2="13" stroke="#d97706" strokeWidth="1.8" strokeLinecap="round"/>
                  <circle cx="12" cy="17" r="1" fill="#d97706"/>
                </svg>
                <p className="text-[11px] text-amber-700 leading-relaxed">
                  <span className="font-bold">Security tip:</span> You'll be signed out of all other devices. Make sure to save your new password securely.
                </p>
              </div>

              <button
                onClick={() => {
                  // Navigate to login
                  window.location.href = "/login";
                }}
                className="w-full py-3 rounded-xl text-[14px] font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-md shadow-blue-200"
              >
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24">
                  <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M10 17l5-5-5-5M15 12H3" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Sign In Now
              </button>
            </div>
          )}

          {/* Back */}
          {!done && (
            <button
              onClick={onBack}
              className="w-full mt-4 flex items-center justify-center gap-1.5 text-[13px] text-gray-400 hover:text-gray-600 transition-colors py-2"
            >
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to Sign In
            </button>
          )}
        </div>

        <p className="text-center text-[11px] text-gray-400 mt-5">
          2026 Tenant Integrity · All rights reserved
        </p>
      </div>
    </div>
  );
}