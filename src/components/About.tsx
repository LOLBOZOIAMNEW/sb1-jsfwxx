import React from 'react';
import { Users, Target, Shield } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-purple-900/50 to-blue-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Revolutionizing Healthcare Through
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400"> Virtual Reality</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We combine cutting-edge VR technology with evidence-based healthcare practices to deliver immersive healing experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-lg p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
            <Users className="h-12 w-12 text-teal-400 mb-6" />
            <h3 className="text-xl font-semibold text-white mb-4">Expert Team</h3>
            <p className="text-gray-300">
              Our team consists of healthcare professionals, VR specialists, and wellness experts dedicated to your health journey.
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
            <Target className="h-12 w-12 text-purple-400 mb-6" />
            <h3 className="text-xl font-semibold text-white mb-4">Personalized Care</h3>
            <p className="text-gray-300">
              Tailored VR experiences designed to meet your specific health and wellness goals.
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
            <Shield className="h-12 w-12 text-blue-400 mb-6" />
            <h3 className="text-xl font-semibold text-white mb-4">Safe & Secure</h3>
            <p className="text-gray-300">
              State-of-the-art security measures to protect your health data and privacy.
            </p>
          </div>
        </div>

        <div className="mt-20 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 flex items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-300 mb-6">
                  To make innovative VR health solutions accessible to everyone, transforming the way people approach their wellness journey.
                </p>
                <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all">
                  Learn More
                </button>
              </div>
            </div>
            <div className="h-64 md:h-auto bg-[url('https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
          </div>
        </div>
      </div>
    </section>
  );
}