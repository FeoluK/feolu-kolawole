export default function CurrentWork() {
  const currentWork = [
    {
      title: "Machine Learning Researcher (Incoming)",
      organization: "Microsoft",
      location: "Redmond, WA",
      description:
        "Researching machine learning and computer vision techniques for MRI imaging, advised by Dr. Olesya Melnichenko.",
      period: "June 2026",
      type: "Research",
    },
    {
      title: "Machine Learning Researcher",
      organization: "Stanford AI Laboratory (PI - Fei-Fei Li & Ehsan Adeli)",
      description:
        "Engineered a video-language pipeline to automatically monitor ICU patient behavior from continuous footage, enabling real-time health assessment of 2,656 critically ill patients without manual intervention.",
      period: "January 2026 - Present",
      type: "Research",
    },
    {
      title: "Machine Learning Researcher",
      organization: "Stanford Human Perception Lab (PI - Khizer Khaderi)",
      description:
        "Built a single model that predicts user actions from unlabeled video across 9 distinct environments, achieving 85.2% accuracy and enabling zero-shot action understanding without labeled training data.",
      period: "January 2026 - Present",
      type: "Research",
    },
  ]

  const getTypeColor = (type) => {
    const colors = {
      Research: "text-indigo-400 border-indigo-400/50",
      Leadership: "text-purple-400 border-purple-400/50",
    }
    return colors[type] || "text-gray-400 border-gray-400/50"
  }

  return (
    <section id="projects" className="py-24 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-20">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-4xl md:text-5xl font-light">Current Work</h2>
              <div className="flex items-center gap-6">
                <a
                  href="/work"
                  className="text-indigo-400 hover:text-indigo-300 transition-colors text-lg cursor-pointer"
                >
                  See all positions/affiliations →
                </a>
              </div>
            </div>
            <p className="text-xl text-gray-400 max-w-2xl">
              Research roles in machine learning, computer vision, and spatial computing.
            </p>
          </div>

          {/* Current Work List */}
          <div className="space-y-12">
            {currentWork.map((work, index) => (
              <div key={index} className="border-b border-gray-800 pb-12 last:border-b-0">
                <div className="grid md:grid-cols-4 gap-6">
                  {/* Content */}
                  <div className="md:col-span-3">
                    <div className="flex items-center gap-4 mb-3">
                      <h3 className="text-xl font-medium text-white">{work.title}</h3>
                      <span
                        className={`text-sm px-3 py-1 border rounded-none ${getTypeColor(work.type)}`}
                      >
                        {work.type}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-4 text-gray-400">
                      <span className="font-medium">{work.organization}</span>
                      <span>•</span>
                      <span>{work.location || "Stanford, CA"}</span>
                    </div>

                    <p className="text-gray-300 leading-relaxed">{work.description}</p>
                  </div>

                  {/* Period */}
                  <div className="flex md:justify-end">
                    <span className="text-sm text-gray-500 font-light">{work.period}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
