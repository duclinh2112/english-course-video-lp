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
} from '@/utils/data/adults'

export const metadata: Metadata = {
  title:
    'Q-English | Học tiếng Anh bằng video cho người lớn – dễ hiểu, hiệu quả',
  description:
    'Q-English giúp người lớn học tiếng Anh qua video ngắn, trực quan. Phù hợp cho người mất gốc, đi làm bận rộn, luyện thi TOEIC – VSTEP.',
  metadataBase: new URL('https://english-course-video-lp.vercel.app/'),
  keywords: [
    'Q-English',
    'Học tiếng Anh người lớn',
    'Video học tiếng Anh',
    'Tiếng Anh mất gốc',
    'TOEIC',
    'VSTEP',
    'Tiếng Anh giao tiếp',
    'Tiếng Anh cho người đi làm',
    'Tiếng Anh tại nhà',
  ].join(', '),
  openGraph: {
    title: 'Q-English – Học tiếng Anh cho người lớn dễ hiểu, hiệu quả',
    description:
      'Video học tiếng Anh mỗi ngày, dành cho người lớn bận rộn. Học theo tốc độ riêng, dễ tiếp thu, dễ áp dụng.',
    url: '/',
    type: 'website',
    images: [
      {
        url: 'https://english-course-video-lp.vercel.app/og-image-adults.jpg', // Thay bằng ảnh chia sẻ cho người lớn
        width: 1200,
        height: 630,
        alt: 'Q-English cho người lớn',
      },
    ],
    siteName: 'Q-English',
  },
}

export default async function AdultsPage() {
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
