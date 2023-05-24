import { FC } from 'react';
import styles from './styles.module.scss'

interface ICheckboxProps {
    text: string;
    register: any;
    name: string;
    defaultChecked?: any;
}

const Checkbox: FC<ICheckboxProps> = ({
    text,
    register,
    name,
    defaultChecked,
}) => {
    return (
        <div className={`${styles.customCheckbox}`}>
            <label>
                <input
                    defaultChecked={defaultChecked}
                    className='hidden'
                    type='checkbox'
                    name={name}
                    {...register(name, { required: false })}
                />
                <span className='text-[13px] tracking-[4%] leading-[17px] text-blue'>
                    {text}
                </span>
            </label>
        </div>
    );
};

export default Checkbox;
