import './_checkbox.scss';

function Checkbox({label, checked, onChange}) {
    let className = "checkbox__custom";
    if (checked) {className += " checkbox__custom--checked"}
    const handleChange = (e) => {
        if (typeof(onChange) === "function") {
            onChange(!checked);
        }
    }
    return (
        <label className='checkbox'>
            <input className="checkbox__native" type='checkbox' checked={checked} onChange={handleChange}/>
            <div className={className} />
            <p className='checkbox__label'>{label}</p>
        </label>
    )
}

export default Checkbox;