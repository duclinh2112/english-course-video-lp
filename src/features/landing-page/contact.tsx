import React from 'react'

import AppContainer from '@/components/layouts/container'

import ContactForm from './components/contact-form'

const Contact = () => {
  return (
    <section
      id='contact'
      className='mt-8 py-8 md:mt-14 md:py-14'
      style={{ backgroundImage: 'linear-gradient(135deg, #a8e063, #56ab2f)' }}
    >
      <AppContainer>
        <div className='mx-auto flex flex-col items-center gap-2 text-center md:max-w-[85%]'>
          <h2 className='text-2xl font-bold uppercase text-white md:text-3xl'>
            Đăng ký ngay
          </h2>
          <div className='h-2 w-[90px] bg-primary'></div>
        </div>
        <div className='mx-auto mt-8 w-full md:max-w-[55%]'>
          <ContactForm />
        </div>
      </AppContainer>
    </section>
  )
}

export default Contact
