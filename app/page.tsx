import Link from "next/link";

export default function Home() {
    return (
        <div className="text-center h-full flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold flex flex-col mb-4">
                <span>I am John Doe</span>
                <span className="text-(--green-color)">
                    Full Stack Web Developer
                </span>
            </h1>
            <p className="md:w-[600px] mb-4">
                Specializing in modern web architectures and high-performance
                distributed systems. I bridge the gap between complex backend
                logic and pixel-perfect interface precision.
            </p>
            <div className="flex gap-3">
                <button className="btn bg-(--green-color) text-white border border-(--green-color)">
                    <a>Download CV</a>
                </button>
                <button className="btn bg-transparent text-(--green-color) border border-(--green-color)">
                    <Link href="/contact">Contact Me</Link>
                </button>
            </div>
        </div>
    );
}
