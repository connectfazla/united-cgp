"use client";

import { useState } from "react";
import { ProjectCard, CTABanner } from "@/components/ui";
import { projects } from "@/data/projects";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function ProjectsPage() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-teal font-semibold text-sm uppercase tracking-wider">Our Work</span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mt-3">
              Projects &amp; Portfolio
            </h1>
            <p className="mt-6 text-gray-300 text-lg leading-relaxed">
              Explore our portfolio of marine engineering, construction, and infrastructure
              projects delivered across Bangladesh and the wider region.
            </p>
          </div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  active === cat
                    ? "bg-navy text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-gray-400">
              <p>No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <CTABanner
        title="Have a Project in Mind?"
        description="Let us know about your requirements and we'll provide a free assessment."
        buttonText="Get a Free Quote"
        buttonHref="/contact"
      />
    </>
  );
}
