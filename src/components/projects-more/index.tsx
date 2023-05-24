import { FC } from 'react';
import Link from 'next/link';
import ProjectMoreItems from './projectsMoreItem';

interface ProjectsProps {
    moreprojects: any;
}

const ProjectsMore: FC<ProjectsProps> = ({ moreprojects }) => {
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
                            <Link
                                key={item.id}
                                rel='noopener noreferrer'
                                href={`projects/${item.id}`}>
                                <ProjectMoreItems
                                    key={item.id}
                                    title={item.title}
                                    imageSrc={item.imageSrc}
                                />
                            </Link>
                        ))}
                    <div className='h-[1px] bg-line w-full' />
                </div>
            </div>
        </section>
    );
};

export default ProjectsMore;
