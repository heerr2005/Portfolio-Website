import React, { useEffect, useState } from 'react';
import { Github, Linkedin, MapPin, BarChart3, TrendingUp, Database, Brain, Sparkles, PieChart, Activity } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Counter from './Counter';

const Hero: React.FC = () => {
  const [animationStarted, setAnimationStarted] = useState(false);
  const { ref: heroRef, isVisible } = useScrollAnimation({ threshold: 0.3 });

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (isVisible && !animationStarted) {
      setAnimationStarted(true);
    }
  }, [isVisible, animationStarted]);

  return (
    <section id="home" ref={heroRef} className="min-h-screen bg-gradient-hero dark:bg-gray-900 flex items-center pt-16">
      <div className="max-w-container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className={`space-y-6 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            {/* Animated greeting */}
            <div className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 mb-4">
              <Sparkles size={20} className="animate-pulse" />
              <span className="text-sm font-medium uppercase tracking-wider">Hello, I'm</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-gray-100 leading-tight tracking-tight">
              Heer
              <span className="block text-primary-600 dark:text-primary-400">Chotaliya</span>
            </h1>
            
            <div className="relative">
              <h2 className="text-2xl lg:text-3xl font-semibold text-neutral-700 dark:text-gray-300 mb-4">
                Data Analyst
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full" />
            </div>

            <p className="text-lg text-neutral-600 dark:text-gray-400 leading-relaxed max-w-lg">
              Transforming complex data into actionable insights through advanced analytics and machine learning. 
              Passionate about uncovering patterns that drive strategic decisions.
            </p>
            
            {/* Location */}
            <div className="flex items-center text-neutral-500 dark:text-gray-400">
              <MapPin size={18} className="mr-2" />
              <span>Surat, Gujarat, India</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a
                href="https://github.com/heerr2005"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center group"
              >
                <Github size={20} className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
                View GitHub
              </a>
              <button
                onClick={() => scrollToSection('#projects')}
                className="btn-secondary inline-flex items-center justify-center"
              >
                View Projects
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-6">
              <a
                href="https://github.com/heerr2005"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-primary-500 dark:text-primary-400 hover:text-primary-600 dark:hover:text-primary-300 hover:scale-110 hover:-translate-y-1 transition-all duration-300 bg-primary-50 dark:bg-primary-900/20 rounded-xl"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/heerchotaliya"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-primary-500 dark:text-primary-400 hover:text-primary-600 dark:hover:text-primary-300 hover:scale-110 hover:-translate-y-1 transition-all duration-300 bg-primary-50 dark:bg-primary-900/20 rounded-xl"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Right Column - Enhanced Interactive Data Visualization */}
          <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="relative">
              {/* Floating Elements Background */}
              <div className="absolute inset-0">
                <div className="absolute top-4 right-8 w-20 h-20 bg-primary-200 dark:bg-primary-800/30 rounded-full animate-pulse"></div>
                <div className="absolute bottom-8 left-4 w-16 h-16 bg-primary-300 dark:bg-primary-700/30 rounded-full animate-bounce"></div>
                <div className="absolute top-1/2 left-8 w-12 h-12 bg-primary-400 dark:bg-primary-600/30 rounded-full animate-ping"></div>
              </div>

              {/* Enhanced Data Dashboard */}
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl border border-neutral-200 dark:border-gray-700">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                      <Activity size={20} className="text-white animate-pulse" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-900 dark:text-gray-100">
                        Analytics Dashboard
                      </h3>
                      <p className="text-sm text-neutral-500 dark:text-gray-400">
                        Real-time insights
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </div>

                {/* Multiple Chart Sections */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
                  {/* Bar Chart */}
                  <div className="bg-primary-50 dark:bg-gray-700/50 rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-neutral-900 dark:text-gray-100 mb-3 flex items-center">
                      <BarChart3 size={16} className="mr-2 text-primary-600 dark:text-primary-400" />
                      Performance
                    </h4>
                    <div className="flex items-end justify-between h-20 space-x-1">
                      {['65%', '78%', '92%', '85%', '96%'].map((height, index) => (
                        <div key={index} className="flex flex-col items-center">
                          <div 
                            className="w-4 bg-gradient-to-t from-primary-600 to-primary-400 rounded-t-sm transition-all duration-1000 ease-out"
                            style={{ 
                              height: animationStarted ? height : '10%',
                              transitionDelay: `${index * 200}ms`
                            }}
                          />
                          <span className="text-xs text-neutral-500 dark:text-gray-400 mt-1">
                            {['J', 'F', 'M', 'A', 'M'][index]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pie Chart Simulation */}
                  <div className="bg-primary-50 dark:bg-gray-700/50 rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-neutral-900 dark:text-gray-100 mb-3 flex items-center">
                      <PieChart size={16} className="mr-2 text-primary-600 dark:text-primary-400" />
                      Skills Distribution
                    </h4>
                    <div className="flex items-center justify-center h-20">
                      <div className="relative w-16 h-16">
                        <div className="w-16 h-16 rounded-full border-8 border-primary-200 dark:border-gray-600"></div>
                        <div 
                          className="absolute top-0 left-0 w-16 h-16 rounded-full border-8 border-transparent border-t-primary-600 dark:border-t-primary-400 border-r-primary-500 dark:border-r-primary-500 transition-all duration-1000"
                          style={{
                            transform: animationStarted ? 'rotate(252deg)' : 'rotate(0deg)',
                            transitionDelay: '1000ms'
                          }}
                        ></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-xs font-bold text-primary-600 dark:text-primary-400">70%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Stats Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="text-center p-3 bg-gradient-to-br from-primary-100 to-primary-50 dark:from-primary-900/30 dark:to-primary-800/30 rounded-lg">
                    <Database size={18} className="text-primary-600 dark:text-primary-400 mx-auto mb-1" />
                    <p className="text-xs text-neutral-600 dark:text-gray-400">Datasets</p>
                    <Counter end={150} suffix="+" className="text-sm font-bold text-primary-700 dark:text-primary-300" />
                  </div>
                  <div className="text-center p-3 bg-gradient-to-br from-green-100 to-green-50 dark:from-green-900/30 dark:to-green-800/30 rounded-lg">
                    <Brain size={18} className="text-green-600 dark:text-green-400 mx-auto mb-1" />
                    <p className="text-xs text-neutral-600 dark:text-gray-400">ML Models</p>
                    <Counter end={25} suffix="+" className="text-sm font-bold text-green-700 dark:text-green-300" />
                  </div>
                  <div className="text-center p-3 bg-gradient-to-br from-purple-100 to-purple-50 dark:from-purple-900/30 dark:to-purple-800/30 rounded-lg">
                    <TrendingUp size={18} className="text-purple-600 dark:text-purple-400 mx-auto mb-1" />
                    <p className="text-xs text-neutral-600 dark:text-gray-400">Insights</p>
                    <Counter end={500} suffix="+" className="text-sm font-bold text-purple-700 dark:text-purple-300" />
                  </div>
                  <div className="text-center p-3 bg-gradient-to-br from-orange-100 to-orange-50 dark:from-orange-900/30 dark:to-orange-800/30 rounded-lg">
                    <Activity size={18} className="text-orange-600 dark:text-orange-400 mx-auto mb-1" />
                    <p className="text-xs text-neutral-600 dark:text-gray-400">Accuracy</p>
                    <Counter end={98} suffix="%" className="text-sm font-bold text-orange-700 dark:text-orange-300" />
                  </div>
                </div>

                {/* Live Data Feed */}
                <div className="mt-4 pt-4 border-t border-neutral-200 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
                      <span className="text-xs text-neutral-600 dark:text-gray-400">Live Data Processing</span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                        <Counter end={1247} /> records/min
                      </p>
                    </div>
                  </div>
                  
                  {/* Progress bar for daily target */}
                  <div className="mt-2">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-neutral-500 dark:text-gray-400">Daily Target</span>
                      <span className="text-xs text-neutral-600 dark:text-gray-300">78%</span>
                    </div>
                    <div className="w-full bg-neutral-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="h-2 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full transition-all duration-1000"
                        style={{ 
                          width: animationStarted ? '78%' : '0%',
                          transitionDelay: '1500ms'
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;