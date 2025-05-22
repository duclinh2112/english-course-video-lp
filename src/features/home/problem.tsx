import React from 'react'

import ImageWrap from '@/components/common/img-wrap'
import AppContainer from '@/components/layouts/container'

const DATA = [
  {
    title: '🧠 Học trước – quên sau, chẳng đọng lại gì',
    content: `
      <p style="margin-bottom: 8px">Bạn đã từng thử học từ vựng theo kiểu "nhồi nhét" bằng flashcard, app, sổ ghi chép… nhưng vài hôm sau mở ra lại như mới?</p>
      <p style="margin-bottom: 8px">Việc học không theo ngữ cảnh khiến não bạn không liên kết được thông tin – dẫn đến việc học mãi vẫn không nhớ.</p>
      <p>Điều này khiến bạn dễ nản, cảm thấy mình "không có khiếu ngoại ngữ".</p>
    `,
    image: '/assets/images/img-problem-1.webp',
  },
  {
    title: '🎧 Nghe người khác nói tiếng Anh như gió thoảng qua tai',
    content: `
      <p style="margin-bottom: 8px">Khi xem phim, nghe podcast hay giao tiếp thực tế, bạn chỉ nghe được vài từ rời rạc, không bắt được nội dung.</p>
      <p style="margin-bottom: 8px">Bạn có cảm giác tiếng Anh "nói khác với tiếng Anh bạn học ở trường"?</p>
      <p>Đó là vì bạn chưa được luyện tai theo ngữ điệu, tốc độ và cách nói thực tế của người bản xứ.</p>
    `,
    image: '/assets/images/img-problem-2.webp',
  },
  {
    title: '🗣 Biết từ – nhưng không nói được',
    content: `
      <p style="margin-bottom: 8px">Bạn hiểu được câu, biết từ cần nói… nhưng tới lúc cần mở miệng, bạn lại bị đứng hình.</p>
      <p style="margin-bottom: 8px">Bạn sợ sai ngữ pháp, sợ phát âm dở khiến người khác cười hoặc không hiểu.</p>
      <p>Đây là nỗi sợ rất phổ biến – đặc biệt với người lớn. Nhưng thật ra, vấn đề không phải ở bạn, mà là bạn chưa có cơ hội luyện phản xạ đúng cách.</p>
    `,
    image: '/assets/images/img-problem-3.webp',
  },
  {
    title: '⏳ Không có thời gian theo học bài bản',
    content: `
      <p style="margin-bottom: 8px">Công việc bận rộn, gia đình, con cái, lịch trình mỗi ngày đều kín.</p>
      <p style="margin-bottom: 8px">Bạn từng đăng ký khóa học offline, nhưng nghỉ vài buổi là bỏ luôn.</p>
      <p>Những phương pháp đòi hỏi kỷ luật cao và thời gian cố định không thực tế với cuộc sống hiện tại của bạn.</p>
    `,
    image: '/assets/images/img-problem-4.webp',
  },
]

const Problem = () => {
  return (
    <section className='py-8 md:py-14'>
      <AppContainer>
        <div className='mx-auto flex flex-col items-center gap-2 text-center md:max-w-[85%]'>
          <h2 className='text-2xl font-bold uppercase text-[#56ab2f] md:text-3xl'>
            Các vấn đề bạn đang gặp phải
          </h2>
          <div className='h-2 w-[90px] bg-primary'></div>
        </div>
        <div className='mt-8 grid grid-cols-1 gap-6 md:grid-cols-2'>
          {DATA.map((item, index) => (
            <div
              key={index}
              className='flex gap-2 rounded-xl p-2 max-lg:flex-col'
              style={{
                backgroundImage: 'linear-gradient(135deg, #a8e063, #56ab2f)',
              }}
            >
              <div className='w-full lg:w-2/5'>
                <ImageWrap
                  src={item.image}
                  alt={`Problem ${index + 1}`}
                  className='h-full'
                  borderRadius='12px'
                />
              </div>
              <div className='w-full flex-1'>
                <h3 className='mb-3 text-xl font-bold text-white'>
                  {item.title}
                </h3>
                <div
                  className='text-sm text-white'
                  dangerouslySetInnerHTML={{ __html: item.content }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </AppContainer>
    </section>
  )
}

export default Problem
