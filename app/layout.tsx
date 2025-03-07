import type React from "react"
import { Inter } from "next/font/google"
import ClientLayout from "./clientLayout"
import Script from "next/script"
import './globals.css'

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "DNG FOODS - Premium Food Products",
  description: "Global supplier of premium quality food products including rice, dals, spices, and more.",
  generator: 'ahmad'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="theme-script" strategy="beforeInteractive">
          {`
            (function() {
              const savedTheme = localStorage.getItem("theme");
              const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
              const theme = savedTheme === "system" ? systemTheme : savedTheme || systemTheme;
              document.documentElement.classList.add(theme);
            })();
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}