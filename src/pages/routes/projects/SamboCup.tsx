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
} from '../../../../public/projects/routing/SamboCup/index';
import Text from '@/ui/routes/text';

const SamboCup: React.FC = () => {
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

    const [currentProjectIndex, setCurrentProjectIndex] = useState(5);

    const handleSlideChange = (swiper: any) => {
        setCurrentProjectIndex(swiper.activeIndex);
    };
    const [designAudit, setDesignAudit] = useState(false);
    const [joinTenderChecked, setJoinTenderChecked] = useState(false);
    return (
        <section>
            <Text
                title='Open European SAMBO cup. Romania для Международной Федерации
                    Самбо (FIAS), 2021'
                paragraph='FIAS руководит развитием самбо в мире и регулярно проводит
                    локальные и международные чемпионаты. Один из них — Open
                    European SAMBO cup. Romania. Разработали для
                    континентального события символичный логотип и фирменный
                    стиль с динамичными акцентами. Визуальной доминантой в
                    логотипе стал силуэт Триумфальной арки — талисмана
                    Бухареста. На ее фасаде «проецируются» важные детали о
                    чемпионате: дата и место проведения, титульный спонсор и
                    принадлежность к FIAS.'
                ending='Логотип турнира, фирменный стиль'
                color='#fff'
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

export default SamboCup;
