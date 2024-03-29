import { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import { CursorContext } from '@/ui/custom-cursor/cursor-manager';
import { useContext } from 'react';
import { useScrollBlock } from '@/hooks/useScrollBlock';
import arrow from '../../../public/logofolio-and-showreel/arrow.svg';
import Button from '@/ui/buttons/button-video';
import { ILogofolioProps } from '@/interfaces/logofolio-showreel.interface';

const LogofolioAndShowreel: FC<ILogofolioProps> = ({
    videoSrc,
    name,
}) => {
    const [blockScroll, allowScroll] = useScrollBlock();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const handleOpenVideo = () => {
        setIsOpen(!isOpen);
    };
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && isOpen) {
                handleOpenVideo();
                allowScroll();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);

    const { setSize } = useContext(CursorContext);

    const handleMouseEnter = () => {
        setSize('big');
    };
    const handleMouseLeave = () => {
        setSize('regular');
    };
    return (
        <>
            <>
                <section className='px-5 md:px-[64px] lg:px-[128px]  block m-auto'>
                    <div
                        className='rounded-[140px] bg-gradient-to-r from-[#324590] to-[#E2183F]'
                        onClick={() => {
                            handleOpenVideo();
                            blockScroll();
                        }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                        <div className='flex justify-between  items-center px-4 lg:px-10'>
                            <Image
                                className='w-[100px] h-[40px] lg:w-[100px] lg:h-[75px]'
                                src={arrow.src}
                                alt='SportNoise'
                                width={200 / 2}
                                height={80 / 2}
                            />
                            <Image
                                className='w-[260px] h-[100px] lg:w-[500px] lg:h-[120px]'
                                src={name}
                                alt='SportNoise'
                                width={520 / 2}
                                height={200 / 2}
                            />
                        </div>
                    </div>
                </section>
                {isOpen && (
                    <div className={`${styles.video}`}>
                        <div className='top-8 right-8 fixed z-[52]'>
                            <Button
                                onClick={() => {
                                    handleOpenVideo();
                                    allowScroll();
                                }}
                            />
                        </div>
                        <video
                            id='video'
                            onEnded={() => {
                                handleOpenVideo();
                                allowScroll();
                            }}
                            playsInline
                            webkit-playsinline
                            autoPlay
                            preload='metadata'
                            className={`block m-auto`}>
                            {videoSrc === 'showreel' && (
                                <>
                                    <source
                                        src='/logofolio-and-showreel/showreel/showreel-video.mp4'
                                        type='video/mp4; codecs=hvc1'
                                        webkit-playsinline={true}
                                    />
                                    <source
                                        src='/logofolio-and-showreel/showreel/showreel-video.webm'
                                        type='video/webm; codecs=vp9'
                                        webkit-playsinline={true}
                                    />
                                </>
                            )}
                            {videoSrc === 'logofolio' && (
                                <>
                                    <source
                                        src='/logofolio-and-showreel/logofolio/logofolio-video.mp4'
                                        type='video/mp4; codecs=hvc1'
                                        webkit-playsinline={true}
                                    />
                                    <source
                                        src='/logofolio-and-showreel/logofolio/logofolio-video.webm'
                                        type='video/webm; codecs=vp9'
                                        webkit-playsinline={true}
                                    />
                                </>
                            )}
                        </video>
                    </div>
                )}
            </>
        </>
    );
};

export default LogofolioAndShowreel;
