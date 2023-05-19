import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ProjectSlider from '@/components/projects-slider';

interface ProjectsProps {
    routingprojects: any;
}

const ProjectRoutePage: React.FC<ProjectsProps> = ({ routingprojects }) => {
    const { images, title, paragraph, color, ending } = routingprojects || {};
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);
    const currentProjectIndex = routingprojects?.id;
    if (!routingprojects) {
        return <h1>Empty contact</h1>;
    }

    return (
        <>
            <div className='flex flex-col justify-center items-center'>
                <div
                    className='absolute text-text-routing'
                    style={{ color: `${color}` }}>
                    <h1 className='pb-[20px] text-routing-h1'>{title}</h1>
                    <p className='pb-[54px] lg:pb-[23px] text-routing-p'>
                        {paragraph}
                    </p>
                    <p className='text-routing-p2'>{ending}</p>
                </div>
                {images &&
                    images.map(
                        (image: any, index: number) =>
                            image.desktop &&
                            (!isMobile || (isMobile && image.mobile)) && (
                                <Image
                                    className='image-routing'
                                    src={
                                        isMobile ? image.mobile : image.desktop
                                    }
                                    alt='SportNoise'
                                    width={3000 / 2}
                                    key={index}
                                />
                            )
                    )}
            </div>
            <ProjectSlider currentProjectIndex={currentProjectIndex} />
        </>
    );
};

export default ProjectRoutePage;
