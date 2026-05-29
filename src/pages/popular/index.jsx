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
      <Section className="items-center justify-center px-4 md:px-10 bg-sand border-b-2 border-ink">
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
      <Section className="items-center justify-center px-4 md:px-10 bg-tea">
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

      {/* SECTION 3: CASE STUDIES - YOUTH MOVEMENTS & POLITICAL INSTABILITY */}
      <Section className="items-center justify-center px-4 md:px-8 bg-sand border-b-2 border-ink" scrollable={true}>
        <div className="max-w-screen-xl mx-auto w-full py-12">
          {/* Section Header */}
          <div className="text-center mb-10">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block bg-crimson border-4 border-ink px-6 py-2 shadow-hard transform rotate-1 mb-6"
            >
              <span className="font-mono font-bold uppercase tracking-widest text-sm text-white">
                Trường Hợp Thực Tế
              </span>
            </motion.div>
            <h2 className="font-display text-3xl md:text-4xl font-black uppercase text-ink mb-3">
              Phong Trào Thanh Niên &{" "}
              <span className="text-crimson">Biến Động Chính Trị</span>
            </h2>
            <p className="text-base text-graphite/70 max-w-3xl mx-auto font-body">
              Khi thanh niên đứng lên — họ có thực sự "làm chủ" hay chỉ là công cụ bị dẫn dắt? Ba trường hợp điển hình dưới đây cho thấy bức tranh đa chiều.
            </p>
          </div>

          {/* Timeline-style Case Studies */}
          <div className="space-y-8">
            {/* Case 1: Bangladesh */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border-4 border-ink shadow-hard-lg overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Section - Left */}
                <div className="bg-blue-600 text-white flex flex-col p-6 md:p-8 justify-center items-center">
                  <div className="w-full">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-10 h-10 bg-white text-blue-600 rounded-full flex items-center justify-center font-black text-lg border-2 border-blue-800">01</span>
                      <h3 className="font-display text-2xl md:text-3xl font-black uppercase tracking-tight">Bangladesh</h3>
                    </div>
                    <img
                      src="https://www.aljazeera.com/wp-content/uploads/2024/08/AFP__20240803__369B8YZ__v1__HighRes__BangladeshUnrestStudentsProtest-1722682322.jpg?resize=1920%2C1080"
                      alt="Bangladesh - Phong trào Students Against Discrimination 2024"
                      className="w-full object-cover rounded-lg shadow-lg mb-4 border-4 border-white"
                    />
                    <p className="font-mono text-xs text-blue-100 uppercase tracking-widest text-center">Phong trào "Students Against Discrimination" — 2024</p>
                  </div>
                </div>
                {/* Content Section - Right */}
                <div className="divide-y">
                  <div className="p-6">
                    <h4 className="font-mono font-bold text-blue-700 uppercase tracking-widest text-xs mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      Nguyên Nhân
                    </h4>
                    <p className="text-graphite/80 text-sm leading-relaxed">
                      Phản đối hệ thống hạn ngạch (quota) công chức dành 30% vị trí cho con cháu những người có công trong cuộc chiến giành độc lập 1971, gây ra sự bất công trong tìm kiếm việc làm của giới trẻ.
                    </p>
                  </div>
                  <div className="p-6">
                    <h4 className="font-mono font-bold text-blue-700 uppercase tracking-widest text-xs mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      Vai Trò Thanh Niên
                    </h4>
                    <p className="text-graphite/80 text-sm leading-relaxed">
                      Khởi xướng và lãnh đạo toàn bộ phong trào. Họ sử dụng mạng xã hội để kết nối, huy động hàng triệu người xuống đường và biến một yêu sách giáo dục thành phong trào đòi thay đổi thể chế.
                    </p>
                  </div>
                  <div className="p-6 bg-blue-50/50">
                    <h4 className="font-mono font-bold text-blue-700 uppercase tracking-widest text-xs mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      Kết Quả
                    </h4>
                    <p className="text-graphite/80 text-sm leading-relaxed">
                      Thủ tướng Sheikh Hasina phải từ chức và rời khỏi đất nước vào tháng 8/2024. Một chính phủ lâm thời được thành lập với sự tham gia của các đại diện sinh viên để chuẩn bị cho quá trình chuyển đổi.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Case 2: Sri Lanka */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border-4 border-ink shadow-hard-lg overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Content Section - Left */}
                <div className="divide-y order-2 md:order-1">
                  <div className="p-6">
                    <h4 className="font-mono font-bold text-orange-700 uppercase tracking-widest text-xs mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
                      Nguyên Nhân
                    </h4>
                    <p className="text-graphite/80 text-sm leading-relaxed">
                      Khủng hoảng kinh tế tồi tệ nhất lịch sử khiến quốc gia vỡ nợ, thiếu hụt nghiêm trọng nhu yếu phẩm (xăng dầu, thực phẩm, thuốc men), lạm phát phi mã và tình trạng tham nhũng, quản lý yếu kém của gia tộc cầm quyền Rajapaksa.
                    </p>
                  </div>
                  <div className="p-6">
                    <h4 className="font-mono font-bold text-orange-700 uppercase tracking-widest text-xs mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
                      Vai Trò Thanh Niên
                    </h4>
                    <p className="text-graphite/80 text-sm leading-relaxed">
                      Là lực lượng nòng cốt và tiên phong khởi xướng. Thanh niên đã thiết lập khu trại biểu tình "Gota Go Gama", sử dụng mạng xã hội để điều phối các cuộc xuống đường quy mô lớn và duy trì sức ép liên tục trong nhiều tháng.
                    </p>
                  </div>
                  <div className="p-6 bg-orange-50/50">
                    <h4 className="font-mono font-bold text-orange-700 uppercase tracking-widest text-xs mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
                      Kết Quả
                    </h4>
                    <p className="text-graphite/80 text-sm leading-relaxed">
                      Lật đổ chính quyền cũ; buộc Thủ tướng Mahinda Rajapaksa (tháng 5/2022) và Tổng thống Gotabaya Rajapaksa (tháng 7/2022) phải từ chức và tháo chạy. Phong trào đã tạo tiền đề cho sự thay đổi hệ thống chính trị về sau.
                    </p>
                  </div>
                </div>
                {/* Image Section - Right */}
                <div className="bg-orange-600 text-white flex flex-col p-6 md:p-8 justify-center items-center order-1 md:order-2">
                  <div className="w-full">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-10 h-10 bg-white text-orange-600 rounded-full flex items-center justify-center font-black text-lg border-2 border-orange-800">02</span>
                      <h3 className="font-display text-2xl md:text-3xl font-black uppercase tracking-tight">Sri Lanka</h3>
                    </div>
                    <img
                      src="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/OU7LPZMVCJIYFKZWYMRCQZ5OEQ.jpg"
                      alt="Sri Lanka - Phong trào Aragalaya 2022"
                      className=" object-cover rounded-lg shadow-lg mb-4 border-4 border-white"
                      height="250"
                    />
                    <p className="font-mono text-xs text-orange-100 uppercase tracking-widest text-center">Phong trào "Aragalaya" — 2022</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Case 3: Thiên An Môn */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border-4 border-ink shadow-hard-lg overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Section - Left */}
                <div className="bg-red-700 text-white flex flex-col p-6 md:p-8 justify-center items-center">
                  <div className="w-full">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-10 h-10 bg-white text-red-700 rounded-full flex items-center justify-center font-black text-lg border-2 border-red-900">03</span>
                      <h3 className="font-display text-2xl md:text-3xl font-black uppercase tracking-tight">Trung Quốc</h3>
                    </div>
                    <img
                      src="https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/3B03/production/_96370151_gettyimages-166775244.jpg.webp"
                      alt="Trung Quốc - Sự kiện Thiên An Môn 1989"
                      className="w-full object-cover rounded-lg shadow-lg mb-4 border-4 border-white"
                    />
                    <p className="font-mono text-xs text-red-200 uppercase tracking-widest text-center">Sự kiện Thiên An Môn — 1989</p>
                  </div>
                </div>
                {/* Content Section - Right */}
                <div className="divide-y">
                  <div className="p-6">
                    <h4 className="font-mono font-bold text-red-700 uppercase tracking-widest text-xs mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-700 rounded-full"></span>
                      Nguyên Nhân
                    </h4>
                    <p className="text-graphite/80 text-sm leading-relaxed">
                      Khởi nguồn từ sự thương tiếc sau cái chết của ông Hồ Diệu Bang (một lãnh đạo cải cách). Sinh viên đòi hỏi chính phủ cải cách dân chủ, tự do báo chí và đặc biệt là chống tham nhũng, bất bình đẳng xã hội do tác động của cải cách kinh tế.
                    </p>
                  </div>
                  <div className="p-6">
                    <h4 className="font-mono font-bold text-red-700 uppercase tracking-widest text-xs mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-700 rounded-full"></span>
                      Vai Trò Thanh Niên
                    </h4>
                    <p className="text-graphite/80 text-sm leading-relaxed">
                      Là lực lượng nòng cốt và tiên phong. Sinh viên các trường đại học lớn tại Bắc Kinh đã tổ chức biểu tình quy mô lớn, tuyệt thực tại quảng trường và dựng tượng "Nữ thần Dân chủ" để thu hút sự chú ý của thế giới.
                    </p>
                  </div>
                  <div className="p-6 bg-red-50/50">
                    <h4 className="font-mono font-bold text-red-700 uppercase tracking-widest text-xs mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-700 rounded-full"></span>
                      Kết Quả
                    </h4>
                    <p className="text-graphite/80 text-sm leading-relaxed">
                      Chính phủ Trung Quốc quyết định dùng biện pháp mạnh. Đêm 3/6, rạng sáng 4/6/1989, quân đội can thiệp để giải tán đám đông, dẫn đến xung đột bạo lực và thương vong lớn. Phong trào bị dập tắt hoàn toàn.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Key Takeaway - Full Width */}
          <div className="mt-10 bg-bone p-6 md:p-8 border-4 border-ink border-l-8 border-l-crimson shadow-hard-lg">
            <h3 className="font-display text-xl font-bold text-crimson uppercase mb-4 flex items-center gap-3">
              📌 Bài Học Rút Ra
            </h3>
            <div className="space-y-3 text-graphite text-sm leading-relaxed">
              <p>
                <strong className="text-ink">Thanh niên luôn là lực lượng nòng cốt</strong> trong mọi biến động chính trị — nhưng kết quả của phong trào không bao giờ chắc chắn tích cực.
              </p>
              <p>
                <strong className="text-crimson">Vấn đề cốt lõi:</strong> Phong trào thiếu lãnh đạo rõ ràng, bị chi phối bởi cảm xúc hoặc bị thế lực bên ngoài lợi dụng → dẫn tới bất ổn chính trị, suy thoái kinh tế, thậm chí xung đột bạo lực.
              </p>
              <p>
                <strong className="text-ink">Yêu cầu đối với thanh niên Việt Nam:</strong> Không chỉ là{" "}
                <em>"lực lượng xung kích"</em> mà phải có{" "}
                <em className="text-crimson font-semibold">tri thức vững vàng, bản lĩnh chính trị</em>{" "}
                để phân biệt <em className="text-ink font-semibold">làm chủ thực sự</em> với{" "}
                <em className="text-crimson font-semibold">bị dẫn dắt</em>.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};
export default ApplicationBasisPage;

