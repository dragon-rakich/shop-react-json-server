import './_dropdown.scss';

import { useState } from 'react';

function Dropdown({value, options, onChange}) {
    const [isOpen, setIsOpen] = useState(false)

    const toggleOpen = (e) => {setIsOpen(prev => !prev)}
    const handleChange = (e) => {
        if (typeof(onChange) === "function") {
            onChange(e.target.value);
            toggleOpen();
        }
    }

    return (
        <div className='dropdown'>
            <div className='dropdown__value' onClick={toggleOpen}>{value}</div>

            {(isOpen) && 
            <ul className='dropdown__menu'>
                {options.map((option, i) => {
                    let className = "dropdown__option";
                    if (option === value) {className += " dropdown__option--selected"}

                    return <li key={i} className={className} onClick={handleChange} value={value}>{option}</li>
                }
                )}
            
            </ul>
            }
        </div>
    )
}

export default Dropdown;