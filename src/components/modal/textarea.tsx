import styles from './styles.module.scss';

interface ITextarea {
    placeholder: string;
    name: string;
    register: any;
}

const Textarea: React.FC<ITextarea> = ({placeholder, name, register}) => {
    return (
        <textarea
            className={`${styles.textarea}  w-full h-[154px] lg:h-[146px] border-1 border-solid border-line px-[20px] py-[16px]`}
            placeholder={placeholder}
            name={name}
            {...register(name, { required: false })}
        />
    );
};

export default Textarea;
