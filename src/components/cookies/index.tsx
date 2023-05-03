import React from 'react';
import Image from 'next/image';
import cookie from '../../../public/cookies/cookies.svg';

const Cookies: React.FC = () => {
    return (
        <div className='bg-white w-[375px] lg:w-[433px] h-[50px] lg:h-[60px] flex justify-center items-center drop-shadow-[0_4px_24px_rgba(0,0,0,0.13)]'>
            <div className='flex flex-row justify-center items-center gap-10'>
                <div className='flex flex-row justify-center items-center gap-4'>
                    <Image
                        src={cookie}
                        alt='cookie'
                        width={64 / 2}
                        height={64 / 2}
                    />
                    <p className='text-[12px] lg:text-[13px] tracking-normal lg:tracking-wide leading-[16px] lg:leading-[17px] font-medium text-blue'>
                        Мы используем cookie.
                    </p>
                </div>
                <button
                    type='button'
                    className='rounded-full px-[22px] py-[8px] bg-blue hover:bg-hover transition ease-in-out delay-150 hidden lg:block'>
                    <span className='text-[13px] tracking-wide leading-[17px] font-medium text-white'>
                        Согласен
                    </span>
                </button>
                <button
                    type='button'
                    className='rounded-full px-[22px] py-[8px] bg-blue hover:bg-hover transition ease-in-out delay-150 block lg:hidden'>
                    <span className='text-[18px] tracking-normal leading-[21px] font-medium text-white'>
                        Ок
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Cookies;
