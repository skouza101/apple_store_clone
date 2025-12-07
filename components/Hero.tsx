"use client"
import { useRef , useEffect } from "react"
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
            <img src="/title.png" alt="hero" />
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