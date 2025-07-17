"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
const AboutUs = () => {
    return (
        <section
            id="about"
            className="relative z-20 mb-5  px-6 sm:px-10 max-w-7xl mx-auto text-gray-800 dark:text-gray-100 "
        >
            <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
                <div
                    className={cn(
                        "absolute inset-0",
                        "[background-size:20px_20px]",
                        "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
                        "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
                    )}
                />
                {/* Radial gradient for the container to give a faded look */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

                <div>
                    <div className="text-center max-w-3xl mx-auto mb-10">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                            About EverAfter Studio
                        </h2>
                        <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300">
                            Every love story is unique, and we are here to tell yours through timeless, elegant, and emotionally rich photography.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10  ">
                        {/* Text */}
                        <div  >
                            <h3 className="text-2xl font-semibold mb-4">Why Couples Choose Us</h3>
                            <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                                <li>
                                    💍 Over 10 years of experience capturing weddings across India
                                </li>
                                <li>
                                    🎞️ Expertise in candid, traditional, and cinematic photography
                                </li>
                                <li>
                                    📸 Passionate photographers who understand emotion and timing
                                </li>
                                <li>
                                    💌 Personalized packages crafted to suit your story and style
                                </li>
                            </ul>
                        </div>

                        <div className="w-full h-56 rounded-xl overflow-hidden shadow-xl">
                            <Image
                            width={100}
                            height={100}
                                src="https://images.unsplash.com/photo-1583878545126-2f1ca0142714?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="EverAfter Team at work"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
