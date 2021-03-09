import '../style.css';

const InputDate = ({label, initialValue, id, labelClassName, inputClassName, onValueChange}) => {
    const handleValueChange = (newValue) => {
        onValueChange(newValue);
    }

    const formatDate = (initialValue) => {
        // YYYY-MM-DD
        let splittedInitValue = initialValue && initialValue.split(".");
        return splittedInitValue && `${splittedInitValue[2]}-${splittedInitValue[1]}-${splittedInitValue[0]}`;
    }

    return (
        <div className="input-wrapper date">
            <label htmlFor={id}
                   className={labelClassName}>{label}</label>
            <input type="date" 
                   id={id}
                   className={inputClassName}
                   value={formatDate(initialValue)}
                   onChange={(e) => handleValueChange(e.target.value)}/>
        </div>
    )
}

export default InputDate;