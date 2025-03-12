import Image from "next/image"
import Link from "next/link"
import { ChevronRight, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import ProductCarousel from "@/components/product-carousel"
import HeroSlider from "@/components/hero-slider"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Slider */}
        <HeroSlider />

        {/* Product Categories */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-muted/50 to-background">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12 animate-fade-in">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-2">Our Premium Products</h2>
              <div className="w-20 h-1 bg-primary rounded-full mb-6"></div>
              <p className="mt-4 text-muted-foreground max-w-3xl">
                We source the finest quality food products from around the world to meet your business needs.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 stagger-animation">
              {[
                {
                  name: "Rice",
                  image: "https://images.pexels.com/photos/4110255/pexels-photo-4110255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=800&dpr=crop",
                  description: "Premium varieties",
                },
                {
                  name: "Pulses",
                  image: "https://cdn.pixabay.com/photo/2013/07/25/12/03/chana-166987_1280.jpg",
                  description: "Nutritious & fresh",
                },
                // {
                //   name: "Cumin Seeds (Zira)",
                //   image: "https://cdn.pixabay.com/photo/2016/11/29/05/45/cumin-seeds-1868034_1280.jpg",
                //   description: "Aromatic & flavorful",
                // },
                {
                  name: "Spices",
                  image: "https://cdn.pixabay.com/photo/2016/12/17/18/51/spices-1914130_1280.jpg",
                  description: "Aromatic & flavorful",
                },
                {
                  name: "Sugar",
                  image: "https://cdn.pixabay.com/photo/2020/04/13/22/55/sugar-5040276_1280.jpg",
                  description: "Refined & natural",
                },
                {
                  name: "Ghee",
                  image: "https://cdn.pixabay.com/photo/2024/07/01/04/15/ai-generated-8864288_1280.png",
                  description: "Pure & authentic",
                },
                {
                  name: "Flour",
                  image: "https://cdn.pixabay.com/photo/2016/07/19/15/58/flour-1528396_1280.jpg",
                  description: "Versatile & fresh",
                },
                // {
                //   name: "All Purpose Flour",
                //   image: "https://cdn.pixabay.com/photo/2016/07/19/15/58/flour-1528396_1280.jpg",
                //   description: "Versatile & fresh",
                // },
                // {
                //   name: "Maida",
                //   image: "https://cdn.pixabay.com/photo/2016/07/19/15/58/flour-1528396_1280.jpg",
                //   description: "Versatile & fresh",
                // },
                {
                  name: "Eggs",
                  image: "https://cdn.pixabay.com/photo/2017/08/04/18/04/egg-2580904_1280.jpg",
                  description: "Farm fresh quality",
                },
                {
                  name: "More",
                  image:
                    "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=300&h=300&auto=format&fit=crop",
                  description: "View all products",
                },
              ].map((category, index) => (
                <Link
                  href={`/products#${category.name.toLowerCase()}`}
                  key={index}
                  className="group relative overflow-hidden rounded-xl hover-lift animate-fade-in"
                >
                  <div className="image-zoom-container">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      width={300}
                      height={300}
                      className="aspect-square object-cover image-zoom"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4">
                    <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                    <p className="text-sm text-white/90">{category.description}</p>
                    <div className="mt-2 w-8 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-2">About DNG FOODS</h2>
                <div className="w-20 h-1 bg-primary rounded-full mb-6"></div>
                <p className="mt-4 text-muted-foreground">
                Welcome to DNG FOODS, your trusted source for high-quality, sustainable food. We offer fresh, globally sourced ingredients to inspire every kitchen, catering to all tastes and dietary needs. 
                </p>
                <p className="mt-4 text-muted-foreground">
                  Our mission is to connect global producers with businesses, ensuring the highest quality standards and
                  efficient supply chains.
                  Thank you for choosing us to make cooking enjoyable and memorable.
                </p>
                <div className="mt-8">
                  <Button className="btn-gradient rounded-full shadow-lg" asChild>
                    <Link href="/about" className="flex items-center gap-2">
                      Learn More <ChevronRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden animate-scale-in">
                <Image
                  src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=600&h=800&auto=format&fit=crop"
                  alt="Our facility"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent mix-blend-multiply"></div>
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg animate-float">
                  <p className="text-sm font-medium">Trusted by</p>
                  <p className="text-2xl font-bold text-primary">500+ Clients</p>
                  <p className="text-sm text-muted-foreground">Across 30+ countries</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12 animate-fade-in">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-2">Featured Products</h2>
              <div className="w-20 h-1 bg-primary rounded-full mb-6"></div>
              <p className="mt-4 text-muted-foreground max-w-3xl">
                Discover our most popular premium quality food products
              </p>
            </div>
            <ProductCarousel />
          </div>
        </section>

        {/* Stats Section */}
        {/* <section className="py-12 bg-primary text-white">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "20+", label: "Years Experience" },
                { value: "500+", label: "Happy Clients" },
                { value: "30+", label: "Countries Served" },
                { value: "1000+", label: "Products" },
              ].map((stat, index) => (
                <div key={index} className="text-center animate-fade-in">
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                  <div className="text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Call To Action */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80 text-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold">Ready to Partner With Us?</h2>
                <p className="mt-4 opacity-90">
                  Join our network of satisfied clients and experience the difference of working with a trusted
                  supplier.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end animate-slide-in">
                <Button
                  size="lg"
                  variant="secondary"
                  className="rounded-full shadow-lg transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4" />
                    Get Started
                  </Link>
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
        </section>
      </main>
    </div>
  )
}