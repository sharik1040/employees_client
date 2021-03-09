import '../style.css';

const InputText = ({label, initialValue, id, placeholder, labelClassName, inputClassName, onValueChange, pattern}) => {

    const handleValueChange = (newValue) => {
        onValueChange(newValue);
    }

    return (
        <div className="input-wrapper">
            <label htmlFor={id}
                   className={labelClassName}>{label}</label>
            <input type="text"
                   id={id}
                   value={initialValue}
                   placeholder={placeholder}
                   className={inputClassName}
                   onChange={(e) => handleValueChange(e.target.value)}
                   pattern={pattern}/>
        </div>
    )
}

export default InputText;