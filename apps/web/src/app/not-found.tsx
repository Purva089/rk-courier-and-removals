import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Truck } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 bg-slate-50">
      <div className="bg-primary/10 p-6 rounded-full mb-8">
        <Truck className="w-16 h-16 text-primary" />
      </div>
      <h1 className="text-5xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-slate-800 mb-6">Page Not Found</h2>
      <p className="text-muted-foreground max-w-md mb-10">
        We couldn't find the page you were looking for. It might have been moved or the link might be incorrect.
      </p>
      <Link href="/">
        <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8">
          Back to Home
        </Button>
      </Link>
    </div>
  );
}
