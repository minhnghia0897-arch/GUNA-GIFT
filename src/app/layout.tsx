import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FarMơ Cao Cấp - Sản Phẩm Thiên Nhiên",
  description: "Trải nghiệm sự thanh lịch của sức khỏe với FarMơ cao cấp. Sản phẩm thiên nhiên chất lượng hàng đầu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
