import DynamicHeroIcon from '@/components/icon';

const PhoneNumber = (props: any) => {
    const { left, right, value, onChange, placeholder, ...attr } = props;

    return (
        <div className="relative">
            {left?.icon && <span className="absolute start-0 bottom-3 text-gray-500 dark:text-gray-400">
                <DynamicHeroIcon icon={left.icon} />
            </span>}
            {left?.text && <span className="absolute start-6 bottom-2 text-gray-500 dark:text-gray-400">
                <span>{left.text}</span>
            </span>}
            <input
                type={attr.type}
                pattern={attr.pattern}
                value={value}
                onChange={(e) => {
                    e.stopPropagation();
                    onChange(e.target.value);
                }}
                id="phone-number"
                className={`block py-2 ps-16 pe-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer`}
                placeholder=" "
            />
            <label
                htmlFor="phone-number"
                className={`absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-placeholder-shown:start-16 peer-focus:start-0 peer-focus:text-black peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto`}>
                {placeholder}
            </label>
        </div>
    );
}

export default PhoneNumber;