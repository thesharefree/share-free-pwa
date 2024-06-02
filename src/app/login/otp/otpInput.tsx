const OtpInput = (props: any) => {
    const { numInputs, inputStyle, ...rest } = props;

    return <>
        {(new Array(numInputs)).map(a => (<div key={a}>
            <input >abs</input>
        </div>))}
    </>;
}

export default OtpInput;