import { motion } from "framer-motion";
import {
  Users,
  Crown,
  FileText,
  Video,
  Newspaper,
  ExternalLink,
  BookOpen,
  Sparkles,
  Fingerprint,
  FolderOpen,
  Search,
  Cpu,
  Layout,
  ArrowRight,
  Terminal,
  ShieldAlert
} from "lucide-react";
import {
  KineticHeading,
  KineticSubline,
} from "../../components/ui/KineticText";
import Section from "../../components/layout/Section";
import Card from "../../components/ui/Card";

const members = [
  {
    name: "Nguyễn Tấn Phát",
    studentCode: "SE183397",
    role: "leader",
    gender: "male",
    task: [
      "Tìm kiếm và đóng góp tư liệu học thuật",
      "Điều phối tiến độ, rà soát học thuật",
    ],
  },
  {
    name: "Bùi Mạnh Linh",
    studentCode: "SE185068",
    role: "member",
    gender: "male",
    task: ["Biên tập nội dung thuyết trình", "Thiết kế & xây dựng website"],
  },
  {
    name: "Lý Hoàng Thành",
    studentCode: "SS181200",
    role: "member",
    gender: "male",
    task: [
      "Hỗ trợ xây dựng các nội dung trò chơi",
      "Đối chiếu nguồn chính thống, kiểm chứng trích dẫn",
    ],
  },
  {
    name: "Lê Viết Minh Trí",
    studentCode: "SE185119",
    role: "member",
    gender: "male",
    task: [
      "Thu thập tư liệu, số liệu cho website",
      "Tìm kiếm và đóng góp tư liệu học thuật",
    ],
  },
  {
    name: "Nguyễn Hoàng Gia Luân",
    studentCode: "SE183918",
    role: "member",
    gender: "male",
    task: [
      "Tìm kiếm và đóng góp tư liệu học thuật",
      "Kiểm thử và đánh giá trải nghiệm"
    ],
  },
];

const tools = [
  {
    category: "RESEARCH & DATA",
    name: "Nghiên cứu & Tổng hợp",
    tools: ["Gemini", "NotebookLM"],
    icon: Search,
    description: [
      "Phân tích, đối chiếu quan điểm giáo trình & văn kiện Đảng.",
      "Kiểm tra chéo các kiến thức lịch sử.",
      "Tìm kiếm và đóng góp tư liệu học thuật",
    ],
    color: "bg-green-100",
    border: "border-green-800",
    iconColor: "text-green-800",
    status: "OPERATIONAL"
  },
  {
    category: "WEB DEVELOPMENT",
    name: "Xây dựng Website",
    tools: ["Claude Code", "Antigravity"],
    icon: Layout,
    description: [
      "Generate code UI React/Tailwind.",
      "Tối ưu Responsive & Animation.",
      "Debug logic & Refactor code base."
    ],
    color: "bg-blue-100",
    border: "border-blue-800",
    iconColor: "text-blue-800",
    status: "ACTIVE"
  }
];

