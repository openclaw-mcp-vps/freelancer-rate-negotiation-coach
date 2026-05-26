import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rate Negotiation Coach — Practice with AI Client Simulations',
  description: 'Simulate difficult client rate negotiations with AI, get real-time feedback, and learn proven strategies to charge what you are worth.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="7ad8a0d5-5e49-4dae-81c1-e246240dd398"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
