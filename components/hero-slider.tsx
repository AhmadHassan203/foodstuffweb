"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"

// Update the slides array
const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?q=80&w=2000&h=1000&auto=format&fit=crop",
    title: "Premium Quality Food Products",
    // description: "DNG FOODS supplies high-quality rice, dals, spices, and more to businesses worldwide.",
    cta: { text: "View Products", link: "/products" },
  },
  {
    id: 2,
    image: "https://cdn.pixabay.com/photo/2019/07/31/14/43/spice-4375361_1280.jpg",
    title: "Finest Quality Spices",
    // description: "Discover our premium selection of aromatic spices sourced from the best regions.",
    cta: { text: "Explore Spices", link: "/products#spices" },
  },
  {
    id: 3,
    image: "https://media.istockphoto.com/id/153737841/photo/rice.jpg?s=612x612&w=0&k=20&c=lfO7iLT0UsDDzra0uBOsN1rvr2d5OEtrG2uwbts33_c=",
    title: "Premium Rice Varieties",
    // description: "From Basmati to Jasmine, explore our extensive collection of premium rice.",
    cta: { text: "View Rice", link: "/products#rice" },
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState<"left" | "right" | null>(null)

  const goToSlide = (index: number) => {
    if (isAnimating) return
    setDirection(index > currentSlide ? "right" : "left")
    setIsAnimating(true)
    setCurrentSlide(index)
  }

  const nextSlide = useCallback(() => {
    if (isAnimating) return
    setDirection("right")
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }, [isAnimating])

  const prevSlide = () => {
    if (isAnimating) return
    setDirection("left")
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false)
        setDirection(null)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [isAnimating])

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 6000)
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <section className="relative h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-500 ease-in-out ${
            index === currentSlide
              ? "opacity-100 translate-x-0"
              : direction === "right"
                ? "opacity-0 translate-x-full"
                : "opacity-0 -translate-x-full"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10" />
          <Image src={slide.image || "/placeholder.svg"} alt={slide.title} fill priority className="object-cover" />
          <div className="relative z-20 h-full flex items-center">
            <div className="container">
              <div
                className={`max-w-xl space-y-6 transition-all duration-500 ${
                  index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">{slide.title}</h1>
                {/* <p className="text-lg text-white/90 md:text-xl">{slide.description}</p> */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="lg" className="btn-gradient rounded-full shadow-lg" asChild>
                    <Link href={slide.cta.link}>{slide.cta.text}</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="glass-effect text-white hover:bg-white/20 transition-all duration-300 hover:scale-105 rounded-full"
                    asChild
                  >
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 rounded-full glass-effect text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
        onClick={prevSlide}
        disabled={isAnimating}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Previous slide</span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 rounded-full glass-effect text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
        onClick={nextSlide}
        disabled={isAnimating}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Next slide</span>
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white w-8" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

