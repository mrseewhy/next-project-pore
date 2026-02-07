export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            {/* Decorative background elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-96 h-96 bg-amber-500 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl" style={{ animation: 'pulse 3s ease-in-out infinite' }}></div>
            </div>

            {/* Grid overlay for texture */}
            <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '64px 64px' }}></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Left Side - Content */}
                    <div className="order-2 lg:order-1 space-y-8">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 backdrop-blur-sm">
                            <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
                            <span className="text-amber-400 text-sm font-medium tracking-wide">
                                Human Rights Advocate
                            </span>
                        </div>

                        {/* Main Heading */}
                        <div className="space-y-4">
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                                Raising Voices,
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 mt-2">
                                    Restoring Rights
                                </span>
                            </h1>

                            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
                        </div>

                        {/* Description */}
                        <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
                            At Federico & Co, we stand on the frontlines of justice—defending the most vulnerable,
                            challenging systemic abuse, and transforming lives through unwavering legal advocacy.
                            Every case is a battle for dignity. Every voice matters.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 pt-4">
                            <div className="space-y-1">
                                <div className="text-3xl sm:text-4xl font-bold text-white">15+</div>
                                <div className="text-sm text-slate-400">Years Fighting</div>
                            </div>
                            <div className="space-y-1">
                                <div className="text-3xl sm:text-4xl font-bold text-white">500+</div>
                                <div className="text-sm text-slate-400">Lives Changed</div>
                            </div>
                            <div className="space-y-1">
                                <div className="text-3xl sm:text-4xl font-bold text-white">100%</div>
                                <div className="text-sm text-slate-400">Committed</div>
                            </div>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <a
                                href="#get-involved"
                                className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-900 bg-gradient-to-r from-amber-400 to-amber-500 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/50 hover:scale-105"
                            >
                                <span className="relative z-10">Get Involved</span>
                                <svg
                                    className="relative z-10 ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>

                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/20 rounded-lg backdrop-blur-sm hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className="order-1 lg:order-2 relative">
                        {/* Decorative frame */}
                        <div className="absolute -inset-4 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl blur-2xl"></div>

                        {/* Main image container */}
                        <div className="relative">
                            {/* Corner accents */}
                            <div className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-amber-500 rounded-tl-2xl z-20"></div>
                            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 border-amber-500 rounded-br-2xl z-20"></div>

                            {/* Image wrapper with gradient border */}
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                                <div className="aspect-[3/4] relative">
                                    {/* Placeholder image - replace with actual Federico image */}
                                    <img
                                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=1066&fit=crop"
                                        alt="Federico - Human Rights Advocate and Founder of Federico & Co"
                                        className="w-full h-full object-cover"
                                    />

                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>

                                    {/* Name badge overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                                        <div className="space-y-2 backdrop-blur-sm bg-slate-900/50 p-4 rounded-lg border border-white/10">
                                            <h2 className="text-2xl sm:text-3xl font-bold text-white">Federico</h2>
                                            <p className="text-amber-400 font-medium">Founder & Lead Advocate</p>
                                            <p className="text-sm text-slate-300">
                                                Fighting trafficking & abuse since 2009
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating badge */}
                            <div className="absolute -top-6 -right-6 bg-gradient-to-br from-amber-500 to-orange-600 text-white px-6 py-3 rounded-full shadow-xl transform rotate-12 hover:rotate-0 transition-transform duration-300">
                                <div className="text-center">
                                    <div className="text-2xl font-bold">Award</div>
                                    <div className="text-xs">Winning</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block" style={{ animation: 'bounce 2s ease-in-out infinite' }}>
                    <div className="flex flex-col items-center gap-2 text-slate-400">
                        <span className="text-sm tracking-widest">SCROLL</span>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}