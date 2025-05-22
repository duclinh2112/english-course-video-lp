'use client'

import AppLayout from '@/components/layouts/app-layout'

export default function NotFound() {
  return (
    <html lang='en'>
      <body>
        <AppLayout>
          <h1 className='mt-10 text-center font-semibold'>
            Something went wrong!
          </h1>
        </AppLayout>
      </body>
    </html>
  )
}
