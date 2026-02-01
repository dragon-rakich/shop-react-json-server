import './_cartButton.scss';

function CartButton(onClick) {

    const handleClick = (e) => {
        if (typeof(onClick) === "function") {
            onClick();
        }
    }
    return <button onClick={handleClick} className="cartButton" />
}

export default CartButton;