import { Header } from '@/components';
import { Footer } from '@/components/Footer/Footer';
import type { Metadata } from 'next';
import { Playfair, Roboto } from 'next/font/google';
import './tailwind.css';

// const geistSans = Geist({
//     variable: '--font-geist-sans',
//     subsets: ['latin'],
// });

const roboto = Roboto({
    variable: '--font-roboto',
    weight: ['400', '700'],
});

const playfair = Playfair({
    variable: '--font-playfair',
    weight: ['400', '700'],
});
export const metadata: Metadata = {
    title: 'Kikko News',
    description: 'News Portal',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${playfair.variable} ${roboto.variable} flex min-h-screen flex-col antialiased`}>
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
