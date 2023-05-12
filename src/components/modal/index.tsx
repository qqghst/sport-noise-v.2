import React, { useEffect } from 'react';
import styles from './styles.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';

import Input from './input';
import Checkbox from './checkbox';
import Textarea from './textarea';
import PersonalData from './personal-data';
import AttachFile from './attach-file';

import Button from '../../ui/buttons/button-border';
import { useScrollBlock } from '@/hooks/useScrollBlock';

interface IReactHookFormProps {
    name: string;
    email: string;
    company: string;
    commentary: string;
    checkbox: boolean;
    file: FileList;
}

interface IUseModalProps {
    isOpen: boolean;
    toggle: () => void;
    designAudit: any;
    joinTenderChecked: any;
    setDesignAudit: any;
    setJoinTenderChecked: any;
}
const Modal: React.FC<IUseModalProps> = ({
    isOpen,
    toggle,
    designAudit,
    joinTenderChecked,
    setDesignAudit,
    setJoinTenderChecked,
}) => {
    const [blockScroll, allowScroll] = useScrollBlock();
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm<IReactHookFormProps>({
        mode: 'onBlur',
    });
    const onSubmit: SubmitHandler<IReactHookFormProps> = (data) => {
        alert(JSON.stringify(data));
        reset();
    };
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && isOpen) {
                toggle();
                allowScroll();
                reset();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);

    const handleModalClose = () => {
        setDesignAudit(false);
        setJoinTenderChecked(false);
    };
    return (
        <>
            {isOpen && (
                <div className={`${styles.modalOverlay}`}>
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className={`${styles.modalBox}`}>
                        <section className=''>
                            <div className='hidden sm:flex flex-row justify-end sm:items-start gap-[32px] mb-3'>
                                <h2 className='text-[28px] tracking-[0.14px]  leading-[38px] font-medium text-black self-end items-end'>
                                    Получите консультацию <br /> или узнайте
                                    стоимость проекта
                                </h2>
                                <Button
                                    onClick={() => {
                                        toggle();
                                        allowScroll();
                                        reset();
                                        handleModalClose();
                                    }}
                                />
                            </div>
                            <div className='mb-3'>
                                <div className='sm:hidden flex flex-row justify-between items-center mb-1'>
                                    <div className=''></div>
                                    {/* <Button
                                        onClick={() => {
                                            toggle();
                                            allowScroll();
                                        }}
                                    /> */}
                                </div>
                                <h2 className='sm:hidden flex text-[19px] tracking-[0.13px]  leading-[25px] font-medium text-black self-end items-end'>
                                    Получите консультацию или узнайте стоимость
                                    проекта
                                </h2>
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className=' flex flex-col gap-[15px]'>
                                    <Input
                                        register={register}
                                        name='name'
                                        placeholder='Имя'
                                        type='text'
                                        errors={errors}
                                    />
                                    <Input
                                        register={register}
                                        name='email'
                                        placeholder='E-mail'
                                        type='text'
                                        errors={errors}
                                        pattern={{
                                            value: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                                            message: 'Некорректный email',
                                        }}
                                    />
                                    <Input
                                        register={register}
                                        name='company'
                                        placeholder='Название компании'
                                        type='text'
                                        errors={errors}
                                    />
                                </div>

                                <div className='pt-[22px]'>
                                    <h3 className='text-[18px] lg:text-[19px] tracking-[2%] lg:tracking-[1%] leading-[21px] lg:leading-[24px] font-medium text-black pb-[18px]'>
                                        Что вас интересует?
                                    </h3>
                                    <div className=''>
                                        <div className='hidden sm:block'>
                                            <div className='flex flex-col gap-[22px]'>
                                                <div className='flex flex-row gap-[10px]'>
                                                    <Checkbox
                                                        text='логотип'
                                                        name='логотип'
                                                        register={register}
                                                        defaultChecked={false}
                                                    />
                                                    <Checkbox
                                                        text='фирменный стиль'
                                                        name='фирменный стиль'
                                                        register={register}
                                                        defaultChecked={false}
                                                    />
                                                    <Checkbox
                                                        text='брендинг'
                                                        name='брендинг'
                                                        register={register}
                                                        defaultChecked={false}
                                                    />
                                                </div>
                                                <div className='flex flex-row gap-[10px]'>
                                                    <Checkbox
                                                        text='веб-разработка'
                                                        name='веб-разработка'
                                                        register={register}
                                                        defaultChecked={false}
                                                    />
                                                    <Checkbox
                                                        text='комплексные услуги'
                                                        name='комплексные услуги'
                                                        register={register}
                                                        defaultChecked={false}
                                                    />
                                                </div>
                                                <div className='flex flex-row gap-[10px]'>
                                                    <Checkbox
                                                        text='дизайн-аудит '
                                                        name='дизайн-аудит '
                                                        register={register}
                                                        defaultChecked={
                                                            designAudit
                                                        }
                                                    />
                                                    <Checkbox
                                                        text='дизайн сопровождение'
                                                        name='дизайн сопровождение'
                                                        register={register}
                                                        defaultChecked={false}
                                                    />
                                                </div>
                                                <div className='flex flex-row gap-[10px]'>
                                                    <Checkbox
                                                        text='техническое партнерство'
                                                        name='техническое партнерство'
                                                        register={register}
                                                        defaultChecked={false}
                                                    />
                                                    <Checkbox
                                                        text='тендер '
                                                        name='тендер '
                                                        register={register}
                                                        defaultChecked={
                                                            joinTenderChecked
                                                        }
                                                    />
                                                    <Checkbox
                                                        text='другое'
                                                        name='другое'
                                                        register={register}
                                                        defaultChecked={false}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className='block sm:hidden'>
                                            <div className='flex flex-col gap-[20px]'>
                                                <div className='flex flex-row gap-[10px]'>
                                                    <Checkbox
                                                        text='логотип'
                                                        name='логотип'
                                                        register={register}
                                                        defaultChecked={false}
                                                    />
                                                    <Checkbox
                                                        text='фирменный стиль'
                                                        name='фирменный стиль'
                                                        register={register}
                                                        defaultChecked={false}
                                                    />
                                                </div>
                                                <div className='flex flex-row gap-[10px]'>
                                                    <Checkbox
                                                        text='брендинг'
                                                        name='брендинг'
                                                        register={register}
                                                        defaultChecked={false}
                                                    />
                                                    <Checkbox
                                                        text='веб-разработка'
                                                        name='веб-разработка'
                                                        register={register}
                                                        defaultChecked={false}
                                                    />
                                                </div>
                                                <div className='flex flex-row gap-[10px]'>
                                                    <Checkbox
                                                        text='дизайн-аудит '
                                                        name='дизайн-аудит '
                                                        register={register}
                                                        defaultChecked={
                                                            designAudit
                                                        }
                                                    />
                                                    <Checkbox
                                                        text='тендер '
                                                        name='тендер '
                                                        register={register}
                                                        defaultChecked={
                                                            joinTenderChecked
                                                        }
                                                    />
                                                    <Checkbox
                                                        text='другое'
                                                        name='другое'
                                                        register={register}
                                                        defaultChecked={false}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='mt-[28px]'>
                                    <h3 className='text-[18px] lg:text-[19px] tracking-[2%] lg:tracking-[1%] leading-[21px] lg:leading-[24px] font-medium text-black pb-[12px]'>
                                        Комментарий
                                    </h3>
                                    <Textarea
                                        name='commentary'
                                        placeholder={`Опишите задачу, сроки\nи пожелания к проекту`}
                                        register={register}
                                    />
                                </div>

                                <div className='mt-[22px]'>
                                    <PersonalData
                                        register={register}
                                        name='personalData'
                                        errors={errors}
                                        required='Обязательное условие'
                                    />
                                </div>

                                <div className='flex justify-center lg:justify-between items-center mt-8'>
                                    <AttachFile
                                        register={register}
                                        name='file'
                                    />
                                    <button
                                        type='submit'
                                        className='rounded-full px-[72px] lg:px-[58] py-[12px] lg:py-[18px] bg-blue hover:bg-hover transition ease-in-out duration-400  w-full lg:w-6/12'>
                                        <span className='text-[18px] lg:text-[19px] tracking-wide leading-[24px] font-medium text-white'>
                                            <input
                                                type='submit'
                                                value='Отправить'
                                            />
                                        </span>
                                    </button>
                                </div>
                            </form>
                            <div className='flex sm:hidden justify-center items-center mt-7'>
                                <Button
                                    onClick={() => {
                                        toggle();
                                        allowScroll();
                                        reset();
                                        handleModalClose();
                                    }}
                                />
                            </div>
                        </section>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
