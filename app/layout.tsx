import type { Metadata } from "next";
import { Inter, Lobster, Montserrat } from "next/font/google";
import Header from "./components/header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const police = Lobster({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lobster",
  weight: "400",
});

const police1 = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-Montserrat",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${police.variable} ${police1.variable}`}>
      <body className={inter.className}>
        <div className="flex justify-center items-center w-full">
          <div className="flex flex-col max-w-[1450px] w-full">
     
          {children}
        </div>
        </div>
      </body>
    </html>
  );
}
