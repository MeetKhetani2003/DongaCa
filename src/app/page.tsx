import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import SpecializedServices from "@/components/SpecializedServices";
import Process from "@/components/Process";
import Quote from "@/components/Quote";
import CTA from "@/components/CTA";
import Marquee from "@/components/Marquee";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee/>
      <About />
      <Services />
      <SpecializedServices />
      <Process />
      <Quote />
      <CTA />
    </>
  );
}
