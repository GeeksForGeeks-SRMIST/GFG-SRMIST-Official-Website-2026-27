import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BouncingLoader from "@/components/ui/BouncingLoader";

// Lazy-load all pages for code splitting
const Home         = lazy(() => import("@/pages/Home"));
const About        = lazy(() => import("@/pages/About"));
const Leadership   = lazy(() => import("@/pages/Leadership"));
const Teams        = lazy(() => import("@/pages/Teams"));
const Events       = lazy(() => import("@/pages/Events"));
const Gallery      = lazy(() => import("@/pages/Gallery"));
const Achievements = lazy(() => import("@/pages/Achievements"));
const AnnualReport = lazy(() => import("@/pages/AnnualReport"));
const Blogs        = lazy(() => import("@/pages/Blogs"));
const JoinUs       = lazy(() => import("@/pages/JoinUs"));
const Contact      = lazy(() => import("@/pages/Contact"));

// 404 page
function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col gap-6 bg-white dark:bg-slate-950 px-6 text-center">
      <div className="text-8xl font-heading font-black text-primary-500 dark:text-primary-400">404</div>
      <h1 className="text-3xl font-heading font-bold text-slate-900 dark:text-white">Page Not Found</h1>
      <p className="text-slate-600 dark:text-slate-400">The page you're looking for doesn't exist.</p>
      <a href="/" className="bg-primary-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-primary-600 transition-colors">
        Go Home
      </a>
    </div>
  );
}

// Page transition wrapper
function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

// Main layout with Navbar + outlet + Footer
function AppLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 transition-colors duration-300">
      <Navbar />

      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            <BouncingLoader />
          </div>
        }
      >
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/"             element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/about"        element={<PageWrapper><About /></PageWrapper>} />
            <Route path="/leadership"   element={<PageWrapper><Leadership /></PageWrapper>} />
            <Route path="/teams"        element={<PageWrapper><Teams /></PageWrapper>} />
            <Route path="/events"       element={<PageWrapper><Events /></PageWrapper>} />
            <Route path="/gallery"      element={<PageWrapper><Gallery /></PageWrapper>} />
            <Route path="/achievements" element={<PageWrapper><Achievements /></PageWrapper>} />
            <Route path="/annual-report"element={<PageWrapper><AnnualReport /></PageWrapper>} />
            <Route path="/blogs"        element={<PageWrapper><Blogs /></PageWrapper>} />
            <Route path="/join"         element={<PageWrapper><JoinUs /></PageWrapper>} />
            <Route path="/contact"      element={<PageWrapper><Contact /></PageWrapper>} />
            <Route path="*"             element={<PageWrapper><NotFound /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </Suspense>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
