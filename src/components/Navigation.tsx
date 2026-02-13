"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-2xl font-bold">
            <span className="text-green-500">OLA</span>
          </Link>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <a href="/schedule" className="bg-yellow-400 text-black px-6 py-2 rounded font-semibold hover:bg-yellow-500 transition">
              TALK TO OLA
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <MobileNavLink href="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
              <MobileNavLink href="/services" onClick={() => setIsOpen(false)}>Services</MobileNavLink>
              <MobileNavLink href="/checklist" onClick={() => setIsOpen(false)}>Checklist</MobileNavLink>
              <MobileNavLink href="/buyerguide" onClick={() => setIsOpen(false)}>Buyer Guide</MobileNavLink>
              <MobileNavLink href="/faq" onClick={() => setIsOpen(false)}>FAQ</MobileNavLink>
              <a href="/schedule" className="bg-yellow-400 text-black px-6 py-2 rounded font-semibold text-center mt-2">
                TALK TO OLA
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link href={href} onClick={onClick} className="text-white hover:text-green-500 font-medium py-2">
      {children}
    </Link>
  );
}
