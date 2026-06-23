
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Analytics } from '@vercel/analytics/react';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import MembershipsPage from '@/pages/MembershipsPage';
import ServicesPage from '@/pages/ServicesPage';
import CareersPage from '@/pages/CareersPage';
import TechnicalEducationPage from '@/pages/TechnicalEducationPage';
import PrivacyRightsPage from '@/pages/PrivacyRightsPage';
import SuccessPage from '@/pages/SuccessPage';
import ContactPage from '@/pages/ContactPage';
import PrivacyPage from '@/pages/PrivacyPage';
import TermsPage from '@/pages/TermsPage';
import CookiesPage from '@/pages/CookiesPage';
import NonMemberSupportPage from '@/pages/NonMemberSupportPage';
import FamiliesPage from '@/pages/FamiliesPage';
import SeniorsPage from '@/pages/SeniorsPage';
import WFHProfessionalsPage from '@/pages/WFHProfessionalsPage';
import StudentsPage from '@/pages/StudentsPage';
import NonTechSavvyPage from '@/pages/NonTechSavvyPage';
import PricingPage from '@/pages/PricingPage';
import WarrantyConcierge from '@/pages/WarrantyConcierge';
import SafetyAcademy from '@/pages/SafetyAcademy';
import MobileCallButton from '@/components/MobileCallButton';
import TermsOfService from '@/pages/TermsOfService';
import ServiceTerms from '@/pages/ServiceTerms';
import AIAutomationsPage from '@/pages/AIAutomationsPage';
import AboutUsPage from '@/pages/AboutUsPage';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
import UsefulToolsHubPage from '@/pages/UsefulToolsHubPage';
import PersonalITToolkitPage from '@/pages/PersonalITToolkitPage';
import RaaSPage from '@/pages/RaaSPage';
import HighLevelTrainingPage from '@/pages/HighLevelTrainingPage';
import WindowsExperienceIndexPage from '@/pages/WindowsExperienceIndexPage';

// ScrollToTop Component to handle scroll reset on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Rahvion, LLC",
            "description": "America's Personal IT Department. Enterprise-Grade Remote Technical Support for Your Home",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "P.O. Box Available Upon Request",
              "addressLocality": "Bel Air",
              "addressRegion": "MD",
              "postalCode": "21015",
              "addressCountry": "US"
            },
            "telephone": "+14104298159",
            "email": "helpdesk@rahvion.com",
            "priceRange": "$$",
            "url": "https://rahvion.com",
            "areaServed": ["Maryland", "Delaware", "Pennsylvania", "New Jersey", "New York", "Washington DC", "Virginia", "West Virginia"]
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-[#0b0f19] text-white font-sans selection:bg-blue-500/30">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/membership" element={<MembershipsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/raas" element={<RaaSPage />} />
          <Route path="/tools" element={<UsefulToolsHubPage />} />
          <Route path="/personal-it-toolkit" element={<PersonalITToolkitPage />} />
          <Route path="/highlevel-crm-training" element={<HighLevelTrainingPage />} />
          <Route path="/windows-experience-index" element={<WindowsExperienceIndexPage />} />
          <Route path="/non-member-support" element={<NonMemberSupportPage />} />
          <Route path="/technical-education" element={<TechnicalEducationPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/privacy-rights" element={<PrivacyRightsPage />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/cookies" element={<CookiesPage />} />
          
          {/* New Pages */}
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/warranty-concierge" element={<WarrantyConcierge />} />
          <Route path="/safety-academy" element={<SafetyAcademy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/service-terms" element={<ServiceTerms />} />
          <Route path="/ai-automations" element={<AIAutomationsPage />} />

          {/* Audience Routes */}
          <Route path="/families" element={<FamiliesPage />} />
          <Route path="/seniors" element={<SeniorsPage />} />
          <Route path="/wfh-professionals" element={<WFHProfessionalsPage />} />
          <Route path="/students" element={<StudentsPage />} />
          <Route path="/non-tech-savvy" element={<NonTechSavvyPage />} />

          {/* Redirects */}
          <Route path="/savvy" element={<Navigate to="/technical-education" replace />} />
        </Routes>
        <Footer />
        <MobileCallButton />
        <Toaster />
        <Analytics />
      </div>
    </BrowserRouter>
  );
}

export default App;
