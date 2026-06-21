import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Persist — Continuity for the wallet age",
  description:
    "Persist seals data to conditions, not custodians. Built on Seal, Walrus, and Sui — a primitive for digital inheritance, agent continuity, and DAO contingency.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
