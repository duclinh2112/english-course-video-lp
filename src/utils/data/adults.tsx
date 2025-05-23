import type {
  IBanner,
  IFaq,
  IFeedback,
  IPackage,
  IProblem,
  IWcu,
} from '../types/interface/ILandingPage'

const DATA_BANNER: IBanner = {
  title: 'Tự học Tiếng Anh Giao Tiếp Dễ Như Ăn Kẹo!',
  content: `
    <p>
      Bộ video học tiếng Anh siêu dễ hiểu – dành cho người mất gốc và
      không có thời gian.
      <br />
      Học mọi lúc, mọi nơi – không cần giáo trình phức tạp.
    </p>
  `,
  image: {
    src: '/assets/images/img-banner.jpg',
    alt: 'Q English Banner Adults',
  },
}

const DATA_PROBLEM: IProblem = {
  title: ' Các vấn đề bạn đang gặp phải',
  data: [
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
  ],
}

const DATA_WCU: IWcu = {
  title: 'Tại sao lại học tiếng Anh theo cách này?',
  data: [
    '🎧 Vì bạn cần NGHE – HIỂU – PHẢN XẠ, không phải học lý thuyết',
    '⏱ Vì bạn không có nhiều thời gian để theo học đều đặn mỗi ngày',
    '💸 Vì bạn không cần đầu tư quá nhiều tiền mới học được',
    '📱 Vì bạn muốn học theo cách thoải mái – không áp lực – không ai phán xét',
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
  title: 'Người dùng nói gì',
  data: [
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
  ],
}

const DATA_FAQ: IFaq = {
  title: 'Các câu hỏi thường gặp',
  data: [
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
