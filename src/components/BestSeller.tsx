export default function BestSeller() {
  const productImages = [
    "/images/product-1.svg",
    "/images/product-2.svg",
    "/images/product-3.svg",
  ];

  const products = [
    {
      name: "Hộp Quà Cưới Happy Wedding - Đỏ",
      price: "1.200.000đ",
      originalPrice: "1.500.000đ",
      badge: "Bán Chạy",
      rating: 5,
      reviews: 128,
      image: productImages[0],
    },
    {
      name: "Mật Ong Amber Whisper Cao Cấp",
      price: "2.500.000đ",
      originalPrice: "3.000.000đ",
      badge: "Yêu Thích",
      rating: 5,
      reviews: 95,
      image: productImages[1],
    },
    {
      name: "Hộp Quà Cưới Happy Wedding - Xanh",
      price: "800.000đ",
      originalPrice: "950.000đ",
      badge: null,
      rating: 5,
      reviews: 72,
      image: productImages[2],
    },
    {
      name: "Combo Quà Cưới Đỏ & Xanh",
      price: "3.800.000đ",
      originalPrice: "4.500.000đ",
      badge: "Giới Hạn",
      rating: 5,
      reviews: 43,
      image: productImages[0],
    },
    {
      name: "Set Quà Tặng Mật Ong & Bánh",
      price: "2.100.000đ",
      originalPrice: "2.600.000đ",
      badge: null,
      rating: 4,
      reviews: 156,
      image: productImages[1],
    },
    {
      name: "Hộp Quà Cưới Xanh Nhỏ",
      price: "350.000đ",
      originalPrice: "450.000đ",
      badge: "Mới",
      rating: 5,
      reviews: 67,
      image: productImages[2],
    },
  ];

  return (
    <section id="products" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-12">
          <p className="text-gold text-sm font-light tracking-[0.3em] uppercase mb-3">Bộ Sưu Tập</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-burgundy mb-4">Sản Phẩm Bán Chạy</h2>
          <div className="w-20 h-[1px] bg-gold mx-auto mb-6" />
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm text-burgundy hover:text-gold border border-burgundy hover:border-gold px-6 py-2 rounded-full transition-all duration-300"
          >
            Xem Tất Cả
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
          {products.map((product, i) => (
            <div
              key={i}
              className="product-card bg-white rounded-xl overflow-hidden border border-gray-100 group"
            >
              {/* Image area */}
              <div className="relative aspect-square bg-gradient-to-b from-cream to-white p-6 flex items-center justify-center overflow-hidden">
                {product.badge && (
                  <div className="ribbon">{product.badge}</div>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 absolute inset-0"
                />
                {/* Quick actions overlay */}
                <div className="absolute inset-0 bg-burgundy/0 group-hover:bg-burgundy/10 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
                    <button className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gold hover:text-white transition-colors" aria-label="Xem nhanh">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                    <button className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gold hover:text-white transition-colors" aria-label="Yêu thích">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="font-sans text-sm font-medium text-gray-800 mb-2 line-clamp-2 leading-snug">
                  {product.name}
                </h3>
                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <svg
                      key={s}
                      className={`w-3 h-3 ${s < product.rating ? "text-gold" : "text-gray-200"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-gray-400 text-[10px] ml-1">({product.reviews})</span>
                </div>
                {/* Price */}
                <div className="flex items-center gap-2">
                  <span className="text-burgundy font-semibold text-sm">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-gray-400 text-xs line-through">{product.originalPrice}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
