export interface Skill {
    name: string;
    icon: string;
    proficiency: number; // 0-100 percentage
    years: number;
    description: string;
}

export interface SkillCategory {
    category: string;
    items: Skill[];
}

export const skills: SkillCategory[] = [
    {
        category: "Frontend",
        items: [
            {
                name: "JavaScript",
                icon: "javascript",
                proficiency: 95,
                years: 6,
                description: "Expert in modern ES6+ features, async patterns, and performance optimization"
            },
            {
                name: "TypeScript",
                icon: "typescript",
                proficiency: 90,
                years: 4,
                description: "Advanced type systems, generics, and strict typing for large-scale applications"
            },
            {
                name: "React",
                icon: "react",
                proficiency: 95,
                years: 5,
                description: "Deep knowledge of hooks, context, performance optimization, and modern patterns"
            },
            {
                name: "Next.js",
                icon: "nextjs",
                proficiency: 88,
                years: 3,
                description: "Server-side rendering, static generation, API routes, and app router expertise"
            },
            {
                name: "Vue.js",
                icon: "vue",
                proficiency: 85,
                years: 3,
                description: "Composition API, Vuex state management, and component architecture"
            },
            {
                name: "HTML5",
                icon: "html",
                proficiency: 98,
                years: 7,
                description: "Semantic markup, accessibility best practices, and modern web standards"
            },
            {
                name: "CSS3",
                icon: "css",
                proficiency: 95,
                years: 7,
                description: "Advanced layouts, animations, responsive design, and CSS architecture"
            },
            {
                name: "Tailwind CSS",
                icon: "tailwind",
                proficiency: 92,
                years: 3,
                description: "Utility-first CSS, custom configurations, and design system implementation"
            }
        ]
    },
    {
        category: "Backend",
        items: [
            {
                name: "Node.js",
                icon: "nodejs",
                proficiency: 92,
                years: 5,
                description: "Scalable server applications, microservices, and real-time systems"
            },
            {
                name: "Python",
                icon: "python",
                proficiency: 85,
                years: 4,
                description: "Django, Flask, data processing, and API development"
            },
            {
                name: "Express.js",
                icon: "express",
                proficiency: 90,
                years: 5,
                description: "RESTful APIs, middleware architecture, and authentication systems"
            },
            {
                name: "GraphQL",
                icon: "graphql",
                proficiency: 82,
                years: 2,
                description: "Schema design, resolvers, and Apollo Server implementation"
            },
            {
                name: "REST APIs",
                icon: "api",
                proficiency: 95,
                years: 6,
                description: "API design, documentation, versioning, and best practices"
            }
        ]
    },
    {
        category: "Database",
        items: [
            {
                name: "PostgreSQL",
                icon: "postgresql",
                proficiency: 88,
                years: 4,
                description: "Complex queries, indexing, optimization, and database design"
            },
            {
                name: "MongoDB",
                icon: "mongodb",
                proficiency: 85,
                years: 4,
                description: "Document modeling, aggregation pipelines, and performance tuning"
            },
            {
                name: "Redis",
                icon: "redis",
                proficiency: 80,
                years: 3,
                description: "Caching strategies, pub/sub patterns, and session management"
            },
            {
                name: "Firebase",
                icon: "firebase",
                proficiency: 83,
                years: 3,
                description: "Realtime database, authentication, hosting, and cloud functions"
            }
        ]
    },
    {
        category: "DevOps & Tools",
        items: [
            {
                name: "Docker",
                icon: "docker",
                proficiency: 85,
                years: 3,
                description: "Containerization, multi-stage builds, and orchestration"
            },
            {
                name: "AWS",
                icon: "aws",
                proficiency: 78,
                years: 3,
                description: "EC2, S3, Lambda, CloudFront, and infrastructure as code"
            },
            {
                name: "Git",
                icon: "git",
                proficiency: 95,
                years: 6,
                description: "Advanced workflows, branching strategies, and collaboration"
            },
            {
                name: "CI/CD",
                icon: "cicd",
                proficiency: 82,
                years: 3,
                description: "GitHub Actions, automated testing, and deployment pipelines"
            },
            {
                name: "Linux",
                icon: "linux",
                proficiency: 80,
                years: 4,
                description: "Server administration, bash scripting, and system optimization"
            }
        ]
    }
];
