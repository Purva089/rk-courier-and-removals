import { AnimatedSection } from './AnimatedSection';

interface PageHeroProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export const PageHero = ({ title, description, children }: PageHeroProps) => {
  return (
    <div className="relative bg-primary py-20 md:py-32 overflow-hidden">
      {/* Abstract Background Pattern - SVG Placeholder */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl">
          <AnimatedSection direction="up">
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
              {title}
            </h1>
            {description && (
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl leading-relaxed">
                {description}
              </p>
            )}
            {children && (
              <div className="mt-8">
                {children}
              </div>
            )}
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};
