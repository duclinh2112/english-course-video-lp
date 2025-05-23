import type {
  IBanner,
  IFaq,
  IFeedback,
  IPackage,
  IProblem,
  IWcu,
} from '../types/interface/ILandingPage'

const DATA_BANNER: IBanner = {
  title: 'Giải pháp học tiếng Anh lành mạnh cho trẻ tại nhà!',
  content: `
    <p>
      Video học tiếng Anh vui nhộn, trực quan – thay thế YouTube, TikTok.
      <br />
      Giúp trẻ vừa học vừa chơi, không bị lệ thuộc vào hoạt hình gây nghiện.
    </p>
  `,
  image: {
    src: '/assets/images/reading-e-book.webp',
    alt: 'Q English Banner Kids',
  },
}

const DATA_PROBLEM: IProblem = {
  title: 'Các vấn đề mà con bạn có thể đang gặp phải',
  data: [
    {
      title: '📱 Xem quá nhiều YouTube, TikTok – dễ mất tập trung',
      content: `
      <p style="margin-bottom: 8px">Trẻ nhỏ dễ bị cuốn vào các video hoạt hình có nhịp nhanh, màu mè. Điều này làm giảm khả năng tập trung và khiến não trẻ quen với kích thích cao độ.</p>
      <p style="margin-bottom: 8px">Hệ quả là khi cần học thật, trẻ thường thấy nhàm chán, thiếu kiên nhẫn.</p>
      <p>Việc học tiếng Anh vì thế trở thành một điều "bị ép buộc", không còn hứng thú tự nhiên.</p>
    `,
      image: '/assets/images/img-problem-1.webp',
    },
    {
      title: '📖 Học từ vựng rời rạc – không nhớ được lâu',
      content: `
      <p style="margin-bottom: 8px">Khi học từ qua flashcard hoặc app, trẻ thường chỉ lướt qua và không hiểu được cách dùng trong tình huống thực tế.</p>
      <p style="margin-bottom: 8px">Trẻ học hôm nay, nhưng hôm sau đã quên vì thiếu ngữ cảnh cụ thể để ghi nhớ.</p>
      <p>Điều này khiến phụ huynh cảm thấy "học mãi mà không tiến bộ".</p>
    `,
      image: '/assets/images/img-problem-2.webp',
    },
    {
      title: '👂 Không luyện được kỹ năng nghe phản xạ',
      content: `
      <p style="margin-bottom: 8px">Tiếng Anh trẻ em trên YouTube thường có giọng robot, chậm chạp, không giống cách nói tự nhiên của người bản xứ.</p>
      <p style="margin-bottom: 8px">Trẻ vì thế không luyện được khả năng bắt âm, ngữ điệu và phản xạ khi nghe thực tế.</p>
      <p>Lâu dần, việc học nghe trở nên nhàm chán và không hiệu quả.</p>
    `,
      image: '/assets/images/img-problem-3.webp',
    },
    {
      title: '🤯 Quá nhiều tài liệu – phụ huynh không biết bắt đầu từ đâu',
      content: `
      <p style="margin-bottom: 8px">Có hàng trăm ứng dụng, kênh YouTube, sách dạy tiếng Anh cho trẻ… nhưng nội dung rối rắm, không có lộ trình rõ ràng.</p>
      <p style="margin-bottom: 8px">Phụ huynh dễ bị “ngợp”, không biết nên chọn cái nào phù hợp với độ tuổi, trình độ và tính cách của con.</p>
      <p>Điều này làm mất thời gian, tiền bạc và cả sự hứng thú của trẻ.</p>
    `,
      image: '/assets/images/img-problem-4.webp',
    },
  ],
}

