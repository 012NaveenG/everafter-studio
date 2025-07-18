"use client";

import { cn } from "@/lib/utils";
import {
    IconCamera,
    IconHeartHandshake,
    IconDrone,
    IconVideo,
    IconStar,
    IconCalendarEvent,
    IconUsersGroup,
    IconAlbum,
} from "@tabler/icons-react";

const Services = () => {
    const features = [
        {
            title: "Candid Photography",
            description:
                "We capture raw emotions, natural smiles, and unscripted moments to tell your real story.",
            icon: <IconCamera size={28} />,
        },
        {
            title: "Pre-Wedding Shoots",
            description:
                "Personalized pre-wedding sessions to showcase your chemistry in a dreamy setting.",
            icon: <IconHeartHandshake size={28} />,
        },
        {
            title: "Drone Videography",
            description:
                "Bird’s eye cinematic views to elevate your wedding video to movie-like magic.",
            icon: <IconDrone size={28} />,
        },
        {
            title: "Cinematic Films",
            description:
                "Professional edits that turn your special day into a timeless short film.",
            icon: <IconVideo size={28} />,
        },
        {
            title: "Album Designing",
            description:
                "Premium albums crafted with love, printed on high-quality paper that lasts generations.",
            icon: <IconAlbum size={28} />,
        },
        {
            title: "Custom Packages",
            description:
                "Every couple is unique, so we offer flexible packages tailored to your needs.",
            icon: <IconCalendarEvent size={28} />,
        },
        {
            title: "Family Portraits",
            description:
                "Don’t forget the people who matter most — we frame precious group moments too.",
            icon: <IconUsersGroup size={28} />,
        },
        {
            title: "Award-Winning Team",
            description:
                "Our photographers are passionate artists recognized for their work in wedding photography.",
            icon: <IconStar size={28} />,
        },
    ];

    return (
        <section className="relative z-20 py-6 sm:py-10 lg:py-24 max-w-7xl mx-auto">
            <div className="px-4 sm:px-8">
                <h4 className="text-2xl sm:text-3xl lg:text-5xl leading-snug max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
                    Our Signature Services
                </h4>

                <p className="text-sm sm:text-base max-w-2xl mt-4 sm:mt-6 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
                    We offer a wide range of wedding photography services to make your
                    big day unforgettable — from pre-wedding vibes to tearful farewells,
                    we are there to capture it all.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
                {features.map((feature, index) => (
                    <Feature key={feature.title} {...feature} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Services;

const Feature = ({
    title,
    description,
    icon,
    index,
}: {
    title: string;
    description: string;
    icon: React.ReactNode;
    index: number;
}) => {
    return (
        <div
            className={cn(
                "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
                (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
                index < 4 && "lg:border-b dark:border-neutral-800"
            )}
        >
            {index < 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
            )}
            {index >= 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
            )}

            <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
                {icon}
            </div>
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
                <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-pink-500 transition-all duration-200 origin-center" />
                <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
                    {title}
                </span>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
                {description}
            </p>
        </div>
    );
};
