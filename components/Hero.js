'use client'

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen bg-black text-white flex items-center relative overflow-hidden"
    >
      {/* Headshot (replaces wireframe sphere) */}
      <div className="absolute top-1/2 right-48 tranform -translate-y-1/2 opacity-90 hidden lg:block">
        <img
          src="/feolu.jpg"
          alt="Feolu Kolawole"
          className="w-96 h-96 rounded-full object-cover shadow-lg"
        />
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
              {/* Removed the Stanford sentence; kept a concise summary */}
              <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
                Specializing in AI, 3D systems, and Extended Reality.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="pt-8 flex items-center gap-6">
              <button
                onClick={() => scrollToSection('projects')}
                className="text-indigo-400 hover:text-indigo-300 transition-colors text-lg cursor-pointer"
              >
                View Work →
              </button>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 transition-colors text-lg cursor-pointer"
              >
                Resume →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
