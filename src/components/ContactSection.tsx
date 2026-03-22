export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-burgundy to-burgundy-950 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full border border-gold/5" />
        <div className="absolute bottom-10 right-10 w-56 h-56 rounded-full border border-gold/5" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left text */}
          <div>
            <p className="text-gold text-sm font-light tracking-[0.3em] uppercase mb-3">Liên Hệ</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-white mb-4 leading-snug">
              Bạn có thắc mắc
              <br />
              hay cần hỗ trợ
              <br />
              <span className="text-gold italic">thêm?</span>
            </h2>
            <p className="text-white/60 font-light text-sm leading-relaxed mb-8">
              Liên hệ với chúng tôi để được tư vấn miễn phí về các sản phẩm yến sào cao cấp.
              Đội ngũ tư vấn viên luôn sẵn sàng phục vụ bạn.
            </p>
            <a
              href="#"
              className="btn-gold inline-flex items-center gap-2 text-sm"
            >
              Liên Hệ Ngay
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Right - Contact info */}
          <div className="space-y-6">
            {[
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                ),
                label: "Hotline",
                value: "0901 234 567",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                label: "Email",
                value: "info@yensao.vn",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                label: "Địa chỉ",
                value: "123 Nguyễn Huệ, Q.1, TP.HCM",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                label: "Giờ mở cửa",
                value: "T2 - T7: 8:00 - 20:00",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-white/40 text-xs font-light uppercase tracking-wider mb-1">
                    {item.label}
                  </p>
                  <p className="text-white font-light text-sm">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
