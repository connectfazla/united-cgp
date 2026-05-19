"use client";

import { useState } from "react";

import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { SectionHeading } from "@/components/ui";
import { services } from "@/data/services";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-teal font-semibold text-sm uppercase tracking-wider">Contact Us</span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mt-3">
              Let&apos;s Discuss Your Project
            </h1>
            <p className="mt-6 text-gray-300 text-lg leading-relaxed">
              Get in touch with our team for a free consultation. We&apos;re here to help
              with all your marine engineering needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: <Phone className="w-6 h-6" />,
                title: "Phone",
                line1: "+880 1234-567890",
                line2: "+880 9876-543210",
                href: "tel:+8801234567890",
              },
              {
                icon: <Mail className="w-6 h-6" />,
                title: "Email",
                line1: "info@unitedcgp.com",
                line2: "support@unitedcgp.com",
                href: "mailto:info@unitedcgp.com",
              },
              {
                icon: <MapPin className="w-6 h-6" />,
                title: "Office",
                line1: "123 Marine Drive, Agrabad C/A",
                line2: "Chittagong 4100, Bangladesh",
              },
              {
                icon: <Clock className="w-6 h-6" />,
                title: "Office Hours",
                line1: "Sun - Thu: 9:00 AM - 6:00 PM",
                line2: "24/7 Emergency Support",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center text-teal mb-4">
                  {item.icon}
                </div>
                <h3 className="font-heading font-semibold text-gray-900 mb-2">{item.title}</h3>
                {item.href ? (
                  <a href={item.href} className="block text-gray-500 text-sm hover:text-teal transition-colors">
                    {item.line1}
                  </a>
                ) : (
                  <p className="text-gray-500 text-sm">{item.line1}</p>
                )}
                <p className="text-gray-500 text-sm">{item.line2}</p>
              </div>
            ))}
          </div>

          {/* Form + Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading label="Get in Touch" title="Send Us a Message" centered={false} />
              {submitted ? (
                <div className="bg-teal/10 border border-teal/20 rounded-xl p-8 text-center">
                  <div className="w-16 h-16 bg-teal/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-teal" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-navy mb-2">
                    Message Sent Successfully
                  </h3>
                  <p className="text-gray-600">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal focus:border-teal outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal focus:border-teal outline-none transition-colors"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal focus:border-teal outline-none transition-colors"
                        placeholder="+880"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal focus:border-teal outline-none transition-colors"
                        placeholder="Company name"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal focus:border-teal outline-none transition-colors"
                    >
                      <option value="">Select a service</option>
                      {services.map((s) => (
                        <option key={s.slug} value={s.slug}>
                          {s.name}
                        </option>
                      ))}
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal focus:border-teal outline-none transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-teal hover:bg-teal-dark text-white font-semibold px-8 py-3 rounded-lg transition-colors flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Map */}
            <div>
              <SectionHeading label="Our Location" title="Find Us in Chittagong" centered={false} />
              <div className="bg-gray-100 rounded-xl overflow-hidden aspect-[4/3] border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29528.7835!2d91.7832!3d22.3569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8a64095dfd3%3A0x5015cc5bcb6905d9!2sChittagong%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 400 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="United Corporation Office Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
