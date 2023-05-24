import { FC, useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type';

const Masthead: FC = () => {
    const [isReady, setIsReady] = useState(false);
    const h1Ref = useRef<HTMLHeadingElement | null>(null);

    useEffect(() => {
        if (isReady) {
            gsap.registerPlugin(ScrollTrigger);
            const tl = gsap.timeline();

            const splitParent = new SplitType(h1Ref.current!, {
                types: 'lines',
                lineClass: styles['lineParent'],
            });

            const split = new SplitType(splitParent?.lines ?? [], {
                types: 'lines',
            });

            tl.fromTo(
                split.lines,
                {
                    opacity: 0,
                    y: 500,
                },
                {
                    duration: 1.2,
                    opacity: 1,
                    y: 0,
                    stagger: 0.1,
                    ease: 'power2',
                }
            );
        }
    }, [isReady]);

    useEffect(() => {
        setIsReady(true);
    }, []);
    return (
        <section
            className={`${styles.mastheadContainer} mb-[45px] md:mb-[106px] px-5 md:px-[64px] lg:px-[128px]`}
            id='masthead'>
            <div className='w-full h-[263px] md:h-[500px]'>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    data-scroll
                    className={`${styles.videoContainer} absolute w-full h-full object-cover `}>
                    <source
                        src='/masthead/masthead-video.mp4'
                        type='video/mp4; codecs=hvc1'
                    />
                    <source
                        src='/masthead/masthead-video.webm'
                        type='video/webm; codecs=vp9'
                    />
                </video>
                {isReady && (
                    <div className='masthead-container '>
                        <h1
                            ref={h1Ref}
                            className='text-[26px] sm:text-[32px] md:text-[40px] lg:text-[40px] xl:text-[57px] font-medium tracking-[-0.5px] lg:tracking-[-1px] leading-[30px] lg:leading-[57px] text-blue absolute bottom-[20px] md:bottom-[48px] lg:bottom-[64px] xl:bottom-[72px]'>
                            Digital-решения для
                            <br />
                            развития спортивных
                            <br />и клубных брендов
                        </h1>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Masthead;
