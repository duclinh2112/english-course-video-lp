import React from 'react'

import { Button } from '@/components/common/button'
import ImageWrap from '@/components/common/img-wrap'
import AppContainer from '@/components/layouts/container'

const Banner = () => {
  return (
    <section
      className='rounded-b-[50px] py-[100px] md:rounded-b-[100px]'
      style={{ backgroundImage: 'linear-gradient(135deg, #a8e063, #56ab2f)' }}
    >
      <AppContainer>
        <div className='grid grid-cols-1 items-center gap-12 lg:grid-cols-2'>
          <div>
            <h1 className='text-3xl font-bold uppercase leading-relaxed text-white md:text-4xl'>
              Tự học Tiếng Anh Giao Tiếp Dễ Như Ăn Kẹo!
            </h1>
            <p className='mt-4 text-xl font-semibold text-white md:text-2xl'>
              Bộ video học tiếng Anh siêu dễ hiểu – dành cho người mất gốc và
              không có thời gian.
              <br />
              Học mọi lúc, mọi nơi – không cần giáo trình phức tạp.
            </p>
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
              src='/assets/images/img-banner.jpg'
              alt='Q English Banner'
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
