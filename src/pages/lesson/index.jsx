import { motion } from "framer-motion";
import {
    CheckCircle,
    Lightbulb,
    Target,
    Award,
    Quote,
    ArrowDown,
} from "lucide-react";
import {
    KineticHeading,
    KineticSubline,
    MarqueeStrip,
} from "../../components/ui/KineticText";
import Section from "../../components/layout/Section";
import Card from "../../components/ui/Card";

const LessonPage = () => {
    return (
        <div className="page-shell w-full bg-bone snap-container font-body">
            {/* SECTION 1: HEADER */}
            <Section className="items-center justify-center pt-32 px-4 md:px-10 border-b-2 border-ink bg-bone">
                <div className="flex flex-col items-center justify-center space-y-8 max-w-5xl mx-auto w-full relative z-10">
                    {/* Top Label Box */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-green-600 border-4 border-ink px-6 py-2 shadow-hard transform -rotate-1"
                    >
                        <span className="font-mono font-bold uppercase tracking-widest text-sm md:text-base text-white">
                            Giải Pháp & Bài Học
                        </span>
                    </motion.div>

                    {/* Main Title Block */}
                    <div className="relative text-center">
                        <motion.h1
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.1, type: "spring" }}
                            className="font-display font-black text-5xl md:text-8xl uppercase text-green-600 leading-[0.85] tracking-tighter drop-shadow-hard"
                        >
                            BÀI HỌC
                        </motion.h1>

                        <motion.h1
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2, type: "spring" }}
                            className="font-display font-black text-5xl md:text-8xl uppercase text-transparent text-stroke-green leading-[0.85] tracking-tighter"
                        >
                            CHO SINH VIÊN
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
                            "Học để làm gì? Học để phục vụ ai?"
                            <span className="block text-sm text-graphite mt-2">- Câu hỏi cơ bản mỗi sinh viên cần trả lời</span>
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

            {/* SECTION 2: MAIN LESSON - EXERCISING MASTERSHIP CONSCIOUSLY */}
            <Section className="items-center justify-center px-4 md:px-10 bg-white border-b-2 border-ink">
                <div className="max-w-screen-xl mx-auto w-full py-16">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block bg-green-600 border-4 border-ink px-6 py-2 shadow-hard transform -rotate-1 mb-6"
                        >
                            <span className="font-mono font-bold uppercase tracking-widest text-sm md:text-base text-white">
                                Bài Học 1
                            </span>
                        </motion.div>
                        <h2 className="font-display text-4xl md:text-5xl font-black text-ink mb-4 uppercase">
                            Thực Hiện Quyền Làm Chủ{" "}
                            <span className="text-green-600">Một Cách Tỉnh Táo</span>
                        </h2>
                        <p className="text-xl text-graphite/70 max-w-3xl mx-auto font-body">
                            Để làm chủ tỉnh táo, không thờ ơ nhưng không hành động cảm tính, người dân và thanh niên phải không ngừng học tập.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <Card variant="default" className="p-8 border-l-8 border-l-green-600">
                            <h3 className="font-display text-2xl font-bold text-green-600 mb-6 uppercase">
                                Nâng Cao Trình Độ Dân Trí
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex gap-4 items-start">
                                    <Lightbulb className="text-green-600 shrink-0 mt-1" size={24} />
                                    <div>
                                        <strong className="block text-ink mb-1">Hiểu Biết Pháp Luật:</strong>
                                        <p className="text-graphite/80 text-sm">
                                            Nâng cao sự hiểu biết pháp luật, tri thức khoa học và lý luận chính trị.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <Lightbulb className="text-green-600 shrink-0 mt-1" size={24} />
                                    <div>
                                        <strong className="block text-ink mb-1">Kiểm Chứng Thông Tin:</strong>
                                        <p className="text-graphite/80 text-sm">
                                            Chỉ khi có trình độ cao, mới có "năng lực làm chủ", biết kiểm chứng thông tin.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <Lightbulb className="text-green-600 shrink-0 mt-1" size={24} />
                                    <div>
                                        <strong className="block text-ink mb-1">Không Bị Dụ Dỗ:</strong>
                                        <p className="text-graphite/80 text-sm">
                                            Không bị dụ dỗ bởi các thế lực thù địch, các luận điệu xuyên tạc trên mạng.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </Card>

                        <Card variant="default" className="p-8 border-l-8 border-l-green-600 bg-green-50">
                            <h3 className="font-display text-2xl font-bold text-green-600 mb-6 uppercase">
                                Lời Căn Dặn Từ Hồ Chí Minh
                            </h3>
                            <div className="space-y-6">
                                <div className="bg-white p-6 border-l-4 border-l-green-600">
                                    <p className="text-graphite/90 leading-relaxed italic text-base">
                                        "Đối với kẻ địch phải luôn tỉnh táo, giữ vững lập trường. Phải luôn sẵn sàng đập tan mọi âm mưu độc ác của kẻ địch, bảo vệ những thành quả của cách mạng."
                                    </p>
                                </div>
                                <div className="bg-white p-6 border-2 border-green-600">
                                    <p className="text-sm font-bold text-green-600 uppercase">Ý NGHĨA:</p>
                                    <p className="text-graphite/80 text-sm mt-2">
                                        Sinh viên phải luôn tỉnh táo, có lập trường rõ ràng, không bị các thế lực thù địch lôi kéo hay dụ dỗ.
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </Section>

            {/* SECTION 3: LESSON FOR STUDENTS */}
            <Section className="items-center justify-center px-4 md:px-10 bg-paper border-b-2 border-ink">
                <div className="max-w-screen-xl mx-auto w-full py-16">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block bg-green-600 border-4 border-ink px-6 py-2 shadow-hard transform rotate-1 mb-6"
                        >
                            <span className="font-mono font-bold uppercase tracking-widest text-sm md:text-base text-white">
                                Bài Học 2
                            </span>
                        </motion.div>
                        <h2 className="font-display text-4xl md:text-5xl font-black text-ink mb-4 uppercase">
                            Xác Định Trách Nhiệm{" "}
                            <span className="text-green-600">Của Bản Thân</span>
                        </h2>
                        <p className="text-xl text-graphite/70 max-w-3xl mx-auto font-body">
                            Mỗi sinh viên cần xác định rõ trách nhiệm của mình với tư cách là chủ thể của đất nước.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Left: Key Questions */}
                        <Card variant="default" className="p-8 border-t-8 border-t-green-600">
                            <h3 className="font-display text-2xl font-bold text-green-600 mb-6 uppercase">
                                Các Câu Hỏi Cơ Bản
                            </h3>
                            <div className="space-y-6">
                                <div className="bg-green-50 p-6 border-l-4 border-l-green-600">
                                    <p className="font-bold text-green-600 text-lg mb-2">"Học để làm gì?"</p>
                                    <p className="text-graphite/80 text-sm">
                                        Phải có phương hướng tu dưỡng đúng đắn, không học một cách máy móc hay vô định hướng.
                                    </p>
                                </div>
                                <div className="bg-green-50 p-6 border-l-4 border-l-green-600">
                                    <p className="font-bold text-green-600 text-lg mb-2">"Học để phục vụ ai?"</p>
                                    <p className="text-graphite/80 text-sm">
                                        Xác định mục tiêu phục vụ Nhân dân, Đảng, nước Việt Nam, không vì lợi ích cá nhân.
                                    </p>
                                </div>
                            </div>
                        </Card>

                        {/* Right: Student Responsibilities */}
                        <Card variant="default" className="p-8 border-t-8 border-t-green-600 bg-white">
                            <h3 className="font-display text-2xl font-bold text-green-600 mb-6 uppercase">
                                Trách Nhiệm Của Sinh Viên
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex gap-4 items-start">
                                    <Target className="text-green-600 shrink-0 mt-1" size={24} />
                                    <div>
                                        <strong className="block text-ink mb-1">Không Chạy Theo Đám Đông Mù Quáng:</strong>
                                        <p className="text-graphite/80 text-sm">
                                            Phải chủ động tích cực, có nhận thức rõ ràng, không bị chi phối bởi cảm xúc hay mạng xã hội.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <Target className="text-green-600 shrink-0 mt-1" size={24} />
                                    <div>
                                        <strong className="block text-ink mb-1">Làm Chủ Khoa Học Công Nghệ:</strong>
                                        <p className="text-graphite/80 text-sm">
                                            Tích cực học tập, làm chủ kiến thức để đóng góp hiệu quả cho đất nước.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <Target className="text-green-600 shrink-0 mt-1" size={24} />
                                    <div>
                                        <strong className="block text-ink mb-1">Trau Dồi Đạo Đức Cách Mạng:</strong>
                                        <p className="text-graphite/80 text-sm">
                                            Rèn luyện bản lĩnh chính trị, là tấm gương tuân thủ pháp luật và chủ trương.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </Card>
                    </div>
                </div>
            </Section>

            {/* SECTION 4: SPECIFIC GUIDANCE */}
            <Section className="items-center justify-center px-4 md:px-10 bg-sand border-b-2 border-ink">
                <div className="max-w-screen-2xl mx-auto w-full py-16">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block bg-green-600 border-4 border-ink px-6 py-2 shadow-hard transform -rotate-1 mb-6"
                        >
                            <span className="font-mono font-bold uppercase tracking-widest text-sm md:text-base text-white">
                                Bài Học 3
                            </span>
                        </motion.div>
                        <h2 className="font-display text-4xl md:text-5xl font-black text-ink mb-4 uppercase">
                            Hướng Dẫn Cụ Thể{" "}
                            <span className="text-green-600">Cho Sinh Viên</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* For Communist Members */}
                        <Card variant="default" className="p-8 border-2 border-ink bg-green-50">
                            <h3 className="font-display text-2xl font-bold text-green-600 mb-6 uppercase">
                                ✓ Nếu Là Đảng Viên
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex gap-3 items-start">
                                    <CheckCircle className="text-green-600 shrink-0 mt-1" size={20} />
                                    <div>
                                        <p className="text-graphite/90 text-base">
                                            Luôn là tấm gương tuân thủ chủ trương, pháp luật của Đảng và Nhà nước.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <CheckCircle className="text-green-600 shrink-0 mt-1" size={20} />
                                    <div>
                                        <p className="text-graphite/90 text-base">
                                            Xung phong trong các công việc của Đảng và nhà trường.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <CheckCircle className="text-green-600 shrink-0 mt-1" size={20} />
                                    <div>
                                        <p className="text-graphite/90 text-base">
                                            Tiếp tục nâng cao hiểu biết về chủ nghĩa Mác-Lênin và tư tưởng Hồ Chí Minh.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </Card>

                        {/* For Non-Members */}
                        <Card variant="default" className="p-8 border-2 border-ink bg-green-50">
                            <h3 className="font-display text-2xl font-bold text-green-600 mb-6 uppercase">
                                ✓ Nếu Chưa Là Đảng Viên
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex gap-3 items-start">
                                    <CheckCircle className="text-green-600 shrink-0 mt-1" size={20} />
                                    <div>
                                        <p className="text-graphite/90 text-base">
                                            Tích cực học tập chủ nghĩa Mác-Lênin và tư tưởng Hồ Chí Minh.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <CheckCircle className="text-green-600 shrink-0 mt-1" size={20} />
                                    <div>
                                        <p className="text-graphite/90 text-base">
                                            Xây dựng thế giới quan khoa học, lập trường chính trị vững vàng.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <CheckCircle className="text-green-600 shrink-0 mt-1" size={20} />
                                    <div>
                                        <p className="text-graphite/90 text-base">
                                            Chuẩn bị để có thể tham gia Đảng trong tương lai.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </Card>
                    </div>

                    {/* Common Goal */}
                    <div className="mt-12 bg-green-600 text-white p-8 md:p-12 rounded-sm shadow-hard text-center">
                        <h3 className="font-display text-3xl font-bold mb-4 uppercase">
                            Mục Tiêu Chung Của Tất Cả Sinh Viên
                        </h3>
                        <p className="text-lg mb-6 leading-relaxed">
                            Các sinh viên cần xác định rõ trách nhiệm, tham gia đời sống chính trị-xã hội <strong>với ý thức trách nhiệm</strong>, góp phần xây dựng nước Việt Nam:
                        </p>
                        <div className="text-2xl font-bold tracking-widest">
                            DÂN GIÀU • NƯỚC MẠNH • DÂN CHỦ • CÔNG BẰNG • VĂN MINH
                        </div>
                    </div>
                </div>
            </Section>

            {/* SECTION 5: CONCLUSION */}
            <Section className="items-center justify-center px-4 md:px-10 bg-bone border-t-2 border-ink">
                <div className="max-w-screen-xl mx-auto w-full py-16 text-center">
                    <div className="w-16 h-16 bg-green-600 mx-auto flex items-center justify-center border-2 border-ink mb-8">
                        <Quote className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>

                    <motion.blockquote
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-display text-3xl md:text-4xl font-bold leading-tight tracking-normal text-ink mb-8"
                    >
                        "Những người trẻ hôm nay là những{" "}
                        <span className="text-green-600 bg-green-100 px-2">
                            người xây dựng đất nước vào ngày mai
                        </span>
                        "
                    </motion.blockquote>

                    <p className="text-xl text-graphite/70 max-w-3xl mx-auto font-body">
                        Sinh viên không được bỏ cuộc, không được bao che, mà phải chủ động, tích cực học tập, rèn luyện để thực hiện quyền làm chủ của mình một cách tỉnh táo, có trách nhiệm và đóng góp thực chất cho sự nghiệp xây dựng nước Việt Nam xã hội chủ nghĩa.
                    </p>

                    <div className="mt-12">
                        <MarqueeStrip
                            text="TÀI NƯỚC • TRÁCH NHIỆM SINH VIÊN • ĐẢNG - NHÂN DÂN - LẬP NGHIỆP"
                            speed={26}
                            tone="dark"
                            className="font-display font-bold uppercase tracking-widest text-lg border-2 border-ink shadow-hard"
                        />
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default LessonPage;
