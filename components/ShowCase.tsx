"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

const ShowCase = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  useGSAP(() => {
    if (!isTablet) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#showcase",
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
      });

      tl.to(".mask img", {
        transform: "scale(1.1)",
      }).to(".content", {
        opacity: 1,
        y: 0,
        ease: "power1.in",
      });
    }
  }, [isTablet]);

  return (
    <section id="showcase">
      <div className="media">
        <video src="/videos/game.mp4" loop muted playsInline autoPlay />
        <div className="mask">
          <img src="/mask-logo.svg" alt="Showcase Mask" />
        </div>
      </div>

      <div className="content">
        <div className="wrapper">
          <div className="lg:max-w-md">
            <h2>Rocket chip</h2>
            <div className="mt-7 pe-10 space-y-5">
              <p>
                Introducing{" "}
                <span>
                  M4 chip, the world&apos;s fastest chip designed for Mac.
                </span>{" "}
                . M4 powers
              </p>
              <p>
                It drives Apple Silicon Macs up to 50% faster than previous
                generation, and up to 25% more energy efficient.
              </p>
              <p>
                A brand new chip for Mac. It&apos;s the world&apos;s first
                5-nanometer chip designed for Mac.
              </p>
              <p className="text-primary">Learn more about the M4 chip</p>
            </div>
          </div>
          <div className="max-w-3sx space-y-14">
            <div className="space-y-2">
              <p>Up to</p>
              <h3>4x faster</h3>
              <p>pro rendering performance than previous generation</p>
            </div>
            <div className="space-y-2">
              <p>Up to</p>
              <h3>1.5x faster</h3>
              <p>CPU performance than previous generation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowCase;
