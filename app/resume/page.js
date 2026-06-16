import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Resume — Feolu Kolawole',
}

const experience = [
  {
    date: 'Jun 2026 — Present',
    location: 'Redmond, WA',
    org: 'Microsoft Research',
    logo: '/logos/microsoft.png',
    title: 'Machine Learning Researcher',
    description:
      'Computer vision for MRI imaging, advised by Dr. Olesya Melnichenko.',
  },
  {
    date: 'Jan 2026 — Present',
    location: 'Stanford, CA',
    org: 'Stanford AI Lab (SAIL)',
    logo: '/logos/stanford.png',
    title: 'Machine Learning Researcher · PIs Fei-Fei Li & Ehsan Adeli',
    description: '3D diffusion and long-context video understanding.',
  },
  {
    date: 'Jan 2026 — Present',
    location: 'Palo Alto, CA',
    org: 'Stanford Human Perception Lab',
    logo: '/logos/stanford.png',
    title: 'Machine Learning Researcher · PI Khizer Khaderi',
    description:
      'World models for zero-shot action understanding — a single model that predicts user actions from unlabeled video across 9 environments at 85.2% accuracy.',
  },
  {
    date: 'Mar 2025 — Dec 2025',
    location: 'Stanford, CA',
    org: 'Stanford AI Lab (SAIL)',
    logo: '/logos/stanford.png',
    title: 'Lead Machine Learning Researcher · PI Ron Fedkiw',
    description:
      'Drove development of CNN models generating realistic 3D hair reconstructions across demographics, boosting accuracy to 96% and enabling deployment on lightweight devices. Built a robust extraction pipeline with OpenCV and SAM segmentation, achieving clean segmentation on 98% of images.',
  },
]

const education = [
  {
    date: '2024 — 2028',
    location: 'Stanford, CA',
    org: 'Stanford University',
    logo: '/logos/stanford.png',
    title: 'B.S. in Computer Science · Expected June 2028',
    note: 'Relevant coursework: Data Structures & Algorithms, Operating Systems, Concurrency, Linear Algebra, Multivariable Calculus, Machine Learning, Computer Vision, Reinforcement Learning, Statistics, Combinatorics.',
    bulletsLabel: 'Activities & societies',
    bullets: [
      'Stanford XR (Vice President)',
      'Stanford AI Club',
      'Stanford Neurotech',
    ],
  },
]

const programs = [
  {
    date: '',
    location: '',
    org: 'Optiver FutureFocus',
    logo: '/logos/optiver.png',
    title: 'Quantitative Trading Program',
    description:
      'Selective program for students exploring quantitative trading and technology at Optiver.',
  },
]

function Entry({ date, location, org, title, description, logo, note, bullets, bulletsLabel }) {
  return (
    <div className="grid grid-cols-1 gap-1 sm:grid-cols-[120px_1fr] sm:gap-6">
      <div className="text-sm text-muted tabular-nums sm:pt-1">{date}</div>
      <div className="text-[15px]">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4">
          <span className="flex items-center gap-2 font-semibold">
            {logo && (
              <img
                src={logo}
                alt=""
                aria-hidden="true"
                className="h-5 w-5 shrink-0 rounded-sm object-contain"
              />
            )}
            {org}
          </span>
          {location && <span className="text-sm text-muted">{location}</span>}
        </div>
        {title && <div className="mt-0.5">{title}</div>}
        {note && <p className="mt-1.5 leading-relaxed text-muted">{note}</p>}
        {description && <p className="mt-1.5 leading-relaxed text-muted">{description}</p>}
        {bullets && (
          <div className="mt-2">
            {bulletsLabel && (
              <p className="text-sm font-medium text-foreground">{bulletsLabel}</p>
            )}
            <ul className="mt-1 space-y-1">
              {bullets.map((b, i) => (
                <li key={i} className="flex gap-2 text-sm text-muted">
                  <span className="text-accent">·</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

function Section({ title, children }) {
  return (
    <section className="mt-12">
      <h2 className="mb-6 text-lg font-semibold tracking-tight">{title}</h2>
      <div className="space-y-8">{children}</div>
    </section>
  )
}

export default function Resume() {
  return (
    <div className="mx-auto max-w-2xl px-6">
      <div className="pt-10">
        <Nav current="Resume" />
      </div>

      <main className="pt-14">
        <header>
          <h1 className="text-3xl font-semibold tracking-tight">Resume</h1>
          <p className="mt-2 text-[15px] text-muted">
            Computer science student at Stanford researching machine learning,
            computer vision, and spatial computing.{' '}
            <a
              className="link"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              pdf →
            </a>
          </p>
        </header>

        <Section title="Experience">
          {experience.map((e, i) => (
            <Entry key={i} {...e} />
          ))}
        </Section>

        <Section title="Education">
          {education.map((e, i) => (
            <Entry key={i} {...e} />
          ))}
        </Section>

        <Section title="Programs">
          {programs.map((e, i) => (
            <Entry key={i} {...e} />
          ))}
        </Section>
      </main>

      <Footer />
    </div>
  )
}
