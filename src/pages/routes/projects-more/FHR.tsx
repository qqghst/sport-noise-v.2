import React, { useState } from 'react';
import ProjectSlider from '@/components/projects-slider';
import {
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    imgMobile1,
    imgMobile2,
    imgMobile3,
    imgMobile4,
    imgMobile5,
    imgMobile6,
} from '../../../../public/projects/routing/projects-more/FHR/index';
import Text from '@/ui/routes/text';

const FHR: React.FC = () => {
    const images = [
        { src: img1.src, mobileSrc: imgMobile1.src },
        { src: img2.src, mobileSrc: imgMobile2.src },
        { src: img3.src, mobileSrc: imgMobile3.src },
        { src: img4.src, mobileSrc: imgMobile4.src },
        { src: img5.src, mobileSrc: imgMobile5.src },
        { src: img6.src, mobileSrc: imgMobile6.src },
    ];

    const [currentProjectIndex, setCurrentProjectIndex] = useState(101);

    const handleSlideChange = (swiper: any) => {
        setCurrentProjectIndex(swiper.activeIndex);
    };
    return (
        <section>
            <Text
                title='Образовательный проект для Федерации Хоккея России (FHR),
                    2017'
                paragraph='Важный проект для национального спорта России. Разработали
                    большой кейс из трех книг и пособия с упражнениями для
                    молодых хоккеистов, которые хотят стать чемпионами. Единая
                    визуальная система и фирменный стиль созданы с учетом
                    философии и ключевых паттернов спортивной культуры ФХР.
                    Издание стало новым стандартом для обучения будущих
                    профессиональных хоккеистов по всей стране. Разработано
                    совместно с ИД «Просвещение». '
                ending='Дизайн, верстка, издательская деятельность'
                color='#fff'
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
                    {index >= images.length - 0 ? (
                        <img
                            className='image-routing hidden lg:block'
                            alt={`image-${index}`}
                            src={image.src}
                            loading='lazy'
                        />
                    ) : (
                        <img
                            className='image-routing'
                            alt={`image-${index}`}
                            src={image.src}
                            loading='lazy'
                        />
                    )}
                </picture>
            ))}
            <ProjectSlider currentProjectIndex={currentProjectIndex} />
        </section>
    );
};

export default FHR;
