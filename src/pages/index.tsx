import { useEffect, useRef } from 'react';
import Head from 'next/head';
import gsap from 'gsap';
import Masthead from '@/components/masthead';
import About from '@/components/about';
import LogofolioAndShowreel from '@/components/logofolio-showreel';
import Projects from '@/components/project';
import ProjectsMore from '@/components/projects-more';
import Services from '@/components/services';
import MarqueeText from '@/components/marquee-text';
import AboutSecond from '@/components/about-second';
import OgImage from '../../public/open/SportNoise.jpg';
import { projects } from '@/data';
import { moreprojects } from '@/data';

export const getStaticProps = async () => {
    return {
        props: { projects: projects, moreprojects: moreprojects },
    };
};

export default function Home({ projects, moreprojects }: any) {
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
            {/* <Head>
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
            </Head> */}
            <div
                className='content-area'
                ref={(el) => (contentArea.current = el)}>
                <Masthead />
                <About />
                <LogofolioAndShowreel
                    name='/logofolio-and-showreel/showreel/showreel.svg'
                    videoSrc='showreel'
                />
                <Projects projects={projects} />
                <ProjectsMore moreprojects={moreprojects}/>
                <LogofolioAndShowreel
                    name='/logofolio-and-showreel/logofolio/logofolio.svg'
                    videoSrc='logofolio'
                />
                <MarqueeText
                    className='mt-[78px] lg:mt-[231px]'
                    text='Новая культура в спорте для больших побед в бизнесе&nbsp;'
                />
                <Services />
                <MarqueeText text='Играй ярко и побеждай красиво&nbsp;' />
                <AboutSecond />
                <MarqueeText text='Начнём новую историю ваших побед&nbsp;' />
            </div>
        </>
    );
}
