import React, {useState} from 'react';
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
    return (
        <section>
            <div className='absolute xl:left-1/2 xl:-translate-x-1/2 translate-y-[900px] text-[#C0CBED] px-6 xl:px-0 text-text-routing'>
                <h1 className='text-[24px] 2xl:text-[32.67px] -tracking-[0.6px] lg:tracking-[0.6px] leading-[36px] lg:leading-[48.3px] pb-[20px]'>
                    Редизайн сайта для «СБК. Спорт Бизнес Консалтинг» (SBC),
                    2022
                </h1>
                <p className='text-[14px] 2xl:text-[18.33px] tracking-[0.5px] leading-[28px] lg:leading-[34px] pb-[54px] lg:pb-[23px]'>
                    Авторитетный медиапроект на стыке спорта и маркетинга.
                    Совместно с редакцией СБК разработали прототип нового
                    дизайна сайта, стилеобразующие элементы и фирменные детали.
                    Переработали рубрикатор и систематизировали контент,
                    добавили тегирование и полезную сортировку самых посещаемых
                    разделов. Оптимизировали типографику и решения цветовой
                    палитры, улучшили UX личного кабинета. Новый сайт СБК
                    приобрел удобный для пользователей блок Бизнес-клуба,
                    понятный каталог сооружений, наглядный календарь спортивных
                    событий и полноценную мобильную версию.
                </p>
                <p className='text-[13px] 2xl:text-[16.67px] tracking-[1px] leading-[22px] lg:leading-[28.3px]'>
                    UX/UI дизайн
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
            <ProjectSlider currentProjectIndex={currentProjectIndex}/>
            <Footer />
        </section>
    );
};

export default SBC;
