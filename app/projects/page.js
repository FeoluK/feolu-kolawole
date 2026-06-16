'use client'

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { useState } from 'react'

const projects = [
  {
    title: 'Stylescape: Real-Time Stylized Passthrough on Meta Quest 3',
    role: 'XR / Computer Vision',
    year: '2026',
    summary:
      'A real-time stylized passthrough pipeline for the Meta Quest 3 that decouples neural style-transfer inference from the display rate via depth-based reprojection, holding 60+ fps fully on-device with no PC tether or cloud. Adds an auto-stride controller and high-pass detail injection to recover sharpness at low input resolution.',
    github: 'https://github.com/FeoluK/Stylescape',
  },
  {
    title: 'Power Lever: GPU-Efficient LLM Inference Gateway',
    role: 'Winner, Stanford Hackathon',
    year: '2026',
    summary:
      'An inference gateway that dynamically routes LLM prompts to right-sized GPU hardware across 4 tiers, cutting energy use by 75% on simple queries while reserving high-end GPUs for complex tasks.',
    github: 'https://github.com/FeoluK/power-lever',
  },
  {
    title: 'DYNAMO: Reinforcement Learning Portfolio Manager',
    role: 'Reinforcement Learning',
    year: '2026',
    summary:
      'An RL agent that manages a portfolio across 10 asset classes, achieving 15.76% annualized returns at a 1.44 Sharpe ratio and outperforming traditional strategies by 38–54%.',
    github: 'https://github.com/FeoluK/DYNAMO-Portfolio',
  },
  {
    title: 'Eous: Embodied AR Robot Assistant',
    role: 'Winner, Stanford Hackathon',
    year: '2026',
    summary:
      'A hands-free AR system pairing AR glasses, a smartphone, and a Raspberry Pi robot for gesture and voice control with live camera feedback — all processed on-device with no cloud dependencies.',
    github: 'https://github.com/FeoluK/Eous',
  },
  {
    title: 'VR Healthcare Training Simulation',
    role: 'Winner, MIT Hackathon',
    year: '2024',
    summary:
      'A VR healthcare simulation on the Apple Vision Pro for CPR and first-aid training, pioneering SharePlay integration for collaborative learning with iPhone users. Showcased to The Venture Reality Fund, where the concept was carried forward.',
    github: 'https://github.com/FeoluK/Health-Heroes',
  },
  {
    title: 'AgenTeX: Image-to-LaTeX Agent',
    role: 'Winner, AgentOps Hackathon',
    year: '2025',
    summary:
      'An AI agent built with OpenAI’s Agents SDK that converts handwritten math to LaTeX with 91% accuracy. Featured as an AgentOps hackathon winner with a board-member recommendation for commercial launch.',
    github: 'https://github.com/FeoluK/AgenTeX',
  },
  {
    title: 'Medical MRI Image Reconstruction',
    role: 'Deep Learning Research',
    year: '2024',
    summary:
      'AI-based models for medical MRI image reconstruction that cut required scan times by 55–70% while preserving image quality, reducing reconstruction error by ~60% relative to baseline deep learning models.',
    github: 'https://github.com/FeoluK/fastmri-reconstruction',
  },
  {
    title: 'Supreme Court Case Prediction',
    role: '1st Place, Stanford CS109',
    year: '2025',
    summary:
      'A Bayesian case-prediction framework achieving 73% top-3 accuracy across 11 possible Supreme Court outcomes from observable case attributes. Featured as a winning example project in Stanford’s CS109.',
    github: '',
  },
  {
    title: 'SynchroSound: Facial-Expression Song Selection',
    role: 'iOS / ML',
    year: '2024',
    summary:
      'An iOS app that reads facial expressions to recommend mood-matching songs, integrating SwiftUI, UIKit, and SwiftData with Google Cloud Vision and Spotify’s Web API. Validated across 500+ test images, improving mood-alignment accuracy by 82%.',
    github: 'https://github.com/FeoluK/SynchroSound',
  },
  {
    title: 'Music Recommendation System',
    role: 'Machine Learning',
    year: '2025',
    summary:
      'A recommendation system using SVD and PCA over 60+ audio features from 7,000 Spotify songs, uncovering patterns beyond traditional metadata and projecting features to identify similarities across 35 feature combinations.',
    github: '',
  },
  {
    title: 'TreeCycle',
    role: 'Environmental Tech',
    year: '2024',
    summary:
      'A sustainable-forestry management system using IoT sensors and machine learning to optimize tree-lifecycle monitoring and carbon-footprint tracking.',
    github: 'https://github.com/FeoluK/TreeCycle',
  },
  {
    title: 'MIRA',
    role: 'Computer Vision',
    year: '2024',
    summary:
      'A computer-vision system for real-time image recognition and analysis, implementing deep learning models for visual perception tasks.',
    github: 'https://github.com/FeoluK/MIRA',
  },
  {
    title: 'Neural Housing Predictor',
    role: 'Academic Project',
    year: '2024',
    summary:
      'A machine learning model achieving a 35% accuracy improvement in property valuation through advanced data processing and neural-network architecture.',
    github: '',
  },
  {
    title: 'LZW File Compression',
    role: 'Systems Programming',
    year: '2024',
    summary:
      'A high-performance file-compression implementation reducing file size by ~50% relative to standard methods, enabling faster and more efficient transfers.',
    github: '',
  },
  {
    title: 'Heap Allocator',
    role: 'Systems Programming',
    year: '2024',
    summary:
      'A custom memory-management system implementing malloc, realloc, and free in C, improving memory utilization by 20% across 100,000 requests.',
    github: '',
  },
  {
    title: 'Custom Unix Shell',
    role: 'Operating Systems',
    year: '2024',
    summary:
      'A command-line Unix shell supporting file manipulation, redirection, and running 10+ programs concurrently, tested across 100+ real-world scenarios.',
    github: '',
  },
]

