import React from 'react';
import Marquee from 'react-fast-marquee';

interface IMarqueeProps {
    text: string;
    className?: string;
}

const MarqueeText: React.FC<IMarqueeProps> = ({text, className,}) => {
    return (
        <section className={className}>
            <Marquee
                speed={140}
                gradient={false}
                direction='right'>
                <h2 className='text-[51px] sm:text-[65px] md:text-[72px] lg:text-[97px]  tracking-[-0.13px] font-medium uppercase'>
                    {text}
                </h2>
            </Marquee>
        </section>
    );
};

export default MarqueeText;
