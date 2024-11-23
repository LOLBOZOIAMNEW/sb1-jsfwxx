import React from 'react';
import { Brain, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/10 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Brain className="h-8 w-8 text-purple-600" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
                <a href="#about" className="text-white/70 hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
                <a href="#services" className="text-white/70 hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">Services</a>
                <a href="#products" className="text-white/70 hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">Products</a>
                <a href="#medical" className="text-white/70 hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">Medical</a>
                <a href="#contact" className="text-white/70 hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
              Get Started
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-purple-300 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/10 backdrop-blur-lg">
            <a href="#" className="text-white hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#about" className="text-white/70 hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#services" className="text-white/70 hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium">Services</a>
            <a href="#products" className="text-white/70 hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium">Products</a>
            <a href="#medical" className="text-white/70 hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium">Medical</a>
            <a href="#contact" className="text-white/70 hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}