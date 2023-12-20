import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AuthProvider from "./AuthProvider";
import Navbar from "./Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OGSM App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={inter.className + " font-medium antialiased"}>
          {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        > */}
          <Navbar />
          {children}
          <Toaster />
          {/* </ThemeProvider> */}
        </body>
      </html>
    </AuthProvider>
  );
}
