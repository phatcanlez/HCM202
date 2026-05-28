import { motion } from "framer-motion";
import {
  KineticHeading,
  KineticSubline,
} from "../../components/ui/KineticText";
import Section from "../../components/layout/Section";
import Card from "../../components/ui/Card";
import { ArrowDown, CheckCircle, RefreshCw } from "lucide-react";

const TheoricBasisPage = () => {
  return (
    <div className="page-shell w-full bg-bone selection:bg-ink selection:text-gold snap-container">
      {/* SECTION 1: HEADER */}
      <Section className="items-center justify-center pt-32 px-4 md:px-10 border-b-2 border-ink bg-sand">
        <div className="flex flex-col items-center justify-center space-y-8 max-w-5xl mx-auto w-full relative z-10">
          {/* Top Label Box */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-ink border-4 border-ink px-6 py-2 shadow-hard transform rotate-1"
          >
            <span className="font-mono font-bold uppercase tracking-widest text-sm md:text-base text-bone">
              Cơ Sở Lý Thuyết
            </span>
          </motion.div>

          {/* Main Title Block */}
          <div className="relative text-center space-y-10">
            <motion.h1
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, type: "spring" }}
              className="font-display font-black text-5xl md:text-8xl uppercase text-ink leading-[0.85] tracking-tighter drop-shadow-hard"
            >
              TƯ TƯỞNG
            </motion.h1>

            <motion.h1
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="font-display font-black text-5xl md:text-8xl uppercase text-transparent text-stroke-black leading-[0.85] tracking-tighter"
            >
              HỒ CHÍ MINH
            </motion.h1>
          </div>

          {/* Quote Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white border-4 border-crimson p-6 md:p-8 shadow-hard-lg max-w-2xl transform -rotate-1 mt-8 relative"
          >
            <p className="font-body text-xl md:text-2xl text-ink text-center font-medium italic">
              "Thanh niên trong thời đại truyền thông:{"  "}
              <span className="bg-crimson/10 px-1 font-bold text-crimson not-italic">
                làm chủ hay bị thao túng
              </span>{" "}
              ?"
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

      {/* SECTION 2: HỒ CHÍ MINH'S THOUGHTS ON STATE */}
      <Section
        scrollable={true}
        className="items-center justify-center px-4 md:px-10 bg-tea"
      >
        <div className="max-w-screen-2xl mx-auto w-full py-16">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-crimson/20 to-gold/20 rounded-sm -rotate-2 transform scale-105"></div>
              <Card variant="default" className="p-10 rotate-1 kinetic-grid">
                <h3 className="font-display text-3xl font-bold text-crimson mb-8 uppercase border-b-2 border-crimson/20 pb-4">
                  1. Ba Thuộc Tính của Nhà nước
                </h3>
                <ul className="space-y-6">
                  <li className="flex gap-4 items-start">
                    <CheckCircle
                      className="text-crimson shrink-0 mt-1"
                      size={24}
                    />
                    <div className="text-graphite font-medium text-lg">
                      <strong className="block text-ink">
                        Nhà nước CỦA dân:
                      </strong>
                      Quyền lực thuộc về Nhân dân. Địa vị cao nhất là dân, vì
                      dân là chủ.
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <CheckCircle
                      className="text-crimson shrink-0 mt-1"
                      size={24}
                    />
                    <div className="text-graphite font-medium text-lg">
                      <strong className="block text-ink">
                        Nhà nước DO dân:
                      </strong>
                      Do chính Nhân dân lập nên, tổ chức nên, dựa vào lực lượng
                      của Nhân dân.
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <CheckCircle
                      className="text-crimson shrink-0 mt-1"
                      size={24}
                    />
                    <div className="text-graphite font-medium text-lg">
                      <strong className="block text-ink">
                        Nhà nước VÌ dân:
                      </strong>
                      Phục vụ lợi ích và nguyện vọng chính đáng của Nhân dân,
                      không có đặc quyền.
                    </div>
                  </li>
                </ul>
              </Card>
            </div>

            <div className="order-1 md:order-2 space-y-8">
              <h2 className="text-4xl md:text-5xl font-display font-black text-ink uppercase leading-none">
                Nhân Dân Thực Hiện{" "}
                <span className="text-crimson">Quyền Làm Chủ</span>
              </h2>
              <p className="text-xl text-graphite/80 leading-relaxed font-body">
                Nhân dân thực hiện quyền làm chủ trực tiếp và gián tiếp đối với
                Nhà nước. Nhân dân có quyền kiểm soát Nhà nước, bãi miễn đại
                biểu không xứng đáng.
              </p>

              <div className="bg-paper p-8 border-l-8 border-l-crimson border-y-2 border-r-2 border-ink shadow-hard-md text-base">
                <div className="space-y-6">
                  {/* Item A */}
                  <div>
                    <h4 className="font-bold text-ink mb-2 uppercase tracking-wide flex items-center gap-2">
                      <span className="w-6 h-6 bg-crimson text-white rounded-full flex items-center justify-center text-xs">
                        A
                      </span>
                      Dân chủ trực tiếp
                    </h4>
                    <p className="text-graphite/90 ml-8">
                      Bầu cử, ra quyết định trực tiếp, kiểm tra giám sát.
                    </p>
                  </div>

                  {/* Item B */}
                  <div>
                    <h4 className="font-bold text-ink mb-2 uppercase tracking-wide flex items-center gap-2">
                      <span className="w-6 h-6 bg-crimson text-white rounded-full flex items-center justify-center text-xs">
                        B
                      </span>
                      Dân chủ gián tiếp
                    </h4>
                    <p className="text-graphite/90 ml-8">
                      Thông qua đại biểu Quốc hội, Hội đồng nhân dân các cấp.
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-ink/20">
                    <p className="text-lg font-bold text-ink text-center">
                      "Nếu Chính phủ làm hại dân thì dân có quyền đuổi Chính
                      phủ."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 3: YOUTH'S ROLE AND POLITICAL FOUNDATION */}
      <Section
        scrollable={true}
        className="items-center justify-center pt-8 px-4 md:px-10 bg-sand border-b-2 border-ink"
      >
        <div className="max-w-screen-2xl mx-auto w-full py-4">
          <div className="text-center mb-5">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block bg-crimson border-4 border-ink px-6 py-2 shadow-hard transform -rotate-1 mb-6"
            >
              <span className="font-mono font-bold uppercase tracking-widest text-sm md:text-base text-white">
                Vai Trò Thanh Niên
              </span>
            </motion.div>
            <h2 className="font-display text-xl md:text-2xl font-black uppercase mb-2 text-ink">
              Sự Tham Gia Có Trách Nhiệm{" "}
              <span className="text-crimson">Của Thanh Niên</span>
            </h2>
            <p className="font-body text-sm md:text-base text-graphite/70 max-w-3xl mx-auto">
              "Chủ tịch Hồ Chí Minh đặc biệt gửi gắm niềm tin vào thế hệ trẻ.
              Thanh niên phải là lực lượng xung kích trong xây dựng đất nước."
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-3 ">
            {/* Require 1 */}
            <Card
              variant="default"
              hoverEffect
              className="p-3 border-t-8 border-t-blue-600 bg-bone"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-3 border-2 border-blue-600 shadow-[4px_4px_0px_0px_#2563EB]">
                <span className="font-display font-black text-xl text-blue-600">
                  01
                </span>
              </div>
              <h3 className="font-display text-lg font-bold mb-2 uppercase text-ink">
                Nhận Thức Đúng
              </h3>
              <p className="text-base text-graphite/80 mb-3">
                Nâng cao bản lĩnh chính trị thông qua việc học tập tư tưởng Hồ
                Chí Minh, kiên định ý thức và trách nhiệm công dân.
              </p>
              <ul className="space-y-1 text-graphite/70">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-blue-600 rounded-full shrink-0"></span>
                  Học tập chủ nghĩa Mác - Lênin
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-blue-600 rounded-full shrink-0"></span>
                  Hiểu rõ tư tưởng Hồ Chí Minh
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-blue-600 rounded-full shrink-0"></span>
                  Có thế giới quan khoa học vững vàng
                </li>
              </ul>
            </Card>

            {/* Require 2 */}
            <Card
              variant="default"
              hoverEffect
              className="p-3 border-t-8 border-t-ember bg-bone"
            >
              <div className="w-14 h-14 bg-ember/20 rounded-lg flex items-center justify-center mb-3 border-2 border-ember shadow-[4px_4px_0px_0px_#FF5500]">
                <span className="font-display font-black text-xl text-ember">
                  02
                </span>
              </div>
              <h3 className="font-display text-lg font-bold mb-2 uppercase text-ink">
                Trau Dồi Năng Lực
              </h3>
              <p className="text-sm text-graphite/80 mb-2">
                Rèn luyện năng lực tư duy, học tập để giải quyết yêu cầu đa dạng
                của cuộc sống.
              </p>
              <ul className="space-y-0.5 text-sm text-graphite/70">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-ember rounded-full shrink-0"></span>
                  Tích lũy kiến thức trong thời trẻ
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-ember rounded-full shrink-0"></span>
                  Phát triển kỹ năng sống và làm việc
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-ember rounded-full shrink-0"></span>
                  Làm chủ khoa học công nghệ
                </li>
              </ul>
            </Card>

            {/* Require 3 */}
            <Card
              variant="default"
              hoverEffect
              className="p-3 border-t-8 border-t-purple-600 bg-bone"
            >
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-3 border-2 border-purple-600 shadow-[4px_4px_0px_0px_#9333EA]">
                <span className="font-display font-black text-xl text-purple-600">
                  03
                </span>
              </div>
              <h3 className="font-display text-lg font-bold mb-2 uppercase text-ink">
                Rèn Luyện Đạo Đức
              </h3>
              <p className="text-sm text-graphite/80 mb-2">
                Trau dồi đạo đức cách mạng, chủ động chống tiêu cực.
              </p>
              <ul className="space-y-0.5 text-sm text-graphite/70">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-purple-600 rounded-full shrink-0"></span>
                  Chống chủ nghĩa cá nhân
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-purple-600 rounded-full shrink-0"></span>
                  Chống giặc nội xâm: tham ô, lãng phí
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-purple-600 rounded-full shrink-0"></span>
                  Sống có ích cho xã hội
                </li>
              </ul>
            </Card>

            {/* Require 4 */}
            <Card
              variant="default"
              hoverEffect
              className="p-3 border-t-8 border-t-green-600 bg-bone"
            >
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-3 border-2 border-green-600 shadow-[4px_4px_0px_0px_#16A34A]">
                <span className="font-display font-black text-xl text-green-600">
                  04
                </span>
              </div>
              <h3 className="font-display text-lg font-bold mb-2 uppercase text-ink">
                Khát Vọng Cống Hiến
              </h3>
              <p className="text-sm text-graphite/80 mb-2">
                Nỗ lực hôm nay là để xây dựng đất nước giàu mạnh, văn minh vào
                ngày mai.
              </p>
              <ul className="space-y-0.5 text-sm text-graphite/70">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-green-600 rounded-full shrink-0"></span>
                  Lập thân, lập nghiệp
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-green-600 rounded-full shrink-0"></span>
                  Trở thành người thừa kế xã hội chủ nghĩa
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-green-600 rounded-full shrink-0"></span>
                  Xây dựng Việt Nam hòa bình, thống nhất, độc lập
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default TheoricBasisPage;
