import React from 'react'

import { Button } from '@/components/common/button'
import IconTickCircle from '@/components/icons/tick-circle'
import AppContainer from '@/components/layouts/container'
import type { IPackage } from '@/utils/types/interface/ILandingPage'

const Package = ({ data }: { data: IPackage }) => {
  return (
    <section className='py-8 md:py-14'>
      <AppContainer>
        <div className='mx-auto flex flex-col items-center gap-2 text-center md:max-w-[85%]'>
          <h2 className='text-2xl font-bold uppercase text-[#56ab2f] md:text-3xl'>
            {data.title}
          </h2>
          <div className='h-2 w-[90px] bg-primary'></div>
        </div>
        <div className='mx-auto mt-8 grid w-full grid-cols-1 gap-6 md:mt-14 md:grid-cols-2 lg:max-w-[80%] lg:grid-cols-3'>
          {data.data.map((item, index) => (
            <div
              key={index}
              className='flex flex-col justify-between rounded-xl p-8'
              style={{ boxShadow: '2px 2px 10px 2px #979EA380' }}
            >
              <div>
                <h3 className='text-center text-[18px] font-bold uppercase text-[#56ab2f]'>
                  {item.name}
                </h3>
                <span className='mt-3 block text-center text-2xl font-bold text-primary'>
                  {item.price}
                </span>
                <ul className='my-8 flex flex-col gap-2'>
                  {item.content.map((title, idx) => (
                    <li key={idx} className='flex items-center gap-2'>
                      <span>
                        <IconTickCircle />
                      </span>
                      <span className='text-sm'>{title}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Button href='#contact' fullWidth>
                Đăng ký ngay
              </Button>
            </div>
          ))}
        </div>
      </AppContainer>
    </section>
  )
}

export default Package
