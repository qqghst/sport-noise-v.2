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
            className='rounded-full px-4 lg:px-7 py-1 lg:py-2 border-[1px] border-solid border-[#686767]'
            onClick={onClick}>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width='19'
                height='18'
                fill='none'>
                <path
                    fill='#686767'
                    fillRule='evenodd'
                    d='m16.791 17.86 1.768-1.767-7.071-7.072 7.071-7.07L16.791.182l-7.07 7.07L2.648.184.881 1.95l7.071 7.071-7.07 7.072 1.767 1.767 7.071-7.07 7.071 7.07Z'
                    clipRule='evenodd'
                />
            </svg>
        </button>
    );
};

export default Button;
