export default async function HomePage() {
  return (
    <>
      <main className='flex min-h-screen flex-col items-center justify-center bg-white px-4 py-10'>
        <h1 className='mb-8 text-center text-3xl font-bold text-[#56ab2f] md:text-5xl'>
          Bạn đang tìm giải pháp học tiếng Anh cho...
        </h1>

        <div className='mb-12 flex flex-col gap-6 md:flex-row'>
          <a
            href='/adults'
            className='transform rounded-2xl bg-[#56ab2f] px-6 py-4 text-lg font-semibold text-white shadow-lg transition hover:scale-105'
          >
            Tôi là người lớn muốn cải thiện tiếng Anh
          </a>
          <a
            href='/parents'
            className='transform rounded-2xl bg-[#56ab2f] px-6 py-4 text-lg font-semibold text-white shadow-lg transition hover:scale-105'
          >
            Tôi là phụ huynh tìm khóa học cho con
          </a>
        </div>

        <div className='aspect-video w-full max-w-2xl'>
          <iframe
            className='size-full rounded-xl shadow-lg'
            src='https://www.youtube.com/embed/your-video-id'
            title='Giới thiệu Q-English'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </div>

        <p className='mt-10 text-sm text-gray-500'>
          © 2025 Q-English. Chọn lộ trình phù hợp để bắt đầu hành trình.
        </p>
      </main>
    </>
  )
}
