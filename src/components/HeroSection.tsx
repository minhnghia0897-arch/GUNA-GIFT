"use client";

export default function HeroSection() {
  return (
    <section className="relative bg-burgundy min-h-[85vh] flex items-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-burgundy-950/80 via-burgundy/60 to-burgundy-800/90" />

        {/* Decorative circles */}
        <div className="absolute top-10 right-10 w-72 h-72 rounded-full border border-gold/10" />
        <div className="absolute top-20 right-20 w-56 h-56 rounded-full border border-gold/5" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-burgundy-900/30" />

        {/* Gold accent lines */}
        <div className="absolute top-0 left-1/3 w-[1px] h-full bg-gradient-to-b from-gold/0 via-gold/10 to-gold/0" />
        <div className="absolute top-0 right-1/3 w-[1px] h-full bg-gradient-to-b from-gold/0 via-gold/5 to-gold/0" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="fade-in-up">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              <span className="text-gold text-xs font-light tracking-widest uppercase">Chất lượng hàng đầu</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Trải Nghiệm
              <br />
              <span className="text-gold italic">Sự Thanh Lịch</span>
              <br />
              Của Sức Khỏe
              <br />
              Với <span className="gold-shimmer">FarMơ</span>
            </h1>

            <p className="text-white/70 text-base font-light leading-relaxed mb-8 max-w-lg">
              FarMơ cao cấp, được tuyển chọn kỹ lưỡng từ những nguồn nguyên liệu thiên nhiên.
              Sản phẩm tinh khiết, giàu dinh dưỡng, mang đến sức khỏe và vẻ đẹp cho gia đình bạn.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#products" className="btn-gold inline-flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Khám Phá Ngay
              </a>
              <a href="#about" className="btn-outline-gold inline-flex items-center gap-2">
                Tìm Hiểu Thêm
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-8 mt-10 pt-8 border-t border-white/10">
              <div className="text-center">
                <p className="text-gold font-serif text-2xl font-bold">100%</p>
                <p className="text-white/50 text-xs font-light">Thiên Nhiên</p>
              </div>
              <div className="w-[1px] h-10 bg-white/10" />
              <div className="text-center">
                <p className="text-gold font-serif text-2xl font-bold">10K+</p>
                <p className="text-white/50 text-xs font-light">Khách Hàng</p>
              </div>
              <div className="w-[1px] h-10 bg-white/10" />
              <div className="text-center">
                <p className="text-gold font-serif text-2xl font-bold">5★</p>
                <p className="text-white/50 text-xs font-light">Đánh Giá</p>
              </div>
            </div>
          </div>

          {/* Right - Product showcase */}
          <div className="relative flex justify-center items-center">
            {/* Decorative ring */}
            <div className="absolute w-80 h-80 lg:w-96 lg:h-96 rounded-full border-2 border-gold/20 animate-float" />
            <div className="absolute w-72 h-72 lg:w-80 lg:h-80 rounded-full border border-gold/10" style={{ animationDelay: "0.5s" }} />

            {/* Product image placeholder */}
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 border-2 border-gold/30 flex items-center justify-center animate-float shadow-2xl shadow-gold/10">
              <div className="text-center">
                <div className="text-6xl lg:text-7xl mb-2">🏺</div>
                <p className="text-gold font-serif text-lg font-semibold">FarMơ</p>
                <p className="text-gold/60 text-xs font-light">Cao Cấp</p>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute top-5 right-5 lg:right-10 bg-white/10 backdrop-blur-md border border-gold/20 rounded-xl px-4 py-3 animate-float" style={{ animationDelay: "1s" }}>
              <p className="text-gold text-xs font-semibold">Nguyên Chất</p>
              <p className="text-white/60 text-[10px]">100% tự nhiên</p>
            </div>

            <div className="absolute bottom-10 left-0 lg:left-5 bg-white/10 backdrop-blur-md border border-gold/20 rounded-xl px-4 py-3 animate-float" style={{ animationDelay: "1.5s" }}>
              <p className="text-gold text-xs font-semibold">Chứng Nhận</p>
              <p className="text-white/60 text-[10px]">An toàn thực phẩm</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0,60 C360,100 720,20 1080,60 C1260,80 1380,70 1440,60 L1440,100 L0,100 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
