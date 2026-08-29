import { PageHero } from '@/components/shared/PageHero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - RK Courier and Removals',
  description: 'Terms and conditions for using RK Courier and Removals services.',
};

export default function TermsOfServicePage() {
  return (
    <div>
      <PageHero 
        title="Terms of Service" 
        description="The terms and conditions governing our removal and courier services."
      />

      <section className="py-20 bg-background">
        <div className="container max-w-4xl">
          <div className="prose prose-lg text-muted-foreground">
            

            <h2 className="text-2xl font-bold text-primary mb-4 mt-8">1. Introduction</h2>
            <p className="mb-6">
              These Terms of Service govern the agreement between you (the Customer) and RK Courier and Removals (the Company). By requesting a quote or booking our services, you agree to these terms.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-8">2. Services Provided</h2>
            <p className="mb-4">We provide the following professional services across the UK:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>House Removal:</strong> Professional relocation of household goods and furniture.</li>
              <li><strong>Courier Service:</strong> Collection and delivery of packages, documents, and parcels.</li>
              <li><strong>Waste Clearance:</strong> Collection and responsible disposal of unwanted household items and waste.</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-8">3. Quotes and Pricing</h2>
            <p className="mb-6">
              All quotes provided via our website are estimates based on the information supplied by the customer. Final pricing is subject to confirmation upon detailed assessment of the job requirements. We reserve the right to amend pricing if the scope of work differs significantly from the original request.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-8">4. Customer Responsibilities</h2>
            <p className="mb-4">To ensure a smooth service, the Customer agrees to:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Provide accurate and complete information regarding pickup and delivery locations, access restrictions, and the nature of the items.</li>
              <li>Ensure all items are appropriately packed for transit, unless a packing service has been explicitly booked.</li>
              <li>For Waste Clearance: ensure that no hazardous, toxic, or illegal materials are included in the clearance without prior written agreement.</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-8">5. Liability and Insurance</h2>
            <p className="mb-6">
              We handle all items with the utmost care and professionalism. We carry Public Liability Insurance up to £2 million. However, our liability for loss or damage to items during transit is subject to standard industry terms and our specific insurance policy limitations. We highly recommend customers arrange their own comprehensive insurance for highly valuable or fragile items.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-8">6. Cancellations and Changes</h2>
            <p className="mb-6">
              If you need to cancel or amend a booking, please contact us as soon as possible. Late cancellations may be subject to a cancellation fee to cover administrative costs and lost scheduling time.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-8">7. Service Limitations</h2>
            <p className="mb-6">
              We reserve the right to refuse service if the work poses a health and safety risk to our staff, if the items are deemed illegal or dangerous, or if the access conditions are unsafe.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-8">8. Contact Information</h2>
            <p className="mb-6">
              For any questions regarding these Terms of Service or to make a complaint, please contact:<br/><br/>
              <strong>Email:</strong> Rahulkalra3765@gmail.com<br/>
              <strong>Address:</strong> Ground Floor Flat-15 Kensington Road, Cv5 6GG
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
