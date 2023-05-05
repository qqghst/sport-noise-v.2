import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import close from '../../../public/close.svg';
import Modal from '../modal';
import useModal from '../../hooks/useModal';
import { useScrollBlock } from '@/hooks/useScrollBlock';
import Button from '../../ui/buttons/button-border';

const MenuItem: React.FC<{ exitRef: React.RefObject<HTMLDivElement> }> = ({
    exitRef,
}) => {
    const { isOpen, toggle } = useModal();
    const [blockScroll, allowScroll] = useScrollBlock();
    return (
        <>
            <Modal
                isOpen={isOpen}
                toggle={toggle}></Modal>
            <div className='menuOpen fixed top-0 right-[-100%] w-full md:w-[50%] xl:w-[35%] 2xl:w-[30%] h-screen bg-white flex flex-col items-center justify-start opacity-0 z-[30007582354723] drop-shadow-[0_4px_25px_rgba(0,0,0,0.13)]'>
                <div className='flex flex-row items-center justify-between py-[58px] gap-[148px]'>
                    <div className='text-[26px] tracking-[-1px] leading-[32px] font-medium flex gap-3'>
                        <span className='text-black underline'>Ru</span>
                        <span className='text-grey'>En</span>
                    </div>
                    <div ref={exitRef}>
                        <Button onClick={allowScroll} />
                    </div>
                </div>

                <div>
                    <ul className='navAnimation text-blue font-medium text-left text-[26px] lg:text-[42px] tracking-[-0.5px] leading-[32px] lg:leading-[57px] flex flex-col gap-3'>
                        <div className=' block lg:hidden h-[1px] bg-line w-full left-0 right-0' />

                        <li className=''>
                            <a
                                href='#projects'
                                className='text-blue hover:text-hover transition ease-in-out duration-400'>
                                ПРОЕКТЫ
                            </a>
                        </li>

                        <div className='block lg:hidden h-[1px] bg-line w-full' />
                        <li>
                            <a
                                href='#services'
                                className='text-blue hover:text-hover transition ease-in-out duration-400'>
                                УСЛУГИ
                            </a>
                        </li>
                        <div className='block lg:hidden h-[1px] bg-line w-full' />
                        <li>
                            <a
                                href='#about-second'
                                className='text-blue hover:text-hover transition ease-in-out duration-400'>
                                О НАС
                            </a>
                        </li>
                        <div className='block lg:hidden h-[1px] bg-line w-full' />
                    </ul>
                    <ul className='navAnimation text-blue font-medium text-left text-[15px] lg:text-[17px] leading-[26px] lg:leading-[30px] tracking-[0.5px] flex flex-col gap-2 py-7'>
                        <li>
                            <Link
                                href='/'
                                className='text-blue hover:text-hover transition ease-in-out duration-400'
                                rel='noopener noreferrer'>
                                &#x25CF; Скачать презентацию
                            </Link>
                        </li>
                        <li>
                            <Link
                                className='text-blue hover:text-hover transition ease-in-out duration-400'
                                href='/'
                                rel='noopener noreferrer'>
                                &#x25CF; Заполнить бриф
                            </Link>
                        </li>
                        <li>
                            <button
                                className='text-blue hover:text-hover transition ease-in-out duration-400'
                                onClick={() => {
                                    toggle();
                                    blockScroll();
                                }}
                                rel='noopener noreferrer'>
                                &#x25CF; Дизайн аудит
                            </button>
                        </li>
                        <li>
                            <Link
                                className='text-blue hover:text-hover transition ease-in-out duration-400'
                                href='/'
                                rel='noopener noreferrer'>
                                &#x25CF; Пригласить в тендер
                            </Link>
                        </li>
                    </ul>

                    <div
                        className='navAnimation'
                        onClick={() => {
                            toggle();
                            blockScroll();
                        }}>
                        <button
                            type='button'
                            className='rounded-full px-[72px] lg:px-[58] py-[12px] lg:py-[18px] bg-blue hover:bg-hover transition ease-in-out duration-400'>
                            <span className='text-[18px] lg:text-[19px] tracking-wide leading-[24px] font-medium text-white '>
                                Обсудить проект
                            </span>
                        </button>
                    </div>

                    <ul className='navAnimation flex flex-col gap-[10px] text-[13px] tracking-[4%] leading-[17px] font-medium text-blue  py-[24px]'>
                        <li className='text-[28px] tracking-[1%] leading-[32px] pb-[12px]'>
                            hello@sportnoise.ru
                        </li>
                        <li className='text-[13px] lg:text-[15px] leading-[17px] lg:leading-[26px] tracking-[0.5px]'>
                            Москва, ул. Полковая д. 3, стр. 6
                        </li>
                        <li>+7 (495) 755-85-38</li>
                        <li>
                            <Link
                                href='https://t.me/sportnoise'
                                target='_blank'
                                rel='noopener noreferrer'>
                                Telegram-чат
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default MenuItem;
