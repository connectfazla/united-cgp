import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { services } from "@/data/services";

export function Footer() {
  return (
    <footer className="bg-navy-dark text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-teal rounded-lg flex items-center justify-center">
                <span className="text-white font-heading font-bold text-lg">U</span>
              </div>
              <span className="font-heading font-bold text-white text-xl">
                United Corporation
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Bangladesh&apos;s leading marine engineering and offshore solutions
              provider. ISO 9001 certified, serving clients across Asia &amp; the
              Middle East.
            </p>
            <div className="flex gap-2">
              <span className="text-xs bg-navy-light px-2 py-1 rounded">ISO 9001</span>
              <span className="text-xs bg-navy-light px-2 py-1 rounded">ABS</span>
              <span className="text-xs bg-navy-light px-2 py-1 rounded">DNV</span>
              <span className="text-xs bg-navy-light px-2 py-1 rounded">Lloyd&apos;s</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm hover:text-teal transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Projects", href: "/projects" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-teal transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-teal" />
                <span>
                  123 Marine Drive, Agrabad C/A,
                  <br />
                  Chittagong 4100, Bangladesh
                </span>
              </li>
              <li>
                <a href="tel:+8801781400925" className="flex items-center gap-3 text-sm hover:text-teal transition-colors">
                  <Phone className="w-4 h-4 shrink-0 text-teal" />
                  +880 1781-400925
                </a>
              </li>
              <li>
                <a href="mailto:info@unitedcgp.com" className="flex items-center gap-3 text-sm hover:text-teal transition-colors">
                  <Mail className="w-4 h-4 shrink-0 text-teal" />
                  info@unitedcgp.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-navy-light">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-gray-400">
          <span>&copy; {new Date().getFullYear()} Fazla Rabbi. All rights reserved.</span>
          <span>ISO 9001:2000 Certified &bull; Government Authorized</span>
        </div>
      </div>
    </footer>
  );
}
