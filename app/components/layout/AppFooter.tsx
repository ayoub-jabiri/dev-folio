import Link from "next/link";

export default function AppFooter() {
    return (
        <footer className="bg-[#EFF4FF] py-4 border-t border-[#ddd]">
            <div className="container flex justify-between items-center text-sm">
                <Link href="/" className="main-trasntion hover:text-black">
                    John Doe
                </Link>
                <ul className="flex gap-3">
                    <li>
                        <a
                            href="#"
                            className="main-trasntion hover:text-(--green-color)"
                        >
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="main-trasntion hover:text-(--green-color)"
                        >
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="main-trasntion hover:text-(--green-color)"
                        >
                            Email
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
