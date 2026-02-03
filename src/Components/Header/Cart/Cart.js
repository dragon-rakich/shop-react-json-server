import './_cart.scss';
import { useState, useEffect } from 'react'; 

import CartButton from './CartButton/CartButton';
import CartCount from './CartCount/CartCount';
import CartOverlay from './CartOverlay/CartOverlay';
import CartPanel from './CartPanel/CartPanel';

function Cart() {
    const [cart, setCart] = useState([]);
    const [isShowing, setIsShowing] = useState(false);

    const toggleCart = (e) => {
        setIsShowing(prev => !prev);
    }
    return (
        <div className='cart'>
            <CartButton onClick={toggleCart} />
            {(cart && cart.length > 0) && <CartCount cart={cart} />}
            {(isShowing) && <CartOverlay onClick={toggleCart} />}
            <CartPanel cart={cart} />
        </div>
    )
}

export default Cart;