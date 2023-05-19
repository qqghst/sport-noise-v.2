import React, { useEffect, useRef, useContext } from 'react';
import ProjectItem from './projectItem';
import { projects } from '@/data';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';
import { CursorContext } from '@/ui/custom-cursor/cursor-manager';

interface ProjectsProps {
    projects: any;
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
    const projectsRef = useRef<HTMLDivElement>(null);
    const { setSize } = useContext(CursorContext);

    useEffect(() => {
        if (projectsRef.current) {
            let mm = gsap.matchMedia();
            gsap.registerPlugin(ScrollTrigger);

            mm.add('(min-width:768px)', () => {
                gsap.utils
                    .toArray<HTMLElement>(projectsRef.current!.children)
                    .forEach((elem: any) => {
                        gsap.fromTo(
                            elem,
                            {
                                y: '3%',
                                opacity: 0,
                            },
                            {
                                duration: 0.5,
                                y: '0%',
                                opacity: 1,
                                ease: 'power3.out',
                                scrollTrigger: {
                                    trigger: elem,
                                    start: 'top bottom',
                                    end: 'bottom',
                                    markers: true,
                                },
                            }
                        );
                    });
            });
        }
    }, []);

    const handleLinkClick = () => {
        setSize('regular');
    };
    return (
        <section
            className='mt-[91px] lg:mt-[198px] mb-[40px] md:mb-[96px]  md:px-[64px] lg:px-[128px]'
            id='projects'>
            <div className='mx-auto flex flex-col gap-8'>
                <h2 className='px-5 text-[51px] tracking lg:text-[72px] xl:text-[96px] 2xl:text-[97px] font-medium tracking-[-1px] leading-[32px] lg:leading-[64px] text-black'>
                    ПРОЕКТЫ
                </h2>
                <div
                    ref={projectsRef}
                    className='flex flex-col gap-[32px] lg:gap-[64px]'>
                    {projects &&
                        projects.map((project: any) => (
                            <Link
                                onClick={handleLinkClick}
                                key={project.id}
                                rel='noopener noreferrer'
                                href={`projects/${project.id}`}>
                                <ProjectItem {...project} />
                            </Link>
                        ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
