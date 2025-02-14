import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Header from "../components/Header"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Muhammad Kashif Khan - Senior Node.js Developer",
  description:
    "Portfolio of Muhammad Kashif Khan, a senior Node.js and Full Stack Developer with over 8 years of experience.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; {new Date().getFullYear()} Muhammad Kashif Khan. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}

