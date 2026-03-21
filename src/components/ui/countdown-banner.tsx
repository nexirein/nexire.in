"use client";

import React, { useEffect, useState } from "react";

const CountdownBanner = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2026-04-01T12:00:00") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents: React.ReactNode[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval as keyof typeof timeLeft]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval as keyof typeof timeLeft]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className="relative z-[60] bg-indigo-950/80 backdrop-blur-md px-4 py-1.5 text-white border-b border-indigo-500/20">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-x-6">
        <p className="text-[11px] sm:text-xs tracking-wide uppercase font-medium">
          <span className="text-indigo-400 mr-2">🔥 Nexire Launch:</span>
          {timerComponents.length ? (
            <span className="font-bold tabular-nums text-white">{timerComponents}</span>
          ) : (
            <span>Ready to go!</span>
          )}
          <span className="ml-2 hidden sm:inline text-gray-400">Join 50+ on the waitlist</span>
        </p>
      </div>
    </div>
  );
};

export default CountdownBanner;
