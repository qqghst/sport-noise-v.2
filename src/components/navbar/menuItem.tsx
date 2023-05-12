import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import close from '../../../public/close.svg';
import Modal from '../modal';
import useModal from '../../hooks/useModal';
import { useScrollBlock } from '@/hooks/useScrollBlock';
import Button from '../../ui/buttons/button-border';

interface ICheckProps {
    designAudit: any;
    setDesignAudit: any;
    joinTenderChecked: any;
    setJoinTenderChecked: any;
    exitRef: any;
}

// const MenuItem: React.FC<{ exitRef: React.RefObject<HTMLDivElement> }> = ({
//     exitRef,
// }) => {
const MenuItem: React.FC<ICheckProps> = ({
    exitRef,
    designAudit,
    setDesignAudit,
    joinTenderChecked,
    setJoinTenderChecked,
}) => {
    const { isOpen, toggle } = useModal();
    const [blockScroll, allowScroll] = useScrollBlock();
    return (
        <>
            <Modal
                isOpen={isOpen}
                toggle={toggle}
                designAudit={designAudit}
                joinTenderChecked={joinTenderChecked}
                setDesignAudit={setDesignAudit}
                setJoinTenderChecked={setJoinTenderChecked}></Modal>
            <div className='menuOpen overflow-scroll  fixed top-0 right-[-100%] w-full md:w-[50%] xl:w-[35%] 2xl:w-[30%] h-full bg-white flex flex-col items-center justify-start opacity-0 z-[30007582354723] drop-shadow-[0_4px_25px_rgba(0,0,0,0.13)]'>
                <div className='flex flex-row items-center justify-between gap-[150px] lg:gap-[180px]  py-5 md:pt-[58px]'>
                    <div className='text-[26px] tracking-[-1px] leading-[32px] font-medium flex gap-3'>
                        <span className='text-black underline'>Ru</span>
                        <button>
                            <span className='text-grey hover:text-hover transition ease-in-out duration-400'>
                                En
                            </span>
                        </button>
                    </div>
                    <div
                        ref={exitRef}
                        className='opacity-0 md:opacity-100'>
                        <Button onClick={allowScroll} />
                    </div>
                </div>

                <div>
                    <ul
                        onClick={allowScroll}
                        className='navAnimation text-blue font-medium text-left text-[26px] lg:text-[42px] tracking-[-0.5px] leading-[32px] lg:leading-[57px] flex flex-col gap-3'>
                        <div className=' block lg:hidden h-[1px] bg-line w-full left-0 right-0' />
                        <li className=''>
                            <Link
                                href='/#projects'
                                className='text-blue hover:text-hover transition ease-in-out duration-400 pr-[72px] lg:pr-[120px]'>
                                ПРОЕКТЫ
                            </Link>
                        </li>

                        <div className='block lg:hidden h-[1px] bg-line w-full' />
                        <li>
                            <Link
                                href='/#services'
                                className='text-blue hover:text-hover transition ease-in-out duration-400 pr-[72px] lg:pr-[150px]'>
                                УСЛУГИ
                            </Link>
                        </li>
                        <div className='block lg:hidden h-[1px] bg-line w-full' />
                        <li>
                            <Link
                                href='/#aboutSecond'
                                className='text-blue hover:text-hover transition ease-in-out duration-400 pr-[72px] lg:pr-[160px]'>
                                О НАС
                            </Link>
                        </li>
                        <div className='block lg:hidden h-[1px] bg-line w-full' />
                    </ul>
                    <ul className='text-blue font-medium text-left text-[15px] lg:text-[17px] leading-[26px] lg:leading-[30px] tracking-[0.5px] flex flex-col gap-2 py-7'>
                        <li className='navAnimation'>
                            <Link
                                href='/'
                                className='text-blue hover:text-hover transition ease-in-out duration-400 pr-[72px] lg:pr-[100px]'
                                rel='noopener noreferrer'>
                                &#x25CF; Скачать презентацию
                            </Link>
                        </li>
                        <li className='navAnimation'>
                            <Link
                                className='text-blue hover:text-hover transition ease-in-out duration-400 pr-[72px] lg:pr-[150px]'
                                href='https://docs.google.com/forms/d/e/1FAIpQLSd3m57aXVTB-0EKbo3nQ_lPyx7SA2KIdw6TqOXr71Q6J8--eQ/viewform'
                                rel='noopener noreferrer'
                                target='_blank'>
                                &#x25CF; Заполнить бриф
                            </Link>
                        </li>
                        <li
                            onClick={() => {
                                toggle();
                                blockScroll();
                                setDesignAudit(!designAudit);
                            }}
                            className='navAnimation'>
                            <button
                                className='text-blue hover:text-hover transition ease-in-out duration-400 pr-[72px] lg:pr-[150px]'
                                rel='noopener noreferrer'>
                                &#x25CF; Дизайн аудит
                            </button>
                        </li>
                        <li
                            onClick={() => {
                                toggle();
                                blockScroll();
                                setJoinTenderChecked(!joinTenderChecked);
                            }}
                            className='navAnimation'>
                            <button className='text-blue hover:text-hover transition ease-in-out duration-400 pr-[72px] lg:pr-[100px]'>
                                &#x25CF; Пригласить в тендер
                            </button>
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
                        <li className='text-[28px] tracking-[1%] leading-[32px] pb-[12px] hover:text-hover transition ease-in-out duration-400'>
                            <Link href='mailto:hello@sportnoise.ru'>
                                hello@sportnoise.ru
                            </Link>
                        </li>
                        <li className='text-[13px] lg:text-[15px] leading-[17px] lg:leading-[26px] tracking-[0.5px]'>
                            Москва, ул. Полковая д. 3, стр. 6
                        </li>
                        <li>+7 (495) 755-85-38</li>
                        <li className='hover:text-hover transition ease-in-out duration-400'>
                            <Link
                                href='https://t.me/sportnoise'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='pr-[72px] lg:pr-[260px]'>
                                Telegram-чат
                            </Link>
                        </li>
                    </ul>
                </div>
                <div
                    ref={exitRef}
                    className='block md:hidden fixed bottom-0 py-4'>
                    <Button onClick={allowScroll} />
                </div>
            </div>
        </>
    );
};

export default MenuItem;
