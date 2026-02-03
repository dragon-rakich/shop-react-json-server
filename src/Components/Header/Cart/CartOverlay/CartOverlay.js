import './_cart-overlay.scss';

function CartOverlay({onClick}) {
    const handleClick = (e) => {
        if (typeof(onClick) === "function") {
            onClick();
        }
    }
    return <div onClick={handleClick} className='cart-overlay'></div>
}

export default CartOverlay;