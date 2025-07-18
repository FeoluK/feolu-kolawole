'use client'

import { useState, useEffect } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const handleHomeClick = () => {
    if (window.location.pathname === '/') {
      // If on homepage, scroll to top
      scrollToSection('home')
    } else {
      // If on other pages, navigate to homepage
      window.location.href = '/'
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur border-b border-gray-800' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-6 relative"> {/* Added relative for absolute positioning of mobile menu */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl font-medium text-white z-20"> {/* Added z-20 to ensure logo is above mobile menu */}
            FK
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <button
              onClick={handleHomeClick}
              className="text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
            <a
              href="/projects"
              className="text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              Projects
            </a>
            <a
              href="/work"
              className="text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              Work
            </a>
            <a
              href="/contact"
              className="text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-400 hover:text-white transition-colors z-20" // Added z-20 for button
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur border-b border-gray-800 py-6 z-10"> {/* Changed position to absolute, added bg and z-index */}
            <div className="container mx-auto px-6 flex flex-col space-y-6"> {/* Added container and px for consistent padding */}
              <button
                onClick={handleHomeClick}
                className="text-gray-400 hover:text-white transition-colors text-left cursor-pointer"
              >
                Home
              </button>
              <a
                href="/projects"
                className="text-gray-400 hover:text-white transition-colors text-left cursor-pointer"
              >
                Projects
              </a>
              <a
                href="/work"
                className="text-gray-400 hover:text-white transition-colors text-left cursor-pointer"
              >
                Work
              </a>
              <a
                href="/contact"
                className="text-gray-400 hover:text-white transition-colors text-left cursor-pointer"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}