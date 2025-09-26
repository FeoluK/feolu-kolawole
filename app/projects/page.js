'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useState } from 'react'

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState('projects')

  const highlightedProjects = [
    {
      title: "Accelerated MRI Reconstruction with SwinUNet",
      description: "Transformer-based deep learning architecture for medical imaging that enables faster MRI scans by reconstructing high-quality knee MRI images from undersampled data. Achieved 33.1 dB PSNR and 0.72 SSIM on fastMRI dataset, outperforming baseline U-Net by ~4 dB in PSNR.",
      year: "2024",
      role: "Deep Learning Research",
      technologies: ["Python", "PyTorch", "Deep Learning", "Computer Vision", "Medical Imaging"],
      github: "https://github.com/FeoluK/fastmri-reconstruction",
      paper: "/Accelerated_MRI_Reconstruction.pdf",
      featured: true
    },
    {
      title: "MIT Reality Hack - Healing Heroes",
      description: "Award-winning VR healthcare simulation developed for Apple Vision Pro. Features immersive CPR and first aid training with real-time performance analytics and haptic feedback systems.",
      year: "2024",
      role: "MIT Winner",
      technologies: ["Swift", "RealityKit", "Apple Vision Pro", "3D Modeling"],
      github: "https://github.com/FeoluK/Health-Heroes",
      featured: true
    },
    {
      title: "Supreme Court Case Outcome Prediction",
      description: "Bayesian network model for predicting Supreme Court case dispositions based on observable case attributes. Implemented rejection sampling for inference, achieving 73% Top-3 accuracy among 11 possible outcomes through probabilistic modeling.",
      year: "2025",
      role: "Stanford CS109 Winner",
      technologies: ["Python", "Numpy", "Pandas", "Bayesian Networks", "Probabilistic Modeling"],
      paper: "/Court_Justice_Prediction.pdf",
      featured: true
    },
    {
      title: "Music Recommendation System Using SVD",
      description: "Novel music recommendation system utilizing Singular Value Decomposition and dimensionality reduction of Spotify audio features. Implements feature projection to identify non-obvious musical similarities, focusing on sound qualities over conventional genre classifications.",
      year: "2025", 
      role: "Machine Learning Project",
      technologies: ["Python", "SVD", "Dimensionality Reduction", "PCA", "Feature Engineering"],
      paper: "/Music_Recommendation_Engine.pdf",
      featured: true
    },
    {
      title: "SynchroSound",
      description: "iOS application that enhances musical experiences through facial mood recognition. Integrates SwiftUI, Google Cloud Vision API, and Spotify Web API to deliver personalized music recommendations based on real-time emotion detection.",
      year: "2024", 
      role: "Personal Project",
      technologies: ["SwiftUI", "UIKit", "SwiftData", "Google Cloud Vision", "Spotify API"],
      github: "https://github.com/FeoluK/SynchroSound",
      featured: true
    }
  ]

  const regularProjects = [
    {
      title: "TreeCycle",
      description: "Sustainable forestry management system leveraging IoT sensors and machine learning to optimize tree lifecycle monitoring and carbon footprint tracking.",
      year: "2024",
      role: "Environmental Tech",
      technologies: ["Python", "IoT", "Machine Learning", "Environmental Data"],
      github: "https://github.com/FeoluK/TreeCycle"
    },
    {
      title: "MIRA",
      description: "Advanced computer vision system for real-time image recognition and analysis. Implements state-of-the-art deep learning models for visual perception tasks.",
      year: "2024",
      role: "Computer Vision",
      technologies: ["Python", "Computer Vision", "Deep Learning", "TensorFlow"],
      github: "https://github.com/FeoluK/MIRA"
    },
    {
      title: "Neural Housing Predictor",
      description: "Machine learning model achieving 35% accuracy improvement in property valuation through advanced data processing and neural network architecture.",
      year: "2024",
      role: "Academic Project", 
      technologies: ["R", "Machine Learning", "Data Science", "Statistical Analysis"]
    },
    {
      title: "LZW File Compression Algorithm",
      description: "High-performance file compression algorithm reducing file size by ~50% relative to standard methods, enabling faster and more efficient file transfers.",
      year: "2024",
      role: "Systems Programming",
      technologies: ["C++", "Algorithms", "Data Structures", "Optimization"]
    }
  ]

  const animations = [
    {
      title: "Space Animation",
      url: "https://youtu.be/O6ut75txAFE",
      videoId: "O6ut75txAFE",
      description: ""
    },
    {
      title: "Haunted House Animation", 
      url: "https://youtu.be/46RGFFA52AE",
      videoId: "46RGFFA52AE",
      description: ""
    },
    {
      title: "Donut Animation",
      url: "https://youtu.be/ZZxudWLa2pc", 
      videoId: "ZZxudWLa2pc",
      description: ""
    },
    {
      title: "Echelon RPG",
      url: "https://youtu.be/4PR8-mKllMo",
      videoId: "4PR8-mKllMo", 
      description: "Solo Leveling inspired RPG game made for the Meta Quest."
    },
    {
      title: "TreeCycle Demo",
      url: "https://youtu.be/yDez3BDtcOo",
      videoId: "yDez3BDtcOo",
      description: "Waste sorter and environment building tycoon."
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="pt-24">
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              
              {/* Page Header */}
              <div className="mb-20">
                <h1 className="text-4xl md:text-5xl font-light mb-6">
                  Projects
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl">
                  A collection of projects spanning spatial computing, machine learning, and immersive technologies
                </p>
              </div>

              {/* Highlighted Projects */}
              <div className="mb-24">
                <h2 className="text-2xl font-light mb-12 text-gray-300">Highlighted Work</h2>
                
                <div className="space-y-16">
                  {highlightedProjects.map((project, index) => (
                    <div key={index} className="border-b border-gray-800 pb-16 last:border-b-0">
                      <div className="grid md:grid-cols-3 gap-8">
                        {/* Project Info */}
                        <div className="md:col-span-2">
                          <div className="flex items-center gap-4 mb-4">
                            <h3 className="text-2xl font-medium text-white">
                              {project.title}
                            </h3>
                            <span className="text-sm text-indigo-400 px-3 py-1 border border-indigo-400/50 rounded-none">
                              {project.role}
                            </span>
                          </div>
                          
                          <p className="text-gray-300 leading-relaxed mb-6">
                            {project.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.technologies.map((tech, techIndex) => (
                              <span key={techIndex} className="text-sm text-gray-500 px-3 py-1 border border-gray-700 rounded-none">
                                {tech}
                              </span>
                            ))}
                          </div>

                          {/* Links */}
                          <div className="flex gap-4">
                            {project.github && (
                              <a 
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer"
                              >
                                View on GitHub →
                              </a>
                            )}
                            {project.paper && (
                              <a 
                                href={project.paper}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer"
                              >
                                View Paper →
                              </a>
                            )}
                          </div>
                        </div>
                        
                        {/* Year */}
                        <div className="flex md:justify-end">
                          <span className="text-xl text-gray-500 font-light">
                            {project.year}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tabbed Section */}
              <div>
                {/* Tab Navigation */}
                <div className="flex items-center gap-8 mb-12">
                  <button
                    onClick={() => setActiveTab('projects')}
                    className={`text-2xl font-light pb-2 border-b-2 transition-all ${
                      activeTab === 'projects' 
                        ? 'text-gray-300 border-indigo-400' 
                        : 'text-gray-500 border-transparent hover:text-gray-400'
                    }`}
                  >
                    Other Projects
                  </button>
                  <button
                    onClick={() => setActiveTab('animations')}
                    className={`text-2xl font-light pb-2 border-b-2 transition-all ${
                      activeTab === 'animations' 
                        ? 'text-gray-300 border-indigo-400' 
                        : 'text-gray-500 border-transparent hover:text-gray-400'
                    }`}
                  >
                    Animations & Creations
                  </button>
                </div>

                {/* Tab Content */}
                {activeTab === 'projects' && (
                  <div className="grid md:grid-cols-2 gap-8">
                    {regularProjects.map((project, index) => (
                      <div key={index} className="border border-gray-800 p-6 hover:border-gray-700 transition-colors">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-sm text-indigo-400 px-3 py-1 border border-indigo-400/50 rounded-none">
                            {project.role}
                          </span>
                          <span className="text-gray-500 text-sm">{project.year}</span>
                        </div>
                        
                        <h3 className="text-xl font-medium text-white mb-3">
                          {project.title}
                        </h3>
                        
                        <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="text-xs text-gray-500 px-2 py-1 border border-gray-700 rounded-none">
                              {tech}
                            </span>
                          ))}
                        </div>

                        {project.github && (
                          <a 
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-400 hover:text-indigo-300 transition-colors text-sm cursor-pointer"
                          >
                            View on GitHub →
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'animations' && (
                  <div>
                    <p className="text-gray-500 text-sm mb-8">
                      Some fun side projects and creative experiments I work on in my free time.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {animations.map((animation, index) => (
                        <a 
                          key={index}
                          href={animation.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group border border-gray-800 rounded-lg overflow-hidden hover:border-gray-700 transition-all duration-300 hover:-translate-y-1"
                        >
                          <div className="aspect-video bg-gray-800 relative overflow-hidden">
                            <img 
                              src={`https://img.youtube.com/vi/${animation.videoId}/maxresdefault.jpg`}
                              alt={animation.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M8 5v14l11-7z"/>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="p-4">
                            <h3 className="text-white font-medium group-hover:text-indigo-400 transition-colors mb-2">
                              {animation.title}
                            </h3>
                            {animation.description && (
                              <p className="text-gray-400 text-sm">
                                {animation.description}
                              </p>
                            )}
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}