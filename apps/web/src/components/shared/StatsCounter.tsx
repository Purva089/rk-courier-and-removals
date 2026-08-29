'use client';

import { useEffect, useState, useRef } from 'react';
import { AnimatedSection } from './AnimatedSection';

interface StatsCounterProps {
  end: number;
  label: string;
  suffix?: string;
  duration?: number;
}

export const StatsCounter = ({ end, label, suffix = '', duration = 2000 }: StatsCounterProps) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasAnimated) return;
    
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      const easeProgress = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      
      setCount(Math.floor(end * easeProgress));

      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, hasAnimated]);

  return (
    <div ref={elementRef}>
      <AnimatedSection 
        className="flex flex-col items-center justify-center p-6 text-center"
      >
        <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
          {count.toLocaleString()}{suffix}
        </div>
        <div className="text-sm md:text-base font-medium text-primary/80 uppercase tracking-wider">
          {label}
        </div>
      </AnimatedSection>
    </div>
  );
};
