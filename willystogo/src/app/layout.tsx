import './globals.css'
import type { Metadata } from 'next'

import { NextAuthProvider } from "@/app/providers"
import { Inter } from 'next/font/google'

import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Willy's To Go",
  description: "Indonesische Catering in Edem en omstreken",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang='nl'
      className={`${inter.className} h-full scroll-smooth antialiased`}
    >
      <body className='flex min-h-full flex-col'>
        <NextAuthProvider>
          <Header />
          <main className='flex-grow'>{children}</main>
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  )
}
