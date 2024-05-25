const Button = (props: any) => {
    const { className, onClick, children } = props;

    return (
        <button className={className ?? "flex items-center justify-center w-full h-12 rounded-lg bg-redAccent"} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;