import React from 'react';
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
    imgMobile1,
    imgMobile2,
    imgMobile3,
    imgMobile4,
    imgMobile5,
    imgMobile6,
    imgMobile7,
} from '../../../../public/projects/routing/NHLiga/index';

const newishSport: React.FC = () => {
    const images = [
        { src: img1.src, mobileSrc: imgMobile1.src },
        { src: img2.src, mobileSrc: imgMobile2.src },
        { src: img3.src, mobileSrc: imgMobile3.src },
        { src: img4.src, mobileSrc: imgMobile4.src },
        { src: img5.src, mobileSrc: imgMobile5.src },
        { src: img6.src, mobileSrc: imgMobile6.src },
        { src: img7.src, mobileSrc: imgMobile7.src },
        { src: img8.src },
        { src: img9.src },
        { src: img10.src },
        { src: img11.src },
        { src: img12.src },
    ];
    return (
        <section>
            <div className='absolute xl:left-1/2 xl:-translate-x-1/2 translate-y-[1050px] text-[#171F2A] px-6 xl:px-0 text-text-routing'>
                <h1 className='text-[24px] 2xl:text-[32.67px] -tracking-[0.6px] lg:tracking-[0.6px] leading-[36px] lg:leading-[48.3px] pb-[20px]'>
                    Редизайн сайта для Ночной Лиги (NHLiga), 2021
                </h1>
                <p className='text-[14px] 2xl:text-[18.33px] tracking-[0.5px] leading-[28px] lg:leading-[34px] pb-[54px] lg:pb-[23px]'>
                    Ведущая в России организация по любительскому хоккею.
                    Редизайн начался с детального исследования потребностей
                    аудитории и формирования ключевых особенностей нового
                    ресурса. Объемный этап прототипирования завершился 48
                    уникальными страницами и дизайн-гайдом. Определили структуру
                    и предусмотрели оптимальные решения для «горячих» мест на
                    сайте. Теперь на главной странице все самое полезное и
                    востребованное: свежие новости, тематические подборки по
                    событиям и активациям лиги, галерея, статистика и лидеры.
                    Бонусно собрали стильный и информативный лендинг о NHLiga с
                    главными цифрами, рекордами и наградами.
                </p>
                <p className='text-[13px] 2xl:text-[16.67px] tracking-[1px] leading-[22px] lg:leading-[28.3px]'>
                    UX/UI дизайн, лендинг
                </p>
            </div>
            <Navbar />
            {images.map((image, index) => (
                <picture key={index}>
                    {image.mobileSrc && (
                        <source
                            className='image-routing'
                            srcSet={image.mobileSrc}
                            media='(max-width: 1024px)'
                        />
                    )}
                    {index >= images.length - 5 ? (
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
            <ProjectSlider />
            <Footer />
        </section>
    );
};

export default newishSport;
