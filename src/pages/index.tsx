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
    return (
        <>
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
            {/* <MarqueeText
                className='mt-[78px] lg:mt-[231px]'
                direction='right'
                text='Новая культура в спорте для больших побед в бизнесе&nbsp;'
            /> */}
            <MarqueeTest
                text='Новая культура в спорте для больших побед в бизнесе&nbsp;'
                textBorder='Новая культура в спорте для больших побед в бизнесе&nbsp;'
                direction='left'
                directionBorder='right'
            />
            <Services />
            {/* <MarqueeText
                direction='left'
                text='Играй ярко и побеждай красиво&nbsp;'
            /> */}
            <MarqueeTest
                text='Играй ярко и побеждай красиво&nbsp;'
                textBorder='Играй ярко и побеждай красиво&nbsp;'
                direction='right'
                directionBorder='left'
            />

            <AboutSecond />
            {/* <MarqueeText
                direction='right'
                text='Начнём новую историю ваших побед&nbsp;'
            /> */}
            <MarqueeTest
                text='Начнём новую историю ваших побед&nbsp;'
                textBorder='Начнём новую историю ваших побед&nbsp;'
                direction='left'
                directionBorder='right'
            />
            <Footer />
        </>
    );
}
