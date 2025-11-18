import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import GNayanaBot from "@/components/GNayana/GNayanaBot";

const useCases = [
  {
    title: "Primary Healthcare",
    description:
      "Integrate AI screening into primary care settings for routine eye health checks",
  },
  {
    title: "Telemedicine",
    description:
      "Enable remote screening for patients in rural or underserved areas",
  },
  {
    title: "Mass Screening",
    description:
      "Deploy for large-scale screening programs in communities or workplaces",
  },
  {
    title: "Follow-up Monitoring",
    description:
      "Track disease progression and treatment effectiveness over time",
  },
];

const UseCaseSection = () => {
  return (
    <div className="text-center">
      <div className="mb-20 w-full max-w-7xl px-4">
        <div className="mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">
            Applications & Use Cases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3 text-blue-900">
                  {useCase.title}
                </h3>
                <p className="text-blue-700">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transform Eye Care in Your Practice
          </h2>
          <p className="text-xl text-cyan-100 max-w-2xl mx-auto mb-8">
            Implement our AI-powered diagnostic tools to improve patient
            outcomes, increase efficiency, and expand access to quality eye
            care.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* <Button>
              <Link href="/register-patient">Get Started Today</Link>
            </Button> */}
            <Button variant="outline">
              <Link href="https://iscstech.com/#contact" target="/" className=" text-blue-600 font-semibold hover:text-blue-800 transition-colors">Schedule a Demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCaseSection;
