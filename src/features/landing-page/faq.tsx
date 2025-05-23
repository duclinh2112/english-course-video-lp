import React from 'react'

import AppContainer from '@/components/layouts/container'
import type { IFaq } from '@/utils/types/interface/ILandingPage'

const FAQ = ({ data }: { data: IFaq }) => {
  return (
    <section className='py-8 md:py-14'>
      <AppContainer>
        <div className='mx-auto flex flex-col items-center gap-2 text-center md:max-w-[85%]'>
          <h2 className='text-2xl font-bold uppercase text-[#56ab2f] md:text-3xl'>
            {data.title}
          </h2>
          <div className='h-2 w-[90px] bg-primary'></div>
        </div>
        <div className='mx-auto mt-8 flex w-full flex-col gap-8 md:max-w-[75%]'>
          {data.data.map((item, i) => (
            <details
              key={i}
              className='group w-full rounded-xl border border-[#F1F1F1] shadow-[0_7px_14px_#EAEAEA]'
            >
              <summary className='flex cursor-pointer items-center justify-between px-5 py-4 font-medium text-gray-800'>
                <span className='font-bold md:text-[18px]'>
                  {item.question}
                </span>
                <svg
                  className='size-5 text-black transition-transform group-open:rotate-180'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth={2}
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M19 9l-7 7-7-7'
                  />
                </svg>
              </summary>
              <div className='px-5 pb-4 max-md:text-sm'>{item.answer}</div>
            </details>
          ))}
        </div>
      </AppContainer>
    </section>
  )
}

export default FAQ
