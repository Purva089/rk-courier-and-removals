import dynamic from 'next/dynamic';

// EAGER — above-the-fold icons (direct imports, no dynamic)
export { Truck } from 'lucide-react';
export { PackageCheck } from 'lucide-react';
export { ArrowRight } from 'lucide-react';
export { Home as HomeIcon } from 'lucide-react';
export { CheckCircle2 } from 'lucide-react';
export { Menu, X } from 'lucide-react';

// LAZY (ssr: true + Suspense) — below-the-fold icons
export const PlaneIcon = dynamic(() => import('lucide-react').then(m => m.Plane), { 
  ssr: true, 
  loading: () => <svg className="w-6 h-6" aria-hidden="true" /> 
});
export const ShipIcon = dynamic(() => import('lucide-react').then(m => m.Ship), { 
  ssr: true, 
  loading: () => <svg className="w-6 h-6" aria-hidden="true" /> 
});
export const FileTextIcon = dynamic(() => import('lucide-react').then(m => m.FileText), { 
  ssr: true, 
  loading: () => <svg className="w-6 h-6" aria-hidden="true" /> 
});
export const MapPinIcon = dynamic(() => import('lucide-react').then(m => m.MapPin), { 
  ssr: true, 
  loading: () => <svg className="w-6 h-6" aria-hidden="true" /> 
});
export const PhoneIcon = dynamic(() => import('lucide-react').then(m => m.Phone), { 
  ssr: true, 
  loading: () => <svg className="w-6 h-6" aria-hidden="true" /> 
});
export const MailIcon = dynamic(() => import('lucide-react').then(m => m.Mail), { 
  ssr: true, 
  loading: () => <svg className="w-6 h-6" aria-hidden="true" /> 
});
