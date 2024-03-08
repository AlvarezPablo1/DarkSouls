import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Dark Souls",
};

export default function RootLayout({children,}: Readonly<{  children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <Header/>
        </header>
        <main>
          {children}
        </main>
        <footer>
          <Footer/>
        </footer>
      </body>
    </html>
  );
}
