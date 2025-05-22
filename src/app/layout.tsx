import './globals.css'

import type { Metadata, Viewport } from 'next'
import { Be_Vietnam_Pro } from 'next/font/google'
import React from 'react'
import { Toaster } from 'react-hot-toast'

const beVietNamPro = Be_Vietnam_Pro({
  subsets: ['vietnamese'],
  variable: '--font-be-viet-nam-pro',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Hải Mai English',
  description: 'Hãy học khi còn có cơ hội',
  metadataBase: new URL('http://localhost:3000/'),
  keywords: [
    'vstep',
    'toeic',
    'Hải Mai English',
    'Học tiếng anh',
    'Hai Mai English',
    'Tiếng anh mất gốc',
  ].join(', '),
  openGraph: {
    title: 'Hải Mai English',
    description: 'Hãy học khi còn có cơ hội',
    url: '/',
    type: 'website',
    // images: [
    //   {
    //     url: '/',
    //     width: 1200,
    //     height: 630,
    //     alt: 'Vstep',
    //   },
    // ],
    siteName: 'Hải Mai English',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  height: 'device-height',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
  interactiveWidget: 'resizes-content',
}

interface RootLayoutProps {
  children: React.ReactNode
  params: {
    locale: string
  }
}
export default async function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
  return (
    <html lang='vi' data-theme='light' className={`${beVietNamPro.variable}`}>
      <body className={beVietNamPro.className}>
        {children}
        <Toaster
          toastOptions={{
            duration: 4000,
            style: {
              fontSize: '14px',
            },
          }}
        />
      </body>
    </html>
  )
}
