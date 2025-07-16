"use client"
import Image from "next/image";

const Feature = () => {
  const images = [
  {
    src: "https://images.unsplash.com/photo-1597157639073-69284dc0fdaf?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    colSpan: "sm:col-span-2",
    rowSpan: "sm:row-span-2",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1682090795093-9b9434a455ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5kaWFuJTIwd2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1505932794465-147d1f1b2c97?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwd2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    src: "https://images.unsplash.com/flagged/photo-1572534779127-b64758946728?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    colSpan: "sm:col-span-2",
    rowSpan: "sm:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1610173827043-9db50e0d8ef9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5kaWFuJTIwd2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
];

    return (
        <section className="relative  z-20 py-6 sm:py-10 lg:py-24 max-w-7xl mx-auto">
            <div className="px-4 sm:px-8">
                <h4 className="text-2xl sm:text-3xl lg:text-5xl leading-snug max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
                    Preserving Love, One Frame at a Time
                </h4>

                <p className="text-sm sm:text-base max-w-2xl mt-3 sm:mt-5 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
                    Every wedding tells a story — of joy, emotion, and timeless love. Our lens captures more than moments; it preserves the magic of your most special day forever.
                </p>
            </div>

            {/* Gallery Section */}
            <div className="mx-auto max-w-7xl px-4 py-8 sm:py-12">
                
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 auto-rows-[200px] gap-4">
                    {images.map((img, i) => (
                        <div
                            key={i}
                            className={`relative overflow-hidden rounded-xl group ${img.colSpan} ${img.rowSpan}`}
                        >
                            <img
                                src={img.src}
                                alt={`Wedding ${i + 1}`}
                                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
}

export default Feature




