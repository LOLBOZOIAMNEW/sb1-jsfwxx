import React from 'react';
import { Brain, Activity, HeartPulse } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-teal-800"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1633414654227-2b5ea828b3ef?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 tracking-tight">
            Transform Your Health
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400">
              Through Virtual Reality
            </span>
          </h1>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
            Experience the future of wellness with immersive VR technology designed to enhance your mental and physical health journey.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105">
              Start Your Journey
            </button>
            <button className="px-8 py-3 bg-white/10 backdrop-blur-lg text-white rounded-lg font-medium hover:bg-white/20 transition-all">
              Learn More
            </button>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 transform hover:scale-105 transition-all">
              <Brain className="h-10 w-10 text-teal-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Mental Wellness</h3>
              <p className="text-gray-300">Immersive meditation and mindfulness experiences</p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 transform hover:scale-105 transition-all">
              <Activity className="h-10 w-10 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Fitness Training</h3>
              <p className="text-gray-300">Virtual personal training and workout sessions</p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 transform hover:scale-105 transition-all">
              <HeartPulse className="h-10 w-10 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Health Tracking</h3>
              <p className="text-gray-300">Real-time biometric monitoring and analysis</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}