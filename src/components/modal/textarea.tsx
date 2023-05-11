import styles from './styles.module.scss';

interface ITextarea {
    placeholder: string;
    name: string;
    register: any;
}

const Textarea: React.FC<ITextarea> = ({placeholder, name, register}) => {
    return (
        <textarea
            className={`${styles.textarea}  w-full h-[154px] lg:h-[146px] border-[1px] border-solid border-line px-[20px] py-[16px] hover:border-hover text-[17px] text-black tracking-[0.4px] leading-[30px]`}
            placeholder={placeholder}
            name={name}
            {...register(name, { required: false })}
        />
    );
};

export default Textarea;
