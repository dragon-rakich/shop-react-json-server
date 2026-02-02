import Cart from '../Cart';
import './_cart-count.scss';

function CartCount({count}) {
    return (
        <p className="cart-count">{count}</p>
    )
}

export default CartCount;