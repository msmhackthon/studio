
import { Card } from '@/components/ui/card';
import { Hourglass } from 'lucide-react';

export default function TeamsPage() {
  return (
    <div className="container mx-auto max-w-7xl py-12 px-4 md:px-8 lg:px-12 fade-in">
      <div className="text-center mb-16">
        <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-green-300">Meet the Crew</h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto text-foreground/80">
          The passionate students making Hack-A-Hertz happen. We're a team of innovators, designers, and tech enthusiasts working to create an unforgettable experience.
        </p>
      </div>

      <div className="mb-20">
        <h2 className="font-headline text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary/80 tracking-wider">Core Team</h2>
        <div className="flex justify-center">
            <Card className="bg-card/50 border-border/20 text-center p-8 flex flex-col items-center justify-center transform hover:-translate-y-2 transition-transform duration-300 hover:border-primary hover:shadow-primary/20 hover:shadow-xl w-full max-w-md h-64">
                <Hourglass className="h-16 w-16 text-primary mb-4 animate-spin" />
                <h3 className="font-headline text-2xl font-bold">Revealing Soon...</h3>
                <p className="mt-2 text-foreground/70">The masterminds are currently in stealth mode. Stay tuned!</p>
            </Card>
        </div>
      </div>
      
    </div>
  );
}
