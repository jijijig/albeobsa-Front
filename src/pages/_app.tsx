import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '@/components/navbar';
import Leftbar from '@/components/leftbar';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className={inter.className}>
            <div className="nav-barContainer">
                <Navbar />
            </div>

            <div className="contents-Container">
                <div className="contents-Left-Container">
                    <Leftbar />
                </div>
                <div className="contents-Right-Container">
                    <Component {...pageProps} />
                </div>
            </div>
        </div>
    );
}
