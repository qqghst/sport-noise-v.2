//this button is using on video

import React from 'react';
import Image from 'next/image';
import close from '../../../../public/logofolio-and-showreel/close-video.svg';

interface IButtonProps {
    onClick?: (event: React.MouseEvent) => void;
}

const Button: React.FC<IButtonProps> = ({ onClick }) => {
    return (
        <button
            type='button'
            className='rounded-full px-4 lg:px-7 py-1 lg:py-2 border-1 border-solid border-[#686767]'
            onClick={onClick}>
            <Image  
                className='w-[12px] lg:w-[22px] h-[12px] lg:h-[22px]'
                src={close}
                alt='SportNoise'
                width={44 / 2}
                height={44 / 2}
            />
        </button>
    );
};

export default Button;
