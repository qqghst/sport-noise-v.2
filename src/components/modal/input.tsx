import styles from './styles.module.scss'

interface IInputProps {
    name: string;
    placeholder: string;
    register: any;
    errors: any;
    type: string;
    pattern?: any;
}

const Input: React.FC<IInputProps> = ({
    name,
    placeholder,
    register,
    errors,
    type,
    pattern,
}) => {
    return (
        <>
            <input
                className={`${styles.inputPlaceholder} text-[15px] lg:text-[17px] tracking-[0.5px] leading-[26px] lg:leading-[28px] font-medium py-[10px] pl-[21px]  rounded-full ${
                    errors[name] ? 'bg-[#FDEDF0] border-[1px] border-solid border-[#F9D1D9] text-[#E2183F] placeholder-[#E2183F]' : 'bg-white border-[1px] border-solid border-line text-blue'
                }`}
                {...register(name, { required: true, pattern })}
                name={name}
                placeholder={placeholder}
                type={type}
                onFocus={(e) => e.target.classList.add('border-blue')}
                onChange={(e) => e.target.classList.add('border-blue')}
            />

        </>
    );
};

export default Input;
