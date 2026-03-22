export default function VideoSection() {
  return (
    <section id="guide" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-12">
          <p className="text-gold text-sm font-light tracking-[0.3em] uppercase mb-3">Hướng Dẫn</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-burgundy mb-4">
            Cách Chế Biến Yến Sào?
          </h2>
          <div className="w-20 h-[1px] bg-gold mx-auto" />
        </div>

        {/* Video embed placeholder */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-burgundy/10 border border-gold/10">
          <div className="aspect-video bg-gradient-to-br from-burgundy-950 to-burgundy flex items-center justify-center relative">
            {/* Decorative text */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <span className="text-gold font-serif text-[120px] font-bold">燕窩</span>
            </div>

            {/* Play button */}
            <div className="relative z-10 text-center">
              <button className="w-20 h-20 bg-gold/90 hover:bg-gold rounded-full flex items-center justify-center shadow-xl shadow-gold/30 transition-all duration-300 hover:scale-110 mx-auto mb-4" aria-label="Phát video">
                <svg className="w-8 h-8 text-burgundy-950 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
              <p className="text-white font-serif text-xl">Cách Chưng Yến Sào Đúng Cách</p>
              <p className="text-white/50 text-sm font-light mt-2">Xem video hướng dẫn chi tiết</p>
            </div>

            {/* YouTube-like overlay */}
            <div className="absolute bottom-4 left-4 flex items-center gap-2">
              <div className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.45.029 5.804 0 12c.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0C23.512 20.55 23.971 18.196 24 12c-.029-6.185-.484-8.549-4.385-8.816zM9 16V8l8 4-8 4z" />
                </svg>
                YouTube
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