const DATA_WCU: IWcu = {
  title: 'Tại sao nên cho con học tiếng Anh qua video của Q-English?',
  data: [
    '🧒 Vì trẻ học qua video sẽ dễ tập trung và ghi nhớ lâu hơn so với cách học truyền thống',
    '🎬 Vì nội dung được thiết kế sinh động, dễ hiểu, gần gũi với đời sống thường ngày của trẻ',
    '👂 Vì trẻ được luyện nghe giọng đọc chuẩn, tự nhiên ngay từ nhỏ – hình thành phản xạ tốt hơn',
    '📱 Vì trẻ có thể học mọi lúc, mọi nơi – không cần bố mẹ kèm cặp quá nhiều',
  ],
}

const DATA_PACKAGE: IPackage = {
  title: 'Các gói học tiếng Anh bạn có thể chọn',
  data: [
    {
      name: 'Gói Cơ Bản',
      price: '99.000 VNĐ',
      content: [
        'Người mới bắt đầu, mất gốc',
        '50 video cơ bản, luyện phản xạ',
        'Dễ bắt đầu, chi phí thấp',
        'Email hỗ trợ',
      ],
    },
    {
      name: 'Gói Phổ Biến 🔥',
      price: '199.000 VNĐ',
      content: [
        'Người học lại, muốn tiến bộ đều',
        '100+ video đa chủ đề, có lộ trình học',
        'Đầy đủ, cân bằng giữa giá trị và giá',
        'Email hỗ trợ',
      ],
    },
    {
      name: 'Gói Nâng Cao VIP 🚀',
      price: '499.000 VNĐ',
      content: [
        'Người nghiêm túc đầu tư học bài bản',
        'Full bộ video + nội dung nâng cao + quà tặng kèm',
        'Hỗ trợ lâu dài, tài liệu bonus, cập nhật định kỳ',
        'Ưu tiên hỗ trợ + group kín riêng',
      ],
    },
  ],
}

const DATA_FEEDBACK: IFeedback = {
  title: 'Phụ huynh nói gì',
  data: [
    {
      content: `Tôi từng thuê gia sư nhưng không hiệu quả, chi phí cao. Từ khi mua gói này, tôi cho bé học mỗi ngày một video. Tôi cũng học cùng con, hai mẹ con luyện nói với nhau, cảm thấy gắn bó hơn mà không tốn kém.`,
      info: '👩‍🧑 Chị Mai – 39 tuổi, mẹ bé lớp 4',
    },
    {
      content: `Con trai tôi mất gốc tiếng Anh, học nhiều khóa không vào. Tôi vô tình thấy landing page này rồi mua thử cho nó. Giờ cháu bảo dễ học, không bị sợ nữa. Tôi nghĩ đây là cách học phù hợp với giới trẻ bây giờ.`,
      info: '👴 Bác Khánh – 55 tuổi, bố bé lớp 2',
    },
    {
      content: `Con tôi không thích học tiếng Anh ở trường vì thấy áp lực. Tôi mua thử gói học này xem sao. Ai ngờ cháu lại rất thích – tối nào cũng tự mở video xem, còn nói vài câu tiếng Anh với tôi nữa. Vui lắm!`,
      info: '👩‍👦 Cô Hạnh – 48 tuổi, mẹ của bé lớp 7',
    },
    {
      content: `Mình bận đi làm nên không có thời gian kèm con học. Mấy video ngắn gọn, dễ hiểu, không mang tính giáo điều nên cháu học rất tự nhiên. Mình thấy nó học mà không sợ tiếng Anh nữa, đó là mừng nhất.`,
      info: '👨‍👧 Anh Dũng – 42 tuổi, bố của bé 10 tuổi',
    },
    {
      content: `Bé nhà tôi học kém tiếng Anh, lại không tập trung lâu được. Nhưng các video ở đây vui, ngắn và sinh động nên cháu chịu khó xem. Tôi thấy cháu bắt đầu nói vài từ đơn giản, rất mừng.`,
      info: '👩‍🍼 Chị Linh – 36 tuổi, mẹ của bé lớp 2',
    },
    {
      content: `Tôi muốn con học tiếng Anh mà không bị phụ thuộc vào điện thoại quá nhiều. May mắn là video ở đây không gây nghiện như TikTok nhưng vẫn đủ hấp dẫn để cháu thích học.`,
      info: '👨 Anh Phú – 40 tuổi, bố bé lớp 5',
    },
    {
      content: `Thật sự bất ngờ khi con tự giác học mỗi tối. Mỗi video chỉ vài phút, nhưng tôi thấy cháu tiến bộ từng chút một. Không còn phải nhắc nhở, cháu chủ động mở video học.`,
      info: '👩‍🏫 Cô Thanh – 41 tuổi, giáo viên và mẹ của bé 8 tuổi',
    },
    {
      content: `Tôi đã thử nhiều app học tiếng Anh cho trẻ em, nhưng bé đều chán nhanh. Với loạt video này, cháu lại rất hào hứng vì có hoạt hình, giọng đọc sinh động và từ vựng dễ hiểu.`,
      info: '👩‍💻 Chị Hương – 38 tuổi, mẹ của bé lớp 3',
    },
    {
      content: `Cháu nhà tôi học bán trú, về nhà là mệt nên tôi chỉ cho học mỗi ngày một video. Bất ngờ là sau 2 tuần, cháu đã nhớ và nói được vài câu tiếng Anh rất tự nhiên.`,
      info: '👨‍👩‍👧 Anh Lâm – 44 tuổi, phụ huynh học sinh tiểu học',
    },
  ],
}

