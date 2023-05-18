import React from 'react';
import styles from './styles.module.scss';
import { IServiceItemProps } from '@/interfaces/serviceItem.interface';

const ServicesItem: React.FC<IServiceItemProps> = ({title, subtitles, color}) => {
    const isRed = color === 'red';

    const titleClass = ` text-[23px] xl:text-[37px] tracking-[-1%] leading-[52px] font-medium text-${
        isRed ? 'red' : 'blue'
    }`;
    const subtitleClass = `flex flex-col items-start justify-center gap-[4px] tracking-[2%] leading-[28px] font-medium ml-[30%] sm:ml-[40%] lg:ml-[50%] fontSize text-${
        isRed ? 'red' : 'blue'
    }`;
    return (
        <div className={`${styles.gridItem}`}>
            <div className='flex flex-col justify-center'>
                <h5 className={titleClass}>
                    <span className='text-[32px] lg:text-[48px]'>&#x25CF;</span>{' '}
                    {title}
                </h5>
                <ul className={subtitleClass}>
                    {subtitles.map((subtitle, index) => (
                        <li key={index}>{subtitle}</li>
                    ))}
                </ul>
                <div />
            </div>
        </div>
    );
};

export default ServicesItem;
