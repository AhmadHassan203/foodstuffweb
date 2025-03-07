import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Building2, Users2, Globe2, BarChart4 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { IMAGES } from "@/lib/constants"

// Update the clients array
const clients = [
  { name: "Global Foods Ltd", logo: IMAGES.clients.logo1 },
  { name: "Fresh Mart Chain", logo: IMAGES.clients.logo2 },
  { name: "Spice World", logo: IMAGES.clients.logo3 },
  { name: "Royal Restaurants", logo: IMAGES.clients.logo4 },
  { name: "Quality Foods", logo: IMAGES.clients.logo5 },
  { name: "Gourmet Distributors", logo: IMAGES.clients.logo6 },
  { name: "Food Express", logo: IMAGES.clients.logo7 },
  { name: "Premium Traders", logo: IMAGES.clients.logo8 },
]

// Update the case studies array
const caseStudies = [
  {
    title: "Global Restaurant Chain Supply",
    description: "How we helped a major restaurant chain optimize their supply chain.",
    image: IMAGES.caseStudies.restaurant,
    results: ["30% cost reduction", "99.9% delivery accuracy", "Zero quality incidents"],
  },
  {
    title: "Retail Distribution Network",
    description: "Streamlining distribution for a national retail chain.",
    image: IMAGES.caseStudies.retail,
    results: ["40% faster delivery", "Expanded to 100+ locations", "Improved inventory management"],
  },
  {
    title: "Hotel Chain Partnership",
    description: "Premium quality supply program for luxury hotels.",
    image: IMAGES.caseStudies.hotel,
    results: ["Consistent quality", "Just-in-time delivery", "Custom packaging solutions"],
  },
]

export default function ClientsPage() {
  const stats = [
    { icon: <Building2 className="h-6 w-6" />, value: "500+", label: "Active Clients" },
    { icon: <Globe2 className="h-6 w-6" />, value: "30+", label: "Countries Served" },
    { icon: <Users2 className="h-6 w-6" />, value: "95%", label: "Client Retention" },
    { icon: <BarChart4 className="h-6 w-6" />, value: "20+", label: "Years Experience" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-24">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&h=800&auto=format&fit=crop"
              alt="Our Clients"
              priority
              fill
              className="object-cover brightness-[0.7]"
            />
          </div>
          <div className="container relative z-10">
            <div className="max-w-2xl space-y-4 text-white">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl animate-fade-in">
                Our Valued Clients
              </h1>
              <p className="text-lg md:text-xl text-white/90 animate-fade-in">
                Trusted by leading businesses worldwide for premium food products and reliable service.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-muted/30">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-fade-in">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Logos */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Trusted by Industry Leaders</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                We're proud to work with some of the most respected names in the food industry.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 stagger-animation">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="group relative aspect-square overflow-hidden rounded-lg border hover-lift animate-fade-in"
                >
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={client.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold text-lg text-center px-4">{client.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Success Stories</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Discover how we've helped our clients achieve their business goals.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <Card key={index} className="overflow-hidden hover-lift animate-fade-in">
                  <div className="aspect-video relative">
                    <Image src={study.image || "/placeholder.svg"} alt={study.title} fill className="object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                    <p className="text-muted-foreground mb-4">{study.description}</p>
                    <ul className="space-y-2">
                      {study.results.map((result, rIndex) => (
                        <li key={rIndex} className="flex items-center gap-2 text-sm">
                          <ArrowRight className="h-4 w-4 text-primary" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Join Our Client Network</h2>
                <p className="mt-4 opacity-90">Experience the difference of working with DNG FOODS.</p>
              </div>
              <div className="flex justify-center md:justify-end animate-slide-in">
                <Button size="lg" variant="secondary" className="transition-all duration-300 hover:scale-105" asChild>
                  <Link href="/contact">Become a Client</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

