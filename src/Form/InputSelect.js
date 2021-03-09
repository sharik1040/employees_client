import '../style.css';

const InputSelect = ({label, initialValue, id, options, labelClassName, inputClassName, onValueChange}) => {
    const handleValueChange = (newValue) => {
        onValueChange(newValue);
    }
    
    return (
        <div className="input-wrapper">
            <label htmlFor={id}
                   className={labelClassName}>{label}</label>
            <select id={id}
                    className={inputClassName}
                    value={initialValue}
                    onChange={e => handleValueChange(e.target.value)}>
                {
                    options.map(item => {
                        const {id, value} = item;
                        return <option value={value}
                            key={id}>{value}</option>                 
                    })
                }
            </select>
        </div>
    )
}

export default InputSelect;