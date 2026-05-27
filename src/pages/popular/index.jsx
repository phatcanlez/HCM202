import { motion } from "framer-motion";
import {
  CheckCircle,
  Users,
  Scale,
  FileText,
  Activity,
  RefreshCw,
  ArrowDown,
  GitGraph,
  ShieldAlert,
  Network,
} from "lucide-react";
import {
  KineticHeading,
  KineticSubline,
  MarqueeStrip,
} from "../../components/ui/KineticText";
import Section from "../../components/layout/Section";
import Card from "../../components/ui/Card";

const ApplicationBasisPage = () => {
  return (
    <div className="transition-shell w-full bg-bone snap-container font-body">
      {/* SECTION 1: HEADER */}
      <Section className="items-center justify-center pt-32 px-4 md:px-10 border-b-2 border-ink bg-bone">
        <div className="flex flex-col items-center justify-center space-y-8 max-w-5xl mx-auto w-full relative z-10">
          {/* Top Label Box */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gold border-4 border-ink px-6 py-2 shadow-hard transform -rotate-1"
          >
            <span className="font-mono font-bold uppercase tracking-widest text-sm md:text-base text-ink">
              Cơ Sở Vận Dụng
            </span>
          </motion.div>

          {/* Main Title Block */}
          <div className="relative text-center space-y-15">
            <motion.h1
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, type: "spring" }}
              className="font-display font-black text-5xl md:text-8xl uppercase text-crimson leading-[0.85] tracking-tighter drop-shadow-hard"
            >
              NHẬN DIỆN
            </motion.h1>

            <motion.h1
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="font-display font-black text-5xl md:text-8xl uppercase text-transparent text-stroke-red leading-[0.85] tracking-tighter"
            >
              MÂU THUẪN
            </motion.h1>
          </div>

          {/* Quote Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white border-4 border-ink p-6 md:p-8 shadow-hard-lg max-w-2xl transform rotate-1 mt-8 relative"
          >
            <p className="font-body text-xl md:text-2xl text-ink text-center font-medium italic">
              "Làm chủ thực sự hay{" "}
              <span className="bg-crimson/10 px-1 font-bold text-crimson not-italic">
                bị dẫn dắt?
              </span>
              "
            </p>
          </motion.div>

          {/* Decorative Arrow */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 text-ink opacity-50"
          >
            <ArrowDown size={32} />
          </motion.div>
        </div>
      </Section>

      {/* SECTION 1: DEFINITION - CONTRADICTIONS IN YOUTH PARTICIPATION */}
      <Section className="items-center justify-center px-4 md:px-10 bg-white border-b-2 border-ink">
        <div className="max-w-screen-xl mx-auto w-full py-12">
          <h2 className="font-display text-4xl font-bold text-ink mb-8 text-center uppercase">
            1. Mâu Thuẫn Trong Vai Trò Của Thanh Niên
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-crimson/10 border-l-4 border-crimson p-6 shadow-hard">
              <h3 className="font-bold text-xl uppercase mb-3 text-crimson">
                Một Mặt: Lực Lượng Xung Kích
              </h3>
              <ul className="space-y-2 text-graphite list-disc list-inside">
                <li>
                  <strong>Nhiệt huyết &amp; Hăng Hái:</strong> Thanh niên mang trong mình nhiệt huyết, hăng hái xung phong.
                </li>
                <li>
                  <strong>Không Ngại Khó Khăn:</strong> Không ngại khó khăn, có chí tiến thủ.
                </li>
                <li>
                  <strong>Lực Lượng Thúc Đẩy:</strong> Là lực lượng thúc đẩy sự thay đổi tiến bộ của xã hội.
                </li>
              </ul>
            </div>

            <div className="bg-ink text-bone p-6 shadow-hard flex flex-col justify-center">
              <h3 className="font-bold text-xl uppercase mb-3 text-gold">
                Mặt Khác: Dễ Bị Lôi Kéo
              </h3>
              <ul className="space-y-2 list-disc list-inside marker:text-gold">
                <li>
                  <strong>Thiếu Thông Tin:</strong> Thiếu thông tin đầy đủ, dễ bị chi phối bởi cảm xúc.
                </li>
                <li>
                  <strong>Ảnh Hưởng Mạng Xã Hội:</strong> Dễ bị ảnh hưởng bởi mạng xã hội, luận điệu xuyên tạc.
                </li>
                <li>
                  <strong>Đối Tượng Lôi Kéo:</strong> Nếu không có tri thức vững vàng, rất dễ bị điều khiển bởi thế lực phản động.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 2: MOVEMENTS - EMPOWERMENT OR INSTABILITY */}
      <Section className="items-center justify-center px-4 md:px-10 bg-paper">
        <div className="max-w-screen-xl mx-auto w-full">
          <Card
            variant="default"
            className="p-8 relative overflow-hidden kinetic-grid border-2 border-ink shadow-hard-lg"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-crimson/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
            <div className="absolute -left-10 -top-10 text-9xl font-black text-ink/5 -rotate-12 font-display pointer-events-none select-none">
              CHANGE
            </div>

            <h2 className="font-display text-4xl font-bold text-ink mb-8 border-b-2 border-ink/10 pb-4">
              2. Biến Động: Làm Chủ Thực Sự Hay Bất Ổn?
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-graphite/90 leading-relaxed text-lg mb-6 font-body">
                  Câu trả lời phụ thuộc vào bản chất và mục tiêu của phong trào:
                </p>

                <div className="space-y-6">
                  <div className="bg-white p-6 border-2 border-green-600 shadow-hard-sm hover:shadow-hard transition-shadow">
                    <h4 className="font-bold text-green-600 mb-2 font-mono uppercase tracking-wide">
                      a) Làm Chủ Thực Sự
                    </h4>
                    <p className="text-base text-graphite/80 mb-2">
                      Xảy ra khi biến động có:
                    </p>
                    <ul className="list-disc list-inside text-sm text-graphite/70 ml-2 space-y-1 mb-2">
                      <li>Sự lãnh đạo đúng đắn</li>
                      <li>Dựa trên nền tảng dân trí cao</li>
                      <li>Hướng tới xây dựng thiết chế dân chủ bền vững</li>
                    </ul>
                    <p className="text-sm italic font-medium text-ink">
                      Nhân dân nhận thức được quyền kiểm soát nhà nước một cách tự giác và tổ chức.
                    </p>
                  </div>

                  <div className="bg-white p-6 border-2 border-crimson shadow-hard-sm hover:shadow-hard transition-shadow">
                    <h4 className="font-bold text-crimson mb-2 font-mono uppercase tracking-wide">
                      b) Dẫn Đến Bất Ổn
                    </h4>
                    <p className="text-base text-graphite/80 mb-2">
                      Xảy ra khi biến động:
                    </p>
                    <ul className="list-disc list-inside text-sm text-graphite/70 ml-2 space-y-1 mb-2">
                      <li>Chỉ mang tính tự phát, bị giật dây</li>
                      <li>Bị các thế lực bên ngoài lôi kéo</li>
                      <li>Cực đoan hóa mất kiểm soát</li>
                    </ul>
                    <p className="text-sm italic font-medium text-ink">
                      Dẫn đến "khoảng trống quyền lực", hỗn loạn, chia rẽ nội bộ.
                    </p>
                  </div>
                </div>
              </div>

              {/* Impact Analysis */}
              <div className="relative py-10 mt-8 md:mt-0">
                <h4 className="font-display font-bold text-crimson text-xl mb-6 uppercase">
                  HỆ QUẢ SAU BIẾN ĐỘNG
                </h4>

                <div className="space-y-4">
                  {/* Political Stability */}
                  <div className="bg-white border-l-4 border-l-orange-500 p-5 shadow-hard">
                    <h5 className="font-bold text-orange-600 mb-2 uppercase text-sm">
                      ➤ Ổn Định Chính Trị
                    </h5>
                    <p className="text-sm text-graphite/80 leading-relaxed">
                      Hiếm có quốc gia nào đạt được ổn định ngay lập tức. Thường là giai đoạn quá độ dài với tranh giành quyền lực.
                    </p>
                  </div>

                  {/* Economic Development */}
                  <div className="bg-white border-l-4 border-l-red-500 p-5 shadow-hard">
                    <h5 className="font-bold text-red-600 mb-2 uppercase text-sm">
                      ➤ Phát Triển Kinh Tế
                    </h5>
                    <p className="text-sm text-graphite/80 leading-relaxed">
                      Đa số bị sụt giảm GDP nghiêm trọng do cơ sở hạ tầng bị phá hủy, nhà đầu tư rút vốn. Phục hồi mất hàng thập kỷ.
                    </p>
                  </div>

                  {/* Social Life */}
                  <div className="bg-white border-l-4 border-l-purple-500 p-5 shadow-hard">
                    <h5 className="font-bold text-purple-600 mb-2 uppercase text-sm">
                      ➤ Đời Sống Xã Hội
                    </h5>
                    <p className="text-sm text-graphite/80 leading-relaxed">
                      Tự do biểu đạt tăng nhưng vấn đề an ninh, tị nạn, thất nghiệp, rạn nứt niềm tin giữa các tầng lớp trở nên trầm trọng.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* SECTION 3: CASE STUDIES - YOUTH MOVEMENTS & INSTABILITY 2020-2026 */}
      <Section className="items-center justify-center px-4 md:px-6 bg-bone border-b-2 border-ink">
        <div className="max-w-5xl mx-auto w-full py-4">
          <div className="text-center mb-4">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block bg-crimson border-4 border-ink px-6 py-2 shadow-hard transform rotate-1 mb-4"
            >
              <span className="font-mono font-bold uppercase tracking-widest text-xs text-white">
                Trường Hợp Thực Tế
              </span>
            </motion.div>
            <h2 className="font-display text-xl md:text-2xl font-black uppercase text-ink mb-2">
              Các Phong Trào Thanh Niên & Biến Động Chính Trị (2020-2026)
            </h2>
            <p className="text-sm text-graphite/70 max-w-2xl mx-auto">
              Những cuộc "cách mạng màu" và phong trào thanh niên kiêu hãnh đã dẫn đến những kết quả ra sao?
            </p>
          </div>

          {/* Grid container for all cases - 2 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 mb-4">
            {/* Case 1: Bangladesh */}
            <div className="bg-white border-t-8 border-t-blue-600 p-2.5 shadow-hard">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="bg-blue-600 text-white px-2 py-0.5 rounded-full font-bold text-xs">01</span>
                <h3 className="font-display text-sm font-bold text-ink uppercase">Bangladesh: Nổi Dậy Sinh Viên (2024)</h3>
              </div>
              <div className="space-y-0.5">
                <div>
                  <h4 className="font-bold text-blue-700 mb-0.5 uppercase text-xs">Nguyên Nhân</h4>
                  <p className="text-graphite/80 text-xs leading-tight">
                    Biểu tình phản đối hạn ngạch việc làm, bùng phát thành phong trào đòi Thủ tướng Sheikh Hasina từ chức.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-blue-700 mb-0.5 uppercase text-xs">Vai Trò Thanh Niên</h4>
                  <p className="text-graphite/80 text-xs leading-tight">
                    Sinh viên là lực lượng nòng cốt, tổ chức qua mạng xã hội, đối đầu trực diện với lực lượng an ninh.
                  </p>
                </div>
              </div>
              <div className="bg-blue-50 p-2 border-2 border-blue-200 rounded-lg mt-1.5">
                <h4 className="font-bold text-blue-800 mb-0.5 uppercase text-xs">Hiện Tại (5/2026)</h4>
                <ul className="space-y-0.25 text-xs text-graphite/80 list-disc list-inside">
                  <li>Cải cách hiến pháp, tái cấu trúc định chế</li>
                  <li className="text-crimson font-semibold">⚠️ Bất ổn vẫn còn</li>
                </ul>
              </div>
            </div>

            {/* Case 2: Sri Lanka */}
            <div className="bg-white border-t-8 border-t-orange-600 p-2.5 shadow-hard">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="bg-orange-600 text-white px-2 py-0.5 rounded-full font-bold text-xs">02</span>
                <h3 className="font-display text-sm font-bold text-ink uppercase">Sri Lanka: "Aragalaya" (2022)</h3>
              </div>
              <div className="space-y-0.5">
                <div>
                  <h4 className="font-bold text-orange-700 mb-0.5 uppercase text-xs">Nguyên Nhân</h4>
                  <p className="text-graphite/80 text-xs leading-tight">
                    Khủng hoảng kinh tế tồi tệ nhất, thiếu lương thực, nhiên liệu, thuốc men.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-orange-700 mb-0.5 uppercase text-xs">Vai Trò Thanh Niên</h4>
                  <p className="text-graphite/80 text-xs leading-tight">
                    Gen Z dẫn đầu cắm trại dài ngày Colombo, tạo sức ép buộc Rajapaksa phải tháo chạy.
                  </p>
                </div>
              </div>
              <div className="bg-orange-50 p-2 border-2 border-orange-200 rounded-lg mt-1.5">
                <h4 className="font-bold text-orange-800 mb-0.5 uppercase text-xs">Hiện Tại (5/2026)</h4>
                <ul className="space-y-0.25 text-xs text-graphite/80 list-disc list-inside">
                  <li>Ổn định chính trị dần</li>
                  <li className="text-crimson font-semibold">⚠️ Thách thức nhiều</li>
                </ul>
              </div>
            </div>

            {/* Case 3: Kazakhstan */}
            <div className="bg-white border-t-8 border-t-yellow-600 p-2.5 shadow-hard">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="bg-yellow-600 text-white px-2 py-0.5 rounded-full font-bold text-xs">03</span>
                <h3 className="font-display text-sm font-bold text-ink uppercase">Kazakhstan: "Tháng Giêng" (2022)</h3>
              </div>
              <div className="space-y-0.5">
                <div>
                  <h4 className="font-bold text-yellow-700 mb-0.5 uppercase text-xs">Nguyên Nhân</h4>
                  <p className="text-graphite/80 text-xs leading-tight">
                    Giá nhiên liệu tăng vọt, bất mãn bất bình đẳng kinh tế.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-yellow-700 mb-0.5 uppercase text-xs">Diễn Biến</h4>
                  <p className="text-graphite/80 text-xs leading-tight">
                    Biểu tình biến thành bạo động. Tokayev yêu cầu CSTO can thiệp dập tắt.
                  </p>
                </div>
              </div>
              <div className="bg-yellow-50 p-2 border-2 border-yellow-200 rounded-lg mt-1.5">
                <h4 className="font-bold text-yellow-800 mb-0.5 uppercase text-xs">Hiện Tại (5/2026)</h4>
                <ul className="space-y-0.25 text-xs text-graphite/80 list-disc list-inside">
                  <li>Tokayev củng cố quyền lực</li>
                  <li className="text-crimson font-semibold">⚠️ Vấn đề cốt lõi</li>
                </ul>
              </div>
            </div>

            {/* Case 4: Myanmar */}
            <div className="bg-white border-t-8 border-t-red-600 p-2.5 shadow-hard">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="bg-red-600 text-white px-2 py-0.5 rounded-full font-bold text-xs">04</span>
                <h3 className="font-display text-sm font-bold text-ink uppercase">Myanmar: Khủng Hoảng (2021-Nay)</h3>
              </div>
              <div className="space-y-0.5">
                <div>
                  <h4 className="font-bold text-red-700 mb-0.5 uppercase text-xs">Nguyên Nhân</h4>
                  <p className="text-graphite/80 text-xs leading-tight">
                    Quân đội lật đổ chính phủ dân cử Aung San Suu Kyi.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-red-700 mb-0.5 uppercase text-xs">Vai Trò Thanh Niên</h4>
                  <p className="text-graphite/80 text-xs leading-tight">
                    Gen Z tiên phong CDM, sau gia nhập PDF kháng chiến vũ trang.
                  </p>
                </div>
              </div>
              <div className="bg-red-50 p-2 border-2 border-red-200 rounded-lg mt-1.5">
                <h4 className="font-bold text-red-800 mb-0.5 uppercase text-xs">Hiện Tại (5/2026)</h4>
                <ul className="space-y-0.25 text-xs text-graphite/80 list-disc list-inside">
                  <li className="text-crimson font-semibold">🔴 Nội chiến khốc liệt</li>
                  <li className="ml-4">Khủng hoảng nhân đạo</li>
                </ul>
              </div>
            </div>


          </div>

          {/* Key Takeaway - Full Width */}
          <div className="bg-crimson/10 border-l-8 border-l-crimson p-3">
            <h3 className="font-display text-base font-bold text-crimson uppercase mb-1.5">📌 Bài Học Chính</h3>
            <div className="space-y-1 text-graphite/80 text-xs">
              <p>
                <strong>Thanh niên CÓ vai trò nòng cốt</strong> nhưng kết quả không lúc nào chắc chắn tích cực.
              </p>
              <p>
                <strong>Vấn đề:</strong> Phong trào thiếu lãnh đạo rõ ràng → dẫn tới bất ổn kinh tế, xung đột, nội chiến.
              </p>
              <p>
                <strong>Yêu cầu thanh niên Việt Nam:</strong> Không chỉ "lực lượng xung kích" mà phải có <em>tri thức vững vàng, bản lĩnh chính trị</em> để phân biệt <em>làm chủ thực sự</em> với <em>bị dẫn dắt</em>.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};
export default ApplicationBasisPage;

