"use client";

import React from "react";

/**
 * Precision 4-point studio starburst
 */
export function StudioStarburst({
  size = 24,
  className = "",
  fill = "currentColor",
}: {
  size?: number;
  className?: string;
  fill?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z"
        fill={fill}
      />
    </svg>
  );
}

/**
 * Architectural registration crosshair (+)
 */
export function StudioCrosshair({
  size = 14,
  className = "",
  stroke = "currentColor",
}: {
  size?: number;
  className?: string;
  stroke?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M8 0V16M0 8H16"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Precision Halftone Dot Grid
 */
export function StudioDotGrid({
  cols = 6,
  rows = 4,
  size = 3,
  gap = 12,
  className = "",
  fill = "#315BFF",
  opacity = 0.4,
}: {
  cols?: number;
  rows?: number;
  size?: number;
  gap?: number;
  className?: string;
  fill?: string;
  opacity?: number;
}) {
  const width = cols * gap;
  const height = rows * gap;

  const dots = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      dots.push(
        <circle
          key={`${r}-${c}`}
          cx={c * gap + gap / 2}
          cy={r * gap + gap / 2}
          r={size / 2}
          fill={fill}
          opacity={opacity}
        />
      );
    }
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {dots}
    </svg>
  );
}

/**
 * Abstract Curved Waves & Flow Lines
 */
export function StudioCurvedLines({
  className = "",
  stroke = "#315BFF",
  opacity = 0.25,
}: {
  className?: string;
  stroke?: string;
  opacity?: number;
}) {
  return (
    <svg
      viewBox="0 0 400 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M-40 100 C 60 20, 160 180, 260 80 C 340 0, 420 160, 480 60"
        stroke={stroke}
        strokeWidth="2"
        strokeDasharray="4 4"
        strokeOpacity={opacity}
      />
      <path
        d="M-20 130 C 80 50, 180 210, 280 110 C 360 30, 440 190, 500 90"
        stroke={stroke}
        strokeWidth="1.5"
        strokeOpacity={opacity * 0.75}
      />
      <circle cx="260" cy="80" r="4" fill={stroke} fillOpacity={opacity * 1.5} />
      <circle cx="160" cy="180" r="3" fill={stroke} fillOpacity={opacity} />
    </svg>
  );
}

/**
 * Asymmetric Concentric Orbital Rings
 */
export function StudioOrbitalRings({
  size = 120,
  className = "",
  stroke = "#315BFF",
  opacity = 0.25,
}: {
  size?: number;
  className?: string;
  stroke?: string;
  opacity?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle
        cx="60"
        cy="60"
        r="54"
        stroke={stroke}
        strokeWidth="1.5"
        strokeDasharray="6 6"
        strokeOpacity={opacity}
      />
      <circle
        cx="60"
        cy="60"
        r="36"
        stroke={stroke}
        strokeWidth="1"
        strokeOpacity={opacity * 1.2}
      />
      <circle
        cx="60"
        cy="60"
        r="18"
        stroke={stroke}
        strokeWidth="1.5"
        strokeOpacity={opacity * 1.5}
      />
      <circle cx="60" cy="6" r="3" fill={stroke} fillOpacity={opacity * 2} />
    </svg>
  );
}

/**
 * Organic Signature Shape / Backdrop Blobs
 */
export function StudioOrganicShape({
  variant = 1,
  className = "",
  color = "#315BFF",
  opacity = 0.15,
}: {
  variant?: 1 | 2 | 3 | 4;
  className?: string;
  color?: string;
  opacity?: number;
}) {
  if (variant === 1) {
    return (
      <svg
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        <path
          d="M410 120C460 190 470 290 430 370C390 450 300 510 200 490C100 470 0 370 0 270C0 170 100 70 200 30C300 -10 360 50 410 120Z"
          fill={color}
          fillOpacity={opacity}
        />
      </svg>
    );
  }

  if (variant === 2) {
    return (
      <svg
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        <path
          d="M440 170C480 260 450 370 380 430C310 490 200 500 120 450C40 400 -10 290 5 190C20 90 100 0 200 0C300 0 400 80 440 170Z"
          fill={color}
          fillOpacity={opacity}
        />
      </svg>
    );
  }

  if (variant === 3) {
    return (
      <svg
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        <path
          d="M380 90C450 160 490 270 450 360C410 450 290 520 180 480C70 440 -30 290 10 180C50 70 150 0 260 0C370 0 310 20 380 90Z"
          fill={color}
          fillOpacity={opacity}
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M320 80C380 140 390 240 340 310C290 380 180 420 100 370C20 320 -20 200 10 110C40 20 160 -20 240 10C320 40 260 20 320 80Z"
        fill={color}
        fillOpacity={opacity}
      />
    </svg>
  );
}
