import '@/styles/globals.css'
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next'

import { NextAuthProvider } from "@/lib/providers"
import { Inter } from 'next/font/google'

import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"
import { SpeedInsights } from "@vercel/speed-insights/next"
import GoogleAnalyticsProvider from '@/app/GoogleAnalyticsProvider';
import EditorServer from '@/app/components/editor/EditorServer';

const inter = Inter({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Willy's 2 Go",
  description: "Indonesische Catering in Ede en omstreken. Bekijk de mogelijkheden!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang='nl'
      className={`${inter.className} h-full`}
    >
      <body className='flex min-h-full flex-col font-raleway'>
        <NextAuthProvider>
          <GoogleAnalyticsProvider
            description={<EditorServer documentId='consent-banner' />}
          >
            <SpeedInsights />
            <Header />
            <main className='flex-grow'>{children}</main>
            <Footer />
          </GoogleAnalyticsProvider>
        </NextAuthProvider>
        <Analytics />
      </body>
    </html>
  )
}
