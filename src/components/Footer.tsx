export default function Footer() {
  return (
    <footer className="bg-burgundy-950 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center">
                <span className="text-gold font-serif text-lg font-bold">燕</span>
              </div>
              <div>
                <h3 className="text-gold font-serif text-lg font-bold">Yến Sào</h3>
                <p className="text-gold/50 text-[10px] tracking-[0.2em] uppercase">Cao Cấp</p>
              </div>
            </div>
            <p className="text-white/40 font-light text-sm leading-relaxed mb-6">
              Chuyên cung cấp yến sào thiên nhiên cao cấp, chất lượng hàng đầu Việt Nam.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {["facebook", "instagram", "youtube", "tiktok"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:bg-gold hover:border-gold hover:text-white transition-all duration-300"
                  aria-label={social}
                >
                  <span className="text-xs capitalize">{social.charAt(0).toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-gold font-serif text-sm mb-6 tracking-wider">Liên Kết Nhanh</h4>
            <ul className="space-y-3">
              {["Trang Chủ", "Sản Phẩm", "Giới Thiệu", "Hướng Dẫn"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/40 hover:text-gold text-sm font-light transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-gold font-serif text-sm mb-6 tracking-wider">Hỗ Trợ</h4>
            <ul className="space-y-3">
              {["Chính Sách Giao Hàng", "Đổi Trả & Hoàn Tiền", "Thành Viên", "Liên Hệ"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/40 hover:text-gold text-sm font-light transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-gold font-serif text-sm mb-6 tracking-wider">Nhận Ưu Đãi</h4>
            <p className="text-white/40 text-sm font-light mb-4">
              Đăng ký để nhận thông tin khuyến mãi mới nhất.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email của bạn"
                className="flex-1 bg-white/5 border border-white/10 rounded-l-lg px-3 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-gold/50"
              />
              <button className="bg-gold text-burgundy-950 px-4 py-2 rounded-r-lg text-sm font-semibold hover:bg-gold-400 transition-colors">
                Gửi
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs font-light">
            &copy; 2026 Yến Sào Cao Cấp. Đã đăng ký bản quyền.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/30 hover:text-gold text-xs font-light transition-colors">
              Điều khoản sử dụng
            </a>
            <a href="#" className="text-white/30 hover:text-gold text-xs font-light transition-colors">
              Chính sách bảo mật
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
