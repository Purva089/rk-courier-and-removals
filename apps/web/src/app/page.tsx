import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { CTABanner } from '@/components/shared/CTABanner';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { ServiceCard } from '@/components/shared/ServiceCard';
import { StatsCounter } from '@/components/shared/StatsCounter';
import { Button } from '@/components/ui/button';
import { Truck, PackageCheck, ArrowRight, Home as HomeIcon, CheckCircle2 } from 'lucide-react';
import { PlaneIcon, ShipIcon, FileTextIcon } from '@/lib/icons';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[85vh] flex items-center pt-16 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full text-slate-300" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="right" className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/20 mb-6 font-medium text-sm shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              Trusted UK Removals & Courier
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
              Moving your life, <br/><span className="text-primary">handling with care.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
              Professional house removals, reliable courier services, and efficient waste clearance tailored for your needs across the UK.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/quote">
                <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  Get a Free Quote
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-primary h-14 px-8 text-lg rounded-xl shadow-sm transition-all hover:-translate-y-1">
                  Explore Services
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 flex flex-wrap items-center gap-6 text-slate-600 text-sm font-medium">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-secondary" /> Insured (£2m)</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-secondary" /> Professional Movers</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-secondary" /> Local UK Service</div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="left" delay={0.2} className="relative hidden lg:block w-full h-[600px]">
             <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl transform rotate-3 scale-105 transition-transform duration-500"></div>
             <img src="/hero.jpg" alt="Professional UK House Removals" className="relative w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-white" loading="eager" />
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-b bg-muted/30">
        <div className="container grid grid-cols-2 md:grid-cols-2 gap-8 divide-x divide-border">
          <StatsCounter end={5} label="House Removals / Day" suffix="+" duration={2000} />
          <StatsCounter end={99} label="On-Time Delivery" suffix="%" duration={3000} />
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-background">
        <div className="container">
          <SectionHeading 
            title="Comprehensive Logistics Solutions" 
            subtitle="From small packages to large household moves, we provide reliable, professional services tailored to your needs."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <ServiceCard 
              title="House Removal" 
              description="Professional and reliable house removal services, helping customers move their belongings safely and efficiently."
              icon={HomeIcon}
              href="/services/house-removal"
              delay={0.1}
            />
            <ServiceCard 
              title="Courier Service" 
              description="Fast and dependable courier services for packages, parcels, documents, and other items."
              icon={PackageCheck}
              href="/services/courier-service"
              delay={0.2}
            />
            <ServiceCard 
              title="Waste Clearance" 
              description="Responsible and efficient waste clearance services for homes, properties, and unwanted items."
              icon={Truck}
              href="/services/waste-clearance"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner 
        title="Ready to streamline your logistics?"
        description="Join thousands of businesses that trust RK Courier Services with their global supply chain needs. Get a custom quote tailored to your business today."
        primaryButtonText="Get a Quote"
        primaryButtonHref="/quote"
        secondaryButtonText="Contact Sales"
        secondaryButtonHref="/contact"
      />
    </div>
  );
}
