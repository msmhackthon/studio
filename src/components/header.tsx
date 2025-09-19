
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/itinerary', label: 'Itinerary' },
  { href: '/teams', label: 'Teams' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4 sm:px-6 lg:px-8">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image src="/images/logo.png" alt="Hack-A-Hertz logo" width={40} height={40} data-ai-hint="logo" />
          <span className="font-bold font-headline text-lg hidden sm:inline-block">Hack-A-Hertz</span>
        </Link>
        
        <nav className="hidden md:flex flex-1 items-center justify-center space-x-2 text-sm font-code">
          {navLinks.map(({ href, label }) => {
             const isActive = pathname === href;
             return (
                 <Link
                  key={href}
                  href={href}
                  className={cn(
                    'px-3 py-2 rounded-md transition-colors relative text-foreground/70 hover:text-primary',
                    isActive && 'text-primary'
                  )}
                >
                  {isActive && <span className="text-accent/80 font-bold absolute -left-1 top-1/2 -translate-y-1/2">[</span>}
                  <span className={cn(isActive ? "animate-glitch" : "group-hover:animate-glitch-slow")} data-text={label}>{label}</span>
                  {isActive && <span className="text-accent/80 font-bold absolute -right-1 top-1/2 -translate-y-1/2">]</span>}
                </Link>
            )
          })}
        </nav>

         <div className="hidden md:flex items-center">
            <Button asChild className="group font-bold bg-gradient-to-r from-primary/90 to-green-500/90 hover:from-primary hover:to-green-500 text-primary-foreground shadow-sm hover:shadow-primary/20 transition-all duration-300">
              <Link href="/register">
                Register
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
        </div>


        <div className="flex flex-1 items-center justify-end md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px] bg-background">
              <div className="flex flex-col space-y-4">
                <Link href="/" className="mr-6 flex items-center space-x-2" onClick={() => setIsMobileMenuOpen(false)}>
                  <Image src="/images/logo.png" alt="Hack-A-Hertz logo" width={32} height={32} data-ai-hint="logo" />
                  <span className="font-bold font-headline">Hack-A-Hertz</span>
                </Link>
                <div className="flex flex-col space-y-3 pt-4">
                  {navLinks.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        'text-lg transition-colors hover:text-primary',
                        pathname === href ? 'text-primary' : 'text-foreground/80'
                      )}
                    >
                      {label}
                    </Link>
                  ))}
                   <Button asChild size="lg" className="mt-4 font-bold text-lg" onClick={() => setIsMobileMenuOpen(false)}>
                      <Link href="/register">
                        Register Now
                      </Link>
                    </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
