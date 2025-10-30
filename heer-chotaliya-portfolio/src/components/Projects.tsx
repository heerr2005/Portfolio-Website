import React from 'react';
import { Calendar, ExternalLink, Github, TrendingUp, Gamepad2, Zap } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Projects: React.FC = () => {
  const { ref: projectsRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const projectsData = [
    {
      title: 'Wine Quality Prediction',
      period: '04/2024 - 05/2024',
      description: 'Built a Machine learning Model using Supervised Learning Techniques to predict wine quality based on various chemical properties.',
      tools: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
      repository: 'https://github.com/heerr2005',
      demo: 'https://github.com/heerr2005',
      status: 'Completed',
      icon: <TrendingUp size={32} />,
      category: 'Machine Learning • Predictive Analysis'
    },
    {
      title: 'Tic Tac Toe',
      period: '2024',
      description: 'A classic X-O game built with HTML, CSS, and JavaScript. Features include score tracking, undo moves, and a responsive neon-style UI. Simple, smooth, and fun- all logic and styling done from scratch.',
      tools: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Game Logic'],
      repository: 'https://github.com/heerr2005',
      demo: 'https://heerr2005.github.io/TicTacToe/',
      status: 'Completed',
      icon: <Gamepad2 size={32} />,
      category: 'Frontend Development • Game Development'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-container mx-auto px-4">
        <div ref={projectsRef} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-gray-100 mb-4">
            Projects
          </h2>
          <p className="text-xl text-neutral-600 dark:text-gray-400">
            Featured projects showcasing data analysis and development skills
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {projectsData.map((project, index) => (
              <div
                key={index}
                className={`card group hover:scale-105 transition-all duration-300 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col h-full">
                  {/* Project header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <div className="text-primary-500 dark:text-primary-400 mr-4 group-hover:scale-110 transition-transform duration-300">
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-neutral-900 dark:text-gray-100 mb-1">
                          {project.title}
                        </h3>
                        <div className="flex items-center text-sm text-neutral-500 dark:text-gray-400">
                          <Calendar size={14} className="mr-1" />
                          <span>{project.period}</span>
                        </div>
                      </div>
                    </div>
                    <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 py-1 rounded-full">
                      {project.status}
                    </span>
                  </div>
                  
                  {/* Project description */}
                  <p className="text-neutral-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tools used */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-neutral-900 dark:text-gray-100 mb-3">
                      Tools & Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, toolIndex) => (
                        <span
                          key={toolIndex}
                          className="text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 px-3 py-1 rounded-lg"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Project links */}
                  <div className="mt-auto pt-4 border-t border-neutral-200 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-3">
                        <a
                          href={project.repository}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary inline-flex items-center text-sm px-4 py-2 hover:scale-105 transition-transform duration-200"
                        >
                          <Github size={16} className="mr-2" />
                          View Code
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary inline-flex items-center text-sm px-4 py-2 hover:scale-105 transition-transform duration-200"
                        >
                          <ExternalLink size={16} className="mr-2" />
                          Live Demo
                        </a>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center">
                      <Zap size={14} className="text-primary-500 dark:text-primary-400 mr-2" />
                      <p className="text-xs text-neutral-500 dark:text-gray-400">
                        {project.category}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to action */}
          <div className={`text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-gray-100 mb-4">
                Want to see more of my work?
              </h3>
              <p className="text-neutral-600 dark:text-gray-400 mb-6">
                Check out my GitHub for additional projects and contributions
              </p>
              <a
                href="https://github.com/heerr2005"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center hover:scale-105 transition-transform duration-200"
              >
                <Github size={20} className="mr-2" />
                Visit My GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;