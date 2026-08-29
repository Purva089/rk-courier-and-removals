'use client';

import { PageHero } from '@/components/shared/PageHero';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { quoteRequestSchema } from '@meridian/shared-types';
import * as z from 'zod';

import { useToast } from '@/components/ui/use-toast';
import { useState } from 'react';
import { CheckCircle2, PackageSearch, Globe, ShieldCheck } from 'lucide-react';

type QuoteFormValues = z.infer<typeof quoteRequestSchema>;


// ==========================================
// FORMSPREE CONFIGURATION
// Replace this URL with your unique Formspree endpoint.
// Example: https://formspree.io/f/xabcdyef
// ==========================================
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xyeyzdyj";

export default function QuotePage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, control, reset, formState: { errors } } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteRequestSchema),
    defaultValues: {
      serviceType: 'House Removal'
    }
  });

  const onSubmit = async (data: QuoteFormValues) => {
    setIsSubmitting(true);
    try {
      if (FORMSPREE_ENDPOINT.includes('YOUR_ENDPOINT_HERE')) {
        throw new Error("Form submission is not configured. Please add your Formspree endpoint.");
      }

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setIsSuccess(true);
        reset();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to submit quote request.");
      }
    } catch (error: any) {
      toast({
        title: "Submission Error",
        description: error.message || "Something went wrong. Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <PageHero
        title="Request a Quote"
        description="Get a customized, competitive quote for your logistics needs. Our team will analyze your requirements and get back to you within 24 hours."
      />

      <section className="py-16 md:py-24 bg-muted/20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Form Column */}
            <AnimatedSection direction="up" className="lg:col-span-2">
              <Card className="shadow-lg border-0">
                <CardContent className="p-8 md:p-12">
                  {isSuccess ? (
                    <div className="text-center py-12 flex flex-col items-center">
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle2 className="w-10 h-10 text-green-600" />
                      </div>
                      <h2 className="text-3xl font-bold mb-4 text-primary">Quote Request Received!</h2>
                      <p className="text-lg text-muted-foreground mb-8 max-w-md">
                        Thank you for considering RK Courier and Removals. One of our logistics specialists will review your requirements and contact you within 24 hours with a detailed quote.
                      </p>
                      <Button onClick={() => setIsSuccess(false)} size="lg">Submit Another Request</Button>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-bold mb-8 text-primary border-b pb-4">Shipment Details</h2>
                      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">

                        {/* Contact Information */}
                        <div className="space-y-6">
                          <h3 className="text-lg font-semibold text-muted-foreground">1. Contact Information</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <label className="text-sm font-medium">Full Name <span className="text-destructive">*</span></label>
                              <Input {...register('name')} placeholder="Jane Doe" className="h-12" />
                              {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-medium">Email Address <span className="text-destructive">*</span></label>
                              <Input {...register('email')} type="email" placeholder="jane@company.com" className="h-12" />
                              {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
                            </div>
                            <div className="space-y-2 md:col-span-2">
                              <label className="text-sm font-medium">Phone Number <span className="text-destructive">*</span></label>
                              <Input {...register('phone')} placeholder="+1 (555) 000-0000" className="h-12" />
                              {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
                            </div>
                          </div>
                        </div>

                        {/* Route Details */}
                        <div className="space-y-6 pt-4 border-t">
                          <h3 className="text-lg font-semibold text-muted-foreground">2. Route & Service</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <label className="text-sm font-medium">Origin City <span className="text-destructive">*</span></label>
                              <Input {...register('originCity')} placeholder="e.g. London" className="h-12" />
                              {errors.originCity && <p className="text-sm text-destructive">{errors.originCity.message}</p>}
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-medium">Destination City <span className="text-destructive">*</span></label>
                              <Input {...register('destinationCity')} placeholder="e.g. Manchester" className="h-12" />
                              {errors.destinationCity && <p className="text-sm text-destructive">{errors.destinationCity.message}</p>}
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-medium">Service Type <span className="text-destructive">*</span></label>
                              <Controller
                                name="serviceType"
                                control={control}
                                render={({ field }) => (
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <SelectTrigger className="h-12">
                                      <SelectValue placeholder="Select a service" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="House Removal">House Removal</SelectItem>
                                      <SelectItem value="Courier Service">Courier Service</SelectItem>
                                      <SelectItem value="Waste Clearance">Waste Clearance</SelectItem>
                                    </SelectContent>
                                  </Select>
                                )}
                              />
                              {errors.serviceType && <p className="text-sm text-destructive">{errors.serviceType.message}</p>}
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-medium">Estimated Weight (kg) <span className="text-destructive">*</span></label>
                              <Input
                                type="number"
                                step="0.1"
                                className="h-12"
                                placeholder="0.0"
                                {...register('packageWeightKg', { valueAsNumber: true })}
                              />
                              {errors.packageWeightKg && <p className="text-sm text-destructive">{errors.packageWeightKg.message}</p>}
                            </div>
                          </div>
                        </div>

                        {/* Additional Information */}
                        <div className="space-y-6 pt-4 border-t">
                          <h3 className="text-lg font-semibold text-muted-foreground">3. Additional Information</h3>
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Message or Special Requirements</label>
                            <Textarea
                              {...register('message')}
                              placeholder="Dimensions, hazardous materials, temperature control needs, etc."
                              rows={5}
                              className="resize-none"
                            />
                            {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
                          </div>
                        </div>

                        <Button type="submit" size="lg" className="w-full h-14 text-lg bg-primary hover:bg-primary/90" disabled={isSubmitting}>
                          {isSubmitting ? 'Submitting Request...' : 'Get My Quote'}
                        </Button>
                      </form>
                    </>
                  )}
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Info Column */}
            <AnimatedSection direction="left" delay={0.2} className="space-y-6">
              <div className="bg-primary text-primary-foreground rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4">Why choose RK Courier and Removals?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Globe className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-white">Reliable & Professional</h4>
                      <p className="text-sm text-primary-foreground/70">Dependable removal and courier services delivered with care.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-white">Insured</h4>
                      <p className="text-sm text-primary-foreground/70">Public Liability Insurance up to £2 million, giving you peace of mind that you're in safe hands.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <PackageSearch className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-white">Local UK Service</h4>
                      <p className="text-sm text-primary-foreground/70">A trusted local service focused on customers across the UK.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white border rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4 text-primary">Need immediate help?</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  If you have an urgent request or prefer to speak with someone directly, our sales team is available 24/7.
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-3">
                    <span className="font-medium text-sm">UK & England</span>
                    <a href="tel:+447393081245" className="font-bold text-secondary hover:underline">+44 7393 081245</a>
                  </div>
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>
    </div>
  );
}
