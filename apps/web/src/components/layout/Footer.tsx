'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Truck, MapPin, Phone, Mail } from 'lucide-react';

const FACEBOOK_URL = "https://www.facebook.com/share/1FDQBDCfLa/?mibextid=wwXIfr";
const INSTAGRAM_URL = "https://www.instagram.com/p/DcfjEZZIlgf/?igsi=emN4N2hpMXFkbzNy";

// Social icons as inline SVGs (lucide-react dropped these brand icons)
const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4 4l16 16M4 20L20 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
  </svg>
);
const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
  </svg>
);
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const Footer = () => {
  const pathname = usePathname();

  // Don't show public footer on admin routes
  

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand & About */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-secondary p-1.5 rounded-md">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">RK Courier and Removals</span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
              Reliable house removal, courier, and waste clearance services tailored to your needs across the UK.
            </p>
            
            <div className="flex gap-4 pt-2">
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-secondary hover:-translate-y-1 transition-all duration-300 bg-primary-foreground/10 p-2 rounded-full">
                <FacebookIcon />
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-secondary hover:-translate-y-1 transition-all duration-300 bg-primary-foreground/10 p-2 rounded-full">
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link href="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-secondary transition-colors">Our Services</Link></li>
              <li><Link href="/track" className="hover:text-secondary transition-colors">Track Shipment</Link></li>
              <li><Link href="/quote" className="hover:text-secondary transition-colors">Request a Quote</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-white">Contact Us</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary shrink-0" />
                <span>Ground Floor Flat-15 Kensington Road, Cv5 6GG</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary shrink-0" />
                <span>+44 7393 081245</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary shrink-0" />
                <span>Rahulkalra3765@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-white">Newsletter</h4>
            <p className="text-sm text-primary-foreground/70">
              Subscribe to our newsletter for the latest local service updates and offers.
            </p>
            <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="bg-primary-foreground/10 border-primary-foreground/20 text-white placeholder:text-primary-foreground/50 focus-visible:ring-secondary"
              />
              <Button className="w-full bg-secondary text-white hover:bg-secondary/90">
                Subscribe
              </Button>
            </form>
          </div>

        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container flex flex-col md:flex-row items-center justify-between py-6 text-xs text-primary-foreground/50">
          <p>© {new Date().getFullYear()} RK Courier and Removals. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
