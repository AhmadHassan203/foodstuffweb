"use client"

import Image from "next/image"
import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { IMAGES } from "@/lib/constants"

export default function ContactPage() {
  const offices = [
    {
      city: "Dubai",
      country: "UAE",
      address: " Dubai, UAE",
      image: IMAGES.offices.dubai,
      phone: "+971 54 314 9589",
      email: "info@dngfoodstuff.com",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-24">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2000&h=800&auto=format&fit=crop"
              alt="Contact Us"
              priority
              fill
              className="object-cover brightness-[0.7]"
            />
          </div>
          <div className="container relative z-10">
            <div className="max-w-2xl space-y-4 text-white">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl animate-fade-in">
                Get in Touch
              </h1>
              <p className="text-lg md:text-xl text-white/90 animate-fade-in">
                We're here to help with all your food supply needs.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="py-16"> {/* Add id here */}
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="space-y-8 animate-fade-in">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight">Send us a Message</h2>
                  <p className="text-muted-foreground mt-2">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First name</Label>
                      <Input
                        id="first-name"
                        name="first-name"
                        placeholder="Enter your first name"
                        className="dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder:text-gray-400"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last name</Label>
                      <Input
                        id="last-name"
                        name="last-name"
                        placeholder="Enter your last name"
                        className="dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder:text-gray-400"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      className="dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder:text-gray-400"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Enter your company name"
                      className="dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder:text-gray-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inquiry-type">Type of Inquiry</Label>
                    <Select name="inquiry-type" required>
                      <SelectTrigger className="dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent className="dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                        <SelectItem value="general" className="dark:hover:bg-gray-700">
                          General Inquiry
                        </SelectItem>
                        <SelectItem value="sales" className="dark:hover:bg-gray-700">
                          Sales Query
                        </SelectItem>
                        <SelectItem value="support" className="dark:hover:bg-gray-700">
                          Support
                        </SelectItem>
                        <SelectItem value="partnership" className="dark:hover:bg-gray-700">
                          Partnership
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your requirements"
                      className="min-h-[150px] dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder:text-gray-400"
                      required
                    />
                  </div>

                  <Button size="lg" className="w-full sm:w-auto" type="submit">
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="animate-fade-in">
                  <h2 className="text-3xl font-bold tracking-tight">Contact Information</h2>
                  <p className="text-muted-foreground mt-2">Reach out to us through any of our global offices.</p>
                </div>

                <div className="grid gap-6">
                  {offices.map((office, index) => (
                    <Card key={index} className="overflow-hidden hover-lift animate-fade-in">
                      <div className="aspect-[4/3] relative">
                        <Image
                          src={office.image || "/placeholder.svg"}
                          alt={`${office.city} Office`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-4">
                          {office.city}, {office.country}
                        </h3>
                        <div className="space-y-3 text-sm">
                          <div className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span>{office.address}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-primary shrink-0" />
                            <span>{office.phone}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-primary shrink-0" />
                            <span>{office.email}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Our Global Presence</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                With offices strategically located around the world, we're always close to our clients.
              </p>
            </div>
            <div className="aspect-[21/9] relative rounded-lg overflow-hidden animate-fade-in">
              <Image
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&h=1000&auto=format&fit=crop"
                alt="Global Map"
                fill
                className="object-cover"
              />
              {offices.map((office, index) => (
                <div
                  key={index}
                  className="absolute w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-150 transition-transform duration-300"
                  style={{
                    top: `${30 + index * 20}%`,
                    left: `${20 + index * 30}%`,
                  }}
                >
                  <span className="absolute top-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-primary text-primary-foreground px-2 py-1 rounded text-sm">
                    {office.city}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Need Immediate Assistance?</h2>
                <p className="mt-4 opacity-90">Our team is available 24/7 to handle urgent inquiries.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end animate-slide-in">
                <Button
                  size="lg"
                  variant="secondary"
                  className="transition-all duration-300 hover:scale-105"
                  onClick={() => {
                    window.location.href = `tel:${offices[0].phone}`
                  }}
                >
                  Call Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-105"
                  onClick={() => {
                    const contactFormSection = document.getElementById("contact-form")
                    if (contactFormSection) {
                      contactFormSection.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  Contact Now
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}