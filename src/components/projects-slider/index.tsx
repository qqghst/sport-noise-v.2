import React from 'react';
import ProjectItem from './projectItem';
import { projects } from '@/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore, { Mousewheel } from 'swiper';
SwiperCore.use([Mousewheel]);

const ProjectSlider: React.FC = () => {
    return (
        <section className='pt-[32px] lg:pt-[156px] px-0 md:px-[64px] lg:px-[128px]'>
            <div className='flex flex-col'>
                <h2 className='text-[23px] lg:text-[28px] tracking-[1%] leading-[32px] font-medium text-black pb-[16px]'>
                    Больше проектов
                </h2>
                <div className='relative'>
                    <Swiper
                        className=''
                        slidesPerView={2}
                        spaceBetween={32}
                        loop={true}
                        mousewheel={true}
                        breakpoints={{
                            320: {
                                slidesPerView: 1.1,
                                spaceBetween: 20,
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
                        {projects.map((project) => (
                            <SwiperSlide key={project.id}>
                                <ProjectItem
                                    link={project.link}
                                    key={project.id}
                                    image={project.image}
                                    imageMobile={project.imageMobile}
                                    title={project.title}
                                    description={project.description}
                                    smallDescription={project.smallDescription}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default ProjectSlider;
