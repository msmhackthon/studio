
'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Clock, UserCheck, Mic, Code, Pizza, Award } from 'lucide-react';
import React from 'react';

const itineraryData = [
  { time: '08:00 AM', title: 'Reporting & Check-in', description: 'Initial sync-up. Get your credentials and fuel up for the day.', icon: UserCheck },
  { time: '08:15 AM', title: 'Registration', description: 'System authentication. Secure your node in the network.', icon: UserCheck },
  { time: '08:30 AM', title: 'Opening Ceremonies', description: 'The Genesis. Kick-off protocols and mission briefing.', icon: Mic },
  { time: '09:00 AM', title: 'Hacking Commences', description: 'Execute. The hackathon officially begins. Start building.', icon: Code },
  { time: '01:00 PM', title: 'Lunch Break', description: 'Recharge. Refuel your systems with a catered lunch.', icon: Pizza },
  { time: '01:30 PM', title: 'Project Presentations', description: 'Showcase. Teams present their innovations to the judges.', icon: Mic },
  { time: '03:30 PM', title: 'Award Ceremony', description: 'Victory. Recognition of the champions and their projects.', icon: Award },
  { time: '04:30 PM', title: 'Event Concludes', description: 'Mission complete. Network, celebrate, and look to the future.', icon: Award },
];

export default function ItineraryPage() {
  return (
    <div className="container mx-auto max-w-3xl py-12 px-4 fade-in">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
          Event Schedule
        </h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-foreground/80">
          A full day of innovation, coding, and collaboration. Here’s what to expect.
        </p>
      </div>

      <div className="relative">
        {/* The timeline line */}
        <div className="absolute left-4 md:left-1/2 -translate-x-1/2 h-full w-0.5 bg-border/40" aria-hidden="true"></div>
        
        <div className="space-y-8">
          {itineraryData.map((event, index) => (
            <div key={index} className="relative group">
               {/* Timeline Dot for all screen sizes */}
               <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-card z-10 transition-all duration-300 group-hover:scale-125 group-hover:bg-accent shadow-md"></div>

              {/* Layout for Medium screens and up */}
              <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:gap-x-12 items-start">
                {index % 2 === 0 ? (
                  <>
                    <div className="pt-0.5">
                      <ItineraryCard {...event} />
                    </div>
                    <div className="w-8"></div> {/* Spacer */}
                    <div></div> {/* Empty column */}
                  </>
                ) : (
                  <>
                    <div></div> {/* Empty column */}
                     <div className="w-8"></div> {/* Spacer */}
                     <div className="pt-0.5">
                       <ItineraryCard {...event} />
                    </div>
                  </>
                )}
              </div>

              {/* Layout for Small screens */}
               <div className="md:hidden ml-12 pt-0.5">
                 <ItineraryCard {...event} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const ItineraryCard = ({ time, title, description, icon: Icon }: { time: string, title:string, description: string, icon: React.ElementType }) => (
    <Card className="itinerary-card bg-card/80 backdrop-blur-sm border-border/20 shadow-lg hover:border-primary/80 transition-all duration-300 hover:shadow-primary/10 w-full group-hover:-translate-y-1">
        <CardContent className="flex items-center gap-6 p-6">
            <div className="flex flex-col items-center text-center w-20 flex-shrink-0">
                <Icon className="h-8 w-8 text-primary mb-2 transition-transform duration-300 group-hover:text-accent"/>
                <div className="font-code font-bold text-accent text-sm">
                    <span>{time}</span>
                </div>
            </div>
            <div className="flex-grow">
                <CardTitle data-text={title} className="font-headline text-xl text-primary mb-1 animate-glitch-slow">{title}</CardTitle>
                <p className="text-foreground/80">{description}</p>
            </div>
        </CardContent>
    </Card>
);
