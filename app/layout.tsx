import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCart from "@/components/FloatingCart";

export const metadata = {
  title: "ZLOY PHARM",
  description: "ЕВРОПЕЙСКИЙ СТАНДАРТ",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="min-h-screen text-neutral-900 bg-white">
        <Header />
        {children}
        <Footer />

        <FloatingCart />
      </body>
    </html>
  );
}