'use client';

import { useEffect, useState } from 'react';
import { AnimatedSection } from './AnimatedSection';

interface StatsCounterProps {
  end: number;
  label: string;
  suffix?: string;
  duration?: number;
  delay?: number;
}

export const StatsCounter = ({ end, label, suffix = '+', duration = 2000, delay = 0 }: StatsCounterProps) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const id = `stats-${Math.random().toString(36).substr(2, 9)}`;
  const animationName = `count-up-${id}`;

  // Start animation on mount with a delay
  useEffect(() => {
    setHasStarted(true);
  }, [delay]);

  // Count up animation
  useEffect(() => {
    if (!hasStarted || count >= end) return;

    const increment = end / (duration / 16); // 60fps
    const newCount = Math.min(count + increment, end);
    setCount(newCount);

    if (newCount < end) {
      requestAnimationFrame(() => {});
    }
  }, [hasStarted, count, end, duration]);

  // Format the number with commas
  const formattedCount = new Intl.NumberFormat().format(Math.round(count));

  return (
    <AnimatedSection className="flex flex-col items-center justify-center p-6 text-center">
      <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
        {formattedCount}{suffix}
      </div>
      <div className="text-sm md:text-base font-medium text-primary/80 uppercase tracking-wider">
        {label}
      </div>
    </AnimatedSection>
  );
};
