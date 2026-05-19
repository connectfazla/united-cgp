import Link from "next/link";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeading({ label, title, description, centered = true }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {label && (
        <span className="text-teal font-semibold text-sm uppercase tracking-wider">
          {label}
        </span>
      )}
      <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mt-2">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-gray-500 max-w-2xl leading-relaxed mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}

interface CTABannerProps {
  title: string;
  description?: string;
  buttonText: string;
  buttonHref: string;
}

export function CTABanner({ title, description, buttonText, buttonHref }: CTABannerProps) {
  return (
    <section className="bg-navy py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-white">{title}</h2>
        {description && <p className="mt-4 text-gray-300 text-lg">{description}</p>}
        <Link
          href={buttonHref}
          className="inline-block mt-8 bg-teal hover:bg-teal-dark text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-lg"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  icon: React.ReactNode;
  name: string;
  description: string;
  href: string;
}

export function ServiceCard({ icon, name, description, href }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-teal/30 transition-all duration-300"
    >
      <div className="w-14 h-14 bg-navy/5 rounded-xl flex items-center justify-center text-navy group-hover:bg-teal group-hover:text-white transition-all duration-300 mb-4">
        {icon}
      </div>
      <h3 className="font-heading font-semibold text-lg text-gray-900 mb-2">{name}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
      <span className="inline-flex items-center gap-1 mt-4 text-teal font-medium text-sm group-hover:gap-2 transition-all">
        Learn More
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  );
}

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
}

export function ProjectCard({ title, category, description, image }: ProjectCardProps) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300">
      <div className="aspect-[4/3] bg-gray-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-navy/20 flex items-center justify-center text-white/40 text-sm">
          {image.replace("/images/", "").replace(".jpg", "")}
        </div>
        <span className="absolute top-3 left-3 z-20 bg-teal text-white text-xs font-semibold px-3 py-1 rounded-full">
          {category}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-heading font-semibold text-gray-900 mb-1.5">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

interface StatCardProps {
  value: string;
  label: string;
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="text-center">
      <div className="font-heading font-bold text-4xl md:text-5xl text-teal">{value}</div>
      <div className="mt-2 text-gray-500 text-sm">{label}</div>
    </div>
  );
}
