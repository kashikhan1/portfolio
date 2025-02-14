"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className={`text-2xl font-bold ${isScrolled ? "text-gray-800" : "text-white"}`}>
            MKK
          </Link>
          <button className="lg:hidden" onClick={toggleMenu}>
            <svg
              className={`w-6 h-6 ${isScrolled ? "text-gray-800" : "text-white"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          <ul className={`${isMenuOpen ? "block" : "hidden"} lg:flex lg:space-x-8 mt-4 lg:mt-0`}>
            {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
              <li key={item} className="mb-2 lg:mb-0">
                <Link
                  href={`#${item.toLowerCase()}`}
                  className={`hover:text-gray-300 transition-colors ${isScrolled ? "text-gray-800" : "text-white"}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}

