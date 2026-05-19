import Link from "next/link";
import { Anchor, Building2, Zap, Waves, Compass, Shield, Award, Globe, Clock, CheckCircle } from "lucide-react";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { SectionHeading, ServiceCard, ProjectCard, StatCard, CTABanner } from "@/components/ui";

const iconMap: Record<string, React.ReactNode> = {
  Anchor: <Anchor className="w-7 h-7" />,
  Building2: <Building2 className="w-7 h-7" />,
  Zap: <Zap className="w-7 h-7" />,
  Waves: <Waves className="w-7 h-7" />,
  Compass: <Compass className="w-7 h-7" />,
};

const whyChooseUs = [
  { icon: <Shield className="w-6 h-6" />, title: "Government Authorized", description: "One of only three enterprises authorized by Bangladesh's State Department of Marine." },
  { icon: <Award className="w-6 h-6" />, title: "ISO 9001 Certified", description: "International quality management standards across all operations." },
  { icon: <Globe className="w-6 h-6" />, title: "Asia & Middle East", description: "Worldwide network with fast deployment of personnel and equipment." },
  { icon: <Clock className="w-6 h-6" />, title: "24/7 Emergency Support", description: "Round-the-clock emergency repair and maintenance services." },
  { icon: <CheckCircle className="w-6 h-6" />, title: "Classification Approved", description: "Meeting requirements of ABS, Bureau Veritas, DNV, GL, and Lloyd's Register." },
  { icon: <Anchor className="w-6 h-6" />, title: "Full-Service Solutions", description: "From ship repair to civil construction — everything under one roof." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-remote.webp')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-36">
          <div className="max-w-3xl">
            <span className="inline-block bg-teal/20 text-teal px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              ISO 9001 Certified &bull; Government Authorized
            </span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
              Bangladesh&apos;s Leading Marine Engineering &amp; Offshore Solutions
            </h1>
            <p className="mt-6 text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl">
              Comprehensive ship engineering, civil construction, power generation,
              hydrography, and navigation solutions — trusted by clients across Asia
              and the Middle East.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/services/ship-engineering"
                className="bg-teal hover:bg-teal-dark text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-lg"
              >
                Explore Our Services
              </Link>
              <Link
                href="/contact"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-lg border border-white/20"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 text-gray-400">
            {["American Bureau of Shipping", "Bureau Veritas", "DNV", "Germanischer Lloyd", "Lloyd's Register"].map(
              (name) => (
                <div key={name} className="text-center">
                  <span className="text-xs font-semibold uppercase tracking-wider">{name}</span>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            label="What We Do"
            title="Our Core Services"
            description="Delivering comprehensive marine, offshore, and industrial engineering solutions with over a decade of experience."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                icon={iconMap[service.icon]}
                name={service.name}
                description={service.tagline}
                href={`/services/${service.slug}`}
              />
            ))}
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
            <StatCard value="5" label="Service Divisions" />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            label="Why United Corporation"
            title="Why Choose Us"
            description="We combine technical expertise with a commitment to excellence that has earned us the trust of clients across the maritime industry."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center text-teal mb-4">
                  {item.icon}
                </div>
                <h3 className="font-heading font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            label="Our Work"
            title="Featured Projects"
            description="A selection of recent projects showcasing our capabilities across all service areas."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.slice(0, 4).map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-teal hover:text-teal-dark font-semibold transition-colors"
            >
              View All Projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Ready to Discuss Your Next Marine Project?"
        description="Contact us for a free consultation and quote. Our team of experts is ready to help."
        buttonText="Contact Us Today"
        buttonHref="/contact"
      />
    </>
  );
}
