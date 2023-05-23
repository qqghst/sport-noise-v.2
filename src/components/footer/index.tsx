import React, {useEffect} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Modal from '../modal';
import useModal from '@/hooks/useModal';
import { useScrollBlock } from '@/hooks/useScrollBlock';
import { ICheckedProps } from '@/interfaces/checked.interface';

const Footer: React.FC<ICheckedProps> = ({
    designAudit,
    setDesignAudit,
    joinTenderChecked,
    setJoinTenderChecked,
}) => {
    const { isOpen, toggle } = useModal();
    const [blockScroll, allowScroll] = useScrollBlock();

    const router = useRouter();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        const handleRouteChange = () => {
            scrollToTop();
        };

        router.events.on('routeChangeComplete', handleRouteChange);

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);
    return (
        <>
            <Modal
                designAudit={designAudit}
                joinTenderChecked={joinTenderChecked}
                setDesignAudit={setDesignAudit}
                setJoinTenderChecked={setJoinTenderChecked}
                isOpen={isOpen}
                toggle={toggle}></Modal>
            <footer className='px-5 md:px-[64px] lg:px-[128px] pb-12'>
                <div className='mx-auto flex flex-col md:flex-row   md:items-start justify-between mt-[83px] md:mt-[128px]'>
                    <div className='flex md:hidden  lg:flex-col justify-center w-full'>
                        <button
                            onClick={() => {
                                toggle();
                                blockScroll();
                            }}
                            type='button'
                            className='rounded-full lg:px-[58] py-4 lg:py-[18px] bg-blue mb-[32px] w-full'>
                            <span className='text-[16px] md:text-[19px] tracking-wide leading-[24px] font-medium text-white'>
                                Обсудить проект
                            </span>
                        </button>
                        <div className='hidden lg:block  text-blue'>
                            <div onClick={scrollToTop}>
                                <svg
                                    className='text-blue hover:text-hover -rotate-90'
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='40'
                                    height='35'
                                    fill='none'>
                                    <path
                                        fill='currentColor'
                                        fillRule='evenodd'
                                        d='M.46 19.464h34.014v-4.361H.46v4.36Z'
                                        clipRule='evenodd'
                                    />
                                    <path
                                        fill='currentColor'
                                        fillRule='evenodd'
                                        d='M33.739 17.29 19.918 3.47 23 .385 39.907 17.29 23 34.195l-3.084-3.084 13.822-13.82Z'
                                        clipRule='evenodd'
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='text-[36px] lg:text-[40px] xl:text-[64px] tracking-[-0.75px] lg:tracking-[-0.6px] leading-[29px] lg:leading-[68px] font-medium text-blue lg:hover:text-hover  lg:pb-[17px] pb-[24px] textFooter'>
                            <Link href='mailto:hello@sportnoise.ru'>
                                hello@sportnoise.ru
                            </Link>
                        </h1>
                        <ul className='flex xl:flex-row md:flex-col  justify-between gap-4 text-[17px] tracking-0 lg:tracking-[0.3px] leading-[28px] font-medium text-blue pb-[22px]'>
                            <li className='text-blue '>+7 (495) 755-85-38</li>
                            <li className='hidden md:block text-blue '>
                                Москва, ул. Полковая д. 3, стр. 6
                            </li>

                            <li className='text-blue lg:hover:text-hover transition ease-in-out duration-400 '>
                                <Link
                                    href='https://t.me/sportnoise'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    Telegram-чат
                                </Link>
                            </li>
                        </ul>
                        <ul className='hidden md:flex  flex-col xl:flex-row  gap-4 xl:gap-8 text-[13px]  leading-[17px] font-medium  pb-[64px]'>
                            <li>
                                <button
                                    className='text-blue lg:hover:text-hover transition ease-in-out duration-400 tracking-[0.5px]'
                                    rel='noopener noreferrer'>
                                    &#x25CF; Скачать презентацию
                                </button>
                            </li>
                            <li>
                                <Link
                                    className='text-blue lg:hover:text-hover transition ease-in-out duration-400 tracking-[0.5px]'
                                    href='https://docs.google.com/forms/d/e/1FAIpQLSd3m57aXVTB-0EKbo3nQ_lPyx7SA2KIdw6TqOXr71Q6J8--eQ/viewform'
                                    rel='noopener noreferrer'
                                    target='_blank'>
                                    &#x25CF; Заполнить бриф
                                </Link>
                            </li>
                            <li>
                                <button
                                    className='text-blue lg:hover:text-hover transition ease-in-out duration-400 tracking-[0.5px]'
                                    onClick={() => {
                                        toggle();
                                        blockScroll();
                                        setDesignAudit(!designAudit);
                                    }}>
                                    &#x25CF; Дизайн аудит
                                </button>
                            </li>
                            <li>
                                <button
                                    className='text-blue lg:hover:text-hover transition ease-in-out duration-400 tracking-[0.5px]'
                                    onClick={() => {
                                        toggle();
                                        blockScroll();
                                        setJoinTenderChecked(
                                            !joinTenderChecked
                                        );
                                    }}>
                                    &#x25CF; Пригласить в аудит
                                </button>
                            </li>
                        </ul>
                        <div className='flex flex-row justify-between items-end'>
                            <p className='w-[300px] lg:w-[500px] pt-[16px] text-[13px] tracking-[0.5px] leading-[21px] font-medium text-grey'>
                                Digital-решения для развития спортивных и
                                клубных брендов.{' '}
                                <Link
                                    href='https://disk.yandex.ru/d/CFt-0eN46Vt4jQ'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    Политика.
                                </Link>{' '}
                                © 2016 — 2023. Digital-студия SportNoise. ООО
                                Спортнойз.
                            </p>
                            <div className='block md:hidden text-blue'>
                                <div onClick={scrollToTop}>
                                    <svg
                                        className='text-blue  -rotate-90'
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='40'
                                        height='35'
                                        fill='none'>
                                        <path
                                            fill='currentColor'
                                            fillRule='evenodd'
                                            d='M.46 19.464h34.014v-4.361H.46v4.36Z'
                                            clipRule='evenodd'
                                        />
                                        <path
                                            fill='currentColor'
                                            fillRule='evenodd'
                                            d='M33.739 17.29 19.918 3.47 23 .385 39.907 17.29 23 34.195l-3.084-3.084 13.822-13.82Z'
                                            clipRule='evenodd'
                                        />
                                    </svg>
                                </div>
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
                        <div className='hidden md:block translate-y-[275px] xl:translate-y-[80px]'>
                            <div onClick={scrollToTop}>
                                <svg
                                    className='text-blue hover:text-hover -rotate-90 hover:cursor-pointer'
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='40'
                                    height='35'
                                    fill='none'>
                                    <path
                                        fill='currentColor'
                                        fillRule='evenodd'
                                        d='M.46 19.464h34.014v-4.361H.46v4.36Z'
                                        clipRule='evenodd'
                                    />
                                    <path
                                        fill='currentColor'
                                        fillRule='evenodd'
                                        d='M33.739 17.29 19.918 3.47 23 .385 39.907 17.29 23 34.195l-3.084-3.084 13.822-13.82Z'
                                        clipRule='evenodd'
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
