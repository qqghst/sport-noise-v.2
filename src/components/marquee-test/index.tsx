import React from 'react';
import styles from './styles.module.scss';
import Marquee from 'react-fast-marquee';

interface IMarqueeTestProps {
    text: string,
    textBorder: string,
    direction: 'left' | 'right' | 'up' | 'down' | undefined,
    directionBorder: 'left' | 'right' | 'up' | 'down' | undefined,
}

const MarqueeTest: React.FC<IMarqueeTestProps> = ({text, textBorder, direction, directionBorder}) => {
    return (
        <>
            <div className='relative flex justify-center items-center overflow-hidden text-[100px] lg:text-[118.88px] uppercase mt-[100px] py-[120px]'>
                <div className=''>
                    <Marquee
                        speed={140}
                        gradient={false}
                        direction={direction}>
                        <h2 className='first'>
                            {text}
                        </h2>
                    </Marquee>
                </div>
                <div className='absolute -rotate-[10deg]'>
                    <Marquee
                        speed={80}
                        gradient={false}
                        direction={directionBorder}>
                        <h2 className={`${styles.second}`}>
                            {textBorder}
                        </h2>
                    </Marquee>
                </div>
            </div>
        </>
    );
};

export default MarqueeTest;
