import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function WorkPage() {
  const currentWork = [
    {
      title: "Machine Learning Researcher (Incoming)",
      organization: "Microsoft",
      location: "Redmond, WA",
      period: "June 2026",
      description:
        "Researching machine learning and computer vision techniques for MRI imaging, advised by Dr. Olesya Melnichenko.",
      technologies: [
        "Python",
        "PyTorch",
        "Computer Vision",
        "Medical Imaging",
      ],
      type: "Research",
    },
    {
      title: "Machine Learning Researcher",
      organization: "Stanford AI Laboratory (PI - Fei-Fei Li & Ehsan Adeli)",
      location: "Stanford, CA",
      period: "January 2026 - Present",
      description:
        "Engineered a video-language pipeline to automatically monitor ICU patient behavior from continuous footage, enabling real-time health assessment of 2,656 critically ill patients without manual intervention.",
      technologies: [
        "Python",
        "PyTorch",
        "Video-Language Models",
        "Computer Vision",
      ],
      type: "Research",
    },
    {
      title: "Machine Learning Researcher",
      organization: "Stanford Human Perception Lab (PI - Khizer Khaderi)",
      location: "Palo Alto, CA",
      period: "January 2026 - Present",
      description:
        "Built a single model that predicts user actions from unlabeled video across 9 distinct environments, achieving 85.2% accuracy and enabling zero-shot action understanding without labeled training data.",
      technologies: [
        "Python",
        "PyTorch",
        "World Models",
        "Inverse Dynamics",
        "Optical Flow",
      ],
      type: "Research",
    },
  ]

  const leadership = [
    {
      title: "Vice President of External Affairs",
      organization: "Stanford XR",
      location: "Stanford, CA",
      period: "September 2024 - Present",
      description:
        "Leading strategic partnerships and external relations for Stanford's premier Extended Reality organization. Co-led launch of partnerships with Meta, NVIDIA, Amazon, and Snapchat. Organized immersive technology hackathons engaging 300+ participants in XR and Spatial Computing projects.",
      achievements: [
        "Secured partnerships with Meta, NVIDIA, Amazon, and Snapchat",
        "Organized hackathons with 300+ participants in XR and Spatial Computing",
        "Led external affairs strategy for Stanford's largest XR organization",
      ],
      type: "Leadership",
    },
  ]

  const pastExperience = [
    {
      title: "Lead Machine Learning Researcher",
      organization: "Stanford AI Laboratory (PI - Ron Fedkiw)",
      location: "Stanford, CA",
      period: "March 2025 - December 2025",
      description:
        "Drove development of CNN models to generate realistic 3D hair reconstructions across demographics, boosting accuracy to 96% and enabling deployment on lightweight devices. Built a highly robust extraction algorithm with OpenCV and SAM segmentation, capable of handling poor-quality images and achieving perfect segmentation on 98% of images.",
      technologies: [
        "Python",
        "PyTorch",
        "OpenCV",
        "Segment Anything (SAM)",
        "3D Reconstruction",
        "CNNs",
      ],
      type: "Research",
    },
    {
      title: "Software Engineer",
      organization: "Stanford Human Perception Lab",
      location: "Palo Alto, CA",
      period: "December 2024 - June 2025",
      description:
        "Engineered an AR application on Snap Spectacles in collaboration with the Snapchat Prototyping Team, enabling analysis of 92% of the available field of vision. Created a process to transform video into accurate 3D environments by integrating SLAM and point-cloud segmentation models, thereby optimizing output by 44%.",
      technologies: [
        "Snap Lens Studio",
        "JavaScript",
        "SLAM",
        "Point-Cloud Segmentation",
        "3D Environment Reconstruction",
      ],
      type: "Research",
    },
  ]

  const getTypeColor = (type) => {
    const colors = {
      Research: "text-indigo-400 border-indigo-400/50",
      Leadership: "text-purple-400 border-purple-400/50",
      Education: "text-green-400 border-green-400/50",
      SocialImpact: "text-cyan-400 border-cyan-400/50",
    }
    return colors[type] || "text-gray-400 border-gray-400/50"
  }

  const Section = ({ title, items }) => (
    <div className="mb-24">
      <h2 className="text-2xl font-light mb-12 text-gray-300">{title}</h2>
      <div className="space-y-12">
        {items.map((work, index) => (
          <div key={index} className="border-b border-gray-800 pb-12 last:border-b-0">
            <div className="grid md:grid-cols-4 gap-6">
              {/* Content */}
              <div className="md:col-span-3">
                <div className="flex items-center gap-4 mb-3">
                  <h3 className="text-xl font-medium text-white">{work.title}</h3>
                  {work.type && (
                    <span className={`text-sm px-3 py-1 border rounded-none ${getTypeColor(work.type)}`}>
                      {work.type}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 mb-4 text-gray-400">
                  {work.organization && <span className="font-medium">{work.organization}</span>}
                  {(work.organization || work.location) && <span>•</span>}
                  {work.location && <span>{work.location}</span>}
                </div>

                {work.description && (
                  <p className="text-gray-300 leading-relaxed mb-6">{work.description}</p>
                )}

                {work.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {work.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-sm text-gray-500 px-3 py-1 border border-gray-700 rounded-none"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {work.achievements && (
                  <div className="mt-6 space-y-2">
                    <h4 className="text-gray-400 text-sm font-medium mb-2">Key Achievements:</h4>
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
                <span className="text-sm text-gray-500 font-light">{work.period}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="pt-24">
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              {/* Page Header */}
              <div className="mb-20">
                <h1 className="text-4xl md:text-5xl font-light mb-6">Work & Experience</h1>
                <p className="text-xl text-gray-400 max-w-2xl">
                  Research, leadership, and professional experience in machine learning, computer vision, and spatial computing.
                </p>
              </div>

              <Section title="Current Roles" items={currentWork} />
              <Section title="Leadership" items={leadership} />
              <Section title="Past Experience" items={pastExperience} />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
