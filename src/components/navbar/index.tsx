import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.scss';
import gsap from 'gsap';
import SplitType from 'split-type';
import MenuItem from './menuItem';
import { useScrollBlock } from '@/hooks/useScrollBlock';

interface ICheckedProps {
    designAudit: any;
    setDesignAudit: any;
    joinTenderChecked: any;
    setJoinTenderChecked: any;
}

const Navbar: React.FC<ICheckedProps> = ({
    designAudit,
    setDesignAudit,
    joinTenderChecked,
    setJoinTenderChecked,
}) => {
    const [blockScroll, allowScroll] = useScrollBlock();
    const menuRef = useRef(null) as React.RefObject<HTMLDivElement>;
    const menuMobileRef = useRef(null) as React.RefObject<HTMLDivElement>;
    const exitRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const menuRefCurrent = menuRef.current;
        const menuMobileRefCurrent = menuMobileRef.current;
        const exitRefCurrent = exitRef.current;

        const tl = gsap.timeline({ paused: true });
        tl.to('.menuOpen', { opacity: 1, right: 0, duration: 0.8 });

        const splitParent = new SplitType('.navAnimation', {
            types: 'lines',
            lineClass: 'lineParent',
        });

        const split = new SplitType(splitParent?.lines ?? [], {
            types: 'lines',
        });
        tl.fromTo(
            split.lines,
            {
                opacity: 0,
                y: 100,
            },
            {
                duration: 0.8,
                opacity: 1,
                y: 0,
                stagger: 0.1,
                ease: 'power2',
            }
        );

        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRefCurrent &&
                !menuRefCurrent.contains(event.target as Node) &&
                menuMobileRefCurrent &&
                !menuMobileRefCurrent.contains(event.target as Node)
            ) {
                tl.timeScale(3);
                tl.reverse();
            }
        };

        document.addEventListener('click', handleClickOutside);

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                tl.timeScale(3);
                tl.reverse();
                allowScroll();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        if (menuRefCurrent && exitRefCurrent && menuMobileRefCurrent) {
            menuRefCurrent.addEventListener('click', () => {
                tl.play().timeScale(1.1);
            });
            exitRefCurrent.addEventListener('click', () => {
                tl.timeScale(3);
                tl.reverse();
            });
        }

        if (menuMobileRefCurrent && exitRefCurrent) {
            menuMobileRefCurrent.addEventListener('click', () => {
                tl.play().timeScale(1.1);
            });
            exitRefCurrent.addEventListener('click', () => {
                tl.timeScale(3);
                tl.reverse();
            });
        }

        return () => {
            if (menuRefCurrent && exitRefCurrent) {
                menuRefCurrent.removeEventListener('click', () => {
                    tl.play();
                });
                exitRefCurrent.removeEventListener('click', () => {
                    tl.reverse();
                });
            }
            if (menuMobileRefCurrent && exitRefCurrent) {
                menuMobileRefCurrent.removeEventListener('click', () => {
                    tl.play();
                });
                exitRefCurrent.removeEventListener('click', () => {
                    tl.reverse();
                });
            }
            document.removeEventListener('click', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
            tl.kill();
        };
    }, []);
    return (
        <>
            <section id='navbar'>
                <div className='flex flex-col md:flex-row justify-between items-start md:items-center py-[32px]  px-5 md:px-[64px] lg:px-[128px] bg-white lg:mx-auto left-0 right-0 z-[100]'>
                    <Link
                        rel='noopener noreferrer'
                        href='/'
                        className=''>
                        <Image
                            src='/navbar/logo.png'
                            alt='SportNoise'
                            width={400 / 2}
                            height={90 / 2}
                        />
                    </Link>
                    <div
                        ref={menuRef}
                        className='hidden md:block fixed right-5 md:right-[64px] lg:right-[128px] z-[51]'>
                        <button
                            type='button'
                            className='rounded-full px-[16px] py-[8px]  bg-blue '>
                            <span className='text-[17px] tracking-wide leading-[28px] font-medium text-white'>
                                Меню
                            </span>
                        </button>
                    </div>{' '}
                    <div
                        ref={menuMobileRef}
                        onClick={blockScroll}
                        className='block md:hidden fixed bottom-0 py-4 left-1/2 transform -translate-x-1/2 z-40'>
                        <button
                            type='button'
                            className='rounded-full px-[16px] py-[8px]  bg-blue'>
                            <span className='text-[17px] tracking-wide leading-[28px] font-medium text-white'>
                                Меню
                            </span>
                        </button>
                    </div>
                </div>
                <MenuItem
                    exitRef={exitRef}
                    designAudit={designAudit}
                    setDesignAudit={setDesignAudit}
                    joinTenderChecked={joinTenderChecked}
                    setJoinTenderChecked={setJoinTenderChecked}
                />
            </section>
        </>
    );
};

export default Navbar;
