"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Logo from "../../../public/Gnayanalogo.svg";

// Define types for our SPA sections
type Section = "home" | "AI-Solutions" | "efficiency" | "usecases";

interface HeaderProps {
  activeSection: Section;
  scrollToSection: (sectionId: string) => void;
}

const Header = ({ activeSection, scrollToSection }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when resizing to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Helper to use on Link clicks to scroll to section
  const handleNavClick = (sectionId: string) => (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    scrollToSection(sectionId);
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Image src={Logo} width={150} height={83} className="w-auto h-10 md:h-14" alt="logo" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
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

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="text-gray-700 dark:text-gray-300"
            >
              {isMenuOpen ? (
                // Close icon
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Menu icon
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="#home"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
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
                className={`block px-3 py-2 rounded-md text-base font-medium ${
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
                className={`block px-3 py-2 rounded-md text-base font-medium ${
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
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  activeSection === "usecases"
                    ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-white"
                    : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                }`}
              >
                Use Cases
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;