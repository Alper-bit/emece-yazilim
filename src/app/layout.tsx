import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { NavigationMenu } from "@/components/ui/navigation-menu";
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
    <html lang="en" className="dark h-screen overflow-hidden">
      <body className="antialiased h-screen overflow-hidden bg-background">
        <I18nProvider>
          <div className="relative flex h-screen flex-col overflow-hidden">
            <Navbar />
            <main className="flex-1 overflow-y-auto overflow-x-hidden relative custom-scrollbar">
              {children}
            </main>
          </div>
        </I18nProvider>
      </body>
    </html>
  );
}
