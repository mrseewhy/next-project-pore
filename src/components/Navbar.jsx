"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Advocacy", href: "/advocacy" },
    { name: "Partners", href: "/partners" },
    { name: "Get Involved", href: "/get-involved" },
    { name: "Contact Us", href: "/contact" },
  ];

  const linkClasses = (href) =>
    `block font-head px-3 py-2 rounded-md hover:text-yellow-400 transition ${
      pathname === href ? "text-yellow-400 font-semibold" : ""
    }`;

  return (
    <nav className="bg-indigo-950 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold font-head">
            <Link href="/" className="flex items-center justify-center gap-4">
              <img src="/images/icon.webp" className="h-12 w-12" />
              <span> Federico & Co.</span>
            </Link>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={linkClasses(link.href)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden ">
            <div className="bg-indigo-50 rounded-full w-10 h-10 flex items-center justify-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="focus:outline-none text-indigo-950 text-3xl"
                aria-label="Toggle Menu"
              >
                {isOpen ? "✕" : "☰"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu items */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-1 bg-indigo-950">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={linkClasses(link.href)}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
