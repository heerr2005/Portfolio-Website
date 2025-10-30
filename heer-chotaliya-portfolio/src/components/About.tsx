import React from 'react';
import { Award, Target, Lightbulb, Users } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  const { ref: aboutRef, isVisible } = useScrollAnimation({ threshold: 0.3 });

  const highlights = [
    {
      icon: <Target size={24} />,
      title: 'Detail-Oriented',
      description: 'Meticulous approach to data cleaning and analysis'
    },
    {
      icon: <Lightbulb size={24} />,
      title: 'Problem Solver',
      description: 'Passionate about finding innovative solutions'
    },
    {
      icon: <Users size={24} />,
      title: 'Collaborative',
      description: 'Strong team player with excellent communication'
    },
    {
      icon: <Award size={24} />,
      title: 'Continuous Learner',
      description: 'Always expanding skills in data science'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-container mx-auto px-4">
        <div ref={aboutRef} className="max-w-4xl mx-auto">
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-gray-100 mb-6">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full" />
          </div>

          <div className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 lg:p-12 mb-12">
              <p className="text-lg lg:text-xl text-neutral-700 dark:text-gray-300 leading-relaxed text-center">
                Detail-oriented and enthusiastic Computer Science undergraduate, aspiring Data Analyst with a strong foundation in Python programming and hands-on experience through self-developed projects. Currently mastering Python for Data Analysis through comprehensive certification programs, with growing expertise in data cleaning, manipulation, and visualization. 
              </p>
              <p className="text-lg lg:text-xl text-neutral-700 dark:text-gray-300 leading-relaxed text-center mt-6">
                Passionate about leveraging analytical techniques to extract meaningful insights, solve complex problems, and support data-driven decision-making. Eager to apply technical and problem-solving skills in real-world projects while continuing to expand expertise in SQL, Excel, and advanced data visualization tools.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className={`text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-neutral-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-primary-500 dark:text-primary-400 mb-4 flex justify-center">
                  {highlight.icon}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-gray-100 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-gray-400">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '800ms' }}>
            <div className="inline-flex items-center space-x-2 text-primary-600 dark:text-primary-400">
              <Award size={20} />
              <span className="text-lg font-medium">
                Let's turn data into insights together
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;