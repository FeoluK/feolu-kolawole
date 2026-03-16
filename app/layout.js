import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Feolu Kolawole - ML, CV, and Spatial Computing',
  description: 'Feolu Kolawole - Specializing in computer vision, world models, and augmented reality. Building the future of human-computer interaction at Stanford University.',
  keywords: 'Feolu Kolawole, machine learning, computer vision, world models, augmented reality, spatial computing, AI, Stanford University, XR',
  author: 'Feolu Kolawole',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Feolu Kolawole - ML, CV, and Spatial Computing',
    description: 'Specializing in computer vision, world models, and augmented reality. Building the future of human-computer interaction at Stanford University.',
    url: 'https://feolu-kolawole.vercel.app',
    siteName: 'Feolu Kolawole',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Feolu Kolawole - ML, CV, and Spatial Computing',
    description: 'Specializing in computer vision, world models, and augmented reality. Building the future of human-computer interaction at Stanford University.',
  },
  icons: {
    icon: '/feolu-favicon.png',       // uses the file in /public
    shortcut: '/feolu-favicon.png',
    apple: '/feolu-favicon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
