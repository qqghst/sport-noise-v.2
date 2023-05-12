import React, { useState } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import ProjectSlider from '@/components/projects-slider';
import {
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    imgMobile1,
    imgMobile2,
    imgMobile3,
    imgMobile4,
    imgMobile5,
    imgMobile6,
    imgMobile7,
    imgMobile8,
    imgMobile9,
} from '../../../../public/projects/routing/NHLiga-Festival/index';
import Text from '@/ui/routes/text';

const NHLigaFestival: React.FC = () => {
    const images = [
        { src: img1.src, mobileSrc: imgMobile1.src },
        { src: img2.src, mobileSrc: imgMobile2.src },
        { src: img3.src, mobileSrc: imgMobile3.src },
        { src: img4.src, mobileSrc: imgMobile4.src },
        { src: img5.src, mobileSrc: imgMobile5.src },
        { src: img6.src, mobileSrc: imgMobile6.src },
        { src: img7.src, mobileSrc: imgMobile7.src },
        { src: img8.src, mobileSrc: imgMobile8.src },
        { src: img9.src, mobileSrc: imgMobile9.src },
        { src: img10.src },
        { src: img11.src },
    ];

    const [currentProjectIndex, setCurrentProjectIndex] = useState(3);

    const handleSlideChange = (swiper: any) => {
        setCurrentProjectIndex(swiper.activeIndex);
    };
    const [designAudit, setDesignAudit] = useState(false);
    const [joinTenderChecked, setJoinTenderChecked] = useState(false);
    return (
        <section>
            {/* <div className='absolute xl:left-1/2 xl:-translate-x-1/2 translate-y-[900px] text-[#ACC7FF] px-6 xl:px-0 text-text-routing'>
                <h1 className='text-[24px] 2xl:text-[32.67px] -tracking-[0.6px] lg:tracking-[0.6px] leading-[36px] lg:leading-[48.3px] pb-[20px]'>
                    «Фестиваль хоккея 2021» для Ночной Лиги (NHLiga), 2021
                </h1>
                <p className='text-[14px] 2xl:text-[18.33px] tracking-[0.5px] leading-[28px] lg:leading-[34px] pb-[54px] lg:pb-[23px]'>
                    Самый масштабный проект любительского хоккея в России. Финал
                    сезона ежегодно проходит в мае на берегу Черного моря — в
                    Олимпийской деревне Сочи. Знаковое событие объединяет тысячи
                    зрителей и лучших из лучших среди 1 207 команд и 23 272
                    участников. Разработали идейно-художественную базу, создали
                    концептуальный нарратив и изготовление фирменный мерч
                    фестиваля. Для финального этапа 2020/21 отрисовали
                    стилизованную иллюстрацию с выдающимися игроками прошлых
                    сезонов, которая стала ключевым визуальным образом
                    фестиваля.
                </p>
                <p className='text-[13px] 2xl:text-[16.67px] tracking-[1px] leading-[22px] lg:leading-[28.3px]'>
                    Продюсирование события, разработка ключевых нарративов, мерч
                </p>
            </div> */}
            <Text
                title='«Фестиваль хоккея 2021» для Ночной Лиги (NHLiga), 2021'
                paragraph='Самый масштабный проект любительского хоккея в России. Финал
                    сезона ежегодно проходит в мае на берегу Черного моря — в
                    Олимпийской деревне Сочи. Знаковое событие объединяет тысячи
                    зрителей и лучших из лучших среди 1 207 команд и 23 272
                    участников. Разработали идейно-художественную базу, создали
                    концептуальный нарратив и изготовление фирменный мерч
                    фестиваля. Для финального этапа 2020/21 отрисовали
                    стилизованную иллюстрацию с выдающимися игроками прошлых
                    сезонов, которая стала ключевым визуальным образом
                    фестиваля.'
                ending='Продюсирование события, разработка ключевых нарративов, мерч'
                color='#ACC7FF'
            />
            <Navbar  designAudit={designAudit}
                setDesignAudit={setDesignAudit}
                joinTenderChecked={joinTenderChecked}
                setJoinTenderChecked={setJoinTenderChecked}/>
            {images.map((image, index) => (
                <picture key={index}>
                    {image.mobileSrc && (
                        <source
                            className='image-routing'
                            srcSet={image.mobileSrc}
                            media='(max-width: 1024px)'
                        />
                    )}
                    {index >= images.length - 2 ? (
                        <img
                            className='image-routing hidden lg:block'
                            alt={`image-${index}`}
                            width={2500 / 2}
                            height={2500 / 2}
                            src={image.src}
                        />
                    ) : (
                        <img
                            className='image-routing'
                            alt={`image-${index}`}
                            width={2500 / 2}
                            height={2500 / 2}
                            src={image.src}
                        />
                    )}
                </picture>
            ))}
            <ProjectSlider currentProjectIndex={currentProjectIndex} />
            <Footer  designAudit={designAudit}
                setDesignAudit={setDesignAudit}
                joinTenderChecked={joinTenderChecked}
                setJoinTenderChecked={setJoinTenderChecked}/>
        </section>
    );
};

export default NHLigaFestival;
