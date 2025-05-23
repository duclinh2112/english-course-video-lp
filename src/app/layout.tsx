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
  title: 'Q-English | Học tiếng Anh dễ hiểu qua video',
  description:
    'Q-English mang đến phương pháp học tiếng Anh mới mẻ: video ngắn, trực quan, dễ nhớ. Dành cho người mất gốc và người bận rộn.',
  metadataBase: new URL('https://english-course-video-lp.vercel.app/'), // <-- thay bằng domain chính thức
  keywords: [
    'Q-English',
    'Học tiếng Anh online',
    'Video học tiếng Anh',
    'Tiếng Anh mất gốc',
    'Học tiếng Anh tại nhà',
    'TOEIC',
    'VSTEP',
    'Tiếng Anh giao tiếp',
    'Tiếng Anh cho người đi làm',
    'Tiếng Anh cho người bận rộn',
  ].join(', '),
  openGraph: {
    title: 'Q-English - Học tiếng Anh dễ hiểu qua video',
    description:
      'Video học tiếng Anh mỗi ngày, dễ hiểu – dễ nhớ – dễ kiên trì. Học theo tốc độ của bạn, không áp lực!',
    url: '/',
    type: 'website',
    images: [
      {
        url: 'https://english-course-video-lp.vercel.app/og-image.jpg', // <-- Thay bằng ảnh đại diện chia sẻ của bạn
        width: 1200,
        height: 630,
        alt: 'Q-English - Học tiếng Anh dễ hiểu qua video',
      },
    ],
    siteName: 'Q-English',
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
