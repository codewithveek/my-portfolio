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
        title: "E-Commerce Platform",
        thumbnail: "/images/ecommerce-thumb.jpg",
        fullImage: "/images/ecommerce-full.jpg",
        shortDesc: "Full-stack shopping experience with real-time inventory",
        fullDescription: "Built a scalable e-commerce platform handling 10K+ daily users. Implemented real-time inventory management, secure payment processing, and personalized recommendations. Achieved 99.9% uptime and sub-200ms API response times.",
        techStack: ["React", "Node.js", "PostgreSQL", "Redis", "Stripe", "AWS"],
        role: "Lead Developer",
        duration: "4 months",
        highlights: [
            "Reduced page load time by 60%",
            "Implemented CI/CD pipeline",
            "Integrated 3 payment gateways"
        ],
        liveLink: "https://example.com/ecommerce",
        githubLink: "https://github.com/example/ecommerce"
    },
    {
        id: 2,
        title: "Real-Time Analytics Dashboard",
        thumbnail: "/images/dashboard-thumb.jpg",
        fullImage: "/images/dashboard-full.jpg",
        shortDesc: "Interactive data visualization platform for business intelligence",
        fullDescription: "Developed a comprehensive analytics dashboard with real-time data processing and visualization. Features include customizable widgets, data export capabilities, and role-based access control. Handles millions of data points with smooth 60fps chart animations.",
        techStack: ["Vue.js", "Python", "Django", "WebSockets", "D3.js", "Docker"],
        role: "Full Stack Developer",
        duration: "3 months",
        highlights: [
            "Processed 2M+ events per day",
            "Built custom chart library",
            "Achieved 99.99% data accuracy"
        ],
        liveLink: "https://example.com/analytics",
        githubLink: "https://github.com/example/analytics"
    },
    {
        id: 3,
        title: "Social Networking Mobile App",
        thumbnail: "/images/social-thumb.jpg",
        fullImage: "/images/social-full.jpg",
        shortDesc: "Cross-platform mobile application with 50K+ active users",
        fullDescription: "Created a feature-rich social networking app with real-time messaging, photo/video sharing, and content discovery algorithms. Implemented push notifications, offline support, and optimized media delivery. Successfully scaled to support 50,000+ concurrent users.",
        techStack: ["React Native", "Firebase", "GraphQL", "Node.js", "MongoDB"],
        role: "Mobile Developer",
        duration: "6 months",
        highlights: [
            "50K+ downloads in first month",
            "4.8★ average rating",
            "Reduced app size by 40%"
        ],
        liveLink: "https://example.com/socialapp",
        githubLink: "https://github.com/example/socialapp"
    },
    {
        id: 4,
        title: "AI-Powered Content Generator",
        thumbnail: "/images/ai-thumb.jpg",
        fullImage: "/images/ai-full.jpg",
        shortDesc: "Machine learning platform for automated content creation",
        fullDescription: "Built an AI-powered platform that generates marketing copy, blog posts, and social media content. Integrated with OpenAI's GPT models and custom fine-tuned models. Features include tone adjustment, SEO optimization, and multi-language support.",
        techStack: ["Next.js", "Python", "TensorFlow", "PostgreSQL", "Redis", "Docker"],
        role: "Full Stack Developer",
        duration: "5 months",
        highlights: [
            "Generated 1M+ pieces of content",
            "92% user satisfaction rate",
            "Reduced content creation time by 80%"
        ],
        liveLink: "https://example.com/ai-content",
        githubLink: "https://github.com/example/ai-content"
    },
    {
        id: 5,
        title: "Project Management SaaS",
        thumbnail: "/images/pm-thumb.jpg",
        fullImage: "/images/pm-full.jpg",
        shortDesc: "Collaborative workspace for distributed teams",
        fullDescription: "Developed a comprehensive project management tool with kanban boards, Gantt charts, time tracking, and team collaboration features. Includes real-time updates, file sharing, and integration with popular tools like Slack and GitHub. Serves 500+ organizations.",
        techStack: ["React", "TypeScript", "Express", "PostgreSQL", "AWS", "WebSockets"],
        role: "Lead Developer",
        duration: "8 months",
        highlights: [
            "500+ paying organizations",
            "99.95% uptime SLA",
            "Built custom WYSIWYG editor"
        ],
        liveLink: "https://example.com/projectmanager",
        githubLink: "https://github.com/example/projectmanager"
    },
    {
        id: 6,
        title: "Fitness Tracking Progressive Web App",
        thumbnail: "/images/fitness-thumb.jpg",
        fullImage: "/images/fitness-full.jpg",
        shortDesc: "PWA for workout logging and nutrition tracking",
        fullDescription: "Created a progressive web app for fitness enthusiasts to track workouts, nutrition, and progress. Features include offline support, push notifications for workout reminders, barcode scanning for food logging, and integration with wearable devices. Achieved Lighthouse score of 95+.",
        techStack: ["React", "IndexedDB", "Service Workers", "Chart.js", "Firebase"],
        role: "Frontend Developer",
        duration: "3 months",
        highlights: [
            "Lighthouse score: 98/100",
            "Works 100% offline",
            "Integrated with 5 wearable devices"
        ],
        liveLink: "https://example.com/fitness",
        githubLink: "https://github.com/example/fitness"
    }
];
