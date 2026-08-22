"use client";

import { useEffect, useState } from "react";

export interface StatItem {
  value: number;
  suffix?: string;
  label: string;
  description?: string;
}

interface StatsCounterProps {
  items: StatItem[];
  dark?: boolean;
}

export default function StatsCounter({
  items,
  dark = false,
}: StatsCounterProps) {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStarted(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={`py-14 sm:py-16 ${
        dark ? "bg-[#071827]" : "bg-[#f6fafd]"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">

          {items.map((item) => (
            <CounterCard
              key={item.label}
              item={item}
              started={started}
              dark={dark}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

function CounterCard({
  item,
  started,
  dark,
}: {
  item: StatItem;
  started: boolean;
  dark: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;

    const duration = 1600;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      // Smooth ease-out animation
      const easedProgress =
        1 - Math.pow(1 - progress, 3);

      setCount(
        Math.floor(item.value * easedProgress)
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(item.value);
      }
    };

    requestAnimationFrame(animate);
  }, [started, item.value]);

  return (
    <div
      className={`rounded-2xl border p-5 text-center transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6 ${
        dark
          ? "border-white/10 bg-white/5"
          : "border-slate-200 bg-white"
      }`}
    >

      <div
        className={`text-3xl font-black sm:text-4xl lg:text-5xl ${
          dark ? "text-[#55c4ff]" : "text-[#006cb5]"
        }`}
      >
        {count.toLocaleString("en-IN")}
        {item.suffix || ""}
      </div>

      <h3
        className={`mt-2 text-sm font-bold sm:text-base ${
          dark ? "text-white" : "text-[#071827]"
        }`}
      >
        {item.label}
      </h3>

      {item.description && (
        <p
          className={`mt-1 text-xs leading-5 ${
            dark ? "text-slate-400" : "text-slate-500"
          }`}
        >
          {item.description}
        </p>
      )}

    </div>
  );
}