import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CodeRain from '@/components/code-rain';
import CountdownTimer from '@/components/countdown-timer';
import { ArrowRight, BrainCircuit, Code, Users, Trophy, ChevronDown, Award, Mic, Code2, Cpu, Globe, Smartphone, Bot, Database, Cloud, Wifi, ShieldCheck, AreaChart, Landmark } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const whyParticipateItems = [
  {
    icon: <BrainCircuit className="h-10 w-10 text-primary" />,
    title: 'Innovate & Learn',
    description: 'Tackle real-world problems, learn new technologies from expert mentors, and push the boundaries of your skills in a high-energy environment.',
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: 'Collaborate & Network',
    description: 'Connect with fellow developers, designers, and innovators. Form teams, share ideas, and build lasting relationships with peers and industry leaders.',
  },
  {
    icon: <Trophy className="h-10 w-10 text-primary" />,
    title: 'Build Your Portfolio',
    description: 'Create a standout project that showcases your skills to future employers. A hackathon project is a testament to your ability to build and innovate under pressure.',
  },
];

const techStacks = [
    {
        icon: <Globe className="h-10 w-10 text-primary" />,
        title: "Web & Full-Stack",
        description: "Next.js, React, Angular, Vue, Svelte, Node.js, Django, Flask, Ruby on Rails, Go, Rust",
    },
    {
        icon: <Smartphone className="h-10 w-10 text-primary" />,
        title: "Mobile Development",
        description: "React Native, Flutter, Swift (iOS), Kotlin (Android), Xamarin, NativeScript",
    },
    {
        icon: <Bot className="h-10 w-10 text-primary" />,
        title: "AI & Machine Learning",
        description: "Python (TensorFlow, PyTorch, Scikit-learn), R, Genkit, LangChain, OpenAI API",
    },
    {
        icon: <Database className="h-10 w-10 text-primary" />,
        title: "Databases",
        description: "PostgreSQL, MySQL, MongoDB, Firebase Firestore, Redis, Supabase",
    },
    {
        icon: <Cloud className="h-10 w-10 text-primary" />,
        title: "Cloud & DevOps",
        description: "Docker, Kubernetes, GitHub Actions, AWS, Google Cloud, Azure, Firebase",
    },
    {
        icon: <Wifi className="h-10 w-10 text-primary" />,
        title: "IoT & Hardware",
        description: "Raspberry Pi, Arduino, ESP32, MQTT, PlatformIO, C/C++",
    },
    {
        icon: <ShieldCheck className="h-10 w-10 text-primary" />,
        title: "Cybersecurity",
        description: "Wireshark, Metasploit, Nmap, Burp Suite, Kali Linux",
    },
    {
        icon: <AreaChart className="h-10 w-10 text-primary" />,
        title: "Data Science & Viz",
        description: "Pandas, NumPy, Matplotlib, Seaborn, D3.js, Tableau",
    },
     {
        icon: <Landmark className="h-10 w-10 text-primary" />,
        title: "FinTech",
        description: "Stripe API, Plaid API, Solidity, QuantLib, Algorithmic Trading",
    },
    {
        icon: <Code2 className="h-10 w-10 text-primary" />,
        title: "And More...",
        description: "Web3, Blockchain, AR/VR, Game Dev (Unity, Unreal). Your creativity is the only limit!",
    },
]


const faqItems = [
  {
    question: "What if I don't have a team?",
    answer: "You can absolutely compete as a solo participant. If you wish to be in a team, you must form it on your own before registering. We will not be facilitating team formation at the event."
  },
  {
    question: "How does judging work and what are the criteria?",
    answer: "Projects will be evaluated by a panel of judges from the tech industry. The key criteria are: Technical Complexity, Creativity & Originality, Design & User Experience, and the quality of the final presentation or demo. All projects must be built during the hackathon."
  },
  {
    question: "Will there be technical support available?",
    answer: "Absolutely. We will have experienced industry experts available throughout the event. They can help with technical challenges, offer advice on your project's direction, and provide feedback. There will also be scheduled workshops on popular technologies."
  },
  {
    question: "Who owns the intellectual property of the projects?",
    answer: "You and your team own 100% of the intellectual property you create during the hackathon. You are free to continue developing your project after the event. Hack-A-Hertz does not claim any ownership of your work."
  }
]


export default function Home() {
  const hackathonStartDate = '2025-10-08T08:00:00';

  return (
    <div className="flex flex-col items-center">
      <section className="relative w-full h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden">
        <CodeRain />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        <div className="relative z-10 p-4 animate-fade-in-up">
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-green-300">
            Hack-A-Hertz 2025
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-foreground/80">
            The future of hacking is now. Join the brightest minds to innovate, build, and conquer the challenges of tomorrow.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="font-bold text-lg group bg-gradient-to-r from-primary/90 to-green-500/90 hover:from-primary hover:to-green-500 text-primary-foreground">
              <Link href="/register">
                Register Now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <CountdownTimer targetDate={hackathonStartDate} />
          </div>
        </div>
        <div className="absolute bottom-8 z-10">
          <ChevronDown className="h-8 w-8 text-primary/50 animate-bounce" />
        </div>
      </section>

      <section id="why" className="w-full max-w-7xl py-16 px-4 md:py-24">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Why Participate?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-foreground/80 text-lg">
            Elevate your skills, expand your network, and build something extraordinary.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {whyParticipateItems.map((item, index) => (
            <Card key={index} className="bg-card/50 border-border/50 text-center p-8 flex flex-col items-center transform hover:-translate-y-2 transition-transform duration-300 hover:border-primary hover:shadow-primary/20 hover:shadow-xl">
              {item.icon}
              <h3 className="mt-6 font-headline text-2xl font-bold">{item.title}</h3>
              <p className="mt-2 text-foreground/70">{item.description}</p>
            </Card>
          ))}
        </div>
      </section>
      
      <div className="w-full max-w-6xl border-t border-border/50"></div>

       <section id="technologies" className="w-full max-w-7xl py-16 px-4 md:py-24">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Your Stack, Your Choice</h2>
          <p className="mt-4 max-w-3xl mx-auto text-foreground/80 text-lg">
            You have the freedom to use any technology you want. To spark your imagination, here are some popular choices across different domains. Mix, match, and innovate!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {techStacks.map((item, index) => (
            <Card key={index} className="bg-card/50 border-border/50 text-center p-8 flex flex-col items-center transform hover:-translate-y-2 transition-transform duration-300 hover:border-primary hover:shadow-primary/20 hover:shadow-xl">
              {item.icon}
              <h3 className="mt-6 font-headline text-xl font-bold">{item.title}</h3>
              <p className="mt-2 text-foreground/70 text-sm">{item.description}</p>
            </Card>
          ))}
        </div>
      </section>
      
      <div className="w-full max-w-6xl border-t border-border/50"></div>

      <section id="faq" className="w-full max-w-4xl py-16 px-4 md:py-24">
        <div className="text-center mb-12">
          <h2 className="font-times text-3xl md:text-4xl font-bold text-primary">FAQ's</h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index+1}`}>
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">{item.question}</AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <div className="w-full max-w-6xl border-t border-border/50"></div>
    </div>
  );
}
