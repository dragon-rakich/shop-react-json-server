import './_dropdown.scss';

import { useState } from 'react';

function Dropdown({name, selection, options, onSelect}) {
    const [isOpen, setIsOpen] = useState(false)

    const toggleOpen = (e) => {setIsOpen(prev => !prev)}
    const handleSelecting = (e) => {
        if (typeof(onSelect) === "function") {
            onSelect(name, e.target.value);
            toggleOpen();
        }
    }

    return (
        <div className='dropdown'>
            <div className='dropdown__selection' onClick={toggleOpen}>{selection}</div>

            {(isOpen) && 
            <ul className='dropdown__menu'>
                {options.map((option, i) => {
                    let className = "dropdown__option";
                    if (option === selection) {className += " dropdown__option--selected"}

                    return <li key={i} className={className} onClick={handleSelecting} value={option}>{option}</li>
                }
                )}
            
            </ul>
            }
        </div>
    )
}

export default Dropdown;