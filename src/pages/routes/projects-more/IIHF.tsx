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
    imgMobile1,
    imgMobile2,
    imgMobile3,
    imgMobile4,
    imgMobile5,
    imgMobile6,
    imgMobile7,
    imgMobile8,
} from '../../../../public/projects/routing/projects-more/IIHF/index';

const IIHF: React.FC = () => {
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
    ];
    return (
        <section>
            <Navbar />
            {images.map((image, index) => (
                <picture key={index}>
                    {image.mobileSrc && (
                        <source
                            className='min-h-screen w-full image-routing'
                            srcSet={image.mobileSrc}
                            media='(max-width: 1024px)'
                        />
                    )}
                    {index >= images.length - 5 ? (
                        <img
                            className='min-h-screen w-screen  hidden md:block image-routing'
                            alt={`image-${index}`}
                            width={2500 / 2}
                            height={2500 / 2}
                            src={image.src}
                        />
                    ) : (
                        <img
                            className='min-h-screen w-screen image-routing'
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

export default IIHF;
