import './_cart-overlay.scss';

function CartOverlay(onHide) {
    const handleClick = (e) => {
        if (typeof(onHide) === "function") {
            onHide();
        }
    }
    return <div onClick={handleClick} className='cart-overlay'></div>
}

export default CartOverlay;