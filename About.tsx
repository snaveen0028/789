import React from 'react';
import { Code, Palette, Zap, Heart } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code that stands the test of time'
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Crafting beautiful interfaces with attention to every detail'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Building fast, optimized experiences for all devices'
    },
    {
      icon: Heart,
      title: 'User-Centric',
      description: 'Putting user needs first in every design decision'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">My Story</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                With over 5 years of experience in web development and design, I'm passionate about creating 
                digital experiences that not only look amazing but also solve real problems. I believe in the 
                power of great design to make technology more accessible and enjoyable.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                When I'm not coding, you'll find me exploring new design trends, contributing to open-source 
                projects, or sharing knowledge with the developer community. I'm always eager to take on new 
                challenges and push the boundaries of what's possible on the web.
              </p>
              <div className="flex flex-wrap gap-3">
                {['JavaScript', 'React', 'TypeScript', 'Node.js', 'Python', 'Design Systems'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-800 rounded-full text-sm text-blue-400 border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm border border-gray-700">
                <div className="h-full bg-gray-800 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🚀</div>
                    <div className="text-gray-400">Always Learning</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-shadow">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-blue-400">{feature.title}</h4>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;