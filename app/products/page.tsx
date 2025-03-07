"use client"

import { useState, useEffect, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, ChevronDown, ChevronUp, ArrowUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PRODUCTS } from "@/lib/constants/products"

export default function ProductsPage() {
  // Memoize all products to prevent recalculation on every render
  const allProducts = useMemo(() => Object.values(PRODUCTS).flat(), [])

  // State for filtering and view
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [viewMode, setViewMode] = useState("grid")
  const [filteredProducts, setFilteredProducts] = useState(allProducts)
  const [sortOrder, setSortOrder] = useState("name-asc")
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false) // State for categories dropdown
  const [isSortOpen, setIsSortOpen] = useState(false) // State for sort dropdown

  // Define categories
  const categories = [
    { id: "rice", name: "Rice" },
    { id: "dals", name: "Dals" },
    { id: "spices", name: "Spices" },
    { id: "sugar", name: "Sugar" },
    { id: "ghee", name: "Ghee" },
    { id: "flour", name: "Flour" },
    { id: "eggs", name: "Eggs" },
  ]

  // Filter products based on search term and category
  useEffect(() => {
    let result = allProducts

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      result = result.filter(
        (product) => product.name.toLowerCase().includes(term) || product.description.toLowerCase().includes(term),
      )
    }

    // Filter by category
    if (selectedCategory) {
      result = result.filter((product) => product.category === selectedCategory)
    }

    // Sort products
    if (sortOrder === "name-asc") {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name))
    } else if (sortOrder === "name-desc") {
      result = [...result].sort((a, b) => b.name.localeCompare(a.name))
    } else if (sortOrder === "category") {
      result = [...result].sort((a, b) => a.category.localeCompare(b.category))
    }

    setFilteredProducts(result)
  }, [searchTerm, selectedCategory, sortOrder, allProducts])

  // Handle category selection
  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory((prevCategory) => (prevCategory === categoryId ? null : categoryId))
  }

  // Scroll to category section
  const scrollToCategory = (categoryId: string) => {
    const element = document.getElementById(categoryId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Memoize the groupedProducts calculation to prevent recalculation on every render
  const groupedProducts = useMemo(() => {
    return categories.reduce(
      (acc, category) => {
        const categoryProducts = selectedCategory
          ? category.id === selectedCategory
            ? filteredProducts
            : []
          : filteredProducts.filter((product) => product.category === category.id)

        if (categoryProducts.length > 0) {
          acc[category.id] = categoryProducts
        }
        return acc
      },
      {} as Record<string, typeof filteredProducts>,
    )
  }, [selectedCategory, filteredProducts])

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative py-16 md:py-24">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1509358271058-acd22cc93898?q=80&w=1920&h=600&auto=format&fit=crop"
              alt="Our Products"
              priority
              fill
              className="object-cover brightness-[0.7]"
            />
          </div>
          <div className="container relative z-10">
            <div className="max-w-xl space-y-4 text-white animate-fade-in">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Our Products</h1>
              <p className="text-lg md:text-xl">
                Discover our wide range of premium quality food products sourced from around the world.
              </p>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-12">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Sidebar Filters */}
              <div className="w-full md:w-64 space-y-6">
                <div className="sticky top-24 animate-fade-in">
                  <h3 className="text-lg font-semibold mb-4">Filter Products</h3>

                  <div className="mb-6">
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="search"
                        placeholder="Search products..."
                        className="pl-8"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Categories Dropdown for Mobile */}
                  <div className="md:hidden">
                    <Button
                      variant="outline"
                      className="w-full flex justify-between items-center"
                      onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                    >
                      <span>Categories</span>
                      {isCategoriesOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </Button>
                    {isCategoriesOpen && (
                      <div className="mt-4 space-y-2">
                        {categories.map((category) => (
                          <div key={category.id} className="flex items-center">
                            <button
                              onClick={() => {
                                handleCategoryClick(category.id)
                                scrollToCategory(category.id)
                              }}
                              className={`text-left w-full transition-colors duration-200 ${
                                selectedCategory === category.id
                                  ? "text-primary font-medium"
                                  : "text-muted-foreground hover:text-primary"
                              }`}
                            >
                              {category.name}
                            </button>
                          </div>
                        ))}
                        {selectedCategory && (
                          <div className="pt-2">
                            <button
                              onClick={() => setSelectedCategory(null)}
                              className="text-primary text-sm hover:underline"
                            >
                              Clear filter
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Sort By Button for Mobile */}
                  <div className="md:hidden">
                    <Button
                      variant="outline"
                      className="w-full flex justify-between items-center"
                      onClick={() => setIsSortOpen(!isSortOpen)}
                    >
                      <span>Sort By</span>
                      <ArrowUpDown className="h-4 w-4" />
                    </Button>
                    {isSortOpen && (
                      <div className="mt-4 space-y-2">
                        <Select defaultValue="name-asc" onValueChange={(value) => setSortOrder(value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Sort by" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                            <SelectItem value="name-desc">Name (Z-A)</SelectItem>
                            <SelectItem value="category">Category</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    )}
                  </div>

                  {/* Categories for Desktop */}
                  <div className="hidden md:block space-y-4">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Categories</h4>
                      <div className="space-y-2">
                        {categories.map((category) => (
                          <div key={category.id} className="flex items-center">
                            <button
                              onClick={() => {
                                handleCategoryClick(category.id)
                                scrollToCategory(category.id)
                              }}
                              className={`text-left w-full transition-colors duration-200 ${
                                selectedCategory === category.id
                                  ? "text-primary font-medium"
                                  : "text-muted-foreground hover:text-primary"
                              }`}
                            >
                              {category.name}
                            </button>
                          </div>
                        ))}
                        {selectedCategory && (
                          <div className="pt-2">
                            <button
                              onClick={() => setSelectedCategory(null)}
                              className="text-primary text-sm hover:underline"
                            >
                              Clear filter
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Sort By for Desktop */}
                    <div className="hidden md:block">
                      <h4 className="text-sm font-medium mb-2">Sort By</h4>
                      <Select defaultValue="name-asc" onValueChange={(value) => setSortOrder(value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Sort by" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                          <SelectItem value="name-desc">Name (Z-A)</SelectItem>
                          <SelectItem value="category">Category</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium mb-2">View</h4>
                      <Tabs defaultValue="grid" value={viewMode} onValueChange={setViewMode}>
                        <TabsList className="grid w-full grid-cols-2">
                          <TabsTrigger value="grid">Grid</TabsTrigger>
                          <TabsTrigger value="list">List</TabsTrigger>
                        </TabsList>
                      </Tabs>
                    </div>
                  </div>
                </div>
              </div>

              {/* Products Grid */}
              <div className="flex-1">
                {filteredProducts.length === 0 ? (
                  <div className="text-center py-12">
                    <h3 className="text-xl font-medium mb-2">No products found</h3>
                    <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
                  </div>
                ) : (
                  Object.entries(groupedProducts).map(([categoryId, products]) => (
                    <div id={categoryId} key={categoryId} className="mb-12 animate-fade-in">
                      <h2 className="text-2xl font-bold mb-6">{categories.find((c) => c.id === categoryId)?.name}</h2>
                      <div
                        className={`
                        ${
                          viewMode === "grid"
                            ? "grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4" // Two columns for mobile
                            : "flex flex-col gap-4"
                        }
                        stagger-animation
                      `}
                      >
                        {products.map((product) => (
                          <Link href={`/products/${product.id}`} key={product.id} className="group animate-fade-in">
                            {viewMode === "grid" ? (
                              <Card className="h-full overflow-hidden hover-lift flex flex-col">
                                <div className="aspect-square overflow-hidden">
                                  <Image
                                    src={product.images[0] || "/placeholder.svg"}
                                    alt={product.name}
                                    width={400}
                                    height={400}
                                    className="object-cover w-full h-full image-zoom"
                                  />
                                </div>
                                <CardContent className="p-4 flex flex-col flex-grow">
                                  <h3 className="text-lg font-semibold">{product.name}</h3>
                                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                                  <div className="mt-auto pt-4 flex justify-center">
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      className="group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                                    >
                                      View Details
                                    </Button>
                                  </div>
                                </CardContent>
                              </Card>
                            ) : (
                              <Card className="overflow-hidden hover-lift">
                                <div className="flex flex-col md:flex-row">
                                  <div className="md:w-1/3 aspect-square md:aspect-auto overflow-hidden">
                                    <Image
                                      src={product.images[0] || "/placeholder.svg"}
                                      alt={product.name}
                                      width={400}
                                      height={400}
                                      className="object-cover w-full h-full image-zoom"
                                    />
                                  </div>
                                  <CardContent className="p-4 md:w-2/3 flex flex-col">
                                    <h3 className="text-lg font-semibold">{product.name}</h3>
                                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                                    <div className="mt-auto pt-4 flex justify-center">
                                      <Button
                                        variant="ghost"
                                        size="sm"
                                        className="group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                                      >
                                        View Details
                                      </Button>
                                    </div>
                                  </CardContent>
                                </div>
                              </Card>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Call To Action */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold">Need Custom Quantities?</h2>
                <p className="mt-4 text-muted-foreground">
                  We offer flexible packaging options and can customize our products to meet your specific requirements.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end animate-slide-in">
                <Button className="transition-all duration-300 hover:scale-105" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button variant="outline" className="transition-all duration-300 hover:scale-105" asChild>
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}