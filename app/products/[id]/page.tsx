import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Download, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getProductById, getRelatedProducts } from "@/lib/constants/products"

interface ProductDetailPageProps {
  params: {
    id: string
  }
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const productId = Number(params.id)
  const product = getProductById(productId)

  if (!product) {
    notFound()
  }

  const relatedProducts = getRelatedProducts(product.category, productId)

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <div className="container py-8 md:py-12">
          {/* Breadcrumb Navigation */}
          <div className="mb-8 animate-fade-in">
            <Button
              variant="ghost"
              size="sm"
              className="transition-all duration-300 hover:translate-x-[-5px] rounded-full"
              asChild
            >
              <Link href="/products" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Products
              </Link>
            </Button>
          </div>

          {/* Product Information */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Images */}
            <div className="animate-scale-in">
              <div className="relative aspect-square overflow-hidden rounded-xl mb-4 image-zoom-container shadow-lg">
                <Image
                  src={product.images[0] || "/placeholder.svg?height=800&width=800"}
                  alt={product.name}
                  fill
                  priority
                  className="object-cover image-zoom"
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6 animate-fade-in">
              <div>
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <p className="text-muted-foreground mt-2">
                  Category: {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">Description</h2>
                <p className="text-muted-foreground">{product.longDescription}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">Key Features</h2>
                <ul className="grid gap-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* <div>
                <h2 className="text-xl font-semibold mb-2">Available Packaging</h2>
                <div className="flex flex-wrap gap-2">
                  {product.packaging.map((pkg, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 bg-muted rounded-full text-sm transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                    >
                      {pkg}
                    </div>
                  ))}
                </div>
              </div> */}

              <div>
                <h2 className="text-xl font-semibold mb-2">Product Specifications</h2>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex flex-col">
                      <span className="text-sm text-muted-foreground capitalize">{key.replace(/_/g, " ")}</span>
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Move buttons up slightly */}
              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="btn-gradient rounded-full shadow-lg transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <Link href="/contact">Request Quote</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Additional Information Tabs */}
          <div className="mt-16 animate-fade-in"> {/* Increased margin-top to move the section down */}
            <Tabs defaultValue="details" className="w-full">
              {/* Adjust TabsList for mobile view */}
              <TabsList className="flex flex-col md:flex-row w-full gap-2 md:gap-0 rounded-full">
                <TabsTrigger
                  value="details"
                  className="w-full md:w-auto rounded-full mb-2 md:mb-0 data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  Additional Details
                </TabsTrigger>
                <TabsTrigger
                  value="shipping"
                  className="w-full md:w-auto rounded-full mb-2 md:mb-0 data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  Shipping & Storage
                </TabsTrigger>
                <TabsTrigger
                  value="certifications"
                  className="w-full md:w-auto rounded-full data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  Certifications
                </TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="p-6 border rounded-xl mt-10">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Product Details</h3>
                  <p>
                    Our premium {product.name} is sourced from the finest producers around the world. The unique
                    geographical conditions and traditional farming methods result in products with exceptional quality,
                    flavor, and texture.
                  </p>
                  <p>
                    Each batch undergoes rigorous quality checks to ensure it meets our high standards before being
                    packaged and distributed.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="shipping" className="p-6 border rounded-xl mt-10">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Shipping Information</h3>
                  <p>
                    We offer flexible shipping options for all order sizes, from small retail orders to full container
                    loads. Our logistics team ensures timely delivery and maintains the product quality throughout the
                    shipping process.
                  </p>

                  <h3 className="text-lg font-semibold">Storage Guidelines</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Store in a cool, dry place away from direct sunlight</li>
                    <li>Keep in airtight containers after opening</li>
                    <li>Ideal storage temperature: 15-25°C (50-77°F)</li>
                    <li>Avoid exposure to moisture</li>
                    <li>Follow FIFO (First In, First Out) inventory management</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="certifications" className="p-6 border rounded-xl mt-10">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Quality Certifications</h3>
                  <p>
                    Our products meet international quality standards and are certified by various regulatory bodies:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>ISO 22000:2018 Food Safety Management</li>
                    <li>HACCP Certified</li>
                    <li>FDA Approved</li>
                    <li>Non-GMO Verified</li>
                    <li>GMP (Good Manufacturing Practices) Certified</li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-16 animate-fade-in">
              <h2 className="text-2xl font-bold mb-6">Related Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <Link href={`/products/${relatedProduct.id}`} key={relatedProduct.id} className="group">
                    <div className="border rounded-xl overflow-hidden card-hover">
                      <div className="aspect-square relative overflow-hidden">
                        <Image
                          src={relatedProduct.images[0] || "/placeholder.svg?height=400&width=400"}
                          alt={relatedProduct.name}
                          fill
                          className="object-cover image-zoom"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-lg">{relatedProduct.name}</h3>
                        <p className="mt-2 text-muted-foreground line-clamp-2">{relatedProduct.description}</p>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 rounded-full"
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}