//this button is using on modal, navbar, video

import React from 'react';
import Image from 'next/image';
import close from '../../../../public/close.svg';

interface IButtonProps {
    onClick?: (event: React.MouseEvent) => void;
    // onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<IButtonProps> = ({ onClick }) => {
    return (
        <button
            type='button'
            className='rounded-full px-7 py-2 border-1 border-solid border-line hover:border-hover transition ease-in-out duration-400'
            onClick={onClick}>
            <Image
                src={close}
                alt='SportNoise'
                width={44 / 2}
                height={44 / 2}
            />
        </button>
    );
};

export default Button;
