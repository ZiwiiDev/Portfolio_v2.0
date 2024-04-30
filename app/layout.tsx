import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import NavBar from "@/components/main/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio · Oliver Fabián Stetcu Stepanov",
  description: "Portfolio by Oliver Fabián Stetcu Stepanov",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
        >
          <StarsCanvas />
          <NavBar />
        {children}
      </body>
    </html>
  );
}
