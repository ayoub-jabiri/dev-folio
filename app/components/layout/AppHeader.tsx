import Link from "next/link";

interface NavLink {
    id: number;
    title: string;
    path: string;
}

export default function AppHeader() {
    const navLinks: NavLink[] = [
        {
            id: 1,
            title: "home",
            path: "/",
        },
        {
            id: 2,
            title: "about",
            path: "/about",
        },
        {
            id: 3,
            title: "portfolio",
            path: "/portfolio",
        },
        {
            id: 4,
            title: "skills",
            path: "/skills",
        },
        {
            id: 5,
            title: "contact",
            path: "/contact",
        },
    ];

    return (
        <header className="bg-(--background-color) py-2 border-b border-[#ddd]">
            <div className="container">
                <nav className="flex justify-between items-center">
                    <Link
                        href="/"
                        className="text-(--green-color) text-xl font-bold"
                    >
                        DevArchitect
                    </Link>
                    <ul className="flex gap-5">
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <Link
                                    href={link.path}
                                    className="block capitalize py-2 main-transition hover:text-(--green-color) hover:underline"
                                >
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
