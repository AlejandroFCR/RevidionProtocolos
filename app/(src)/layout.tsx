import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#8C5057] text-white`}
      >
        <header className="bg-[#7A1C31]  p-5 font-semibold text-4xl">
          IPN
        </header>
        {children}
        <footer className="bg-[#7A1C31]  fixed bottom-0 w-full p-5 text-lg text-center">
          Instituto Politécnico Nacional - "La Técnica al Servicio de la Patria"
        </footer>
      </body>
    </html>
  );
}
