import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-neutral-200 py-xl">
      <div className="section-container">
        <div className="text-center">
          <div className="flex items-center justify-center mb-sm">
            <span className="text-body text-neutral-700">
              © {currentYear} Heer Chotaliya. All rights reserved.
            </span>
          </div>
          <div className="flex items-center justify-center text-small text-neutral-500">
            <span>Made with</span>
            <Heart size={16} className="mx-sm text-semantic-error" />
            <span>using React & TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;