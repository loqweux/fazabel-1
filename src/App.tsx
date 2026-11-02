import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import HomePage from "@/pages/Home";
import ContactsPage from "@/pages/Contacts";
import ElektrosnabzheniePage from "@/pages/Elektrosnabzhenie";
import KonkurentnoePage from "@/pages/Konkurentnoe";
import PredproektPage from "@/pages/Predproekt";
import UslugiPage from "@/pages/Uslugi";
import VyzovElektrikaPage from "@/pages/VyzovElektrika";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white font-sans text-[#15171b] antialiased">
        <SiteHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/uslugi" element={<UslugiPage />} />
          <Route
            path="/elektrosnabzhenie"
            element={<ElektrosnabzheniePage />}
          />
          <Route path="/vyzov-elektrika" element={<VyzovElektrikaPage />} />
          <Route path="/predproekt" element={<PredproektPage />} />
          <Route path="/konkurentnoe" element={<KonkurentnoePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
        <SiteFooter />
      </div>
    </BrowserRouter>
  );
}
