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
    imgMobile1,
    imgMobile2,
    imgMobile3,
    imgMobile4,
    imgMobile5,
    imgMobile6,
    imgMobile7,
} from '../../../../public/projects/routing/NHLiga/index';
import Text from '@/ui/routes/text';

const NHLiga: React.FC = () => {
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

    const [currentProjectIndex, setCurrentProjectIndex] = useState(6);

    const handleSlideChange = (swiper: any) => {
        setCurrentProjectIndex(swiper.activeIndex);
    };
    const [designAudit, setDesignAudit] = useState(false);
    const [joinTenderChecked, setJoinTenderChecked] = useState(false);
    return (
        <section>
            <Text
                title='Редизайн сайта для Ночной Лиги (NHLiga), 2021'
                paragraph='Ведущая в России организация по любительскому хоккею.
                    Редизайн начался с детального исследования потребностей
                    аудитории и формирования ключевых особенностей нового
                    ресурса. Объемный этап прототипирования завершился 48
                    уникальными страницами и дизайн-гайдом. Определили структуру
                    и предусмотрели оптимальные решения для «горячих» мест на
                    сайте. Теперь на главной странице все самое полезное и
                    востребованное: свежие новости, тематические подборки по
                    событиям и активациям лиги, галерея, статистика и лидеры.
                    Бонусно собрали стильный и информативный лендинг о NHLiga с
                    главными цифрами, рекордами и наградами.'
                ending='UX/UI дизайн, лендинг'
                color='#171F2A'
            />
            <Navbar
                designAudit={designAudit}
                setDesignAudit={setDesignAudit}
                joinTenderChecked={joinTenderChecked}
                setJoinTenderChecked={setJoinTenderChecked}
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
            <ProjectSlider currentProjectIndex={currentProjectIndex} />
            <Footer
                designAudit={designAudit}
                setDesignAudit={setDesignAudit}
                joinTenderChecked={joinTenderChecked}
                setJoinTenderChecked={setJoinTenderChecked}
            />
        </section>
    );
};

export default NHLiga;
