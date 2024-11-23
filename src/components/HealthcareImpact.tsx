import React from 'react';
import { TrendingUp, Heart, Brain, Users } from 'lucide-react';

const stats = [
  { value: "87%", label: "Recovery Rate" },
  { value: "92%", label: "Patient Satisfaction" },
  { value: "65%", label: "Reduced Anxiety" },
  { value: "73%", label: "Better Outcomes" }
];

export default function HealthcareImpact() {
  return (
    <section id="impact" className="py-20 bg-gradient-to-b from-teal-900/50 to-blue-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Transforming
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400"> Healthcare</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our VR solutions are revolutionizing healthcare delivery and patient outcomes
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 text-center">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400">
                {stat.value}
              </div>
              <div className="text-gray-300 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Patient Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-300">
                  <Heart className="h-5 w-5 text-teal-400" />
                  Reduced recovery time and improved outcomes
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Brain className="h-5 w-5 text-purple-400" />
                  Enhanced mental health support and treatment
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Users className="h-5 w-5 text-blue-400" />
                  Better engagement with treatment plans
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <TrendingUp className="h-5 w-5 text-teal-400" />
                  Improved long-term health management
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-[url('https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80')] bg-cover bg-center rounded-xl overflow-hidden">
            <div className="h-full w-full bg-gradient-to-r from-purple-900/90 to-transparent p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Healthcare Provider Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-100">
                  <div className="h-2 w-2 rounded-full bg-purple-400"></div>
                  More effective treatment delivery
                </li>
                <li className="flex items-center gap-3 text-gray-100">
                  <div className="h-2 w-2 rounded-full bg-purple-400"></div>
                  Better patient monitoring and data collection
                </li>
                <li className="flex items-center gap-3 text-gray-100">
                  <div className="h-2 w-2 rounded-full bg-purple-400"></div>
                  Reduced healthcare costs
                </li>
                <li className="flex items-center gap-3 text-gray-100">
                  <div className="h-2 w-2 rounded-full bg-purple-400"></div>
                  Improved patient satisfaction rates
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}