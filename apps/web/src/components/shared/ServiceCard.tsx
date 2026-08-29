import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { AnimatedSection } from './AnimatedSection';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  delay?: number;
}

export const ServiceCard = ({ title, description, icon: Icon, href, delay = 0 }: ServiceCardProps) => {
  return (
    <AnimatedSection delay={delay}>
      <Card className="group h-full flex flex-col hover:border-secondary transition-colors duration-300">
        <CardHeader>
          <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-secondary/10 transition-colors duration-300">
            <Icon className="w-6 h-6 text-primary group-hover:text-secondary transition-colors duration-300" />
          </div>
          <CardTitle className="text-xl group-hover:text-secondary transition-colors duration-300">{title}</CardTitle>
          <CardDescription className="text-base line-clamp-3">{description}</CardDescription>
        </CardHeader>
        <CardContent className="mt-auto pt-4">
          <Link href={href}>
            <Button variant="ghost" className="p-0 hover:bg-transparent hover:text-secondary flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300">
              Learn more <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </AnimatedSection>
  );
};
