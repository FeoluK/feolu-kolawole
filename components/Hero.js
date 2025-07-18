'use client'

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen bg-black text-white flex items-center relative overflow-hidden">
      {/* Wireframe Sphere - Next to name */}
      <div className="absolute top-1/2 right-16 transform -translate-y-1/2 opacity-80 hidden lg:block">
        <svg width="440" height="440" viewBox="0 0 440 440" className="text-indigo-400">
          <circle cx="220" cy="220" r="180" fill="none" stroke="currentColor" strokeWidth="2" />
          
          {/* Latitude lines */}
          <ellipse cx="220" cy="220" rx="180" ry="54" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <ellipse cx="220" cy="220" rx="180" ry="108" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <ellipse cx="220" cy="220" rx="180" ry="180" fill="none" stroke="currentColor" strokeWidth="1.5" />
          
          {/* Longitude lines */}
          <ellipse cx="220" cy="220" rx="54" ry="180" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <ellipse cx="220" cy="220" rx="108" ry="180" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <line x1="220" y1="40" x2="220" y2="400" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* Main Content */}
          <div className="space-y-8">
            <h1 className="text-6xl md:text-8xl font-light tracking-tight">
              <span className="text-white">Feolu</span>
              <br />
              <span className="text-gray-400">Kolawole</span>
            </h1>
            
            <div className="space-y-4">
              <p className="text-xl text-gray-300">
                AI, XR, CV, and Spatial Computing Software Engineer
              </p>
              <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
                Specializing in AI, 3D systems, and Extended Reality. 
                Building the future of human-computer interaction at Stanford University.
              </p>
            </div>

            {/* Simple CTA */}
            <div className="pt-8">
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-indigo-400 hover:text-indigo-300 transition-colors text-lg cursor-pointer"
              >
                View Work →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}