const ProfileCard = ({ member }) => {
  const isLeader = member.role === "leader";
  const isFemale = member.gender === "female";
  const avatarSrc = isFemale ? "/images/user/female.png" : "/images/user/male.png";

  return (
    <Card
      variant="default"
      hoverEffect
      className={`relative group h-full flex flex-col p-6 overflow-hidden border-2 border-ink shadow-hard bg-white`}
      hasDecorativeCorners={false}
    >
      <div className="flex justify-between items-start mb-6">
        {/* Avatar Image */}
        <div className="w-20 h-20 border-2 border-ink bg-bone shrink-0 flex items-center justify-center relative shadow-sm overflow-hidden">
          <img
            src={avatarSrc}
            alt={member.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          {isLeader && (
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-gold border-2 border-ink flex items-center justify-center shadow-sm">
              <Crown size={12} className="text-ink" />
            </div>
          )}
        </div>

        {/* Name & Role */}
        <div className="text-right flex-1 pl-4">
          <h3 className="font-display text-2xl text-ink leading-tight uppercase mb-2">
            {member.name}
          </h3>
          <div className="text-sm font-mono text-ink/60 mb-1">{member.studentCode}</div>
          <span className={`inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider border border-ink ${isLeader ? 'bg-gold text-ink' : 'bg-gray-100 text-ink/70'}`}>
            {isLeader ? "Leader" : "Member"}
          </span>
        </div>
      </div>

      {/* Tasks */}
      <div className="mt-auto border-t-2 border-dashed border-ink/20 pt-4">
        <ul className="space-y-2">
          {member.task.map((t, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm font-body text-ink leading-snug">
              <span className="mt-1.5 w-1.5 h-1.5 bg-crimson rounded-full shrink-0"></span>
              {t}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

const ToolCard = ({ item }) => {
  const Icon = item.icon;

  return (
    <Card
      variant="default"
      hoverEffect
      className="h-full flex flex-col p-6 md:p-8 bg-white border-4 border-ink shadow-hard"
      hasDecorativeCorners={false}
    >
      <div className="flex-1">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <span className={`inline-block border-2 border-ink px-3 py-1 font-bold font-mono text-xs mb-3 uppercase shadow-sm ${item.color}`}>
              {item.category}
            </span>
            <h3 className="font-display text-4xl text-ink leading-[0.9] uppercase font-black">
              {item.name}
            </h3>
          </div>

          <div className="shrink-0 p-3 border-4 border-ink bg-white shadow-sm">
            <Icon size={32} strokeWidth={1.5} className="text-ink" />
          </div>
        </div>

        {/* Tools Grid */}
        <div className="mb-6">
          <h4 className="font-bold font-mono text-xs text-ink/60 uppercase mb-2 tracking-widest">Tools Used:</h4>
          <div className="flex flex-wrap gap-2">
            {item.tools.map(t => (
              <span key={t} className="px-3 py-1 border-2 border-ink bg-bone font-bold text-sm">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Description Process */}
        <ul className="space-y-3 mb-6">
          {item.description.map((desc, i) => (
            <li key={i} className="flex items-start gap-3 text-base text-ink leading-snug">
              <ArrowRight size={20} className="text-crimson shrink-0 mt-0.5" />
              <span>{desc}</span>
            </li>
          ))}
        </ul>

        {/* Images Gallery */}
        {/* {item.images && item.images.length > 0 && (
          <div className="mb-6">
            <h4 className="font-bold font-mono text-xs text-ink/60 uppercase mb-3 tracking-widest">Screenshots:</h4>
            <div className={`grid gap-3 ${item.images.length === 1 ? 'grid-cols-1' : item.images.length === 2 ? 'grid-cols-2' : 'grid-cols-2 md:grid-cols-3'}`}>
              {item.images.map((img, i) => (
                <a 
                  key={i} 
                  href={img} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block border-2 border-ink overflow-hidden hover:shadow-hard transition-shadow duration-200 bg-ink/5"
                >
                  <img 
                    src={img} 
                    alt={`${item.name} screenshot ${i + 1}`}
                    className="w-full h-32 object-cover object-top hover:scale-105 transition-transform duration-300"
                  />
                </a>
              ))}
            </div>
          </div>
        )} */}
      </div>

      {/* Footer Status */}
      {/* <div className="mt-auto pt-4 border-t-2 border-dashed border-ink flex items-center justify-between">
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-ink/70">
          <div className={`w-2 h-2 rounded-full ${item.status === 'OPERATIONAL' ? 'bg-green-500' : item.status === 'OPTIMIZED' ? 'bg-orange-500' : 'bg-blue-500'}`}></div>
          {item.status}
        </div>
      </div> */}
    </Card>
  );
};

const ReferenceCard = ({ reference }) => {
  const getIcon = (type) => {
    switch (type) {
      case "video": return Video;
      case "document": return FileText;
      default: return Newspaper;
    }
  };

  const Icon = getIcon(reference.type);

  return (
    <a
      href={reference.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block group relative bg-white border-2 border-ink shadow-hard hover:shadow-hard-lg hover:-translate-y-1 transition-all h-full"
    >
      <div className="p-6 flex flex-col h-full">
        <div className="mb-4 flex items-center justify-between">
          <span className="inline-flex items-center gap-2 bg-bone px-2 py-1 text-xs font-bold font-mono uppercase border border-ink/20 rounded-sm">
            <Icon size={14} />
            {reference.type}
          </span>
          <ExternalLink size={16} className="text-ink/40 group-hover:text-crimson transition-colors" />
        </div>

        <h3 className="font-display text-lg font-bold text-ink leading-tight group-hover:text-crimson transition-colors line-clamp-2">
          {reference.title}
        </h3>
      </div>
    </a>
  );
};

const InformationsPage = () => {
  return (
    <div className="w-full bg-bone min-h-screen page-shell selection:bg-gold selection:text-ink">
      <Section autoHeight={true} className="pt-32 pb-24 px-4 md:px-8">

        {/* Header Section */}
        <div className="flex flex-col items-center justify-center space-y-8 max-w-5xl mx-auto w-full relative z-10 mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-orange-600 border-4 border-ink px-6 py-2 shadow-hard transform rotate-1"
          >
            <span className="font-mono font-bold uppercase tracking-widest text-sm md:text-base text-white">
              Project Profile
            </span>
          </motion.div>

          {/* Main Title Block */}
          <div className="relative text-center space-y-4">
            <motion.h1
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, type: "spring" }}
              className="font-display font-black text-6xl md:text-8xl uppercase text-ink leading-[0.85] tracking-tighter drop-shadow-hard"
            >
              HỒ SƠ
            </motion.h1>

            <motion.h1
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="font-display font-black text-6xl md:text-8xl uppercase text-transparent text-stroke-black leading-[0.85] tracking-tighter"
            >
              DỰ ÁN
            </motion.h1>
          </div>
        </div>

        {/* Team Section */}
        <div className="max-w-7xl mx-auto mb-28">
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px bg-ink/30 flex-1 max-w-[100px]"></div>
            <h2 className="text-2xl font-display font-bold text-ink uppercase tracking-widest">
              Thành viên nhóm
            </h2>
            <div className="h-px bg-ink/30 flex-1 max-w-[100px]"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {members.map((m, index) => (
              <div key={index} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] max-w-sm">
                <ProfileCard member={m} />
              </div>
            ))}
          </div>
        </div>

        {/* AI Usage Section */}
        <div className="max-w-7xl mx-auto mb-28">
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px bg-ink/30 flex-1 max-w-[100px]"></div>
            <h2 className="text-2xl font-display font-bold text-ink uppercase tracking-widest text-center">
              Ứng dụng Trí tuệ Nhân tạo (AI)
            </h2>
            <div className="h-px bg-ink/30 flex-1 max-w-[100px]"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {tools.map((item, index) => (
              <div key={item.name} className={index === 2 ? "lg:col-span-2 lg:w-2/3 lg:mx-auto" : ""}>
                <ToolCard item={item} />
              </div>
            ))}
          </div>

          {/* Academic Integrity Disclaimer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white border-4 border-ink p-8 md:p-12 text-center relative shadow-hard-lg">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-crimson text-white px-6 py-2 font-bold font-mono uppercase text-sm border-2 border-ink shadow-sm">
                Academic Integrity
              </div>

              <ShieldAlert size={64} className="text-crimson mx-auto mb-6" />

              <h3 className="font-display text-4xl text-ink uppercase mb-4">
                Cam kết học thuật
              </h3>

              <div className="space-y-4 text-ink/80 text-lg leading-relaxed max-w-2xl mx-auto">
                <p>
                  AI chỉ đóng vai trò là <strong>công cụ hỗ trợ</strong> (tra cứu, gợi ý, tối ưu mã nguồn),
                  <span className="text-crimson font-bold"> KHÔNG</span> thay thế tư duy.
                </p>
                <p>
                  Mọi nội dung chuyên môn đều được đối chiếu với <strong>Giáo trình Tư tưởng Hồ Chí Minh</strong> được cung cấp.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

      </Section>
    </div>
  );
};

export default InformationsPage;