const DATA_FAQ: IFaq = {
  title: 'Các câu hỏi thường gặp',
  data: [
    {
      question: 'Phương pháp này có phù hợp với trẻ em không?',
      answer:
        'Rất phù hợp. Các video được thiết kế ngắn gọn, sinh động, dễ hiểu – giúp trẻ tiếp thu tự nhiên như xem hoạt hình nhưng vẫn học được tiếng Anh một cách bài bản.',
    },
    {
      question: 'Tôi không biết tiếng Anh, có thể hỗ trợ con học không?',
      answer:
        'Hoàn toàn có thể! Nhiều phụ huynh không rành tiếng Anh nhưng vẫn cùng con xem video mỗi ngày, từ đó tạo thói quen học và khích lệ con luyện nói. Có phụ huynh còn học cùng để gắn kết với con hơn.',
    },
    {
      question: 'Mỗi ngày con chỉ học 5–10 phút thì có hiệu quả không?',
      answer:
        'Hiệu quả. Với trẻ em, điều quan trọng là duy trì đều đặn và hứng thú. Mỗi video như một bài học mini – đủ để con ghi nhớ mà không bị quá tải hay nhàm chán.',
    },
    {
      question: 'Con tôi đang học tiếng Anh ở trường, có cần học thêm không?',
      answer:
        'Việc học thêm qua video giúp con tăng phản xạ nghe – nói và ghi nhớ từ vựng trong ngữ cảnh thực tế – điều mà chương trình ở trường thường chưa chú trọng.',
    },
    {
      question: 'Gói học có giới hạn thời gian sử dụng không?',
      answer:
        'Không. Khi bạn mua gói học, bạn và bé sẽ được truy cập trọn đời. Có thể học đi học lại bất kỳ lúc nào, không lo bị giới hạn thời gian hay số lượt xem.',
    },
    {
      question: 'Làm sao để mua và nhận video học?',
      answer:
        'Bạn chỉ cần chọn gói học phù hợp, điền form đặt hàng và thanh toán. Sau đó bạn sẽ nhận được link truy cập video qua email hoặc Zalo, kèm hướng dẫn sử dụng chi tiết.',
    },
  ],
}

export {
  DATA_BANNER,
  DATA_FAQ,
  DATA_FEEDBACK,
  DATA_PACKAGE,
  DATA_PROBLEM,
  DATA_WCU,
}
