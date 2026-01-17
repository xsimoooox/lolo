import gsap from "gsap";
import { useEffect, useRef } from "react";

export const Platforms = () => {
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

            // Cards Stagger Animation
            gsap.from(".platform-card", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
                delay: 0.2,
            });

            // Text Fade In
            gsap.from(".platform-text", {
                opacity: 0,
                duration: 1,
                delay: 0.2,
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative min-h-screen w-full overflow-x-hidden bg-blue-50 pt-32 px-6">
            {/* Hero Background */}
            <div className="absolute top-0 left-0 w-full h-[50vh] z-0 overflow-hidden">
                <img src="/img/platform-header.png" alt="Platforms Background" className="w-full h-full object-cover opacity-30 mask-image-gradient" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-50"></div>
            </div>

            <div className="container mx-auto relative z-10">
                <h1 ref={titleRef} className="font-zentry text-6xl md:text-8xl text-center mb-12 uppercase text-blue-200">
                    Our Platforms
                </h1>
                <div className="max-w-6xl mx-auto text-center font-circular-web text-lg md:text-xl text-blue-200/80">
                    <p className="platform-text mb-6 max-w-3xl mx-auto">
                        Experience the game across multiple cutting-edge platforms. Whether on PC, Console, or Mobile, the adventure awaits with cross-play functionality and cloud save support.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-left">
                        {/* PC */}
                        <div className="platform-card p-8 rounded-lg bg-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-blue-100 group">
                            <div className="h-12 w-12 bg-blue-200 rounded-full mb-6 flex items-center justify-center group-hover:bg-violet-300 transition-colors">
                                <span className="text-white text-xl">🖥️</span>
                            </div>
                            <h3 className="font-robert-medium text-2xl mb-4 text-blue-200 group-hover:text-violet-300 transition-colors">PC / Desktop</h3>
                            <p className="text-sm text-gray-600 mb-4">Unleash the full potential with 4K resolution, unlocked framerates, and ray-tracing support.</p>
                            <ul className="text-xs text-gray-500 space-y-2">
                                <li>• NVIDIA DLSS 3.0 Support</li>
                                <li>• Ultra-Wide Monitor Support</li>
                                <li>• Fully Key-mappable Controls</li>
                            </ul>
                        </div>

                        {/* PS5 */}
                        <div className="platform-card p-8 rounded-lg bg-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-blue-100 group">
                            <div className="h-12 w-12 bg-blue-600 rounded-full mb-6 flex items-center justify-center group-hover:bg-violet-300 transition-colors">
                                <span className="text-white text-xl">🎮</span>
                            </div>
                            <h3 className="font-robert-medium text-2xl mb-4 text-blue-200 group-hover:text-violet-300 transition-colors">PlayStation 5</h3>
                            <p className="text-sm text-gray-600 mb-4">Feel every impact with immersive DualSense™ haptic feedback and adaptive triggers.</p>
                            <ul className="text-xs text-gray-500 space-y-2">
                                <li>• 4K @ 60FPS Performance Mode</li>
                                <li>• 3D Audio Engine Support</li>
                                <li>• Activity Cards Integration</li>
                            </ul>
                        </div>

                        {/* Xbox */}
                        <div className="platform-card p-8 rounded-lg bg-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-blue-100 group">
                            <div className="h-12 w-12 bg-green-600 rounded-full mb-6 flex items-center justify-center group-hover:bg-violet-300 transition-colors">
                                <span className="text-white text-xl">❎</span>
                            </div>
                            <h3 className="font-robert-medium text-2xl mb-4 text-blue-200 group-hover:text-violet-300 transition-colors">Xbox Series X</h3>
                            <p className="text-sm text-gray-600 mb-4">Power your dreams with Quick Resume and Dolby Vision HDR gaming.</p>
                            <ul className="text-xs text-gray-500 space-y-2">
                                <li>• 120 FPS Support</li>
                                <li>• Smart Delivery</li>
                                <li>• Dolby Atmos Support</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
