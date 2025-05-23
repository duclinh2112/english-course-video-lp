import React from 'react'

import { Button } from '@/components/common/button'
import ImageWrap from '@/components/common/img-wrap'
import AppContainer from '@/components/layouts/container'
import type { IBanner } from '@/utils/types/interface/ILandingPage'

const Banner = ({ data }: { data: IBanner }) => {
  return (
    <section
      className='rounded-b-[50px] py-[100px] md:rounded-b-[100px]'
      style={{ backgroundImage: 'linear-gradient(135deg, #a8e063, #56ab2f)' }}
    >
      <AppContainer>
        <div className='grid grid-cols-1 items-center gap-12 lg:grid-cols-2'>
          <div>
            <h1 className='text-[30px] font-bold uppercase leading-relaxed text-white md:text-[36px]'>
              {data.title}
            </h1>
            <div
              className='mt-4 text-xl font-semibold text-white md:text-2xl'
              dangerouslySetInnerHTML={{ __html: data.content }}
            ></div>
            <div className='mt-10 max-sm:flex max-sm:justify-center'>
              <Button
                href='#contact'
                size='lg'
                className='animate-scale-infinite transition-all duration-300 max-sm:w-full'
              >
                🎯 Nhận Khóa Học Ngay
              </Button>
            </div>
          </div>
          <div>
            <ImageWrap
              src={data.image.src}
              alt={data.image.alt}
              paddingTop='66.25%'
              borderRadius='12px'
              priority
              quantity={100}
            />
          </div>
        </div>
      </AppContainer>
    </section>
  )
}

export default Banner
