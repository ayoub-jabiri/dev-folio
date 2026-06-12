import Image from "next/image";

interface Technology {
    id: number;
    title: string;
    icon: string;
}

interface Skill {
    id: number;
    title: string;
    technologies: Technology[];
}

export default function Skills() {
    const skills: Skill[] = [
        {
            id: 1,
            title: "Frontend Development",
            technologies: [
                {
                    id: 101,
                    title: "React",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
                },
                {
                    id: 102,
                    title: "TypeScript",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
                },
                {
                    id: 103,
                    title: "Tailwind CSS",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
                },
                {
                    id: 104,
                    title: "Next.js",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
                },
                {
                    id: 105,
                    title: "Vue.js",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
                },
                {
                    id: 106,
                    title: "Svelte",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg",
                },
            ],
        },
        {
            id: 2,
            title: "Backend & Databases",
            technologies: [
                {
                    id: 201,
                    title: "Node.js",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
                },
                {
                    id: 202,
                    title: "PostgreSQL",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
                },
                {
                    id: 203,
                    title: "MongoDB",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
                },
                {
                    id: 204,
                    title: "Python",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
                },
                {
                    id: 205,
                    title: "Prisma",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
                },
                {
                    id: 206,
                    title: "Redis",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
                },
            ],
        },
        {
            id: 3,
            title: "DevOps & Cloud",
            technologies: [
                {
                    id: 301,
                    title: "Docker",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
                },
                {
                    id: 302,
                    title: "Git",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
                },
                {
                    id: 303,
                    title: "AWS",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
                },
                {
                    id: 304,
                    title: "GitHub Actions",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg",
                },
                {
                    id: 305,
                    title: "Kubernetes",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",
                },
            ],
        },
        {
            id: 4,
            title: "Mobile & Web3",
            technologies: [
                {
                    id: 401,
                    title: "React Native",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
                },
                {
                    id: 402,
                    title: "Flutter",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
                },
                {
                    id: 403,
                    title: "Solidity",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidity/solidity-original.svg",
                },
            ],
        },
    ];
    return (
        <div className="py-8">
            <h1 className="text-3xl max-md:text-center font-bold mb-2">
                Technical{" "}
                <span className="text-(--green-color)">Ecosystem</span>
            </h1>
            <p className="md:w-[400px] text-sm max-md:text-center md:text-justify mb-6">
                A systematic breakdown of my architectural capabilities and
                engineering stack, focused on building scalable,
                high-performance digital products.
            </p>
            <div className="grid grid-cols-12 gap-5">
                {skills.map((skill: Skill) => (
                    <div
                        key={skill.id}
                        className="col-span-12 md:col-span-6 card bg-base-100 p-4 shadow-sm overflow-hidden"
                    >
                        <h2 className="text-xl font-bold mb-2">
                            {skill.title}
                        </h2>
                        <div className="flex max-lg:justify-center flex-wrap gap-1">
                            {skill.technologies.map(
                                (technology: Technology) => (
                                    <div
                                        key={technology.id}
                                        className="w-[100px] flex flex-col justify-center items-center p-2 bg-[#EFF4FF] text-center border border-[#ddd]"
                                    >
                                        <div>
                                            <Image
                                                src={technology.icon}
                                                alt={technology.title}
                                                width={20}
                                                height={20}
                                            />
                                        </div>
                                        <h3>{technology.title}</h3>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
