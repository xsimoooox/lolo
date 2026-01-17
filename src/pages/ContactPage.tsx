import gsap from "gsap";
import { useEffect, useRef } from "react";
import { FaTwitter, FaDiscord, FaYoutube, FaTwitch } from "react-icons/fa";
import { Button } from "@/components/button";

export const ContactPage = () => {
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

            // Form Animation
            gsap.from(".contact-form", {
                x: -50,
                opacity: 0,
                duration: 1,
                delay: 0.3,
                ease: "power2.out",
            });

            // Info Animation
            gsap.from(".contact-info", {
                x: 50,
                opacity: 0,
                duration: 1,
                delay: 0.3,
                ease: "power2.out",
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative min-h-screen w-full overflow-x-hidden bg-blue-50 pt-32 px-6">
            <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
                <img src="/img/contact-bg.png" alt="Background" className="w-full h-full object-cover" />
            </div>

            <div className="container mx-auto relative z-10">
                <h1 ref={titleRef} className="font-zentry text-6xl md:text-8xl text-center mb-12 uppercase text-blue-200">
                    Contact Us
                </h1>

                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start mt-16">
                    {/* Form Section */}
                    <div className="contact-form w-full md:w-2/3 bg-white rounded-2xl shadow-xl p-8 md:p-12 order-2 md:order-1">
                        <h2 className="font-robert-medium text-3xl mb-8 text-blue-200">Get in Touch</h2>
                        <form className="space-y-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="uppercase text-xs font-bold text-blue-200 tracking-widest">Name</label>
                                <input type="text" id="name" className="w-full bg-blue-50 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-300 transition-all" placeholder="Your Name" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="uppercase text-xs font-bold text-blue-200 tracking-widest">Email</label>
                                <input type="email" id="email" className="w-full bg-blue-50 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-300 transition-all" placeholder="your@email.com" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="uppercase text-xs font-bold text-blue-200 tracking-widest">Message</label>
                                <textarea id="message" rows={5} className="w-full bg-blue-50 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-300 resize-none transition-all" placeholder="How can we help?"></textarea>
                            </div>

                            <div className="pt-4">
                                <Button
                                    id="contact-submit"
                                    containerClass="w-full !bg-violet-300 text-white font-bold uppercase tracking-widest py-4 rounded-lg hover:bg-violet-500 transition-colors"
                                >
                                    Send Message
                                </Button>
                            </div>
                        </form>
                    </div>

                    {/* Info Section */}
                    <div className="contact-info w-full md:w-1/3 space-y-8 order-1 md:order-2">
                        <div className="bg-violet-300/10 p-8 rounded-2xl border border-violet-100">
                            <h3 className="font-robert-medium text-2xl mb-4 text-blue-200">Customer Support</h3>
                            <p className="text-gray-600 mb-4">Need help with your account or having technical issues?</p>
                            <a href="mailto:support@zentry.com" className="text-violet-500 font-bold hover:underline">support@zentry.com</a>
                        </div>

                        <div className="bg-blue-100/30 p-8 rounded-2xl border border-blue-100">
                            <h3 className="font-robert-medium text-2xl mb-4 text-blue-200">Socials</h3>
                            <p className="text-gray-600 mb-6">Follow us for the latest updates and behind-the-scenes content.</p>
                            <div className="flex gap-4">
                                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-200 hover:bg-violet-300 hover:text-white transition-all shadow-sm">
                                    <FaTwitter />
                                </a>
                                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-200 hover:bg-violet-300 hover:text-white transition-all shadow-sm">
                                    <FaDiscord />
                                </a>
                                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-200 hover:bg-violet-300 hover:text-white transition-all shadow-sm">
                                    <FaYoutube />
                                </a>
                                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-200 hover:bg-violet-300 hover:text-white transition-all shadow-sm">
                                    <FaTwitch />
                                </a>
                            </div>
                        </div>

                        <div className="p-8">
                            <h3 className="font-robert-medium text-xl mb-4 text-blue-200">Office</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                123 Gaming Blvd<br />
                                Digital City, CA 90210<br />
                                United States
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
