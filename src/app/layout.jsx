import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from './components/Header';
import Footer from './components/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
    title: "Stephen King Books",
    description: "Projeto api pública de livros do autor Stephen King",
    icons: {
        icon: "/icons/favicon.png",
    },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black`}> 
        <Header />
        <main style={{minHeight:'60vh'}}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
