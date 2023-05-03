import { useState } from 'react';
import Image from 'next/image';
import plus from '../../../public/modal/plus.svg'

interface IAttachFIle {
    name: string;
    register: any;
}

const AttachFile: React.FC<IAttachFIle> = ({ name, register }) => {
    const [drag, setDrag] = useState(false);
    const dragStartHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDrag(true);
    };

    const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDrag(true);
    };

    const onDropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        let files = Array.from(e.dataTransfer.files);
        console.log(files);
        setDrag(false);
    };
    return (
        <div className='hidden lg:block'>
            {drag ? (
                <div
                    className='flex justify-center items-cetner w-[80%] h-[80%] border-1 border-solid border-black'
                    onDragStart={(e) => dragStartHandler(e)}
                    onDragOver={(e) => dragLeaveHandler(e)}
                    onDragLeave={(e) => dragStartHandler(e)}
                    onDrop={(e) => onDropHandler(e)}>
                    Отпустите чтобы загрузить файлы
                </div>
            ) : (
                <div
                    onDragStart={(e) => dragStartHandler(e)}
                    onDragOver={(e) => dragLeaveHandler(e)}
                    onDragLeave={(e) => dragStartHandler(e)}>
                    <label>
                        <input
                            className='hidden'
                            type='file'
                            name={name}
                            {...register(name, { required: false })}
                        />
                        <p className='flex flex-row items-center gap-3 text-[17px] tracking-[0.4px] leading-[30px] font-medium text-blue'>
                            <span>
                                <Image src={plus} alt='plus' width={50 / 2} height={50 / 2}/>
                            </span>
                            Прикрепить файл
                        </p>
                    </label>
                </div>
            )}
        </div>
    );
};

export default AttachFile;
