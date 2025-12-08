import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductViwer from "@/components/ProductViwer";
import ShowCase from "@/components/ShowCase";
import Performance from "@/components/Performance";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Features from "@/components/Features";

import Highlights from "@/components/Highlights";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductViwer />
      <ShowCase />
      <Performance />
      <Highlights />
      <Features />
    </main>
  );
}
