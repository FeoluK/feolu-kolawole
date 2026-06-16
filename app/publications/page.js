import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Publications — Feolu Kolawole',
}

const publications = [
  {
    title:
      'Mixture-of-Steering Vectors (MoSV): Sparse Gating for Compositional Hallucination Mitigation',
    authors: 'Vedant Srinivas, Daniel Lee, Feolu Kolawole',
    venue: 'ICML 2026 Workshop on Mechanistic Interpretability',
    year: '2026',
    summary:
      'A framework that reduces LLM hallucinations by dynamically selecting from multiple learned correction vectors per prompt, improving factual accuracy by +2.4pp where prior methods gained only +0.3pp, and automatically discovering distinct hallucination types without manual labels across 10,615 items spanning 8 knowledge domains.',
    href: 'https://openreview.net/forum?id=6RLSD6GnJC',
  },
  {
    title: 'Cross-Game Semantic Alignment of Latent Action Representations',
    authors: 'Feolu Kolawole, Khizer Khaderi',
    venue:
      'IJCAI 2026 Workshop on Generalizing from Limited Resources in the Open World (GLOW)',
    year: '2026',
    summary:
      'Studies when a single inverse dynamics model trained on multiple visually-disparate games produces action embeddings that align by action class rather than game identity. Across racing, Atari, and first-person domains, identifies a closable “calibration gap” as the primary failure mode, and shows a 50-label-per-class centroid calibration recovers 91.1% accuracy on Pole Position — within 0.3pp of a fully-supervised single-game classifier.',
    href: '/Cross-Game_Semantic_Alignment.pdf',
  },
]

export default function Publications() {
  return (
    <div className="mx-auto max-w-2xl px-6">
      <div className="pt-10">
        <Nav current="Publications" />
      </div>

      <main className="pt-14">
        <header>
          <h1 className="text-3xl font-semibold tracking-tight">Publications</h1>
          <p className="mt-2 text-[15px] text-muted">Research papers.</p>
        </header>

        <ol className="mt-10 space-y-9">
          {publications.map((pub, i) => (
            <li key={i} className="flex gap-4">
              <span className="w-5 shrink-0 text-sm text-muted tabular-nums">
                {i + 1}.
              </span>
              <div className="text-[15px]">
                <a
                  className="link font-medium"
                  href={pub.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {pub.title}
                </a>
                <p className="mt-1 text-sm">
                  <span className="font-medium text-foreground">{pub.venue}</span>
                  <span className="text-muted"> · {pub.year}</span>
                </p>
                <p className="mt-0.5 text-sm text-muted">
                  {pub.authors.split('Feolu Kolawole').map((part, idx, arr) => (
                    <span key={idx}>
                      {part}
                      {idx < arr.length - 1 && (
                        <span className="underline underline-offset-2">
                          Feolu Kolawole
                        </span>
                      )}
                    </span>
                  ))}
                </p>
                <p className="mt-2 leading-relaxed">{pub.summary}</p>
                <div className="mt-2 text-sm">
                  <a
                    className="link"
                    href={pub.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    paper →
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </main>

      <Footer />
    </div>
  )
}
