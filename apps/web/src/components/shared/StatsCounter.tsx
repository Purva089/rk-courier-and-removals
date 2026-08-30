'use client';

import { useEffect, useRef, useId, useState } from 'react';
import { AnimatedSection } from './AnimatedSection';

interface StatsCounterProps {
  end: number;
  label: string;
  suffix?: string;
  duration?: number;
}

export const StatsCounter = ({ end, label, suffix = '', duration = 2000 }: StatsCounterProps) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const id = useId();
  const animationName = `count-up-${id}`;
  const propertyName = `--count-${id}`;
  const styleElRef = useRef<HTMLStyleElement | null>(null);

  // IntersectionObserver to trigger animation
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

  // Inject CSS: @property + @keyframes + pseudo-element content
  useEffect(() => {
    if (!hasAnimated) return;

    const css = `
      @property ${propertyName} {
        syntax: '<integer>';
        initial-value: 0;
        inherits: false;
      }
      @keyframes ${animationName} {
        from { ${propertyName}: 0; }
        to { ${propertyName}: ${end}; }
      }
      .${animationName}-trigger {
        animation: ${animationName} ${duration}ms ease-out forwards;
      }
      .${animationName}-trigger::after {
        content: ${propertyName} '${suffix}';
      }
    `;

    const styleEl = document.createElement('style');
    styleEl.textContent = css;
    document.head.appendChild(styleEl);
    styleElRef.current = styleEl;

    return () => {
      styleEl.remove();
    };
  }, [animationName, propertyName, end, duration, suffix, hasAnimated]);

  return (
    <div ref={elementRef}>
      <AnimatedSection className="flex flex-col items-center justify-center p-6 text-center">
        <div
          className={`${hasAnimated ? `${animationName}-trigger` : ''} text-4xl md:text-5xl font-bold text-secondary mb-2`}
          aria-live="polite"
          style={{ '--count': hasAnimated ? `var(${propertyName})` : 0 }}
        >
          {hasAnimated ? '' : `0${suffix}`}
        </div>
        <div className="text-sm md:text-base font-medium text-primary/80 uppercase tracking-wider">
          {label}
        </div>
      </AnimatedSection>
    </div>
  );
};