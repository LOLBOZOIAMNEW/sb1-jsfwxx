import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-blue-900/50 to-purple-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get in
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400"> Touch</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have questions about our VR health solutions? We're here to help!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105">
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gray-300">
                  <Mail className="h-5 w-5 text-purple-400" />
                  <span>contact@vrhealth.com</span>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <Phone className="h-5 w-5 text-teal-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <span>123 VR Street, Digital City, VC 12345</span>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <Clock className="h-5 w-5 text-purple-400" />
                  <span>Mon-Fri: 9:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Schedule a Demo</h3>
              <p className="text-gray-300 mb-6">
                Experience our VR health solutions firsthand with a personalized demo session.
              </p>
              <button className="w-full px-6 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-all">
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}