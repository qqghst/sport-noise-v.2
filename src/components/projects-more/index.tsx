import React from 'react';
import { moreprojects } from '@/data';
import ProjectMoreItems from './projectsMoreItem';

const ProjectsMore = () => {
    return (
        <section
            id='serviceId'
            className='bg-white mb-[48px] md:mb-[156px] px-5 md:px-[64px] lg:px-[128px]'>
            <div className='mx-auto'>
                <h2 className='stylesMoreProjectsTitle pb-[16px]'>
                    Больше проектов
                </h2>
                <div>
                    {moreprojects.map((item, index) => (
                        <ProjectMoreItems
                            key={item.id}
                            title={item.title}
                            imageSrc={item.imageSrc}
                        />
                    ))}
                    <div className='h-[1px] bg-line w-full' />
                </div>
            </div>
        </section>
    );
};

export default ProjectsMore;
