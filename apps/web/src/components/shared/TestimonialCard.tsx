import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

interface TestimonialCardProps {
  authorName: string;
  authorRole?: string | null;
  company?: string | null;
  content: string;
  rating: number;
  delay?: number;
}

export const TestimonialCard = ({ authorName, authorRole, company, content, rating, delay = 0 }: TestimonialCardProps) => {
  return (
    <AnimatedSection delay={delay} className="h-full">
      <Card className="h-full flex flex-col bg-muted/50 border-none">
        <CardHeader className="pb-4">
          <div className="flex gap-1 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${i < rating ? 'fill-secondary text-secondary' : 'fill-muted text-muted-foreground'}`} 
              />
            ))}
          </div>
          <p className="text-lg italic text-foreground/80 line-clamp-4">"{content}"</p>
        </CardHeader>
        <CardContent className="mt-auto">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
              {authorName.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className="font-semibold text-primary">{authorName}</p>
              <p className="text-sm text-muted-foreground">
                {authorRole} {company && `at ${company}`}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </AnimatedSection>
  );
};
