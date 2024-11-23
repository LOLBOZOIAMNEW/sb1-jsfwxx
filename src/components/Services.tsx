import React from 'react';
import { Brain, Heart, Activity, Glasses, Users, Clock } from 'lucide-react';

const services = [
  {
    icon: <Glasses className="h-8 w-8" />,
    title: "Virtual Therapy Sessions",
    description: "One-on-one therapy sessions in calming virtual environments"
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: "Cognitive Training",
    description: "Brain exercises and memory enhancement programs"
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Stress Management",
    description: "Guided relaxation and stress reduction techniques"
  },
  {
    icon: <Activity className="h-8 w-8" />,
    title: "Physical Rehabilitation",
    description: "Virtual reality-assisted physical therapy and recovery"
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Group Sessions",
    description: "Virtual support groups and community wellness programs"
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "24/7 Support",
    description: "Round-the-clock access to wellness resources"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-blue-900/50 to-purple-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Our Virtual Reality
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400"> Services</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Comprehensive virtual reality solutions designed to enhance your mental and physical well-being
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white/5 backdrop-blur-lg p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-all transform hover:-translate-y-1"
            >
              <div className="text-teal-400 group-hover:text-purple-400 transition-colors mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}