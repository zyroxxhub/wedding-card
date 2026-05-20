"use client";

import Countdown from "react-countdown";
import GlassCard from "./GlassCard";

export default function CountdownSection() {

  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-20">
        
        <GlassCard>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-300">{days}</h1>
          <p className="mt-2 text-gray-300">Days</p>
        </GlassCard>

        <GlassCard>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-300">{hours}</h1>
          <p className="mt-2 text-gray-300">Hours</p>
        </GlassCard>

        <GlassCard>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-300">{minutes}</h1>
          <p className="mt-2 text-gray-300">Minutes</p>
        </GlassCard>

        <GlassCard>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-300">{seconds}</h1>
          <p className="mt-2 text-gray-300">Seconds</p>
        </GlassCard>

      </div>
    );
  };

  return (
    <Countdown
      date="2026-12-12T18:30:00"
      renderer={renderer}
    />
  );
}