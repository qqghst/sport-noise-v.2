import React from 'react';
import arrow from '../../../public/arrow.svg';
import Image from 'next/image';
import Link from 'next/link';

import Modal from '../modal';
import useModal from '@/hooks/useModal';
import { useScrollBlock } from '@/hooks/useScrollBlock';

const Footer = () => {
    const { isOpen, toggle } = useModal();
    const [blockScroll, allowScroll] = useScrollBlock();
    return (
        <>
            <Modal
                isOpen={isOpen}
                toggle={toggle}></Modal>
            <section className='px-5 md:px-[64px] lg:px-[128px] pb-12'>
                <div className='mx-auto flex flex-col md:flex-row   md:items-start justify-between mt-[83px] md:mt-[128px]'>
                    <div className='flex md:hidden  lg:flex-col justify-center w-full'>
                        <button
                            onClick={() => {
                                toggle();
                                blockScroll();
                            }}
                            type='button'
                            className='rounded-full lg:px-[58] py-4 lg:py-[18px] bg-blue hover:bg-hover transition ease-in-out duration-400 mb-[32px] w-full'>
                            <span className='text-[16px] md:text-[19px] tracking-wide leading-[24px] font-medium text-white'>
                                Обсудить проект
                            </span>
                        </button>
                        <div className='hidden lg:block  text-blue'>
                            <Link href='#masthead'>
                                <Image
                                    src={arrow}
                                    alt='SportNoise'
                                    width={80 / 2}
                                    height={80 / 2}
                                    className='-rotate-90'
                                />
                            </Link>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='text-[36px] lg:text-[40px] xl:text-[64px] tracking-[-2%] lg:tracking-[-1%] leading-[29px] lg:leading-[68px] font-medium text-blue   lg:pb-[17px] pb-[24px] textFooter'>
                            hello@sportnoise.ru
                        </h1>
                        <ul className='flex xl:flex-row md:flex-col  justify-between gap-4 text-[17px] tracking-[2%] leading-[28px] font-medium text-blue pb-[22px]'>
                            <li className='text-blue '>+7 (495) 755-85-38</li>
                            <li className='hidden md:block text-blue '>
                                Москва, ул. Полковая д. 3, стр. 6
                            </li>

                            <li className='text-blue hover:text-hover transition ease-in-out duration-400'>
                                <Link
                                    href='https://t.me/sportnoise'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    Telegram-чат
                                </Link>
                            </li>
                        </ul>
                        <ul className='hidden md:flex  flex-col xl:flex-row  gap-4 xl:gap-8 text-[13px] tracking-[4%] leading-[17px] font-medium  pb-[64px]'>
                            <li>
                                <button
                                    className='text-blue hover:text-hover transition ease-in-out duration-400'
                                    rel='noopener noreferrer'>
                                    &#x25CF; Скачать презентацию
                                </button>
                            </li>
                            <li>
                                <button
                                    className='text-blue hover:text-hover transition ease-in-out duration-400'
                                    rel='noopener noreferrer'>
                                    &#x25CF; Заполнить бриф
                                </button>
                            </li>
                            <li>
                                <button
                                    className='text-blue hover:text-hover transition ease-in-out duration-400'
                                    rel='noopener noreferrer'
                                    onClick={() => {
                                        toggle();
                                        blockScroll();
                                    }}>
                                    &#x25CF; Дизайн аудит
                                </button>
                            </li>
                            <li>
                                <button
                                    className='text-blue hover:text-hover transition ease-in-out duration-400'
                                    rel='noopener noreferrer'>
                                    &#x25CF; Пригласить в аудит
                                </button>
                            </li>
                        </ul>
                        <div className='flex flex-row justify-between items-end'>
                            <p className='w-[300px] lg:w-[420px] pt-[16px] text-[13px] tracking-[4%] leading-[17px] font-medium text-grey text-newGrey'>
                                ООО Спортнойз. Digital-решения для развития
                                спортивных и клубных брендов.{' '}
                                <span>
                                    {' '}
                                    <Link
                                        href='https://disk.yandex.ru/d/CFt-0eN46Vt4jQ'
                                        target='_blank'
                                        rel='noopener noreferrer'>
                                        Политика.
                                    </Link>
                                </span>{' '}
                                © 2016 — 2023. Digital-студия SportNoise. ООО
                                Спортнойз.
                            </p>
                            <div className='block md:hidden text-blue'>
                                <a href='#masthead'>
                                    <Image
                                        src={arrow}
                                        alt='SportNoise'
                                        width={80 / 2}
                                        height={80 / 2}
                                        className='-rotate-90'
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='hidden md:flex md:flex-col justify-between gap-[96px] md:items-end'>
                        <button
                            onClick={() => {
                                toggle();
                                blockScroll();
                            }}
                            type='button'
                            className='rounded-full px-[40px] md:px-[32px] xl:px-[58px] py-[12px] lg:py-[18px] bg-blue hover:bg-hover transition ease-in-out duration-400'>
                            <span className='text-[16px] lg:text-[18px] xl:text-[19px] tracking-wide leading-[24px] font-medium text-white'>
                                Обсудить проект
                            </span>
                        </button>
                        <div className='hidden md:block text-blue '>
                            <Link href='#navbar'>
                                <Image
                                    src={arrow}
                                    alt='SportNoise'
                                    width={80 / 2}
                                    height={80 / 2}
                                    className='-rotate-90'
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Footer;
