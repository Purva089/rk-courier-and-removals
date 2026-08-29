import { PageHero } from '@/components/shared/PageHero';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - RK Courier and Removals',
  description: 'Get in touch with RK Courier and Removals for house removals, courier services, and waste clearance across the UK.',
};

export default function ContactPage() {
  return (
    <div>
      <PageHero 
        title="Contact Us" 
        description="We're here to help with all your removal, courier, and waste clearance needs."
      />

      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <AnimatedSection direction="right" className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Get in Touch</h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Whether you need a quick courier delivery, a full house removal, or waste clearance, our team is ready to assist you.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-muted/30 p-6 rounded-2xl border hover:border-secondary transition-colors group">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-white transition-all">
                    <Phone className="w-6 h-6 text-primary group-hover:text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Phone</h3>
                  <a href="tel:+447393081245" className="text-muted-foreground hover:text-secondary font-medium">
                    +44 7393 081245
                  </a>
                </div>

                <div className="bg-muted/30 p-6 rounded-2xl border hover:border-secondary transition-colors group">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-white transition-all">
                    <Mail className="w-6 h-6 text-primary group-hover:text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <a href="mailto:Rahulkalra3765@gmail.com" className="text-muted-foreground hover:text-secondary font-medium break-all">
                    Rahulkalra3765@gmail.com
                  </a>
                </div>

                <div className="bg-muted/30 p-6 rounded-2xl border hover:border-secondary transition-colors group md:col-span-2 flex flex-col md:flex-row gap-6 items-start md:items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-white transition-all">
                    <MapPin className="w-6 h-6 text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Business Address</h3>
                    <p className="text-muted-foreground">
                      Ground Floor Flat-15 Kensington Road<br/>
                      Cv5 6GG<br/>
                      United Kingdom
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection direction="left" delay={0.2}>
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
                <h3 className="text-2xl font-bold text-primary mb-6">Send us a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">First Name</label>
                      <Input placeholder="John" className="h-12 bg-slate-50 border-slate-200 focus:bg-white" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Last Name</label>
                      <Input placeholder="Doe" className="h-12 bg-slate-50 border-slate-200 focus:bg-white" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Email Address</label>
                    <Input type="email" placeholder="john@example.com" className="h-12 bg-slate-50 border-slate-200 focus:bg-white" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Phone Number</label>
                    <Input type="tel" placeholder="+44 7000 000000" className="h-12 bg-slate-50 border-slate-200 focus:bg-white" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Message</label>
                    <Textarea 
                      placeholder="How can we help you?" 
                      className="min-h-[120px] bg-slate-50 border-slate-200 focus:bg-white resize-none"
                    />
                  </div>

                  <Button type="button" className="w-full h-14 text-lg bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-xl shadow-lg hover:shadow-xl transition-all">
                    Send Message
                  </Button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
