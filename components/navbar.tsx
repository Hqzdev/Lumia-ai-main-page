"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full z-50 px-4 pt-4">
      <nav
        className={cn(
          "transition-all duration-300 mx-auto max-w-7xl rounded-[20px] px-6",
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-transparent py-3",
        )}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 mr-2"></div>
            <span
              className={cn(
                "text-2xl font-bold transition-colors duration-300",
                isScrolled ? "text-gray-900" : "text-gray-900",
              )}
            >
              Lumia.ai
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className={cn(
                "transition-colors",
                isScrolled ? "text-gray-700 hover:text-blue-600" : "text-gray-800 hover:text-blue-500",
              )}
            >
              Features
            </a>
            <a
              href="#pricing"
              className={cn(
                "transition-colors",
                isScrolled ? "text-gray-700 hover:text-blue-600" : "text-gray-800 hover:text-blue-500",
              )}
            >
              Pricing
            </a>
            <a
              href="#docs"
              className={cn(
                "transition-colors",
                isScrolled ? "text-gray-700 hover:text-blue-600" : "text-gray-800 hover:text-blue-500",
              )}
            >
              Documentation
            </a>
            <a
              href="#blog"
              className={cn(
                "transition-colors",
                isScrolled ? "text-gray-700 hover:text-blue-600" : "text-gray-800 hover:text-blue-500",
              )}
            >
              Blog
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="/auth"
              className={cn(
                "hidden md:inline-block transition-colors",
                isScrolled ? "text-gray-700 hover:text-blue-600" : "text-gray-800 hover:text-blue-500",
              )}
            >
              Login
            </a>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full">Try For Free</Button>

            {/* Mobile menu button */}
            <button className="md:hidden text-gray-800" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg mt-3 py-4 px-6 absolute w-full left-0 rounded-b-lg">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-800 hover:text-blue-500">
                Features
              </a>
              <a href="#pricing" className="text-gray-800 hover:text-blue-500">
                Pricing
              </a>
              <a href="#docs" className="text-gray-800 hover:text-blue-500">
                Documentation
              </a>
              <a href="#blog" className="text-gray-800 hover:text-blue-500">
                Blog
              </a>
              <a href="/auth" className="text-gray-800 hover:text-blue-500">
                Login
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}

