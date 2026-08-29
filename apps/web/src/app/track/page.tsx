'use client';

import { PageHero } from '@/components/shared/PageHero';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useToast } from '@/components/ui/use-toast';
import { useState } from 'react';
import { MapPin, Mail, Hash } from 'lucide-react';
import Link from 'next/link';

// ==========================================
// FORMSPREE CONFIGURATION
// Replace this URL with your unique Formspree endpoint.
// Example: https://formspree.io/f/xabcdyef
// ==========================================
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_ENDPOINT_HERE";

const trackRequestSchema = z.object({
  trackingNumber: z.string().min(3, "Tracking number is required"),
  email: z.string().email("Please enter a valid email address"),
});

type TrackFormValues = z.infer<typeof trackRequestSchema>;

export default function TrackPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<TrackFormValues>({
    resolver: zodResolver(trackRequestSchema),
  });

  const onSubmit = async (data: TrackFormValues) => {
    setIsSubmitting(true);
    try {
      if (FORMSPREE_ENDPOINT.includes('YOUR_ENDPOINT_HERE')) {
        throw new Error("Form submission is not configured. Please add your Formspree endpoint.");
      }

      // Add a subject line for Formspree to make the email obvious
      const payload = {
        _subject: `Tracking Status Request for ${data.trackingNumber}`,
        ...data
      };

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setIsSuccess(true);
        reset();
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to submit tracking request.");
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
        title="Track Shipment"
        description="Request the latest status update for your delivery or removal service."
        backgroundImage="/images/hero-bg.jpg"
      />

      <section className="py-20 bg-muted/30">
        <div className="container max-w-3xl">
          <AnimatedSection>
            <Card className="border-0 shadow-xl overflow-hidden rounded-2xl bg-card">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 text-secondary mb-4">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight text-primary">Check Delivery Status</h2>
                  <p className="text-muted-foreground mt-2 max-w-md mx-auto">
                    Enter your tracking number or reference ID below. We will send you an email with the latest location and estimated time of arrival.
                  </p>
                </div>

                {isSuccess ? (
                  <div className="bg-green-50 text-green-800 p-8 rounded-xl text-center border border-green-100">
                    <h3 className="text-2xl font-bold mb-2">Request Sent!</h3>
                    <p className="mb-6">We have received your request and will email you the latest status update shortly.</p>
                    <Button onClick={() => setIsSuccess(false)} size="lg" className="bg-green-600 hover:bg-green-700">Check Another Package</Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium flex items-center gap-2">
                        <Hash className="w-4 h-4 text-secondary" />
                        Tracking Number / Reference ID
                      </label>
                      <Input 
                        {...register('trackingNumber')} 
                        placeholder="e.g. RK-12345678" 
                        className="h-12 text-lg uppercase" 
                      />
                      {errors.trackingNumber && <p className="text-sm text-destructive">{errors.trackingNumber.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium flex items-center gap-2">
                        <Mail className="w-4 h-4 text-secondary" />
                        Email Address
                      </label>
                      <Input 
                        {...register('email')} 
                        type="email" 
                        placeholder="Where should we send the update?" 
                        className="h-12" 
                      />
                      {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full h-14 text-lg bg-primary hover:bg-primary/90" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending Request...' : 'Request Status Update'}
                    </Button>
                    
                    <p className="text-xs text-center text-muted-foreground pt-4">
                      Need immediate assistance? <Link href="/contact" className="text-secondary hover:underline">Contact our support team directly</Link>.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
