import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <div className="h-full grid grid-cols-12 justify-center items-center gap-3">
            <div className="col-span-12 md:col-span-5">
                <Image src="/image.png" alt="Image" width={400} height={200} />
            </div>
            <div className="col-span-12 md:col-span-7">
                <h1 className="text-(--green-color) font-bold">
                    ARCHITECT & ENGINEER
                </h1>
                <p className="text-3xl font-bold mb-4">
                    Building digital systems with mathematical precision.
                </p>
                <p className="mb-4">
                    I am a systems-thinker who bridges the gap between complex
                    backend architecture and fluid user experiences. With nearly
                    a decade of experience in high-growth tech environments, I
                    specialize in building scalable web applications that
                    prioritize performance without sacrificing aesthetic
                    integrity.
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
        </div>
    );
}
