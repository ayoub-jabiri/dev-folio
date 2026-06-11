import Image from "next/image";

interface Project {
    id: number;
    image: string;
    techsUsed: string[];
    title: string;
    description: string;
    sourceCode: string;
    demo: string;
}

export default function Portfolio() {
    const projects: Project[] = [
        {
            id: 1,
            title: "E-Commerce Dashboard",
            description:
                "A real-time administrative panel tracking sales metrics, inventory levels, and user activity with interactive data visualizations.",
            techsUsed: [
                "React",
                "TypeScript",
                "Tailwind CSS",
                "Recharts",
                "Node.js",
            ],
            sourceCode: "https://github.com",
            demo: "https://ecommerce-dashboard.dev",
            image: "https://plus.unsplash.com/premium_photo-1681566925294-7ff6eba5a9c2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 2,
            title: "Collaborative Kanban Board",
            description:
                "A project management tool featuring drag-and-drop task cards, live team collaboration, and instant status updates.",
            techsUsed: [
                "Next.js",
                "Socket.io",
                "Prisma",
                "PostgreSQL",
                "Tailwind CSS",
            ],
            sourceCode: "https://github.com",
            demo: "https://vercel.app",
            image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 3,
            title: "AI Flashcard Generator",
            description:
                "A micro SaaS application that leverages large language models to turn user-uploaded PDFs into study flashcards.",
            techsUsed: ["Vue.js", "Express", "OpenAI API", "MongoDB", "Docker"],
            sourceCode: "https://github.com",
            demo: "https://aiflashcards.io",
            image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 4,
            title: "Decentralized Voting System",
            description:
                "A secure, transparent voting application powered by smart contracts to ensure tamper-proof election polling.",
            techsUsed: ["Solidity", "Hardhat", "React", "Ethers.js", "Web3"],
            sourceCode: "https://github.com",
            demo: "https://eth-voting-demo.net",
            image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 5,
            title: "Fitness Tracker Mobile Web App",
            description:
                "A progressive web application allowing users to log workouts, map running routes via GPS, and set caloric goals.",
            techsUsed: [
                "Svelte",
                "SvelteKit",
                "Capacitor",
                "Firebase",
                "Leaflet.js",
            ],
            sourceCode: "https://github.com",
            demo: "https://web.app",
            image: "https://plus.unsplash.com/premium_photo-1681666713641-8d722b681edc?q=80&w=910&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ];

    return (
        <div className="py-8">
            <h1 className="text-3xl font-bold mb-2">
                Engineered{" "}
                <span className="text-(--green-color)">Experiences.</span>
            </h1>
            <p className="w-[400px] text-sm text-justify mb-6">
                A curated selection of architectural software solutions,
                focusing on performance, scalability, and clean system design.
                Built with precision and modern engineering principles.
            </p>
            <div className="grid grid-cols-12 gap-5">
                {projects.map((project: Project) => (
                    <div
                        key={project.id}
                        className="col-span-4 card bg-base-100 shadow-sm overflow-hidden"
                    >
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={500}
                            height={300}
                        />
                        <div className="p-4">
                            <div className="flex flex-wrap gap-3 mb-2">
                                {project.techsUsed.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="text-[11px] bg-[#eff4ff] font-bold p-1 border"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <h2 className="font-bold mb-2">{project.title}</h2>
                            <p className="text-sm mb-2">
                                {project.description}
                            </p>
                            <div className="flex gap-3">
                                <a
                                    className="link link-hover text-sm"
                                    href={project.sourceCode}
                                >
                                    GitHub
                                </a>
                                <a
                                    className="link link-hover text-sm"
                                    href={project.demo}
                                >
                                    Live Demo
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