const animations = [
  { title: 'Space Animation', videoId: 'O6ut75txAFE', description: '' },
  { title: 'Haunted House Animation', videoId: '46RGFFA52AE', description: '' },
  { title: 'Donut Animation', videoId: 'ZZxudWLa2pc', description: '' },
  {
    title: 'Echelon RPG',
    videoId: '4PR8-mKllMo',
    description: 'Solo Leveling inspired RPG game made for the Meta Quest.',
  },
  {
    title: 'TreeCycle Demo',
    videoId: 'yDez3BDtcOo',
    description: 'Waste sorter and environment building tycoon.',
  },
]

export default function Projects() {
  const [tab, setTab] = useState('projects')

  return (
    <div className="mx-auto max-w-2xl px-6">
      <div className="pt-10">
        <Nav current="Projects" />
      </div>

      <main className="pt-14">
        <header>
          <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
          <p className="mt-2 text-[15px] text-muted">
            Work spanning machine learning, computer vision, spatial computing, and
            systems.
          </p>
        </header>

        {/* Tabs */}
        <div className="mt-8 flex items-center gap-6 border-b border-rule text-sm">
          <button
            onClick={() => setTab('projects')}
            className={`-mb-px border-b-2 pb-2 transition-colors ${
              tab === 'projects'
                ? 'border-accent text-foreground'
                : 'border-transparent text-muted hover:text-foreground'
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => setTab('animations')}
            className={`-mb-px border-b-2 pb-2 transition-colors ${
              tab === 'animations'
                ? 'border-accent text-foreground'
                : 'border-transparent text-muted hover:text-foreground'
            }`}
          >
            Animations &amp; Creations
          </button>
        </div>

        {/* Projects tab */}
        {tab === 'projects' && (
          <ol className="mt-10 space-y-9">
            {projects.map((p, i) => (
              <li key={i} className="flex gap-4">
                <span className="w-5 shrink-0 text-sm text-muted tabular-nums">
                  {i + 1}.
                </span>
                <div className="text-[15px]">
                  {p.github ? (
                    <a
                      className="link font-medium"
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {p.title}
                    </a>
                  ) : (
                    <span className="font-medium">{p.title}</span>
                  )}
                  <p className="mt-1 text-sm text-muted">
                    {p.role} · {p.year}
                  </p>
                  <p className="mt-2 leading-relaxed">{p.summary}</p>
                  {p.github && (
                    <div className="mt-2 text-sm">
                      <a
                        className="link"
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        code →
                      </a>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ol>
        )}

        {/* Animations tab */}
        {tab === 'animations' && (
          <div className="mt-10">
            <p className="text-sm text-muted">
              Some fun side projects and creative experiments I work on in my free
              time.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {animations.map((a, i) => (
                <a
                  key={i}
                  href={`https://youtu.be/${a.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-lg border border-rule transition-colors hover:border-accent"
                >
                  <div className="relative aspect-video overflow-hidden bg-neutral-100">
                    <img
                      src={`https://img.youtube.com/vi/${a.videoId}/hqdefault.jpg`}
                      alt={a.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium group-hover:text-accent transition-colors">
                      {a.title}
                    </h3>
                    {a.description && (
                      <p className="mt-1 text-sm text-muted">{a.description}</p>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
