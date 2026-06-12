import {
    RiGithubFill,
    RiLinkedinBoxFill,
    RiMailLine,
    RiSendPlane2Line,
    RiTwitterXLine,
} from "@remixicon/react";
import React from "react";

interface SocialLink {
    id: number;
    title: string;
    icon: React.ReactNode;
    url: string;
}

export default function Contact() {
    const socialLinks: SocialLink[] = [
        {
            id: 1,
            title: "GitHub",
            icon: <RiGithubFill className="w-[20px]" />,
            url: "https://github.com",
        },
        {
            id: 2,
            title: "LinkedIn",
            icon: <RiLinkedinBoxFill className="w-[20px]" />,
            url: "https://linkedin.com",
        },
        {
            id: 3,
            title: "Twitter / X",
            icon: <RiTwitterXLine className="w-[20px]" />,
            url: "https://x.com",
        },
    ];

    return (
        <div className="py-8">
            <h1 className="text-(--green-color) text-3xl max-md:text-center font-bold mb-2">
                Initiate Dialogue
            </h1>
            <p className="md:w-[400px] text-sm max-md:text-center md:text-justify mb-6">
                Ready to build the next generation of architectural software?
                Use the form below to reach out or connect via technical social
                channels.
            </p>
            <div className="grid grid-cols-12">
                <div className="col-span-12 md:col-span-6">
                    <div className="card bg-base-100 w-96 shadow-sm p-6">
                        <div className="mb-4">
                            <label className="text-(--green-color)">Name</label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                className="input"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="text-(--green-color)">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="john@example.com"
                                className="input"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="text-(--green-color)">
                                Message
                            </label>
                            <textarea
                                className="textarea resize-none"
                                placeholder="Describe your architectural vision..."
                            ></textarea>
                        </div>
                        <button className="btn bg-(--green-color) text-white border border-(--green-color) flex justify-center items-center">
                            <span>Deploy Message</span>
                            <RiSendPlane2Line className="w-[20px]" />
                        </button>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-6">
                    <div className="card bg-base-100 w-96 shadow-sm p-6">
                        <h2 className="mb-2">Direct Contact</h2>
                        <a
                            href="#"
                            className="flex items-center gap-1 text-(--green-color)"
                        >
                            <RiMailLine />
                            <span>hello@devarchitect.io</span>
                        </a>
                        <div className="divider"></div>
                        <h2 className="mb-2">Network Nodes</h2>
                        <div className="flex justify-between">
                            {socialLinks.map((link: SocialLink) => (
                                <a
                                    key={link.id}
                                    href="#"
                                    className="flex justify-center items-center gap-1"
                                >
                                    <div>{link.icon}</div>
                                    <h3 className="text-sm">{link.title}</h3>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
