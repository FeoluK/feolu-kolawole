import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Feolu Kolawole - Spatial Computing Engineer',
  description: 'Feolu Kolawole - Specializing in AI, 3D systems, and Extended Reality. Building the future of human-computer interaction at Stanford University.',
  keywords: 'Feolu Kolawole, spatial computing, AI, artificial intelligence, 3D systems, Extended Reality, XR, Stanford University, computer vision, machine learning',
  author: 'Feolu Kolawole',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Feolu Kolawole - Spatial Computing Engineer',
    description: 'Specializing in AI, 3D systems, and Extended Reality. Building the future of human-computer interaction at Stanford University.',
    url: 'https://feolu-kolawole.vercel.app',
    siteName: 'Feolu Kolawole',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Feolu Kolawole - Spatial Computing Engineer',
    description: 'Specializing in AI, 3D systems, and Extended Reality. Building the future of human-computer interaction at Stanford University.',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}