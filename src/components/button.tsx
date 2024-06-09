const Button = (props: any) => {
    const { className, onClick, children, disabled, ...rest } = props;

    return (
        <button
            className={`${className} ${disabled && 'disabled'}`}
            onClick={onClick}
            disabled={disabled}
            {...rest}>
            {children}
        </button>
    );
}

export default Button;