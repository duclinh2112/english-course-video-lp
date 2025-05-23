import React from 'react'

import ImageWrap from '@/components/common/img-wrap'
import AppContainer from '@/components/layouts/container'
import type { IProblem } from '@/utils/types/interface/ILandingPage'

const Problem = ({ data }: { data: IProblem }) => {
  return (
    <section className='py-8 md:py-14'>
      <AppContainer>
        <div className='mx-auto flex flex-col items-center gap-2 text-center md:max-w-[85%]'>
          <h2 className='text-2xl font-bold uppercase text-[#56ab2f] md:text-3xl'>
            {data.title}
          </h2>
          <div className='h-2 w-[90px] bg-primary'></div>
        </div>
        <div className='mt-8 grid grid-cols-1 gap-6 md:grid-cols-2'>
          {data.data.map((item, index) => (
            <div
              key={index}
              className='flex gap-2 rounded-xl p-2 max-lg:flex-col'
              style={{
                backgroundImage: 'linear-gradient(135deg, #a8e063, #56ab2f)',
              }}
            >
              <div className='w-full lg:w-2/5'>
                <ImageWrap
                  src={item.image}
                  alt={`Problem ${index + 1}`}
                  className='h-full'
                  borderRadius='12px'
                />
              </div>
              <div className='w-full flex-1'>
                <h3 className='mb-3 text-xl font-bold text-white'>
                  {item.title}
                </h3>
                <div
                  className='text-sm text-white'
                  dangerouslySetInnerHTML={{ __html: item.content }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </AppContainer>
    </section>
  )
}

export default Problem
