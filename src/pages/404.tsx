import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import notFound from '../../public/not-found/not-found.webp'

const NotFound = () => {
    return (
        <section className='bg-white'>
            <div className='min-h-screen mx-auto px-6 md:px-[64px] lg:px-[128px] flex flex-col justify-center items-center'>
                <Image
                    src={notFound}
                    alt='SportNoise'
                    width={2000 / 2}
                    height={1200 / 2}
                />
                <div>
                    <div className='flex flex-col justify-center items-center gap-[16px] pb-[48px]'>
                        <h3 className='text-[51px] lg:text-[97px] leading-[32px] lg:leading-[65px] tracking-[-0.5px] lg:tracking-[-1px] font-medium text-black'>
                            404
                        </h3>
                        <p className='text-[18px] leading-[21px] lg:text-[28px] lg:leading-[38px] lg:tracking-[0.13px] font-medium text-black'>
                            Что-то пошло не так...
                        </p>
                    </div>
                    <div className='flex flex-col gap-3 md:flex-row lg:gap-[12px] justify-center items-center w-full md:w-fit text-[18px] md:text-[19px]  leading-[24px] font-medium text-white'>
                        <button
                            type='button'
                            className='rounded-full px-[64px] py-[18px] bg-blue hover:bg-hover transition ease-in-out duration-400 w-full md:w-fit tracking-wide'>
                            <Link
                                href='/'
                                rel='noopener noreferrer'>
                                Главная страница
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NotFound;
