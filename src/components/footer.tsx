import { Instagram, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background/95">
      <div className="container py-6 flex flex-col md:flex-row items-center justify-around gap-6">
        <div className="flex flex-col items-center gap-2">
            <p className="text-sm text-foreground/60 text-center">
                © {new Date().getFullYear()} Hack-A-Hertz. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link href="https://x.com/hackahertz" aria-label="X" target="_blank" rel="noopener noreferrer">
                <X className="h-5 w-5 text-foreground/60 transition-colors hover:text-primary" />
              </Link>
              <Link href="https://www.instagram.com/hackahertz/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5 text-foreground/60 transition-colors hover:text-primary" />
              </Link>
            </div>
        </div>
        <div className="flex items-center gap-6">
           <Image
            src="/images/meridian-logo.png"
            alt="Meridian School Madhapur Logo"
            data-ai-hint="school logo"
            width={120}
            height={40}
            className="object-contain"
          />
          <Image
            src="/images/logo.png"
            alt="Hack-A-Hertz Logo"
            data-ai-hint="hackathon logo"
            width={128}
            height={40}
            className="object-contain"
            />
        </div>
      </div>
    </footer>
  );
}
