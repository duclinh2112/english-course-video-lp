import React from 'react'

import AppContainer from '@/components/layouts/container'

const DATA = [
  '🎧 Vì bạn cần NGHE – HIỂU – PHẢN XẠ, không phải học lý thuyết',
  '⏱ Vì bạn không có nhiều thời gian để theo học đều đặn mỗi ngày',
  '💸 Vì bạn không cần đầu tư quá nhiều tiền mới học được',
  '📱 Vì bạn muốn học theo cách thoải mái – không áp lực – không ai phán xét',
]

const WCU = () => {
  return (
    <section className='py-8 md:py-14'>
      <AppContainer>
        <div className='mx-auto flex flex-col items-center gap-2 text-center md:max-w-[85%]'>
          <h2 className='text-2xl font-bold uppercase text-[#56ab2f] md:text-3xl'>
            Tại sao lại học tiếng Anh theo cách này?
          </h2>
          <div className='h-2 w-[90px] bg-primary'></div>
        </div>
        <div className='mx-auto mt-8 flex w-full flex-col items-center gap-8 md:max-w-[55%]'>
          {DATA.map((title, index) => (
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
