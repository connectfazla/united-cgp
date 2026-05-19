"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { services } from "@/data/services";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="bg-navy text-white text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+8801234567890" className="flex items-center gap-1.5 hover:text-teal transition-colors">
              <Phone className="w-3.5 h-3.5" />
              +880 1234-567890
            </a>
            <a href="mailto:info@unitedcgp.com" className="flex items-center gap-1.5 hover:text-teal transition-colors">
              <Mail className="w-3.5 h-3.5" />
              info@unitedcgp.com
            </a>
          </div>
          <span className="text-gray-300">Chittagong, Bangladesh</span>
        </div>
      </div>

      {/* Main nav */}
      <header className="bg-white sticky top-0 z-50 shadow-sm">
<<<<<<< HEAD
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.jpg"
              alt="United Corporation"
              width={180}
              height={60}
              className="h-14 w-auto object-contain"
              priority
            />
=======
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-12 relative w-32">
              <Image
                src="/images/logo.jpg"
                alt="United Corporation"
                fill
                className="object-contain"
              />
            </div>
>>>>>>> ab39828 (chore: update main code)
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-navy font-medium transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-navy font-medium transition-colors">
              About Us
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-navy font-medium transition-colors flex items-center gap-1">
                Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-navy first:rounded-t-lg last:rounded-b-lg transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/projects" className="text-gray-700 hover:text-navy font-medium transition-colors">
              Projects
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-navy font-medium transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden md:inline-flex bg-teal hover:bg-teal-dark text-white font-semibold px-6 py-2.5 rounded-lg transition-colors"
            >
              Get a Quote
            </Link>
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
            <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2">
                <div className="h-12 relative w-32">
                  <Image
                    src="/images/logo.jpg"
                    alt="United Corporation"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
              >
                Services
                <svg className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen &&
                services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="py-2 pl-4 text-sm text-gray-600"
                    onClick={() => setMobileOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              <Link href="/projects" className="py-2.5 text-gray-700 font-medium" onClick={() => setMobileOpen(false)}>
                Projects
              </Link>
              <Link href="/contact" className="py-2.5 text-gray-700 font-medium" onClick={() => setMobileOpen(false)}>
                Contact
              </Link>
              <Link
                href="/contact"
                className="mt-2 bg-teal text-white text-center font-semibold px-6 py-2.5 rounded-lg"
                onClick={() => setMobileOpen(false)}
              >
                Get a Quote
              </Link>
              <div className="mt-3 pt-3 border-t border-gray-100 text-sm text-gray-500 space-y-2">
                <a href="tel:+8801234567890" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" /> +880 1234-567890
                </a>
                <a href="mailto:info@unitedcgp.com" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" /> info@unitedcgp.com
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
