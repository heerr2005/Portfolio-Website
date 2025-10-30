import React, { useState, useEffect, useRef } from 'react';

interface ProgressBarProps {
  percentage: number;
  label: string;
  duration?: number;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  percentage, 
  label, 
  duration = 1500, 
  className = '' 
}) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setAnimatedPercentage(Math.floor(progress * percentage));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, percentage, duration]);

  return (
    <div ref={progressRef} className={`mb-6 ${className}`}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-neutral-700 dark:text-gray-300">
          {label}
        </span>
        <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
          {animatedPercentage}%
        </span>
      </div>
      <div className="progress-bar">
        <div 
          className="progress-fill"
          style={{ width: `${animatedPercentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;