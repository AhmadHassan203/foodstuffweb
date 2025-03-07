import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Truck, Package, Scale, Warehouse, ShieldCheck, BarChart3, CheckCircle2, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import TestimonialSlider from "@/components/testimonial-slider"

export default function ServicesPage() {
  const services = [
    {
      icon: <Package className="h-10 w-10" />,
      title: "Bulk Supply Solutions",
      description: "Custom packaging and bulk quantities for businesses of all sizes.",
      features: [
        "Flexible packaging options",
        "Volume-based pricing",
        "Custom labeling available",
        "Quality assurance",
      ],
    },
    {
      icon: <Truck className="h-10 w-10" />,
      title: "Global Distribution",
      description: "Efficient worldwide shipping and logistics services.",
      features: ["International shipping", "Door-to-door delivery", "Real-time tracking", "Express options available"],
    },
    {
      icon: <Scale className="h-10 w-10" />,
      title: "Quality Control",
      description: "Rigorous testing and quality assurance processes.",
      features: ["Lab testing facilities", "Quality certifications", "Regular inspections", "Compliance monitoring"],
    },
    {
      icon: <Warehouse className="h-10 w-10" />,
      title: "Storage Solutions",
      description: "State-of-the-art warehousing and inventory management.",
      features: ["Climate-controlled storage", "Inventory tracking", "Security monitoring", "Stock management"],
    },
    {
      icon: <ShieldCheck className="h-10 w-10" />,
      title: "Product Certification",
      description: "Assistance with product certifications and compliance.",
      features: ["International standards", "Documentation support", "Regulatory compliance", "Quality certificates"],
    },
    {
      icon: <BarChart3 className="h-10 w-10" />,
      title: "Market Analysis",
      description: "Expert market insights and trend analysis.",
      features: ["Market research", "Trend analysis", "Competitive pricing", "Growth opportunities"],
    },
  ]

  const process = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "We discuss your requirements and business needs.",
    },
    {
      number: "02",
      title: "Custom Solution",
      description: "We design a tailored solution for your business.",
    },
    {
      number: "03",
      title: "Quality Check",
      description: "Rigorous quality testing of selected products.",
    },
    {
      number: "04",
      title: "Delivery",
      description: "Efficient delivery to your specified location.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-24">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2000&h=800&auto=format&fit=crop"
              alt="Our Services"
              priority
              fill
              className="object-cover brightness-[0.7]"
            />
          </div>
          <div className="container relative z-10">
            <div className="max-w-2xl space-y-4 text-white">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl animate-fade-in">
                Comprehensive Food Supply Services
              </h1>
              <p className="text-lg md:text-xl text-white/90 animate-fade-in">
                From sourcing to delivery, we provide end-to-end solutions for your food supply needs.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Our Services</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                We offer a comprehensive range of services to meet all your food supply requirements.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
              {services.map((service, index) => (
                <Card key={index} className="group hover-lift animate-fade-in">
                  <CardContent className="p-6">
                    <div className="mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Our Process</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                A streamlined approach to ensure quality and efficiency in every step.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="relative group animate-fade-in">
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent -translate-y-1/2 z-0" />
                  )}
                  <div className="relative z-10 text-center p-6">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <span className="text-2xl font-bold text-primary">{step.number}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Why Choose Our Services?</h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <Users className="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Expert Team</h3>
                      <p className="text-muted-foreground">
                        Our experienced professionals ensure the highest quality standards.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <ShieldCheck className="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Quality Assured</h3>
                      <p className="text-muted-foreground">Rigorous quality control processes at every step.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Truck className="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Global Reach</h3>
                      <p className="text-muted-foreground">
                        Efficient distribution network spanning multiple countries.
                      </p>
                    </div>
                  </div>
                </div>
                <Button size="lg" className="transition-all duration-300 hover:scale-105" asChild>
                  <Link href="/contact" className="flex items-center gap-2">
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden animate-scale-in">
                <Image
                  src="https://plus.unsplash.com/premium_photo-1661962751752-cbf6a170c837?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGZhY2lsaXR5JTIwb2YlMjBmb29kJTIwY29tcGFueXxlbnwwfDB8MHx8fDA%3D"
                  alt="Our facility"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        {/* <section className="py-16">
          <div className="container">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">What Our Clients Say</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Hear from businesses who have experienced our services.
              </p>
            </div>
            <TestimonialSlider />
          </div>
        </section> */}

        {/* Call to Action */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Ready to Get Started?</h2>
                <p className="mt-4 opacity-90">Contact us today to discuss how we can support your business needs.</p>
              </div>
              <div className="flex justify-center md:justify-end animate-slide-in">
                <Button size="lg" variant="secondary" className="transition-all duration-300 hover:scale-105" asChild>
                  <Link href="/contact">Contact Our Team</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

