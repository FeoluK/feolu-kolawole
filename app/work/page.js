import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function WorkPage() {
  const currentWork = [
    {
      title: "Software Development Engineer (Spectacles Team)",
      organization: "Snapchat",
      location: "Stanford, CA",
      period: "June 2025 - Present",
      description:
        "Lead developer on a flagship augmented reality prototype (AR CAD) for Snapchat Spectacles, guiding a 4-person team to be awarded $20K in funding. Built the first collaborative Spectacles lens for engineers to visualize and share 3D models in real-world environments, cutting prototyping costs by ~40% and accelerating design iteration.",
      technologies: [
        "Snap Lens Studio",
        "JavaScript",
        "Three.js",
        "AR UX",
        "Product Prototyping",
      ],
      type: "Research",
    },
    {
      title: "Lead Machine Learning Researcher",
      organization: "Stanford AI Laboratory (PI - Ron Fedkiw)",
      location: "Stanford, CA",
      period: "March 2025 - Present",
      description:
        "Built CNN models to generate realistic 3D hair reconstructions across diverse demographics, raising accuracy to 96% and enabling deployment on lightweight devices. Developed a robust extraction pipeline with OpenCV and SAM segmentation that handles poor-quality images and achieves perfect segmentation on 98% of images.",
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
      title: "Software Engineer - Spatial Computing",
      organization: "Stanford Human Perception Lab (PI - Khizer Khaderi)",
      location: "Palo Alto, CA",
      period: "December 2024 - June 2025",
      description:
        "Engineered an AR application for Snap Spectacles using Lens Studio and JavaScript, leveraging environmental testing to evaluate perception levels and enabling analysis of 92% of the available field of vision. Created a process to transform video into accurate 3D environments by integrating SLAM and point-cloud segmentation models, optimizing output by 44%.",
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
                  Research, leadership, and professional experience in Spatial Computing, AI, and Extended Reality.
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
