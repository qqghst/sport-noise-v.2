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
    );
}
