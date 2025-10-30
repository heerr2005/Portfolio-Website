import React from 'react';
import { BarChart3, Brain, Database, Code2, TrendingUp } from 'lucide-react';
import ProgressBar from './ProgressBar';
import Counter from './Counter';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Skills: React.FC = () => {
  const { ref: skillsRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const skillCategories = [
    {
      icon: <BarChart3 size={48} />,
      title: 'Data Analysis',
      technologies: 'Python, Pandas, NumPy, Matplotlib, Seaborn',
      proficiency: 90,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Brain size={48} />,
      title: 'Machine Learning',
      technologies: 'Scikit-learn, Supervised Learning, Predictive Modeling',
      proficiency: 80,
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Database size={48} />,
      title: 'SQL',
      technologies: 'Database Queries, Data Management, Analytics',
      proficiency: 75,
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Code2 size={48} />,
      title: 'Excel',
      technologies: 'Spreadsheet Analysis, Data Processing, Reporting',
      proficiency: 85,
      color: 'from-orange-500 to-red-500'
    }
  ];

  // Additional skills with percentages
  const additionalSkills = [
    { name: 'Python Programming', percentage: 85 },
    { name: 'Pandas/NumPy', percentage: 80 },
    { name: 'Data Cleaning', percentage: 88 },
    { name: 'Statistical Analysis', percentage: 82 }
  ];

  const stats = [
    { label: 'Projects Completed', value: 25, suffix: '+' },
    { label: 'Data Sets Analyzed', value: 150, suffix: '+' },
    { label: 'Hours of Analysis', value: 500, suffix: '+' },
    { label: 'Accuracy Rate', value: 98, suffix: '%' }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-page dark:bg-gray-800">
      <div className="max-w-container mx-auto px-4">
        <div ref={skillsRef} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-gray-100 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-neutral-600 dark:text-gray-400">
            Technical skills and tools I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((skill, index) => (
            <div
              key={index}
              className={`card group ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-start space-x-4">
                <div className="text-primary-500 dark:text-primary-400 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  {skill.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-gray-100 mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-gray-400 mb-4">
                    {skill.technologies}
                  </p>
                  
                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-neutral-700 dark:text-gray-300">
                        Proficiency
                      </span>
                      <span className="text-sm font-bold text-primary-600 dark:text-primary-400">
                        {skill.proficiency}%
                      </span>
                    </div>
                    <div className="progress-bar">
                      <div 
                        className="h-full bg-gradient-to-r rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.proficiency}%` : '0%',
                          backgroundImage: `linear-gradient(to right, ${skill.color})`,
                          transitionDelay: `${index * 200}ms`
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Percentage Bars Section - Prominently Displayed */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl border border-neutral-200 dark:border-gray-700 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-neutral-900 dark:text-gray-100 mb-4">
              Skills Proficiency Levels
            </h3>
            <p className="text-lg text-neutral-600 dark:text-gray-400">
              Animated percentage bars showing expertise in each technology
            </p>
          </div>
          
          <div className="space-y-6">
            {additionalSkills.map((skill, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-lg p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xl font-bold text-neutral-900 dark:text-gray-100">
                    {skill.name}
                  </span>
                  <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                    {skill.percentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-300 dark:bg-gray-600 rounded-full h-4 overflow-hidden">
                  <div 
                    className="h-4 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full transition-all duration-2000 ease-out shadow-lg"
                    style={{
                      width: isVisible ? `${skill.percentage}%` : '0%',
                      transitionDelay: `${(index + 4) * 300}ms`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics Section */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl border border-neutral-200 dark:border-gray-700">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-gray-100 mb-2">
              Experience Metrics
            </h3>
            <p className="text-neutral-600 dark:text-gray-400">
              Quantifiable achievements in data analysis
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center ${isVisible ? 'animate-bounce-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="stat-card">
                  <div className="flex justify-center mb-3">
                    <TrendingUp size={24} className="text-primary-500 dark:text-primary-400" />
                  </div>
                  <Counter 
                    end={stat.value} 
                    suffix={stat.suffix}
                    className="text-3xl font-bold text-primary-600 dark:text-primary-400 block mb-2"
                  />
                  <p className="text-sm text-neutral-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;