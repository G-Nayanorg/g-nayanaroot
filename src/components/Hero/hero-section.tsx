import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import LogoCarousel from "./LogoCarousel";

const HeroSection = () => {
  return (
    <div className="text-center px-4">
      <div className="w-full max-w-7xl mx-auto">
        <div className="relative z-1 max-w-4xl mx-auto text-center mb-8">
          <h1 id="hero-title" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 text-blue-900">
            <span className="inline-block relative">
              G-NAYANA{" "}
              <svg
                viewBox="0 0 624 28"
                fill="none"
                className="absolute top-full left-0 w-full sm:w-[calc(100%+1rem)] sm:left-[-0.5rem] xl:-mt-2"
              >
                <defs>
                  <linearGradient
                    id="threeColorGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="50%" stopColor="#F59E0B" />
                    <stop offset="100%" stopColor="#EF4444" />
                  </linearGradient>
                </defs>
                <path
                  d="M3 25C142.5 3.5 290.5 3.5 621 25"
                  stroke="url(#threeColorGradient)"
                  strokeWidth="4"
                  className="sm:stroke-[6px]"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>
          <h6 className="text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 text-blue-900">
            AI-Powered Eye Care
          </h6>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl sm:max-w-3xl mx-auto text-blue-900 mb-6 sm:mb-8">
            Advanced AI solutions for early detection and screening of
            vision-threatening eye diseases, bringing expert-level diagnostics
            to primary care settings.
          </p>
          {/* <Button href="https://retinopathy-dashboard.vercel.app/">Get started</Button> */}
        </div>

        {/* <div className="mb-8">
          <GNayanaBot />
        </div> */}

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 flex-wrap items-center">
          <Button size="lg" className="w-full sm:w-auto">
            <Link href="https://g-nayanaroot.vercel.app/" target="_blank">
              Explore Diabetic Retinopathy
            </Link>
          </Button>
          <Button size="lg" className="w-full sm:w-auto">
            <Link href="https://glaucoma-frontend-wrsx.vercel.app/" target="_blank">Explore Glaucoma Detection</Link>
          </Button>
        </div>
      </div>

      {/* Logo Carousel - Scrolling from right to left */}
      <div className="mt-10 md:mt-16 max-w-6xl lg:max-w-7xl mx-auto px-4">
        <div className="w-full overflow-hidden py-4 bg-blue-50 rounded-lg border border-blue-100">
          <div className="flex flex-col items-center">
            <span className="text-base sm:text-lg md:text-xl font-medium text-blue-800 mb-2">Trusted by leading healthcare providers:</span>
            <LogoCarousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
