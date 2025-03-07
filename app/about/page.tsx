import Image from "next/image"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { IMAGES } from "@/lib/constants"

// Update the facility images
const facilityImages = [
  {
    title: "Storage facility",
    image: IMAGES.facility.warehouse,
  },
  {
    title: "Quality testing lab",
    image: IMAGES.facility.quality_control,
  },
  {
    title: "Processing facility",
    image: IMAGES.facility.processing,
  },
  {
    title: "Packaging center",
    image: IMAGES.facility.packaging,
  },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative py-16 md:py-24">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1444952483853-7c36e902e722?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGFib3V0JTIwZm9vZCUyMGNvbXBhbnl8ZW58MHwwfDB8fHww"
              alt="About Our Company"
              priority
              fill
              className="object-cover brightness-[0.7]"
            />
          </div>
          <div className="container relative z-10">
            <div className="max-w-xl space-y-4 text-white">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">About DNG FOODS</h1>
              <p className="text-lg md:text-xl">A trusted global supplier of premium quality food products.</p>
            </div>
          </div>
        </section>

        {/* Company History */}
        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4">
                  <p>
                    Founded in 2005, DNG FOODS began as a small family business with a vision to connect global food
                    producers with businesses that demand the highest quality standards.
                  </p>
                  <p>
                    Over the past 20 years, we've grown into a trusted international supplier, but our core values
                    remain the same: quality, reliability, and exceptional service.
                  </p>
                  <p>
                    Today, we supply premium food products to restaurants, retailers, and distributors across 30+
                    countries, maintaining direct relationships with farmers and producers to ensure the best quality
                    and pricing for our clients.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1557804506-d8017c1e4856?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2QlMjBjb21wYW55fGVufDB8fDB8fHww"
                  alt="Our company history"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-16 bg-muted/40">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
              <p className="max-w-3xl mx-auto text-muted-foreground">
                We're driven by a passion for quality and a commitment to excellence in everything we do.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To provide the highest quality food products to businesses worldwide while maintaining sustainable
                  relationships with producers and suppliers.
                </p>
              </div>
              <div className="bg-background p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the most trusted global supplier of premium food products, known for our reliability, quality,
                  and exceptional customer service.
                </p>
              </div>
              <div className="bg-background p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Our Values</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                    <span>Quality above all else</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                    <span>Integrity in every transaction</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                    <span>Sustainable practices</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                    <span>Customer-focused service</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Facilities */}
        <section className="py-16 bg-muted/40">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Facilities</h2>
                <div className="space-y-4">
                  <p>
                    We operate state-of-the-art storage and processing facilities across strategic locations around the
                    world, enabling us to maintain the freshness and quality of our products.
                  </p>
                  <p>
                    Our facilities are equipped with modern technology for quality testing, grading, and packaging,
                    ensuring that every product meets our stringent standards before reaching our clients.
                  </p>
                  <p>
                    All our facilities are certified to international standards, including ISO 22000, HACCP, and GMP.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {facilityImages.map((facility, index) => (
                  <div key={index} className="relative h-40 rounded-lg overflow-hidden">
                    <Image
                      src={facility.image || "/placeholder.svg?height=400&width=400"}
                      alt={facility.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call To Action */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Partner With Us</h2>
                <p className="mt-4 opacity-90">
                  Discover the DNG FOODS difference and join our global network of satisfied clients.
                </p>
              </div>
              <div className="flex justify-center md:justify-end">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">Contact us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
