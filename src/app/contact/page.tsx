import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-7xl py-12 px-4 fade-in">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">Get In Touch</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-foreground/80">
          Whether you have a question, a partnership proposal, or just want to say hello, we're here.
        </p>
      </div>

      <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 mb-16 justify-center">
        <Card className="lg:col-span-1 border-border/20 flex flex-col max-w-lg mx-auto w-full shadow-lg hover:shadow-primary/10 transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="font-headline text-3xl text-accent flex items-center gap-2"><MapPin className="h-8 w-8 text-primary" /> Event Venue & Info</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-lg flex-grow">
            <div className="flex items-start gap-4">
               <div className="mt-1 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold">Location</h3>
                <Link href="https://maps.app.goo.gl/PqNoiXwALiSFwdRR6" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground/80 hover:text-primary transition-colors">
                  100 Feet Rd, Siddhi Vinayak Nagar, Madhapur, Hyderabad, Telangana 500081
                </Link>
              </div>
            </div>
            <div className="flex items-start gap-4">
               <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <a href="mailto:msmhackathon@meridianschool.in" className="text-foreground/80 hover:text-primary transition-colors text-sm">msmhackathon@meridianschool.in</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <div className="space-y-1 text-sm text-foreground/80">
                  <p><span className="font-medium text-foreground/90">IT HOD:</span> <a href="tel:+918390999289" className="hover:text-primary transition-colors">+91 83909 99289</a></p>
                  <p><span className="font-medium text-foreground/90">Chief Organizer:</span> <a href="tel:+919019806478" className="hover:text-primary transition-colors">+91 90198 06478</a></p>
                </div>
              </div>
            </div>
             <div className="pt-4 border-t border-border/20">
                <Button asChild className="w-full font-bold group bg-gradient-to-r from-primary/90 to-green-500/90 hover:from-primary hover:to-green-500 text-primary-foreground">
                    <a href="mailto:msmhackathon@meridianschool.in?subject=Sponsorship Inquiry for Hack-A-Hertz">
                    Become a Sponsor
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </a>
                </Button>
            </div>
          </CardContent>
        </Card>
        
      </div>

       <div className="text-center mb-8">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Find Your Way</h2>
       </div>
       <Card className="overflow-hidden border-border/20 shadow-lg">
          <div className="aspect-w-16 aspect-h-9 h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.131039950989!2d78.38127531076796!3d17.453441083375953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91627fe20fdd%3A0xa931fdeb7fc541f!2sMeridian%20School%20-%20Madhapur!5e0!3m2!1sen!2sin!4v1757264470894!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale invert-[90%] contrast-[80%] hover:grayscale-0 hover:invert-0 hover:contrast-100 transition-all duration-300 w-full h-full"
            ></iframe>
          </div>
        </Card>

    </div>
  );
}
