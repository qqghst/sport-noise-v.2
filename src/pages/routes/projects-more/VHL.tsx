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
    imgMobile8,
    imgMobile9,
    imgMobile10,
} from '../../../../public/projects/routing/projects-more/VHL/index';
import Text from '@/ui/routes/text';

const VHL: React.FC = () => {
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
    ];

    const [currentProjectIndex, setCurrentProjectIndex] = useState(104);

    const handleSlideChange = (swiper: any) => {
        setCurrentProjectIndex(swiper.activeIndex);
    };
    const [designAudit, setDesignAudit] = useState(false);
    const [joinTenderChecked, setJoinTenderChecked] = useState(false);
    return (
        <section>
            <Navbar
                designAudit={designAudit}
                setDesignAudit={setDesignAudit}
                joinTenderChecked={joinTenderChecked}
                setJoinTenderChecked={setJoinTenderChecked}
            />
            <Text
                title='Матч «Русская классика» для Всероссийской хоккейной лиги
                    (ВХЛ), 2017'
                paragraph=' Юбилейный пятый матч «Русской классики» на открытом воздухе.
                    Такие тематические события с фестивальной атмосферой требуют
                    особой сюжетной и художественной проработки. В основе
                    генерального образа логотипа — русская классика, снегири,
                    самовар, близость Кремля и новая хоккейная коробка «Парка
                    Легенд». Визуальную сюиту объединяет фирменный шрифт с
                    мотивами советской плакатной типографики. В дополнение —
                    обширная коллекция памятной атрибутики и мерча для
                    участников и гостей.'
                ending='Дизайн логотипа, разработка фирменного стиля, брендинг'
                color='#1E4E7E'
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
                    {index >= images.length - 2 ? (
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
            <Footer
                designAudit={designAudit}
                setDesignAudit={setDesignAudit}
                joinTenderChecked={joinTenderChecked}
                setJoinTenderChecked={setJoinTenderChecked}
            />
        </section>
    );
};

export default VHL;
