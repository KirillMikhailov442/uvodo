import Header from '@components/Header/Header';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import '@styles/globals.css';
import '@styles/reset.css';
import Footer from '@components/Footer/Footer';
import StoreProvider from '@components/Layouts/StoreProvider';
import MobileNavList from '@components/Header/MobileNavList/MobileNavList';
import Body from '@components/Layouts/Body';

const roboto = Roboto({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'Uvodo',
  description: 'Uvodo landing',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <Body font={roboto.className}>
          <div className="wrapper">
            <MobileNavList />
            <Header />
            <main className=" flex-grow">{children}</main>
            <Footer />
          </div>
        </Body>
      </html>
    </StoreProvider>
  );
}
