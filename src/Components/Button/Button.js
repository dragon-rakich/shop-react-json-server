import React from "react";
import './_btn.scss';

function Button({label, type, size, onClick, isSubmit, isDisabled}) {
    let className = "btn" + " btn--" + type + " btn--" + size;
    if (isDisabled) {className += " btn--disabled"}

    const handleClick = (e) => {
        console.log("Button click");
        if (typeof(onClick) === "function") {
            onClick();
        }
    }
    return (
        <button onClick={handleClick} disabled={isDisabled} className={className} type={(isSubmit) ? "submit":"button"}>{label}</button>
    )
}

export default Button;