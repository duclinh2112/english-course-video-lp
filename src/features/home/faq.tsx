import React from 'react'

import AppContainer from '@/components/layouts/container'

const DATA = [
  {
    question: 'Tôi không có nền tảng tiếng Anh, liệu có học được không?',
    answer:
      'Hoàn toàn được! Các video được thiết kế cho người mất gốc, giải thích chậm rãi, dễ hiểu, không dùng ngôn ngữ học thuật hay giáo trình phức tạp.',
  },
  {
    question: 'Tôi bận rộn, mỗi ngày chỉ có 10–15 phút, có hiệu quả không?',
    answer:
      'Chắc chắn có! Mỗi video chỉ dài 5–10 phút, bạn có thể học linh hoạt bất kỳ lúc nào. Phương pháp này chú trọng tính thực tế và duy trì đều đặn thay vì học nhồi.',
  },
  {
    question: 'Mua xong tôi có được học trọn đời không?',
    answer:
      'Có. Khi bạn mua bất kỳ gói nào, bạn đều được cấp quyền truy cập trọn đời vào các video trong gói đó – học bao nhiêu lần tùy thích, không giới hạn.',
  },
  {
    question: 'Tôi lớn tuổi rồi, học cách này có phù hợp không?',
    answer:
      'Có nhiều phụ huynh và người trên 40 tuổi đang học theo phương pháp này rất hiệu quả. Video không gây áp lực, bạn có thể học chậm, tua lại thoải mái.',
  },
  {
    question: 'Các video này do giáo viên nào dạy?',
    answer:
      'Chúng tôi là những người từng mất gốc và biên tập video từ trải nghiệm thật. Đây không phải khóa học chuyên môn, mà là hướng dẫn học tiếng Anh một cách gần gũi và dễ áp dụng nhất.',
  },
  {
    question: 'Làm sao để đăng ký học?',
    answer:
      'Bạn chỉ cần chọn gói học phù hợp, điền form đặt hàng (Google Form) và thanh toán. Sau đó bạn sẽ nhận được link truy cập video qua email hoặc Zalo.',
  },
]

const FAQ = () => {
  return (
    <section className='py-8 md:py-14'>
      <AppContainer>
        <div className='mx-auto flex flex-col items-center gap-2 text-center md:max-w-[85%]'>
          <h2 className='text-2xl font-bold uppercase text-[#56ab2f] md:text-3xl'>
            Các câu hỏi thường gặp
          </h2>
          <div className='h-2 w-[90px] bg-primary'></div>
        </div>
        <div className='mx-auto mt-8 flex w-full flex-col gap-8 md:max-w-[75%]'>
          {DATA.map((item, i) => (
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
