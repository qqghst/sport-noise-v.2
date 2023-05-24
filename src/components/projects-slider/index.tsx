import { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import ProjectItem from './projectItem';
import { projects } from '@/data/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore, { Mousewheel } from 'swiper';
SwiperCore.use([Mousewheel]);

type Project = {
    id: number;
    link: string;
    image: string;
    imageMobile: string;
    title: string;
    description: string;
    smallDescription: string;
};

type ProjectSliderProps = {
    currentProjectIndex: number;
};

const ProjectSlider: FC<ProjectSliderProps> = ({ currentProjectIndex }) => {
    const [shuffledProjects, setShuffledProjects] = useState<Project[]>([]);

    useEffect(() => {
        const shuffledArray = [...projects];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [
                shuffledArray[j],
                shuffledArray[i],
            ];
        }
        setShuffledProjects(shuffledArray);
    }, []);

    const filteredProjects = shuffledProjects.filter(
        (project) => project.id !== currentProjectIndex
    );

    return (
        <section className='pt-[32px] lg:pt-[156px] px-0 md:px-[64px] lg:px-[128px]'>
            <div className='flex flex-col'>
                <h2 className='px-5 text-[23px] lg:text-[28px] tracking-[1%] leading-[32px] font-medium text-black pb-[16px]'>
                    Больше проектов
                </h2>
                <div className='relative'>
                    <Swiper
                        className=''
                        slidesPerView={2}
                        spaceBetween={32}
                        loop={true}
                        breakpoints={{
                            320: {
                                slidesPerView: 1.1,
                                spaceBetween: 8,
                            },
                            768: {
                                slidesPerView: 1.2,
                                spaceBetween: 20,
                            },
                            1280: {
                                slidesPerView: 2.2,
                                spaceBetween: 20,
                            },
                        }}>
                        {filteredProjects.map((project) => (
                            <SwiperSlide key={project.id}>
                                <Link
                                    href={`/projects/${project.id}`}
                                    rel='noopener noreferrer'>
                                    <ProjectItem
                                        key={project.id}
                                        image={project.image}
                                        imageMobile={project.imageMobile}
                                        title={project.title}
                                        description={project.description}
                                        smallDescription={
                                            project.smallDescription
                                        }
                                    />
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default ProjectSlider;
