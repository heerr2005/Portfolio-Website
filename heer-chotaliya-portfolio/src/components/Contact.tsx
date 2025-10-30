import React from 'react';
import { Phone, Mail, Linkedin, Github, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+91 7862899167',
      href: 'tel:+917862899167'
    },
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'heerchotaliya78@gmail.com',
      href: 'mailto:heerchotaliya78@gmail.com'
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      value: 'www.linkedin.com/in/heerchotaliya',
      href: 'https://www.linkedin.com/in/heerchotaliya'
    },
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      value: 'github.com/heerr2005',
      href: 'https://github.com/heerr2005'
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'Surat, Gujarat-395009, India',
      href: null
    }
  ];

  return (
    <section id="contact" className="py-2xl bg-gradient-page">
      <div className="section-container">
        <div className="text-center mb-xl section-fade-in">
          <h2 className="text-title font-bold text-neutral-900 mb-md">
            Get In Touch
          </h2>
          <p className="text-large text-neutral-700">
            Let's connect and discuss data opportunities
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
            {contactInfo.map((contact, index) => (
              <div
                key={index}
                className="card text-center"
              >
                <div className="text-primary-500 mb-sm flex justify-center">
                  {contact.icon}
                </div>
                <h3 className="text-small font-semibold text-neutral-900 mb-xs">
                  {contact.label}
                </h3>
                {contact.href ? (
                  <a
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-body text-neutral-700 hover:text-primary-500 transition-colors duration-fast"
                  >
                    {contact.value}
                  </a>
                ) : (
                  <p className="text-body text-neutral-700">
                    {contact.value}
                  </p>
                )}
              </div>
            ))}
          </div>
          
          {/* Call to action */}
          <div className="text-center mt-xl section-fade-in">
            <div className="bg-white rounded-lg p-lg shadow-card">
              <h3 className="text-large font-semibold text-neutral-900 mb-sm">
                Ready to collaborate?
              </h3>
              <p className="text-body text-neutral-700 mb-lg">
                I'm always interested in discussing data analysis projects and opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-sm justify-center">
                <a
                  href="mailto:heerchotaliya78@gmail.com"
                  className="btn-primary inline-flex items-center justify-center"
                >
                  <Mail size={20} className="mr-sm" />
                  Send Email
                </a>
                <a
                  href="https://www.linkedin.com/in/heerchotaliya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center justify-center"
                >
                  <Linkedin size={20} className="mr-sm" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;