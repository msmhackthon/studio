import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Clock, Users, Award, Pizza, Mic } from 'lucide-react';

const itineraryData = [
  { time: 'Day 1 - 09:00 AM', title: 'Registration & Breakfast', description: 'Check-in, grab your badge, and enjoy a light breakfast.', icon: Clock },
  { time: 'Day 1 - 10:00 AM', title: 'Opening Ceremony', description: 'Kick-off speeches, theme announcement, and rules overview.', icon: Mic },
  { time: 'Day 1 - 11:00 AM', title: 'Hacking Begins!', description: 'Time to start building. Good luck, hackers!', icon: Award },
  { time: 'Day 1 - 01:00 PM', title: 'Lunch Break', description: 'Refuel with a delicious lunch.', icon: Pizza },
  { time: 'Day 1 - 03:00 PM', title: 'Workshop: Intro to GenAI', description: 'Learn the fundamentals of building with generative AI.', icon: Users },
  { time: 'Day 1 - 07:00 PM', title: 'Dinner', description: 'Evening meal to keep the energy high.', icon: Pizza },
  { time: 'Day 2 - 09:00 AM', title: 'Project Submissions Deadline', description: 'Finalize your projects and submit them for judging.', icon: Clock },
  { time: 'Day 2 - 10:00 AM', title: 'Project Demos', description: 'Teams present their hacks to the judges and audience.', icon: Mic },
  { time: 'Day 2 - 01:00 PM', title: 'Closing Ceremony & Awards', description: 'Announcement of winners and closing remarks.', icon: Award },
];

export default function ItineraryPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4 fade-in">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">Event Itinerary</h1>
        <p className="mt-4 text-lg text-foreground/80">Plan your hackathon experience. Don't miss a beat!</p>
      </div>

      <div className="relative">
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border/20" aria-hidden="true"></div>
        
        <div className="space-y-12">
          {itineraryData.map((event, index) => (
            <div key={index} className="relative flex items-center" style={{ justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end' }}>
               <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
              <Card className="w-full max-w-md bg-card/80 backdrop-blur-sm border-border/20 shadow-lg hover:border-primary transition-all duration-300 hover:shadow-primary/10">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <event.icon className="h-8 w-8 text-primary" />
                    <div>
                      <CardTitle className="font-headline text-xl">{event.title}</CardTitle>
                      <CardDescription className="text-sm text-foreground/60">{event.time}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">{event.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
