export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-16">
          <p className="text-gold text-sm font-light tracking-[0.3em] uppercase mb-3">Về Chúng Tôi</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-burgundy mb-4">
            FarMơ Thiên Nhiên Cao Cấp
            <br />
            <span className="text-gold italic">Với Nguyên Liệu Tinh Khiết</span>
          </h2>
          <div className="w-20 h-[1px] bg-gold mx-auto mb-6" />
          <p className="text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
            Chúng tôi tự hào mang đến những sản phẩm FarMơ chất lượng hàng đầu,
            được chế biến từ nguồn nguyên liệu thiên nhiên, tinh khiết và an toàn.
          </p>
        </div>

        {/* Three pillars */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "📜",
              title: "Công Thức\nTruyền Thống",
              desc: "Kế thừa tinh hoa từ những công thức cổ truyền, kết hợp với công nghệ chế biến hiện đại.",
            },
            {
              icon: "🏺",
              title: "FarMơ\nChất Lượng",
              desc: "Tuyển chọn kỹ lưỡng từ những nguồn nguyên liệu thiên nhiên, đảm bảo chất lượng từng sản phẩm.",
            },
            {
              icon: "⚙️",
              title: "Quy Trình\nSản Xuất",
              desc: "Quy trình sản xuất khép kín, đạt tiêu chuẩn an toàn vệ sinh thực phẩm quốc tế.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group relative bg-gradient-to-b from-cream to-white border border-gold/10 rounded-2xl p-8 text-center hover:shadow-xl hover:shadow-burgundy/5 transition-all duration-500"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-burgundy/5 flex items-center justify-center text-4xl group-hover:bg-burgundy/10 transition-colors">
                {item.icon}
              </div>
              <h3 className="font-serif text-xl text-burgundy mb-3 whitespace-pre-line leading-snug">
                {item.title}
              </h3>
              <p className="text-gray-500 font-light text-sm leading-relaxed">
                {item.desc}
              </p>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gold group-hover:w-1/2 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
