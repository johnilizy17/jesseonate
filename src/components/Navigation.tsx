"use client";

import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="bg-black sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="md:hidden">
            <Link href="/" className="text-2xl font-bold" style={{ color: "#fff" }}>
              <span className="text-green-500">OLA</span> OTUBU <br /> REAL ESTATE.
            </Link>
          </div>
          <div className="hidden md:block">
            <Link href="/" className="text-2xl font-bold" style={{ color: "#fff" }}>
              <span className="text-green-500">OLA</span> OTUBU REAL ESTATE.
            </Link>
          </div>
          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <a
              href="sms:+16475295663"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-green-500/50 hover:scale-105 transition-all duration-300 animate-pulse"
            >

              Let’s Chat!!!
            </a>
          </div>

          {/* Mobile Chat Button */}
          <div className="md:hidden">
            <a
              href="sms:+16475295663"
              className="inline-flex items-center gap-1.5 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-green-500/50 hover:scale-105 transition-all duration-300 animate-pulse text-sm"
            >
              Let’s Chat!!!
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
