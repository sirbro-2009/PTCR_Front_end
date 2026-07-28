"use client"

import * as React from "react"

interface CircularProgressProps {
  value: number // النسبة المئوية من 0 إلى 100
  size?: number // حجم الدائرة بالـ px
  strokeWidth?: number // سمك الخط
  colorClass?: string // لون شريط التقدم
  children?: React.ReactNode // المحتوى الداخلي في منتصف الدائرة
}

export function CircularProgress({
  value = 0,
  size = 120,
  strokeWidth = 10,
  colorClass = "text-emerald-500",
  children,
}: CircularProgressProps) {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (value / 100) * circumference

  return (
    <div
      className="relative inline-flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        className="rotate-[-90deg] transition-all duration-300 ease-in-out"
      >
        {/* الدائرة الخلفية الرمادية */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          className="stroke-muted"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        {/* دائرة التقدم الملونة */}
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

      {/* المحتوى في المنتصف (children) */}
      <div className="absolute inset-0 flex items-center justify-center">
        {children ? children : (
          <span className="text-sm font-semibold text-foreground">
            {Math.round(value)}%
          </span>
        )}
      </div>
    </div>
  )
}