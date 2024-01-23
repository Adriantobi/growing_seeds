import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextAuthProvider } from "./Providers";
import NavBar from "./components/navbar";
import CallToActionSection from "./sections/call-to-action";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Growing Seeds",
  description: "Take control of your church's financial future today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <NextAuthProvider>
        <body className={inter.className}>
          <NavBar />
          {children}
          <CallToActionSection />
        </body>
      </NextAuthProvider>
    </html>
  );
}
