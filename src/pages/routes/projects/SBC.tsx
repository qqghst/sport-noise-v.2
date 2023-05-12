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
} from '../../../../public/projects/routing/SBC/index';
import Text from '@/ui/routes/text';

const SBC: React.FC = () => {
    const images = [
        { src: img1.src, mobileSrc: imgMobile1.src },
        { src: img2.src, mobileSrc: imgMobile2.src },
        { src: img3.src, mobileSrc: imgMobile3.src },
        { src: img4.src, mobileSrc: imgMobile4.src },
        { src: img5.src, mobileSrc: imgMobile5.src },
        { src: img6.src },
        { src: img7.src },
        { src: img8.src },
    ];
    const [currentProjectIndex, setCurrentProjectIndex] = useState(2);

    const handleSlideChange = (swiper: any) => {
        setCurrentProjectIndex(swiper.activeIndex);
    };
    const [designAudit, setDesignAudit] = useState(false);
    const [joinTenderChecked, setJoinTenderChecked] = useState(false);
    return (
        <section>
            <Text
                title='Редизайн сайта для «СБК. Спорт Бизнес Консалтинг» (SBC),
                    2022'
                paragraph='Авторитетный медиапроект на стыке спорта и маркетинга.
                    Совместно с редакцией СБК разработали прототип нового
                    дизайна сайта, стилеобразующие элементы и фирменные детали.
                    Переработали рубрикатор и систематизировали контент,
                    добавили тегирование и полезную сортировку самых посещаемых
                    разделов. Оптимизировали типографику и решения цветовой
                    палитры, улучшили UX личного кабинета. Новый сайт СБК
                    приобрел удобный для пользователей блок Бизнес-клуба,
                    понятный каталог сооружений, наглядный календарь спортивных
                    событий и полноценную мобильную версию.'
                ending='UX/UI дизайн'
                color='#C0CBED'
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

export default SBC;
