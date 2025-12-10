import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import I18nProvider from "@/components/I18nProvider";

export const metadata: Metadata = {
  title: "EMECE YAZILIM",
  description: "Education and Consultancy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <I18nProvider>
          <Navbar />
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
