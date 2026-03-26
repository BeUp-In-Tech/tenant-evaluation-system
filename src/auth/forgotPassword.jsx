import { useState } from "react";

export default function ForgotPasswordPage({}) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email address.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1400);
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

          {!sent ? (
            <>
              {/* Icon */}
              <div className="flex justify-center mb-5">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                  <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#2563eb" strokeWidth="1.8"/>
                    <polyline points="22,6 12,13 2,6" stroke="#2563eb" strokeWidth="1.8"/>
                  </svg>
                </div>
              </div>

              <h2 className="text-[18px] font-bold text-gray-900 text-center mb-1">Forgot your password?</h2>
              <p className="text-[13px] text-gray-500 text-center mb-6 leading-relaxed">
                No worries. Enter your email address and we'll send you a reset link.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-[12px] font-semibold text-gray-500 uppercase tracking-widest mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" width="15" height="15" fill="none" viewBox="0 0 24 24">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.8"/>
                      <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="1.8"/>
                    </svg>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); setError(""); }}
                      placeholder="you@company.com"
                      className="w-full pl-10 pr-4 py-3 text-[13px] border border-gray-200 rounded-xl bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white transition-all"
                    />
                  </div>
                </div>

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

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-xl text-[14px] font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200 flex items-center justify-center gap-2 mt-1 shadow-md shadow-blue-200"
                  style={{ opacity: loading ? 0.85 : 1 }}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin" width="16" height="16" fill="none" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="2" strokeDasharray="28" strokeDashoffset="10"/>
                      </svg>
                      Sending reset link...
                    </>
                  ) : (
                    <>
                      Send Reset Link
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
              <div className="w-16 h-16 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center mb-5">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="#22c55e" strokeWidth="2" strokeLinecap="round"/>
                  <polyline points="22 4 12 14.01 9 11.01" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="text-[18px] font-bold text-gray-900 mb-2">Check your inbox</h2>
              <p className="text-[13px] text-gray-500 leading-relaxed mb-2">
                We've sent a password reset link to
              </p>
              <span className="text-[13px] font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-lg mb-5">{email}</span>
              <p className="text-[12px] text-gray-400 leading-relaxed mb-6">
                Didn't receive it? Check your spam folder or{" "}
                <button
                  onClick={() => setSent(false)}
                  className="text-blue-500 font-medium hover:underline"
                >
                  try again
                </button>.
              </p>

              {/* Simulate clicking email link */}
              <button
                onClick={() => onSuccess(email)}
                className="w-full py-3 rounded-xl text-[13px] font-semibold bg-green-500 text-white hover:bg-green-600 transition-all flex items-center justify-center gap-2 shadow-md shadow-green-200"
              >
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="white" strokeWidth="1.8"/>
                  <polyline points="22,6 12,13 2,6" stroke="white" strokeWidth="1.8"/>
                </svg>
                Open Reset Email Link
              </button>
            </div>
          )}

          {/* Back to login */}
          <button
            onClick={() => {
              // Navigate back to login
              window.location.href = "/login";
            }}
            className="w-full mt-4 flex items-center justify-center gap-1.5 text-[13px] text-gray-400 hover:text-gray-600 transition-colors py-2"
          >
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
              <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Sign In
          </button>
        </div>

        <p className="text-center text-[11px] text-gray-400 mt-5">
          © 2026 Tenant Integrity™ · All rights reserved
        </p>
      </div>
    </div>
  );
}