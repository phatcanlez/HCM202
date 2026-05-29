import "./style.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ChevronDown, Quote } from "lucide-react";
import TrongDong3D from "../../components/ui/TrongDong3D";
import {
  KineticHeading,
  KineticSubline,
  MarqueeStrip,
} from "../../components/ui/KineticText";
import Section from "../../components/layout/Section";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

const HomePage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });

  const yHero = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const featurePills = [
    "Tham gia tự giác và có trách nhiệm",
    "Nâng cao bản lĩnh chính trị",
    "Không bị dụ dỗ bởi thế lực thù địch",
  ];

  return (
    <div
      ref={containerRef}
      className="home-shell w-full bg-beige selection:bg-brown selection:text-beige snap-container h-screen overflow-y-scroll"
    >
      {/* SECTION 1: HERO - Introduction */}
      <Section className="items-center justify-center pt-32 pb-20 border-b border-brown/20 bg-beige min-h-screen">
        <div className="absolute inset-0 home-hero-overlay pointer-events-none mix-blend-multiply opacity-10" />
        <div className="absolute inset-0 opacity-[0.02] floating-words font-display uppercase text-[12rem] leading-none break-all overflow-hidden pointer-events-none select-none text-red-muted">
          Ho Chi Minh Ideology
        </div>

        <div className="max-w-screen-2xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center z-10 relative">
          {/* Grids/Lines decoration */}
          <div className="absolute -left-10 top-0 bottom-0 w-px bg-brown/10 hidden lg:block"></div>
          <div className="absolute -right-10 top-0 bottom-0 w-px bg-brown/10 hidden lg:block"></div>

          <motion.div
            style={{ y: yHero, opacity: opacityHero }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-brown text-beige border border-brown hover:border-red-muted hover:text-red-muted transition-colors">
              <span className="w-2 h-2 bg-current rounded-full animate-pulse"></span>
              <span className="font-mono text-xs uppercase tracking-widest">
                Tư Tưởng Hồ Chí Minh
              </span>
            </div>

            <div className="relative">
              <motion.h1
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="font-display font-bold text-5xl md:text-7xl uppercase text-brown leading-tight tracking-normal"
              >
                Thanh niên &
              </motion.h1>
              <motion.h1
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1, type: "spring" }}
                className="font-display font-bold text-5xl md:text-7xl uppercase text-red-muted leading-tight tracking-normal"
              >
                Quyền lực Nhà nước
              </motion.h1>
            </div>

            <KineticSubline className="max-w-xl text-brown/80 text-lg font-medium border-l-4 border-red-muted pl-4 ml-2">
              Từ tư tưởng Hồ Chí Minh đến việc nhận diện mâu thuẫn trong các
              phong trào biến động chính trị-xã hội
            </KineticSubline>

            <div className="flex flex-wrap gap-3 pt-4">
              {featurePills.map((pill, idx) => (
                <motion.div
                  key={pill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  className="px-4 py-2 border border-brown bg-white text-brown font-body text-xs font-medium uppercase hover:bg-red-muted hover:text-white hover:-translate-y-1 hover:shadow-md transition-all cursor-pointer"
                >
                  {pill}
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-8 w-max">
              <Button
                variant="danger"
                size="lg"
                onClick={() =>
                  document
                    .getElementById("quote-section")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="gap-2 hover:shadow-md hover:translate-x-1 transition-all"
              >
                Bắt đầu khám phá <ArrowRight size={20} strokeWidth={3} />
              </Button>
            </div>
          </motion.div>

          {/* Hero 3D Model - Ho Chi Minh */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative hidden lg:block lg:col-span-1 xl:scale-110 xl:origin-center"
          >
            {/* 3D Ho Chi Minh Model */}
            <div className="w-full aspect-square relative">
              <TrongDong3D className="rounded-sm" />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* SECTION 2: PEOPLE'S MASTERSHIP (Topic 4) */}
      <Section
        scrollable={true}
        className="items-center justify-center px-4 md:px-10 bg-beige"
      >
        <div className="max-w-screen-2xl mx-auto w-full py-16">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-brown uppercase">
              Đặt Vấn Đề <br />
              <span className="text-red-muted">Bối Cảnh Thời Đại</span>
            </h2>
            <KineticSubline className="text-center max-w-3xl mx-auto text-brown">
              Trong bối cảnh truyền thông số lan truyền nhanh chóng, thanh niên
              tham gia ngày càng mạnh mẽ vào các phong trào chính trị-xã hội.
            </KineticSubline>
          </div>

          {/* Infographic Style Layout */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card
              variant="flat"
              hoverEffect
              className="p-8 border-l-4 border-l-red-muted bg-white flex flex-col shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-red-muted/10 rounded-lg flex items-center justify-center mb-6 border border-red-muted">
                <span className="font-display font-bold text-3xl text-red-muted">
                  01
                </span>
              </div>
              <h3 className="font-display text-2xl font-bold mb-4 text-brown">
                Sự Bùng Nổ Thông Tin
              </h3>
              <p className="text-lg text-brown/80 mb-6 grow">
                Truyền thông số mang lại nhiều rủi ro. Nhiều người trẻ phiêu du
                trên mạng nếu không có thế giới quan đúng đắn, không có bản lĩnh
                chính trị vững vàng thì rất dễ bị đánh mất chính mình.
              </p>
              <div className="h-1 w-12 bg-red-muted"></div>
            </Card>

            <Card
              variant="flat"
              hoverEffect
              className="p-8 border-l-4 border-l-red-muted bg-white flex flex-col shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-red-muted/10 rounded-lg flex items-center justify-center mb-6 border border-red-muted">
                <span className="font-display font-bold text-3xl text-red-muted">
                  02
                </span>
              </div>
              <h3 className="font-display text-2xl font-bold mb-4 text-brown">
                Mâu Thuẫn Cốt Lõi
              </h3>
              <p className="text-lg text-brown/80 mb-6 grow">
                Sự tham gia ồ ạt của thanh niên vào các biến động chính trị-xã
                hội là biểu hiện của việc thực hiện quyền làm chủ hay chỉ là dấu
                hiệu của việc quyền lực bị dẫn dắt?
              </p>
              <div className="h-1 w-12 bg-red-muted"></div>
            </Card>

            <Card
              variant="flat"
              hoverEffect
              className="p-8 border-l-4 border-l-red-muted bg-white flex flex-col shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-red-muted/10 rounded-lg flex items-center justify-center mb-6 border border-red-muted">
                <span className="font-display font-bold text-3xl text-red-muted">
                  03
                </span>
              </div>
              <h3 className="font-display text-2xl font-bold mb-4 text-brown">
                Sự Lôi Kéo Từ Phía Xấu
              </h3>
              <p className="text-lg text-brown/80 mb-6 grow">
                Mâu thuẫn giữa việc thực sự "làm chủ" và việc "bị lợi dụng" nằm
                ở đâu, nhất là khi các thế lực phản động luôn tìm mọi cách tuyên
                truyền trên không gian mạng?
              </p>
              <div className="h-1 w-12 bg-red-muted"></div>
            </Card>
          </div>

          <div className="mt-16">
            <MarqueeStrip
              text="THANH NIÊN VÀ QUYỀN LỰC NHÀ NƯỚC • TỪ TƯ TƯỞNG HỒ CHÍ MINH ĐẾN NHẬN DIỆN MÂU THUẪN"
              speed={26}
              tone="dark"
              className="font-display font-bold uppercase tracking-widest text-xl border-2 border-ink shadow-hard"
            />
          </div>
        </div>
      </Section>

      {/* SECTION 2.5: MINH HỌA BẰNG HÌNH ẢNH */}
      <Section className="items-center justify-center px-4 md:px-10 bg-cream border-y border-brown/20" scrollable={true}>
        <div className="max-w-screen-2xl mx-auto w-full py-16">
          <div className="text-center mb-12 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block bg-brown border border-brown px-6 py-2 transform rotate-1 shadow-sm"
            >
              <span className="font-mono font-bold uppercase tracking-widest text-sm md:text-base text-beige">
                Ví Dụ Minh Họa
              </span>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            <Card
              variant="flat"
              className="p-8 md:p-10 bg-white border-2 border-brown shadow-hard-md flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 border border-red-muted text-red-muted font-mono text-xs uppercase tracking-widest w-max">
                  Khúc trích dẫn
                </div>
                <blockquote className="font-body text-lg md:text-xl text-brown leading-relaxed italic">
                  “Để dễ hình dung cho mâu thuẫn này, hãy nhìn vào bài học lịch
                  sử từ phong trào Mùa xuân Ả Rập (2010 - 2011) hay các cuộc
                  Cách mạng màu trên thế giới. Hàng vạn thanh niên, sinh viên
                  thời điểm đó đã xuống đường biểu tình rầm rộ vì tin rằng mình
                  đang đi đòi quyền làm chủ. Nhưng kết quả là gì? Đất nước rơi
                  vào khoảng trống quyền lực, nội chiến kéo dài, GDP sụt giảm
                  nghiêm trọng và kinh tế mất hàng thập kỷ không phục hồi nổi.”
                </blockquote>

                <p className="font-body text-base md:text-lg text-brown/80 leading-relaxed">
                  “Ngay tại Việt Nam, vụ kích động biểu tình phản đối Luật Đặc
                  khu năm 2018 là một ví dụ. Nhiều bạn trẻ bị giật dây trên mạng
                  xã hội, lao vào đập phá trụ sở công quyền mà thậm chí chưa
                  từng đọc qua một trang dự thảo luật nào.”
                </p>

                <p className="font-body text-base md:text-lg text-brown/80 leading-relaxed font-semibold">
                  “Đó chính là minh chứng của việc quyền lực bị dẫn dắt và nhiệt
                  huyết bị lợi dụng.”
                </p>
              </div>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.figure
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="bg-white border-2 border-brown shadow-hard-md overflow-hidden"
              >
                <img
                  src="https://sohanews.sohacdn.com/160588918557773824/2020/12/20/45429456-d505-4de1-afde-7e966fcf8ea3-16084486854561927357460.jpeg"
                  alt="Sinh viên giữa đám đông biểu tình ở Cairo"
                  className="w-full h-72 object-cover"
                  loading="lazy"
                />
                <figcaption className="p-4">
                  <h3 className="font-display text-lg font-bold text-brown uppercase mb-1">
                    Mùa xuân Ả Rập
                  </h3>
                  <p className="text-sm text-brown/75">
                    Hình ảnh sinh viên và đám đông ở Ả Rập biểu tình
                  </p>
                </figcaption>
              </motion.figure>

              <motion.figure
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="bg-white border-2 border-brown shadow-hard-md overflow-hidden"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/35/Student_demonstration_in_front_of_the_Ministry_of_Information_Office_in_Saigon.jpg"
                  alt="Sinh viên biểu tình trước Bộ Thông tin ở Sài Gòn"
                  className="w-full h-72 object-cover"
                  loading="lazy"
                />
                <figcaption className="p-4">
                  <h3 className="font-display text-lg font-bold text-brown uppercase mb-1">
                    Sinh viên xuống đường
                  </h3>
                  <p className="text-sm text-brown/75">
                    Ảnh tư liệu về sinh viên biểu tình ở Sài Gòn, gợi đúng chủ
                    đề thanh niên, truyền thông và tác động chính trị - xã hội.
                  </p>
                </figcaption>
              </motion.figure>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 3: QUOTE & PRINCIPLES */}
      <Section
        id="quote-section"
        className="items-center justify-center bg-brown text-beige border-b border-brown/80"
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(#F5E6C8 1px, transparent 1px), linear-gradient(to right, #F5E6C8 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-12">
          <div className="w-16 h-16 bg-red-muted mx-auto flex items-center justify-center border border-beige">
            <Quote className="w-8 h-8 text-beige" strokeWidth={3} />
          </div>

          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-normal"
          >
            “Làm chủ Nhà nước hay bị dẫn dắt bởi{" "}
            <span className="text-brown bg-beige px-2 box-decoration-clone">
              đám đông
            </span>{" "}
            ?”
          </motion.blockquote>

          <div className="py-8">
            <MarqueeStrip
              text="Quyền lực thuộc về nhân dân — nhưng ai đủ bản lĩnh để làm chủ?"
              speed={30}
              tone="dark"
              className="bg-transparent text-beige/50 font-display font-bold uppercase tracking-widest text-xl border-none"
            />
          </div>
        </div>
      </Section>

      {/* SECTION 4: YOUTH RESPONSIBILITIES (Vai trò xung kích của thanh niên) */}
      <Section className="items-center justify-center px-4 md:px-10 bg-beige border-t border-brown/20">
        <div className="max-w-screen-2xl mx-auto w-full py-16">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block bg-red-muted border border-brown px-6 py-2 transform -rotate-1 mb-6"
            >
              <span className="font-body font-bold uppercase tracking-widest text-sm md:text-base text-white">
                Vai Trò Xung Kích
              </span>
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-brown uppercase mb-4">
              Thanh Niên Phải{" "}
              <span className="text-red-muted">Đóng Góp Tích Cực</span>
            </h2>
            <p className="text-xl text-brown/70 font-body max-w-2xl mx-auto">
              "Đoàn viên và thanh niên ta nói chung là tốt, mọi việc đều hăng
              hái xung phong"
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Responsibility 1 */}
            <Card
              variant="flat"
              hoverEffect
              className="p-6 border-l-4 border-l-red-muted bg-white flex flex-col h-full shadow-sm hover:shadow-md"
            >
              <div className="w-14 h-14 bg-red-muted/10 rounded-lg flex items-center justify-center mb-4 border border-red-muted">
                <span className="font-display font-bold text-2xl text-red-muted">
                  01
                </span>
              </div>
              <h3 className="font-display text-xl font-bold mb-3 text-brown">
                Nâng Cao Bản Lĩnh
              </h3>
              <p className="text-brown/80 grow">
                Nâng cao nhận thức và bản lĩnh chính trị thông qua học tập tư
                tưởng Hồ Chí Minh, kiên định ý thức và trách nhiệm công dân.
              </p>
              <div className="h-1 w-12 bg-red-muted mt-4"></div>
            </Card>

            {/* Responsibility 2 */}
            <Card
              variant="flat"
              hoverEffect
              className="p-6 border-l-4 border-l-red-muted bg-white flex flex-col h-full shadow-sm hover:shadow-md"
            >
              <div className="w-14 h-14 bg-red-muted/10 rounded-lg flex items-center justify-center mb-4 border border-red-muted">
                <span className="font-display font-bold text-2xl text-red-muted">
                  02
                </span>
              </div>
              <h3 className="font-display text-xl font-bold mb-3 text-brown">
                Trau Dồi Năng Lực
              </h3>
              <p className="text-brown/80 grow">
                Rèn luyện năng lực tư duy, học tập để giải quyết yêu cầu đa dạng
                của cuộc sống và đóng góp hiệu quả cho cách mạng.
              </p>
              <div className="h-1 w-12 bg-red-muted mt-4"></div>
            </Card>

            {/* Responsibility 3 */}
            <Card
              variant="flat"
              hoverEffect
              className="p-6 border-l-4 border-l-red-muted bg-white flex flex-col h-full shadow-sm hover:shadow-md"
            >
              <div className="w-14 h-14 bg-red-muted/10 rounded-lg flex items-center justify-center mb-4 border border-red-muted">
                <span className="font-display font-bold text-2xl text-red-muted">
                  03
                </span>
              </div>
              <h3 className="font-display text-xl font-bold mb-3 text-brown">
                Chống Tiêu Cực
              </h3>
              <p className="text-brown/80 grow">
                Trau dồi đạo đức cách mạng, chủ động chống lại chủ nghĩa cá nhân
                và các căn bệnh "giặc nội xâm".
              </p>
              <div className="h-1 w-12 bg-red-muted mt-4"></div>
            </Card>

            {/* Responsibility 4 */}
            <Card
              variant="flat"
              hoverEffect
              className="p-6 border-l-4 border-l-red-muted bg-white flex flex-col h-full shadow-sm hover:shadow-md"
            >
              <div className="w-14 h-14 bg-red-muted/10 rounded-lg flex items-center justify-center mb-4 border border-red-muted">
                <span className="font-display font-bold text-2xl text-red-muted">
                  04
                </span>
              </div>
              <h3 className="font-display text-xl font-bold mb-3 text-brown">
                Khát Vọng Cống Hiến
              </h3>
              <p className="text-brown/80 grow">
                Rèn luyện để trở thành người thừa kế xây dựng chủ nghĩa xã hội,
                góp phần xây dựng đất nước giàu mạnh, văn minh.
              </p>
              <div className="h-1 w-12 bg-red-muted mt-4"></div>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default HomePage;
