import React, { useRef, useState, useEffect, useContext } from 'react';
import styles from './styles.module.scss';
import { CursorContext } from '@/ui/custom-cursor/cursor-manager';
import { IProjectItemProps } from '@/interfaces/projectItem.interface';
import Image from 'next/image';

const ProjectItem: React.FC<IProjectItemProps> = ({
    title,
    description,
    smallDescription,
    image,
    imageMobile,
    videoSrc,
    videoType,
    videoSrc2,
    videoType2,
}) => {
    const { setSize } = useContext(CursorContext);

    const handleMouseEnter = () => {
        setSize('projects');
    };
    const handleMouseLeave = () => {
        setSize('regular');
    };

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);
    return (
        <>
            <div className='flex flex-col justify-center items-start gap-3 lg:gap-7'>
                <div
                    className='w-full h-full md:h-full'
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    {isMobile ? (
                        imageMobile && (
                            <Image
                                className='w-full h-full object-cover block'
                                src={imageMobile}
                                alt='SportNoise'
                                width={1700 / 2}
                                height={1000 / 2}
                            />
                        )
                    ) : videoSrc && videoSrc2 ? (
                        <div className={`${styles.zoomHover}`}>
                            <figure className='overflow-hidden' >
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className={`${styles.imgBigScreen} w-full h-[250px] sm:h-[350px] lg:h-[600px] object-cover block`}>
                                    <source
                                        src={videoSrc}
                                        type={videoType}
                                    />
                                    <source
                                        src={videoSrc2}
                                        type={videoType2}
                                    />
                                </video>
                            </figure>
                        </div>
                    ) : (
                        image && (
                            <div className={`${styles.zoomHover}`}>
                                <figure className='overflow-hidden' >
                                    <Image
                                        className={`${styles.imgBigScreen} w-full h-[250px] sm:h-[350px] lg:h-[600px] object-cover block`}
                                        src={image}
                                        alt='SportNoise'
                                        width={2400 / 2}
                                        height={1000 / 2}
                                    />
                                </figure>
                            </div>
                        )
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
