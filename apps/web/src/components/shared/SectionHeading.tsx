import { ReactNode } from 'react';
import { AnimatedSection } from './AnimatedSection';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeading = ({ title, subtitle, centered = false }: SectionHeadingProps) => {
  return (
    <AnimatedSection className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-4">{title}</h2>
      {subtitle && (
        <p className={`text-lg text-muted-foreground max-w-2xl ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-20 bg-secondary rounded-full mt-6 ${centered ? 'mx-auto' : ''}`} />
    </AnimatedSection>
  );
};
