'use client';

import { useState, useEffect } from 'react';

type TimeUnit = {
  value: number;
  label: string;
};

type TimeLeft = {
  days: TimeUnit;
  hours: TimeUnit;
  minutes: TimeUnit;
  seconds: TimeUnit;
};

const CountdownTimer = ({ targetDate }: { targetDate: string }) => {
  const calculateTimeLeft = (): TimeLeft | null => {
    const difference = +new Date(targetDate) - +new Date();
    if (difference > 0) {
      return {
        days: { value: Math.floor(difference / (1000 * 60 * 60 * 24)), label: 'Days' },
        hours: { value: Math.floor((difference / (1000 * 60 * 60)) % 24), label: 'Hours' },
        minutes: { value: Math.floor((difference / 1000 / 60) % 60), label: 'Mins' },
        seconds: { value: Math.floor((difference / 1000) % 60), label: 'Secs' },
      };
    }
    return null;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    // Initial calculation on client-side
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) {
    return (
      <div className="font-headline text-lg md:text-xl text-primary">The event has started!</div>
    );
  }

  const timeUnits = Object.values(timeLeft);

  return (
    <div className="flex items-center gap-2 sm:gap-4 p-2 sm:p-3 rounded-lg bg-card/50 backdrop-blur-sm border border-border/20">
      {timeUnits.map((unit, index) => (
        <div key={unit.label} className="flex items-center gap-2 sm:gap-4">
          <div className="flex flex-col items-center">
            <span className="font-headline text-2xl sm:text-4xl font-bold text-foreground w-10 sm:w-14 text-center">
              {String(unit.value).padStart(2, '0')}
            </span>
            <span className="text-xs sm:text-sm font-medium text-foreground/70">{unit.label}</span>
          </div>
          {index < timeUnits.length - 1 && (
            <span className="text-2xl sm:text-4xl font-light text-primary/50 -mt-3">:</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
