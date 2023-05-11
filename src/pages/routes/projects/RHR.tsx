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
    img12,
    img13,
    img14,
    img15,
    imgMobile1,
    imgMobile2,
    imgMobile3,
    imgMobile4,
    imgMobile5,
    imgMobile6,
    imgMobile7,
    imgMobile8,
    imgMobile9,
    imgMobile10,
} from '../../../../public/projects/routing/RHR/index';

const RHR: React.FC = () => {
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
        { src: img10.src, mobileSrc: imgMobile10.src },
        { src: img11.src },
        { src: img12.src },
        { src: img13.src },
        { src: img14.src },
        { src: img15.src },
    ];

    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    const handleSlideChange = (swiper: any) => {
        setCurrentProjectIndex(swiper.activeIndex);
    };
    return (
        <section className=''>
            <Navbar />
            <div className='absolute xl:left-1/2 xl:-translate-x-1/2 translate-y-[900px] text-white px-6 xl:px-0 text-text-routing'>
                <h1 className='text-[41.72px] 2xl:text-[32.67px] tracking-[-0.02em] lg:tracking-[0.6px] leading-[54px] lg:leading-[48.3px] pb-[20px]'>
                    Ультрамарафон White Bride Ultra Gelendzhik для Running
                    Heroes Russia (RHR), 2022
                </h1>
                <p className='text-[14px] 2xl:text-[18.33px] tracking-[0.5px] leading-[28px] lg:leading-[34px] pb-[54px] lg:pb-[23px]'>
                    Самый массовый горный старт от команды RHR, которая уже 8
                    лет организовывает ультрамарафоны в самых красивых местах
                    России. Сложнейшая гонка White Bride Ultra Gelendzhik
                    («Белая невеста») с титульной дистанцией 120 километров и
                    набором высоты до 5 550 метров с 2022 года проходит в
                    Геленджике. Для события создали гармоничное характеру и
                    экстерьеру оформление с контрастными и выразительными
                    акцентами. Разработали фирменный стиль и логотип, отразив в
                    них символы гонки на выносливость и места их проведения:
                    силуэты резких
                </p>
                <p className='text-[13px] 2xl:text-[16.67px] tracking-[1px] leading-[22px] lg:leading-[28.3px]'>
                    Фирменный стиль, событийный брендинг, атрибутика
                </p>
            </div>
            {images.map((image, index) => (
                <picture key={index}>
                    {image.mobileSrc && (
                        <source
                            className='image-routing'
                            srcSet={image.mobileSrc}
                            media='(max-width: 1280px)'
                        />
                    )}
                    {index >= images.length - 5 ? (
                        <img
                            className='image-routing hidden xl:block'
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
            <Footer />
        </section>
    );
};

export default RHR;
