const BADGE_TYPES = {
    primary: 'bg-[#ff805A] !text-white',
    secondary: 'bg-themeSecondary !text-white',
    active: '!text-success-500 bg-success-100',
    inactive: '!text-neutral-500 bg-neutral-100',
    error: '!text-severe-warning-500 bg-error-100',
    pending: '!text-warning-500 bg-warning-50',
    info: '!text-selection-500 bg-selection-50',
    black: '!text-white bg-black',
    border: '!text-black bg-white border-1',
};

const Badge = (props: any) => {
    const { children, type, className, ...rest } = props;
    return (
        <label
            className={`flex justify-center w-[min-content_1fr] rounded-full py-1 px-2 py-0 text-xs caption capitalize whitespace-nowrap ${BADGE_TYPES[type]} ${className || ''}`}
            style={{ width: 'min-content' }}
            {...rest}>
            {children}
        </label>
    );
};

export default Badge;
