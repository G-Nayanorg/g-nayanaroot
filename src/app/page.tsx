"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HeroSection from "@/components/Hero/hero-section";
import AiSolutions from "@/components/AIsolutions/ai-soultion";
import EfficencySection from "@/components/Efficiency/Efficiency";
import UseCaseSection from "@/components/UseCases/UseCases";
import Footer from "@/components/Layout/footer";
import Image from "next/image";
import Logo from "../../public/Gnayanalogo.png";

// Define types for our SPA sections
type Section = "home" | "AI-Solutions" | "efficiency" | "usecases";

const Home = () => {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const pathname = usePathname();

  // Update active section based on URL
  useEffect(() => {
    const path = pathname ?? "";
    const p = path.toLowerCase();

    if (p.includes("ai-solutions") || p.endsWith("/ai-solutions")) {
      setActiveSection("AI-Solutions");
    } else if (p.includes("efficiency") || p.endsWith("/efficiency")) {
      setActiveSection("efficiency");
    } else if (p.includes("usecases") || p.endsWith("/usecases")) {
      setActiveSection("usecases");
    } else {
      setActiveSection("home");
    }
  }, [pathname]);

  // Scroll to section when navigating
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId as Section);
    }
  };

  // Navigation handler (SPA — updates state + URL without full reload)
  const navigateToSection = (section: Section) => {
    setActiveSection(section);

    // Update URL without page reload (use lowercase route)
    const route =
      section === "home"
        ? "/"
        : `/${encodeURIComponent(section.toLowerCase())}`;
    window.history.pushState({ section }, "", route);
  };

  // Helper to use on Link clicks to scroll to section
  const handleNavClick =
    (sectionId: string) =>
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault();
      scrollToSection(sectionId);
    };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Image src={Logo} width={64} height={64} alt="logo" />
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="#home"
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  activeSection === "home"
                    ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-white"
                    : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                }`}
                onClick={handleNavClick("home")}
              >
                Home
              </Link>
              <Link
                href="#AI-Solutions"
                onClick={handleNavClick("AI-Solutions")}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  activeSection === "AI-Solutions"
                    ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-white"
                    : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                }`}
              >
                AI Solutions
              </Link>
              <Link
                href="#efficiency"
                onClick={handleNavClick("efficiency")}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  activeSection === "efficiency"
                    ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-white"
                    : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                }`}
              >
                Efficiency
              </Link>
              <Link
                href="#usecases"
                onClick={handleNavClick("usecases")}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  activeSection === "usecases"
                    ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-white"
                    : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                }`}
              >
                Use Cases
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-16">
        {/* Home (Hero) Section */}
        <section id="home" className="flex items-center justify-center py-14 scroll-mt-16">
          <div className="w-full max-w-7xl px-4">
            <HeroSection />
          </div>
        </section>


        {/* AI-Solutions Section */}
        <section
          id="AI-Solutions"
          className="flex items-center justify-center py-2 bg-gray-50 dark:bg-gray-800 scroll-mt-16"
        >
          <div className="w-full max-w-7xl px-4">
            <AiSolutions />
          </div>
        </section>

        {/* Efficiency Section */}
        <section
          id="efficiency"
          className="flex items-center justify-center py-2 scroll-mt-16"
        >
          <div className="w-full max-w-7xl px-4">
            <EfficencySection />
          </div>
        </section>

        {/* Use Cases Section */}
        <section
          id="usecases"
          className="flex items-center justify-center py-2 bg-gray-50 dark:bg-gray-800 scroll-mt-16"
        >
          <div className="w-full max-w-7xl px-4">
            <UseCaseSection />
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
