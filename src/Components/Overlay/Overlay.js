import './_overlay.scss';

function Overlay({onClick, opacity}) {
    const handleClick = (e) => {
        if (typeof(onClick) === "function") {
            onClick();
        }
    }
    return <div onClick={handleClick} className="overlay" style={{opacity}}></div>
}

export default Overlay;