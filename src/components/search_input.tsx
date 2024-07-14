import DynamicHeroIcon from '@/components/icon_outline';

const SearchInput = (props: any) => {
    const { left, right, value, onChange, placeholder, ...attr } = props;

    return (
        <div className="relative">
            {left?.icon && <span className="absolute start-4 bottom-3 text-gray-500 dark:text-gray-400">
                <DynamicHeroIcon icon={left.icon} />
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
                placeholder={placeholder}
                className={`block py-2 ps-10 pe-0 w-full text-sm text-gray-900 bg-gray-100 border-2 rounded-md border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer`}
            />
        </div>
    );
}

export default SearchInput;