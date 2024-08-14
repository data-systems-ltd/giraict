import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/navigation";
import { SideBar } from "./sideBar";
import { CategoryLayout } from "./categoryLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GIRAICT",
  description: "Online Electronic device market",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CategoryLayout>{children}</CategoryLayout>
        
        </body>
    </html>
  );
}
