import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const ClientTestimonials = () => {
  const testimonials = [
  {
    quote:
      "EverAfter Studio ne hamari shaadi ko ek sapna bana diya! Har ek pal ko itni khoobsurti se capture kiya gaya hai.",
    name: "Priya Sharma",
    designation: "Bride  Delhi Wedding",
    src: "https://images.unsplash.com/photo-1729101143873-d80050bae219?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Pre-wedding shoot se lekar reception tak, har moment ek kahani ke tarah dikhaya gaya. Truly storytelling through lens!",
    name: "Raj Malhotra",
    designation: "Groom  Goa Destination Wedding",
    src: "https://plus.unsplash.com/premium_photo-1691030256264-59cdf9414ed1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Team ne itna naturally kaam kiya, jaise family ka hissa ho. Ab inki photos har deewar par sajti hain.",
    name: "Neha Verma",
    designation: "Bride  Jaipur Royal Wedding",
    src: "https://plus.unsplash.com/premium_photo-1723568666044-1b066e26b1fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwZ2lybCUyMGZvciUyMHRlc3RpbW9uaWFsfGVufDB8fDB8fHww",
  },
  {
    quote:
      "Shoot ke liye hum nervous the, par photographers ne itna aaram se sab handle kiya. Photos toh bas kamaal hain!",
    name: "Aman Mehra",
    designation: "Groom  Kerala Beach Wedding",
    src: "https://images.unsplash.com/photo-1667839410402-c4266dc7f1d0?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Jo wedding film banayi, woh ek fairytale jaise lagti hai. Har baar dekh kar aankhon mein aansu aa jaate hain  khushi ke!",
    name: "Anjali Desai",
    designation: "Bride Udaipur Palace Wedding",
    src: "https://images.unsplash.com/photo-1676134339009-7665cfe7765e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];


  return (
    <section className="relative z-20 py-6 sm:py-10 lg:py-24 max-w-7xl mx-auto">
      <div className="px-4 sm:px-8">
        <h4 className="text-2xl sm:text-3xl lg:text-5xl leading-snug max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          What Our Clients Say
        </h4>

        <p className="text-sm sm:text-base max-w-2xl mt-3 sm:mt-5 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          Real couples. Real moments. Real memories. Here is what our happy
          clients had to say about their experience with EverAfter Studio.
        </p>
      </div>

      <AnimatedTestimonials testimonials={testimonials} />
    </section>
  );
};

export default ClientTestimonials;
