"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface Props {
  value: string;
  label: string;
}

export function AnimatedCounter({ value, label }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayed, setDisplayed] = useState("0");

  // Extract numeric part and suffix (e.g. "55+" → 55, "+")
  const match = value.match(/^(\d+)(.*)$/);
  const numeric = match ? parseInt(match[1]) : null;
  const suffix = match ? match[2] : "";
  const isSymbol = !match; // e.g. "#1"

  useEffect(() => {
    if (!isInView) return;
    if (isSymbol || numeric === null) {
      setDisplayed(value);
      return;
    }
    let start = 0;
    const duration = 1500;
    const steps = 40;
    const increment = numeric / steps;
    const interval = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= numeric) {
        setDisplayed(`${numeric}${suffix}`);
        clearInterval(timer);
      } else {
        setDisplayed(`${Math.floor(start)}${suffix}`);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isInView, numeric, suffix, isSymbol, value]);

  return (
    <div ref={ref} className="text-center p-4 rounded-xl" style={{ backgroundColor: "#f0f9ff" }}>
      <div className="text-3xl font-bold" style={{ color: "#046b9f" }}>
        {displayed}
      </div>
      <div className="text-xs text-gray-500 mt-1 leading-tight">{label}</div>
    </div>
  );
}
