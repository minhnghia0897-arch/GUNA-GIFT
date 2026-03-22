import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yến Sào Cao Cấp - Tổ Yến Thiên Nhiên",
  description: "Trải nghiệm sự thanh lịch của sức khỏe với Yến Sào cao cấp. Sản phẩm tổ yến thiên nhiên chất lượng hàng đầu.",
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
