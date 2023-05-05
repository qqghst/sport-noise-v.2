import React from 'react';
import styles from './styles.module.scss';
import Marquee from 'react-fast-marquee';

const MarqueeTest: React.FC = () => {
    return (
        <>
            <div className='relative flex justify-center items-center overflow-hidden text-[100px] lg:text-[246.51px] uppercase mt-[100px] py-[80px]'>
                <div className=''>
                    <Marquee
                        speed={180}
                        gradient={false}
                        direction='left'>
                        <h2 className='first'>
                            Новая культура в спорте для больших побед в бизнесе
                        </h2>
                    </Marquee>
                </div>
                <div className='absolute -rotate-[10deg]'>
                    <Marquee
                        speed={100}
                        gradient={false}
                        direction='right'>
                        <h2 className={`${styles.second}`}>
                            Новая культура в спорте для больших побед в бизнесе
                        </h2>
                    </Marquee>
                </div>
            </div>
        </>
    );
};

export default MarqueeTest;
