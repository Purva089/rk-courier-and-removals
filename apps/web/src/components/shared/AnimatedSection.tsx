import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
}

export const AnimatedSection = ({ children, className, direction = 'up', delay = 0 }: AnimatedSectionProps) => {
  // Using pure CSS animate-in from tailwindcss-animate for better performance
  const directionClasses = {
    up: 'slide-in-from-bottom-8',
    down: 'slide-in-from-top-8',
    left: 'slide-in-from-right-8',
    right: 'slide-in-from-left-8',
  };

  return (
    <div 
      className={cn(
        "animate-in fade-in duration-700 fill-mode-both", 
        directionClasses[direction],
        className
      )}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};