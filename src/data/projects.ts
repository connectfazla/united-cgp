export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "MV Ocean Star Engine Overhaul",
    category: "Ship Engineering",
    description:
      "Complete main engine overhaul and propeller balancing for a 12,000 DWT cargo vessel.",
    image: "/images/project-1.jpg",
  },
  {
    id: 2,
    title: "Chittagong Port Jetty Extension",
    category: "Civil Construction",
    description:
      "Design and construction of a 120m jetty extension with marine piling works.",
    image: "/images/project-2.jpg",
  },
  {
    id: 3,
    title: "Offshore Platform Power Upgrade",
    category: "Power Generation",
    description:
      "Installation of dual 500kW Cummins generator sets for an offshore drilling platform.",
    image: "/images/project-3.jpg",
  },
  {
    id: 4,
    title: "Karnaphuli River Hydrographic Survey",
    category: "Hydrography",
    description:
      "Multi-beam echo sounder survey and seabed mapping for channel dredging operations.",
    image: "/images/project-4.jpg",
  },
  {
    id: 5,
    title: "Harbor Navigation System Installation",
    category: "Marine Navigation",
    description:
      "Full navigation aid installation including buoys, lights, and radar systems for a regional port.",
    image: "/images/project-5.jpg",
  },
  {
    id: 6,
    title: "Bulk Carrier Emergency Repair",
    category: "Ship Engineering",
    description:
      "Emergency at-anchor repair of main engine fuel injection system for a Panamax bulk carrier.",
    image: "/images/project-6.jpg",
  },
  {
    id: 7,
    title: "Coastal Jetty Foundation Works",
    category: "Civil Construction",
    description:
      "Marine piling and foundation construction for a new fishing jetty in Cox's Bazar.",
    image: "/images/project-7.jpg",
  },
  {
    id: 8,
    title: "Fleet Navigation Modernization",
    category: "Marine Navigation",
    description:
      "Upgraded radar, AIS, and ECDIS systems across a fleet of 8 coastal tankers.",
    image: "/images/project-8.jpg",
  },
];
