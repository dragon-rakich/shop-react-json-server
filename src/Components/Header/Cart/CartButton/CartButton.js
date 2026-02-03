import './_cart-button.scss';

function CartButton({onClick}) {

    const handleClick = (e) => {
        if (typeof(onClick) === "function") {
            onClick();
        }
    }
    return <button onClick={handleClick} className="cart-button" />
}

export default CartButton;