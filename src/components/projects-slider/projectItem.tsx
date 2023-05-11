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
                <p className='text-[12px] xl:text-[13px] tracking-[0.2px] xl:tracking-[0.6px] leading-[16px] font-medium text-black pb-[2.5px]'>
                    {title}
                </p>
                <p className='text-[14px] lg:text-[17px] tracking-[0.2px] xl:tracking-[0.4px] leading-[18px] font-medium text-black pb-[8px]'>
                    {description}
                </p>
                <p className='text-[12px] lg:text-[13px] tracking-[0.2px] xl:tracking-[0.6px] leading-[16px] font-medium text-grey'>
                    {smallDescription}
                </p>
            </div>
        </div>
    );
};

export default ProjectItem;
