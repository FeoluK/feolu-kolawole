'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
    alert('Message sent successfully.')
  }

  return (
    <section id="contact" className="py-24 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          
          {/* Section Header */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-light mb-4 uppercase tracking-wider">
              Get In Touch
            </h2>
            <div className="w-24 h-px bg-cyan-400 mb-6"></div>
            <p className="text-xl text-gray-400 max-w-2xl font-light">
              Interested in collaborating on spatial computing, AI research, or Extended Reality projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-light text-white mb-6 uppercase tracking-wider">Contact</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-500 text-sm mb-1 uppercase tracking-wider font-light">Email</p>
                    <p className="text-gray-300 font-light">flukol@stanford.edu</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm mb-1 uppercase tracking-wider font-light">Location</p>
                    <p className="text-gray-300 font-light">Stanford, California</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-light text-white mb-6 uppercase tracking-wider">Links</h3>
                <div className="space-y-3">
                  <div>
                    <a 
                      href="https://linkedin.com/in/feolu-kolawole" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyan-400 transition-colors uppercase tracking-wider font-light"
                    >
                      LinkedIn →
                    </a>
                  </div>
                  <div>
                    <a 
                      href="https://github.com/FeoluK" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyan-400 transition-colors uppercase tracking-wider font-light"
                    >
                      GitHub →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-400 text-sm mb-3 uppercase tracking-wider font-light">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-700 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400 transition-colors font-light"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-400 text-sm mb-3 uppercase tracking-wider font-light">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-700 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400 transition-colors font-light"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-400 text-sm mb-3 uppercase tracking-wider font-light">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-700 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400 transition-colors resize-none font-light"
                    placeholder="Your message..."
                    required
                  ></textarea>
                </div>
                
                <div className="pt-4">
                  <button
                    type="submit"
                    className="border border-gray-600 px-8 py-3 text-cyan-400 hover:border-cyan-400 hover:text-white transition-all duration-300 uppercase tracking-wider text-sm font-light"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}