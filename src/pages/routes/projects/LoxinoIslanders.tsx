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
    imgMobile1,
    imgMobile2,
    imgMobile3,
    imgMobile4,
    imgMobile5,
    imgMobile6,
    imgMobile7,
} from '../../../../public/projects/routing/LoxinoIslanders/index';
import Text from '@/ui/routes/text';

const LoxinoIslanders: React.FC = () => {
    const images = [
        { src: img1.src, mobileSrc: imgMobile1.src },
        { src: img2.src, mobileSrc: imgMobile2.src },
        { src: img3.src, mobileSrc: imgMobile3.src },
        { src: img4.src, mobileSrc: imgMobile4.src },
        { src: img5.src, mobileSrc: imgMobile5.src },
        { src: img6.src, mobileSrc: imgMobile6.src },
        { src: img7.src, mobileSrc: imgMobile7.src },
        { src: img8.src },
    ];

    const [currentProjectIndex, setCurrentProjectIndex] = useState(7);

    const handleSlideChange = (swiper: any) => {
        setCurrentProjectIndex(swiper.activeIndex);
    };
    return (
        <section>
            <Navbar />
            {/* <div className='absolute xl:left-1/2 xl:-translate-x-1/2 translate-y-[900px] text-[#23ABDD] px-6 xl:px-0 text-text-routing'>
                <h1 className='text-[24px] 2xl:text-[32.67px] -tracking-[0.6px] lg:tracking-[0.6px] leading-[36px] lg:leading-[48.3px] pb-[20px]'>
                    Логотип для хоккейного клуба Loxino Islanders, 2021
                </h1>
                <p className='text-[14px] 2xl:text-[18.33px] tracking-[0.5px] leading-[28px] lg:leading-[34px] pb-[54px] lg:pb-[23px]'>
                    Любительская хоккейная команда с профессиональным подходом.
                    Дух и сила клуба — в истории малой родины игроков. Детство и
                    юность нескольких хоккеистов, образовавших основной костяк,
                    прошли в подмосковной деревне Лохино с 400-летней историей.
                    Она и послужила базой для будущего харизматичного талисмана
                    команды. Лосось в природе плавает против течения — это
                    отличный символ борьбы и преодоления сложностей. В логотипе
                    он одет в характерный исторический атрибут — картуз и
                    смотрит на соперников дерзким взглядом, готовым к ярким
                    победам. Дополнительно была разработана серия сублоготипов и
                    кастомы для особых случаев.
                </p>
                <p className='text-[13px] 2xl:text-[16.67px] tracking-[1px] leading-[22px] lg:leading-[28.3px]'>
                    Разработка логотипа
                </p>
            </div> */}
            <Text
                title='Логотип для хоккейного клуба Loxino Islanders, 2021'
                paragraph='Любительская хоккейная команда с профессиональным подходом.
                    Дух и сила клуба — в истории малой родины игроков. Детство и
                    юность нескольких хоккеистов, образовавших основной костяк,
                    прошли в подмосковной деревне Лохино с 400-летней историей.
                    Она и послужила базой для будущего харизматичного талисмана
                    команды. Лосось в природе плавает против течения — это
                    отличный символ борьбы и преодоления сложностей. В логотипе
                    он одет в характерный исторический атрибут — картуз и
                    смотрит на соперников дерзким взглядом, готовым к ярким
                    победам. Дополнительно была разработана серия сублоготипов и
                    кастомы для особых случаев.'
                ending='Разработка логотипа'
                color='#23ABDD'
            />
            {images.map((image, index) => (
                <picture key={index}>
                    {image.mobileSrc && (
                        <source
                            className='image-routing'
                            srcSet={image.mobileSrc}
                            media='(max-width: 1024px)'
                        />
                    )}
                    {index >= images.length - 1 ? (
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
            <Footer />
        </section>
    );
};

export default LoxinoIslanders;
