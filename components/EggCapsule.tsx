"use client";

/**
 * EggCapsule — the signature motif of Persist.
 *
 * Data sealed under a condition behaves like an egg: dormant, protected,
 * and only "hatching" (decrypting) when its condition is met. The shell
 * cracks open on hover/focus to reveal the glow inside — a literal
 * rendering of the dead-man's-switch / conditional-release idea.
 */
export default function EggCapsule({
  size = 28,
  pulse = false,
  className = "",
}: {
  size?: number;
  pulse?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`egg-group inline-flex shrink-0 ${pulse ? "heartbeat" : ""} ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 40 48"
        width={size}
        height={size}
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="yolkGrad" cx="35%" cy="30%" r="75%">
            <stop offset="0%" stopColor="#FFC773" />
            <stop offset="55%" stopColor="#D9791C" />
            <stop offset="100%" stopColor="#9C4E0C" />
          </radialGradient>
        </defs>
        <ellipse cx="20" cy="25" rx="17" ry="21" fill="url(#yolkGrad)" />
        <ellipse cx="14" cy="13" rx="4.5" ry="6" fill="rgba(255,255,255,0.35)" />
        {/* crack lines, revealed on hover via .crack-line / .egg-group:hover */}
        <path
          className="crack-line"
          d="M14 8 L18 20 L13 26 L22 34"
          fill="none"
          stroke="#3A210C"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          className="crack-line"
          style={{ transitionDelay: "60ms" }}
          d="M27 10 L23 22 L29 28"
          fill="none"
          stroke="#3A210C"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
