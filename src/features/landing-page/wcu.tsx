import React from 'react'

import AppContainer from '@/components/layouts/container'
import type { IWcu } from '@/utils/types/interface/ILandingPage'

const WCU = ({ data }: { data: IWcu }) => {
  return (
    <section className='py-8 md:py-14'>
      <AppContainer>
        <div className='mx-auto flex flex-col items-center gap-2 text-center md:max-w-[85%]'>
          <h2 className='text-2xl font-bold uppercase text-[#56ab2f] md:text-3xl'>
            {data.title}
          </h2>
          <div className='h-2 w-[90px] bg-primary'></div>
        </div>
        <div className='mx-auto mt-8 flex w-full flex-col items-center gap-8 md:max-w-[55%]'>
          {data.data.map((title, index) => (
            <div
              key={index}
              className='w-full rounded-xl p-4 text-center font-semibold text-white md:text-xl'
              style={{
                backgroundImage: 'linear-gradient(45deg, #a8e063, #56ab2f)',
              }}
            >
              {title}
            </div>
          ))}
        </div>
      </AppContainer>
    </section>
  )
}

export default WCU
