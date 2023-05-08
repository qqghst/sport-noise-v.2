import React, {useContext} from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface IProjectItemProps {
    title: string;
    description: string;
    smallDescription: string;
    image?: string;
    link: string;
    imageMobile?:string;
}

const ProjectItem: React.FC<IProjectItemProps> = ({link, imageMobile, image, title, description, smallDescription}) => {
    return (
        <div className='flex flex-col justify-center  gap-4 '>
            <a href={link}>
                <picture>
                    <source
                        className='w-full h-full object-fit block'
                        srcSet={imageMobile}
                        media='(max-width: 640px)'
                    />
                    <img
                        className=' w-full h-full object-fit block'
                        src={image}
                        alt={title}
                        width={2000 / 2}
                        height={2000 / 2}
                    />
                </picture>
            </a>

            <div className='flex flex-col px-5 md:px-0'>
                <p className='text-[16px] lg:text-[28px] tracking-[1%] leading-[32px] font-medium text-black pb-1'>
                    {title}
                </p>
                <p className='text-[14px] lg:text-[17px] tracking-[2%] leading-[18px] font-medium text-black pb-2'>
                    {description}
                </p>
                <p className='text-[12px] lg:text-[13px] tracking-[4%] leading-[17px] font-medium text-grey'>
                    {smallDescription}
                </p>
            </div>
        </div>
    );
};

export default ProjectItem;
