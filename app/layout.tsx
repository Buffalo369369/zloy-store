import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCart from "@/components/FloatingCart";

export const metadata = {
  title: "ZLOY PHARM",
  description: "ЕВРОПЕЙСКИЙ СТАНДАРТ",
  openGraph: {
    title: "ZLOY PHARM",
    description: "ЕВРОПЕЙСКИЙ СТАНДАРТ",
    url: "https://zloy-pharm-gr.vercel.app",
    siteName: "ZLOY PHARM",
    images: [
      {
        url: "https://zloy-pharm-gr.vercel.app/og-imagene.jpg",
        width: 1200,
        height: 630,
        alt: "ZLOY PHARM",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
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