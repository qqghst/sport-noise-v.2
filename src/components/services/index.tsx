import { FC } from 'react';
import styles from './styles.module.scss';
import { services } from '../../data/data';
import ServicesItem from './servicesItem';

const Services: FC = () => {
    return (
        <section
            className='bg-[#F7F7F9] mt-[80px] md:mt-[173px] mb-[80px] px-5 md:px-[64px] lg:px-[128px]'
            id='services'>
            <div className=' pt-[69px] md:pt-[142px] pb-[66px] md:pb-[180px]'>
                <h2 className='text-[51px] tracking lg:text-[72px] xl:text-[96px] 2xl:text-[97px] font-medium tracking-[-1px] leading-[32px] lg:leading-[64px] text-black  pb-[46px] lg:pb-[73px]'>
                    УСЛУГИ
                </h2>
                <div className={`${styles.gridContainer}`}>
                    {services.map((service) => (
                        <ServicesItem
                            key={service.id}
                            title={service.title}
                            subtitles={service.subtitles}
                            color={service.color}
                        />
                    ))}
                    <p className='text-red hidden'>red</p>
                </div>
            </div>
        </section>
    );
};

export default Services;
