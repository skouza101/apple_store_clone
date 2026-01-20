"use client";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  useGSAP(() => {
    gsap.to([".left-column", ".right-column"], {
      scrollTrigger: {
        trigger: "#highlights",
        start: isMobile ? "bottom bottom" : "top center",
      },
      y: 0,
      opacity: 1,
      stagger: 0.5,
      duration: 1,
      ease: "power1.inOut",
    });
  }, [isMobile]);

  return (
    <section id="highlights">
      <h2>Theres never been a better time to upgrade.</h2>
      <h3>Heres what you get with the new MacBook Pro.</h3>

      <div className="masonry">
        <div className="left-column opacity-0 translate-y-20"> <div>
            <Image src="/laptop.png" alt="Laptop" width={300} height={200} />
            <p>Fly through demanding tasks up to 9.8x faster.</p>
          </div>
          <div>
            <Image src="/sun.png" alt="Sun" width={100} height={100} />
            <p>
              A stunning <br />
              Liquid Retina XDR <br />
              display.
            </p>
          </div>
        </div>
        <div className="right-column opacity-0 translate-y-20">
          <div className="apple-gradient">
            <Image src="/ai.png" alt="AI" width={100} height={100} />
            <p>
              Built for <br />
              <span>Apple Intelligence.</span>
            </p>
          </div>
          <div>
            <Image src="/battery.png" alt="Battery" width={100} height={100} />
            <p>
              Up to
              <span className="green-gradient"> 14 more hours </span>
              battery life.
              <span className="text-dark-100"> (Up to 24 hours total.)</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Highlights;
