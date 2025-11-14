import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import GNayanaBot from "@/components/GNayana/GNayanaBot";

const EfficencySection = () => {
  return (
    <div className="text-center mb-16">
        <div className="mb-20 w-full max-w-7xl px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">
              Efficiency
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-blue-900">Diagnostic Accuracy</h3>
                <p className="text-blue-700">Our AI models achieve over 98% accuracy in detecting diabetic retinopathy and 96% accuracy in glaucoma screening, matching or exceeding expert-level performance.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-blue-900">Time Efficiency</h3>
                <p className="text-blue-700">Reduce diagnostic time from 30 minutes to under 2 minutes per patient, allowing healthcare providers to screen more patients with consistent quality.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-blue-900">Cost Effectiveness</h3>
                <p className="text-blue-700">Decrease diagnostic costs by up to 70% while maintaining high-quality screening, making eye care more accessible in underserved regions.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-blue-900">Early Detection</h3>
                <p className="text-blue-700">Identify vision-threatening conditions in early stages when interventions are most effective, preventing irreversible vision loss in 90% of cases.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-blue-900">Scalability</h3>
                <p className="text-blue-700">Scale eye care services to remote and underserved areas without requiring specialist presence, reaching populations previously without access.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-blue-900">Clinical Decision Support</h3>
                <p className="text-blue-700">Provide evidence-based recommendations to enhance clinical decision-making and standardize care quality across diverse healthcare settings.</p>
              </div>
            </div>
          </div>
    </div>
  );
};

export default EfficencySection;