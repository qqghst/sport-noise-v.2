import React, { useRef, useState, useEffect, useContext } from 'react';
import styles from './styles.module.scss';

import { CursorContext } from '@/ui/custom-cursor/cursor-manager';

interface IProjectItemProps {
    title: string;
    description: string;
    smallDescription: string;
    image?: string;
    imageMobile?: string;
    videoSrc?: string;
    videoType?: string;
    videoSrc2?: string;
    videoType2?: string;
}

const ProjectItem: React.FC<IProjectItemProps> = ({
    title,
    description,
    smallDescription,
    image,
    videoSrc,
    videoType,
    videoSrc2,
    videoType2,
    imageMobile,
}) => {
    const { setSize } = useContext(CursorContext);

    const handleMouseEnter = () => {
        setSize('projects');
    };
    const handleMouseLeave = () => {
        setSize('regular');
    };

    const [screenWidth, setScreenWidth] = useState<number>(641);

    const updateScreenWidth = () => {
        setScreenWidth(window.innerWidth);
    };

    useEffect(() => {
        updateScreenWidth();
        window.addEventListener('resize', updateScreenWidth);
        return () => {
            window.removeEventListener('resize', updateScreenWidth);
        };
    }, []);
    return (
        <>
            <div className='flex flex-col justify-center items-start gap-3 lg:gap-7'>
                <div
                    className='w-full h-full md:h-full'
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    {videoSrc && videoSrc2 ? (
                        <picture>
                            {screenWidth > 640 ? (
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className='w-full h-[250px] sm:h-[350px] lg:h-full object-fit block'
                                    style={{ objectFit: 'cover' }}>
                                    <source
                                        src={videoSrc}
                                        type={videoType}
                                    />
                                    <source
                                        src={videoSrc2}
                                        type={videoType2}
                                    />
                                </video>
                            ) : (
                                imageMobile && (
                                    <img
                                        src={imageMobile}
                                        alt={title}
                                        width={2000 / 2}
                                        height={2000 / 2}
                                        className='w-full h-[250px] sm:h-[350px] lg:h-full object-fit block'
                                    />
                                )
                            )}
                        </picture>
                    ) : (
                        <div className={`${styles.zoomHover}`}>
                            <figure className='overflow-hidden'>
                                {image && (
                                    <picture>
                                        <source
                                            className='w-full h-full object-fit block'
                                            srcSet={imageMobile}
                                            media='(max-width: 640px)'
                                        />
                                        <img
                                            className='w-full h-[250px] sm:h-[350px] lg:h-full object-fit block'
                                            src={image}
                                            alt={title}
                                            width={2000 / 2}
                                            height={2000 / 2}
                                        />
                                    </picture>
                                )}
                            </figure>
                        </div>
                    )}
                </div>
                <div className='flex flex-row justify-between items-end w-full'>
                    <div className='flex flex-col px-5 lg:px-0'>
                        <span className='text-[14px] lg:text-[17px] tracking-[0.13px] lg:tracking-[0.3px] leading-[18px] lg:leading-[20px] font-medium text-black pb-1 lg:pb-[6px]'>
                            {title}
                        </span>
                        <span className='text-[18px] lg:text-[28px] tracking-[0.13px] leading-[21px] lg:leading-[38px] font-medium text-black pb-1 lg:pb-0'>
                            {description}
                        </span>
                        <span className='text-[12px] lg:text-[13px]  leading-[16px] lg:leading-[17px] tracking-[0.3px] lg:tracking-[0.6px] font-medium text-grey'>
                            {smallDescription}
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectItem;
