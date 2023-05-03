import React from 'react';
import Marquee from 'react-fast-marquee';

interface IMarqueeProps {
    text: string;
    direction: 'left' | 'right' | 'up' | 'down' | undefined;
    className?: string;
}

const MarqueeText: React.FC<IMarqueeProps> = ({text, direction, className,}) => {
    return (
        <section className={className}>
            <Marquee
                speed={80}
                gradient={false}
                direction={direction}>
                <h2 className='text-[51px] sm:text-[65px] md:text-[72px] lg:text-[80px] xl:text-[97px] tracking-[-0.13px] font-medium uppercase'>
                    {text}
                </h2>
            </Marquee>
        </section>
    );
};

export default MarqueeText;
