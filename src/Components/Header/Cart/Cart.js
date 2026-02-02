import './_cart.scss';
import { useState, useEffect } from 'react'; 

import CartButton from './CartButton/CartButton';
import CartCount from './CartCount/CartCount';
import CartOverlay from './CartOverlay/CartOverlay';

function Cart() {
    const [cart, setCart] = useState(false);
    return (
        <div className='cart'>
            <CartButton />
            {(cart && cart.length > 0) && <CartCount count={32} />}
            {(cart && cart.length > 0) && <CartOverlay />}
        </div>
    )
}

export default Cart;