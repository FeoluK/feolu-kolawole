import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const highlightedWork = [
  {
    title:
      'Mixture-of-Steering Vectors (MoSV): Sparse Gating for Compositional Hallucination Mitigation',
    authors: 'Vedant Srinivas, Daniel Lee, Feolu Kolawole',
    venue: 'ICML 2026 Workshop on Mechanistic Interpretability',
    year: '2026',
    summary:
      'A framework that dynamically selects from multiple learned correction vectors per prompt, improving factual accuracy by +2.4pp (vs. +0.3pp for prior methods) and discovering distinct hallucination types without labels across 10,615 items in 8 domains.',
    href: 'https://openreview.net/forum?id=6RLSD6GnJC',
    linkLabel: 'paper',
  },
  {
    title: 'Cross-Game Semantic Alignment of Latent Action Representations',
    authors: 'Feolu Kolawole, Khizer Khaderi',
    venue: 'IJCAI 2026 Workshop on Generalizing from Limited Resources (GLOW)',
    year: '2026',
    summary:
      'A single inverse dynamics model trained across racing, Atari, and first-person games aligns action embeddings by action class rather than game identity; a 50-label centroid calibration recovers 91.1% accuracy on Pole Position, within 0.3pp of a fully-supervised single-game classifier.',
    href: '/Cross-Game_Semantic_Alignment.pdf',
    linkLabel: 'paper',
  },
  {
    title: 'Eous: Embodied AR Robot Assistant',
    authors: 'Winner, Stanford Hackathon',
    year: '2026',
    summary:
      'A hands-free AR system pairing AR glasses, a smartphone, and a Raspberry Pi robot for gesture and voice control with live camera feedback — all on-device with no cloud dependencies.',
    href: 'https://github.com/FeoluK/Eous',
    linkLabel: 'code',
  },
  {
    title: 'DYNAMO: Reinforcement Learning Portfolio Manager',
    authors: 'Reinforcement Learning',
    year: '2026',
    summary:
      'An RL agent managing a portfolio across 10 asset classes, achieving 15.76% annualized returns at a 1.44 Sharpe ratio — outperforming traditional strategies by 38–54%.',
    href: 'https://github.com/FeoluK/DYNAMO-Portfolio',
    linkLabel: 'code',
  },
  {
    title: 'Power Lever: GPU-Efficient LLM Inference Gateway',
    authors: 'Winner, Stanford Hackathon',
    year: '2026',
    summary:
      'An inference gateway that dynamically routes LLM prompts to right-sized GPU hardware across 4 tiers, cutting energy use by 75% on simple queries while reserving high-end GPUs for complex tasks.',
    href: 'https://github.com/FeoluK/power-lever',
    linkLabel: 'code',
  },
]

export default function Bio() {
  return (
    <div className="mx-auto max-w-2xl px-6">
      <div className="pt-10">
        <Nav current="Bio" />
      </div>

      <main className="pt-14">
        {/* Header: name + affiliations + photo */}
        <header className="flex items-start justify-between gap-8">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">Feolu Kolawole</h1>
            <p className="mt-2 text-sm text-muted">
              Microsoft · Stanford University · Stanford AI Lab (SAIL)
            </p>
          </div>
          <img
            src="/feolu.jpg"
            alt="Feolu Kolawole"
            className="h-28 w-28 shrink-0 rounded-full object-cover sm:h-32 sm:w-32"
          />
        </header>

        {/* Intro */}
        <section className="mt-8 space-y-4 leading-relaxed text-[15px]">
          <p>
            I&apos;m an undergraduate at Stanford University studying computer
            science, and a machine learning researcher at the{' '}
            <span className="font-medium">Stanford AI Lab (SAIL)</span> and the{' '}
            <span className="font-medium">Stanford Human Perception Lab</span>. My
            work spans computer vision, world models, and spatial computing.
          </p>
          <p>
            I also serve as VP of External Affairs at{' '}
            <span className="font-medium">Stanford XR</span>. My research interests
            span computer vision, world models, reinforcement learning, and
            augmented reality / spatial computing.
          </p>
          <p>
            Reach me at{' '}
            <a className="link" href="mailto:flukol@stanford.edu">
              flukol@stanford.edu
            </a>
            .
          </p>
        </section>

        {/* Highlighted work */}
        <section className="mt-14">
          <h2 className="text-lg font-semibold tracking-tight">Highlighted work</h2>
          <ol className="mt-6 space-y-7">
            {highlightedWork.map((item, i) => (
              <li key={i} className="flex gap-4">
                <span className="w-5 shrink-0 text-sm text-muted tabular-nums">
                  {i + 1}.
                </span>
                <div className="text-[15px]">
                  <a
                    className="link font-medium"
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.title}
                  </a>
                  <p className="mt-1 text-sm text-muted">
                    {item.authors}
                    {item.venue ? <> · {item.venue}</> : null} · {item.year}
                  </p>
                  <p className="mt-2 leading-relaxed">{item.summary}</p>
                  <div className="mt-2 text-sm">
                    <a
                      className="link"
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.linkLabel} →
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-6 flex gap-6 text-sm">
            <a className="link" href="/publications">
              All publications →
            </a>
            <a className="link" href="/projects">
              All projects →
            </a>
          </p>
        </section>
      </main>

      <Footer />
    </div>
  )
}
