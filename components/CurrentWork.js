export default function CurrentWork() {
  const currentWork = [
    {
      title: "Machine Learning and Computer Vision Researcher",
      organization: "Stanford Artificial Intelligence Laboratory",
      description: "Developing next-generation computer vision pipelines for 3D human mesh modeling and segmentation. Engineering AI models for 3D character and avatar development via hair type classification, extraction, and generation.",
      period: "March 2025 - Present",
      type: "Research"
    },
    {
      title: "Research Assistant",
      organization: "Human Perception Laboratory",
      description: "Developing advanced spatial mapping systems using ORB-SLAM models and NVIDIA Omniverse to create high-fidelity digital twins of perceived environments for simulation and data collection.",
      period: "January 2025 - Present",
      type: "Research"
    },
    {
      title: "Vice President of External Affairs",
      organization: "Stanford XR",
      description: "Leading strategic partnerships and external relations. Co-led successful partnerships with Meta, NVIDIA, Amazon, and Snapchat. Organized immersive technology hackathons with 300+ participants in XR and Spatial Computing.",
      period: "September 2024 - Present",
      type: "Leadership"
    }
  ]

  const getTypeColor = (type) => {
    const colors = {
      "Research": "text-indigo-400 border-indigo-400/50",
      "Leadership": "text-purple-400 border-purple-400/50"
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
              <h2 className="text-4xl md:text-5xl font-light">
                Current Work
              </h2>
              <a 
                href="/work"
                className="text-indigo-400 hover:text-indigo-300 transition-colors text-lg cursor-pointer"
              >
                See all positions/affiliations →
              </a>
            </div>
            <p className="text-xl text-gray-400 max-w-2xl">
              Research and leadership roles in spatial computing, AI systems, and Extended Reality.
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
                      <h3 className="text-xl font-medium text-white">
                        {work.title}
                      </h3>
                      <span className={`text-sm px-3 py-1 border rounded-none ${getTypeColor(work.type)}`}>
                        {work.type}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-4 text-gray-400">
                      <span className="font-medium">{work.organization}</span>
                      <span>•</span>
                      <span>Stanford, CA</span>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed">
                      {work.description}
                    </p>
                  </div>
                  
                  {/* Period */}
                  <div className="flex md:justify-end">
                    <span className="text-sm text-gray-500 font-light">
                      {work.period}
                    </span>
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