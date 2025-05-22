import React from 'react'

import AppContainer from '../container'

const Footer = () => {
  return (
    <footer className='border-t border-gray-200 bg-white py-14 text-gray-700'>
      <AppContainer>
        <div className='flex flex-col items-center gap-4 text-center'>
          <h1 className='text-4xl font-bold text-[#56ab2f]'>Q-English</h1>
          <p className='text-sm'>
            Học tiếng Anh dễ hiểu – dễ nhớ – dễ áp dụng.
            <br />
            Mỗi ngày chỉ 10 phút, cùng Q-English chạm gần hơn tới giấc mơ ngôn
            ngữ!
          </p>

          <div className='flex gap-4'>
            <a
              href='https://facebook.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <svg
                className='size-7 text-[#56ab2f] transition hover:scale-110'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path d='M22 12a10 10 0 10-11.6 9.87v-6.99h-2.1v-2.88h2.1V9.34c0-2.1 1.25-3.27 3.16-3.27.92 0 1.88.16 1.88.16v2.07h-1.06c-1.04 0-1.36.65-1.36 1.31v1.57h2.31l-.37 2.88h-1.94v6.99A10 10 0 0022 12z' />
              </svg>
            </a>
            <a
              href='https://youtube.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <svg
                className='size-7 text-[#56ab2f] transition hover:scale-110'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path d='M19.6 3.2H4.4C3.1 3.2 2 4.3 2 5.6v12.8c0 1.3 1.1 2.4 2.4 2.4h15.2c1.3 0 2.4-1.1 2.4-2.4V5.6c0-1.3-1.1-2.4-2.4-2.4zM10 15V9l6 3-6 3z' />
              </svg>
            </a>
            <a
              href='https://tiktok.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <svg
                className='size-7 text-[#56ab2f] transition hover:scale-110'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path d='M12.5 2h2.6a4.9 4.9 0 004.9 4.9v2.1a7 7 0 01-4.9-1.5v7.2a5.2 5.2 0 11-5.2-5.2c.3 0 .6 0 .9.1v2.2a2.9 2.9 0 102.6 2.9V2z' />
              </svg>
            </a>
            <a
              href='https://zalo.me/1234567890'
              target='_blank'
              rel='noopener noreferrer'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-7 text-[#56ab2f] transition hover:scale-110'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.25 6.75c0-1.243 1.007-2.25 2.25-2.25h2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75H5.694a11.25 11.25 0 006.563 6.563v-1.556a.75.75 0 01.75-.75h2.25a.75.75 0 01.75.75v2.25c0 1.243-1.007 2.25-2.25 2.25A13.5 13.5 0 012.25 6.75z'
                />
              </svg>
            </a>
          </div>

          <p className='mt-6 text-xs text-gray-400'>
            © {new Date().getFullYear()} Q-English. All rights reserved.
          </p>
        </div>
      </AppContainer>
    </footer>
  )
}

export default Footer
