"use client";

import { useState, useEffect } from "react";
import HeroSection from "@/components/Hero/hero-section";
import AiSolutions from "@/components/AIsolutions/ai-soultion";
import EfficencySection from "@/components/Efficiency/Efficiency";
import UseCaseSection from "@/components/UseCases/UseCases";
import Footer from "@/components/Layout/footer";
import Header from "@/components/Layout/Header";

import References from "@/components/Layout/References";

// Define types for our SPA sections
type Section = "home" | "AI-Solutions" | "efficiency" | "usecases";

const Home = () => {
  const [activeSection, setActiveSection] = useState<Section>("home");

  // Update active section based on URL
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");

      if (hash === "AI-Solutions" || hash === "ai-solutions") {
        setActiveSection("AI-Solutions");
      } else if (hash === "efficiency") {
        setActiveSection("efficiency");
      } else if (hash === "usecases") {
        setActiveSection("usecases");
      } else {
        setActiveSection("home");
      }
    };

    // Initial check
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  // Scroll to section when navigating
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId as Section);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />

      {/* Main Content */}
      <div className="pt-16">
        {/* Home (Hero) Section */}
        <section
          id="home"
          className="flex items-center justify-center py-14 scroll-mt-16"
        >
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

      <References />
      <Footer />
    </div>
  );
};

export default Home;
