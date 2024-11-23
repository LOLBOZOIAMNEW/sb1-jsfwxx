import React from 'react';
import { Sparkles } from 'lucide-react';

const products = [
  {
    name: "VR Wellness Pro",
    price: "$299",
    description: "Complete VR wellness system with advanced biometric tracking",
    features: [
      "High-resolution display",
      "Wireless design",
      "Heart rate monitoring",
      "Stress level tracking",
      "6-month subscription included"
    ]
  },
  {
    name: "MindfulVR Plus",
    price: "$199",
    description: "Focused meditation and mindfulness VR system",
    features: [
      "Comfortable fit",
      "Guided meditation sessions",
      "Breathing exercises",
      "Progress tracking",
      "3-month subscription included"
    ]
  },
  {
    name: "FitVR Elite",
    price: "$249",
    description: "Virtual reality fitness and training system",
    features: [
      "Motion tracking",
      "Personal trainer AI",
      "Custom workout plans",
      "Performance analytics",
      "4-month subscription included"
    ]
  }
];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-gradient-to-b from-purple-900/50 to-teal-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            VR Health
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400"> Products</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            State-of-the-art virtual reality equipment designed for your wellness journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 overflow-hidden group hover:bg-white/10 transition-all"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                  {product.name}
                  <Sparkles className="h-5 w-5 text-purple-400" />
                </h3>
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400 mb-4">
                  {product.price}
                </div>
                <p className="text-gray-300 mb-6">{product.description}</p>
                <ul className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-300 flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-purple-400"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-8 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}