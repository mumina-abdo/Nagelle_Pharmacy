import React from 'react';
import Image from 'next/image';
import { Target, Eye } from 'lucide-react';
const Mission: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8 mr-12">Mission & vision</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <p className="mb-4">
            Nagelle Pharmaceutical Co. Ltd. is a leading pharmaceutical company in Marsabit, established in . We specialize in supply chain solutions for pharmaceuticals, non-pharmaceuticals, and consumer products. Our goal is to provide efficient and reliable supply chain services to the pharmaceutical industry in Kenya.
          </p>
          <br/ >
          <div className="mb-4">
            <h2 className="text-xl font-semibold flex items-center mb-2">
              <Target className="mr-2" /> Our Mission
            </h2>
            <p>
              To be a leading pharmaceutical wholesaler in Kenya, providing high-quality products and exceptional service to our customers. We are committed to ensuring the availability and affordability of essential medicines, while maintaining the highest standards of integrity, professionalism, and customer satisfaction.
            </p>
          </div>
          <br/ >
          <div>
            <h2 className="text-xl font-semibold flex items-center mb-2">
              <Eye className="mr-2" /> Our Vision
            </h2>
            <p>
              To improve healthcare accessibility and affordability in Kenya by becoming the preferred partner for pharmaceutical products and services. We aim to be recognized for our commitment to quality, innovation, and social responsibility, while achieving sustainable growth and delivering value to our stakeholders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Mission;