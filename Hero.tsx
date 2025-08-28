import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Creative Developer & Designer";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setCurrentText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile image with hover effect */}
          <div className="mb-8 relative inline-block group">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 transform group-hover:scale-110 transition-transform duration-300">
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-4xl font-bold">
                SN
              </div>
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 blur-lg group-hover:blur-xl transition-all duration-300"></div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
            Samudalapalepu Naveen
          </h1>

          <div className="text-xl md:text-2xl text-gray-300 mb-8 h-8">
            <span className="border-r-2 border-blue-400 animate-pulse">
              {currentText}
            </span>
          </div>

          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            I craft beautiful, interactive experiences that bridge the gap between design and technology. 
            Let's bring your ideas to life with creativity and innovation.
          </p>

          {/* Social links with hover animations */}
          <div className="flex justify-center space-x-6 mb-12">
            {[
              { Icon: Github, href: '#', label: 'GitHub' },
              { Icon: Linkedin, href: '#', label: 'LinkedIn' },
              { Icon: Mail, href: '#', label: 'Email' }
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="group p-3 rounded-full bg-gray-800/50 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                aria-label={label}
              >
                <Icon className="w-6 h-6 group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300"
            >
              View My Work
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-blue-500 rounded-full text-blue-400 font-semibold hover:bg-blue-500 hover:text-white transform hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group"
      >
        <div className="flex flex-col items-center text-gray-400 group-hover:text-blue-400 transition-colors">
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown className="w-6 h-6" />
        </div>
      </button>
    </section>
  );
};

export default Hero;