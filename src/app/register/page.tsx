import { ArrowRight, User, Users, DollarSign, HelpCircle, CheckCircle, Ticket, Utensils, Gift, BrainCircuit, Trophy, Wifi, Award, Users2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Link from 'next/link';

const keyInfo = [
  {
    icon: <User className="h-8 w-8 text-primary" />,
    title: "Who Can Register?",
    description: "Participation is open to all students from Grade 6 to Grade 12.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Team Size",
    description: "You can register as a solo participant or in a team of up to 3 members.",
  },
  {
    icon: <DollarSign className="h-8 w-8 text-primary" />,
    title: "Registration Fee",
    description: "Team registration is ₹2700 (max 3 members), and individual registration is ₹899.",
  },
];

const whatsIncluded = [
    { icon: <Ticket className="h-6 w-6 text-primary" />, text: "Full access to the one-day event" },
    { icon: <Utensils className="h-6 w-6 text-primary" />, text: "Catered lunch, snacks, and beverages" },
    { icon: <Gift className="h-6 w-6 text-primary" />, text: "Exclusive Hack-A-Hertz swag and goodies" },
    { icon: <Trophy className="h-6 w-6 text-primary" />, text: "Opportunity to win epic prizes and awards" },
    { icon: <Users2 className="h-6 w-6 text-primary" />, text: "Networking with peers and professionals" },
    { icon: <Award className="h-6 w-6 text-primary" />, text: "Certificate of Participation" },
    { icon: <Wifi className="h-6 w-6 text-primary" />, text: "High-speed internet and power supply" },
]

const faqItems = [
  {
    question: "Do I need to have a team before registering?",
    answer: "Not at all! You are welcome to register and compete as an individual participant. Team formation is optional, not required."
  },
  {
    question: "Is there a deadline for registration?",
    answer: "Yes, please register before October 1st, 2025 to secure your spot. We have limited seats available, so we encourage you to register early!"
  },
  {
    question: "What is the process for payment?",
    answer: "After submitting your registration form, our team will review it. Once approved, you will receive a confirmation email with payment details. Your registration is not complete until the payment is received."
  },
  {
    question: "What should I bring to the event?",
    answer: "You'll need your laptop, charger, and any other hardware you plan to use for your project. Most importantly, bring your ideas, curiosity, and a collaborative spirit! We'll provide the rest."
  },
  {
    question: "I've registered via the Google Form. What's next?",
    answer: "After you register, we'll review your submission. You will receive a confirmation email with more details about the event after everything has been checked. Make sure to check your spam folder!"
  },
  {
    question: "I have more questions. Who can I contact?",
    answer: "We're happy to help! You can reach out to us via email at msmhackathon@meridianschool.in or check our contact page for more options. We'll get back to you as soon as possible."
  }
];


export default function RegisterPage() {
  return (
    <div className="container mx-auto max-w-5xl py-12 px-4 fade-in">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-green-300">
          Secure Your Spot
        </h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-foreground/80">
          Join the inaugural Hack-A-Hertz event. The journey begins here.
        </p>
      </div>

       <div className="mb-16">
        <div className="text-center mb-8">
            <h2 className="font-headline text-3xl font-bold text-primary">Choose Your Path</h2>
            <p className="mt-2 text-foreground/70">Whether you're a lone wolf or part of a pack, your journey starts here.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <RegistrationCard
                icon={<User className="h-12 w-12 text-primary group-hover:text-green-400 transition-colors duration-300" />}
                title="Individual"
                description="Ready to forge your own path? Register as a solo participant and show what you can do."
                href="https://docs.google.com/forms/d/1f7owAMKz6H5QZHAkn_UGxRnWpNRqKLTRbchlNGiDUHY/viewform?chromeless=1&edit_requested=true"
            />
            <RegistrationCard
                icon={<Users className="h-12 w-12 text-primary group-hover:text-accent transition-colors duration-300" />}
                title="Team"
                description="Have a crew ready to build? Register your team and collaborate on something amazing."
                href="https://docs.google.com/forms/d/1f7owAMKz6H5QZHAkn_UGxRnWpNRqKLTRbchlNGiDUHY/viewform?chromeless=1&edit_requested=true"
            />
        </div>
         <p className="mt-6 text-sm text-center text-foreground/60">
            Please note: Registration fees are non-refundable.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {keyInfo.map((item, index) => (
          <Card key={index} className="bg-card/50 border-border/20 text-center p-6 flex flex-col items-center transform hover:-translate-y-2 transition-transform duration-300 hover:border-primary hover:shadow-primary/20 hover:shadow-xl">
             {item.icon}
             <h3 className="mt-4 font-headline text-xl font-bold">{item.title}</h3>
             <p className="mt-2 text-foreground/70 text-sm">{item.description}</p>
          </Card>
        ))}
      </div>

      <div className="border-t border-border/50 my-12"></div>

       <div className="mb-16">
        <div className="text-center mb-8">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">What's Included?</h2>
        </div>
        <Card className="bg-card/50 border-border/20 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
            {whatsIncluded.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                {item.icon}
                <span className="text-lg text-foreground/80">{item.text}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>


      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <HelpCircle className="h-10 w-10 text-primary mx-auto mb-4" />
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Registration FAQs</h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index+1}`}>
              <AccordionTrigger className="text-lg font-semibold hover:text-primary text-left">{item.question}</AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

    </div>
  );
}


const RegistrationCard = ({ icon, title, description, href }: { icon: React.ReactNode, title: string, description: string, href: string }) => (
    <div className="group relative">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <Card className="relative bg-card/80 backdrop-blur-md h-full flex flex-col text-center items-center p-8 transition-all duration-300 transform group-hover:shadow-2xl group-hover:shadow-primary/20">
            <div className="mb-4">{icon}</div>
            <CardTitle className="font-headline text-2xl text-primary">{title}</CardTitle>
            <p className="mt-2 text-foreground/70 flex-grow">{description}</p>
            <Button asChild size="lg" className="mt-6 font-bold text-lg group/button bg-gradient-to-r from-primary/90 to-green-500/90 hover:from-primary hover:to-green-500 text-primary-foreground shadow-sm hover:shadow-primary/20 transition-all duration-300">
                <Link href={href} target="_blank" rel="noopener noreferrer">
                    Register Now <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/button:translate-x-1" />
                </Link>
            </Button>
        </Card>
    </div>
);
