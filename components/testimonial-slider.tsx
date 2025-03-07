"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function TestimonialSlider() {
  // Testimonial data - in a real app, this would be fetched from an API
  const testimonials = [
    {
      id: 1,
      name: "John Smith",
      position: "Executive Chef, Fine Dining Restaurant",
      company: "Gourmet Creations",
      quote:
        "We've been sourcing our rice and spices from DNG FOODS for over 3 years. Their consistent quality and reliable delivery have made them an essential partner for our restaurant.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&h=100&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      position: "Procurement Manager",
      company: "Global Foods Distribution",
      quote:
        "DNG FOODS has been our trusted supplier for wholesale food products. Their premium quality and excellent customer service set them apart from other suppliers in the market.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&h=100&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Michael Chen",
      position: "Owner",
      company: "Chen's Grocery Chain",
      quote:
        "As a retail chain, we need reliable suppliers who can deliver quality products consistently. DNG FOODS has been exceptional in meeting our demands and adapting to our changing needs.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&h=100&auto=format&fit=crop",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState<"left" | "right" | null>(null)

  const handlePrevious = useCallback(() => {
    if (isAnimating) return
    setDirection("left")
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }, [isAnimating, testimonials.length])

  const handleNext = useCallback(() => {
    if (isAnimating) return
    setDirection("right")
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }, [isAnimating, testimonials.length])

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false)
        setDirection(null)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [isAnimating])

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 8000)
    return () => clearInterval(interval)
  }, [handleNext])

  return (
    <div className="relative">
      <Card className="border-none shadow-none overflow-hidden">
        <CardContent className="p-6 md:p-12 flex flex-col items-center text-center">
          <Quote className="h-12 w-12 text-primary/20 mb-6" />
          <div
            className={`relative transition-all duration-500 ease-in-out ${
              isAnimating
                ? direction === "right"
                  ? "translate-x-[-10px] opacity-0"
                  : "translate-x-[10px] opacity-0"
                : "translate-x-0 opacity-100"
            }`}
          >
            <p className="text-xl md:text-2xl italic mb-8 max-w-3xl">"{testimonials[currentIndex].quote}"</p>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                <Image
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  width={100}
                  height={100}
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold text-lg">{testimonials[currentIndex].name}</h3>
              <p className="text-muted-foreground">{testimonials[currentIndex].position}</p>
              <p className="text-muted-foreground">{testimonials[currentIndex].company}</p>
            </div>
          </div>
          <div className="flex gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (index !== currentIndex && !isAnimating) {
                    setDirection(index > currentIndex ? "right" : "left")
                    setIsAnimating(true)
                    setCurrentIndex(index)
                  }
                }}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </CardContent>
      </Card>
      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full shadow-md transition-all duration-300 hover:scale-110"
        onClick={handlePrevious}
        disabled={isAnimating}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Previous testimonial</span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full shadow-md transition-all duration-300 hover:scale-110"
        onClick={handleNext}
        disabled={isAnimating}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Next testimonial</span>
      </Button>
    </div>
  )
}

