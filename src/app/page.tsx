import Footer from '@/components/layouts/footer'
import Banner from '@/features/home/banner'
import Contact from '@/features/home/contact'
import FAQ from '@/features/home/faq'
import Feedback from '@/features/home/feedback'
import Package from '@/features/home/package'
import Problem from '@/features/home/problem'
import WCU from '@/features/home/wcu'

export default async function HomePage() {
  return (
    <>
      <Banner />
      <Problem />
      <WCU />
      <Package />
      <Feedback />
      <FAQ />
      <Contact />
      <Footer />
    </>
  )
}
