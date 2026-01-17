import gsap from "gsap";
import { useEffect, useRef } from "react";

export const Blog = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Title Animation
            gsap.from(titleRef.current, {
                y: -50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            });

            // Featured Post Animation
            gsap.from(".featured-post", {
                scale: 0.95,
                opacity: 0,
                duration: 1,
                delay: 0.3,
                ease: "power2.out",
            });

            // Blog Cards Stagger
            gsap.from(".blog-card", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                delay: 0.6,
                ease: "power2.out",
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const posts = [
        {
            id: 1,
            title: "The Making of the Zentry World",
            date: "October 12, 2023",
            category: "Development",
            excerpt: "Dive deep into the creative process behind the environments of Zentry. From concept art to 3D rendering, discover how we build our immersive worlds.",
            imageColor: "bg-red-200",
        },
        {
            id: 2,
            title: "Update 1.2: New Horizons",
            date: "November 5, 2023",
            category: "Patch Notes",
            excerpt: "Explore the new features and regions added in our latest patch including dynamic weather systems and new raid bosses.",
            imageColor: "bg-green-200",
        },
        {
            id: 3,
            title: "Community Spotlight: Player Creations",
            date: "December 20, 2023",
            category: "Community",
            excerpt: "Highlighting the amazing creations and stories from our player community. See the top fan art and in-game screenshots of the month.",
            imageColor: "bg-yellow-200",
        },
        {
            id: 4,
            title: "Esports Tournament Announced",
            date: "January 15, 2024",
            category: "Events",
            excerpt: "Get ready for the biggest competitive event of the year. Registration opens next week with a prize pool of $100,000.",
            imageColor: "bg-purple-200",
        },
    ];

    return (
        <div ref={containerRef} className="relative min-h-screen w-full overflow-x-hidden bg-blue-50 pt-32 px-6">
            <div className="container mx-auto">
                <h1 ref={titleRef} className="font-zentry text-6xl md:text-8xl text-center mb-12 uppercase text-blue-200">
                    Latest News
                </h1>

                {/* Featured Post */}
                <div className="featured-post max-w-6xl mx-auto mb-16 rounded-2xl overflow-hidden shadow-2xl bg-white grid grid-cols-1 md:grid-cols-2 group cursor-pointer">
                    <div className="h-64 md:h-auto relative overflow-hidden">
                        <img src="/img/blog-featured.png" alt="Featured Post" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                    </div>
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                        <span className="text-violet-300 font-bold uppercase tracking-widest text-xs mb-4">Featured Story</span>
                        <h2 className="font-robert-medium text-3xl md:text-4xl text-blue-200 mb-6 group-hover:text-violet-500 transition-colors">The Future of Zentry: Roadmap 2025</h2>
                        <p className="text-gray-600 mb-8 text-lg">
                            We are thrilled to unveil our long-term vision for the Zentry universe. Join us as we explore upcoming expansions, new gameplay mechanics, and the evolution of our storytelling.
                        </p>
                        <div className="flex items-center gap-2 text-blue-200 font-medium group-hover:translate-x-2 transition-transform">
                            <span>Read Full Story</span>
                            <span>→</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {posts.map((post) => (
                        <div key={post.id} className="blog-card bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col group cursor-pointer">
                            <div className={`h-48 ${post.imageColor || 'bg-blue-200'} w-full relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-black/10 group-hover:scale-110 transition-transform duration-500"></div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-xs font-bold text-violet-300 uppercase tracking-wider">{post.category}</span>
                                    <span className="text-xs text-gray-400">{post.date}</span>
                                </div>
                                <h3 className="font-robert-medium text-2xl mb-3 text-blue-200 group-hover:text-violet-500 transition-colors leading-tight">{post.title}</h3>
                                <p className="text-sm text-gray-600 mb-6 flex-1 line-clamp-3">{post.excerpt}</p>
                                <button className="text-blue-200 font-bold uppercase text-xs tracking-widest group-hover:text-violet-500 transition-colors self-start flex items-center gap-1">
                                    Read More <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
