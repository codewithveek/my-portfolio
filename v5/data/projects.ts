export interface Project {
  id: number;
  title: string;
  thumbnail: string;
  fullImage: string;
  shortDesc: string;
  fullDescription: string;
  techStack: string[];
  role: string;
  duration: string;
  highlights: string[];
  liveLink?: string;
  githubLink?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Real Estate Platform",
    thumbnail: "/images/real-estate.png",
    fullImage: "/images/real-estate.png",
    shortDesc: "Scalable platform for property listings, virtual tours",
    fullDescription:
      "Built a scalable real estate platform. Implemented real-time property listings, blog,and personalized recommendations. Achieved 99.9% uptime and sub-200ms API response times.",
    techStack: ["React", "Node.js", "MySQL", "Next.js"],
    role: "Lead Developer",
    duration: "",
    highlights: [
      "Reduced page load time by 60%",
      "Implemented CI/CD pipeline",
      "Integrated payment gateways",
    ],
    liveLink: "http://savvreal-estate.gelapps.online",
    githubLink: "https://github.com/codewithveek/sav-real-estate",
  },
  {
    id: 2,
    title: "FluxMedia",
    thumbnail: "/images/fluxmedia-sdk.png",
    fullImage: "/images/fluxmedia-sdk.png",
    shortDesc:
      "TypeScript-first media upload SDK with one API across Cloudinary, S3, and R2",
    fullDescription:
      "Built FluxMedia, a provider-agnostic media upload SDK that lets teams write upload logic once and switch providers without rewriting app code. The platform includes a unified API, plugin system, React hooks, and a tree-shakeable package architecture focused on production DX.",
    techStack: ["TypeScript", "React", "Node.js", "Cloudinary", "AWS S3"],
    role: "Creator & Maintainer",
    duration: "Ongoing",
    highlights: [
      "Unified API for Cloudinary, S3, and R2",
      "Plugin system with validation, logging, and retry workflows",
      "Tree-shakeable package structure with React integration",
    ],
    liveLink: "https://fluxmedia.dev/",
    githubLink: "https://github.com/codewithveek/fluxmedia",
  },
  {
    id: 4,
    title: "Afriex SDK",
    thumbnail: "/images/afriex-sdk.png",
    fullImage: "/images/afriex-sdk.png",
    shortDesc:
      "Type-safe SDK for integrating Afriex Business API in JS/TS apps",
    fullDescription:
      "Built and documented the Afriex SDK to simplify integration with core business API workflows including customers, transactions, payment methods, balances, rates, and webhooks. The SDK is modular, resilient, and strongly typed for safer integrations.",
    techStack: ["TypeScript", "SDK Design", "API Integration", "Node.js"],
    role: "SDK Engineer",
    duration: "24 hrs",
    highlights: [
      "Type-safe SDK surface with modular package usage",
      "Built-in retry logic and robust error handling",
      "Comprehensive coverage for customers, rates, transactions, and webhooks",
    ],
    liveLink: "https://afriex-sdk-docs.vercel.app/",
    githubLink: "https://github.com/codewithveek/afriex-sdk",
  },
];
