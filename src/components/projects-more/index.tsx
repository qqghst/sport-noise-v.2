import React from 'react';
import Link from 'next/link';
import ProjectMoreItems from './projectsMoreItem';

const ProjectsMore = ({ moreprojects }: any) => {
    return (
        <section
            id='serviceId'
            className='bg-white mb-[48px] md:mb-[156px] px-5 md:px-[64px] lg:px-[128px]'>
            <div className='mx-auto'>
                <h2 className='stylesMoreProjectsTitle pb-[16px]'>
                    Больше проектов
                </h2>
                <div>
                    {moreprojects &&
                        moreprojects.map((item: any, index: any) => (
                            <a
                                key={item.id}
                                rel='noopener noreferrer'
                                href={`projects/${item.id}`}>
                                <ProjectMoreItems
                                    key={item.id}
                                    title={item.title}
                                    imageSrc={item.imageSrc}
                                />
                            </a>
                        ))}
                    <div className='h-[1px] bg-line w-full' />
                </div>
            </div>
        </section>
    );
};

export default ProjectsMore;
