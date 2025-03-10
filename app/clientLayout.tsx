"use client"

import type React from "react"
import { Inter } from "next/font/google"
import Link from "next/link"
import { MapPin, Mail, Phone, Menu, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import ScrollToTop from "@/components/scroll-to-top"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <ThemeProvider>
      <html lang="en" className="scroll-smooth">
        <head>
          <title>DNG FOODS - Premium Food Products</title>
          <meta
            name="description"
            content="Global supplier of premium quality food products including rice, pulses, spices, and more."
          />
        </head>
        <body className={inter.className}>
          <div className="flex flex-col min-h-screen">
            <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
            <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
                <div className="flex gap-6 md:gap-10">
                  <Link href="/" className="flex items-center space-x-2">
                    <Image
                      src="\logo.png"
                      alt="DNG FOODS Logo"
                      width={200} // Increased width
                      height={100} // Increased height
                      className="h-20 w-auto" // Adjusted className to make it bigger
                    />
                  </Link>
                  <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                    <Link href="/" className="transition-colors hover:text-primary relative group">
                      Home
                      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                    </Link>
                    <Link href="/products" className="transition-colors hover:text-primary relative group">
                      Products
                      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                    </Link>
                    <Link href="/services" className="transition-colors hover:text-primary relative group">
                      Services
                      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                    </Link>
                    <Link href="/about" className="transition-colors hover:text-primary relative group">
                      About Us
                      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                    </Link>
                    <Link href="/clients" className="transition-colors hover:text-primary relative group">
                      Clients
                      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                    </Link>
                    <Link href="/contact" className="transition-colors hover:text-primary relative group">
                      Contact
                      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                    </Link>
                  </nav>
                </div>
                <div className="flex flex-1 items-center justify-end space-x-4">
                  <Button className="hidden sm:flex btn-gradient" asChild>
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                  <ThemeToggle />
                  <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </div>
              </div>
            </header>

            {children}

            <footer className="bg-muted py-12">
              <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold gradient-text">DNG FOODS</h3>
                    <p className="text-muted-foreground">Premium quality food products for businesses worldwide.</p>
                    <div className="flex space-x-4 pt-2">
                      <a
                        href="#"
                        className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold">Quick Links</h3>
                    <nav className="flex flex-col space-y-2">
                      <Link href="/" className="hover:text-primary transition-colors duration-200">
                        Home
                      </Link>
                      <Link href="/products" className="hover:text-primary transition-colors duration-200">
                        Products
                      </Link>
                      <Link href="/about" className="hover:text-primary transition-colors duration-200">
                        About Us
                      </Link>
                      <Link href="/services" className="hover:text-primary transition-colors duration-200">
                        Services
                      </Link>
                      <Link href="/clients" className="hover:text-primary transition-colors duration-200">
                        Clients
                      </Link>
                      <Link href="/contact" className="hover:text-primary transition-colors duration-200">
                        Contact
                      </Link>
                    </nav>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold">Products</h3>
                    <nav className="flex flex-col space-y-2">
                      <Link href="/products#rice" className="hover:text-primary transition-colors duration-200">
                        Rice
                      </Link>
                      <Link href="/products#pulses" className="hover:text-primary transition-colors duration-200">
                        Pulses
                      </Link>
                      <Link href="/products#spices" className="hover:text-primary transition-colors duration-200">
                        Spices
                      </Link>
                      <Link href="/products#sugar" className="hover:text-primary transition-colors duration-200">
                        Sugar
                      </Link>
                      <Link href="/products#ghee" className="hover:text-primary transition-colors duration-200">
                        Ghee
                      </Link>
                      <Link href="/products#flour" className="hover:text-primary transition-colors duration-200">
                        Flour
                      </Link>
                      <Link href="/products#eggs" className="hover:text-primary transition-colors duration-200">
                        Eggs
                      </Link>
                    </nav>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold">Contact</h3>
                    <div className="flex flex-col space-y-2 text-muted-foreground">
                      <div className="flex items-start gap-2">
                        <MapPin className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                        <span>Dubai, UAE</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-5 w-5 text-primary" />
                        <span>+971 54 314 9589</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-5 w-5 text-primary" />
                        <span>info@dngfoodstuff.com</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
                  <p>© {new Date().getFullYear()} DNG FOODS. All rights reserved.</p>
                </div>
              </div>
            </footer>

            {/* Add ScrollToTop component */}
            <ScrollToTop />
          </div>
        </body>
      </html>
    </ThemeProvider>
  )
}

function MobileNav({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <div
      className={`fixed inset-0 z-50 md:hidden transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div
        className="fixed inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-background p-6 shadow-lg transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2" onClick={onClose}>
            <Image
              src="\logo.png"
              alt="DNG FOODS Logo"
              width={200} // Increased width
              height={100} // Increased height
              className="h-20 w-auto" // Adjusted className to make it bigger
            />
          </Link>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
            <span className="sr-only">Close menu</span>
          </Button>
        </div>
        <nav className="mt-6 flex flex-col space-y-4">
          <Link href="/" className="py-2 text-lg font-medium hover:text-primary" onClick={onClose}>
            Home
          </Link>
          <Link href="/products" className="py-2 text-lg font-medium hover:text-primary" onClick={onClose}>
            Products
          </Link>
          <Link href="/services" className="py-2 text-lg font-medium hover:text-primary" onClick={onClose}>
            Services
          </Link>
          <Link href="/about" className="py-2 text-lg font-medium hover:text-primary" onClick={onClose}>
            About Us
          </Link>
          <Link href="/clients" className="py-2 text-lg font-medium hover:text-primary" onClick={onClose}>
            Clients
          </Link>
          <Link href="/contact" className="py-2 text-lg font-medium hover:text-primary" onClick={onClose}>
            Contact
          </Link>
        </nav>
      </div>
    </div>
  )
}