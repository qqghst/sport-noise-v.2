import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type';

const AboutSecond: React.FC = () => {
    const aboutSecondRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const setupSplits = () => {
            const tl = gsap.timeline({});

            const splitParent = new SplitType(aboutSecondRef.current!, {
                types: 'lines',
                lineClass: 'lineParent',
            });

            const split = new SplitType(splitParent?.lines ?? [], {
                types: 'lines',
            });

            tl.from(split.lines, {
                duration: 1,
                y: 20,
                opacity: 0,
                stagger: 0.1,
            });

            ScrollTrigger.create({
                animation: tl,
                trigger: aboutSecondRef.current!,
                start: 'top 90%%',
                toggleActions: 'play none none none',
            });
        };

        setupSplits();
    }, []);
    return (
        <section
            className='bg-white mt-[77px] md:mt-[136px] mb-[77px] md:mb-[268px] px-5 md:px-[64px] lg:px-[128px] '
            id='about-second'>
            <div className='mx-auto flex flex-col'>
                <h4 className='xl: text-[37px] tracking-[-1%] leading-[52px] font-medium text-blue pb-[32px]'>
                    О нас
                </h4>
                <p
                    ref={aboutSecondRef}
                    className='text-[23px] lg:text-[28px] 2xl:text-[37px] tracking-[-0.5px] 2xl:tracking-[-1px] leading-[30px] lg:leading-[38px] 2xl:leading-[52px] font-medium text-black w-full sm:w-[90%] md:w-[85%] lg:w-[75%] 2xl:lg-[70px]'>
                    Мы команда digital-студии спортивного дизайна с обширным
                    фронтом реализуемых задач и практическим опытом в области
                    развития спортивного бизнеса. Работая в отрасли спорта,
                    фитнеса и околоспортивных сферах, мы занимаемся продвижением
                    спортивных проектов, усиливаем качественные аспекты бренда и
                    реализуем маркетинговые задачи путем внедрения визуальных и
                    креативных решений.
                </p>
            </div>
        </section>
    );
};

export default AboutSecond;
