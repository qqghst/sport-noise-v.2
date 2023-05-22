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
            className='bg-white mt-[77px] md:mt-[136px] mb-[77px] md:mb-[268px] px-5 md:px-[64px] lg:px-[128px]'
            id='aboutSecond'>
            <div className=''>
                <h4 className='text-[21px] xl:text-[37px] tracking-[-0.5px] leading-[52px] font-medium text-blue pb-[32px]'>
                    О нас
                </h4>
                <p
                    ref={aboutSecondRef}
                    className='text-[20px] lg:text-[28px] xl:text-[37px] tracking-[-0.5px] xl:tracking-[-0.2px] leading-[30px] lg:leading-[38px] xl:leading-[52px] font-medium text-black w-full sm:w-[90%] xl:w-[80%]'>
                    Мы, digital-студия «SportNoise», специализируемся на
                    визуальном дизайне и коммуникациях. Решаем маркетинговые
                    задачи с помощью адаптивных digital-сценариев и продуктовых
                    дизайн-концепций. Для нас каждый проект — это уникальная
                    история с характером и традициями. Поэтому мы усиливаем
                    иммерсивные стороны бренда и создаем особую эмоциональную
                    связь с аудиторией
                </p>
            </div>
        </section>
    );
};

export default AboutSecond;
