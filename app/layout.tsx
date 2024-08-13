import Footer from './baitap/Footer';
import Header from './baitap/Header';
import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rikkei Academy',
  description: 'Đây là trang web của Rikkei Academy',
  icons: {
    icon: '/favicon.png', 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" /> 
      </head>
      <body>
        Bài 7
        <Header/>
        Bài 8
        <Footer/>
        {children}
      </body>
    </html>
  );
}
