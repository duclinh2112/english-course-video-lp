import React from 'react'

import { Marquee } from '@/components/common/marquee'
import AppContainer from '@/components/layouts/container'

const DATA = [
  {
    content: `Tôi từng thuê gia sư nhưng không hiệu quả, chi phí cao. Từ khi mua gói này, tôi cho bé học mỗi ngày một video. Tôi cũng học cùng con, hai mẹ con luyện nói với nhau, cảm thấy gắn bó hơn mà không tốn kém.`,
    info: '👩‍🧑 Chị Mai – 39 tuổi, phụ huynh học viên',
  },
  {
    content: `Con trai tôi mất gốc tiếng Anh, học nhiều khóa không vào. Tôi vô tình thấy landing page này rồi mua thử cho nó. Giờ cháu bảo dễ học, không bị sợ nữa. Tôi nghĩ đây là cách học phù hợp với giới trẻ bây giờ.`,
    info: '👴 Bác Khánh – 55 tuổi, phụ huynh học viên 20 tuổi',
  },
  {
    content: `Mình học mất gốc hoàn toàn, thậm chí còn không biết phát âm từ 'schedule' đúng. Nhưng video ở đây rất dễ hiểu, hài hước và không áp lực. Có hôm stress công việc, mình mở ra học 1–2 clip thấy vui hơn hẳn.`,
    info: '👩‍💻 Thảo – 27 tuổi, Nhân viên văn phòng',
  },
  {
    content: `Mình từng bỏ dở 3 khóa tiếng Anh vì quá bận. Tới khi xem thử video mẫu ở đây, mình thấy dễ tiếp thu lạ thường. Mỗi ngày chỉ cần 10 phút, nhưng mình đã kiên trì được gần 2 tháng. Giờ mình tự tin nghe podcast cơ bản rồi!`,
    info: '🧑 Linh – 32 tuổi, Kế toán',
  },
  {
    content: `Mình không còn trẻ, học tiếng Anh nhiều lần nhưng đều nản. Mình thích cách học ở đây vì không bị ép buộc, có thể xem đi xem lại bất kỳ lúc nào. Quan trọng là giọng nói trong video dễ nghe và gần gũi.`,
    info: '👨‍🔧 Minh – 40 tuổi, Kỹ thuật viên',
  },
  {
    content: `Lúc đầu mình nghĩ mình lớn tuổi rồi, học sao nổi. Nhưng mấy video ngắn ở đây vui, dễ nhớ, thậm chí còn giúp mình luyện nói cùng con trai nữa. Cảm ơn team vì đã nghĩ cho những người như mình.`,
    info: '🧕 Ngọc – 35 tuổi, Nội trợ',
  },
  {
    content: `Mình từng học app tiếng Anh nổi tiếng, nhưng thấy khô khan. Học theo video này thấy giống như 'thấm' chứ không cần học vẹt. Cực kỳ phù hợp nếu bạn muốn cải thiện kỹ năng nghe – nói thực tế.`,
    info: '🧑‍🎓 Tuấn – 21 tuổi, Sinh viên',
  },
  {
    content: `Con tôi không thích học tiếng Anh ở trường vì thấy áp lực. Tôi mua thử gói học này xem sao. Ai ngờ cháu lại rất thích – tối nào cũng tự mở video xem, còn nói vài câu tiếng Anh với tôi nữa. Vui lắm!`,
    info: '👩‍👦 Cô Hạnh – 48 tuổi, mẹ của bé lớp 7',
  },
  {
    content: `Mình bận đi làm nên không có thời gian kèm con học. Mấy video ngắn gọn, dễ hiểu, không mang tính giáo điều nên cháu học rất tự nhiên. Mình thấy nó học mà không sợ tiếng Anh nữa, đó là mừng nhất.`,
    info: '👨‍👧 Anh Dũng – 42 tuổi, bố của bé 10 tuổi',
  },
]

const firstColumn = DATA.slice(0, 3)
const secondColumn = DATA.slice(3, 6)
const thirdColumn = DATA.slice(6, 9)

const Feedback = () => {
  return (
    <section className='py-8 md:py-14'>
      <AppContainer>
        <div className='mx-auto flex flex-col items-center gap-2 text-center md:max-w-[85%]'>
          <h2 className='text-2xl font-bold uppercase text-[#56ab2f] md:text-3xl'>
            Người dùng nói gì
          </h2>
          <div className='h-2 w-[90px] bg-primary'></div>
        </div>
        <div className='mt-10 flex max-h-[738px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]'>
          <div>
            <Marquee vertical className='[--duration:15s] max-sm:w-full'>
              <div className='flex flex-col gap-6'>
                {firstColumn.map((item, index) => (
                  <div
                    key={index}
                    className='w-full max-w-xs rounded-3xl border border-[#F1F1F1] p-8 shadow-[0_7px_14px_#EAEAEA]'
                  >
                    <div>{item.content}</div>
                    <div className='mt-5 font-bold text-black'>{item.info}</div>
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
          <div className='hidden md:block'>
            <Marquee vertical className='[--duration:19s] max-sm:w-full'>
              <div className='flex flex-col gap-6'>
                {secondColumn.map((item, index) => (
                  <div
                    key={index}
                    className='w-full max-w-xs rounded-3xl border border-[#F1F1F1] p-8 shadow-[0_7px_14px_#EAEAEA]'
                  >
                    <div>{item.content}</div>
                    <div className='mt-5 font-bold text-black'>{item.info}</div>
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
          <div className='hidden md:block'>
            <Marquee vertical className='[--duration:17s] max-sm:w-full'>
              <div className='flex flex-col gap-6'>
                {thirdColumn.map((item, index) => (
                  <div
                    key={index}
                    className='w-full max-w-xs rounded-3xl border border-[#F1F1F1] p-8 shadow-[0_7px_14px_#EAEAEA]'
                  >
                    <div>{item.content}</div>
                    <div className='mt-5 font-bold text-black'>{item.info}</div>
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
        </div>
      </AppContainer>
    </section>
  )
}

export default Feedback
