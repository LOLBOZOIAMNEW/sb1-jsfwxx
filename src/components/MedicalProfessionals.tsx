import React from 'react';
import { Stethoscope, Hospital, Brain, HeartPulse, Microscope, UserCog } from 'lucide-react';

const applications = [
  {
    icon: <Stethoscope className="h-6 w-6" />,
    title: "Surgical Planning",
    description: "3D visualization of patient anatomy for precise surgical planning and training"
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: "Medical Education",
    description: "Interactive learning environments for medical students and residents"
  },
  {
    icon: <HeartPulse className="h-6 w-6" />,
    title: "Patient Monitoring",
    description: "Real-time visualization of vital signs and patient data in virtual space"
  },
  {
    icon: <Hospital className="h-6 w-6" />,
    title: "Emergency Training",
    description: "Simulated emergency scenarios for medical team preparation"
  },
  {
    icon: <Microscope className="h-6 w-6" />,
    title: "Diagnostic Tools",
    description: "Enhanced visualization of medical imaging and diagnostic data"
  },
  {
    icon: <UserCog className="h-6 w-6" />,
    title: "Remote Consultations",
    description: "Virtual collaboration between healthcare professionals"
  }
];

export default function MedicalProfessionals() {
  return (
    <section id="medical" className="py-20 bg-gradient-to-b from-blue-900/50 to-teal-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Medical
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400"> Professional</span>
            Solutions
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Advanced VR tools designed specifically for healthcare providers and medical institutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {applications.map((app, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all"
            >
              <div className="text-teal-400 mb-4">{app.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{app.title}</h3>
              <p className="text-gray-300">{app.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[url('https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80')] bg-cover bg-center rounded-xl overflow-hidden">
            <div className="h-full w-full bg-gradient-to-r from-blue-900/95 to-transparent p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Hospital Integration</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-100">
                  <div className="h-2 w-2 rounded-full bg-teal-400"></div>
                  Seamless integration with existing hospital systems
                </li>
                <li className="flex items-center gap-3 text-gray-100">
                  <div className="h-2 w-2 rounded-full bg-teal-400"></div>
                  HIPAA-compliant data management
                </li>
                <li className="flex items-center gap-3 text-gray-100">
                  <div className="h-2 w-2 rounded-full bg-teal-400"></div>
                  Multi-user collaboration capabilities
                </li>
                <li className="flex items-center gap-3 text-gray-100">
                  <div className="h-2 w-2 rounded-full bg-teal-400"></div>
                  Real-time data synchronization
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Clinical Benefits</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-teal-400 mb-2">Enhanced Decision Making</h4>
                <p className="text-gray-300">
                  Access to immersive 3D visualizations of patient data enables more informed clinical decisions.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-2">Improved Patient Care</h4>
                <p className="text-gray-300">
                  Better preparation and training lead to enhanced patient outcomes and safety.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">Efficient Workflows</h4>
                <p className="text-gray-300">
                  Streamlined processes and better collaboration reduce time and resource consumption.
                </p>
              </div>
              <button className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg font-medium hover:from-teal-700 hover:to-blue-700 transition-all transform hover:scale-105">
                Request Hospital Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}