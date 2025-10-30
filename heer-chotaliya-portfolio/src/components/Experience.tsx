import React from 'react';
import { MapPin, Calendar, Building } from 'lucide-react';

const Experience: React.FC = () => {
  const experienceData = [
    {
      company: 'NOVITECH R&D PVT LTD',
      position: 'Data Analytics',
      period: '08/2025',
      location: 'Surat, Gujarat',
      type: 'Current'
    },
    {
      company: 'Simplilearn',
      position: 'Introduction to Cloud Computing',
      period: '05/2024',
      location: 'Online',
      type: 'Certification'
    },
    {
      company: 'BRAINYBEAM TECHNOLOGIES PVT LTD',
      position: 'Machine Learning & Data Science',
      period: '08/2023',
      location: 'Surat, India',
      type: 'Internship'
    }
  ];

  return (
    <section id="experience" className="py-2xl bg-gradient-page">
      <div className="section-container">
        <div className="text-center mb-xl section-fade-in">
          <h2 className="text-title font-bold text-neutral-900 mb-md">
            Experience
          </h2>
          <p className="text-large text-neutral-700">
            Professional experience and certifications
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-neutral-200 hidden md:block"></div>
            
            {experienceData.map((exp, index) => (
              <div key={index} className="relative flex flex-col md:flex-row md:items-start mb-xl last:mb-0">
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-6 w-3 h-3 bg-primary-500 rounded-full transform -translate-x-1/2 mt-sm"></div>
                
                {/* Content card */}
                <div className="md:ml-12 flex-1">
                  <div className="card">
                    <div className="flex flex-col space-y-sm">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <h3 className="text-large font-semibold text-neutral-900 flex items-center">
                          <Building size={20} className="mr-sm text-primary-500" />
                          {exp.company}
                        </h3>
                        <span className={`text-caption px-2 py-1 rounded-full ${
                          exp.type === 'Current' 
                            ? 'bg-primary-100 text-primary-700' 
                            : exp.type === 'Certification'
                            ? 'bg-semantic-success/10 text-semantic-success'
                            : 'bg-neutral-100 text-neutral-700'
                        }`}>
                          {exp.type}
                        </span>
                      </div>
                      
                      <p className="text-body text-primary-500 font-medium">
                        {exp.position}
                      </p>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-sm">
                        <div className="flex items-center text-small text-neutral-500">
                          <Calendar size={14} className="mr-xs" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center text-small text-neutral-500">
                          <MapPin size={14} className="mr-xs" />
                          <span>{exp.location}</span>
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

export default Experience;