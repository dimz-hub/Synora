import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata = {
  title: {
    default: "Carevia Solutions ",
    template: "%s | Carevia Solutions",
  },
  description:
    "Carevia Solutions provides trusted  care and staffing services across England and Wales.",
  keywords: [
    " care staffing",
    "care workers",
    "healthcare recruitment",
    "carevia solutions",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black`}
      >
        <div className = 'sticky top-0 z-50 bg-white shadow-2xl'>

        <Navbar  />
        </div>
        <PageTransition>

        {children}
        </PageTransition>
      </body>
    </html>
  );
}
