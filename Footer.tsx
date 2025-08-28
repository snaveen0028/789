import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: '#', label: 'Email' }
  ];

  const quickLinks = [
    { text: 'About', href: '#about' },
    { text: 'Skills', href: '#skills' },
    { text: 'Projects', href: '#projects' },
    { text: 'Experience', href: '#experience' },
    { text: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
              Samudalapalepu Naveen
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Passionate developer creating digital experiences that make a difference. 
              Always learning, always building.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="p-3 bg-gray-800 rounded-lg hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-110 group"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-blue-400 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors hover:underline"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(link.href);
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-blue-400 mb-4">Get in Touch</h3>
            <div className="space-y-3 text-gray-400">
              <p>📧 john@example.com</p>
              <p>📱 +1 (555) 123-4567</p>
              <p>📍 San Francisco, CA</p>
            </div>
            <div className="mt-6">
              <p className="text-sm text-gray-500 mb-2">Let's connect!</p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-sm bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                Start a Conversation
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-400 text-sm mb-4 md:mb-0">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 mx-1" />
              <span>by Samudalapalepu Naveen</span>
            </div>
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Samudalapalepu Naveen. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;