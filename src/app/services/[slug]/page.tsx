import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Anchor, Building2, Zap, Waves, Compass, CheckCircle } from "lucide-react";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { SectionHeading, ProjectCard, CTABanner } from "@/components/ui";

const iconMap: Record<string, React.ReactNode> = {
  Anchor: <Anchor className="w-8 h-8" />,
  Building2: <Building2 className="w-8 h-8" />,
  Zap: <Zap className="w-8 h-8" />,
  Waves: <Waves className="w-8 h-8" />,
  Compass: <Compass className="w-8 h-8" />,
};

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.description.slice(0, 160),
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const relatedProjects = projects.filter((p) => p.category === service.name).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-teal/20 rounded-xl flex items-center justify-center text-teal shrink-0 hidden md:flex">
              {iconMap[service.icon]}
            </div>
            <div>
              <span className="text-teal font-semibold text-sm uppercase tracking-wider">Our Services</span>
              <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mt-2">
                {service.name}
              </h1>
              <p className="mt-4 text-gray-300 text-lg leading-relaxed max-w-3xl">
                {service.tagline}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_400px] gap-16">
            <div>
              <SectionHeading label="Overview" title={`About Our ${service.name} Services`} centered={false} />
              <p className="text-gray-600 leading-relaxed text-lg">{service.description}</p>
              <p className="text-gray-600 leading-relaxed text-lg mt-4">{service.overview}</p>

              {/* Capabilities */}
              <div className="mt-12">
                <h3 className="font-heading font-semibold text-xl text-navy mb-6">Our Capabilities</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {service.capabilities.map((cap) => (
                    <div key={cap} className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
                      <CheckCircle className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {service.brands && service.brands.length > 0 && (
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="font-heading font-semibold text-navy mb-4">Brands We Service</h3>
                  <div className="flex flex-wrap gap-2">
                    {service.brands.map((brand) => (
                      <span key={brand} className="bg-white px-3 py-1.5 rounded-lg text-sm text-gray-700 border border-gray-200">
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {service.certifications && service.certifications.length > 0 && (
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="font-heading font-semibold text-navy mb-4">Certifications</h3>
                  <ul className="space-y-2">
                    {service.certifications.map((cert) => (
                      <li key={cert} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="bg-navy rounded-xl p-6 text-center">
                <h3 className="font-heading font-semibold text-white mb-2">Need {service.name}?</h3>
                <p className="text-gray-300 text-sm mb-4">Contact us for a free assessment and quote.</p>
                <Link
                  href="/contact"
                  className="inline-block bg-teal hover:bg-teal-dark text-white font-semibold px-6 py-2.5 rounded-lg transition-colors w-full"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4">
            <SectionHeading
              label="Our Work"
              title={`${service.name} Projects`}
              description={`Recent ${service.name.toLowerCase()} projects showcasing our expertise.`}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading label="Explore More" title="Other Services" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {services
              .filter((s) => s.slug !== service.slug)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="bg-gray-50 hover:bg-white rounded-xl p-5 border border-gray-200 hover:shadow-md transition-all text-center"
                >
                  <div className="w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center text-navy mx-auto mb-3">
                    {iconMap[s.icon]}
                  </div>
                  <span className="font-heading font-semibold text-sm text-gray-900">{s.name}</span>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <CTABanner
        title={`Ready to Get Started with ${service.name}?`}
        description="Our team of experts is ready to discuss your requirements."
        buttonText="Contact Us Today"
        buttonHref="/contact"
      />
    </>
  );
}
