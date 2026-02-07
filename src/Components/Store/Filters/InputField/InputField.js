import './_input-field.scss';

function InputField({type, value, onChange, placeholder}) {
    const handleChange = (e) => {
        if (typeof(onChange) === "function") {
            onChange(e.target.value);
        }
    }
    return <input className='input-field' onChange={handleChange} value={value} placeholder={placeholder} type={type} />
}

export default InputField;