import React from 'react';

interface ITextProps {
    title: string;
    paragraph: string;
    ending: string;
    color: string;
}

const Text: React.FC<ITextProps> = ({ title, paragraph, ending, color }) => {
    return (
        <div
            className='absolute text-text-routing'
            style={{ color: `${color}` }}>
            <h1 className='pb-[20px] text-routing-h1'>{title}</h1>
            <p className='pb-[54px] lg:pb-[23px] text-routing-p'>{paragraph}</p>
            <p className='text-routing-p2'>{ending}</p>
        </div>
    );
};

export default Text;
