import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Rocket, Target, Zap, Sparkles, BrainCircuit, Code, Award, Cpu, TrendingUp, HeartHandshake } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="relative bg-card/50 py-20 md:py-32">
        <div className="absolute inset-0">
          <Image 
            src="https://picsum.photos/1600/800?random=a1"
            alt="Innovative minds at work"
            data-ai-hint="collaboration innovation"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
        </div>
        <div className="container mx-auto max-w-6xl text-center relative">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-green-300">
              About Us
          </h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-foreground/80">
            This is the inaugural <span className="font-bold text-primary">Hack-A-Hertz</span>, proudly hosted by the innovators at <Link href="https://www.meridianmadhapur.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-accent hover:underline">Meridian School Madhapur</Link>. We are not just hosting an event; we are igniting the spark of a new legacy.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <Rocket className="h-12 w-12 text-primary mx-auto mb-4 transition-transform duration-300 group-hover:rotate-12" />
              <h2 className="font-headline text-2xl font-bold">Our Mission</h2>
              <p className="mt-2 text-foreground/70">To launch a new era of hackathons where developers can challenge themselves, create groundbreaking solutions, and redefine the future of technology.</p>
            </div>
            <div className="flex flex-col items-center">
              <Target className="h-12 w-12 text-primary mx-auto mb-4 transition-transform duration-300 group-hover:scale-110" />
              <h2 className="font-headline text-2xl font-bold">Our Vision</h2>
              <p className="mt-2 text-foreground/70">To become the premier launchpad for builders and thinkers, celebrated for high-impact challenges and a vibrant, inclusive community from day one.</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4 transition-transform duration-300 group-hover:text-yellow-400" />
              <h2 className="font-headline text-2xl font-bold">Our Values</h2>
              <p className="mt-2 text-foreground/70">Fostering collaboration over competition, a passion for continuous learning, and building a welcoming space for all pioneers of technology.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">What Makes Us Different?</h2>
                <p className="mt-3 max-w-2xl mx-auto text-lg text-foreground/70">We're not just another hackathon. We're a catalyst for change.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <InfoCard 
                    icon={BrainCircuit}
                    title="Real-World Impact"
                    description="Our challenges are sourced from real-world problems, giving you the chance to build solutions that matter and can be implemented."
                />
                <InfoCard 
                    icon={Code}
                    title="Mentorship-Driven"
                    description="Gain unparalleled access to industry experts who provide hands-on guidance, code reviews, and career advice throughout the event."
                />
                <InfoCard 
                    icon={Award}
                    title="Beyond the Prize"
                    description="While the prizes are great, we focus on the entire experience—learning, networking, and personal growth are the true takeaways."
                />
                <InfoCard
                    icon={HeartHandshake}
                    title="Inclusive Community"
                    description="We champion a welcoming and diverse environment where every participant, regardless of background, feels empowered to contribute their best."
                />
                <InfoCard
                    icon={Cpu}
                    title="Cutting-Edge Tech"
                    description="Get hands-on with the latest APIs, hardware, and platforms from our sponsors, pushing the boundaries of what's possible."
                />
            </div>
        </div>
      </section>

      {/* First Edition Section */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container mx-auto max-w-6xl">
            <div className="relative rounded-lg bg-gradient-to-r from-primary via-green-400 to-accent p-1 shadow-2xl shadow-primary/20 hover:shadow-green-400/20 transition-shadow duration-300">
                <div className="bg-card/90 backdrop-blur-sm rounded-md text-center p-8 md:p-12 lg:p-16">
                    <Zap className="h-16 w-16 text-primary mx-auto mb-6 transform transition-transform duration-300 hover:scale-110 hover:text-green-400" />
                    <h3 className="font-headline text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-green-300">First Edition: Hack-A-Hertz 1.0Hz</h3>
                    <p className="mt-6 text-lg text-foreground/80 max-w-4xl mx-auto space-y-4">
                      <span>You are not just a participant; you are a pioneer. This is ground zero. The first Hack-A-Hertz is where a new pulse of innovation begins. We're assembling the architects of tomorrow to build, break, and reinvent. The atmosphere will be electric, the code will be revolutionary, and you are at the heart of it all.</span>
                      <span>This matters because we believe true innovation blossoms when raw talent is given a space to experiment freely. We're here to empower the next wave of tech leaders—like you—to tackle meaningful challenges and build what's next. By joining us for this intense, one-day event, you're not just coding; you're writing the first chapter of a new legacy. Welcome to the beginning.</span>
                    </p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}

const InfoCard = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => (
    <Card className="bg-card/80 backdrop-blur-sm border-border/20 shadow-lg hover:border-primary/50 transition-all duration-300 hover:shadow-primary/10 hover:-translate-y-2">
        <CardHeader className="flex-row items-center gap-4">
            <Icon className="h-10 w-10 text-primary flex-shrink-0" />
            <CardTitle className="font-headline text-2xl text-primary">{title}</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-foreground/70">{description}</p>
        </CardContent>
    </Card>
);
