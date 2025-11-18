
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  benefitIcon1,
  benefitIcon2,
} from "../../../public/assets";

export const aiSolutionsData = [
  {
    id: "1",
    title: "Diabetic Retinopathy Detection",
    description:
      "Early detection of diabetic retinopathy through advanced AI analysis of retinal images, preventing vision loss in diabetic patients.",
    icon: benefitIcon1,
    route: "/diabetic-retinopathy",
    color: "from-blue-500 to-cyan-500",
    stats: [
      { label: "Accuracy", value: "98.5%" },
      { label: "Sensitivity", value: "97.2%" },
    ],
  },
  {
    id: "2",
    title: "Glaucoma Screening",
    description:
      "Comprehensive optic nerve assessment for early glaucoma detection and monitoring of disease progression.",
    icon: benefitIcon2,
    route: "/glaucoma",
    color: "from-purple-500 to-indigo-500",
    stats: [
      { label: "Accuracy", value: "96.7%" },
      { label: "Specificity", value: "95.4%" },
    ],
  },
];

interface ImageObject {
  src: string;
  width: number;
  height: number;
  blurWidth?: number;
  blurHeight?: number;
}

interface AiSolution {
  id: string;
  title: string;
  description: string;
  icon: string | ImageObject;
  route: string;
  color: string;
  stats: Array<{ label: string; value: string }>;
}

interface AiSolutionsProps {
  solutions?: AiSolution[];
}

export default function AiSolutions({ solutions = aiSolutionsData }: AiSolutionsProps) {
  return (
    <div className="mb-20">
      <h4 className="text-2xl md:text-4xl font-bold text-center mb-12 text-blue-900">
        Our AI Diagnostic Solutions
      </h4>
      <div className="space-y-12">
        {solutions.map((solution, index) => (
          <div
            key={solution.id}
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} bg-white p-8 rounded-2xl shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300 group`}
          >
            {/* Text Content (left for first item, right for second) */}
            <div className="lg:w-1/2 flex flex-col justify-center">
              <div className="flex items-start">
                {/* <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-r ${solution.color} flex items-center justify-center mb-4 shrink-0`}
                >
                  {typeof solution.icon === 'string' ? (
                    <img
                      src={solution.icon}
                      width={32}
                      height={32}
                      alt={solution.title}
                      className="text-white"
                    />
                  ) : solution.icon && typeof solution.icon === 'object' && 'src' in solution.icon ? (
                    <img
                      src={solution.icon.src}
                      width={solution.icon.width}
                      height={solution.icon.height}
                      alt={solution.title}
                      className="text-white"
                    />
                  ) : (
                    <div className="text-white">Icon</div>
                  )}
                </div> */}
                <div className="ml-4 grow">
                  <h3 className="text-xl font-bold mb-2 text-blue-900 group-hover:text-blue-700 transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-blue-700 mb-4">{solution.description}</p>

                  {/* Stats */}
                  <div className="flex justify-between mb-4">
                    {solution.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="text-center">
                        <div className="text-lg font-bold text-blue-900">
                          {stat.value}
                        </div>
                        <div className="text-xs text-blue-600">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" asChild>
                    <Link
                      href={solution.route}
                      className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                    >
                      Learn More
                      <svg
                        className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Image Content (right for first item, left for second) */}
            <div className="lg:w-1/2 flex items-center justify-center mt-6 lg:mt-0">
              {solution.id === "1" ? (
                <div className="w-full h-64 lg:h-80 flex items-center justify-center">
                  <Image
                    src="/Eyeimages/Diabetic/right_2.jpg"
                    alt="Diabetic Retinopathy Example - Right Eye"
                    className="w-full h-full object-contain rounded-lg"
                    width={600}
                    height={400}
                  />
                </div>
              ) : solution.id === "2" ? (
                <div className="w-full h-64 lg:h-80 flex items-center justify-center">
                  <Image
                    src="/Eyeimages/Glaucoma/Glaucoma.jpg"
                    alt="Glaucoma Example - Left Eye"
                    className="w-full h-full object-contain rounded-lg"
                    width={600}
                    height={400}
                  />
                </div>
              ) : (
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 lg:h-80 flex items-center justify-center">
                  <span className="text-gray-500">Image for {solution.title}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}