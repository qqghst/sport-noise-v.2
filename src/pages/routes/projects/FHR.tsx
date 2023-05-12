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
    imgMobile1,
    imgMobile2,
    imgMobile3,
    imgMobile4,
    imgMobile5,
    imgMobile6,
} from '../../../../public/projects/routing/FHR/index';
import Text from '@/ui/routes/text';

const FHR: React.FC = () => {
    const images = [
        { src: img1.src, mobileSrc: imgMobile1.src },
        { src: img2.src, mobileSrc: imgMobile2.src },
        { src: img3.src, mobileSrc: imgMobile3.src },
        { src: img4.src, mobileSrc: imgMobile4.src },
        { src: img5.src, mobileSrc: imgMobile5.src },
        { src: img6.src, mobileSrc: imgMobile6.src },
        { src: img7.src },
        { src: img8.src },
        { src: img9.src },
    ];
    const [currentProjectIndex, setCurrentProjectIndex] = useState(1);

    const handleSlideChange = (swiper: any) => {
        setCurrentProjectIndex(swiper.activeIndex);
    };

    const [designAudit, setDesignAudit] = useState(false);
    const [joinTenderChecked, setJoinTenderChecked] = useState(false);
    return (
        <section>
            <Text
                title='Лендинг для Федерации Хоккея России (FHR), 2021'
                paragraph='  Великая история СССР – Канада. По запросу нашего постоянного
                    клиента ФХР разработали тематический лендинг, посвященный
                    75-летней истории хоккея. Стиль современной летописи с
                    удобной навигацией по годам планомерно погружает
                    пользователя в богатую историю важнейшего спорта страны.
                    Блочная структура не перегружает внимание: лендинг разбит на
                    десятилетия, сопровождаемые историческими фотографиями,
                    рекордами, фактами и художественно-историческими элементами
                    тех событий. Выразительные акценты расставлены с помощью
                    микроанимации. Лендинг адаптирован под разные устройства и
                    дополнен промороликом.'
                ending='Лендинг пейдж'
                color='#F9EFE3'
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
                    {index >= images.length - 3 ? (
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

export default FHR;
