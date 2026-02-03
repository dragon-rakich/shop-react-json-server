import './_cart-count.scss';

function CartCount({cart}) {
    const count = cart.reduce((sum, cartItem) => sum + (Number(cartItem.count)), 0);
    return (
        <p className="cart-count">{count}</p>
    )
}

export default CartCount;