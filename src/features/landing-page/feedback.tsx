import React from 'react'

import { Marquee } from '@/components/common/marquee'
import AppContainer from '@/components/layouts/container'
import type { IFeedback } from '@/utils/types/interface/ILandingPage'

const Feedback = ({ data }: { data: IFeedback }) => {
  const firstColumn = data.data.slice(0, 3)
  const secondColumn = data.data.slice(3, 6)
  const thirdColumn = data.data.slice(6, 9)

  return (
    <section className='py-8 md:py-14'>
      <AppContainer>
        <div className='mx-auto flex flex-col items-center gap-2 text-center md:max-w-[85%]'>
          <h2 className='text-2xl font-bold uppercase text-[#56ab2f] md:text-3xl'>
            {data.title}
          </h2>
          <div className='h-2 w-[90px] bg-primary'></div>
        </div>
        <div className='mt-10 flex max-h-[738px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]'>
          <div>
            <Marquee vertical className='[--duration:15s] max-sm:w-full'>
              <div className='flex flex-col gap-6'>
                {firstColumn.map((item, index) => (
                  <div
                    key={index}
                    className='w-full max-w-xs rounded-3xl border border-[#F1F1F1] p-8 shadow-[0_7px_14px_#EAEAEA]'
                  >
                    <div>{item.content}</div>
                    <div className='mt-5 font-bold text-black'>{item.info}</div>
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
          <div className='hidden md:block'>
            <Marquee vertical className='[--duration:19s] max-sm:w-full'>
              <div className='flex flex-col gap-6'>
                {secondColumn.map((item, index) => (
                  <div
                    key={index}
                    className='w-full max-w-xs rounded-3xl border border-[#F1F1F1] p-8 shadow-[0_7px_14px_#EAEAEA]'
                  >
                    <div>{item.content}</div>
                    <div className='mt-5 font-bold text-black'>{item.info}</div>
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
          <div className='hidden md:block'>
            <Marquee vertical className='[--duration:17s] max-sm:w-full'>
              <div className='flex flex-col gap-6'>
                {thirdColumn.map((item, index) => (
                  <div
                    key={index}
                    className='w-full max-w-xs rounded-3xl border border-[#F1F1F1] p-8 shadow-[0_7px_14px_#EAEAEA]'
                  >
                    <div>{item.content}</div>
                    <div className='mt-5 font-bold text-black'>{item.info}</div>
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
        </div>
      </AppContainer>
    </section>
  )
}

export default Feedback
