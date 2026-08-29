import { PageHero } from '@/components/shared/PageHero';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Mock data fetching function
const getServiceBySlug = (slug: string) => {
  const services: Record<string, any> = {
    'house-removal': {
      title: "House Removal",
      description: "Professional and reliable house removal services, helping customers move their belongings safely and efficiently.",
      longDescription: "Our house removal service takes the stress out of moving. Whether you're moving a few streets away or across the UK, our professional team ensures your belongings are packed, transported, and delivered safely. We handle everything from fragile items to heavy furniture.",
      features: [
        "Full packing and unpacking services available",
        "Specialized handling for fragile and valuable items",
        "Modern, clean, and fully equipped removal vans",
        "Insured service for peace of mind"
      ]
    },
    'courier-service': {
      title: "Courier Service",
      description: "Fast and dependable courier services for packages, parcels, documents, and other items.",
      longDescription: "Need something delivered quickly and reliably? Our local and national courier service guarantees fast delivery for documents, parcels, and larger items. With same-day and next-day options, we are the trusted choice for businesses and individuals.",
      features: [
        "Same-day and next-day delivery options",
        "Real-time tracking and proof of delivery",
        "Secure handling of sensitive documents and parcels",
        "Flexible pickup and drop-off schedules"
      ]
    },
    'waste-clearance': {
      title: "Waste Clearance",
      description: "Responsible and efficient waste clearance services for homes, properties, and unwanted items.",
      longDescription: "Clear out clutter easily with our professional waste clearance services. We responsibly dispose of household waste, old furniture, garden debris, and more. We prioritize recycling and eco-friendly disposal methods.",
      features: [
        "Eco-friendly disposal and recycling",
        "Fast and efficient clearance of any property size",
        "Handling of heavy and bulky items",
        "Fully licensed and compliant waste carriers"
      ]
    }
  };

  return services[slug];
};

export async function generateStaticParams() {
  return [
    { slug: 'house-removal' },
    { slug: 'courier-service' },
    { slug: 'waste-clearance' }
  ];
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  
  if (!service) {
    return { title: 'Service Not Found' };
  }

  return {
    title: `${service.title} - RK Courier and Removals`,
    description: service.description,
  };
}

export default function ServiceDetailsPage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div>
      <PageHero 
        title={service.title} 
        description={service.description}
      />

      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <AnimatedSection direction="up">
                <h2 className="text-3xl font-bold text-primary mb-6">Service Overview</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {service.longDescription}
                </p>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={0.1}>
                <h2 className="text-2xl font-bold text-primary mb-6">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-start gap-3 bg-muted/30 p-4 rounded-lg">
                      <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection direction="left" delay={0.2} className="space-y-6">
              <div className="bg-primary text-primary-foreground p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Ready to get started?</h3>
                <p className="text-primary-foreground/80 mb-6">
                  Get a personalized quote for your {service.title.toLowerCase()} needs today.
                </p>
                <Link href="/quote">
                  <Button size="lg" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    Request a Quote <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>

              <div className="bg-muted/50 border rounded-xl p-8">
                <h3 className="text-lg font-bold mb-3 text-primary">Contact Sales</h3>
                <p className="text-muted-foreground text-sm mb-4">Speak directly with a specialist about this service.</p>
                <div className="font-semibold text-secondary text-lg">+44 7393 081245</div>
                <div className="text-sm font-medium mt-1">Rahulkalra3765@gmail.com</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
