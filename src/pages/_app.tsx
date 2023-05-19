import '@/styles/globals.scss';
import '@/styles/masthead-about.scss';
import '@/styles/custom-cursor.scss';
import '@/styles/reset.scss';
import '@/styles/selection.scss';
import '@/styles/services.scss';
import '@/styles/footer.scss';
import '@/styles/swiper.scss';
import '@/styles/custom-checkbox.scss';
import '@/styles/split-type.scss';
import '@/styles/input.scss';
import '@/styles/routes.scss';

import Head from 'next/head';
import OgImage from '../../public/open/SportNoise.jpg';
import type { AppProps } from 'next/app';
import { Montserrat } from 'next/font/google';

import { ScrollBlockProvider } from '@/hooks/useScrollBlock';
import CursorManager from '@/ui/custom-cursor/cursor-manager';
import CustomCursor from '@/ui/custom-cursor';
import Layout from '@/components/layout';

const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat',
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
             <Head>
                <title>Sport Noise</title>
                <meta
                    name='description'
                    content='SportNoise. Логодизайн, бренд-айдентика, событийном брендинг.
                    Digital-решения для развития спортивных и клубных брендов.'
                />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link
                    rel='icon'
                    href='/favicon/favicon.png'
                />
                <meta
                    property='og:title'
                    content='Sport Noise'
                />
                <meta
                    property='og:description'
                    content='SportNoise. Логодизайн, бренд-айдентика, событийном брендинг.
                    Digital-решения для развития спортивных и клубных брендов.'
                />
                <meta
                    property='og:image'
                    content={OgImage.src}
                />
            </Head>
            <main className={`${montserrat.variable} font-sans`}>
                <ScrollBlockProvider>
                    <CursorManager>
                        <div>
                            <CustomCursor />
                            <Layout>
                                <Component {...pageProps} />
                            </Layout>
                        </div>
                    </CursorManager>
                </ScrollBlockProvider>
            </main>
        </>
    );
}
