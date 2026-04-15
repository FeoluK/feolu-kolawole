'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useState } from 'react'

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState('projects')

  const highlightedProjects = [
    {
      title: 'Cross-Game Semantic Alignment of Latent Action Representations in World Models',
      description:
        'Co-authored research showing that jointly-trained inverse dynamics models produce semantically aligned action embeddings across different game environments. Demonstrated alignment across 7 Atari games, 2 racing simulators, and 2 first-person games (Minecraft VPT and CS:GO), achieving 85.2% accuracy on movement prediction across environments without game-specific labels. Identified a "calibration gap" as the primary failure mode for camera direction prediction and proposed solutions.',
      year: '2026',
      role: 'World Models Research',
      technologies: ['Python', 'PyTorch', 'World Models', 'Inverse Dynamics', 'Optical Flow', 'CNNs'],
      paper: '/Cross-Game%20Semantic%20Alignment%20of%20Latent%20Action%20Representations%20in%20World%20Models.pdf',
      featured: true,
    },
    {
      title: 'MoSV: Mixture-of-Steering Vectors for LLM Hallucination Mitigation',
      description:
        'Proposed a framework that reduces LLM hallucinations by dynamically selecting from multiple learned correction vectors per prompt, improving factual accuracy by +2.4pp where prior methods gained only +0.3pp. Demonstrated that the framework automatically discovers distinct types of hallucinations without manual labeling, evaluated across 10,615 items spanning 8 knowledge domains.',
      year: '2026',
      role: 'NLP Research',
      technologies: ['Python', 'PyTorch', 'LLaMA', 'Activation Steering'],
      paper: '/MoSV_Mixture_of_Steering_Vectors.pdf',
      featured: true,
    },
    {
      title: 'Power Lever: GPU-Efficient LLM Inference Gateway (Winner, Stanford Hackathon)',
      description:
        'Built an inference gateway that dynamically routes LLM prompts to right-sized GPU hardware across 4 tiers, reducing energy consumption by 75% on simple queries while reserving high-end GPUs for complex tasks.',
      year: '2026',
      role: 'Hackathon Winner',
      technologies: ['Python', 'FastAPI', 'vLLM', 'Modal'],
      github: 'https://github.com/kesavanramakrishnan/power-lever',
      featured: true,
    },
    {
      title: 'DYNAMO: Reinforcement Learning Portfolio Manager',
      description:
        'Trained a reinforcement learning agent to automatically manage a portfolio across 10 asset classes, achieving 15.76% annualized returns with a 1.44 Sharpe ratio, outperforming traditional strategies by 38-54%.',
      year: '2026',
      role: 'Reinforcement Learning',
      technologies: ['Python', 'Stable-Baselines3', 'Gymnasium', 'Pandas'],
      github: 'https://github.com/lee-dan/DYNAMO-Portfolio',
      paper: '/Dynamo.pdf',
      featured: true,
    },
    {
      title: 'Eous: Embodied AR Robot Assistant (Winner, Stanford Hackathon)',
      description:
        'Built a hands-free AR system integrating AR glasses, a smartphone, and a Raspberry Pi robot, enabling gesture and voice control with live camera feedback — all processed on-device with no cloud dependencies.',
      year: '2026',
      role: 'Hackathon Winner',
      technologies: ['Python', 'C#', 'Unity', 'Raspberry Pi', 'XR Hands'],
      github: 'https://github.com/FeoluK/Eous',
      featured: true,
    },
    {
      title: 'VR Healthcare Training Simulation (Winner, MIT Hackathon)',
      description:
        'Built a VR healthcare simulation on the Apple Vision Pro, enabling CPR and first aid training and pioneering SharePlay integration for collaborative learning with iPhone users. Showcased to The Venture Reality Fund, where the concept was acquired and carried forward.',
      year: '2024',
      role: 'Hackathon Winner',
      technologies: ['Swift', 'RealityKit', 'Apple Vision Pro', 'SharePlay'],
      github: 'https://github.com/FeoluK/Health-Heroes',
      featured: true,
    },
    {
      title: 'Supreme Court Case Prediction (1st Place, Stanford Class of 500)',
      description:
        "Built a Bayesian court case prediction framework that achieved 73% top-3 accuracy across 11 possible Supreme Court case outcomes by leveraging observable case attributes. Featured as a winner and future example project in Stanford’s CS109 course (selected from 500 students).",
      year: '2025',
      role: 'Stanford CS109 Winner',
      technologies: ['Python', 'NumPy', 'Pandas', 'Bayesian Networks'],
      paper: '/Court_Justice_Prediction.pdf', // (View Paper)
      featured: true,
    },
    {
      title: 'SynchroSound: Facial Expression Based Song Selection',
      description:
        "Built an iOS app that deciphers facial expressions to recommend mood‑matching songs, integrating SwiftUI, UIKit, and SwiftData with Google Cloud Vision and Spotify’s Web API. Processed 500+ test images across multiple emotions to validate recommendations, improving user‑song mood alignment accuracy by 82%.",
      year: '2024',
      role: 'Personal Project',
      technologies: ['SwiftUI', 'UIKit', 'SwiftData', 'Google Cloud Vision', 'Spotify API'],
      github: 'https://github.com/FeoluK/SynchroSound',
      featured: true,
    },
    {
      title: 'Medical MRI Image Reconstruction (View Paper)',
      description:
        'Engineered AI‑based models for medical MRI image reconstruction with PyTorch, cutting required scan times by 55–70% while preserving high‑quality images, and co‑authoring a research paper on the work. Enhanced image quality beyond baseline deep learning models, reducing reconstruction error by ~60% and significantly improving detail preservation.',
      year: '2024',
      role: 'Deep Learning Research',
      technologies: ['Python', 'PyTorch', 'Deep Learning', 'Computer Vision', 'Medical Imaging'],
      paper: '/Accelerated_MRI_Reconstruction.pdf',
      featured: true,
    },
    {
      title: 'AgenTeX: Image to LaTeX (Winner, AgentOps Hackathon)',
      description:
        "Engineered an AI agent with OpenAI’s Agents SDK to convert handwritten math to LaTeX with 91% accuracy. Featured as an AgentOps hackathon winner, with board member recommendation for commercial launch.",
      year: '2025',
      role: 'Hackathon Winner',
      technologies: ['OpenAI Agents SDK', 'Hugging Face', 'Python'],
      featured: true,
    },
    {
      title: 'Music Recommendation System (View Paper)',
      description:
        'Designed a music recommendation system using SVD and PCA to analyze over 60 audio features from 7,000 Spotify songs, uncovering patterns in sound beyond traditional metadata. Implemented feature projection to identify similarities across 35 combinations of musical features.',
      year: '2025',
      role: 'Machine Learning Project',
      technologies: ['Python', 'SVD', 'Dimensionality Reduction', 'PCA', 'Feature Engineering'],
      paper: '/Music_Recommendation_Engine.pdf',
      featured: true,
    },
  ]

  const regularProjects = [
    // --- KEEPING existing items not mentioned by user ---
    {
      title: 'TreeCycle',
      description:
        'Sustainable forestry management system leveraging IoT sensors and machine learning to optimize tree lifecycle monitoring and carbon footprint tracking.',
      year: '2024',
      role: 'Environmental Tech',
      technologies: ['Python', 'IoT', 'Machine Learning', 'Environmental Data'],
      github: 'https://github.com/FeoluK/TreeCycle',
    },
    {
      title: 'MIRA',
      description:
        'Advanced computer vision system for real-time image recognition and analysis. Implements state-of-the-art deep learning models for visual perception tasks.',
      year: '2024',
      role: 'Computer Vision',
      technologies: ['Python', 'Computer Vision', 'Deep Learning', 'TensorFlow'],
      github: 'https://github.com/FeoluK/MIRA',
    },
    {
      title: 'Neural Housing Predictor',
      description:
        'Machine learning model achieving 35% accuracy improvement in property valuation through advanced data processing and neural network architecture.',
      year: '2024',
      role: 'Academic Project',
      technologies: ['R', 'Machine Learning', 'Data Science', 'Statistical Analysis'],
    },
    {
      title: 'LZW File Compression Algorithm',
      description:
        'High-performance file compression algorithm reducing file size by ~50% relative to standard methods, enabling faster and more efficient file transfers.',
      year: '2024',
      role: 'Systems Programming',
      technologies: ['C++', 'Algorithms', 'Data Structures', 'Optimization'],
    },
    // --- NEW items explicitly provided by user ---
    {
      title: 'Heap Allocator – Custom Computer Memory Management System',
      description:
        'Developed an algorithm that optimizes computer memory utilization (i.e., freeing up storage by 20% across 100,000 requests). Implemented custom malloc, realloc, and free functions in C for heap-level memory management.',
      year: '2024',
      role: 'Systems Programming',
      technologies: ['C', 'x86 Assembly', 'GDB'],
    },
    {
      title: 'Shell - Custom Unix Shell Implementation',
      description:
        'Built a command-line Unix shell that allows key tasks like file manipulation and redirection. Enhanced the shell to run 10+ programs at once while testing across 100+ real-world scenarios.',
      year: '2024',
      role: 'Operating Systems',
      technologies: ['C', 'C++', 'GDB', 'x86 Assembly'],
    },
  ]

  const animations = [
    {
      title: 'Space Animation',
      url: 'https://youtu.be/O6ut75txAFE',
      videoId: 'O6ut75txAFE',
      description: '',
    },
    {
      title: 'Haunted House Animation',
      url: 'https://youtu.be/46RGFFA52AE',
      videoId: '46RGFFA52AE',
      description: '',
    },
    {
      title: 'Donut Animation',
      url: 'https://youtu.be/ZZxudWLa2pc',
      videoId: 'ZZxudWLa2pc',
      description: '',
    },
    {
      title: 'Echelon RPG',
      url: 'https://youtu.be/4PR8-mKllMo',
      videoId: '4PR8-mKllMo',
      description: 'Solo Leveling inspired RPG game made for the Meta Quest.',
    },
    {
      title: 'TreeCycle Demo',
      url: 'https://youtu.be/yDez3BDtcOo',
      videoId: 'yDez3BDtcOo',
      description: 'Waste sorter and environment building tycoon.',
    },
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
                <h1 className="text-4xl md:text-5xl font-light mb-6">Projects</h1>
                <p className="text-xl text-gray-400 max-w-2xl">
                  A collection of projects spanning spatial computing, machine learning, and immersive technologies.
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
                            <h3 className="text-2xl font-medium text-white">{project.title}</h3>
                            <span className="text-sm text-indigo-400 px-3 py-1 border border-indigo-400/50 rounded-none">
                              {project.role}
                            </span>
                          </div>

                          <p className="text-gray-300 leading-relaxed mb-6">{project.description}</p>

                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="text-sm text-gray-500 px-3 py-1 border border-gray-700 rounded-none"
                              >
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
                          <span className="text-xl text-gray-500 font-light">{project.year}</span>
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

                        <h3 className="text-xl font-medium text-white mb-3">{project.title}</h3>

                        <p className="text-gray-400 leading-relaxed mb-6 text-sm">{project.description}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="text-xs text-gray-500 px-2 py-1 border border-gray-700 rounded-none"
                            >
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
                                  <path d="M8 5v14l11-7z" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="p-4">
                            <h3 className="text-white font-medium group-hover:text-indigo-400 transition-colors mb-2">
                              {animation.title}
                            </h3>
                            {animation.description && (
                              <p className="text-gray-400 text-sm">{animation.description}</p>
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
