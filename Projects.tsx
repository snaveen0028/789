import React, { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
  category: string;
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Modern e-commerce solution with advanced features',
      longDescription: 'A full-stack e-commerce platform built with React and Node.js, featuring user authentication, payment integration, real-time inventory management, and an admin dashboard. The platform handles thousands of products and provides a seamless shopping experience across all devices.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
      githubUrl: '#',
      liveUrl: '#',
      category: 'web'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative project management tool',
      longDescription: 'A comprehensive task management application that helps teams collaborate effectively. Features include real-time updates, drag-and-drop functionality, time tracking, and detailed analytics. Built with modern web technologies for optimal performance.',
      technologies: ['Vue.js', 'Express', 'Socket.io', 'PostgreSQL'],
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
      githubUrl: '#',
      liveUrl: '#',
      category: 'web'
    },
    {
      id: 3,
      title: 'Mobile Fitness App',
      description: 'React Native fitness tracking application',
      longDescription: 'A cross-platform mobile application for fitness enthusiasts. Tracks workouts, provides personalized training plans, integrates with wearable devices, and includes social features for motivation. Uses AI to provide intelligent recommendations.',
      technologies: ['React Native', 'Firebase', 'TensorFlow', 'Expo'],
      image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg',
      githubUrl: '#',
      liveUrl: '#',
      category: 'mobile'
    },
    {
      id: 4,
      title: 'Brand Identity Design',
      description: 'Complete branding solution for startup',
      longDescription: 'Comprehensive brand identity design for a tech startup, including logo design, color palette, typography, business cards, and marketing materials. The design reflects innovation and reliability while maintaining a modern aesthetic.',
      technologies: ['Figma', 'Illustrator', 'Photoshop', 'InDesign'],
      image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg',
      githubUrl: '#',
      liveUrl: '#',
      category: 'design'
    },
    {
      id: 5,
      title: 'Data Visualization Dashboard',
      description: 'Interactive analytics and reporting tool',
      longDescription: 'A sophisticated dashboard for data visualization and business intelligence. Features interactive charts, real-time data updates, customizable widgets, and export capabilities. Helps organizations make data-driven decisions.',
      technologies: ['D3.js', 'Python', 'Flask', 'Chart.js'],
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg',
      githubUrl: '#',
      liveUrl: '#',
      category: 'web'
    },
    {
      id: 6,
      title: 'AI Chatbot Interface',
      description: 'Conversational AI with modern UI',
      longDescription: 'An intelligent chatbot interface powered by machine learning algorithms. Features natural language processing, context awareness, multi-language support, and seamless integration with existing systems.',
      technologies: ['Python', 'TensorFlow', 'React', 'NLP'],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
      githubUrl: '#',
      liveUrl: '#',
      category: 'ai'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'design', label: 'Design' },
    { id: 'ai', label: 'AI/ML' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-blue-400 group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex space-x-3">
                    <a
                      href={project.githubUrl}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </a>
                    <a
                      href={project.liveUrl}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  </div>
                </div>

                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/50 rounded-xl transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            <div className="p-8">
              <h3 className="text-3xl font-bold mb-4 text-blue-400">{selectedProject.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{selectedProject.longDescription}</p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-purple-400">Technologies Used</h4>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <a
                  href={selectedProject.githubUrl}
                  className="flex items-center space-x-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                >
                  <Github size={20} />
                  <span>View Code</span>
                </a>
                <a
                  href={selectedProject.liveUrl}
                  className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-blue-500/25 rounded-lg transition-all"
                >
                  <ExternalLink size={20} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;