import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function WorkPage() {
  const currentWork = [
    {
      title: "Machine Learning and Computer Vision Researcher",
      organization: "Stanford Artificial Intelligence Laboratory",
      location: "Stanford, CA",
      period: "March 2025 - Present",
      description: "Developing next-generation computer vision pipelines for 3D human mesh modeling and segmentation. Engineering AI models for 3D character and avatar development via hair type classification, extraction, and generation for industry applications in 3D animation, film, and media.",
      technologies: ["Computer Vision", "3D Modeling", "Machine Learning", "Python", "TensorFlow"],
      type: "Research"
    },
    {
      title: "Research Assistant",
      organization: "Human Perception Laboratory",
      location: "Stanford, CA", 
      period: "January 2025 - Present",
      description: "Developing advanced spatial mapping systems using ORB-SLAM models and NVIDIA Omniverse to create high-fidelity digital twins of perceived environments. Building robust simulation frameworks for data collection and environmental analysis to advance human perception research.",
      technologies: ["ORB-SLAM", "NVIDIA Omniverse", "Digital Twins", "Computer Vision", "Simulation"],
      type: "Research"
    }
  ]

  const leadership = [
    {
      title: "Vice President of External Affairs",
      organization: "Stanford XR",
      location: "Stanford, CA",
      period: "September 2024 - Present",
      description: "Leading strategic partnerships and external relations for Stanford's premier Extended Reality organization. Co-led successful launch of partnerships with prominent sponsors including Meta, NVIDIA, Amazon, and Snapchat. Organized immersive technology hackathons engaging over 300 participants in XR and Spatial Computing projects.",
      achievements: [
        "Secured partnerships with Meta, NVIDIA, Amazon, and Snapchat",
        "Organized hackathons with 300+ participants in XR and Spatial Computing",
        "Led external affairs strategy for Stanford's largest XR organization"
      ],
      type: "Leadership"
    }
  ]

  const pastExperience = [
    {
      title: "Computer Science President and Instructor", 
      organization: "Byte Club",
      location: "Plainfield, IL",
      period: "August 2022 - May 2024",
      description: "Pioneered weekly programming tutoring sessions on data structures, graphics, and object-oriented programming, leading to improved computer science grades for ~15% of participating students. Achieved top placements at district Division A computer science competitions.",
      type: "Education"
    },
    {
      title: "Founder & Instructor",
      organization: "TechLiteracy4All",
      location: "Lagos, Nigeria",
      period: "May 2023 - August 2023", 
      description: "Founded and executed inaugural peer learning event introducing 20+ high school students to AI and virtual reality through in-person facilitated sessions in Lagos, Nigeria.",
      type: "Social Impact"
    }
  ]

  const getTypeColor = (type) => {
    const colors = {
      "Research": "text-indigo-400 border-indigo-400/50",
      "Leadership": "text-purple-400 border-purple-400/50",
      "Education": "text-green-400 border-green-400/50",
      "Social Impact": "text-cyan-400 border-cyan-400/50"
    }
    return colors[type] || "text-gray-400 border-gray-400/50"
  }

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
                  Work & Experience
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl">
                  Research, leadership, and professional experience in spatial computing, AI, and Extended Reality.
                </p>
              </div>

              {/* Current Research */}
              <div className="mb-24">
                <h2 className="text-2xl font-light mb-12 text-gray-300">Current Research</h2>
                
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
                            <span>{work.location}</span>
                          </div>
                          
                          <p className="text-gray-300 leading-relaxed mb-6">
                            {work.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-2">
                            {work.technologies.map((tech, techIndex) => (
                              <span key={techIndex} className="text-sm text-gray-500 px-3 py-1 border border-gray-700 rounded-none">
                                {tech}
                              </span>
                            ))}
                          </div>
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

              {/* Leadership */}
              <div className="mb-24">
                <h2 className="text-2xl font-light mb-12 text-gray-300">Leadership</h2>
                
                <div className="space-y-12">
                  {leadership.map((work, index) => (
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
                            <span>{work.location}</span>
                          </div>
                          
                          <p className="text-gray-300 leading-relaxed mb-6">
                            {work.description}
                          </p>
                          
                          {work.achievements && (
                            <div className="space-y-2">
                              <h4 className="text-gray-400 text-sm font-medium mb-3">Key Achievements:</h4>
                              <ul className="space-y-2">
                                {work.achievements.map((achievement, achIndex) => (
                                  <li key={achIndex} className="text-gray-400 text-sm flex items-start gap-2">
                                    <span className="text-indigo-400 mt-1">•</span>
                                    {achievement}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
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

              {/* Past Experience */}
              <div>
                <h2 className="text-2xl font-light mb-12 text-gray-300">Past Experience</h2>
                
                <div className="space-y-12">
                  {pastExperience.map((work, index) => (
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
                            <span>{work.location}</span>
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
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}