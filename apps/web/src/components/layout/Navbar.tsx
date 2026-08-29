'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';


const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Don't show public navbar on admin routes
  

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-primary text-primary-foreground p-1.5 rounded-md">
              <Truck className="h-6 w-6" />
            </div>
            <span className="font-bold text-xl text-primary tracking-tight">RK Courier and Removals</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-secondary',
                pathname === link.href ? 'text-secondary' : 'text-foreground/80'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/track">
            <Button variant="outline" className="hidden lg:flex border-secondary text-secondary hover:bg-secondary hover:text-white">Track Shipment</Button>
          </Link>
          <Link href="/quote">
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">Get a Quote</Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
          <div className="md:hidden border-b bg-background overflow-hidden animate-in slide-in-from-top-4 duration-300">
            <div className="container py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-secondary p-2 rounded-md',
                    pathname === link.href ? 'bg-muted text-secondary' : 'text-foreground/80'
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t mt-2">
                <Link href="/track" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full justify-center border-secondary text-secondary hover:bg-secondary hover:text-white">Track Shipment</Button>
                </Link>
                <Link href="/quote" onClick={() => setIsOpen(false)}>
                  <Button className="w-full justify-center bg-secondary text-secondary-foreground">Get a Quote</Button>
                </Link>
              </div>
            </div>
          </div>
        )}

      
    </header>
  );
};
