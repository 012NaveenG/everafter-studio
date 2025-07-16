import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const ClientTestimonials = () => {
  const testimonials = [
    {
      quote:
        "EverAfter Studio made our wedding day even more magical! The photos captured emotions we didn’t even realize were there.",
      name: "Sarah Chen",
      designation: "Bride  Delhi Wedding",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "From our pre-wedding shoot to the reception, every moment was beautifully framed. Truly storytelling through the lens!",
      name: "Michael Rodriguez",
      designation: "Groom  Goa Destination Wedding",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Their team blended in so naturally, capturing candid shots that now hang on every wall of our home. Couldn’t be happier!",
      name: "Emily Watson",
      designation: "Bride  Jaipur Royal Wedding",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "We were nervous about the shoot, but the photographers made us feel so comfortable. The results? Absolutely breathtaking.",
      name: "James Kim",
      designation: "Groom  Kerala Beach Wedding",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The film they created felt like a fairytale. We watch it again and again, and it never fails to make us cry (happy tears!).",
      name: "Lisa Thompson",
      designation: "Bride  Udaipur Palace Wedding",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section className="relative z-20 py-6 sm:py-10 lg:py-24 max-w-7xl mx-auto">
      <div className="px-4 sm:px-8">
        <h4 className="text-2xl sm:text-3xl lg:text-5xl leading-snug max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          What Our Clients Say
        </h4>

        <p className="text-sm sm:text-base max-w-2xl mt-3 sm:mt-5 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          Real couples. Real moments. Real memories. Here's what our happy
          clients had to say about their experience with EverAfter Studio.
        </p>
      </div>

      <AnimatedTestimonials testimonials={testimonials} />
    </section>
  );
};

export default ClientTestimonials;
