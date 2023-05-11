import { useEffect, useRef } from 'react';
import Head from 'next/head';
import gsap from 'gsap';
import Navbar from '@/components/navbar';
import Masthead from '@/components/masthead';
import About from '@/components/about';
import LogofolioAndShowreel from '@/components/logofolio-showreel';
import Projects from '@/components/project';
import ProjectsMore from '@/components/projects-more';
import Services from '@/components/services';
import MarqueeText from '@/components/marquee-text';
import AboutSecond from '@/components/about-second';
import Footer from '@/components/footer';
import MarqueeTest from '@/components/marquee-test';

export default function Home() {
    let contentArea = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        if (contentArea.current) {
            gsap.to(contentArea.current, {
                css: { visibility: 'visible' },
                duration: 0,
            });
        }
    });
    return (
        <>
            <Head>
                <title>Sport Noise</title>
                <meta
                    name='description'
                    content='Создаем и оптимизируем спортивные бренды, помогаем компаниям
                    реализовывать свой digital-потенциал. Меняем спортивную
                    культуру, улучшаем узнаваемость и позиционирование, чтобы
                    игра была яркой, а победа красивой'
                />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link
                    rel='icon'
                    href='/favicon/favicon.png'
                />
            </Head>
            <div
                className='content-area'
                ref={(el) => (contentArea.current = el)}>
                <Navbar />
                <Masthead />
                <About />
                <LogofolioAndShowreel
                    name='/logofolio-and-showreel/showreel/showreel.svg'
                    videoSrc='showreel'
                />
                <Projects />
                <ProjectsMore />
                <LogofolioAndShowreel
                    name='/logofolio-and-showreel/logofolio/logofolio.svg'
                    videoSrc='logofolio'
                />
                <MarqueeText
                    className='mt-[78px] lg:mt-[231px]'
                    text='Новая культура в спорте для больших побед в бизнесе&nbsp;'
                />
                {/* <MarqueeTest
                text='Новая культура в спорте для больших побед в бизнесе&nbsp;'
                textBorder='Новая культура в спорте для больших побед в бизнесе&nbsp;'
                direction='left'
                directionBorder='right'
            /> */}
                <Services />
                <MarqueeText text='Играй ярко и побеждай красиво&nbsp;' />
                {/* <MarqueeTest
                text='Играй ярко и побеждай красиво&nbsp;'
                textBorder='Играй ярко и побеждай красиво&nbsp;'
                direction='right'
                directionBorder='left'
            /> */}

                <AboutSecond />
                <MarqueeText text='Начнём новую историю ваших побед&nbsp;' />
                {/* <MarqueeTest
                text='Начнём новую историю ваших побед&nbsp;'
                textBorder='Начнём новую историю ваших побед&nbsp;'
                direction='left'
                directionBorder='right'
            /> */}
                <Footer />
            </div>
        </>
    );
}
