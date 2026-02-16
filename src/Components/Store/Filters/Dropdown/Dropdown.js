import './_dropdown.scss';

import Overlay from '../../../Overlay/Overlay';

import { useState } from 'react';

function Dropdown({value, options, onChange}) {
    const [isOpen, setIsOpen] = useState(false)

    const toggleOpen = (e) => {setIsOpen(prev => !prev)}
    const handleChange = (newValue) => {
        if (typeof(onChange) === "function") {
            onChange(newValue);
            toggleOpen();
        }
    }

    return (
        <div className='dropdown'>
            <div className='dropdown__value' onClick={toggleOpen}>{options.find(option => String(option.value) === String(value)).label}</div> {/*check out option JSON.stringify(arr1) === JSON.stringify(arr2) */}

            {(isOpen) && 
            <>
                <Overlay onClick={toggleOpen} opacity={0.01}/>
                <ul className='dropdown__menu'>
                    {options.map((option, i) => {
                        let className = "dropdown__option";
                        if (option.value === value) {className += " dropdown__option--selected"}

                        return <li key={i} className={className} onClick={() => {handleChange(option.value)}} value={option.value}>{option.label}</li>
                    }
                    )}
                
                </ul>
                </>
            }
        </div>
    )
}

export default Dropdown;