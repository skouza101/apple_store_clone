import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductViwer from "@/components/ProductViwer";
import ShowCase from "@/components/ShowCase";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductViwer />
      <ShowCase />
    </main>
  );
}
