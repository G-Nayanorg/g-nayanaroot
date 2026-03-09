"use client";

import Link from "next/link";
import { ExternalLink, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const referencesData = [
  {
    title: "Diabetic retinopathy (AOA)",
    url: "https://www.aoa.org/healthy-eyes/eye-and-vision-conditions/diabetic-retinopathy?sso=y",
    source: "American Optometric Association",
    quote:
      "Comprehensive guide on symptoms, causes, and treatment of diabetic retinopathy.",
  },
  {
    title: "Diabetic retinopathy (NHS)",
    url: "https://www.nhsinform.scot/illnesses-and-conditions/diabetes/diabetic-retinopathy/",
    source: "NHS Inform",
    quote:
      "Patient information regarding diabetic eye screening and management.",
  },
  {
    title:
      "Global Prevalence of Diabetic Retinopathy and Projection of Burden through 2045",
    url: "https://pubmed.ncbi.nlm.nih.gov/33940045/",
    source: "PubMed",
    quote:
      "Systematic review highlighting the increasing global burden of diabetic eye disease.",
  },
  {
    title:
      "Prevalence of diabetic retinopathy in India stratified by known and undiagnosed diabetes",
    url: "https://www.nejm.org/doi/full/10.1056/NEJM199111143252005",
    source: "NEJM",
    quote:
      "Critical study on the epidemiology of diabetic retinopathy in the Indian population.",
  },
  {
    title:
      "Early detection of diabetic retinopathy based on deep learning and ultra-wide-field fundus images",
    url: "https://www.nature.com/articles/s41598-021-81539-3",
    source: "Nature",
    quote:
      "Research on using AI and deep learning for earlier and more accurate detection.",
  },
  {
    title:
      "Early Detection and Classification of Diabetic Retinopathy: A Deep Learning Approach",
    url: "https://www.mdpi.com/2673-2688/5/4/125",
    source: "MDPI",
    quote:
      "Advanced classification techniques using deep learning models for diabetic retinopathy.",
  },
];

export const References = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(referencesData.length / itemsPerPage);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(nextSlide, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide, currentIndex]);

  const visibleItems = [];
  for (let i = 0; i < itemsPerPage; i++) {
    const index = (currentIndex * itemsPerPage + i) % referencesData.length;
    visibleItems.push(referencesData[index]);
  }

  return (
    <section className="bg-zinc-50 dark:bg-zinc-900 py-16 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            References & Scientific Validation
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Trusted by leading medical institutions and validated by
            peer-reviewed research.
          </p>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Content */}
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 ease-in-out">
              {visibleItems.map((item, index) => (
                <ReferenceCard key={`${item.title}-${index}`} {...item} />
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-center items-center mt-10 space-x-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex space-x-2">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? "bg-blue-600 w-6"
                      : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ReferenceCardProps {
  title: string;
  url: string;
  source: string;
  quote?: string;
}

const ReferenceCard = ({ title, url, source, quote }: ReferenceCardProps) => {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
    >
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full flex flex-col relative group">
        <Quote className="w-10 h-10 text-blue-500 dark:text-blue-500 absolute top-6 right-6 transform -scale-x-100 opacity-20" />

        <div className="flex-1">
          <div className="flex items-center mb-6">
            <div className="h-10 w-1 bg-blue-500 rounded-full mr-4"></div>
            <div>
              <span className="text-sm font-bold text-blue-600 dark:text-blue-400 tracking-wide uppercase">
                {source}
              </span>
              <div className="h-0.5 w-12 bg-blue-100 dark:bg-blue-900/30 mt-1"></div>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 line-clamp-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {title}
          </h3>

          {quote && (
            <p className="text-gray-600 dark:text-gray-700 text-sm leading-relaxed italic">
              "{quote}"
            </p>
          )}
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700 flex items-center text-sm font-medium text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          <span>Read Research</span>
          <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
};

export default References;
