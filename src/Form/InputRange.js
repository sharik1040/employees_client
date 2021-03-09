import '../style.css';

const InputRange = ({label, initialValue, id, labelClassName, inputClassName, onValueChange}) => {
    const handleValueChange = (newValue) => {
        onValueChange(newValue);
    }
    
    return (
        <div className="input-wrapper">
            <label htmlFor={id}
                   className={labelClassName}>{label}</label>
            <input type="number"
                   id="salary"
                   min="0"
                   max="10000"
                   value={initialValue}
                   className={inputClassName}
                   onChange={e => handleValueChange(e.target.value)}/>
        </div>
    )
}

export default InputRange;