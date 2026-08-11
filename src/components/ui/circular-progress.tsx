"use client";

import * as React from "react";

interface CircularProgressProps {
  value: number;
  size?: number;
  strokeWidth?: number;
  colorClass?: string;
  children?: React.ReactNode;
}

export function CircularProgress({
  value = 0,
  size = 120,
  strokeWidth = 10,
  colorClass = "text-emerald-500",
  children,
}: CircularProgressProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div
      className="relative inline-flex items-center justify-center"
      style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        className="-rotate-90 transition-all duration-300 ease-in-out">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          className="stroke-muted"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          className={`stroke-current ${colorClass} transition-all duration-500 ease-out`}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="transparent"
        />
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        {children ? (
          children
        ) : (
          <span className="text-sm font-semibold text-foreground">
            {Math.round(value)}%
          </span>
        )}
      </div>
    </div>
  );
}
