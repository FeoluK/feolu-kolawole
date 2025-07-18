'use client'

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            
            {/* Left Side */}
            <div>
              <p className="text-gray-400 text-sm">
                © 2025 Feolu Kolawole
              </p>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-8">
              <a 
                href="https://linkedin.com/in/feolu-kolawole" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-400 transition-colors text-sm"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/FeoluK" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-400 transition-colors text-sm"
              >
                GitHub
              </a>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-gray-400 text-sm">Stanford</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}