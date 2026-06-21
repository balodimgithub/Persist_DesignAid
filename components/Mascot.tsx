"use client";

import { motion } from "framer-motion";

/**
 * Mascot — a larger, illustrated version of the capsule motif for the hero.
 * Friendly (soft eyes, slight smile) but grounded by a wax-seal crest,
 * so the character reads as approachable without losing the protocol's
 * formality — the "friendly, formal yet mature" brief.
 */
export default function Mascot({ size = 320 }: { size?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      whileHover={{ rotate: -2, scale: 1.02 }}
      className="relative"
      style={{ width: size, height: size * 1.15 }}
    >
      <svg viewBox="0 0 320 368" width="100%" height="100%" aria-hidden="true">
        <defs>
          <radialGradient id="mascotShell" cx="34%" cy="26%" r="80%">
            <stop offset="0%" stopColor="#FFD79A" />
            <stop offset="55%" stopColor="#D9791C" />
            <stop offset="100%" stopColor="#8A4A0E" />
          </radialGradient>
          <linearGradient id="mascotSeal" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#FBF3DC" />
          </linearGradient>
        </defs>

        {/* soft contact shadow */}
        <ellipse cx="160" cy="350" rx="92" ry="14" fill="#221408" opacity="0.08" />

        {/* shell body */}
        <ellipse cx="160" cy="190" rx="128" ry="158" fill="url(#mascotShell)" />

        {/* sheen */}
        <ellipse cx="108" cy="100" rx="34" ry="48" fill="rgba(255,255,255,0.32)" />

        {/* wax-seal crest — the "formal" touch */}
        <circle cx="160" cy="232" r="34" fill="url(#mascotSeal)" stroke="#B85E10" strokeWidth="2" />
        <path
          d="M160 215 L171 226 L160 249 L149 226 Z"
          fill="#B85E10"
        />

        {/* face */}
        <circle cx="124" cy="150" r="7" fill="#221408" />
        <circle cx="196" cy="150" r="7" fill="#221408" />
        <path
          d="M132 178 Q160 196 188 178"
          stroke="#221408"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />

        {/* hairline crack, the "dormant condition" cue, echoing EggCapsule */}
        <path
          d="M96 96 L112 140 L92 168 L118 210"
          stroke="#5B2E0A"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
          opacity="0.55"
        />
      </svg>
    </motion.div>
  );
}
