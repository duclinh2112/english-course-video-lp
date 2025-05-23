import type { Metadata } from 'next'

import Footer from '@/components/layouts/footer'
import Banner from '@/features/landing-page/banner'
import Contact from '@/features/landing-page/contact'
import FAQ from '@/features/landing-page/faq'
import Feedback from '@/features/landing-page/feedback'
import Package from '@/features/landing-page/package'
import Problem from '@/features/landing-page/problem'
import WCU from '@/features/landing-page/wcu'
import {
  DATA_BANNER,
  DATA_FAQ,
  DATA_FEEDBACK,
  DATA_PACKAGE,
  DATA_PROBLEM,
  DATA_WCU,
} from '@/utils/data/parents'

export const metadata: Metadata = {
  title: 'Q-English | Học tiếng Anh cho trẻ – thay thế YouTube & TikTok',
  description:
    'Q-English giúp trẻ học tiếng Anh qua video vui nhộn, dễ hiểu, không gây nghiện như YouTube hay TikTok. Phù hợp với trẻ từ 5–12 tuổi.',
  metadataBase: new URL('https://english-course-video-lp.vercel.app/'),
  keywords: [
    'Q-English cho trẻ',
    'Tiếng Anh cho trẻ em',
    'Video học tiếng Anh cho trẻ',
    'Học tiếng Anh lớp 1',
    'Trẻ học tiếng Anh tại nhà',
    'Học tiếng Anh thay TikTok',
    'Tiếng Anh mẫu giáo',
    'Phụ huynh dạy con học tiếng Anh',
  ].join(', '),
  openGraph: {
    title: 'Q-English – Học tiếng Anh cho trẻ dễ nhớ, vui nhộn',
    description:
      'Trẻ học tiếng Anh qua video hấp dẫn, không lệ thuộc vào hoạt hình YouTube. Giúp phụ huynh kiểm soát và đồng hành cùng con.',
    url: '/parents',
    type: 'website',
    images: [
      {
        url: 'https://english-course-video-lp.vercel.app/og-image-kids.jpg', // Thay bằng ảnh chia sẻ cho phụ huynh
        width: 1200,
        height: 630,
        alt: 'Q-English cho trẻ em',
      },
    ],
    siteName: 'Q-English',
  },
}

export default async function ParentsPage() {
  return (
    <>
      <Banner data={DATA_BANNER} />
      <Problem data={DATA_PROBLEM} />
      <WCU data={DATA_WCU} />
      <Package data={DATA_PACKAGE} />
      <Feedback data={DATA_FEEDBACK} />
      <FAQ data={DATA_FAQ} />
      <Contact />
      <Footer />
    </>
  )
}
