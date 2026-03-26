import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Routes, Route, BrowserRouter, useNavigate } from 'react-router-dom'
import { SidebarProvider } from './contexts/SidebarContext.jsx'

// Import all pages
import LoginPage from './auth/login.jsx'
import ForgotPasswordPage from './auth/forgotPassword.jsx'
import ResetPasswordPage from './auth/resetPassword.jsx'
import OverviewPage from './pages/admin/adminOverview.jsx'
import IntegrityPage from './pages/admin/adminIntegration.jsx'
import RolesPage from './pages/admin/adminRole.jsx'
import TaskPage from './pages/admin/adminTask.jsx'
import LandlordOverview from './pages/landlord/landlordOverview.jsx'
import PreTenancy from './pages/landlord/pretenancy.jsx'
import BehavioralReportPage from './pages/landlord/behaviouralreport.jsx'
import BehaviouralRiskPage from './pages/landlord/behaviouralRisk.jsx'
import EarlyWarningsPage from './pages/landlord/earlyWarning.jsx'
import PropertyStatusPage from './pages/landlord/propertyStatus.jsx'
import TenantOverview from './pages/tenant/tenantOverview.jsx'
import TenantReliability from './pages/tenant/tenantReliability.jsx'
import TenantTask from './pages/tenant/tenantTask.jsx'
import AffiliateCommissions from './pages/affiliate/commissions.jsx'
import Referral from './pages/affiliate/referral.jsx'
import AffiliatePayout from './pages/affiliate/payout.jsx'

// Main App component with navigation state
function App() {
  return (
    <SidebarProvider>
      <BrowserRouter>
        <Routes>
          {/* Login page */}
          <Route path="/" element={<LoginPageWrapper />} />
          <Route path="/login" element={<LoginPageWrapper />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
                    
          {/* Admin Routes */}
          <Route path="/adminOverview" element={<OverviewPage />} />
          <Route path="/adminIntegration" element={<IntegrityPage />} />
          <Route path="/adminRoles" element={<RolesPage />} />
          <Route path="/adminTasks" element={<TaskPage />} />

          {/* Landlord Routes */}
          <Route path="/landlordOverview" element={<LandlordOverview />} />
          <Route path="/landlordPreTenancy" element={<PreTenancy />} />
          <Route path="/landlordBehaviouralRisk" element={<BehaviouralRiskPage />} />
          <Route path="/landlordReport" element={<BehavioralReportPage />} />
          <Route path="/landlordEarlyWarnings" element={<EarlyWarningsPage />} />
          <Route path="/landlordPropertyStatus" element={<PropertyStatusPage />} />

          {/* Tenant Routes */}
          <Route path="/tenantOverview" element={<TenantOverview />} />
          <Route path="/tenantMyTasks" element={<TenantTask />} />
          <Route path="/tenantMyReliability" element={<TenantReliability />} />

          {/* Affiliate Routes */}
          <Route path="/affiliateReferral" element={<Referral />} />
          <Route path="/affiliateCommissions" element={<AffiliateCommissions />} />
          <Route path="/affiliatePayout" element={<AffiliatePayout />} />
        </Routes>
      </BrowserRouter>
    </SidebarProvider>
  )
}

// Wrapper component to handle login navigation
function LoginPageWrapper() {
  const navigate = useNavigate();

  const handleLogin = (role) => {
    // Redirect to appropriate overview page based on role
    switch (role) {
      case 'superadmin':
        navigate('/adminOverview');
        break;
      case 'landlord':
        navigate('/landlordOverview');
        break;
      case 'tenant':
        navigate('/tenantOverview');
        break;
      case 'affiliate':
        navigate('/affiliateCommissions');
        break;
      default:
        navigate('/');
    }
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password');
  };

  return <LoginPage onLogin={handleLogin} onForgotPassword={handleForgotPassword} />;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
