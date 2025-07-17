
import Feature from "@/components/Feature";
import Hero from "../components/Hero";
import Services from "@/components/Services";
import ClientTestimonials from "@/components/ClientTestimonials";
import Footer from "@/components/Footer";
import AboutUs from "@/components/AboutUs";

export default function Home() {
  return (
    <div className="dark:bg-black">
      <Hero />
      <Feature/>
      <Services/>
      <ClientTestimonials/>
      <AboutUs/>
      <Footer/>
    </div>
  );
}
