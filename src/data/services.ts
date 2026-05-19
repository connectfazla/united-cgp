export interface Service {
  slug: string;
  name: string;
  tagline: string;
  icon: string;
  description: string;
  overview: string;
  capabilities: string[];
  brands?: string[];
  certifications?: string[];
  heroImage: string;
}

export const services: Service[] = [
  {
    slug: "ship-engineering",
    name: "Ship Engineering",
    tagline: "Ship & Marine Engineering Total Solution",
    icon: "Anchor",
    description:
      "United Corporation is a leading afloat ship repair and maintenance service provider company in Bangladesh. We service engines from major manufacturers including Mitsubishi, Hyundai, Doosan, and EPT. Our worldwide network allows fast deployment of personnel and equipment at correct market prices combined with a 'never promise what you cannot deliver' service philosophy.",
    overview:
      "Our engines feature design optimization for energy efficiency and optimal fuel economy, incorporating advanced combustion chamber design, Direct Fuel Injection systems, turbochargers, and cooling systems to minimize fuel consumption across operational ranges. Our technical staff handle propeller modifications, cropping, balancing, straightening, and power calculations. We serve marine, offshore engineering, and oil & gas industry clients across Asia and the Middle East.",
    capabilities: [
      "Ship Engine Repair & Overhaul (Mitsubishi, Hyundai, Doosan, EPT)",
      "Propeller Modification, Cropping & Balancing",
      "Propeller Straightening & Power Calculations",
      "Direct Fuel Injection System Services",
      "Turbocharger Maintenance & Repair",
      "Combustion Chamber Optimization",
      "Energy Efficiency & Fuel Economy Solutions",
      "Cooling System Services",
    ],
    brands: ["Mitsubishi", "Hyundai", "Doosan", "EPT"],
    certifications: [
      "American Bureau of Shipping (ABS)",
      "Bureau Veritas",
      "Det Norske Veritas (DNV)",
      "Germanischer Lloyd (GL)",
      "Lloyd's Register of Shipping",
    ],
    heroImage: "/images/ship-engineering.jpg",
  },
  {
    slug: "civil-construction",
    name: "Civil Construction",
    tagline: "1st Class Civil Construction & Jetty Construction Works",
    icon: "Building2",
    description:
      "United Corporation specializes in jetty development and marine structure construction. We maintain a 100% success rate on all projects with a strong commitment to quality, safety, and customer satisfaction. Our in-house engineering and construction teams provide cost-effective, highly suitable, award-winning solutions.",
    overview:
      "We provide permanent and temporary jetty structures with flexible options to suit project requirements. Our marine piling and ground engineering expertise extends across multiple project types. We place an emphasis on solutions that repair damage to the natural setting while maximizing project value, combining environmental responsibility with technical excellence.",
    capabilities: [
      "Permanent Jetty Construction",
      "Temporary Jetty Structures",
      "Marine Piling & Ground Engineering",
      "Near-Shore Platform Design & Construction",
      "General Construction Techniques",
      "Environmental Restoration Solutions",
    ],
    heroImage: "/images/civil-construction.jpg",
  },
  {
    slug: "power-generation",
    name: "Power Generation",
    tagline: "Marine Vessel Power Solutions from 10kW to 1000kW",
    icon: "Zap",
    description:
      "United Corporation delivers power generation solutions ranging from 10kW to 1000kW capacity, featuring multiple trusted manufacturers. We provide both repair and maintenance operations for marine generator sets built to offer constant and efficient service, even in difficult environments.",
    overview:
      "Our marine generator sets incorporate fifth-generation engineering, advanced technology, and innovative design to maximize output and dependability. These generators are built in conformity with local classifications or international standards, and are designed to support operational demands through products tailored to individual system specifications. We draw on decades of design expertise and engineering know-how to optimize marine power applications.",
    capabilities: [
      "Generator Supply (10kW to 1000kW)",
      "Generator Repair & Maintenance",
      "Marine Generator Set Installation",
      "Fifth-Generation Engineering Solutions",
      "Custom System Specification Design",
      "Local & International Standards Compliance",
    ],
    brands: ["Mitsubishi", "Oceania", "Deutz", "Cummins", "Perkins", "MTU"],
    heroImage: "/images/power-generation.jpg",
  },
  {
    slug: "hydrography",
    name: "Hydrography",
    tagline: "Audio, Visual, and Electrical Aid Survey Equipment",
    icon: "Waves",
    description:
      "United Corporation supplies and services hydrography and oceanography equipment for marine survey applications. We provide comprehensive surveying instruments for GPS positioning, depth measurement, seafloor imaging, and subsurface geological surveys.",
    overview:
      "Our hydrography division focuses on supplying and servicing precision survey equipment essential for marine operations, channel maintenance, and oceanographic research. We offer end-to-end solutions from equipment procurement to calibration and ongoing maintenance support.",
    capabilities: [
      "GPS Positioning Systems",
      "Echo Sounder Supply & Service",
      "Side Scan Sonar Equipment",
      "Sub-Bottom Profiler Systems",
      "Oceanographic Data Collection Equipment",
      "Survey Equipment Calibration & Maintenance",
    ],
    heroImage: "/images/hydrography.jpg",
  },
  {
    slug: "marine-navigation",
    name: "Marine Navigation",
    tagline: "Accurate & Reliable Navigation Equipment for Ships & Harbors",
    icon: "Compass",
    description:
      "United Corporation provides accurate and reliable navigation equipment for boats and ships, and supplies harbor and channel navigational systems suitable for both professional and recreational marine operations. We deliver repair and maintenance services for all ship navigational equipment.",
    overview:
      "Our navigation solutions include real-time weather condition monitoring, tide level tracking, hazard alerts, and detailed mapping with routing recommendations. We serve both professional mariners and recreational boaters, providing harbor and channel navigation infrastructure alongside onboard ship navigation systems.",
    capabilities: [
      "Radar Systems Supply & Repair",
      "GPS & Chart Plotter Services",
      "Echo Sounder Installation & Maintenance",
      "AIS (Automatic Identification System)",
      "Marine Buoys Supply & Installation",
      "Marine Navigation Lights",
      "Real-Time Weather & Tide Monitoring Systems",
      "Hazard Alert & Routing Systems",
    ],
    heroImage: "/images/marine-navigation.jpg",
  },
];
