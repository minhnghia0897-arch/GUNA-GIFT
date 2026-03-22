"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-burgundy text-white py-2 overflow-hidden relative">
        <div className="animate-scroll whitespace-nowrap flex">
          <span className="mx-8 text-sm font-light tracking-wide">
            🎁 Miễn phí vận chuyển cho đơn hàng từ 500.000đ | Đặt hàng trước 14h để giao hàng trong ngày | Không giao hàng vào Chủ Nhật
          </span>
          <span className="mx-8 text-sm font-light tracking-wide">
            🎁 Miễn phí vận chuyển cho đơn hàng từ 500.000đ | Đặt hàng trước 14h để giao hàng trong ngày | Không giao hàng vào Chủ Nhật
          </span>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-burgundy/95 backdrop-blur-sm sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center">
                  <span className="text-gold font-serif text-xl font-bold">燕</span>
                </div>
                <div>
                  <h1 className="text-gold font-serif text-xl font-bold tracking-wider">FarMơ</h1>
                  <p className="text-gold-200 text-[10px] tracking-[0.2em] uppercase font-light">Cao Cấp</p>
                </div>
              </a>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {[
                { label: "Trang Chủ", href: "#" },
                { label: "Sản Phẩm", href: "#products" },
                { label: "Giới Thiệu", href: "#about" },
                { label: "Hướng Dẫn", href: "#guide" },
                { label: "Thành Viên", href: "#membership" },
                { label: "Liên Hệ", href: "#contact" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white/90 hover:text-gold text-sm font-light tracking-wide transition-colors duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Right side icons */}
            <div className="hidden md:flex items-center space-x-5">
              <button className="text-white/80 hover:text-gold transition-colors" aria-label="Tìm kiếm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="text-white/80 hover:text-gold transition-colors" aria-label="Tài khoản">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
              <button className="text-white/80 hover:text-gold transition-colors relative" aria-label="Giỏ hàng">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-gold text-burgundy-900 text-[10px] font-bold rounded-full flex items-center justify-center">0</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-burgundy-900 border-t border-gold/20">
            <div className="px-4 py-4 space-y-3">
              {["Trang Chủ", "Sản Phẩm", "Giới Thiệu", "Hướng Dẫn", "Thành Viên", "Liên Hệ"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="block text-white/80 hover:text-gold text-sm font-light tracking-wide py-2 transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        )}
      </header>
    </>
  );
}
