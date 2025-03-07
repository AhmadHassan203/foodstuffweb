"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ProductCarousel() {
  // Select featured products with real images
  const featuredProducts = [
    // Basmati Rice
    {
      id: 1,
      name: "Basmati Rice",
      description: "Premium aged basmati rice with aromatic flavor",
      price: "Wholesale pricing",
      image: "https://t4.ftcdn.net/jpg/05/16/35/47/360_F_516354718_dPoyJgoRz2CQPNUuzzBbc6JCCfMRwrD9.jpg",
      category: "rice",
    },
    // Green Cardamom
    {
      id: 11,
      name: "Green Cardamom",
      description: "Premium green cardamom pods with intense aroma",
      image: "https://images.unsplash.com/photo-1701190588800-67a7007492ad?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "Wholesale pricing",
      category: "spices",
    },
    // Pure Cow Ghee
    {
      id: 26,
      name: "Pure Cow Ghee",
      description: "Traditional clarified butter made from pure cow's milk",
      price: "Wholesale pricing",
      image: "https://t3.ftcdn.net/jpg/07/25/62/64/360_F_725626447_vJOVfhq0warxn3Kl18XYRkYMh1Z0Ouqp.jpg",
      category: "ghee",
    },
    // Jasmine Rice
    {
      id: 2,
      name: "Jasmine Rice",
      description: "Fragrant jasmine rice imported from Thailand",
      price: "Wholesale pricing",
      image: "https://media.istockphoto.com/id/1322613316/photo/rice-in-wooden-bowl-on-rice-and-rice-ears-background-natural-food-high-in-protein.jpg?s=612x612&w=0&k=20&c=jYWVKwTwptgrFojDno7GW8x9iF2LakyoMTzzrZfY1tE=",
      category: "rice",
    },
    // Saffron Threads
    {
      id: 12,
      name: "Saffron Threads",
      description: "Premium quality Spanish saffron threads",
      price: "Wholesale pricing",
      image: "https://media.istockphoto.com/id/944259818/photo/saffron-in-wooden-bowl-on-wooden-table-with-saffron-flowers-on-the-side.jpg?s=612x612&w=0&k=20&c=xQEN8Wj7i0MT1_0HP6x7ssZuEyUGvpX0_-Lj1QzvHAU=",
      category: "spices",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleItems, setVisibleItems] = useState(3)
  const [isAnimating, setIsAnimating] = useState(false)
  const maxIndex = Math.max(0, featuredProducts.length - visibleItems)

  // Set visible items based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(1)
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2)
      } else {
        setVisibleItems(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Reset current index if needed when visible items change
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex)
    }
  }, [maxIndex, currentIndex])

  const handlePrevious = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => Math.max(0, prev - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const handleNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (isAnimating) return

      if (currentIndex < maxIndex) {
        setIsAnimating(true)
        setCurrentIndex((prev) => prev + 1)
        setTimeout(() => setIsAnimating(false), 500)
      } else {
        setIsAnimating(true)
        setCurrentIndex(0)
        setTimeout(() => setIsAnimating(false), 500)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex, maxIndex, isAnimating])

  // Calculate item width based on visible items
  const itemWidth = 100 / visibleItems

  return (
    <div className="relative px-8 md:px-12">
      {/* Previous Button */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full shadow-lg bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        onClick={handlePrevious}
        disabled={currentIndex === 0 || isAnimating}
      >
        <ChevronLeft className="h-5 w-5" />
        <span className="sr-only">Previous</span>
      </Button>

      {/* Carousel Container */}
      <div className="w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * itemWidth}%)`,
          }}
        >
          {featuredProducts.map((product) => (
            <div key={product.id} className="flex-shrink-0 px-3" style={{ width: `${itemWidth}%` }}>
              <Link href={`/products/${product.id}`} className="block h-full">
                <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300 border border-border/50 rounded-xl">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-semibold line-clamp-1">{product.name}</h3>
                    <p className="mt-2 text-muted-foreground text-sm md:text-base line-clamp-2">
                      {product.description}
                    </p>
                    <div className="mt-4 flex justify-between items-center">
                      <p className="font-medium text-sm md:text-base">{product.price}</p>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-full"
                      >
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Next Button */}
      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full shadow-lg bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        onClick={handleNext}
        disabled={currentIndex >= maxIndex || isAnimating}
      >
        <ChevronRight className="h-5 w-5" />
        <span className="sr-only">Next</span>
      </Button>

      {/* Indicators */}
      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "w-6 bg-primary" : "bg-muted-foreground/30"
            }`}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true)
                setCurrentIndex(index)
                setTimeout(() => setIsAnimating(false), 500)
              }
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

