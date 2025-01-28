import DynamicHeroIcon from '@/components/icon_outline';
import Button from './button';

const SearchInput = (props: any) => {
    const { left, right, value, onClick, onKeyDown, onChange, placeholder, autoFocus, ...attr } = props;

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
                onClick={onClick}
                onKeyDown={onKeyDown}
                id="phone-number"
                placeholder={placeholder}
                autoFocus={autoFocus}
                className={`block py-2 ps-10 pe-0 w-full text-sm text-gray-900 bg-gray-100 border-2 rounded-md border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer`}
            />
            {right?.icon && <span className="absolute end-4 bottom-1 text-gray-500 dark:text-gray-400">
                <Button><DynamicHeroIcon icon={right.icon} onClick={right.onClick} /></Button>
            </span>}
        </div>
    );
}

export default SearchInput;