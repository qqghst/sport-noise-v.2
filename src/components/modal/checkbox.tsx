interface ICheckboxProps {
    text: string;
    register: any;
    name: string;
    defaultChecked?: any;
}

const Checkbox: React.FC<ICheckboxProps> = ({ text, register, name, defaultChecked }) => {
    return (
        <div className='customCheckbox'>
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
