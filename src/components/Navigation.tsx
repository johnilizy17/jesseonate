"use client";

import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="bg-black sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-2xl font-bold" style={{color:"#fff"}}>
            <span className="text-green-500">Ola</span> OTUBU REAL ESTATE.
          </Link> 

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <a href="sms:+16475295663" className="bg-yellow-400 text-black px-6 py-2 rounded font-semibold hover:bg-yellow-500 transition">
              TEXT: (647) 529-5663
            </a>
          </div>

          {/* Mobile TEXT Button */}
          <div className="md:hidden">
            <a href="sms:+16475295663" className="bg-yellow-400 text-black px-6 py-2 rounded font-semibold hover:bg-yellow-500 transition">
              TEXT
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
