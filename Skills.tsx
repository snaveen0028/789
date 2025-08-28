import React, { useState, useEffect, useRef } from 'react';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    { name: 'JavaScript/TypeScript', level: 95, color: 'from-yellow-400 to-orange-500' },
    { name: 'React/Next.js', level: 90, color: 'from-blue-400 to-cyan-500' },
    { name: 'UI/UX Design', level: 85, color: 'from-pink-400 to-purple-500' },
    { name: 'Node.js/Express', level: 80, color: 'from-green-400 to-emerald-500' },
    { name: 'Python/Django', level: 75, color: 'from-blue-500 to-indigo-600' },
    { name: 'Cloud Platforms', level: 70, color: 'from-gray-400 to-gray-600' }
  ];

  const categories = [
    {
      title: 'Frontend',
      technologies: ['React', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind CSS', 'SASS']
    },
    {
      title: 'Backend',
      technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL']
    },
    {
      title: 'Tools & Others',
      technologies: ['Git', 'Docker', 'AWS', 'Figma', 'Jest', 'Webpack']
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Skills & <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Expertise</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Skill Bars */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-8 text-blue-400">Proficiency Levels</h3>
              {skills.map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-blue-400 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg`}
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 200}ms`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Technology Categories */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-8 text-blue-400">Technologies</h3>
              {categories.map((category, index) => (
                <div
                  key={category.title}
                  className="opacity-0 animate-fadeInUp"
                  style={{
                    animationDelay: `${index * 300}ms`,
                    animationFillMode: 'forwards'
                  }}
                >
                  <h4 className="text-lg font-semibold mb-4 text-purple-400">{category.title}</h4>
                  <div className="flex flex-wrap gap-3">
                    {category.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-gray-700 rounded-lg text-gray-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all duration-300 cursor-default transform hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Stats */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: '5+', label: 'Years Experience' },
              { number: '50+', label: 'Projects Completed' },
              { number: '100+', label: 'Happy Clients' },
              { number: '15+', label: 'Technologies Mastered' }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group hover:transform hover:scale-105"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2 group-hover:animate-pulse">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;