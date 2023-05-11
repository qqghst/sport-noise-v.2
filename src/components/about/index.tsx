import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type';

const About: React.FC = () => {
    const refAbout = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        function setupSplits() {
            const tl = gsap.timeline({ delay: 0.3 });

            const splitParent = new SplitType(refAbout.current!, {
                types: 'lines',
                lineClass: 'lineParent',
            });

            const split = new SplitType(splitParent?.lines ?? [], {
                types: 'lines',
            });

            tl.from(split.lines, {
                duration: 0.8,
                y: 20,
                opacity: 0,
                stagger: 0.1,
            });

            ScrollTrigger.create({
                animation: tl,
                trigger: refAbout.current!,
                start: 'top 90%',
                toggleActions: 'play none none none',
            });
        }

        setupSplits();
    }, []);
    return (
        <section className='bg-white mb-[48px] md:mb-[106px] px-5 md:px-[64px] lg:px-[128px]'>
            <div className='about-container'>
                <p
                    ref={refAbout}
                    className='text-[23px] lg:text-[28px] xl:text-[37px] tracking-[-0.5px] xl:tracking-[-0.2px] leading-[30px] lg:leading-[38px] xl:leading-[52px] font-medium text-black w-full sm:w-[90%] md:w-[85%] lg:w-[92%] xl:lg-[70px]'>
                    Создаем и оптимизируем спортивные бренды, помогаем компаниям
                    реализовывать свой digital-потенциал. Меняем спортивную
                    культуру, улучшаем узнаваемость и позиционирование, чтобы
                    игра была яркой, а победа красивой
                </p>
            </div>
        </section>
    );
};

export default About;
