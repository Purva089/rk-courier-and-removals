import { PageHero } from '@/components/shared/PageHero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - RK Courier and Removals',
  description: 'Privacy Policy for RK Courier and Removals detailing how we collect and use your data.',
};

export default function PrivacyPolicyPage() {
  return (
    <div>
      <PageHero 
        title="Privacy Policy" 
        description="How we handle and protect your personal information."
      />

      <section className="py-20 bg-background">
        <div className="container max-w-4xl">
          <div className="prose prose-lg text-muted-foreground">
            

            <h2 className="text-2xl font-bold text-primary mb-4 mt-8">1. Introduction</h2>
            <p className="mb-6">
              At RK Courier and Removals, we are committed to protecting the privacy and security of our customers' personal information. This Privacy Policy explains how we collect, use, and store information when you use our website or services.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-8">2. Information We Collect</h2>
            <p className="mb-4">When you request a quote or contact us through our website, we may collect the following information:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Contact Information:</strong> Your name, email address, and phone number.</li>
              <li><strong>Service Details:</strong> Information about your removal, courier, or waste clearance requirements, including origin and destination cities.</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-8">3. How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect solely for the purpose of providing our services to you. This includes:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Providing accurate quotes for our services.</li>
              <li>Communicating with you regarding your bookings or inquiries.</li>
              <li>Fulfilling our house removal, courier, or waste clearance services.</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-8">4. Data Storage and Sharing</h2>
            <p className="mb-6">
              We do not sell, rent, or trade your personal information to third parties. Your data is stored securely and is only accessible to authorized personnel who require it to provide our services. We only share information with third parties when strictly necessary to fulfill our service obligations (e.g., sharing a delivery address with our drivers) or when required by law.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-8">5. Cookies and Tracking</h2>
            <p className="mb-6">
              Our website is designed to be privacy-friendly. We do not use intrusive third-party tracking cookies or invasive analytics services. Any cookies used are strictly necessary for the core functionality of the website.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-8">6. Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Request access to the personal data we hold about you.</li>
              <li>Request corrections to any inaccurate or incomplete data.</li>
              <li>Request the deletion of your personal data when it is no longer necessary for the purposes it was collected.</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-8">7. Contact Us</h2>
            <p className="mb-6">
              If you have any questions or concerns about this Privacy Policy or how we handle your data, or if you wish to exercise your rights, please contact us at:<br/><br/>
              <strong>Email:</strong> Rahulkalra3765@gmail.com<br/>
              <strong>Address:</strong> Ground Floor Flat-15 Kensington Road, Cv5 6GG
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
