
import Link from "next/link";


export default function Hero3() {
    return (
        <main className="bg-white">
            {/* HERO */}
            <section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
                <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">

                    {/* LEFT: TEXT */}
                    <div className="text-center lg:text-left">
                        <h1 className="font-head text-4xl font-semibold tracking-tight text-indigo-900 sm:text-5xl">
                            Raising Voices,
                        </h1>
                        <h1 className="font-head text-4xl font-semibold tracking-tight text-indigo-800 sm:text-5xl mt-4">
                            Restoring Rights
                        </h1>

                        <p className="font-body mt-6 max-w-xl text-lg leading-relaxed text-indigo-950/90 mx-auto lg:mx-0">
                            I help founders and growing teams create digital identities that are
                            clear, confident, and built to last. Thoughtful design, grounded in
                            strategy and purpose. At Federico & Co, we stand on the frontlines of justice—defending the most vulnerable,
                            challenging systemic abuse, and transforming lives through unwavering legal advocacy.
                            Every case is a battle for dignity. Every voice matters.
                        </p>

                        <div className="mt-10 flex justify-center lg:justify-start">
                            <Link
                                href="/get-involved"
                                className="rounded-full bg-indigo-600 px-7 py-3 font-head  font-bold text-white transition hover:bg-indigo-700"
                            >
                                Get Involved
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT: IMAGE */}
                    <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
                        <div className="overflow-hidden rounded-2xl bg-gray-100">
                            <img
                                src="/images/as.jpg"
                                alt="Federico — designer and creative director"
                                width={600}
                                height={750}
                                priority
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                </div>
            </section>

            {/* OPTIONAL SOFT SEPARATOR */}
            <div className="mx-auto max-w-7xl px-6">
                <div className="h-px w-full bg-gray-200" />
            </div>
        </main>
    );
}
