//this button is using on modal, navbar

import React from 'react';
import Image from 'next/image';
import close from '../../../../public/close.svg';

interface IButtonProps {
    onClick?: (event: React.MouseEvent) => void;
}

const Button: React.FC<IButtonProps> = ({ onClick }) => {
    return (
        <button
            type='button'
            className='rounded-full px-7 py-2 border-[1px] border-solid border-line xl:hover:border-hover transition ease-in-out duration-400 text-blue xl:hover:text-hover'
            onClick={onClick}>
            {/* <Image
                src={close}
                alt='SportNoise'
                width={44 / 2}
                height={44 / 2}
            /> */}
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='19'
                fill='none'
                viewBox='0 0 18 19'>
                <path
                    fill='currentColor'
                    fill-rule='evenodd'
                    d='m16.791 17.86 1.768-1.767-7.071-7.072 7.071-7.07L16.791.182l-7.07 7.07L2.648.184.881 1.95l7.071 7.071-7.07 7.072 1.767 1.767 7.071-7.07 7.071 7.07Z'
                    clip-rule='evenodd'
                />
            </svg>
        </button>
    );
};

export default Button;
