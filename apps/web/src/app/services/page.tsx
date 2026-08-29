import { PageHero } from '@/components/shared/PageHero';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HomeIcon, PackageCheck, Truck, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services - RK Courier and Removals',
  description: 'Comprehensive services including house removal, courier services, and waste clearance.',
};

const services = [
  {
    title: "House Removal",
    description: "Professional and reliable house removal services, helping customers move their belongings safely and efficiently.",
    icon: HomeIcon,
    href: "/services/house-removal",
  },
  {
    title: "Courier Service",
    description: "Fast and dependable courier services for packages, parcels, documents, and other items.",
    icon: PackageCheck,
    href: "/services/courier-service",
  },
  {
    title: "Waste Clearance",
    description: "Responsible and efficient waste clearance services for homes, properties, and unwanted items.",
    icon: Truck,
    href: "/services/waste-clearance",
  }
];

export default function ServicesPage() {
  return (
    <div>
      <PageHero 
        title="Our Services" 
        description="We offer a comprehensive suite of removal and courier services designed to meet your specific needs."
      />

      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <AnimatedSection key={service.title} direction="up" delay={index * 0.1}>
                  <Card className="h-full hover:border-secondary hover:shadow-xl transition-all duration-300 group flex flex-col rounded-2xl overflow-hidden hover:-translate-y-1">
                    <CardContent className="p-8 flex flex-col h-full">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-all duration-300 shadow-sm">
                        <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
                      <p className="text-muted-foreground mb-8 flex-grow leading-relaxed">
                        {service.description}
                      </p>
                      <Link href={service.href} className="mt-auto">
                        <Button variant="outline" className="w-full group-hover:bg-secondary group-hover:text-secondary-foreground group-hover:border-secondary transition-all">
                          Learn More <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}