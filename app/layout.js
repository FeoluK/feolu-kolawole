import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://feolu-kolawole.vercel.app'),
  title: 'Feolu Kolawole',
  description:
    'Feolu Kolawole — machine learning researcher at Stanford working on computer vision, world models, and spatial computing.',
  keywords:
    'Feolu Kolawole, machine learning, computer vision, world models, augmented reality, spatial computing, AI, Stanford University, XR',
  author: 'Feolu Kolawole',
  robots: 'index, follow',
  openGraph: {
    title: 'Feolu Kolawole',
    description:
      'Machine learning researcher at Stanford working on computer vision, world models, and spatial computing.',
    url: 'https://feolu-kolawole.vercel.app',
    siteName: 'Feolu Kolawole',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Feolu Kolawole',
    description:
      'Machine learning researcher at Stanford working on computer vision, world models, and spatial computing.',
  },
  icons: {
    icon: '/feolu-favicon.png',
    shortcut: '/feolu-favicon.png',
    apple: '/feolu-favicon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
