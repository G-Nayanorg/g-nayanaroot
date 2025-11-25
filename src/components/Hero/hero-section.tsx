import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import LogoCarousel from "./LogoCarousel";

const HeroSection = () => {
  return (
    <div className="text-center">
      <div className="w-full max-w-7xl px-4">
        <div className="relative z-1 max-w-248 mx-auto text-center mb-8">
          <h1 id="hero-title" className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-blue-900">
            <span className="inline-block relative">
              G-NAYANA{" "}
              <svg
                viewBox="0 0 624 28"
                fill="none"
                className="absolute top-full left-0 w-full xl:-mt-2"
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
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>
          <h6 className="text-2xl md:text-2xl lg:text-2xl mb-6 text-blue-900">
            AI-Powered Eye Care
          </h6>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-blue-900 mb-8">
            Advanced AI solutions for early detection and screening of
            vision-threatening eye diseases, bringing expert-level diagnostics
            to primary care settings.
          </p>
          {/* <Button href="https://retinopathy-dashboard.vercel.app/">Get started</Button> */}
        </div>

        {/* <div className="mb-8">
          <GNayanaBot />
        </div> */}

        <div className="flex justify-center gap-4 flex-wrap">
          <Button >
            <Link href="https://g-nayanaroot.vercel.app/" target="/">
              Explore Diabetic Retinopathy
            </Link>
          </Button>
          <Button>
            <Link href="https://glaucoma-frontend-wrsx.vercel.app/" target="/">Explore Glaucoma Detection</Link>
          </Button>
        </div>
      </div>

      {/* Logo Carousel - Scrolling from right to left */}
      <div className="mt-10 max-w-7xl mx-auto">
        <div className="w-full overflow-hidden py-4 bg-blue-50 rounded-lg border border-blue-100" style={{ maxHeight: '150px' }}>
          <div className="flex-col items-center">
            <span className="text-lg font-medium text-blue-800 mx-4 whitespace-nowrap">Trusted by leading healthcare providers:</span>
            <LogoCarousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
