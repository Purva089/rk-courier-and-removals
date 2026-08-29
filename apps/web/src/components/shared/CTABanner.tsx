import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { AnimatedSection } from './AnimatedSection';

interface CTABannerProps {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

export const CTABanner = ({
  title,
  description,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref
}: CTABannerProps) => {
  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="container">
        <AnimatedSection direction="up" className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-secondary-foreground mb-6">
            {title}
          </h2>
          <p className="text-lg text-secondary-foreground/90 mb-10 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href={primaryButtonHref}>
              <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 h-14">
                {primaryButtonText}
              </Button>
            </Link>
            {secondaryButtonText && secondaryButtonHref && (
              <Link href={secondaryButtonHref}>
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary text-lg px-8 h-14">
                  {secondaryButtonText}
                </Button>
              </Link>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
