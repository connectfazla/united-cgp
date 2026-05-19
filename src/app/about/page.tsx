import type { Metadata } from "next";
import Image from "next/image";
import { Award, Target, Eye } from "lucide-react";
import { SectionHeading, StatCard, CTABanner } from "@/components/ui";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about United Corporation — a leading marine engineering firm in Chittagong, Bangladesh. ISO 9001 certified, government authorized, serving Asia & Middle East.",
};

const timeline = [
  { year: "2013", event: "Founded in Chittagong as a vessel provisions supplier" },
  { year: "2015", event: "Expanded into ship engineering and repair services" },
  { year: "2017", event: "Achieved ISO 9001:2000 certification" },
  { year: "2018", event: "Authorized by Bangladesh State Department of Marine" },
  { year: "2020", event: "Launched civil construction and jetty works division" },
  { year: "2023", event: "Expanded into Asia & Middle East markets" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-teal font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mt-3">
              A Decade of Maritime Excellence
            </h1>
            <p className="mt-6 text-gray-300 text-lg leading-relaxed">
              From humble beginnings as a vessel provisions supplier in Chittagong,
              United Corporation has grown into one of Bangladesh&apos;s premier marine
              engineering enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading label="Our Story" title="Who We Are" centered={false} />
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  United Corporation is a marine business enterprise based in Chittagong,
                  Bangladesh — one of the country&apos;s largest and most historic ports.
                  We have established ourselves as a leader in the marine business sector,
                  meeting strict international standards across all operations.
                </p>
                <p>
                  We are ISO 9001:2000 certified and proudly operate as one of only three
                  domestic enterprises authorized by Bangladesh&apos;s State Department of
                  Marine to register and manage Bangladesh-flagged vessels at the State
                  Marine Rescue Coordination Center.
                </p>
                <p>
                  What began as a vessel provisions supply company has expanded into a
                  comprehensive marine engineering enterprise offering ship repair, civil
                  construction, power generation, hydrography, and marine navigation
                  solutions.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl aspect-[4/3] relative overflow-hidden">
              <Image
                src="/images/who-we-are.jpg"
                alt="United Corporation marine engineering operations"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-14 h-14 bg-navy/5 rounded-xl flex items-center justify-center text-navy mb-5">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-navy mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To deliver world-class marine engineering and offshore solutions that
                exceed client expectations, while maintaining the highest standards of
                safety, quality, and environmental responsibility.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-14 h-14 bg-navy/5 rounded-xl flex items-center justify-center text-navy mb-5">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-navy mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted marine engineering partner in South Asia,
                recognized for innovation, reliability, and our commitment to advancing
                the maritime industry in Bangladesh and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard value="10+" label="Years of Experience" />
            <StatCard value="200+" label="Projects Completed" />
            <StatCard value="150+" label="Vessels Serviced" />
            <StatCard value="50+" label="Team Members" />
          </div>
        </div>
      </section>

      {/* CEO Message */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-[300px_1fr] gap-12 items-start">
            <div className="text-center">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden relative">
                <Image
                  src="/images/aminul-islam.jpg"
                  alt="Aminul Islam - CEO of United Corporation"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-heading font-bold text-xl text-navy mt-4">Aminul Islam</h3>
              <p className="text-gray-500">Chief Executive Officer</p>
            </div>
            <div>
              <SectionHeading label="CEO Message" title="A Message from Our CEO" centered={false} />
              <blockquote className="text-gray-600 leading-relaxed space-y-4 border-l-4 border-teal pl-6">
                <p>
                  &ldquo;It is my privilege to lead United Corporation during a special time in our
                  company&apos;s history in the shipping industry. Our foundational services
                  spanning civil construction, ship engineering, power generation, marine
                  navigation, and hydrography have positioned us strongly in the market.&rdquo;
                </p>
                <p>
                  &ldquo;Our commitment to innovation and excellence, combined with the creative
                  expertise and diligent work ethic of our team, has distinguished us as a
                  preferred vendor in the industry. I invite you to explore our offerings
                  and hope we earn your trust just as we have with many other clients.&rdquo;
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeading label="Our Journey" title="Company Timeline" />
          <div className="space-y-0">
            {timeline.map((item, i) => (
              <div key={item.year} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-teal text-white rounded-full flex items-center justify-center font-semibold text-xs shrink-0">
                    {item.year}
                  </div>
                  {i < timeline.length - 1 && <div className="w-0.5 h-full bg-gray-200 my-1" />}
                </div>
                <div className="pb-8">
                  <p className="text-gray-700 font-medium pt-2">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            label="Certifications"
            title="Accreditations & Certifications"
            description="Our work meets the highest international standards, recognized by leading maritime authorities worldwide."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "ISO 9001:2000",
              "American Bureau of Shipping",
              "Bureau Veritas",
              "Det Norske Veritas",
              "Germanischer Lloyd",
              "Lloyd's Register",
            ].map((cert) => (
              <div key={cert} className="bg-gray-50 rounded-xl p-4 text-center border border-gray-200">
                <Award className="w-8 h-8 text-navy mx-auto mb-2" />
                <span className="text-xs font-semibold text-gray-700">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Partner with Bangladesh's Maritime Leader"
        description="Contact us to learn how we can support your next marine project."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </>
  );
}
