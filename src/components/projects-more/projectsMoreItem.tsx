import { FC, useEffect } from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import gsap from 'gsap';
import arrow from '../../../public/arrow.svg';
import { IProjectsMoreItemsProps } from '@/interfaces/projectMore.interface';

const ProjectMoreItems: FC<IProjectsMoreItemsProps> = ({ title, imageSrc }) => {
    useEffect(() => {
        const items = document.querySelectorAll('#item');

        items.forEach((el) => {
            const image = el.querySelector('#image');

            el.addEventListener('mouseenter', (e) => {
                gsap.to(image, {
                    opacity: 1,
                    autoAlpha: 1,
                    scale: 1.05,
                    duration: 0.6,
                    ease: 'power3.inOut',
                });
            });

            el.addEventListener('mouseleave', (e) => {
                gsap.to(image, {
                    opacity: 0,
                    autoAlpha: 1,
                    scale: 1,
                    duration: 0.6,
                    ease: 'power3.inOut',
                });
            });
        });
    }, []);
    return (
        <>
            <div className='h-[1px] bg-line w-full' />
            <section id='item'>
                <div className={`${styles.animation} gap-2  lg:gap-8`}>
                    <div className={`${styles.arrow}`}>
                        <Image
                            src={arrow}
                            alt='arrow'
                            width={48 / 2}
                            height={48 / 2}
                            className='text-[24px] lg:text-[32px]'
                        />
                    </div>
                    <h3 className='text-[18px] lg:text-[28px] lg:tracking-[0.25px] leading-[21px] lg:leading-[38px]'>
                        {title}
                    </h3>
                </div>
                <div className={`${styles.imageContainer} hidden lg:block`}>
                    <Image
                        id='image'
                        className={`${styles.image}`}
                        src={imageSrc}
                        alt='SportNoise'
                        width={900 / 2}
                        height={550 / 2}
                    />
                </div>
            </section>
        </>
    );
};

export default ProjectMoreItems;
