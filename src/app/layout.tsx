import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: 'Bruno Gnoatto — Senior Back-End Developer',
  description: 'Senior Back-End Java Developer specializing in Microservices, Spring Boot, and cloud-native architecture. Remote contractor from Argentina.',
  openGraph: {
    title: 'Bruno Gnoatto — Senior Back-End Developer',
    description: 'Precision back-end engineering, built to scale.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-[--bg-base] text-[--text-primary] antialiased`}>
        {children}
      </body>
    </html>
  )
}
