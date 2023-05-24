import { FC } from 'react';
import Marquee from 'react-fast-marquee';
import { IMarqueeProps } from '@/interfaces/marquee.interface';

const MarqueeText: FC<IMarqueeProps> = ({text, className,}) => {
    return (
        <section className={className}>
            <Marquee
                speed={140}
                gradient={false}
                direction='left'>
                <h2 className='text-[51px] sm:text-[65px] md:text-[72px] lg:text-[97px]  tracking-[-0.13px] font-medium uppercase'>
                    {text}
                </h2>
            </Marquee>
        </section>
    );
};

export default MarqueeText;
