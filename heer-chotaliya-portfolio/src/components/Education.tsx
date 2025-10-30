import React from 'react';
import { MapPin, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    {
      institution: 'Bhagwan Mahavir University',
      degree: 'Bachelor of Technology, Computer Engineering',
      period: 'Aug, 2024 - Present',
      location: 'Surat, India',
      current: true
    },
    {
      institution: 'N.G Patel Polytechnic',
      degree: 'Diploma In Computer Engineering',
      period: '2024',
      location: 'Surat, India',
      current: false
    }
  ];

  return (
    <section id="education" className="py-2xl bg-white">
      <div className="section-container">
        <div className="text-center mb-xl section-fade-in">
          <h2 className="text-title font-bold text-neutral-900 mb-md">
            Education
          </h2>
          <p className="text-large text-neutral-700">
            Academic background and achievements
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-neutral-200 hidden md:block"></div>
            
            {educationData.map((edu, index) => (
              <div key={index} className="relative flex flex-col md:flex-row md:items-start mb-xl last:mb-0">
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-6 w-3 h-3 bg-primary-500 rounded-full transform -translate-x-1/2 mt-sm"></div>
                
                {/* Content card */}
                <div className="md:ml-12 flex-1">
                  <div className="card">
                    <div className="flex flex-col space-y-sm">
                      <div className="flex items-center justify-between">
                        <h3 className="text-large font-semibold text-neutral-900">
                          {edu.institution}
                        </h3>
                        {edu.current && (
                          <span className="text-caption bg-primary-100 text-primary-700 px-2 py-1 rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      
                      <p className="text-body text-primary-500 font-medium">
                        {edu.degree}
                      </p>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-sm">
                        <div className="flex items-center text-small text-neutral-500">
                          <Calendar size={14} className="mr-xs" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center text-small text-neutral-500">
                          <MapPin size={14} className="mr-xs" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;