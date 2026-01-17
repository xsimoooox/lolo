import gsap from "gsap";
import { useEffect, useRef } from "react";

export const AboutPage = () => {
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

            // Paragraphs Reveal
            gsap.from(".about-text", {
                opacity: 0,
                y: 30,
                duration: 0.8,
                stagger: 0.2,
                delay: 0.3,
                ease: "power2.out",
            });

            // Mission Box Scale Up
            gsap.from(".mission-box", {
                scale: 0.8,
                opacity: 0,
                duration: 0.8,
                delay: 0.8,
                ease: "back.out(1.7)",
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative min-h-screen w-full overflow-x-hidden bg-blue-50 pt-32 px-6">
            <div className="container mx-auto">
                <h1 ref={titleRef} className="font-zentry text-6xl md:text-8xl text-center mb-12 uppercase text-blue-200">
                    About Us
                </h1>
                <div className="max-w-4xl mx-auto font-circular-web text-lg md:text-xl text-blue-200/80 space-y-6">
                    <p className="about-text">
                        We are a passionate team of developers, artists, and storytellers dedicated to crafting immersive digital experiences. Our journey began with a simple idea: to create worlds that players can truly get lost in.
                    </p>
                    <p className="about-text">
                        Driven by innovation and a love for gaming, we push the boundaries of what is possible in interactive entertainment. Our studio is built on the belief that games are not just a pastime, but a medium for profound storytelling and connection.
                    </p>
                    <p className="about-text">
                        From humble beginnings in a small garage to a global studio, our values remain the same: Player First, Creativity Always.
                    </p>

                    <div className="mission-box mt-16 bg-white p-10 rounded-2xl shadow-xl border border-blue-100 relative overflow-hidden group">
                        <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                            <img src="/img/about-mission.png" alt="Mission" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-violet-100 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-500 ease-out z-10 mix-blend-multiply"></div>
                        <h2 className="font-robert-medium text-3xl mb-6 text-blue-200 relative z-20">Our Mission</h2>
                        <p className="relative z-20 italic font-medium text-blue-900">
                            "To minimize the gap between reality and imagination, delivering unparallelled adventures to players around the globe, fostering communities that transcend borders."
                        </p>
                    </div>

                    <div className="mt-20">
                        <h2 className="font-zentry text-4xl text-center mb-10 text-blue-200 uppercase">The Team</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="about-text flex flex-col items-center">
                                    <div className="w-24 h-24 md:w-32 md:h-32 bg-blue-200 rounded-full mb-4 overflow-hidden shadow-md">
                                        {/* Placeholder avatar */}
                                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="Team Member" className="w-full h-full object-cover" />
                                    </div>
                                    <h3 className="font-robert-medium text-lg text-blue-200">Member {i}</h3>
                                    <p className="text-xs text-blue-200/60 uppercase tracking-wider">Role Title</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
