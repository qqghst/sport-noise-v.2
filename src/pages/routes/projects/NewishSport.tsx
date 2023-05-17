import React, { useState } from 'react';
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
    img16,
    imgMobile1,
    imgMobile2,
    imgMobile3,
    imgMobile4,
    imgMobile5,
    imgMobile6,
    imgMobile7,
    imgMobile8,
} from '../../../../public/projects/routing/NewishSport/index';
import Text from '@/ui/routes/text';

const NewishSport: React.FC = () => {
    const images = [
        { src: img1.src, mobileSrc: imgMobile1.src },
        { src: img2.src, mobileSrc: imgMobile2.src },
        { src: img3.src, mobileSrc: imgMobile3.src },
        { src: img4.src, mobileSrc: imgMobile4.src },
        { src: img5.src, mobileSrc: imgMobile5.src },
        { src: img6.src, mobileSrc: imgMobile6.src },
        { src: img7.src, mobileSrc: imgMobile7.src },
        { src: img8.src, mobileSrc: imgMobile8.src },
        { src: img9.src },
        { src: img10.src },
        { src: img11.src },
        { src: img12.src },
        { src: img13.src },
        { src: img14.src },
        { src: img15.src },
        { src: img16.src },
    ];

    const [currentProjectIndex, setCurrentProjectIndex] = useState(4);

    const handleSlideChange = (swiper: any) => {
        setCurrentProjectIndex(swiper.activeIndex);
    };
    return (
        <section>
            <Text
                title='Дизайн бренда для Newish Sport, 2022'
                paragraph='Производитель профессиональной экипировки с локальной
                    швейной фабрикой и модельерным бюро. Бренд специализируется
                    на изготовлении спортивной формы для триатлонистов,
                    конькобежцев, лыжников, ультрамарофонцев и велоспортсменов.
                    Перед нами стояла задача уйти от триколорной преемственности
                    (белый, синий, красный) и создать динамичный образ бренда,
                    отражающий специфику компании, интересы и характер ее ЦА.
                    Провели аналитику, разработали главный паттерн и общую
                    концепцию нового бренд-позиционирования Newish Sport.'
                ending='Логотип бренда, корпоративная айдентика '
                color='#40FF98'
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
                    {index >= images.length - 8 ? (
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

export default NewishSport;
