"use client"
import { useRef , useEffect } from "react"
import Image from "next/image"
const Hero = () => {
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 2
        }
    }, [])

  return (
    <section id="hero">
        <div className="">
            <h1>MacBook Pro</h1>
            <Image src="/title.png" alt="hero" width={600} height={100} />
        </div>
        <div className="">
            <video src="/videos/hero.mp4" autoPlay muted playsInline ref={videoRef} />
        </div>
        <button>buy now</button>
        <p>from $1999 or $83.33/mo. for 24 mo.</p>
    </section>
  )
}

export default Hero