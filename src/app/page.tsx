
import Feature from "@/components/Feature";
import Hero from "../components/Hero";
import Services from "@/components/Services";
import ClientTestimonials from "@/components/ClientTestimonials";

export default function Home() {
  return (
    <div className="dark:bg-black">
      <Hero />
      <Feature/>
      <Services/>
      <ClientTestimonials/>
    </div>
  );
}
