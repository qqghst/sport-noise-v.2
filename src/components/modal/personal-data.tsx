import Link from 'next/link';
import { useState } from 'react';
import styles from './styles.module.scss';

interface IPersonalDataProps {
    register: any;
    name: string;
    required: string;
    errors: any;
}

const PersonalData: React.FC<IPersonalDataProps> = ({
    register,
    name,
    required,
}) => {
    const [isChecked, setIsChecked] = useState<boolean>(true);
    return (
        <div className={`${styles.personalDataStyles} flex flex-row items-center gap-3`}>
            <input
                checked={isChecked}
                onClick={() => setIsChecked((prev) => !prev)}
                name={name}
                type='checkbox'
                {...register(name, { required })}
            />
            <label
                className={`text-[13px] tracking-[4%] leading-[17px] font-medium text-grey`}>
                Я соглашаюсь с обработкой{' '}
                <span className='text-blue'>
                    <Link href='https://disk.yandex.ru/d/CFt-0eN46Vt4jQ' target="_blank" rel="noopener noreferrer">
                        персональных данных
                    </Link>
                </span>
            </label>
        </div>
    );
};

export default PersonalData;
