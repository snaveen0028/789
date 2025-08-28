import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Leading frontend development for web applications serving 1M+ users. Architected and implemented scalable React solutions, mentored junior developers, and collaborated with design teams to deliver exceptional user experiences.',
      achievements: [
        'Improved application performance by 40%',
        'Led team of 5 developers',
        'Implemented design system used across 10+ products'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      location: 'Austin, TX',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple web applications using modern technologies. Built RESTful APIs, implemented real-time features, and contributed to technical architecture decisions.',
      achievements: [
        'Built 3 major product features from scratch',
        'Reduced API response time by 60%',
        'Implemented automated testing pipeline'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'WebSolutions LLC',
      location: 'Remote',
      period: '2019 - 2020',
      description: 'Created responsive web applications and collaborated with designers to implement pixel-perfect interfaces. Focused on performance optimization and cross-browser compatibility.',
      achievements: [
        'Delivered 15+ client projects',
        'Achieved 98% client satisfaction rate',
        'Established coding standards for team'
      ]
    },
    {
      title: 'Junior Developer',
      company: 'Digital Agency Pro',
      location: 'New York, NY',
      period: '2018 - 2019',
      description: 'Started my professional journey in web development, working on various client projects and learning modern development practices under senior developer guidance.',
      achievements: [
        'Completed 20+ small to medium projects',
        'Learned React, Node.js, and modern tooling',
        'Contributed to open-source projects'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Work <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Experience</span>
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-20 opacity-0 animate-fadeInUp"
                  style={{
                    animationDelay: `${index * 200}ms`,
                    animationFillMode: 'forwards'
                  }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-gray-900" />
                  
                  <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group hover:transform hover:scale-105">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-blue-400 mb-1">{exp.title}</h3>
                        <h4 className="text-lg text-purple-400 mb-2">{exp.company}</h4>
                      </div>
                      <div className="flex flex-col md:items-end space-y-1">
                        <div className="flex items-center text-gray-400 text-sm">
                          <Calendar size={14} className="mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center text-gray-400 text-sm">
                          <MapPin size={14} className="mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                    <div className="space-y-2">
                      <h5 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">Key Achievements</h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-gray-300 text-sm flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Download Resume Button */}
          <div className="text-center mt-16">
            <button className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;