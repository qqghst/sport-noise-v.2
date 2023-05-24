import { FC, useContext, useState, useEffect } from 'react';
import Image from 'next/image';

interface IProjectItemProps {
    title: string;
    description: string;
    smallDescription: string;
    image: string;
    imageMobile: string;
}

const ProjectItem: FC<IProjectItemProps> = ({
    imageMobile,
    image,
    title,
    description,
    smallDescription,
}) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);
    return (
        <div className='flex flex-col justify-center  gap-4 '>
            {isMobile ? (
                <Image
                    className='w-full h-full object-cover block'
                    src={imageMobile}
                    alt={title}
                    width={1000 / 2}
                    height={1000 / 2}
                />
            ) : (
                <Image
                    className=' w-full h-full object-cover block'
                    src={image}
                    alt={title}
                    width={2000 / 2}
                    height={2000 / 2}
                />
            )}

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
