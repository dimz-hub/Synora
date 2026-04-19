import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import { heroFont3 } from "./utils/font";
import ChatWidget from "@/components/ChatWidget";

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
    default: "Synora Staffing Solutions ",
    template: "%s | Synora Staffing Solutions",
  },
  description:
    "Synora Staffing Solutions provides trusted  care and staffing services across The United Kingdom.",
  keywords: [
    " care staffing",
    "care workers",
    "healthcare recruitment",
    "synora staffing solutions",
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
        className={`${heroFont3.className} ${geistMono.variable} antialiased bg-white text-black`}
      >
        <div className = ''>

        <Navbar  />
        </div>
        <PageTransition>
        
        {children}
        </PageTransition>
        <ChatWidget className= 'shadow-lg' />
      </body>
    </html>
  );
}
