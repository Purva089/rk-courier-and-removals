import { PageHero } from '@/components/shared/PageHero';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { CTABanner } from '@/components/shared/CTABanner';
import { Shield, Truck, Package, Clock } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us - RK Courier and Removals',
  description: 'Learn about our trusted local UK house removal, courier, and waste clearance services.',
};

export default function AboutPage() {
  return (
    <div>
      <PageHero 
        title="About RK Courier and Removals" 
        description="Your trusted local partner for removals, courier services, and waste clearance across the UK."
      />

      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="right" className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 tracking-tight">Our Story</h2>
              
              <div className="prose prose-lg text-muted-foreground">
                <p className="font-semibold text-xl text-primary leading-relaxed border-l-4 border-secondary pl-6 mb-8">
                  At RK Courier Pvt Limited, we believe moving things is about more than getting them from one place to another — it's about trust, care and reliability.
                </p>
                
                <p className="mb-6">
                  We started RK Courier with a simple goal: to provide a dependable and friendly service that people can rely on, whether they're sending an important item, moving a few belongings, or relocating an entire home.
                </p>

                <p className="mb-6">
                  Today, we provide courier, collection & delivery, and house removal services, handling every job with the same level of care and attention. From single-item collections to full house moves, we understand that the things we transport matter to our customers.
                </p>

                <p className="mb-8">
                  As a growing business, we take pride in offering a service that is professional, flexible and personal. We focus on clear communication, careful handling and making the entire process as straightforward and stress-free as possible.
                </p>

                <div className="bg-muted/30 p-8 rounded-2xl text-center">
                  <p className="text-xl font-bold text-primary mb-2">More than just a delivery.</p>
                  <p className="text-xl font-bold text-secondary">Your belongings. Our responsibility.</p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="left" delay={0.2} className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent z-10"></div>
              {/* Using a placeholder gradient pattern since we don't have an exact image for About, keeping it visually premium */}
              <div className="absolute inset-0 bg-slate-900">
                 <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
                 <div className="absolute inset-0 flex items-center justify-center">
                    <Truck className="w-32 h-32 text-white/20 transform -rotate-12 group-hover:scale-110 transition-transform duration-700" />
                 </div>
              </div>
              <div className="absolute bottom-0 left-0 p-10 z-20 w-full">
                <div className="flex items-center gap-4 text-white">
                  <div className="bg-secondary p-4 rounded-xl">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Insured</h3>
                    <p className="text-white/80">Public Liability Insurance up to £2m</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CTABanner 
        title="Experience the difference"
        description="Get a customized quote for your house removal or courier needs today."
        primaryButtonText="Get a Quote"
        primaryButtonHref="/quote"
        secondaryButtonText="Contact Us"
        secondaryButtonHref="/contact"
      />
    </div>
  );
}
