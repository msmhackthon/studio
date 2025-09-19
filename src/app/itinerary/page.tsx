
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
          Hackathon Schedule
        </h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-foreground/80">
          A full day of innovation, coding, and collaboration. Here’s what to expect.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-4 md:left-1/2 -translate-x-1/2 h-full w-0.5 bg-border/20" aria-hidden="true"></div>
        
        <div className="space-y-8">
          {itineraryData.map((event, index) => (
            <div key={index} className="md:grid md:grid-cols-[1fr_auto_1fr] md:gap-x-8 items-center">
              {index % 2 === 0 ? (
                <>
                  <ItineraryCard {...event} />
                  <div className="hidden md:flex justify-center">
                    <div className="w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
                  </div>
                  <div></div>
                </>
              ) : (
                 <>
                  <div className="hidden md:block"></div>
                   <div className="hidden md:flex justify-center">
                    <div className="w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
                  </div>
                  <ItineraryCard {...event} />
                </>
              )}
               <div className="flex items-center md:hidden mt-4">
                  <div className="absolute left-4 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10"></div>
                  <div className="pl-8 w-full md:hidden">
                     {index % 2 !== 0 && <ItineraryCard {...event} />}
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const ItineraryCard = ({ time, title, description, icon: Icon }: { time: string, title:string, description: string, icon: React.ElementType }) => (
    <Card className="bg-card/80 backdrop-blur-sm border-border/20 shadow-lg hover:border-primary transition-all duration-300 hover:shadow-primary/10 w-full">
        <CardHeader>
            <div className='flex justify-between items-baseline'>
                <CardTitle className="font-headline text-xl text-primary">{title}</CardTitle>
                <div className="text-sm font-code font-bold text-accent">
                    <span>{time}</span>
                </div>
            </div>
        </CardHeader>
        <CardContent className="flex items-start gap-4">
            <Icon className="h-8 w-8 text-primary/70 flex-shrink-0 mt-1"/>
            <p className="text-foreground/80">{description}</p>
        </CardContent>
    </Card>
);
