import { useState } from "react";
import LoginPage     from "./login";
import ForgotPasswordPage from "./forgotPassword";
import ResetPasswordPage  from "./resetPassword";
import SuperAdminApp from "./pages/admin/adminOverview";
import LandlordApp   from "./pages/landlord/landlordOverview";
import TenantApp     from "./pages/tenant/tenantOverview";
import AffiliateApp  from "./pages/affiliate/commissions";

export default function App() {
  const [authScreen, setAuthScreen]     = useState("login");
  const [resetEmail, setResetEmail]     = useState("");
  const [loggedInRole, setLoggedInRole] = useState(null);
 
  // ── Not logged in ──────────────────────────────────────────────
  if (!loggedInRole) {
    if (authScreen === "forgot") {
      return (
        <ForgotPasswordPage
          onBack={() => setAuthScreen("login")}
          onSuccess={(email) => {
            setResetEmail(email);
            setAuthScreen("reset");
          }}
        />
      );
    }
    if (authScreen === "reset") {
      return (
        <ResetPasswordPage
          email={resetEmail}
          onBack={() => setAuthScreen("login")}
          onSuccess={() => setAuthScreen("login")}
        />
      );
    }
    return (
      <LoginPage
        onLogin={(role) => setLoggedInRole(role)}
        onForgotPassword={() => setAuthScreen("forgot")}
      />
    );
  }

  return (
    <div>
      {/* Switch Role button */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setLoggedInRole(null)}
          className="flex items-center gap-2 bg-white border border-gray-200 text-gray-500 text-[12px] font-medium px-3 py-2 rounded-full shadow-md hover:bg-gray-50 transition-all"
        >
          <svg width="13" height="13" fill="none" viewBox="0 0 24 24">
            <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            <polyline points="16 17 21 12 16 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            <line x1="21" y1="12" x2="9" y2="12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
          Switch Role
        </button>
      </div>
      
      {loggedInRole === "admin" && <SuperAdminApp />}
      {loggedInRole === "landlord"   && <LandlordApp />}
      {loggedInRole === "tenant"     && <TenantApp />}
      {loggedInRole === "affiliate"  && <AffiliateApp />}
    </div>
  );
}
