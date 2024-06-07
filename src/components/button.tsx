const Button = (props: any) => {
    const { className, onClick, children, ...rest } = props;

    return (
        <button
            className={className ?? "flex items-center justify-center w-full h-12 rounded-lg bg-redAccent disabled:bg-redAccentDisabled"}
            onClick={onClick}
            {...rest}>
            {children}
        </button>
    );
}

export default Button;